import type { Metadata } from 'next';
import { SoftwareProductJsonLd } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Sign Lock — Your Drawing Is Your Password | NexBrothers',
  description:
    'Sign Lock is the first drawing-based Android app locker. Lock any app with your unique drawing password. Advanced gesture recognition, 12 themes, AES-256 encryption, fully offline. Built by NexBrothers.',
  keywords: [
    'app locker',
    'drawing password',
    'gesture recognition',
    'android security',
    'app lock',
    'privacy app',
    'signature lock',
    'drawing authentication',
    'mobile security',
    'android privacy',
    'app protector',
    'nexbrothers',
    'sign lock',
  ],
  openGraph: {
    title: 'Sign Lock — Lock Your Apps With a Drawing',
    description:
      'Your signature becomes your password. Sign Lock uses advanced gesture recognition to let you lock any Android app with a unique drawing. 12 themes, custom wallpapers, AES-256 encryption. Zero data leaves your device.',
    url: 'https://nexbrothers.com/products/signlock',
    type: 'website',
    images: [
      {
        url: '/images/signlock-og.png',
        width: 1200,
        height: 630,
        alt: 'Sign Lock - Your Drawing Is Your Password',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Lock — Lock Your Apps With a Drawing',
    description:
      'Your signature becomes your password. Sign Lock uses advanced gesture recognition to lock any Android app with a unique drawing. 12 themes, AES-256 encryption.',
    images: ['/images/signlock-og.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/signlock',
  },
};

export default function SignLockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductJsonLd
        name="Sign Lock"
        description="The first drawing-based Android app locker. Lock any app with your unique drawing password. Advanced gesture recognition, 12 themes, AES-256 encryption, fully offline."
        url="https://nexbrothers.com/products/signlock"
        imageUrl="https://nexbrothers.com/images/signlock-og.png"
        applicationCategory="SecurityApplication"
        operatingSystem="Android"
      />
      {children}
    </>
  );
}
