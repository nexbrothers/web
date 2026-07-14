"use client";

import { Container, Card, Badge } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import {
  ShieldCheck,
  PenTool,
  KeyRound,
  Palette,
  Smartphone,
  WifiOff,
  Eye,
  Clock,
  Fingerprint,
  RefreshCw,
  Download,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/ui/ui";
import { motion } from "framer-motion";

export default function ProductDetails() {
  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.1 }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent-purple)", opacity: 0.08 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <Badge variant="info" className="mb-4 inline-flex">Product Overview</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              SignLock in Detail
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SignLock is a unique drawing-based app locker for Android. Instead of PINs or patterns, you lock your apps with a personal drawing — something only you can replicate.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* What is SignLock */}
      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                What is SignLock?
              </h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  SignLock reimagines app security by replacing traditional PINs, patterns, and passwords with something more personal — your free-form drawing or signature.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  When you open a protected app, SignLock presents a full-screen drawing canvas. Simply draw your signature to unlock. The app uses an advanced gesture recognition algorithm to match your drawing against your saved template, all processed locally on your device.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Fully offline and encrypted end-to-end on your device, SignLock ensures your privacy is never compromised.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] blur-[60px]" style={{ backgroundColor: "var(--accent)", opacity: 0.08 }} />
                <div
                  className="relative rounded-[32px] p-2.5"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                    border: "1px solid var(--border)",
                    boxShadow: "0 20px 60px var(--shadow)",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <div className="aspect-[9/19] w-[240px] rounded-[28px] overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center p-5">
                    <div className="text-[10px] text-white/40 font-medium mb-6">signlock</div>
                    <div
                      className="w-full aspect-square rounded-xl flex items-center justify-center"
                      style={{
                        background: "radial-gradient(circle at 40% 30%, rgba(139,92,246,0.3), rgba(0,0,0,0.8))",
                        border: "1px solid rgba(139,92,246,0.2)",
                      }}
                    >
                      <svg viewBox="0 0 120 120" className="w-4/5 h-4/5 opacity-70">
                        <path
                          d="M20,75 Q35,20 55,55 T85,35 T105,75"
                          fill="none"
                          stroke="url(#detGrad)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="detGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#00D4FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="mt-3 text-[10px] text-white/30">Draw anywhere to unlock</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Core Architecture */}
      <section className="py-20 relative">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Architecture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              How SignLock Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              A deep dive into the technology powering SignLock.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Gesture Recognition Engine",
                desc: "The core matching algorithm uses three weighted metrics: point distance similarity (40%) via bidirectional Chamfer distance, segment direction similarity (40%) using cosine similarity, and stroke length similarity (20%). Each stroke is resampled to 64 equidistant points for accurate comparison. Match threshold: 85%.",
              },
              {
                icon: <Fingerprint className="w-8 h-8" />,
                title: "Android Keystore Encryption",
                desc: "Drawing templates and backup PINs are encrypted using AES-256/GCM/NoPadding via the Android Keystore system. The encryption key is hardware-backed and never exposed to the application layer. Decrypted only in memory for matching, then securely discarded.",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Accessibility Service Integration",
                desc: "SignLock uses Android's Accessibility Service to monitor window state changes. When a protected app opens, the service triggers the lock screen overlay. The service runs efficiently in the background with minimal battery impact.",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Overlay Lock Screen",
                desc: "The unlock screen is rendered as a full-screen WindowManager overlay using Jetpack Compose. It covers the locked app completely, including the status bar. FLAG_SECURE is set to prevent screenshots and screen recording.",
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Session & Grace Period Management",
                desc: "After unlocking, a grace period (1.5s) prevents re-locking during rapid app switching. A cooldown period (2s) activates after each unlock. When the screen turns off, all unlock state is cleared, requiring re-authentication.",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Multi-Device Compatibility",
                desc: "Built with Jetpack Compose and Material 3 for modern Android devices. Supports both portrait and landscape orientations. Special handling for Samsung One UI battery optimization to ensure reliable background operation.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Card gradient className="p-8 h-full">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
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
        </Container>
      </section>

      {/* Setup Flow Details */}
      <section className="py-20 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />
        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">User Flow</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Complete User Journey
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Onboarding",
                desc: "Welcome screen introducing SignLock's core value: drawing-based app protection. Users learn about the fully offline, privacy-first approach.",
              },
              {
                step: "02",
                title: "Permissions Setup",
                desc: "Two required permissions: Accessibility Service (to detect protected apps) and battery optimization exemption (to keep the service running reliably). Real-time status badges show grant progress.",
              },
              {
                step: "03",
                title: "App Selection",
                desc: "Searchable list of all installed apps. Users tap to select which apps to protect. Selected apps show a checkmark. An accessibility gate prevents proceeding if the service is disabled.",
              },
              {
                step: "04",
                title: "Drawing Password Creation",
                desc: "Full-screen drawing canvas. Users draw any pattern or signature. The drawing must meet minimum size requirements (40px bounding box, 30px path length). Undo and Clear options available.",
              },
              {
                step: "05",
                title: "Drawing Confirmation (Two Steps)",
                desc: "Users draw their pattern twice more for consistency. The GestureRecognizer matches each drawing against the provisional template. On failure, a pattern guide hint appears. On success, the template is encrypted and saved.",
              },
              {
                step: "06",
                title: "Backup PIN Setup",
                desc: "Users choose between 4 or 6-digit PIN length. Enter the PIN using a custom keypad. Animated shake on error. PIN is encrypted via Android Keystore and stored in Room database.",
              },
              {
                step: "07",
                title: "Dashboard & Management",
                desc: "Four-tab dashboard: Apps (manage protected apps), Security (lock policies, privacy mode, change password/PIN), Themes (drawing themes, background themes), Settings (wallpaper, accessibility, app info, reset).",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className="rounded-xl p-6 md:p-8 flex gap-6"
                  style={{
                    backgroundColor: "var(--background-card)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                      color: "white",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Unlock Flow */}
      <section className="py-20 relative">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <Lock className="w-3.5 h-3.5 mr-1.5" />
              Unlock
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              The Unlock Experience
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Drawing Mode",
                items: [
                  "Full-screen drawing canvas",
                  "Supports complex multi-stroke drawings",
                  "Real-time stroke rendering with glow effects",
                  "Privacy mode hides strokes as you draw",
                  "Clear button to restart",
                  "Switch to backup PIN option",
                  "30-second lockout after too many failures",
                ],
              },
              {
                title: "PIN Mode",
                items: [
                  "Custom numeric keypad (0-9)",
                  "Submit and backspace buttons",
                  "PIN dots indicator",
                  "Animated shake on incorrect PIN",
                  "Switch to drawing mode option",
                  "Same 30-second lockout protection",
                  "4 or 6-digit PIN support",
                ],
              },
              {
                title: "Auto-Unlock Animation",
                items: [
                  "Checkmark animation on successful unlock",
                  "Scale-down and fade-out transition",
                  "Returns seamlessly to the locked app",
                  "Grace period prevents re-locking (1.5s)",
                  "Cooldown between unlock attempts (2s)",
                  "Screen-off clears all unlock state",
                  "Supports both portrait and landscape",
                ],
              },
            ].map((section, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card gradient className="p-8 h-full">
                  <h3 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Premium & Availability */}
      <section className="py-20 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />
        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge variant="info" className="mb-4 inline-flex">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Availability
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Get SignLock
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              SignLock is available on Google Play. Download it today and secure your apps with your signature.
            </p>
          </FadeIn>

          <div className="max-w-lg mx-auto text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.nexbrothers.signlock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  <Download className="mr-2 w-5 h-5" />
                  Download from Google Play
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
