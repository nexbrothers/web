import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexbrothers.com'),
  title: {
    default: 'NexBrothers | Software built with intent',
    template: '%s | NexBrothers',
  },
  description:
    'NexBrothers builds digital products, applications, and software systems for people and businesses — including Scanvo, Playro, request-ledger, and PhotoPrint Pro.',
  keywords: [
    'technology company',
    'software development',
    'mobile apps',
    'cricket app',
    'tournament management',
    'NexBrothers',
    'Playro',
    'request-ledger',
    'web development',
    'digital solutions',
  ],
  authors: [{ name: 'NexBrothers', url: 'https://nexbrothers.com' }],
  creator: 'NexBrothers',
  manifest: '/favicon_io/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      {
        url: '/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  publisher: 'NexBrothers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NexBrothers | Software built with intent',
    description:
      'NexBrothers builds digital products, applications, and software systems for people and businesses.',
    url: 'https://nexbrothers.com',
    siteName: 'NexBrothers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexBrothers - Software built with intent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexBrothers | Software built with intent',
    description:
      'NexBrothers builds digital products, applications, and software systems for people and businesses.',
    creator: '@nexbrothers',
    site: '@nexbrothers',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nexbrothers.com',
  },
  category: 'technology',
  other: {
    'google-adsense-account': 'ca-pub-9997068042197628',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} antialiased`}
        style={{
          background: 'var(--background)',
          color: 'var(--text-primary)',
        }}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer
          legalLinks={[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
          ]}
        />
      </body>
    </html>
  );
}
