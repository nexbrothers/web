import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for S3 hosting
  transpilePackages: ["@repo/ui", "@repo/utils"],
};

export default nextConfig;
