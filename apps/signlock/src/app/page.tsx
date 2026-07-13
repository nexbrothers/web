import { Container, FeatureCard, Card } from "@repo/ui/ui";
import { Features, Stats, CTA, Hero } from "@repo/ui/sections";
import { Lock, Fingerprint, PenTool, WifiOff, FileCheck, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import Link from "next/link";
import { Button } from "@repo/ui/ui";

export default function SignlockHome() {
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-[#00D4FF]" />,
      title: "Zero-Knowledge Encryption",
      description:
        "Your signatures are encrypted using AES-256 before leaving your device. We can't access your data, and neither can anyone else.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#7C3AED]" />,
      title: "Drawing-Based Authentication",
      description:
        "Signlock verifies the biometric velocity and pressure of your signature drawing to prevent forgery.",
    },
    {
      icon: <WifiOff className="w-8 h-8 text-[#00D4FF]" />,
      title: "Offline Vault",
      description:
        "Access, manage, and apply your signatures to documents entirely offline. Cloud sync is strictly optional.",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#7C3AED]" />,
      title: "Audit Trails",
      description:
        "Generate cryptographic certificates of signing that are independently verifiable and legally binding.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-[#00D4FF]" />,
      title: "Biometric Integration",
      description:
        "Lock your signature vault behind FaceID, TouchID, or Android Biometrics for an extra layer of hardware security.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <Hero
        title={
          <>
            Your Signature,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]">Cryptographically Secured.</span>
          </>
        }
        subtitle="Signlock provides military-grade encryption for your digital signatures. Sign documents with absolute confidence and legal certainty."
        primaryCTA={{ label: "Create Your Vault", href: "#" }}
        secondaryCTA={{ label: "Read Whitepaper", href: "#" }}
      />

      {/* Features Section */}
      <Features
        title="Uncompromising Security"
        subtitle="We built Signlock from the ground up to protect your most sensitive legal identity—your signature."
        features={features}
        columns={3}
      />

      {/* Deep Dive Section */}
      <section className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 rounded-3xl blur-3xl" />
              <Card className="relative bg-[var(--card-bg)] border-[var(--border-light)] p-8">
                <div className="aspect-[4/3] rounded-xl bg-[#030712] flex items-center justify-center border border-[#7C3AED]/20 overflow-hidden relative">
                    <ShieldCheck className="w-32 h-32 text-[#7C3AED]/50 absolute" />
                    {/* Simulated encryption grid */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/20 to-transparent animate-pulse" />
                </div>
              </Card>
            </FadeIn>
            
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
                The vault for your digital identity
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                With traditional e-signatures, you are trusting a third-party server. 
                Signlock reverses this model. Your signature is encrypted locally, stored locally, 
                and only applied when you authorize it cryptographically.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "AES-256 Bit Local Encryption",
                  "No centralized signature database",
                  "Verifiable proof-of-signing",
                  "Cross-platform synchronization via E2EE",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-[var(--text-secondary)]">
                    <ShieldCheck className="w-5 h-5 mr-3 text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Stats 
        title="Industry Leading Security"
        subtitle="We provide cryptographic guarantees, not just promises."
        stats={[
          { label: "Bit Encryption", value: 256, suffix: "-AES" },
          { label: "Forgery Detection", value: 99.9, suffix: "%" },
          { label: "Audit Trails", value: 100, suffix: "%" },
          { label: "Local Processing", value: 100, suffix: "%" }
        ]}
      />

      {/* CTA Section */}
      <CTA 
        title="Take Control of Your Signature"
        description="Create your secure digital identity vault today. No cloud lock-in, uncompromising privacy."
        primaryCTA={{ label: "Create Your Vault", href: "#" }}
      />
    </main>
  );
}
