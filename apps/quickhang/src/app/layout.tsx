import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import { SITE_URL } from "../lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  display: "swap",
});

const title = "QuickHang: Quick App Launcher | Pull down to open your favourite apps";
const description =
  "A cartoon character hangs over any app. Pull him down, slide onto one of your five favourite apps and let go to open it. Free, no ads, no internet.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "quick app launcher",
    "one-handed shortcuts",
    "pull-down app shortcuts",
    "flashlight shortcut",
    "Android overlay launcher",
    "QuickHang",
    "NexBrothers",
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "QuickHang: Quick App Launcher",
    description: "Pull the character down and your favourite apps appear.",
    url: SITE_URL,
    siteName: "QuickHang",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuickHang: Your apps, one pull away" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickHang: Quick App Launcher",
    description: "Pull the character down and your favourite apps appear.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF7EF" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1613" },
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy-policy" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-and-conditions" },
  { label: "Support", href: "/support" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header productName="QuickHang" logoSrc="/icon.svg" navLinks={navLinks} showThemeToggle={false} />
        <main id="main" className="flex-1">{children}</main>
        <Footer productName="QuickHang" legalLinks={legalLinks} />
      </body>
    </html>
  );
}
