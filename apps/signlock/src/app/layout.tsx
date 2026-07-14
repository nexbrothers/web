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
  title: "SignLock - Drawing-Based App Lock for Android",
  description: "SignLock is a unique drawing-based app locker for Android. Lock your apps with a personal signature — more secure than PINs and patterns. Fully offline, encrypted on-device.",
  keywords: ["app lock", "drawing lock", "signature lock", "android security", "privacy", "app locker", "pattern lock"],
  openGraph: {
    title: "SignLock - Drawing-Based App Lock for Android",
    description: "Lock your apps with your signature. More secure than PINs and patterns. Fully offline.",
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
            productName="SignLock"
            logoSrc="/logo.png"
            navLinks={[
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Features", href: "/#features" },
              { label: "Themes", href: "/#themes" },
              { label: "Security", href: "/#security" },
            ]}
          />
          <main className="flex-1">{children}</main>
          <Footer productName="SignLock" />
        </ThemeProvider>
      </body>
    </html>
  );
}
