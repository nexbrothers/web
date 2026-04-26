#!/bin/bash
set -e

BUCKET="nexbrothers.com"
CF_DISTRIBUTION_ID="E1D5279WU60BCV"

echo "🔨 Building..."
npm run build

echo "🗑️  Clearing s3://$BUCKET ..."
aws s3 rm s3://$BUCKET --recursive

echo "📦 Uploading static assets (long cache)..."
aws s3 sync out/ s3://$BUCKET \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.txt" \
  --exclude "*.xml" \
  --exclude "*.json"

echo "📄 Uploading HTML/text files (no cache)..."
aws s3 sync out/ s3://$BUCKET \
  --cache-control "no-cache, no-store, must-revalidate" \
  --include "*.html" \
  --include "*.txt" \
  --include "*.xml" \
  --include "*.json"

if [ -n "$CF_DISTRIBUTION_ID" ]; then
  echo "⚡ Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$CF_DISTRIBUTION_ID" \
    --paths "/*"
fi

echo "✅ Deployed successfully to s3://$BUCKET"
