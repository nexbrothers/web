import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import { ThemeProvider } from "@repo/ui/theme";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "My Money Report - Take Control of Your Finances",
  description: "My Money Report is a 100% offline personal finance app that helps you track expenses, manage budgets, set financial goals, and understand your spending with automatic SMS transaction tracking.",
  keywords: [
    "personal finance", "expense tracker", "budget app", "financial goals",
    "money management", "offline finance app", "SMS transaction tracking",
    "spending tracker", "My Money Report", "income expense tracker",
    "offline budget", "finance tracker India",
  ],
  openGraph: {
    title: "My Money Report - Take Control of Your Finances",
    description: "Track expenses, manage budgets, set financial goals, and understand your spending — all 100% offline. Your data never leaves your device.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          background: 'var(--background)',
          color: 'var(--text-primary)',
        }}
      >
        <ThemeProvider>
          <Header
            productName="My Money Report"
            logoSrc="/images/logo.png"
            navLinks={[
              { label: "Features", href: "/#features" },
              { label: "SMS Tracking", href: "/#sms-tracking" },
              { label: "Budgets & Goals", href: "/#budgets-goals" },
              { label: "Details", href: "/product-details" },
              { label: "FAQ", href: "/#faq" },
              { label: "Privacy", href: "/#privacy" },
            ]}
          />
          <main className="flex-1">{children}</main>
          <Footer productName="My Money Report" />
        </ThemeProvider>
      </body>
    </html>
  );
}
