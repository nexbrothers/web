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
  title: "Scanvo - Next Generation Scanning",
  description: "Scanvo by NexBrothers provides advanced scanning solutions for modern workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          background: 'var(--background)',
          color: 'var(--text-primary)',
        }}
      >
        <ThemeProvider>
          <Header productName="Scanvo" logoSrc="/images/scanvo-logo.png" />
          <main className="flex-1">{children}</main>
          <Footer productName="Scanvo" />
        </ThemeProvider>
      </body>
    </html>
  );
}
