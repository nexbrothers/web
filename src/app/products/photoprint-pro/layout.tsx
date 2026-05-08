import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhotoPrint Pro - Moved to Scanvo',
  description:
    'PhotoPrint Pro has been shifted into the Scanvo app. Use Scanvo for passport photo, document, and PDF tools.',
  keywords: [
    'PhotoPrint Pro',
    'Scanvo',
    'photo tools moved to Scanvo',
    'passport photo app',
  ],
  openGraph: {
    title: 'PhotoPrint Pro - Moved to Scanvo',
    description:
      'PhotoPrint Pro is no longer maintained as a separate product page. Its features are now available in Scanvo.',
    url: 'https://nexbrothers.com/products/photoprint-pro',
    type: 'website',
    images: [
      {
        url: '/images/scanvo/hand-scanvo.png',
        width: 1200,
        height: 1400,
        alt: 'Scanvo app',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhotoPrint Pro - Moved to Scanvo',
    description:
      'PhotoPrint Pro has been shifted into the Scanvo app.',
    images: ['/images/scanvo/hand-scanvo.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/photoprint-pro',
  },
};

export default function PhotoPrintProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
