import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Playro Account',
  description:
    'Request deletion of your Playro account and associated data through the official account deletion page.',
  openGraph: {
    title: 'Delete Playro Account',
    description:
      'Request deletion of your Playro account and associated data through the official account deletion page.',
    url: 'https://nexbrothers.com/playro/delete-account',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Delete Playro Account',
    description:
      'Request deletion of your Playro account and associated data through the official account deletion page.',
  },
  alternates: {
    canonical: 'https://nexbrothers.com/playro/delete-account',
  },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
