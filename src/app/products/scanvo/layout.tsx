import type { Metadata } from 'next';
import { SoftwareProductJsonLd } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Scanvo - All-in-One PDF Scanner',
  description:
    'Scanvo is an all-in-one PDF scanner for Android. Scan documents, merge PDFs, compress files, convert PDF to JPG, sign, protect, and export offline.',
  keywords: [
    'Scanvo',
    'PDF scanner app',
    'document scanner app',
    'merge PDF',
    'compress PDF',
    'PDF to JPG',
    'JPG to PDF',
    'scan documents offline',
    'Android scanner app',
  ],
  openGraph: {
    title: 'Scanvo - All-in-One PDF Scanner',
    description:
      'Scan, enhance, merge, compress, convert, and export documents with Scanvo. Offline-first PDF tools for Android.',
    url: 'https://nexbrothers.com/products/scanvo',
    type: 'website',
    images: [
      {
        url: '/images/scanvo/hand-scanvo.png',
        width: 1200,
        height: 1400,
        alt: 'Scanvo all-in-one PDF scanner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scanvo - All-in-One PDF Scanner',
    description:
      'Offline-first Android PDF scanner with merge, compress, convert, sign, and export tools.',
    images: ['/images/scanvo/hand-scanvo.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/scanvo',
  },
};

export default function ScanvoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductJsonLd
        name="Scanvo"
        description="Scanvo is an all-in-one PDF scanner and document toolkit for Android with offline scanning, PDF export, merge, compress, convert, sign, and protect tools."
        url="https://nexbrothers.com/products/scanvo"
        imageUrl="https://nexbrothers.com/images/scanvo/hand-scanvo.png"
        applicationCategory="BusinessApplication"
        operatingSystem="Android"
      />
      {children}
    </>
  );
}
