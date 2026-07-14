"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Button, Card, FeatureCard, Badge } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import {
  PenTool,
  ShieldCheck,
  Smartphone,
  Palette,
  KeyRound,
  WifiOff,
  Fingerprint,
  Clock,
  Eye,
  Sparkles,
  ArrowRight,
  Download,
  ChevronRight,
  Lock,
  CheckCircle2,
  Layers,
  RefreshCw,
  Image,
  MonitorSmartphone,
  Home,
  MessageSquare,
  Camera,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function SignlockHome() {
  const setupSteps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Install & Grant Permissions",
      description:
        "Enable Accessibility Service and disable battery optimization so SignLock can protect your apps reliably.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Select Apps to Lock",
      description:
        "Pick any app from your installed apps list. Search and select the ones you want to protect.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Draw Your Signature",
      description:
        "Draw any unique pattern or signature you can remember. Confirm it twice for accuracy.",
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Set a Backup PIN",
      description:
        "Choose a 4 or 6-digit backup PIN as a recovery option. Encrypted and stored securely on your device.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Start Protecting",
      description:
        "That's it! Your apps are now locked. Draw your signature to unlock them anytime.",
    },
  ];

  const features = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Drawing-Based Unlock",
      description:
        "Unlock your apps by drawing your personal signature or pattern. No PINs to remember, no patterns to trace.",
    },
    {
      icon: <KeyRound className="w-8 h-8" />,
      title: "Backup PIN Recovery",
      description:
        "Set a 4 or 6-digit backup PIN. Encrypted via Android Keystore and stored securely in case you forget your drawing.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "11 Drawing Themes",
      description:
        "Choose from Classic, Neon, Ocean, Monochrome, Forest, Sunset, Minimal, Glass, Electric, Particle, Ink, and Invisible themes.",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Custom Wallpapers",
      description:
        "Use any image from your gallery as the unlock screen background. Adjust opacity, zoom, pan, and rotation.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Mode",
      description:
        "Hide your strokes while drawing to prevent shoulder surfing. Your signature stays private.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Scheduling",
      description:
        "Set time-based protection schedules per app. Always Protected or Scheduled mode. (Premium feature)",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Lock Policies",
      description:
        "Choose 'Ask every time' for constant protection or 'After screen lock' to unlock once per session.",
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: "100% Offline",
      description:
        "Everything runs on your device. No internet required. Your data never leaves your phone.",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "AES-256 Encryption",
      description:
        "Your drawing template and PIN are encrypted using AES-256/GCM via Android Keystore before storage.",
    },
  ];

  const themes = [
    { name: "Classic", color: "from-blue-500 to-purple-600" },
    { name: "Neon", color: "from-cyan-400 to-pink-500" },
    { name: "Ocean", color: "from-blue-400 to-teal-500" },
    { name: "Monochrome", color: "from-gray-400 to-gray-700" },
    { name: "Forest", color: "from-green-400 to-emerald-600" },
    { name: "Sunset", color: "from-orange-400 to-rose-500" },
    { name: "Minimal", color: "from-slate-200 to-slate-400" },
    { name: "Glass", color: "from-white/20 to-white/5" },
    { name: "Electric", color: "from-yellow-300 to-red-500" },
    { name: "Particle", color: "from-violet-400 to-fuchsia-600" },
    { name: "Ink", color: "from-stone-700 to-black" },
    { name: "Invisible", color: "from-gray-600 to-gray-900" },
  ];

  const stats = [
    { label: "AES-256 Encryption", value: 256, suffix: "-bit" },
    { label: "Local Processing", value: 100, suffix: "%" },
    { label: "Forgery Detection", value: 99.9, suffix: "%" },
    { label: "Drawing Themes", value: 12, suffix: "" },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }}>
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]"
            style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px]"
            style={{ backgroundColor: "var(--accent-purple)", opacity: 0.15 }}
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]"
            style={{ backgroundColor: "var(--accent)", opacity: 0.08 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="relative z-10 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="info" className="mb-6 inline-flex">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Drawing-Based App Lock
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Signature,
                <br />
                <span className="gradient-text">Your Key.</span>
              </h1>
              <p className="text-lg sm:text-xl max-w-xl mb-8" style={{ color: "var(--text-secondary)" }}>
                SignLock lets you lock your Android apps with a personal drawing or signature.
                More secure than PINs and patterns. Impossible to shoulder-surf. Fully offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="#how-it-works">
                    <Button size="lg" className="group">
                      See How It Works
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link href="#features">
                    <Button variant="secondary" size="lg">
                      Explore Features
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <PhoneAnimation />
          </div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="text-sm mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--background), var(--background-secondary))"
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.05 }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">Setup</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Set up SignLock in just a few minutes. No account needed, no cloud required.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, var(--accent), var(--accent-purple), transparent)", opacity: 0.3 }} />

            <div className="space-y-12 max-w-4xl mx-auto">
              {setupSteps.map((step, index) => (
                <FadeIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <div className="flex items-start gap-6 group">
                    <div
                      className="relative flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10 transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                        boxShadow: "0 8px 32px var(--glow)",
                      }}
                    >
                      <div style={{ color: "white" }}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--background)] flex items-center justify-center text-xs font-bold" style={{ color: "var(--accent)", border: "2px solid var(--accent)" }}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.05 }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">Features</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Everything You Need
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              SignLock packs powerful features to keep your apps secure while giving you full control.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* ============ THEMES ============ */}
      <section id="themes" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--background), var(--background-secondary))"
        }} />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2" style={{
          background: "linear-gradient(to right, transparent, var(--accent), transparent)",
          opacity: 0.35,
        }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <Palette className="w-3.5 h-3.5 mr-1.5" />
              Personalization
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Beautiful Drawing Themes
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Personalize your unlock screen with 12 unique themes. Each with custom backgrounds, stroke effects, glow, and animations.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {themes.map((theme, index) => (
              <StaggerItem key={index}>
                <Card hover={false} className="text-center p-4">
                  <div
                    className={`w-full aspect-square rounded-xl bg-gradient-to-br ${theme.color} mb-3 flex items-center justify-center`}
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  >
                    <svg viewBox="0 0 80 80" className="w-3/5 h-3/5 opacity-70">
                      <path
                        d="M15,50 Q25,20 40,40 T55,30 T70,55"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {theme.name}
                  </h3>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* ============ HOW UNLOCKING WORKS ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <Badge variant="info" className="mb-4 inline-flex">
                <Lock className="w-3.5 h-3.5 mr-1.5" />
                Unlock Flow
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Smart Unlock Experience
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <PenTool className="w-5 h-5" />,
                    title: "Draw to Unlock",
                    desc: "Open a protected app and SignLock instantly shows the drawing canvas. Draw your signature to unlock.",
                  },
                  {
                    icon: <RefreshCw className="w-5 h-5" />,
                    title: "Grace Period",
                    desc: "Switch between apps freely. If you return within 1.5 seconds, no lock screen is shown.",
                  },
                  {
                    icon: <KeyRound className="w-5 h-5" />,
                    title: "Backup PIN",
                    desc: "Can't remember your drawing? Use your backup PIN. After too many failures, a 30-second lockout activates.",
                  },
                  {
                    icon: <Eye className="w-5 h-5" />,
                    title: "Privacy First",
                    desc: "The unlock screen is protected with FLAG_SECURE — no screenshots or screen recording can capture it.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                        opacity: 0.9,
                      }}
                    >
                      <div style={{ color: "white" }}>{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" className="flex justify-center lg:justify-end">
              <PhoneAnimation compact />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ============ SECURITY ============ */}
      <section id="security" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--background-secondary), var(--background))"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px]" style={{ backgroundColor: "var(--accent)", opacity: 0.08 }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Security
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Security by Design
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Your data never leaves your device. SignLock is built on a zero-trust, privacy-first architecture.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "AES-256/GCM Encryption",
                desc: "Your drawing template and backup PIN are encrypted with military-grade AES-256 via Android Keystore. The encryption key never leaves secure hardware.",
              },
              {
                icon: <WifiOff className="w-10 h-10" />,
                title: "100% Offline",
                desc: "No internet connection required. Everything is processed locally on your device. No servers, no cloud, no data transmission.",
              },
              {
                icon: <RefreshCw className="w-10 h-10" />,
                title: "Automatic Recovery",
                desc: "If encryption keys are ever corrupted, SignLock automatically resets to prevent lockout. Your data stays safe and accessible.",
              },
              {
                icon: <Fingerprint className="w-10 h-10" />,
                title: "Gesture Recognition",
                desc: "Advanced multi-factor matching algorithm compares point distance, direction similarity, and stroke length for accurate forgery detection.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card gradient className="text-center p-8 h-full">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: "white" }}>{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16">
            <div
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{
                backgroundColor: "var(--background-card)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
              >
                <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Your Privacy is Our Promise
              </h3>
              <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                SignLock operates entirely on your device. We never have access to your drawing, your PIN, or the apps you protect. There are no accounts, no sign-ups, and no data collection. What you lock stays locked — only you hold the key.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px]" style={{ backgroundColor: "var(--accent)", opacity: 0.05 }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Built on Strong Foundations
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 gradient-text">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PREMIUM ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, var(--background), var(--background-secondary))"
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.05 }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Premium
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Unlock Premium Features
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Get the most out of SignLock with a premium subscription.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn direction="left">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  backgroundColor: "var(--background-card)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  Free
                </h3>
                <p className="text-4xl font-bold mb-6 gradient-text">$0</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Drawing-based app locking",
                    "Backup PIN recovery",
                    "Classic drawing theme",
                    "Standard lock policies",
                    "Ad-supported",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div
                className="rounded-2xl p-8 h-full relative"
                style={{
                  background: "linear-gradient(135deg, var(--background-card), rgba(139,92,246,0.08))",
                  border: "1px solid",
                  borderColor: "var(--accent)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 40px var(--glow)",
                }}
              >
                <div
                  className="absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    color: "white",
                  }}
                >
                  PREMIUM
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  Premium
                </h3>
                <p className="text-4xl font-bold mb-6 gradient-text">
                  Subscription
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Free",
                    "All 12 drawing themes",
                    "Smart scheduling per app",
                    "Ad-free experience",
                    "Custom theme requests",
                    "Best support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 50%, var(--background) 100%)",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px]" style={{ backgroundColor: "var(--accent)", opacity: 0.1 }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent-purple)", opacity: 0.08 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <Badge variant="info" className="mb-6 inline-flex">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Ready to Secure Your Apps?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Download SignLock on Google Play and start protecting your apps with your personal signature.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold" style={{ borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "rgba(0,212,255,0.06)" }}>
                <Sparkles className="w-3.5 h-3.5" />
                Coming Soon
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="group">
                    <Download className="mr-2 w-5 h-5" />
                    Get It on Google Play
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/product-details">
                  <Button variant="secondary" size="lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}

