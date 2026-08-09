import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@repo/ui/theme";
import { StoreProvider } from "../store/StoreProvider";
import { ToastHost } from "../components/ui/Toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://store.nexbrothers.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Brothers Store — Trusted Apps. Made by NexBrothers.",
  description:
    "Discover, download, and update secure, fast applications built by NexBrothers — all in one trusted marketplace.",
  keywords: [
    "Brothers Store",
    "NexBrothers",
    "app marketplace",
    "Android apps",
    "Scanvo",
    "SignLock",
  ],
  openGraph: {
    title: "Brothers Store — Trusted Apps. Made by NexBrothers.",
    description:
      "Discover, download, and update secure, fast applications built by NexBrothers.",
    url: baseUrl,
    siteName: "Brothers Store",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brothers Store — Trusted Apps. Made by NexBrothers.",
    description:
      "Discover, download, and update secure, fast applications built by NexBrothers.",
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
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/favicon_io/apple-touch-icon.png" },
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
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme")||"light";document.documentElement.classList.add(t)})()`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <ThemeProvider>
          <StoreProvider>
            {children}
            <ToastHost />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
