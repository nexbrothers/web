"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import {
  Trophy,
  Users,
  BarChart3,
  Calendar,
  Zap,
  Globe,
  Shield,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Bell,
  Play,
  Building,
  GraduationCap,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const features = [
  { icon: <Trophy className="w-5 h-5" />, title: "Tournament creation", description: "Set up tournaments in minutes with customizable formats, rules, and schedules." },
  { icon: <Users className="w-5 h-5" />, title: "Team management", description: "Register teams, manage player rosters, and handle substitutions effortlessly." },
  { icon: <Zap className="w-5 h-5" />, title: "Live scoring", description: "Real-time ball-by-ball scoring with automatic run rate and projection calculations." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Points table", description: "Automatic standings calculation based on match results, NRR, and tie-breakers." },
  { icon: <Calendar className="w-5 h-5" />, title: "Match fixtures", description: "Generate fixtures automatically or create custom schedules with ease." },
  { icon: <Globe className="w-5 h-5" />, title: "Statistics", description: "Comprehensive stats for players and teams: batting, bowling, and fielding." },
  { icon: <Shield className="w-5 h-5" />, title: "Multi-format support", description: "Support for T20, ODI, Test, and custom match formats." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Mobile first", description: "Optimized for mobile devices for scoring on the go, right at the ground." },
];

const benefits = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Tournament organizers",
    description: "Streamline your entire tournament from registration to finals with automated scoring and standings.",
    points: ["Easy tournament setup", "Automated fixture generation", "Real-time results sharing"],
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Cricket clubs",
    description: "Manage your club's tournaments, track player performance, and build your cricket community.",
    points: ["Central player database", "Historical statistics", "Club branding options"],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Sports academies",
    description: "Track student progress through inter-academy tournaments and competitive matches.",
    points: ["Student performance tracking", "Tournament archives", "Progress reports"],
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Corporate events",
    description: "Perfect for office cricket tournaments with easy team registration and live updates.",
    points: ["Quick setup", "Employee engagement", "Leaderboards and awards"],
  },
];

const steps = [
  { title: "Create tournament", description: "Set up your tournament with custom rules, formats, and team registration." },
  { title: "Add teams", description: "Register teams, add players, and organize groups or direct knockout rounds." },
  { title: "Go live", description: "Start matches, track live scores, and share results with participants instantly." },
];

const faqs = [
  {
    question: "Is Playro free to use?",
    answer: "Yes. Playro offers a free tier that includes all essential features for managing small tournaments. Premium features are available for larger tournaments and organizations.",
  },
  {
    question: "Can I use Playro offline?",
    answer: "Playro requires an internet connection for real-time features. However, you can score matches offline and sync when connected.",
  },
  {
    question: "What cricket formats are supported?",
    answer: "Playro supports T20, ODI, Test, and custom formats. You can configure overs, powerplays, and other rules as per your tournament needs.",
  },
  {
    question: "How many teams can I add to a tournament?",
    answer: "The free version supports up to 8 teams per tournament. Premium plans offer unlimited teams and participants.",
  },
  {
    question: "Is there an iOS app?",
    answer: "Currently Playro is available on Android via Google Play. An iOS version is coming soon.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left">
        <span className="text-base font-medium pr-4" style={{ color: "var(--text-primary)" }}>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 shrink-0" style={{ color: "var(--accent)" }} />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0" style={{ color: "var(--text-secondary)" }} />
        )}
      </button>
      {isOpen && <div className="pb-5 leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>{answer}</div>}
    </div>
  );
}

export default function PlayroPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                  <Trophy className="w-5 h-5" style={{ color: "#fff" }} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--background-secondary)", color: "var(--accent)" }}>
                  Coming soon
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                Playro
              </h1>
              <p className="text-xl font-medium mb-5" style={{ color: "var(--accent)" }}>
                The complete cricket tournament management solution
              </p>
              <p className="text-lg mb-8 max-w-md" style={{ color: "var(--text-secondary)" }}>
                Create, organize, and manage cricket tournaments with ease. Real-time
                scoring, automatic standings, and detailed statistics, in one app.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                  style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
                >
                  <Bell className="w-4 h-4" />
                  Get notified
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold border"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                >
                  <Play className="w-4 h-4" />
                  Watch demo
                </button>
              </div>

              <p className="text-sm mt-6" style={{ color: "var(--text-muted)" }}>
                Android and iOS, both coming soon.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="hidden lg:flex justify-center">
              <div className="relative" style={{ maxWidth: "280px" }}>
                <div
                  className="absolute -inset-6 rounded-[40px]"
                  style={{ backgroundColor: "var(--accent)", opacity: 0.12 }}
                />
                <div className="relative rounded-[32px] overflow-hidden border" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
                  <Image src="/Playro.png" alt="Playro app screenshot" width={280} height={560} className="w-full h-auto object-contain" />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Managing cricket tournaments shouldn&apos;t be complex
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
              Juggling spreadsheets, manual score tracking, and endless WhatsApp groups?
              Playro eliminates the chaos and lets you focus on the game.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["No more spreadsheet nightmares", "No more manual calculations", "No more communication chaos"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl border" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
                  <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "var(--success)" }} />
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Everything to run a tournament, in one place
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <FadeIn className="mb-14 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Three steps to your first tournament
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <span className="font-display text-6xl font-semibold block mb-4" style={{ color: "var(--border-hover)" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Built for everyone in the game
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              From a local gully tournament to a professional league, Playro adapts to your needs.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="h-full p-7 rounded-[24px] border" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{benefit.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "var(--success)" }} />
                        <span style={{ color: "var(--text-secondary)" }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <FadeIn className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Frequently asked
            </h2>
          </FadeIn>

          <FadeIn className="max-w-3xl">
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-24" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn>
            <div className="rounded-[32px] p-10 sm:p-14" style={{ backgroundColor: "var(--ink)" }}>
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--on-ink)" }}>
                  Ready to transform your tournaments?
                </h2>
                <p className="text-lg mb-8" style={{ color: "var(--on-ink-muted)" }}>
                  Be among the first to experience Playro when it launches. Sign up for
                  early access.
                </p>

                <button
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold mb-6"
                  style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                >
                  <Bell className="w-4 h-4" />
                  Get notified when we launch
                </button>

                <div className="flex flex-wrap gap-2">
                  {["Free to use", "No credit card required", "Premium features available"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(246,245,241,0.08)", color: "var(--on-ink-muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
