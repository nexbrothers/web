'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, Button, Card } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import {
  FileText,
  Camera,
  CreditCard,
  Download,
  Layers,
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Smartphone,
  Apple,
  Monitor,
  ScanLine,
  FolderOpen,
  Printer,
  Moon,
  Zap,
  Users,
  Building2,
  GraduationCap,
  Store,
} from 'lucide-react';

const features = [
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: 'Smart Document Scanner',
    description:
      'Scan any document with your camera. Auto edge detection and perspective correction makes every scan look perfect.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'ID Card Mode',
    description:
      'Scan the front and back of ID cards and combine them into a single print-ready sheet automatically.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Batch Scan',
    description:
      'Scan multiple pages in one session and export them all as a single multi-page PDF document.',
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: 'Import from Gallery',
    description:
      'Already have photos? Import directly from your gallery and convert them to clean, cropped documents.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'PDF Export',
    description:
      'Export scanned documents as high-quality PDFs ready to share, email, or print.',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Crop & Rotate',
    description:
      'Fine-tune scans with manual crop controls and rotation (0°, 90°, 180°, 270°) for perfect alignment.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Auto Enhance',
    description:
      'Built-in image enhancement improves contrast and clarity for crystal-clear document scans.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '100% Private & Offline',
    description:
      'All processing happens locally on your device. No data is ever uploaded to any server — your documents stay yours.',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Dark Mode',
    description:
      'Full dark mode support for comfortable scanning in any lighting condition.',
  },
];

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Everyday Users',
    description:
      'Quickly scan bills, receipts, contracts, or any paper document and share as PDF.',
    points: [
      'Scan & send documents in seconds',
      'Keep digital copies of important papers',
      'Share via WhatsApp, email, or Drive',
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Students',
    description:
      'Scan notes, assignments, and ID cards. Multi-page batch scanning keeps your study material organized.',
    points: [
      'Batch scan lecture notes',
      'ID card front & back in one sheet',
      'Organize all documents by subject',
    ],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Offices & Businesses',
    description:
      'Digitize paperwork, invoices, and contracts instantly without a bulky physical scanner.',
    points: [
      'Paperless document workflows',
      'Multi-page PDF creation',
      'Professional scan quality',
    ],
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: 'Shops & Print Centers',
    description:
      'Accept documents via phone scan and print them directly. ID card mode doubles productivity for ID printing.',
    points: [
      'ID card both-side layout',
      'Direct printer integration',
      'Faster customer service',
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Open & Scan',
    description:
      'Tap the camera button, point at your document, and PrintNeat auto-detects the edges for a perfect crop.',
  },
  {
    number: '02',
    title: 'Enhance & Adjust',
    description:
      'Auto-enhance improves clarity instantly. Fine-tune with manual crop and rotation if needed.',
  },
  {
    number: '03',
    title: 'Export or Print',
    description:
      'Save as a high-quality PDF or share directly via WhatsApp, Gmail, Google Drive, or print.',
  },
];

