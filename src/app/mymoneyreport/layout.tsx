import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Money Report - Take Control of Your Finances',
  description:
    'My Money Report is a 100% offline personal finance app that helps you track expenses, manage budgets, set financial goals, and understand your spending with automatic SMS transaction tracking.',
  keywords: [
    'personal finance',
    'expense tracker',
    'budget app',
    'financial goals',
    'money management',
    'offline finance app',
    'SMS transaction tracking',
    'spending tracker',
    'My Money Report',
    'income expense tracker',
  ],
  openGraph: {
    title: 'My Money Report - Take Control of Your Finances',
    description:
      'Track expenses, manage budgets, set financial goals, and understand your spending — all 100% offline.',
    url: 'https://nexbrothers.com/mymoneyreport',
    images: [
      {
        url: '/images/my-money-report-logo.png',
        width: 1024,
        height: 1024,
        alt: 'My Money Report',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Money Report - Take Control of Your Finances',
    description:
      'Track expenses, manage budgets, set financial goals, and understand your spending — all 100% offline.',
    images: ['/images/my-money-report-logo.png'],
  },
};

export default function MyMoneyReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
