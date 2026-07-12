'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, Button, Card } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import {
  Shield,
  Lock,
  Pen,
  KeyRound,
  Palette,
  EyeOff,
  Crown,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
  Download,
  WifiOff,
  Zap,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Gauge,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: <Pen className="w-6 h-6" />,
    title: 'Drawing Authentication',
    description:
      'Your signature becomes your password. A custom $1 gesture recognition engine samples every drawing at 64 points, achieving 95%+ accuracy with bidirectional Chamfer matching.',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Lock Any App',
    description:
      'Protect messaging apps, photo galleries, banking apps, or system settings. Android Accessibility Service monitors foreground changes in real-time across 25+ device brands.',
  },
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: 'Backup PIN',
    description:
      '4 or 6-digit PIN backup with AES-256-GCM encryption. Escalating lockout system (30s → 5min → 15min → 1hr) prevents brute force attacks.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: '12 Premium Themes',
    description:
      'From Classic purple-blue to mesmerizing Particle effects. Each theme has unique canvas backgrounds, stroke styles, and visual effects powered by a custom rendering engine.',
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: 'Privacy Mode',
    description:
      'Drawing stroke fades as you draw — leaving zero visible trace of your password. Perfect for unlocking in public transport or high-surveillance environments.',
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Premium Subscription',
    description:
      'Unlock 5 premium themes and remove all ads. Built on Google Play Billing 7.1.1 with server-side verification and 72-hour offline grace period.',
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: 'Smart Dashboard',
    description:
      'Four organized tabs (Apps, Security, Themes, Settings) give you complete control. Smart status cards alert you when accessibility service is disabled.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Zero-Knowledge Security',
    description:
      'All authentication data stays on-device. AES-256-GCM via hardware-backed Android KeyStore. No servers, no accounts, no cloud sync — ever.',
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: '100% Offline',
    description:
      'Fully offline authentication — zero network required for locking and unlocking apps. Premium features work offline for up to 72 hours past expiry.',
  },
];

const highlights = [
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Performance',
    items: 'Gesture matching in under 50ms · 60fps canvas rendering · Sub-second unlock',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Security',
    items: 'Zero-knowledge on-device architecture · AES-256-GCM via KeyStore · Constant-time PIN comparison',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Reliability',
    items: 'START_STICKY service auto-restart · Self-healing encryption · 25+ device brands tested',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovations',
    items: 'First drawing-based app locker on Android · Privacy fading stroke · Bidirectional Chamfer matching',
  },
];

const steps = [
  {
    number: '01',
    title: 'Install & Choose Apps',
    description:
      'Download from Google Play, enable the Accessibility Service, and select which apps to protect.',
  },
  {
    number: '02',
    title: 'Create Your Drawing',
    description:
      'Draw any shape, signature, or doodle — your unique stroke becomes your password. A 3-step confirmation ensures consistent recognition.',
  },
  {
    number: '03',
    title: 'Protected Daily',
    description:
      'Open a protected app, draw your password, and you\'re in. Under a second with a 1500ms grace period for fluid app switching.',
  },
];

const techStack = [
  { name: 'Kotlin', purpose: 'Primary Language' },
  { name: 'Jetpack Compose + Material3', purpose: 'UI Framework' },
  { name: 'Hilt', purpose: 'Dependency Injection' },
  { name: 'Room + DataStore', purpose: 'Local Storage' },
  { name: 'Google Play Billing 7.1.1', purpose: 'Subscriptions' },
  { name: 'Firebase + Sentry', purpose: 'Analytics & Monitoring' },
  { name: 'Security Crypto', purpose: 'AES-256-GCM Encryption' },
  { name: 'Custom $1 Gesture Engine', purpose: 'Drawing Recognition' },
];

