"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Hourglass,
  Shield,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Lock,
  EyeOff,
  Bell,
  Smartphone,
  Calendar,
  Layers,
  ArrowRight,
  DatabaseZap,
  WifiOff,
  BarChart3,
  Moon,
  VolumeX,
  Fingerprint,
  Zap,
} from "lucide-react";
import { Container, Button } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import { InteractiveAuraPhone, LEVELS } from "../components/aura-phone";

const PLAY_STORE_URL = "#play-store-coming-soon";

export default function WauraHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(3); // Radiant default

  const faqs = [
    {
      q: "Is Waura free?",
      a: "Yes, it's free to download and use.",
    },
    {
      q: "Why does Waura need usage access?",
      a: "Android calls this permission usage access. It lets Waura see how long each app was open, which is how limits are counted. It does not show Waura anything inside your apps. You can turn it off at any time; limits then stop counting and never cost aura.",
    },
    {
      q: "Where is my data stored?",
      a: "Only on your phone. Waura has no internet permission, so nothing is sent to us or anyone else.",
    },
    {
      q: "What happens if I get a new phone?",
      a: "Waura starts fresh. Its data is excluded from backup and phone-to-phone transfer, so it never leaves the phone it was built on.",
    },
    {
      q: "Does it work on iPhone?",
      a: "Not yet. Waura is for Android 8 and newer.",
    },
    {
      q: "Who is it for?",
      a: "People aged 16 and over.",
    },
    {
      q: "Can I delete my data?",
      a: "Yes. Use \"Delete all data\" in your profile, or uninstall the app.",
    },
    {
      q: "Why can't I turn on usage access on my phone?",
      a: "On Android 13 and newer, an app installed from a file can be blocked from sensitive permissions. Go to Settings, then Apps, then Waura, open the menu at the top right and choose \"Allow restricted settings\". Installing from Google Play avoids this.",
    },
    {
      q: "How do I contact you?",
      a: "Email nexbrotherss@gmail.com.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ──────────────────────────────────────────────────────────── */}
      {/* HERO SECTION                                                 */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[160px] opacity-20 bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-500" />
          <div className="absolute inset-0 grid-pattern opacity-60" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Pitch */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    A NexBrothers Digital Wellbeing App
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Your phone time has an <span className="gradient-text-aura">aura</span>.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Waura turns intentional phone use into an aura score from 0 to 1000. Focus builds it.
                  Staying inside your limits protects it. Everything stays on your phone.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
                  <div
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white shadow-lg cursor-default select-none"
                    style={{
                      background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Coming Soon on Google Play</span>
                  </div>

                  <Link
                    href="/product-details"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass-pill transition-colors duration-200 hover:border-purple-500/40"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center lg:justify-start gap-3 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Free for Android 8 and up
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <WifiOff className="w-3.5 h-3.5 text-cyan-500" />
                    No Internet Permission
                  </span>
                </div>
              </FadeIn>

              {/* Quick stats ribbon */}
              <FadeIn delay={0.4}>
                <div
                  className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-8 border-t max-w-lg mx-auto lg:mx-0"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <div>
                    <div
                      className="text-2xl sm:text-3xl font-extrabold font-mono"
                      style={{ color: "var(--text-primary)" }}
                    >
                      0–1000
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      Aura Spectrum
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-500 dark:text-cyan-400">
                      5 Levels
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      Static to Halo
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-500 dark:text-emerald-400">
                      0 KB
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      Data Sent Off-Device
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Live Interactive Aura Phone */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn delay={0.2} className="w-full">
                <InteractiveAuraPhone />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* HOW IT WORKS                                                 */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        id="how-it-works"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">
              The Architecture of Discipline
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              How it works.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Clean, predictable mechanics. No shame, no dark patterns. You take control of your attention.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1: Focus sessions */}
            <FadeIn delay={0.1} className="h-full">
              <div
                className="h-full p-8 rounded-3xl glass flex flex-col justify-between border hover:border-purple-500/50 transition-all duration-300 group"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    <Hourglass className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Focus sessions add aura
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Put your phone down for 25, 50 or 90 minutes, or set your own. Every completed minute
                    adds 1 aura, up to 100 a day. Ending a session early never costs you anything.
                  </p>
                </div>
                <div
                  className="pt-4 border-t flex items-center justify-between text-xs font-mono"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <span style={{ color: "var(--text-muted)" }}>Reward</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">+1 aura / minute</span>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 2: Limits protect it */}
            <FadeIn delay={0.2} className="h-full">
              <div
                className="h-full p-8 rounded-3xl glass flex flex-col justify-between border hover:border-cyan-500/50 transition-all duration-300 group"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Limits protect it
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Pick the apps you want to use less and give each a daily limit. End the day under a
                    limit and that app adds 20 aura at midnight. Go over, and it costs 1 aura per minute,
                    up to 60 per app per day.
                  </p>
                </div>
                <div
                  className="pt-4 border-t flex items-center justify-between text-xs font-mono"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <span style={{ color: "var(--text-muted)" }}>Midnight Payout</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">+20 aura / app kept</span>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 3: Neutral & essential */}
            <FadeIn delay={0.3} className="h-full">
              <div
                className="h-full p-8 rounded-3xl glass flex flex-col justify-between border hover:border-amber-500/50 transition-all duration-300 group"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Some apps never count
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Mark apps like maps, utility banking or messaging as neutral or essential. They never
                    affect your aura, so your genuine utility tools are never restricted.
                  </p>
                </div>
                <div
                  className="pt-4 border-t flex items-center justify-between text-xs font-mono"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <span style={{ color: "var(--text-muted)" }}>Impact</span>
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    Zero penalty or friction
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FIVE LEVELS                                                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative" id="five-levels">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-2 block">
              Evolutionary Hierarchy
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Five levels.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Your aura moves through five levels, each with its own signature colours and visual aura.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEVELS.map((lvl, index) => {
              const isActive = index === activeLevelIdx;
              return (
                <div
                  key={lvl.name}
                  onClick={() => setActiveLevelIdx(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border relative overflow-hidden ${
                    isActive
                      ? "scale-[1.03] shadow-xl"
                      : "opacity-85 hover:opacity-100 hover:border-purple-400/50"
                  }`}
                  style={{
                    backgroundColor: isActive ? "var(--bg-elevated)" : "var(--bg-card)",
                    borderColor: isActive ? lvl.color : "var(--border-primary)",
                    boxShadow: isActive ? `0 15px 35px -10px ${lvl.bgGlow}` : "none",
                  }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${lvl.color}18`,
                          color: lvl.color,
                        }}
                      >
                        Tier {index + 1}
                      </span>
                      <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                        {lvl.range}
                      </span>
                    </div>

                    <h3
                      className="text-2xl font-black mb-2 flex items-center gap-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lvl.color, boxShadow: `0 0 10px ${lvl.color}` }}
                      />
                      {lvl.name}
                    </h3>

                    <p
                      className="text-xs leading-relaxed mt-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {lvl.description}
                    </p>
                  </div>

                  <div
                    className="pt-3 border-t text-[11px] font-mono italic"
                    style={{ borderColor: "var(--border-primary)", color: "var(--text-muted)" }}
                  >
                    &ldquo;{lvl.tagline}&rdquo;
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* WHAT YOU SEE IN THE APP                                      */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        id="app-tour"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols */}
            <div className="lg:col-span-6">
              <FadeIn>
                <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">
                  Crystal Clear Telemetry
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  What you see in the app.
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed mb-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Everything you need to reflect, adapt, and build unbreakable momentum without being overwhelmed.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {[
                  {
                    title: "Home",
                    desc: "Your aura, level, streak and today's limits at a glance.",
                    icon: Smartphone,
                    badge: "Dashboard",
                  },
                  {
                    title: "Today, line by line",
                    desc: "Every focus session and every limit, with what it added or cost.",
                    icon: BarChart3,
                    badge: "Ledger",
                  },
                  {
                    title: "Insights",
                    desc: "The last 7 days, plus a calendar of your aura by day.",
                    icon: Calendar,
                    badge: "Trends",
                  },
                  {
                    title: "Streaks",
                    desc: "Days with a focus session or all limits kept.",
                    icon: Zap,
                    badge: "Habit Anchor",
                  },
                  {
                    title: "Widgets",
                    desc: "Your aura, your score and your closest limit directly on your Android home screen.",
                    icon: Layers,
                    badge: "Glanceable",
                  },
                ].map((item, idx) => (
                  <FadeIn key={item.title} delay={idx * 0.08}>
                    <div
                      className="p-4 rounded-2xl glass border hover:border-purple-500/40 transition-all flex items-start gap-4"
                      style={{ borderColor: "var(--border-primary)" }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className="text-base font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.title}
                          </h3>
                          <span
                            className="text-[10px] font-mono px-2 py-0.5 rounded font-medium"
                            style={{
                              backgroundColor: "var(--bg-elevated)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right 6 cols: Aesthetic Card Showcase */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <FadeIn delay={0.2}>
                <div
                  className="p-7 rounded-3xl glass border relative overflow-hidden"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-2 font-bold">
                    Live Session Simulation
                  </div>
                  <h4
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Deep Focus Engine
                  </h4>
                  <div
                    className="p-5 rounded-2xl border mb-4"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                        Session Duration
                      </span>
                      <span className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">
                        50:00
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--border-primary)" }}
                    >
                      <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 w-3/4 rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs mt-2 font-mono">
                      <span style={{ color: "var(--text-muted)" }}>Phone face down</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        +50 potential aura
                      </span>
                    </div>
                  </div>
                  <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                    Ending early never penalizes your existing aura score.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div
                  className="p-7 rounded-3xl glass border relative overflow-hidden"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-bold">
                    Android Home Screen
                  </div>
                  <h4
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Glanceable Aura Widget
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Check your aura level, score, and closest app limit without even opening Waura. Keep your
                    intentions top-of-mind every time you glance at your device.
                  </p>
                  <div
                    className="p-4 rounded-2xl border flex items-center justify-between"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-purple-500/40 bg-purple-500/15 flex items-center justify-center font-bold text-sm text-purple-600 dark:text-purple-300">
                        742
                      </div>
                      <div>
                        <div
                          className="text-xs font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Radiant Tier
                        </div>
                        <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                          Closest: Instagram (12m left)
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-bold">
                      14d streak
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* REMINDERS THAT RESPECT YOU                                   */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2 block">
              Respectful Notifications
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Reminders that respect you.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              No nagging, guilt trips, or shrill interruptions. Designed with discretion and calm.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bell,
                title: "5-Minute Heads-Up",
                desc: "A gentle heads-up when a limited app has 5 minutes left, and another when its limit is reached.",
              },
              {
                icon: Hourglass,
                title: "Focus Completion Note",
                desc: "A quiet note when your focus session ends, welcoming you back with your newly earned aura.",
              },
              {
                icon: Sparkles,
                title: "Optional Morning Recap",
                desc: "Wake up to an optional brief summary of yesterday's aura balance and midnight limit payouts.",
              },
              {
                icon: VolumeX,
                title: "Configurable Quiet Hours",
                desc: "Set calm windows where alerts arrive without sound or vibration when you need quiet.",
              },
              {
                icon: EyeOff,
                title: "Lock-Screen Privacy Shield",
                desc: "On a locked phone, notifications only state that something is ready. They never disclose which app or how long.",
              },
              {
                icon: ShieldCheck,
                title: "Exact Alarms Support",
                desc: "Utilizes Android exact alarms so your focus reminders arrive precisely when expected without system delay.",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.06} className="h-full">
                <div
                  className="p-6 rounded-2xl glass border h-full flex flex-col justify-between hover:border-emerald-500/40 transition-all"
                  style={{ borderColor: "var(--border-primary)" }}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* PRIVATE BY DESIGN                                            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        id="privacy"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <Container className="relative z-10">
          <div
            className="p-8 sm:p-14 rounded-3xl glass border relative overflow-hidden"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Lock className="w-3.5 h-3.5" />
                Zero-Knowledge Local Storage
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Private by design.
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Your screen habits are intimate and personal. Waura treats them with the highest degree of
                architectural isolation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <WifiOff className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      No Internet Permission
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Waura literally lacks the Android internet permission tag. It cannot connect to servers,
                      track you, or leak data anywhere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Fingerprint className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      No Accounts or Analytics
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      No sign-up, no email address, no advertising IDs, no trackers, and no telemetry crash SDKs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Reads Only Foreground Duration
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      It reads only how long each app was open. It never sees inside your apps—no messages, photos,
                      posts, or keystrokes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DatabaseZap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4
                      className="text-base font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Export or Erase Anytime
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Export your data with one tap, or wipe everything clean instantly with &ldquo;Delete all data&rdquo;.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-wrap items-center gap-4 pt-4 border-t"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>Read the full Privacy Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span style={{ color: "var(--text-muted)" }}>•</span>
                <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  Effective 29 October 2026 • Published by NexBrothers
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FREQUENTLY ASKED QUESTIONS                                   */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative" id="faq">
        <Container>
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 block">
              Clear Answers
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently asked questions.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Transparent details on permissions, device compatibility, and data ownership.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border overflow-hidden transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: isOpen ? "var(--brand)" : "var(--border-primary)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  >
                    <span
                      className="text-base font-bold pr-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "var(--brand)" : "var(--text-muted)",
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-5 pt-0 text-sm sm:text-base leading-relaxed border-t"
                          style={{
                            color: "var(--text-secondary)",
                            borderColor: "var(--border-primary)",
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FINAL CALL TO ACTION                                         */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" id="download">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10">
          <div
            className="max-w-3xl mx-auto text-center p-10 sm:p-16 rounded-3xl glass border"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3 block font-bold">
              Begin Your Aura Journey
            </span>
            <h2
              className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Take the W on screen time.
            </h2>
            <p
              className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Free for Android 8 and up. Zero accounts, zero ads, zero data leaving your device. Focus builds it,
              limits protect it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white shadow-xl cursor-default select-none"
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                  boxShadow: "0 12px 30px -5px rgba(124, 58, 237, 0.4)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Coming Soon on Google Play</span>
              </div>

              <Link
                href="/product-details"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold glass-pill transition-colors hover:border-purple-500/40"
                style={{ color: "var(--text-primary)" }}
              >
                <span>Read Full Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              Made to keep your data on your phone • A NexBrothers Application
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
