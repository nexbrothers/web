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

const baseUrl = "https://scanvo.nexbrothers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Scanvo: PDF Scanner & Editor",
  description:
    "Transform your phone into a powerful document scanner with Scanvo. AI-powered edge detection, OCR, PDF editing, and 20+ document tools. 100% private on-device processing.",
  keywords: [
    "document scanner",
    "PDF maker",
    "scan to PDF",
    "OCR scanner",
    "document digitizer",
    "Scanvo",
    "NexBrothers",
    "Android scanner app",
    "PDF editor",
    "document organizer",
  ],
  openGraph: {
    title: "Scanvo: PDF Scanner & Editor",
    description:
      "Scan. Organize. Export. Transform your phone into a powerful document scanner with AI-powered edge detection, OCR, and 20+ document tools.",
    url: baseUrl,
    siteName: "Scanvo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scanvo: PDF Scanner & Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanvo: PDF Scanner & Editor",
    description:
      "Scan. Organize. Export. Transform your phone into a powerful document scanner with AI-powered edge detection, OCR, and 20+ document tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/images/scanvo-logo.png", sizes: "any", type: "image/png" },
      { url: "/images/scanvo-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/images/scanvo-logo.png", sizes: "any", type: "image/png" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scanvo",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Android",
  description:
    "AI-powered document scanner with smart edge detection, OCR, PDF editing, and 20+ document tools. 100% private on-device processing.",
  url: baseUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "NexBrothers",
    url: "https://nexbrothers.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"}document.documentElement.classList.add(t)})()`
        }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
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
