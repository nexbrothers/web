"use client";

import { Container, Button } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import { Smartphone, Shield, TrendingDown, TrendingUp, PiggyBank, Target, BarChart3, SplitSquareVertical, Wallet, Download, Search, ArrowLeftRight } from "lucide-react";
import Link from "next/link";

const MMR_PURPLE = "#5844EE";

const features = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Income Tracking",
    desc: "Record salary, freelance income, investments, and more. Categorize each income source to understand your earnings.",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Expense Tracking",
    desc: "Log every expense with detailed categories. See exactly where your money goes each month.",
  },
  {
    icon: <ArrowLeftRight className="w-5 h-5" />,
    title: "Transfers",
    desc: "Move money between accounts seamlessly. The app tracks transfers without double-counting.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Auto SMS Tracking",
    desc: "Automatically detect and import transactions from financial SMS messages.",
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    title: "Budget Management",
    desc: "Set monthly budgets per category and track spending with visual progress bars.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Savings Goals",
    desc: "Set financial goals, track progress, and stay motivated with visual milestones.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Reports & Analytics",
    desc: "Understand spending patterns with pie charts, trend lines, and AI-generated insights.",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Multi-Account Support",
    desc: "Manage bank accounts, wallets, credit cards, and UPI in one place.",
  },
  {
    icon: <SplitSquareVertical className="w-5 h-5" />,
    title: "Split Bills",
    desc: "Track group expenses, split bills, and settle up with friends.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Search & Filter",
    desc: "Find any transaction instantly with powerful search and multi-dimensional filters.",
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Export Reports",
    desc: "Export your financial data as PDF or CSV for record-keeping or sharing.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Offline & Private",
    desc: "All data stays on your device. No accounts, no cloud, no tracking.",
  },
];

const userJourney = [
  { step: "1", title: "Install the App", desc: "Download from Google Play Store. No signup needed." },
  { step: "2", title: "Add Your Accounts", desc: "Add bank accounts, wallets, credit cards, or UPI." },
  { step: "3", title: "Start Tracking", desc: "Log transactions manually or enable SMS auto-tracking." },
  { step: "4", title: "Set Budgets & Goals", desc: "Create monthly budgets and savings goals." },
  { step: "5", title: "View Reports", desc: "Analyze spending patterns, trends, and get insights." },
  { step: "6", title: "Export & Share", desc: "Export reports as PDF/CSV for your records." },
];

export default function ProductDetails() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: MMR_PURPLE, opacity: 0.08 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: MMR_PURPLE }}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(88, 68, 238, 0.15)", color: MMR_PURPLE }}
              >
                Product Overview
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              My Money Report
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A comprehensive personal finance tracking app that helps you understand where
              your money goes. Track expenses, manage budgets, set financial goals, and
              analyze your spending — all completely offline and private.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />
        <Container className="relative z-10">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Complete User Journey</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              From installation to financial clarity — here&apos;s how My Money Report works.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {userJourney.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className="rounded-xl p-5 text-center h-full"
                  style={{
                    backgroundColor: "var(--background-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3"
                    style={{ backgroundColor: `${MMR_PURPLE}20`, color: MMR_PURPLE }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>All Features</h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Everything you need to take control of your finances.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-xl p-5 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--background-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${MMR_PURPLE}15` }}
                  >
                    <div style={{ color: MMR_PURPLE }}>{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{feature.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Ready to Take Control?</h2>
            <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              Download My Money Report and start understanding your finances today.
            </p>
            <Link href="/">
              <Button size="lg" className="group">
                Coming Soon
              </Button>
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