function PhoneAnimation({ compact }: { compact?: boolean }) {
  const [phase, setPhase] = useState<"locked" | "drawing" | "verifying" | "success" | "unlocked">("locked");
  const sizeClass = compact ? "w-[260px] sm:w-[300px]" : "w-[280px] sm:w-[320px]";

  const schedule = useCallback(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase("drawing"), 1000));
    timers.push(setTimeout(() => setPhase("verifying"), 2600));
    timers.push(setTimeout(() => setPhase("success"), 3200));
    timers.push(setTimeout(() => setPhase("unlocked"), 3900));
    timers.push(setTimeout(() => {
      setPhase("locked");
      timers.push(setTimeout(() => schedule(), 2000));
    }, 6500));
    return timers;
  }, []);

  useEffect(() => {
    const timers = schedule();
    return () => timers.forEach(clearTimeout);
  }, [schedule]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center lg:justify-end"
    >
      <div className="relative">
        <div className="absolute -inset-8 rounded-[48px] blur-[80px]" style={{ backgroundColor: "var(--accent)", opacity: 0.12 }} />

        <AnimatePresence>
          {phase === "unlocked" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -inset-6 rounded-[40px] blur-[60px]"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.25)" }}
            />
          )}
        </AnimatePresence>

        <div
          className="relative rounded-[40px] p-3"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
            border: "1px solid var(--border)",
            boxShadow: "0 30px 80px var(--shadow)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className={`relative aspect-[9/19] ${sizeClass} rounded-[32px] overflow-hidden bg-[#0a0a0a]`}>
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-3 text-[10px] text-white/60">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3.5 h-2 rounded-sm border border-white/30" />
              </div>
            </div>

            <AnimatePresence>
              {(phase === "locked" || phase === "drawing" || phase === "verifying" || phase === "success") && (
                <motion.div
                  key="lockscreen"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85, y: 40 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <motion.p
                    className="text-xs text-white/40 font-medium"
                    animate={phase === "locked" ? { opacity: 0.4 } : { opacity: 0.2 }}
                  >
                    signlock
                  </motion.p>
                  <motion.p
                    className="text-[10px] mb-4"
                    style={{ color: phase === "locked" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)" }}
                  >
                    App Locked
                  </motion.p>

                  <div
                    className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: "radial-gradient(circle at 30% 40%, rgba(139,92,246,0.25), rgba(0,0,0,0.9))",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    <svg viewBox="0 0 180 180" className="w-4/5 h-4/5">
                      <motion.path
                        d="M25,100 Q55,25 90,70 T130,50 T155,110"
                        fill="none"
                        stroke="url(#heroSigGrad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          phase === "drawing" || phase === "verifying" || phase === "success"
                            ? { pathLength: 1, opacity: 0.8 }
                            : { pathLength: 0, opacity: 0 }
                        }
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="heroSigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#00D4FF" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {phase === "verifying" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                            boxShadow: "0 0 30px var(--glow)",
                          }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}

                    {phase === "success" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, #10B981, #059669)",
                            boxShadow: "0 0 40px rgba(16,185,129,0.5)",
                          }}
                        >
                          <motion.svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </motion.svg>
                        </motion.div>
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0.5, scale: 0.8 }}
                            animate={{ opacity: 0, scale: 2.5 }}
                            transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: "easeOut" }}
                            className="absolute w-16 h-16 rounded-full border-2 border-[#10B981]"
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <motion.p className="mt-4 text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {phase === "locked" && "Draw anywhere to unlock"}
                    {phase === "drawing" && "Drawing..."}
                    {phase === "verifying" && "Verifying..."}
                    {phase === "success" && "Unlocked!"}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {phase === "unlocked" && (
                <motion.div
                  key="homescreen"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 flex flex-col"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center pt-10">
                    <p className="text-4xl font-light text-white/80">9:41</p>
                    <p className="text-xs text-white/30 mt-1">Tue, Jul 14</p>
                  </div>
                  <div className="px-8 pb-4">
                    <div className="grid grid-cols-4 gap-5">
                      {[
                        { icon: MessageSquare, label: "Messages", color: "#34C759" },
                        { icon: Camera, label: "Camera", color: "#FF9500" },
                        { icon: Settings, label: "Settings", color: "#8E8E93" },
                        { icon: Lock, label: "SignLock", color: "#8b5cf6" },
                      ].map((app, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                          className="flex flex-col items-center gap-1"
                        >
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: app.color }}>
                            <app.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[9px] text-white/50 truncate max-w-full">{app.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 pb-6">
                    <div className="rounded-2xl px-4 py-3 flex justify-around" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                      {["Messages", "Camera", "SignLock"].map((label, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                            backgroundColor: i === 0 ? "#34C759" : i === 1 ? "#FF9500" : "#8b5cf6"
                          }}>
                            {i === 0 ? <MessageSquare className="w-5 h-5 text-white" /> : i === 1 ? <Camera className="w-5 h-5 text-white" /> : <Lock className="w-5 h-5 text-white" />}
                          </div>
                          <span className="text-[8px] text-white/40">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {phase !== "unlocked" && (
                <motion.div
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 z-20 flex justify-around items-center px-8 py-4 border-t border-white/5"
                >
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                  <div className="w-4 h-4 rounded-full bg-purple-500/50" />
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
