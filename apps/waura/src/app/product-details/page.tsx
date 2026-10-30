"use client";

import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import {
  Sparkles,
  Shield,
  Hourglass,
  Layers,
  ArrowLeft,
  ArrowRight,
  Lock,
  Cpu,
  Smartphone,
  CheckCircle2,
  Bell,
  Award,
} from "lucide-react";
import Link from "next/link";
import { LEVELS } from "../../components/aura-phone";

export default function ProductDetailsPage() {
  return (
    <div className="py-28 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10 max-w-4xl">
        <FadeIn className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Waura Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
            <Cpu className="w-4 h-4" />
            System Architecture &amp; Mechanics
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Waura Product Specifications
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            A comprehensive breakdown of how Waura computes your aura score, enforces respectful limits,
            and preserves 100% on-device data sovereignty.
          </p>
        </FadeIn>

        {/* 1. Aura Engine Mechanics */}
        <FadeIn delay={0.1} className="mb-12">
          <div
            className="p-8 rounded-3xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                The 0 – 1000 Aura Algorithm
              </h2>
            </div>
            <p
              className="text-sm sm:text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Unlike punitive apps that lock you out or produce anxiety-inducing red charts, Waura treats
              intentionality as a continuous positive energy reservoir ranging from 0 to 1000.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3 className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  Focus Sessions (+Aura)
                </h3>
                <ul
                  className="text-xs sm:text-sm space-y-2 list-disc pl-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>+1 Aura per minute</strong> of uninterrupted focus.
                  </li>
                  <li>
                    Capped at <strong style={{ color: "var(--text-primary)" }}>+100 aura per day</strong> to encourage sustained balance.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Zero penalty:</strong> Ending a session early never subtracts aura.
                  </li>
                </ul>
              </div>

              <div
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3 className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  Limits &amp; Midnight Payouts
                </h3>
                <ul
                  className="text-xs sm:text-sm space-y-2 list-disc pl-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>+20 Aura bonus</strong> at midnight for each limited app kept under limit.
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>-1 Aura per minute</strong> when exceeding a limit (capped at -60 per app).
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Neutral &amp; Essential apps</strong> are excluded entirely.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2. Five Levels Detail */}
        <FadeIn delay={0.15} className="mb-12">
          <div
            className="p-8 rounded-3xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Five Evolutionary Tiers
              </h2>
            </div>

            <div className="space-y-3">
              {LEVELS.map((lvl) => (
                <div
                  key={lvl.name}
                  className="p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{ backgroundColor: lvl.color, boxShadow: `0 0 10px ${lvl.color}` }}
                    />
                    <div>
                      <div
                        className="text-base font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {lvl.name}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        {lvl.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-right sm:shrink-0 font-mono text-xs">
                    <span
                      className="px-2.5 py-1 rounded-full border font-semibold"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-primary)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {lvl.range} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3. Privacy & Technical Specifications */}
        <FadeIn delay={0.2} className="mb-12">
          <div
            className="p-8 rounded-3xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Technical Architecture &amp; Permissions
              </h2>
            </div>

            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Zero Internet Permission Architecture
                </h3>
                <p>
                  The compiled APK completely omits <code className="text-purple-600 dark:text-purple-400 font-mono font-bold">android.permission.INTERNET</code>. The OS will reject any network sockets initiated by the app process.
                </p>
              </div>

              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Local SQLite Sandboxing
                </h3>
                <p>
                  All transaction history, daily scores, and custom app limits reside exclusively in local encrypted SQLite tables within the private app storage directory.
                </p>
              </div>

              <div
                className="p-4 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Android 13+ Restricted Settings Guidance
                </h3>
                <p>
                  If sideloaded from APK outside Google Play on Android 13+, navigate to: <br />
                  <code style={{ color: "var(--text-primary)" }}>Settings &rarr; Apps &rarr; Waura &rarr; Menu (top-right) &rarr; Allow restricted settings</code>.
                  Installing directly from the Google Play Store bypasses this hurdle automatically.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.25} className="text-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
          >
            <span>Return to Landing Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}
