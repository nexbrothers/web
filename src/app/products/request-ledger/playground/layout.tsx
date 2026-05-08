import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'request-ledger Playground',
  description:
    'Interactive playground for testing request-ledger behavior and queue processing.',
  alternates: {
    canonical: 'https://nexbrothers.com/products/request-ledger/playground',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RequestLedgerPlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
