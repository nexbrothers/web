import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexbrothers.com"),
  title: {
    default: "NexBrothers | Building the Future of Technology",
    template: "%s | NexBrothers",
  },
  description:
    "NexBrothers is a technology company building innovative apps and digital solutions. Explore Playro for cricket tournament management and request-ledger for reliable HTTP request handling.",
  keywords: [
    "technology company",
    "software development",
    "mobile apps",
    "cricket app",
    "tournament management",
    "NexBrothers",
    "Playro",
    "request-ledger",
    "web development",
    "digital solutions",
  ],
  authors: [{ name: "NexBrothers", url: "https://nexbrothers.com" }],
  creator: "NexBrothers",
<<<<<<< Updated upstream
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
=======
  publisher: "NexBrothers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
>>>>>>> Stashed changes
  },
  openGraph: {
    title: "NexBrothers | Building the Future of Technology",
    description:
      "Innovative apps and digital solutions that transform ideas into impactful experiences. Discover Playro, request-ledger, and more.",
    url: "https://nexbrothers.com",
    siteName: "NexBrothers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexBrothers - Building the Future of Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexBrothers | Building the Future of Technology",
    description:
      "Innovative apps and digital solutions that transform ideas into impactful experiences.",
    creator: "@nexbrothers",
    site: "@nexbrothers",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexbrothers.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ background: "var(--background)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
