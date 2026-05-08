import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'request-ledger Docs',
  description:
    'Documentation for request-ledger, including installation, API usage, examples, and integration guidance for offline-first web apps.',
  openGraph: {
    title: 'request-ledger Docs',
    description:
      'Documentation for request-ledger, including installation, API usage, examples, and integration guidance for offline-first web apps.',
    url: 'https://nexbrothers.com/products/request-ledger/docs',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'request-ledger documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'request-ledger Docs',
    description:
      'Documentation for request-ledger, including installation, API usage, examples, and integration guidance for offline-first web apps.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/request-ledger/docs',
  },
};

export default function RequestLedgerDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
