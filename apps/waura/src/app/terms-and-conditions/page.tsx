"use client";

import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { FileText, ArrowLeft, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="py-28 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10 max-w-4xl">
        <FadeIn className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Waura Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
            <FileText className="w-4 h-4" />
            Legal Agreement
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Waura Terms of Use
          </h1>
          <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
            Effective Date: 29 October 2026 • Published by NexBrothers
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-10">
          <div
            className="p-6 rounded-2xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              By downloading, installing, or using Waura, you agree to be bound by these Terms of Use.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                1. What Waura Is
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Waura is a tool created to help you observe, measure, and intentionally shape how you interact with your mobile device. The &ldquo;Aura&rdquo; score is exclusively an in-app gamified motivational metric. It holds no monetary value, has no cash equivalence, and cannot be traded, transferred, or exchanged for currency or goods.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                2. Not Medical Advice
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Waura is not a medical, psychiatric, or mental health service, and is not designed to diagnose, treat, or cure any psychological condition or digital dependency disorder. If you are experiencing distress regarding phone use or emotional wellbeing, please seek counsel from a certified healthcare professional.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                3. Accuracy of Metrics
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                Waura measures active foreground duration as calculated and supplied by the underlying Android operating system APIs. Measured usage times may differ slightly from your OEM device&apos;s built-in digital balance counters. Specialized edge scenarios (such as picture-in-picture floating windows or background audio) are not tallied as foreground usage.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                4. Acceptable Personal Use
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                You are granted a revocable, non-exclusive license to use Waura strictly for your individual, non-commercial purposes. You may not reverse-engineer, decompile, redistribute, resell, or create unauthorized derivative works based on the application code or brand assets.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                5. Service Availability &amp; Liability
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                We reserve the right to modify, improve, suspend, or discontinue Waura or any subset of its features at any time without prior notice. Waura is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permissible by applicable law, NexBrothers and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the application.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                6. Modifications to Terms
              </h2>
              <p className="text-sm sm:text-base leading-relaxed">
                NexBrothers may update these Terms from time to time. When modifications occur, the updated edition will be made available directly on this page with a revised effective timestamp. Continued use of Waura after changes are posted constitutes acceptance of those revisions.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl glass border"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <h2
                className="text-lg font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                7. Contact Information
              </h2>
              <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                For questions, clarifications, or feedback concerning these Terms:
              </p>
              <a
                href="mailto:nexbrotherss@gmail.com"
                className="text-sm font-mono text-purple-600 dark:text-purple-400 hover:underline font-bold"
              >
                nexbrotherss@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
