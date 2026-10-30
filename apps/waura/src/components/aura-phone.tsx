"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Hourglass, Shield, ShieldAlert, Award, Bell } from "lucide-react";

interface LevelConfig {
  name: string;
  range: string;
  min: number;
  max: number;
  color: string;
  bgGlow: string;
  tagline: string;
  streak: number;
  todayChange: string;
  description: string;
}

export const LEVELS: LevelConfig[] = [
  {
    name: "Static",
    range: "0 – 199",
    min: 0,
    max: 199,
    color: "#64748b",
    bgGlow: "rgba(100, 116, 139, 0.25)",
    tagline: "Unsettled screen frequency",
    streak: 1,
    todayChange: "-42 today",
    description: "Fragmented screen habits and frequent interruptions. Room to reset.",
  },
  {
    name: "Flicker",
    range: "200 – 399",
    min: 200,
    max: 399,
    color: "#06b6d4",
    bgGlow: "rgba(6, 182, 212, 0.25)",
    tagline: "First sparks of awareness",
    streak: 3,
    todayChange: "+28 today",
    description: "Beginning to pause before opening mindless feeds. Momentum starts here.",
  },
  {
    name: "Glow",
    range: "400 – 599",
    min: 400,
    max: 599,
    color: "#10b981",
    bgGlow: "rgba(16, 185, 129, 0.25)",
    tagline: "Steady, balanced daily rhythm",
    streak: 7,
    todayChange: "+45 today",
    description: "Limits consistently held. Daily deep work focus blocks are now routine.",
  },
  {
    name: "Radiant",
    range: "600 – 799",
    min: 600,
    max: 799,
    color: "#a855f7",
    bgGlow: "rgba(168, 85, 247, 0.35)",
    tagline: "Mastery over reactive impulses",
    streak: 14,
    todayChange: "+60 today",
    description: "Intentional device use. The phone serves you, never the other way around.",
  },
  {
    name: "Halo",
    range: "800 – 1000",
    min: 800,
    max: 1000,
    color: "#f59e0b",
    bgGlow: "rgba(245, 158, 11, 0.35)",
    tagline: "Peak digital serenity",
    streak: 30,
    todayChange: "+80 today",
    description: "Complete harmony. Zero mindless doom-scrolling, ironclad focus discipline.",
  },
];

