import type { Metadata } from 'next';
import { SoftwareProductJsonLd } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Job Automator - Automated Naukri Job Search and Apply Tool',
  description:
    'Job Automator helps automate Naukri job discovery and applications with filters, logs, and a local-first workflow.',
  keywords: [
    'Job Automator',
    'Naukri automation',
    'job apply automation',
    'job search automation',
    'NexBrothers',
  ],
  openGraph: {
    title: 'Job Automator - Automated Naukri Job Search and Apply Tool',
    description:
      'Automate Naukri job search and applications with local-first controls, filters, and detailed activity logs.',
    url: 'https://nexbrothers.com/products/job-automator',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Job Automator by NexBrothers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Automator - Automated Naukri Job Search and Apply Tool',
    description:
      'Automate job discovery and applications on Naukri with filters, logs, and local-first execution.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nexbrothers.com/products/job-automator',
  },
};

export default function JobAutomatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SoftwareProductJsonLd
        name="Job Automator"
        description="Automate job discovery and applications on Naukri with filters, logs, and local-first execution."
        url="https://nexbrothers.com/products/job-automator"
        imageUrl="https://nexbrothers.com/og-image.png"
        applicationCategory="BusinessApplication"
        operatingSystem="Desktop, Web"
      />
      {children}
    </>
  );
}