const faqs = [
  {
    question: 'How does Sign Lock recognize my drawing?',
    answer:
      'Sign Lock uses a custom gesture recognition engine based on the $1 recognizer algorithm. Your drawing is sampled at 64 points per stroke, normalized for rotation and translation, and compared against your stored template using bidirectional Chamfer distance matching with angular similarity scoring — achieving 95%+ accuracy while tolerating natural drawing variations.',
  },
  {
    question: 'Is my drawing data stored online?',
    answer:
      'No. All authentication data stays on your device. Drawing templates and PINs are encrypted with AES-256-GCM via Android\'s hardware-backed KeyStore and stored locally. No data ever leaves your device — no accounts, no servers, no cloud sync.',
  },
  {
    question: 'What if someone sees me drawing my password?',
    answer:
      'Privacy Mode transforms your stroke into a fading trail — as your finger moves, the stroke behind it fades away, leaving no visible trace. Plus, your unique drawing is much harder to replicate from observation than a PIN or pattern.',
  },
  {
    question: 'Can I get locked out?',
    answer:
      'Multiple safeguards protect you: a backup PIN (4 or 6-digit) acts as fallback, 3-step drawing confirmation ensures template consistency, self-healing mechanisms detect encryption corruption, and escalating lockout (30s → 5min → 15min → 1hr) prevents brute force.',
  },
  {
    question: 'Is Sign Lock free?',
    answer:
      'Yes, Sign Lock is free with core features including 7 drawing themes and unlimited app locking. A premium subscription unlocks 5 premium themes, removes all ads, and provides priority support. Premium is a lifetime purchase with server-side verification.',
  },
  {
    question: 'What Android devices are supported?',
    answer:
      'Sign Lock works on Android 8.0+ (API 26) and is tested across 25+ brands including Samsung, Xiaomi, Oppo, Vivo, OnePlus, and Google Pixel. Special handling is included for Samsung devices\' battery optimization.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderColor: 'var(--border)' }} className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span
          className="text-lg font-medium"
          style={{ color: 'var(--text-primary)' }}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp style={{ color: 'var(--accent)' }} className="w-5 h-5" />
        ) : (
          <ChevronDown
            style={{ color: 'var(--text-secondary)' }}
            className="w-5 h-5"
          />
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function SignLockPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: '#8A82FF', opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: '#5A6BF2', opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/sign-lock.png"
                    alt="Sign Lock logo"
                    width={56}
                    height={56}
                    className="rounded-2xl"
                  />
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#F59E0B]/20 text-[#F59E0B]">
                    Coming Soon
                  </span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Sign Lock
                </h1>
                <p
                  className="text-2xl font-medium mb-6"
                  style={{ color: '#8A82FF' }}
                >
                  Your Sign. Your Privacy.
                </p>
                <p
                  className="text-lg mb-8"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  The first drawing-based Android app locker. Your signature
                  becomes your password — not because we wanted to be different,
                  but because drawing is the most natural, personal, and secure
                  way to protect what matters.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {[
                    { label: '100% Offline', icon: <WifiOff className="w-3.5 h-3.5" /> },
                    { label: 'AES-256 Encrypted', icon: <Shield className="w-3.5 h-3.5" /> },
                    { label: 'No Data Collected', icon: <EyeOff className="w-3.5 h-3.5" /> },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border"
                      style={{
                        borderColor: '#8A82FF',
                        color: '#8A82FF',
                      }}
                    >
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" disabled className="w-full sm:w-auto cursor-not-allowed opacity-60">
                    <Download className="mr-2 w-5 h-5" />
                    Coming Soon
                  </Button>
                </div>

                <div className="flex items-center gap-4 mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4" />
                    Android 8.0+
                  </span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                  <span>v1.0.31</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                  <span>Free + Premium</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="hidden lg:flex justify-center">
              <div className="relative" style={{ maxWidth: '280px' }}>
                <div
                  className="absolute inset-0 rounded-[2.5rem] blur-3xl"
                  style={{
                    background: 'linear-gradient(to bottom right, #8A82FF, #5A6BF2)',
                    opacity: 0.25,
                  }}
                />
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl p-1"
                  style={{
                    background: 'linear-gradient(to bottom right, #8A82FF, #5A6BF2)',
                  }}
                >
                  <div
                    className="rounded-[2.3rem] overflow-hidden"
                    style={{ backgroundColor: '#090E1A' }}
                  >
                    <Image
                      src="/images/hero.png"
                      alt="Sign Lock app unlock screen"
                      width={280}
                      height={593}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Your Privacy Should Be Personal
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              PINs can be observed. Patterns leave smudge traces. Biometrics can
              be compelled. Sign Lock reimagines authentication with the most
              natural human expression — drawing — creating a password that
              exists only in your mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                'No observation attacks — your drawing is unique and hard to replicate',
                'No smudge traces — drawing strokes don\'t leave meaningful residue',
                'No forced authentication — your drawing exists only in your mind',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: '#8A82FF', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Powerful Features
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Every feature designed to make security feel natural, personal,
              and delightful.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, #8A82FF, #5A6BF2)',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{feature.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background-secondary), var(--background))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              How It Works
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Get protected in three simple steps.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: '#8A82FF', opacity: 0.1 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 right-0 w-1/2 h-0.5"
                      style={{
                        background:
                          'linear-gradient(to right, #8A82FF, transparent)',
                        opacity: 0.2,
                      }}
                    />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture & Security */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Built on a <span style={{ color: '#8A82FF' }}>Security-First</span> Architecture
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Zero-knowledge, offline-first, with enterprise-grade encryption —
              designed from the ground up with privacy as the primary
              constraint.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <Card className="h-full p-8 md:p-10" gradient>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Authentication Flow
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  {[
                    'User Draws',
                    'DrawingEngine',
                    '64-point Resampling',
                    'Normalization',
                    'Bidirectional Matching',
                    'Match Result',
                  ].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span
                        className="px-3 py-1.5 rounded-lg font-medium border"
                        style={{
                          backgroundColor: i % 2 === 0 ? 'rgba(138, 130, 255, 0.1)' : 'rgba(90, 107, 242, 0.1)',
                          borderColor: i % 2 === 0 ? 'rgba(138, 130, 255, 0.3)' : 'rgba(90, 107, 242, 0.3)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight className="w-3 h-3" style={{ color: '#8A82FF' }} />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full p-8 md:p-10" gradient>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Security Layers
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Zero-Knowledge', detail: 'All data stays on-device. No servers, no accounts, no cloud.' },
                    { label: 'AES-256-GCM', detail: 'Hardware-backed encryption via Android KeyStore.' },
                    { label: 'Anti-Tampering', detail: 'ProGuard minification, SHA-256 hashing, constant-time PIN comparison.' },
                    { label: 'Brute Force Protection', detail: 'Escalating lockout: 30s → 5min → 15min → 1hr.' },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--background-card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} />
                      <div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {layer.label}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {layer.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Tech Stack */}
          <FadeIn>
            <div
              className="rounded-2xl border backdrop-blur-xl p-8"
              style={{
                backgroundColor: 'var(--background-card)',
                borderColor: 'var(--border)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6 text-center"
                style={{ color: 'var(--text-primary)' }}
              >
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'var(--background-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div
                      className="text-sm font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tech.name}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {tech.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background-secondary), var(--background))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Project Highlights
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Performance, security, and innovation — the numbers and features
              that set Sign Lock apart.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, #8A82FF, #5A6BF2)',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{item.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.items}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Everything you need to know about Sign Lock.
            </p>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto">
            <div
              className="backdrop-blur-xl border rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--background-card)',
                borderColor: 'var(--border)',
              }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ backgroundColor: '#8A82FF', opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background:
                    'linear-gradient(to bottom right, #8A82FF, #5A6BF2)',
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Secure. Private. Yours.
              </h2>
              <p
                className="text-lg mb-10 max-w-2xl mx-auto"
                style={{ color: 'var(--text-secondary)' }}
              >
                Your signature becomes your password. Download Sign Lock and
                experience the most personal way to protect your privacy.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button size="lg" disabled className="cursor-not-allowed opacity-60">
                  <Download className="mr-2 w-5 h-5" />
                  Coming Soon
                </Button>
              </div>

              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Free to use • AES-256 encrypted • 100% offline • Premium
                subscription available
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
