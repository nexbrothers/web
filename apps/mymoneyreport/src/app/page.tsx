"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Button } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import { ArrowRight, ChevronDown, Shield, Smartphone, TrendingDown, TrendingUp, PiggyBank, Target, BarChart3, SplitSquareVertical, Wallet, Bell, CreditCard, Landmark, Receipt, ArrowLeftRight, Search, Download, PieChart, LineChart } from "lucide-react";

const MMR_PURPLE = "#5844EE";
const MMR_PURPLE_DARK = "#3B2E9F";
const MMR_GREEN = "#10B981";
const MMR_RED = "#EF4444";
const MMR_BLUE = "#3B82F6";
const MMR_ORANGE = "#F59E0B";
const MMR_PURPLE_ACCENT = "#8B5CF6";

function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return scaleX;
}

function ProgressBar() {
  const scaleX = useScrollProgress();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left"
      style={{ scaleX, background: `linear-gradient(90deg, ${MMR_PURPLE}, ${MMR_BLUE})` }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }}>
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: MMR_PURPLE, opacity: 0.12 }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: MMR_BLUE, opacity: 0.1 }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px]"
          style={{ backgroundColor: MMR_PURPLE, opacity: 0.06 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{
                backgroundColor: `${MMR_PURPLE}15`,
                color: MMR_PURPLE,
                border: `1px solid ${MMR_PURPLE}30`,
              }}
            >
              <Smartphone className="w-4 h-4" />
              100% Offline Finance Tracking
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Know Where{" "}
              <span style={{ color: MMR_PURPLE }}>Every Rupee</span>{" "}
              Goes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Track expenses, manage budgets, set financial goals, and understand your
              spending habits — all automatically from your SMS. Your data never leaves your
              device.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${MMR_PURPLE}, ${MMR_PURPLE_DARK})`,
                  boxShadow: `0 4px 20px ${MMR_PURPLE}40`,
                }}
              >
                Coming Soon
              </a>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  color: MMR_PURPLE,
                  borderColor: `${MMR_PURPLE}50`,
                }}
              >
                Explore Features
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 mt-10 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" style={{ color: MMR_GREEN }} />
                No Cloud Sync
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" style={{ color: MMR_BLUE }} />
                Auto SMS Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" style={{ color: MMR_PURPLE }} />
                Smart Reports
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <motion.div
                className="rounded-3xl p-1"
                style={{
                  background: `linear-gradient(135deg, ${MMR_PURPLE}40, ${MMR_BLUE}20, ${MMR_PURPLE}40)`,
                  boxShadow: `0 20px 80px ${MMR_PURPLE}30`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: "#0D1117", color: "white" }}
                >
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>Total Balance</p>
                        <p className="text-2xl font-bold text-white">₹ 1,84,290</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${MMR_GREEN}20` }}>
                          <TrendingUp className="w-4 h-4" style={{ color: MMR_GREEN }} />
                        </div>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${MMR_RED}20` }}>
                          <TrendingDown className="w-4 h-4" style={{ color: MMR_RED }} />
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-32 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <LineChart className="w-full h-full p-4" style={{ color: MMR_PURPLE, opacity: 0.6 }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl p-3" style={{ backgroundColor: `${MMR_GREEN}10` }}>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>Income</p>
                        <p className="text-lg font-bold" style={{ color: MMR_GREEN }}>₹ 42,500</p>
                      </div>
                      <div className="rounded-xl p-3" style={{ backgroundColor: `${MMR_RED}10` }}>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>Expenses</p>
                        <p className="text-lg font-bold" style={{ color: MMR_RED }}>₹ 28,340</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: "#161B22" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MMR_PURPLE}20` }}>
                        <Receipt className="w-5 h-5" style={{ color: MMR_PURPLE }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Grocery Store</p>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>Today, 2:30 PM</p>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: MMR_RED }}>-₹ 2,450</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: "#161B22" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MMR_GREEN}20` }}>
                        <TrendingUp className="w-5 h-5" style={{ color: MMR_GREEN }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Salary Credit</p>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>Yesterday</p>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: MMR_GREEN }}>+₹ 42,500</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
          style={{ color: "var(--text-secondary)" }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProblemsSection() {
  const problems = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Where did all my money go?",
      description: "You earn every month but can't figure out where it's all spent. Bank statements are overwhelming and manual tracking is tedious.",
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Saving feels impossible",
      description: "Without clear visibility into your spending patterns, saving for goals feels like guessing in the dark.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "No meaningful insights",
      description: "Bank apps show transactions but don't help you understand categories, trends, or how to improve your financial habits.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE}15`,
              color: MMR_PURPLE,
              border: `1px solid ${MMR_PURPLE}30`,
            }}
          >
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Managing Money{" "}
            <span style={{ color: MMR_PURPLE }}>Shouldn't Be Hard</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Most people struggle to track their finances. Bank statements are scattered,
            manual logging is exhausting, and understanding where your money actually goes
            feels impossible.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--background-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${MMR_PURPLE}15` }}
                >
                  <div style={{ color: MMR_PURPLE }}>{problem.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {problem.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

function TrackEverythingSection() {
  const features = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Income Tracking",
      description: "Record salary, freelance payments, investments, and any money coming in. Categorize income sources to understand your earnings.",
      color: MMR_GREEN,
      bgColor: `${MMR_GREEN}15`,
    },
    {
      icon: <TrendingDown className="w-5 h-5" />,
      title: "Expense Tracking",
      description: "Log every expense with categories like Food, Transport, Shopping, Bills, and more. See exactly where your money goes each month.",
      color: MMR_RED,
      bgColor: `${MMR_RED}15`,
    },
    {
      icon: <ArrowLeftRight className="w-5 h-5" />,
      title: "Transfers Between Accounts",
      description: "Move money between your bank accounts, wallets, or credit cards. The app tracks transfers accurately without double-counting.",
      color: MMR_BLUE,
      bgColor: `${MMR_BLUE}15`,
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "10+ Expense Categories",
      description: "From Food & Dining to Healthcare, Entertainment, and Bills — detailed categories help you understand spending patterns at a glance.",
      color: MMR_ORANGE,
      bgColor: `${MMR_ORANGE}15`,
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Search & Filter",
      description: "Find any transaction instantly. Filter by type, category, account, date range, or search by title. Everything is accessible in seconds.",
      color: MMR_PURPLE_ACCENT,
      bgColor: `${MMR_PURPLE_ACCENT}15`,
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Export Reports",
      description: "Export your financial data as PDF or CSV. Share with your accountant, keep for your records, or analyze further in your favorite tool.",
      color: MMR_PURPLE,
      bgColor: `${MMR_PURPLE}15`,
    },
  ];

  const categories = [
    { name: "Food & Dining", icon: "🍕", color: MMR_RED },
    { name: "Transport", icon: "🚗", color: MMR_ORANGE },
    { name: "Shopping", icon: "🛍️", color: MMR_PURPLE },
    { name: "Bills & Utilities", icon: "💡", color: MMR_BLUE },
    { name: "Entertainment", icon: "🎬", color: MMR_PURPLE_ACCENT },
    { name: "Healthcare", icon: "🏥", color: MMR_GREEN },
    { name: "Education", icon: "📚", color: "#6366F1" },
    { name: "Groceries", icon: "🛒", color: "#EC4899" },
    { name: "Travel", icon: "✈️", color: "#14B8A6" },
    { name: "Others", icon: "📦", color: "#8B8B8B" },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE}15`,
              color: MMR_PURPLE,
              border: `1px solid ${MMR_PURPLE}30`,
            }}
          >
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Track Every{" "}
            <span style={{ color: MMR_PURPLE }}>Transaction</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you&apos;re logging income, expenses, or transfers between accounts,
            My Money Report makes it fast and intuitive.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn>
            <div className="rounded-2xl p-1" style={{ background: `linear-gradient(135deg, ${MMR_PURPLE}30, transparent)` }}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#0D1117", color: "white" }}>
                <div className="p-5 space-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold" style={{ color: "white" }}>Add Transaction</h3>
                    <div className="flex rounded-lg p-0.5" style={{ backgroundColor: "#161B22" }}>
                      {["Expense", "Income", "Transfer"].map((tab) => (
                        <span
                          key={tab}
                          className="px-3 py-1.5 text-xs font-medium rounded-md"
                          style={{
                            backgroundColor: tab === "Expense" ? MMR_RED : "transparent",
                            color: tab === "Expense" ? "white" : "#94A3B8",
                          }}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center py-6">
                    <p className="text-4xl font-bold text-white mb-1">₹ 0</p>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>Enter amount</p>
                  </div>

                  <div className="flex justify-center gap-2 mb-4">
                    {["+100", "+500", "+1000"].map((amt) => (
                      <span
                        key={amt}
                        className="px-3 py-1 text-xs rounded-lg font-medium"
                        style={{ backgroundColor: "#161B22", color: "#94A3B8" }}
                      >
                        {amt}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {categories.slice(0, 5).map((cat) => (
                      <div key={cat.name} className="flex flex-col items-center gap-1">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ backgroundColor: `${cat.color}20` }}
                        >
                          {cat.icon}
                        </div>
                        <span className="text-[10px] truncate w-full text-center" style={{ color: "#94A3B8" }}>
                          {cat.name.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {categories.slice(5, 10).map((cat) => (
                      <div key={cat.name} className="flex flex-col items-center gap-1">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ backgroundColor: `${cat.color}20` }}
                        >
                          {cat.icon}
                        </div>
                        <span className="text-[10px] truncate w-full text-center" style={{ color: "#94A3B8" }}>
                          {cat.name.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: "1px solid #1F2937" }}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#161B22" }}
                      >
                        <Landmark className="w-4 h-4" style={{ color: "#94A3B8" }} />
                      </div>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>Select Account</span>
                    </div>
                    <span className="text-xs" style={{ color: "#A78BFA" }}>
                      More Options +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl p-1" style={{ background: `linear-gradient(135deg, ${MMR_GREEN}20, transparent)` }}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#0D1117", color: "white" }}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm" style={{ color: "white" }}>Recent Transactions</h3>
                    <Search className="w-4 h-4" style={{ color: "#94A3B8" }} />
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: "Salary Credit", cat: "Income", amount: "+₹ 42,500", type: "income" },
                      { name: "Grocery Store", cat: "Groceries", amount: "-₹ 2,450", type: "expense" },
                      { name: "Netflix Subscription", cat: "Entertainment", amount: "-₹ 649", type: "expense" },
                      { name: "Uber Ride", cat: "Transport", amount: "-₹ 340", type: "expense" },
                      { name: "Freelance Payment", cat: "Income", amount: "+₹ 15,000", type: "income" },
                      { name: "Electricity Bill", cat: "Bills", amount: "-₹ 1,820", type: "expense" },
                      { name: "Transfer to Savings", cat: "Transfer", amount: "-₹ 5,000", type: "transfer" },
                    ].map((txn, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                        style={{ backgroundColor: i % 2 === 0 ? "#161B22" : "transparent" }}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                          style={{
                            backgroundColor: txn.type === "income" ? `${MMR_GREEN}20` : txn.type === "expense" ? `${MMR_RED}20` : `${MMR_BLUE}20`,
                            color: txn.type === "income" ? MMR_GREEN : txn.type === "expense" ? MMR_RED : MMR_BLUE,
                          }}
                        >
                          {txn.type === "income" ? "↑" : txn.type === "expense" ? "↓" : "↔"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{txn.name}</p>
                          <p className="text-xs" style={{ color: "#94A3B8" }}>{txn.cat}</p>
                        </div>
                        <span
                          className="text-sm font-semibold shrink-0"
                          style={{
                            color: txn.type === "income" ? MMR_GREEN : txn.type === "expense" ? MMR_RED : MMR_BLUE,
                          }}
                        >
                          {txn.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3" style={{ borderTop: "1px solid #1F2937" }}>
                    <span className="text-xs" style={{ color: "#cbd5e1" }}>Total 7 Transactions</span>
                    <span className="text-xs" style={{ color: MMR_PURPLE }}>View All →</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div
                className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--background-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <div style={{ color: feature.color }}>{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

function SmsTrackingSection() {
  const steps = [
    { step: "01", title: "Grant Permission", description: "Allow SMS access — the app only reads financial transaction messages from banks and UPI apps." },
    { step: "02", title: "Auto-Detection", description: "Our parser extracts amount, merchant, type (debit/credit), and bank from SMS using intelligent regex patterns." },
    { step: "03", title: "Review & Confirm", description: "Each detected transaction appears in a review queue. Tap to edit category, account, or amount before importing." },
    { step: "04", title: "Auto-Categorize", description: "Transactions are automatically categorized based on merchant — Swiggy → Food, Uber → Transport, etc." },
  ];

  const banks = ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB", "BOB", "Yes Bank", "IDBI", "Canara"];
  const upiApps = ["Google Pay", "PhonePe", "Paytm", "Amazon Pay", "BHIM", "CRED"];

  return (
    <section id="sms-tracking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px]" style={{ backgroundColor: MMR_BLUE, opacity: 0.05 }} />

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_BLUE}15`,
              color: MMR_BLUE,
              border: `1px solid ${MMR_BLUE}30`,
            }}
          >
            <Smartphone className="w-4 h-4" />
            Automatic Tracking
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Transactions{" "}
            <span style={{ color: MMR_BLUE }}>Automatically</span>{" "}
            from SMS
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            No more manual data entry. My Money Report reads your financial SMS, extracts
            transaction details, and organizes everything — all on your device.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm" style={{ color: "white" }}>SMS Tracking</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${MMR_BLUE}20`, color: MMR_BLUE }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: MMR_BLUE }} />
                      Listening
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${MMR_ORANGE}20`, color: MMR_ORANGE }}>
                      3 Pending
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 rounded-lg p-0.5" style={{ backgroundColor: "#161B22" }}>
                  {["All", "Pending", "Imported"].map((tab) => (
                    <span
                      key={tab}
                      className="flex-1 text-center py-1.5 text-xs font-medium rounded-md"
                      style={{
                        backgroundColor: tab === "Pending" ? MMR_BLUE : "transparent",
                        color: tab === "Pending" ? "white" : "#94A3B8",
                      }}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    { bank: "HDFC", txn: "Debited", amount: "₹ 2,450", merchant: "Swiggy", status: "pending", ref: "HDFC1234" },
                    { bank: "ICICI", txn: "Credited", amount: "₹ 42,500", merchant: "Salary", status: "pending", ref: "ICICI5678" },
                    { bank: "SBI", txn: "Debited", amount: "₹ 649", merchant: "Netflix", status: "imported", ref: "SBI9012" },
                    { bank: "Google Pay", txn: "Paid", amount: "₹ 340", merchant: "Uber", status: "pending", ref: "UPI3456" },
                  ].map((sms, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-3 flex items-center gap-3"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-bold shrink-0"
                        style={{
                          backgroundColor: sms.bank === "HDFC" ? "#F97316" : sms.bank === "ICICI" ? "#3B82F6" : sms.bank === "SBI" ? "#059669" : "#8B5CF6",
                          color: "white",
                        }}
                      >
                        {sms.bank.split(" ").map(w => w[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-white">{sms.merchant}</p>
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: sms.status === "pending" ? `${MMR_ORANGE}20` : `${MMR_GREEN}20`,
                              color: sms.status === "pending" ? MMR_ORANGE : MMR_GREEN,
                            }}
                          >
                            {sms.status}
                          </span>
                        </div>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>{sms.bank} • {sms.ref}</p>
                      </div>
                      <span
                        className="text-sm font-semibold shrink-0"
                        style={{ color: sms.txn === "Credited" ? MMR_GREEN : MMR_RED }}
                      >
                        {sms.txn === "Credited" ? "+" : "-"}{sms.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center justify-center gap-2 py-3 rounded-xl cursor-pointer"
                  style={{ backgroundColor: MMR_BLUE, color: "white" }}
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-semibold">Scan SMS Inbox</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {banks.map((bank) => (
                  <span
                    key={bank}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ backgroundColor: `${MMR_PURPLE}10`, color: MMR_PURPLE, border: `1px solid ${MMR_PURPLE}20` }}
                  >
                    {bank}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {upiApps.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium"
                    style={{ backgroundColor: `${MMR_BLUE}10`, color: MMR_BLUE, border: `1px solid ${MMR_BLUE}20` }}
                  >
                    {app}
                  </span>
                ))}
              </div>

              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ backgroundColor: `${MMR_BLUE}20`, color: MMR_BLUE }}
                    >
                      {step.step}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 mt-1" style={{ backgroundColor: `${MMR_BLUE}20` }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function BudgetsGoalsSection() {
  return (
    <section id="budgets-goals" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_GREEN}15`,
              color: MMR_GREEN,
              border: `1px solid ${MMR_GREEN}30`,
            }}
          >
            Control & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Budgets &{" "}
            <span style={{ color: MMR_GREEN }}>Financial Goals</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Set spending limits for each category and save toward what matters most.
            My Money Report helps you stay on track.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "white" }}>Monthly Budgets</h3>
                  <span className="text-xs" style={{ color: MMR_GREEN }}>March 2026</span>
                </div>

                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ backgroundColor: `${MMR_GREEN}08` }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white font-medium">Overall Budget</span>
                    <span className="text-sm text-white font-medium">₹ 38,540 / ₹ 45,000</span>
                  </div>
                  <div className="h-2 rounded-full w-full" style={{ backgroundColor: "#1F2937" }}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "86%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{ background: `linear-gradient(90deg, ${MMR_GREEN}, ${MMR_BLUE})` }}
                    />
                  </div>
                  <p className="text-xs mt-1" style={{ color: MMR_GREEN }}>₹ 6,460 remaining • 86% used</p>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Food & Dining", budget: 8000, spent: 6450, color: MMR_RED },
                    { name: "Transportation", budget: 5000, spent: 3240, color: MMR_ORANGE },
                    { name: "Shopping", budget: 6000, spent: 5200, color: MMR_PURPLE },
                    { name: "Bills & Utilities", budget: 12000, spent: 11800, color: MMR_BLUE },
                    { name: "Entertainment", budget: 3000, spent: 1850, color: MMR_PURPLE_ACCENT },
                  ].map((cat) => {
                    const pct = Math.min((cat.spent / cat.budget) * 100, 100);
                    return (
                      <div key={cat.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span style={{ color: "#cbd5e1" }}>{cat.name}</span>
                          <span style={{ color: "#cbd5e1" }}>₹ {cat.spent.toLocaleString()} / ₹ {cat.budget.toLocaleString()}</span>
                        </div>
                        <div className="h-1.5 rounded-full w-full" style={{ backgroundColor: "#1F2937" }}>
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            style={{ backgroundColor: cat.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "white" }}>Savings Goals</h3>
                  <Target className="w-4 h-4" style={{ color: MMR_GREEN }} />
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-28 h-28">
                    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="#1F2937" strokeWidth="8" />
                      <motion.circle
                        cx="60" cy="60" r="52" fill="none"
                        stroke={MMR_GREEN} strokeWidth="8" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 52}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * 0.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-white">60%</span>
                      <span className="text-[10px]" style={{ color: "#94A3B8" }}>Overall</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Emergency Fund", target: 500000, saved: 350000, icon: "🛡️", color: MMR_BLUE, days: 120 },
                    { name: "New Laptop", target: 120000, saved: 85000, icon: "💻", color: MMR_PURPLE, days: 45 },
                    { name: "Vacation Trip", target: 80000, saved: 25000, icon: "✈️", color: MMR_ORANGE, days: 90 },
                  ].map((goal) => (
                    <div
                      key={goal.name}
                      className="rounded-xl p-3"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg">{goal.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{goal.name}</p>
                          <p className="text-xs" style={{ color: "#94A3B8" }}>
                            ₹ {(goal.target - goal.saved).toLocaleString()} remaining • {goal.days} days left
                          </p>
                        </div>
                      </div>
                      <div className="h-1.5 rounded-full w-full" style={{ backgroundColor: "#1F2937" }}>
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(goal.saved / goal.target) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          style={{ backgroundColor: goal.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ReportsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE_ACCENT}15`,
              color: MMR_PURPLE_ACCENT,
              border: `1px solid ${MMR_PURPLE_ACCENT}30`,
            }}
          >
            Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Understand Your{" "}
            <span style={{ color: MMR_PURPLE_ACCENT }}>Spending</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Beautiful charts, insightful reports, and detailed analytics help you see
            exactly where your money is going.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-6">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden h-full" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "white" }}>Spending Overview</h3>
                  <div className="flex gap-1 rounded-lg p-0.5" style={{ backgroundColor: "#161B22" }}>
                    {["Overview", "Income & Expense", "Net Worth", "Trend", "Categories"].map((tab, i) => (
                      <span
                        key={tab}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-md whitespace-nowrap"
                        style={{
                          backgroundColor: i === 0 ? MMR_PURPLE : "transparent",
                          color: i === 0 ? "white" : "#cbd5e1",
                        }}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Total Income", amount: "₹ 42,500", change: "+12%", color: MMR_GREEN },
                    { label: "Total Expenses", amount: "₹ 28,340", change: "+8%", color: MMR_RED },
                    { label: "Net Savings", amount: "₹ 14,160", change: "+18%", color: MMR_BLUE },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-3"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <p className="text-[10px]" style={{ color: "#94A3B8" }}>{stat.label}</p>
                      <p className="text-base font-bold text-white">{stat.amount}</p>
                      <span className="text-[10px]" style={{ color: stat.color }}>{stat.change} vs last month</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center h-40 rounded-xl" style={{ backgroundColor: "#161B22" }}>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="relative w-28 h-28">
                        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="52" fill="none" stroke="#1F2937" strokeWidth="10" />
                          <motion.circle cx="60" cy="60" r="52" fill="none" stroke={MMR_RED} strokeWidth="10" strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 52}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                            whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * 0.6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                          <motion.circle cx="60" cy="60" r="52" fill="none" stroke={MMR_GREEN} strokeWidth="10" strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 52}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                            whileInView={{ strokeDashoffset: 2 * Math.PI * 52 * 0.35 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Food & Dining", value: "32%", color: MMR_RED },
                        { label: "Bills & Utilities", value: "28%", color: MMR_BLUE },
                        { label: "Shopping", value: "18%", color: MMR_PURPLE },
                        { label: "Transport", value: "12%", color: MMR_ORANGE },
                        { label: "Others", value: "10%", color: "#94A3B8" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-xs" style={{ color: "#94A3B8" }}>{item.label}</span>
                          <span className="text-xs text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-full" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <h3 className="font-semibold mb-4" style={{ color: "white" }}>Monthly Trend</h3>
                <div className="flex items-center justify-center h-40 rounded-xl mb-4" style={{ backgroundColor: "#161B22" }}>
                  <div className="flex items-end gap-2 h-28 px-4">
                    {[
                      { label: "Oct", income: 60, expense: 75 },
                      { label: "Nov", income: 65, expense: 70 },
                      { label: "Dec", income: 55, expense: 80 },
                      { label: "Jan", income: 70, expense: 65 },
                      { label: "Feb", income: 75, expense: 60 },
                      { label: "Mar", income: 85, expense: 55 },
                    ].map((month, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="flex gap-0.5 items-end h-24">
                          <motion.div
                            className="w-4 rounded-t"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${month.income}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ backgroundColor: MMR_GREEN }}
                          />
                          <motion.div
                            className="w-4 rounded-t"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${month.expense}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                            style={{ backgroundColor: MMR_RED }}
                          />
                        </div>
                        <span className="text-[10px]" style={{ color: "#cbd5e1" }}>{month.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs mb-3" style={{ color: "#cbd5e1" }}>
                  <span className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: MMR_GREEN }} />
                    Income
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: MMR_RED }} />
                    Expenses
                  </span>
                </div>

                <div className="space-y-2 mt-4 pt-3" style={{ borderTop: "1px solid #1F2937" }}>
                  <h4 className="text-xs font-semibold text-white">AI Insights</h4>
                  {[
                    { icon: "📊", text: "You spent 18% more on dining this month", color: MMR_RED },
                    { icon: "💰", text: "Set a dining budget to save ~₹ 1,200/month", color: MMR_GREEN },
                  ].map((insight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg p-2"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <span>{insight.icon}</span>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>{insight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function AccountsSection() {
  const accountTypes = [
    { type: "Bank Account", desc: "Link your savings, current, or salary accounts", icon: <Landmark className="w-6 h-6" />, color: MMR_BLUE },
    { type: "Wallet", desc: "Track digital wallets like Paytm, PhonePe, etc.", icon: <Wallet className="w-6 h-6" />, color: MMR_PURPLE },
    { type: "Credit Card", desc: "Monitor credit card spending and balances", icon: <CreditCard className="w-6 h-6" />, color: MMR_ORANGE },
    { type: "UPI", desc: "Track UPI-linked bank accounts seamlessly", icon: <Smartphone className="w-6 h-6" />, color: MMR_GREEN },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE}15`,
              color: MMR_PURPLE,
              border: `1px solid ${MMR_PURPLE}30`,
            }}
          >
            All Your Accounts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            One Place for{" "}
            <span style={{ color: MMR_PURPLE }}>All Accounts</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Connect bank accounts, wallets, credit cards, and UPI — see your complete
            financial picture at a glance.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {accountTypes.map((acc) => (
                <div
                  key={acc.type}
                  className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--background-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${acc.color}15` }}
                  >
                    <div style={{ color: acc.color }}>{acc.icon}</div>
                  </div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                    {acc.type}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {acc.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ color: "white" }}>My Accounts</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: `${MMR_GREEN}15`, color: MMR_GREEN }}>
                    Total: ₹ 1,84,290
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { name: "Salary Account", bank: "HDFC Bank", type: "Bank", balance: 125000, color: "#F97316", pct: 68 },
                    { name: "Savings Account", bank: "SBI", type: "Bank", balance: 45000, color: "#059669", pct: 24 },
                    { name: "Paytm Wallet", bank: "Paytm", type: "Wallet", balance: 8290, color: MMR_BLUE, pct: 4 },
                    { name: "ICICI Credit Card", bank: "ICICI Bank", type: "Credit Card", balance: -12450, color: MMR_RED, pct: 7 },
                  ].map((acc) => (
                    <div
                      key={acc.name}
                      className="flex items-center gap-3 rounded-xl p-3"
                      style={{ backgroundColor: "#161B22" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ backgroundColor: `${acc.color}20`, color: acc.color }}
                      >
                        {acc.bank.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{acc.name}</p>
                        <p className="text-xs" style={{ color: "#94A3B8" }}>{acc.bank} • {acc.type}</p>
                      </div>
                      <span
                        className="text-sm font-semibold shrink-0"
                        style={{ color: acc.balance < 0 ? MMR_RED : "white" }}
                      >
                        {acc.balance < 0 ? "-" : ""}₹ {Math.abs(acc.balance).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function SplitBillSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_ORANGE}15`,
              color: MMR_ORANGE,
              border: `1px solid ${MMR_ORANGE}30`,
            }}
          >
            <SplitSquareVertical className="w-4 h-4" />
            Split Expenses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Split Bills{" "}
            <span style={{ color: MMR_ORANGE }}>Fairly</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Track group expenses, split bills equally or by percentage, and settle up
            with friends — all within the app.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-sm" style={{ color: "white" }}>Trip to Goa</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${MMR_ORANGE}20`, color: MMR_ORANGE }}>
                    Active
                  </span>
                </div>

                <div className="rounded-xl p-3 mb-4" style={{ backgroundColor: "#161B22" }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "#94A3B8" }}>Total Expenses</span>
                    <span className="text-white font-medium">₹ 24,500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#94A3B8" }}>Your Share</span>
                    <span className="text-white font-medium">₹ 8,150</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: "You", amount: "₹ 8,150", status: "owe", to: "Rahul" },
                    { name: "Rahul", amount: "₹ 3,200", status: "owed" },
                    { name: "Priya", amount: "₹ 6,150", status: "settled" },
                    { name: "Amit", amount: "₹ 7,000", status: "owed" },
                  ].map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center justify-between rounded-lg p-2.5"
                      style={{ backgroundColor: person.name === "You" ? `${MMR_ORANGE}08` : "transparent" }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: person.name === "You" ? `${MMR_ORANGE}20` : `${MMR_BLUE}20`, color: person.name === "You" ? MMR_ORANGE : MMR_BLUE }}
                        >
                          {person.name[0]}
                        </div>
                        <div>
                          <span className="text-sm text-white font-medium">{person.name}</span>
                          {person.status === "owe" && (
                            <span className="text-[10px] ml-2" style={{ color: MMR_RED }}>
                              Owe {person.to} ₹ 1,200
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm" style={{ color: "#94A3B8" }}>{person.amount}</span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: person.status === "settled" ? `${MMR_GREEN}20` : person.status === "owed" ? `${MMR_BLUE}20` : `${MMR_RED}20`,
                            color: person.status === "settled" ? MMR_GREEN : person.status === "owed" ? MMR_BLUE : MMR_RED,
                          }}
                        >
                          {person.status === "settled" ? "Settled" : person.status === "owed" ? "Owes You" : "You Owe"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4 pt-3" style={{ borderTop: "1px solid #1F2937" }}>
                  <div className="flex-1 rounded-lg py-2 text-center text-sm font-medium" style={{ backgroundColor: MMR_ORANGE, color: "white" }}>
                    Settle Up
                  </div>
                  <div className="rounded-lg py-2 px-4 text-sm font-medium text-center" style={{ backgroundColor: "#161B22", color: "#94A3B8" }}>
                    + Add Expense
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${MMR_ORANGE}15` }}>
                <SplitSquareVertical className="w-5 h-5" style={{ color: MMR_ORANGE }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>Group Expenses</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Create groups for trips, roommates, events, or shared bills. Add
                  members from your contacts and start tracking shared expenses.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${MMR_BLUE}15` }}>
                <PieChart className="w-5 h-5" style={{ color: MMR_BLUE }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>Smart Split Options</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Split expenses equally, by exact amounts, percentage, or shares.
                  The app automatically computes who owes whom.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${MMR_GREEN}15` }}>
                <ArrowLeftRight className="w-5 h-5" style={{ color: MMR_GREEN }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>Settle Up</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Track who paid what, record settlements via Cash, UPI, Bank Transfer,
                  and generate payment reminder messages.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function PrivacySection() {
  const points = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Offline",
      desc: "All your financial data is stored locally on your device using SQLite. There are no servers, no cloud, and no backend.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "No Account Required",
      desc: "No signup, no login, no email, no password. Just install the app and start tracking immediately.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "No Third-Party SDKs",
      desc: "We don't use Firebase, Google Analytics, crash reporting, or any advertising SDKs. Zero trackers, zero data collection.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "SMS Stays on Device",
      desc: "Financial SMS is parsed entirely on your device. Transaction data never leaves your phone — it's not transmitted anywhere.",
    },
  ];

  return (
    <section id="privacy" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{ backgroundColor: MMR_PURPLE, opacity: 0.06 }}
      />

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE}15`,
              color: MMR_PURPLE,
              border: `1px solid ${MMR_PURPLE}30`,
            }}
          >
            <Shield className="w-4 h-4" />
            Your Privacy, Our Priority
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy by{" "}
            <span style={{ color: MMR_PURPLE }}>Design</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            My Money Report is built with a privacy-first architecture. Your financial
            data belongs to you — always has, always will.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 mb-12 text-center" style={{ backgroundColor: `${MMR_PURPLE}08`, border: `1px solid ${MMR_PURPLE}20` }}>
            <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: MMR_PURPLE }}>
              No Servers. No Cloud. No Tracking.
            </p>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Your data never leaves your device. Period.
            </p>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--background-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${MMR_PURPLE}15` }}
                  >
                    <div style={{ color: MMR_PURPLE }}>{point.icon}</div>
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>{point.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{point.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="text-center mt-10">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: MMR_PURPLE }}
            >
              Read our full Privacy Policy
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${MMR_PURPLE}15 0%, transparent 70%)`,
        }}
      />

      <Container className="relative z-10 text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="w-20 h-20 rounded-2xl mx-auto mb-6 overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/images/logo.png"
                alt="My Money Report"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Take Control of{" "}
              <span style={{ color: MMR_PURPLE }}>Your Money</span>
            </h2>
            <p
              className="text-lg mb-8 max-w-lg mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Join thousands of users who track their finances with My Money Report.
              Download now and start understanding where your money goes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${MMR_PURPLE}, ${MMR_PURPLE_DARK})`,
                  boxShadow: `0 4px 20px ${MMR_PURPLE}40`,
                }}
              >
                Coming Soon
              </a>
              <Link href="/privacy-policy">
                <Button variant="secondary" size="lg">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function ComparisonSection() {
  const comparisons = [
    {
      feature: "100% Offline",
      mmr: true,
      others: "❌",
    },
    {
      feature: "Auto SMS Tracking",
      mmr: true,
      others: "❌",
    },
    {
      feature: "No Account Required",
      mmr: true,
      others: "❌",
    },
    {
      feature: "Budget Management",
      mmr: true,
      others: "⚠️",
    },
    {
      feature: "Financial Goals",
      mmr: true,
      others: "⚠️",
    },
    {
      feature: "Split Bills",
      mmr: true,
      others: "❌",
    },
    {
      feature: "Category Analytics",
      mmr: true,
      others: "⚠️",
    },
    {
      feature: "Export Reports (PDF/CSV)",
      mmr: true,
      others: "⚠️",
    },
    {
      feature: "No Ads Ever",
      mmr: true,
      others: "❌",
    },
    {
      feature: "Zero Data Collection",
      mmr: true,
      others: "❌",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${MMR_PURPLE}15`,
              color: MMR_PURPLE,
              border: `1px solid ${MMR_PURPLE}30`,
            }}
          >
            Why My Money Report?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built Different.{" "}
            <span style={{ color: MMR_PURPLE }}>Truly Private.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Most finance apps collect your data or require accounts. My Money Report is
            different — it&apos;s built entirely around your privacy.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl" style={{ backgroundColor: "#0D1117", border: "1px solid #1F2937", color: "white" }}>
            <div className="grid grid-cols-3 gap-0">
              <div className="p-4 font-bold text-sm" style={{ color: "#94A3B8", backgroundColor: "#161B22" }}>Feature</div>
              <div className="p-4 font-bold text-sm text-center" style={{ color: MMR_PURPLE, backgroundColor: "#161B22" }}>
                My Money Report
              </div>
              <div className="p-4 font-bold text-sm text-center" style={{ color: "#94A3B8", backgroundColor: "#161B22" }}>
                Other Apps
              </div>
              {comparisons.map((comp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 col-span-3 gap-0"
                  style={{ borderTop: "1px solid #1F2937" }}
                >
                  <div className="p-3.5 text-sm text-white">{comp.feature}</div>
                  <div className="p-3.5 text-center text-sm">{comp.mmr ? "✅" : "❌"}</div>
                  <div className="p-3.5 text-center text-sm" style={{ color: comp.others === "❌" ? MMR_RED : MMR_ORANGE }}>
                    {comp.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

const faqs = [
  {
    question: "Is my financial data safe?",
    answer: "Yes, 100%. All your data is stored locally on your device. The app is completely offline, does not require an account, has no cloud sync, and never uploads your data anywhere. Your privacy is our highest priority."
  },
  {
    question: "How does SMS tracking work?",
    answer: "The app securely reads financial transactional SMS messages (like UPI debits, bank alerts, OTP receipts) locally on your device. It parses them to automatically record your expenses and income, saving you from manual entry."
  },
  {
    question: "Does the app read my personal messages?",
    answer: "Absolutely not. The app only parses messages from verified business transmitters (such as banks, card issuers, and merchants) containing transaction keywords. Personal chats, contact numbers, and unrelated SMS messages are completely ignored."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export all your transactions, budgets, and monthly reports as PDF or CSV files anytime. This is useful for tax filing, backup, or personal records."
  },
  {
    question: "Is My Money Report free to use?",
    answer: "Yes, the app is completely free. There are no ads, no hidden premium subscriptions, no lockouts, and no microtransactions. It is built to help you take control of your financial life."
  },
  {
    question: "Which platforms are currently supported?",
    answer: "Currently, My Money Report is available on Android devices. You can install it on your Android phone or tablet from the Google Play Store."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }}>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: `${MMR_PURPLE}05` }} />
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block"
            style={{ backgroundColor: `${MMR_PURPLE}15`, color: MMR_PURPLE }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Got questions about My Money Report? We have got you covered.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  className="rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: "var(--background-secondary)",
                    borderColor: isOpen ? "var(--accent)" : "var(--border)",
                    boxShadow: isOpen ? `0 10px 30px ${MMR_PURPLE}10` : "none",
                  }}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h3
                      className="font-semibold text-base sm:text-lg transition-colors duration-300"
                      style={{ color: isOpen ? MMR_PURPLE : "var(--text-primary)" }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: isOpen ? `${MMR_PURPLE}15` : "var(--background)", color: isOpen ? MMR_PURPLE : "var(--text-secondary)" }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default function MyMoneyReportPage() {
  return (
    <>
      <ProgressBar />
      <HeroSection />
      <ProblemsSection />
      <TrackEverythingSection />
      <SmsTrackingSection />
      <BudgetsGoalsSection />
      <ReportsSection />
      <AccountsSection />
      <SplitBillSection />
      <ComparisonSection />
      <FAQSection />
      <PrivacySection />
      <CTASection />
    </>
  );
}