const faqs = [
  {
    question: 'Is PrintNeat free to use?',
    answer:
      'Yes! PrintNeat is completely free to download and use. Core features like scanning, ID card mode, and PDF export are all free.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes, 100%. All scanning, cropping, enhancement, and PDF export happen entirely on your device. No internet required and no data ever leaves your phone.',
  },
  {
    question: 'What is ID Card mode?',
    answer:
      'ID Card mode lets you scan the front side and back side of an ID card separately, then automatically combines them into a single A4 print-ready layout — perfect for printing Aadhaar, PAN, or any other ID card.',
  },
  {
    question: 'Can I scan multiple pages into one PDF?',
    answer:
      'Absolutely. Use Batch Scan mode to scan as many pages as you need in a single session. All pages are combined into one multi-page PDF automatically.',
  },
  {
    question: 'What formats can I export to?',
    answer:
      'PrintNeat exports documents as PDF files. You can also save individual pages as images (JPG/PNG) to your gallery.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes. All image processing is done locally on your device. PrintNeat never uploads your documents or photos to any server. Your files stay private.',
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

export default function PrintNeatPage() {
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
          style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/printneat-logo.png"
                  alt="PrintNeat logo"
                  width={56}
                  height={56}
                  className="rounded-2xl"
                />
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#F59E0B]/20 text-[#F59E0B]">
                  live
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                PrintNeat
              </h1>
              <p
                className="text-2xl font-medium mb-6"
                style={{ color: 'var(--accent)' }}
              >
                Scan, Enhance & Print Documents Instantly
              </p>
              <p
                className="text-lg mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                Turn your phone into a powerful document scanner. Scan any
                document, ID card, or multi-page file, auto-enhance the quality,
                and export as a crisp PDF — all offline, all private, completely
                free.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  '100% Offline',
                  'Zero Data Upload',
                  'ID Card Mode',
                  'Free',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border"
                    style={{
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-3">
                {/* Download APK - arm64 (modern phones) */}
                <a
                  href="/downloads/scanvo-arm64.apk"
                  download="Scanvo.apk"
                >
                  <Button size="lg" className="group flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-80 leading-none mb-0.5">
                        Download APK
                      </div>
                      <div className="font-semibold leading-none">Android</div>
                    </div>
                  </Button>
                </a>

                {/* Google Play - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Smartphone
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">
                      Google Play
                    </div>
                  </div>
                </button>

                {/* iOS App Store - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Apple
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">App Store</div>
                  </div>
                </button>

                {/* Desktop - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Monitor
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">Desktop</div>
                  </div>
                </button>
              </div>

              <p
                className="text-sm mt-3"
                style={{ color: 'var(--text-muted)' }}
              >
                Android 7.0+ required &bull; Older device?{' '}
                <a
                  href="/downloads/scanvo-armeabi.apk"
                  download="Scanvo-armeabi.apk"
                  style={{ color: 'var(--accent)' }}
                  className="underline underline-offset-2"
                >
                  Download armeabi-v7a APK
                </a>
              </p>

              <div
                className="flex items-center gap-6 mt-6 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  Launching Soon on Play Store
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  APK Available Now
                </span>
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
              Scanning Documents Shouldn&apos;t Require a Scanner
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              You always have your phone. Now it&apos;s also your document
              scanner, ID card printer, and PDF maker — no extra hardware
              needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                'No bulky scanner hardware',
                'No cloud uploads or privacy risks',
                'No complicated apps or subscriptions',
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
          style={{ backgroundColor: 'var(--accent)', opacity: 0.05 }}
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
              Everything you need to go from paper to digital PDF in seconds.
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
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
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
              Three simple steps from paper to PDF.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: 'var(--accent)', opacity: 0.1 }}
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
                          'linear-gradient(to right, var(--accent), transparent)',
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

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Perfect For Everyone
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Whether you&apos;re a student, professional, or shop owner —
              PrintNeat fits your workflow.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-8" gradient>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{benefit.icon}</div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
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
              Got questions? We&apos;ve got answers.
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
          style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Your Pocket Document Scanner
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                Download PrintNeat and turn your phone into a full-featured
                document scanner. Scan, enhance, and export PDFs in seconds —
                completely free and offline.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {/* Download APK */}
                <a
                  href="/downloads/scanvo-arm64.apk"
                  download="Scanvo.apk"
                >
                  <Button size="lg" className="group flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-80 leading-none mb-0.5">
                        Download APK
                      </div>
                      <div className="font-semibold leading-none">Android</div>
                    </div>
                  </Button>
                </a>

                {/* Google Play - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Smartphone
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">
                      Google Play
                    </div>
                  </div>
                </button>

                {/* iOS App Store - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Apple
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">App Store</div>
                  </div>
                </button>

                {/* Desktop - Coming Soon */}
                <button
                  disabled
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border font-medium cursor-not-allowed opacity-50"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Monitor
                    className="w-5 h-5"
                    style={{ color: 'var(--text-muted)' }}
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60 leading-none mb-0.5">
                      Coming Soon
                    </div>
                    <div className="font-semibold leading-none">Desktop</div>
                  </div>
                </button>
              </div>

              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                100% Free &bull; No signup required &bull; Works offline &bull;
                Android 7.0+
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
