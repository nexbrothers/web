import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";

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
  title: {
    default: "NexBrothers | Building the Future of Technology",
    template: "%s | NexBrothers",
  },
  description:
    "NexBrothers is a technology company creating innovative apps and digital solutions. Discover Playro, our cricket tournament management app.",
  keywords: [
    "technology company",
    "software development",
    "mobile apps",
    "cricket app",
    "tournament management",
    "NexBrothers",
    "Playro",
  ],
  authors: [{ name: "NexBrothers" }],
  creator: "NexBrothers",
  openGraph: {
    title: "NexBrothers | Building the Future of Technology",
    description:
      "NexBrothers is a technology company creating innovative apps and digital solutions.",
    url: "https://nexbrothers.com",
    siteName: "NexBrothers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexBrothers | Building the Future of Technology",
    description:
      "NexBrothers is a technology company creating innovative apps and digital solutions.",
    creator: "@nexbrothers",
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
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
