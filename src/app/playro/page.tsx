"use client";

import { useState } from "react";
import { Container, Button, Card } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
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
  Download,
  Play,
  Building,
  GraduationCap,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Tournament Creation",
    description:
      "Set up tournaments in minutes with customizable formats, rules, and schedules.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Management",
    description:
      "Register teams, manage player rosters, and handle substitutions effortlessly.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Live Scoring",
    description:
      "Real-time ball-by-ball scoring with automatic run rate and projection calculations.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Points Table",
    description:
      "Automatic standings calculation based on match results, NRR, and tie-breakers.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Match Fixtures",
    description:
      "Generate fixtures automatically or create custom schedules with ease.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Statistics",
    description:
      "Comprehensive stats for players and teams including batting, bowling, and fielding.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Multi-Format Support",
    description: "Support for T20, ODI, Test, and custom match formats.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile First",
    description:
      "Optimized for mobile devices for scoring on-the-go at the ground.",
  },
];

const benefits = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Tournament Organizers",
    description:
      "Streamline your entire tournament from registration to finals with automated scoring and standings.",
    points: [
      "Easy tournament setup",
      "Automated fixture generation",
      "Real-time results sharing",
    ],
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Cricket Clubs",
    description:
      "Manage your club's tournaments, track player performance, and build your cricket community.",
    points: [
      "Central player database",
      "Historical statistics",
      "Club branding options",
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Sports Academies",
    description:
      "Track student progress through inter-academy tournaments and competitive matches.",
    points: [
      "Student performance tracking",
      "Tournament archives",
      "Progress reports",
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Corporate Events",
    description:
      "Perfect for office cricket tournaments with easy team registration and live updates.",
    points: [
      "Quick setup",
      "Employee engagement",
      "Leaderboards & awards",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Create Tournament",
    description:
      "Set up your tournament with custom rules, formats, and team registration.",
  },
  {
    number: "02",
    title: "Add Teams",
    description:
      "Register teams, add players, and organize groups or direct knockout rounds.",
  },
  {
    number: "03",
    title: "Go Live",
    description:
      "Start matches, track live scores, and share results with participants instantly.",
  },
];

const faqs = [
  {
    question: "Is Playro free to use?",
    answer:
      "Yes! Playro offers a free tier that includes all essential features for managing small tournaments. Premium features are available for larger tournaments and organizations.",
  },
  {
    question: "Can I use Playro offline?",
    answer:
      "Playro requires an internet connection for real-time features. However, you can score matches offline and sync when connected.",
  },
  {
    question: "What cricket formats are supported?",
    answer:
      "Playro supports T20, ODI, Test, and custom formats. You can configure overs, powerplays, and other rules as per your tournament needs.",
  },
  {
    question: "How many teams can I add to a tournament?",
    answer:
      "The free version supports up to 8 teams per tournament. Premium plans offer unlimited teams and participants.",
  },
  {
    question: "Is there an iOS app?",
    answer:
      "Currently, Playro is available on Android via Google Play. iOS version is coming soon - stay tuned!",
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

export default function PlayroPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#10B981]/20 text-[#10B981]">
                  Available Now
                </span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Playro
              </h1>
              <p 
                className="text-2xl font-medium mb-6"
                style={{ color: "var(--accent)" }}
              >
                The Complete Cricket Tournament Management Solution
              </p>
              <p 
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Create, organize, and manage cricket tournaments with ease.
                Real-time scoring, automatic standings, and detailed
                statistics - all in one powerful app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nexbrothers.playro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto group">
                    <Download className="mr-2 w-5 h-5" />
                    Download Now
                  </Button>
                </a>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div 
                className="flex items-center gap-6 mt-8 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Android Available
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  iOS Coming Soon
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="hidden lg:block">
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-3xl blur-3xl"
                  style={{ 
                    background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                    opacity: 0.2 
                  }}
                />
                <div 
                  className="relative backdrop-blur-xl border rounded-3xl p-8 text-center"
                  style={{ 
                    backgroundColor: "var(--background-card)",
                    borderColor: "var(--border)" 
                  }}
                >
                  <Trophy style={{ color: "var(--accent)" }} className="w-24 h-24 mx-auto mb-6" />
                  <p style={{ color: "var(--text-secondary)" }}>App Screenshot Coming Soon</p>
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
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Managing Cricket Tournaments Shouldn&apos;t Be Complex
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Juggling spreadsheets, manual score tracking, and endless
              WhatsApp groups? We&apos;ve been there. Playro eliminates the chaos
              and lets you focus on what matters - the game.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                "No more spreadsheet nightmares",
                "No more manual calculations",
                "No more communication chaos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: "var(--background-card)",
                    borderColor: "var(--border)" 
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
              Everything you need to run professional cricket tournaments, all
              in one place.
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
                      opacity: 0.9 
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
            background: "linear-gradient(to bottom, var(--background-secondary), var(--background))" 
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
              Get started with Playro in three simple steps.
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
                        opacity: 0.2 
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
              Whether you&apos;re organizing a local gully cricket tournament or
              a professional league, Playro adapts to your needs.
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
                      opacity: 0.9 
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
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" 
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
                borderColor: "var(--border)" 
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

      {/* Download CTA */}
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
                Ready to Transform Your Tournaments?
              </h2>
              <p 
                className="text-lg mb-10"
                style={{ color: "var(--text-secondary)" }}
              >
                Join thousands of cricket enthusiasts who trust Playro for
                their tournament management needs. Download now and experience
                the difference.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nexbrothers.playro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="group">
                    <Download className="mr-2 w-5 h-5" />
                    Get it on Google Play
                  </Button>
                </a>
                <Button variant="secondary" size="lg" disabled>
                  <Smartphone className="mr-2 w-5 h-5" />
                  App Store (Coming Soon)
                </Button>
              </div>

              <p 
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Free to use • No credit card required • Premium features
                available
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
