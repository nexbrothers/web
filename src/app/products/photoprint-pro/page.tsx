"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Button, Card } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Camera,
  Scissors,
  FileText,
  Printer,
  Layers,
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ExternalLink,
  Users,
  CreditCard,
  ScanFace,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Auto Background Removal",
    description:
      "One-click AI-powered background removal. Choose from solid colors like white, blue, red, or custom backgrounds.",
  },
  {
    icon: <ScanFace className="w-6 h-6" />,
    title: "Face Detection",
    description:
      "Automatic face detection ensures perfect centering and cropping for passport and ID photos every time.",
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "300 DPI Print Quality",
    description:
      "Professional 300 DPI output for crisp, sharp prints. Perfect for official documents and submissions.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "10+ Photo Sizes",
    description:
      "Supports Passport (India 3.5x4.5cm), Visa, Aadhaar, PAN Card, and many more standard sizes.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "A4 Sheet Layout",
    description:
      "Auto-arrange photos on A4 sheets with customizable copies. Set to 0 to fill the entire page.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Auto Enhance & Smoothing",
    description:
      "Built-in auto enhancement and face smoothing to make your photos look professional instantly.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Crop & Rotate",
    description:
      "Fine-tune your photos with precise crop controls and rotation options (0°, 90°, 180°, 270°).",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "100% Free, No Signup",
    description:
      "Completely free to use with no account required. No watermarks, no limits, no hidden charges.",
  },
];

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Photo Studios",
    description:
      "Speed up your workflow by automating background removal and print layout for passport and ID photos.",
    points: [
      "Batch process customer photos",
      "Standard ID photo templates",
      "Direct printer integration",
    ],
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Personal Use",
    description:
      "Print passport photos, visa photos, or any ID photos at home without visiting a studio.",
    points: [
      "Save money on studio visits",
      "Print anytime from home",
      "Perfect photo dimensions",
    ],
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Schools & Offices",
    description:
      "Generate bulk ID card photos for students or employees with consistent background and sizing.",
    points: [
      "Bulk photo processing",
      "Consistent output quality",
      "Multiple layout options",
    ],
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Print Shops",
    description:
      "Offer quick photo printing services with automated layout and background removal built in.",
    points: [
      "Faster customer turnaround",
      "Professional quality output",
      "A4 sheet optimization",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Photo",
    description:
      "Upload one or multiple photos. Supports JPG and PNG up to 32MB.",
  },
  {
    number: "02",
    title: "Choose Size & Settings",
    description:
      "Pick your photo size (Passport, Visa, Aadhaar, etc.), set background color, and enable enhancements.",
  },
  {
    number: "03",
    title: "Generate & Print",
    description:
      "Click generate to get a print-ready A4 sheet. Download or print directly at 300 DPI quality.",
  },
];

const faqs = [
  {
    question: "Is PhotoPrint Pro free to use?",
    answer:
      "PhotoPrint Pro offers a free tier with essential features. Premium features like bulk processing and advanced layouts are available with a subscription.",
  },
  {
    question: "What photo formats are supported?",
    answer:
      "PhotoPrint Pro supports all common image formats including JPG, PNG, HEIC, and WebP.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Background removal requires an internet connection for AI processing. However, photo arrangement and printing work fully offline.",
  },
  {
    question: "What paper sizes are supported?",
    answer:
      "Currently A4 is the primary supported size. Support for A3, Letter, and custom sizes is coming soon.",
  },
  {
    question: "Can I use it for passport photos?",
    answer:
      "Yes! PhotoPrint Pro includes standard passport and ID photo templates that meet official size requirements for most countries.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderColor: "var(--border)" }} className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span
          className="text-lg font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp style={{ color: "var(--accent)" }} className="w-5 h-5" />
        ) : (
          <ChevronDown style={{ color: "var(--text-secondary)" }} className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function PhotoPrintProPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#10B981]/20 text-[#10B981]">
                  Live
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                PhotoPrint Pro
              </h1>
              <p
                className="text-2xl font-medium mb-6"
                style={{ color: "var(--accent)" }}
              >
                Print-Ready Photos in Seconds
              </p>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Upload any photo. Get a print-ready passport photo sheet in seconds.
                Auto background removal, face detection, and perfect sizing —
                completely free. 300 DPI print quality, no signup required.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["100% Free", "300 DPI Print Quality", "No Signup Required"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://photoprint-pro.nexbrothers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto group">
                    Create Photos Now
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div
                className="flex items-center gap-6 mt-8 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  50K+ Photos Created
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  4.9/5 User Rating
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Screenshots */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--background)" }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              See It in Action
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A professional passport photo studio right in your browser.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl border overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border)",
                }}
              >
                <Image
                  src="/images/photoprint-pro-home.png"
                  alt="PhotoPrint Pro - Home Page"
                  width={700}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Landing page — Passport Photos Made Instantly
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="rounded-2xl border overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: "var(--background-card)",
                  borderColor: "var(--border)",
                }}
              >
                <Image
                  src="/images/photoprint-pro-app.png"
                  alt="PhotoPrint Pro - Photo Maker App"
                  width={700}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Photo Maker — Upload, configure settings, and generate print-ready photos
                  </p>
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
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Photo Printing Shouldn&apos;t Be This Hard
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Need passport photos? Tired of paying studios for simple prints?
              Struggling to fit photos on a page? PhotoPrint Pro handles
              everything automatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                "No more expensive studio visits",
                "No more manual photo editing",
                "No more wasted paper & ink",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--background-card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span style={{ color: "var(--text-primary)" }}>{item}</span>
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
          style={{ backgroundColor: "var(--background-secondary)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Powerful Features
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Everything you need to go from photo to print in seconds.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: "white" }}>{feature.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
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
            background: "linear-gradient(to bottom, var(--background-secondary), var(--background))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              How It Works
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Three simple steps to perfect prints.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: "var(--accent)", opacity: 0.1 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 right-0 w-1/2 h-0.5"
                      style={{
                        background: "linear-gradient(to right, var(--accent), transparent)",
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
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Perfect For Everyone
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether you need a single passport photo or bulk ID cards,
              PhotoPrint Pro has you covered.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-8" gradient>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: "white" }}>{benefit.icon}</div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span style={{ color: "var(--text-secondary)" }}>{point}</span>
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
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Got questions? We&apos;ve got answers.
            </p>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto">
            <div
              className="backdrop-blur-xl border rounded-2xl p-6"
              style={{
                backgroundColor: "var(--background-card)",
                borderColor: "var(--border)",
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
          style={{ backgroundColor: "var(--background-secondary)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Start Printing Better Photos Today
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: "var(--text-secondary)" }}
              >
                Join users who are already saving time and money with
                PhotoPrint Pro. Remove backgrounds, arrange layouts, and print
                in seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://photoprint-pro.nexbrothers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group">
                    Create Photos Now
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <p
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                100% Free • No signup required • 300 DPI quality • Works on any device
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
