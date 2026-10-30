import type { Metadata } from "next";
import { Bricolage_Grotesque, Onest, JetBrains_Mono } from "next/font/google";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import "./globals.css";

const onest = Onest({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://waura.nexbrothers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Waura: Take the W on Screen Time | Aura-Based Intentional Phone Use",
  description:
    "Your phone time has an aura. Waura turns intentional phone use into an aura score from 0 to 1000. Focus builds it. Limits protect it. 100% private, no internet permission.",
  keywords: [
    "screen time",
    "aura score",
    "digital wellbeing",
    "focus timer",
    "phone addiction",
    "app limits",
    "private screen time app",
    "Waura",
    "NexBrothers",
    "Android focus app",
    "offline screen time tracker",
  ],
  openGraph: {
    title: "Waura: Take the W on Screen Time",
    description:
      "Transform phone habits into an aura score (0-1000). Focus sessions add aura, limits protect it. Zero internet permissions, 100% private on-device.",
    url: baseUrl,
    siteName: "Waura",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/waura/store/waura-feature-1024x500.png",
        width: 1024,
        height: 500,
        alt: "Waura: Take the W on Screen Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waura: Take the W on Screen Time",
    description:
      "Your phone time has an aura. Built to keep your data completely on your phone. No accounts, no ads, no internet permission.",
    images: ["/images/waura/store/waura-feature-1024x500.png"],
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
      { url: "/images/waura/store/waura-icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/images/waura/store/waura-icon-512.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/images/waura/store/waura-icon-512.png", sizes: "512x512", type: "image/png" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Waura",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android 8.0 and up",
  description:
    "Waura turns intentional phone use into an aura score from 0 to 1000. Focus builds it, limits protect it. 100% offline, zero internet permission.",
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
  const customNavLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Five Levels", href: "/#five-levels" },
    { label: "Inside the App", href: "/#inside-waura" },
    { label: "Privacy", href: "/#privacy" },
    { label: "FAQ", href: "/#faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-and-conditions" },
    { label: "Product Details", href: "/product-details" },
  ];

  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${onest.variable} ${bricolage.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Header
          productName="Waura"
          logoSrc="/images/waura/store/waura-icon-512.png"
          navLinks={customNavLinks}
          showThemeToggle={false}
        />
        <main className="flex-1">{children}</main>
        <Footer productName="Waura" legalLinks={legalLinks} />
      </body>
    </html>
  );
}