export function InteractiveAuraPhone() {
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(3); // Radiant default
  const [simulatedScore, setSimulatedScore] = useState<number>(742);
  const [activeTab, setActiveTab] = useState<"home" | "limits" | "insights">("home");

  const level = LEVELS[activeLevelIdx];

  // Adjust score when level changes
  const selectLevel = (idx: number) => {
    setActiveLevelIdx(idx);
    const target = LEVELS[idx];
    setSimulatedScore(Math.floor((target.min + target.max) / 2));
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto">
      {/* Dynamic ambient backdrop aura glow */}
      <motion.div
        key={`glow-${activeLevelIdx}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -inset-8 sm:-inset-12 rounded-[50px] blur-[60px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${level.bgGlow} 0%, transparent 70%)`,
        }}
      />

      {/* Floating level pills selector */}
      <div className="flex items-center justify-center gap-1.5 mb-5 p-1 rounded-full glass-pill mx-auto w-fit">
        {LEVELS.map((lvl, idx) => {
          const isSelected = idx === activeLevelIdx;
          return (
            <button
              key={lvl.name}
              onClick={() => selectLevel(idx)}
              className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 relative"
              style={{
                color: isSelected ? "#ffffff" : "var(--text-secondary)",
              }}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeLevelPill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: lvl.color }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ backgroundColor: isSelected ? "#ffffff" : lvl.color }}
                />
                {lvl.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Phone chassis */}
      <div
        className="relative rounded-[40px] p-3 sm:p-3.5 shadow-2xl border transition-colors duration-500 overflow-hidden"
        style={{
          backgroundColor: "#07090e",
          borderColor: "rgba(255, 255, 255, 0.12)",
          boxShadow: `0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px ${level.bgGlow}`,
        }}
      >
        {/* Dynamic Island / speaker notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end pr-2 border border-white/5">
          <div className="w-2 h-2 rounded-full bg-blue-900/60" />
        </div>

        {/* Screen inner */}
        <div
          className="relative rounded-[32px] overflow-hidden pt-8 pb-4 px-4 sm:px-5 flex flex-col min-h-[560px] border border-white/5"
          style={{ backgroundColor: "#0b0e17" }}
        >
          {/* Subtle in-app grid & noise overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

          {/* In-app Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400 mb-4 px-1">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-sans font-medium">
                100% Offline
              </span>
              <span>100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-medium tracking-wide uppercase text-slate-400">
                Today&apos;s Aura
              </span>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Waura
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: level.color }}
                  />
                </h3>
              </div>
            </div>
            <div
              className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border"
              style={{
                backgroundColor: `${level.color}15`,
                borderColor: `${level.color}40`,
                color: level.color,
              }}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{level.streak}d streak</span>
            </div>
          </div>

          {/* Content Views */}
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <motion.div
                key="home-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col items-center justify-between"
              >
                {/* Luminous Central Aura Ring */}
                <div className="relative my-4 flex items-center justify-center">
                  {/* Outer pulsating aura rings */}
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.35, 0.7, 0.35],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-48 h-48 rounded-full blur-2xl pointer-events-none"
                    style={{ backgroundColor: level.color }}
                  />

                  {/* Rotating radiant border */}
                  <div
                    className="w-40 h-40 rounded-full flex items-center justify-center p-1.5 relative border"
                    style={{
                      borderColor: `${level.color}40`,
                      background: `radial-gradient(circle, ${level.color}18 0%, transparent 70%)`,
                    }}
                  >
                    {/* Orbiting particle */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full pointer-events-none"
                    >
                      <span
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full shadow-lg"
                        style={{
                          backgroundColor: level.color,
                          boxShadow: `0 0 10px ${level.color}`,
                        }}
                      />
                    </motion.div>

                    {/* Numeric aura meter */}
                    <div className="w-full h-full rounded-full bg-[#0d111d] flex flex-col items-center justify-center border border-white/10 text-center px-2">
                      <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                        Level: {level.name}
                      </span>
                      <motion.span
                        key={simulatedScore}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl font-extrabold tracking-tight text-white font-mono my-0.5"
                      >
                        {simulatedScore}
                      </motion.span>
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: level.color }}
                      >
                        {level.todayChange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Score Level Meter Bar */}
                <div className="w-full bg-slate-900/90 rounded-2xl p-3 border border-white/5 mb-3">
                  <div className="flex justify-between items-center text-[11px] text-slate-300 font-medium mb-1.5">
                    <span>{level.name} Tier</span>
                    <span className="font-mono text-slate-400">{level.range}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(simulatedScore / 1000) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #38bdf8, ${level.color})`,
                      }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 line-clamp-1 italic">
                    &ldquo;{level.tagline}&rdquo;
                  </p>
                </div>

                {/* Today Line-by-Line Mini Stream */}
                <div className="w-full space-y-2">
                  <div className="flex items-center justify-between text-[11px] px-1 text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">
                      Today&apos;s Aura Activity
                    </span>
                    <span className="text-emerald-400 font-mono">+100 cap</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                        <Hourglass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">50m Deep Focus</div>
                        <div className="text-[10px] text-slate-400">Completed at 11:30 AM</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">+50 aura</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Instagram (Limit 30m)</div>
                        <div className="text-[10px] text-slate-400">Used 18m • Safe</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">+20 at 00:00</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "limits" && (
              <motion.div
                key="limits-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 w-full space-y-2.5 pt-2"
              >
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/5">
                  <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    App Limit Guard
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    End under limit: <span className="text-emerald-400 font-bold">+20 aura</span>. Over
                    limit: <span className="text-rose-400 font-bold">-1 aura/min</span> (max -60).
                  </p>
                </div>

                {/* Example limits list */}
                {[
                  { name: "Instagram", limit: "30m", used: "18m", status: "safe", pct: 60 },
                  { name: "X (Twitter)", limit: "25m", used: "22m", status: "warning", pct: 88 },
                  { name: "Reddit", limit: "20m", used: "5m", status: "safe", pct: 25 },
                  { name: "Google Maps", limit: "Essential", used: "45m", status: "neutral", pct: 0 },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="font-mono text-slate-300">
                        {item.used} / {item.limit}
                      </span>
                    </div>
                    {item.limit !== "Essential" ? (
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.pct}%`,
                            backgroundColor: item.pct > 80 ? "#f59e0b" : "#06b6d4",
                          }}
                        />
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-400 italic">
                        Marked as Essential • Never affects aura
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "insights" && (
              <motion.div
                key="insights-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 w-full space-y-3 pt-2"
              >
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/5">
                  <span className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                    7-Day Aura History
                  </span>
                  <div className="flex items-end justify-between h-24 pt-4 px-2">
                    {[
                      { day: "M", score: 610, height: "61%" },
                      { day: "T", score: 680, height: "68%" },
                      { day: "W", score: 720, height: "72%" },
                      { day: "T", score: 710, height: "71%" },
                      { day: "F", score: 730, height: "73%" },
                      { day: "S", score: 742, height: "74%" },
                      { day: "S", score: 760, height: "76%" },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-5 rounded-t-md transition-all duration-500"
                          style={{
                            height: bar.height,
                            backgroundColor: i === 5 ? level.color : "rgba(255,255,255,0.15)",
                          }}
                        />
                        <span className="text-[10px] font-mono text-slate-400">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-white flex items-center justify-between">
                    <span>Lock-Screen Privacy Shield</span>
                    <Bell className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    When phone is locked: Notifications show &ldquo;Something is ready&rdquo;. Never
                    reveals app names or usage durations to bystanders.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* In-app navigation tabs */}
          <div className="mt-auto pt-3 border-t border-white/5 grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeTab === "home" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Aura
            </button>
            <button
              onClick={() => setActiveTab("limits")}
              className={`py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeTab === "limits" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Limits
            </button>
            <button
              onClick={() => setActiveTab("insights")}
              className={`py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeTab === "insights" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Insights
            </button>
          </div>
        </div>
      </div>

      {/* Caption note */}
      <p className="text-center text-xs mt-3 font-mono font-medium" style={{ color: "var(--text-muted)" }}>
        Tap the 5 aura tiers above to test live phone aesthetics
      </p>
    </div>
  );
}
