import { Container, FeatureCard, Card } from "@repo/ui/ui";
import { Features, Stats, CTA, Hero } from "@repo/ui/sections";
import { Scan, FileText, Zap, Shield, Smartphone, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import Link from "next/link";
import { Button } from "@repo/ui/ui";

export default function ScanvoHome() {
  const features = [
    {
      icon: <Scan className="w-8 h-8 text-[#00D4FF]" />,
      title: "Smart Edge Detection",
      description:
        "Our AI instantly identifies document boundaries, automatically cropping and correcting perspective in milliseconds.",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#7C3AED]" />,
      title: "Batch Scanning",
      description:
        "Scan multiple pages in rapid succession and let Scanvo automatically compile them into a single, organized PDF.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00D4FF]" />,
      title: "Lightning Fast",
      description:
        "Experience zero latency. Scanvo processes everything offline first on your device for maximum speed and privacy.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#7C3AED]" />,
      title: "Privacy First",
      description:
        "Your documents are yours. We do not upload your scans to the cloud unless you explicitly choose to sync them.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#00D4FF]" />,
      title: "ID Card Mode",
      description:
        "Specialized mode for scanning both sides of ID cards and passports, aligning them perfectly onto a single page.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <Hero
        title={
          <>
            Scan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]">Smarter.</span><br />
            Work Faster.
          </>
        }
        subtitle="Empower your document management with AI-driven, lightning-fast scanning built for professionals. High-quality PDFs from your pocket."
        primaryCTA={{ label: "Download for Free", href: "#" }}
        secondaryCTA={{ label: "Watch Demo", href: "#" }}
      />

      {/* Features Section */}
      <Features
        title="Everything you need for perfect scans"
        subtitle="We packed Scanvo with intelligent features so you spend less time adjusting and more time doing what matters."
        features={features}
        columns={3}
      />

      {/* Deep Dive Section */}
      <section className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
                The scanner that thinks for you
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Say goodbye to crooked documents and bad lighting. Scanvo's advanced
                image processing algorithms automatically enhance text legibility,
                remove shadows, and fix colors.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Automatic perspective correction",
                  "Shadow removal and color enhancement",
                  "OCR text recognition",
                  "Direct export to multiple formats",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-[var(--text-secondary)]">
                    <Zap className="w-5 h-5 mr-3 text-[#00D4FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 to-[#7C3AED]/20 rounded-3xl blur-3xl" />
              <Card className="relative bg-[var(--card-bg)] border-[var(--border-light)] p-8">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] flex items-center justify-center border border-white/10 overflow-hidden relative">
                    <Scan className="w-24 h-24 text-[#00D4FF]/50 absolute" />
                    {/* Simulated document scan animation */}
                    <div className="absolute inset-x-0 h-1 bg-[#00D4FF] shadow-[0_0_20px_#00D4FF] animate-[scan_2s_ease-in-out_infinite]" />
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Stats 
        title="Trusted by Professionals"
        subtitle="Our AI document scanner delivers performance that traditional apps can't match."
        stats={[
          { label: "Scans Processed", value: 10, suffix: "M+" },
          { label: "Edge Detection Accuracy", value: 99.9, suffix: "%" },
          { label: "Cloud Latency", value: 0, suffix: "ms" },
          { label: "User Rating", value: 4.9, suffix: "/5" }
        ]}
      />

      {/* CTA Section */}
      <CTA 
        title="Ready to Digitize Your Life?"
        description="Join thousands of users who have switched to Scanvo for their document management needs."
        primaryCTA={{ label: "Download Scanvo", href: "#" }}
      />
    </main>
  );
}
