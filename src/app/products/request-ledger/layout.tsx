import type { Metadata } from 'next';
import { SoftwareProductJsonLd } from '@/components/seo';

export const metadata: Metadata = {
  title: 'request-ledger - Offline-First HTTP Request Queue for Web Apps',
  description:
    'request-ledger is a durable, client-side HTTP request ledger for web apps on unreliable networks with offline persistence, auto-replay, and zero dependencies.',
  keywords: [
    'request-ledger',
    'offline-first web app',
    'HTTP request queue',
    'IndexedDB request persistence',
    'auto replay requests',
  ],
  openGraph: {
    title: 'request-ledger - Offline-First HTTP Request Queue for Web Apps',
    description:
      'Persist offline requests, auto-replay on reconnection, and keep critical web actions durable with request-ledger.',
    url: 'https://nexbrothers.com/products/request-ledger',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'request-ledger by NexBrothers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'request-ledger - Offline-First HTTP Request Queue for Web Apps',
    description:
      'Client-side HTTP request durability for unreliable networks with offline persistence and auto-replay.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/request-ledger',
  },
};

export default function RequestLedgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductJsonLd
        name="request-ledger"
        description="A durable, client-side HTTP request ledger for web apps on unreliable networks with offline persistence, auto-replay, and zero dependencies."
        url="https://nexbrothers.com/products/request-ledger"
        imageUrl="https://nexbrothers.com/og-image.png"
        applicationCategory="DeveloperApplication"
        operatingSystem="Web"
      />
      {children}
    </>
  );
}
