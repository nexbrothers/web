"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  Lock,
  Unlock,
  ShieldCheck,
  Sparkles,
  RotateCcw,
  Fingerprint,
  MessageSquare,
  Camera,
  Settings,
  Wallet,
  CheckCircle2,
} from "lucide-react";

type Phase = "locked" | "drawing" | "verifying" | "success" | "unlocked";

export function HeroPhone3D({ compact }: { compact?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("locked");
  const [isInteractive, setIsInteractive] = useState(false);
  const [userPoints, setUserPoints] = useState<{ x: number; y: number }[]>([]);
  const isDrawingRef = useRef(false);
  const drawingBoxRef = useRef<HTMLDivElement>(null);

  // Physics spring values for 3D tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 140, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations based on pointer position
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

  // Spatial badge parallax offsets
  const badge1X = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const badge2X = useTransform(smoothX, [-0.5, 0.5], [22, -22]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  // Dynamic glass reflection coordinates
  const sheenX = useTransform(smoothX, [-0.5, 0.5], ["-30%", "130%"]);
  const sheenY = useTransform(smoothY, [-0.5, 0.5], ["-30%", "130%"]);

  // Automated cycle loop
  const scheduleLoop = useCallback(() => {
    if (isInteractive) return () => {};
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase("drawing"), 1000));
    timers.push(setTimeout(() => setPhase("verifying"), 2600));
    timers.push(setTimeout(() => setPhase("success"), 3300));
    timers.push(setTimeout(() => setPhase("unlocked"), 4100));
    timers.push(
      setTimeout(() => {
        setPhase("locked");
        timers.push(setTimeout(() => scheduleLoop(), 1800));
      }, 7200)
    );

    return () => timers.forEach(clearTimeout);
  }, [isInteractive]);

  useEffect(() => {
    const cleanup = scheduleLoop();
    return cleanup;
  }, [scheduleLoop]);

  // Mouse handlers for 3D stage
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Interactive user drawing support
  const handleStartDraw = (clientX: number, clientY: number) => {
    if (!drawingBoxRef.current) return;
    setIsInteractive(true);
    isDrawingRef.current = true;
    setPhase("drawing");
    const rect = drawingBoxRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    setUserPoints([{ x, y }]);
  };

  const handleMoveDraw = (clientX: number, clientY: number) => {
    if (!isDrawingRef.current || !drawingBoxRef.current) return;
    const rect = drawingBoxRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    setUserPoints((prev) => [...prev, { x, y }]);
  };

  const handleEndDraw = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    if (userPoints.length > 5) {
      setPhase("verifying");
      setTimeout(() => setPhase("success"), 800);
      setTimeout(() => setPhase("unlocked"), 1500);
      setTimeout(() => {
        setUserPoints([]);
        setIsInteractive(false);
        setPhase("locked");
      }, 5000);
    } else {
      setUserPoints([]);
      setIsInteractive(false);
      setPhase("locked");
    }
  };

  const phoneWidthClass = compact ? "w-[270px] sm:w-[290px]" : "w-[290px] sm:w-[325px]";

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center py-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D Phone Body */}
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Spatial Floating Badge 1 - Top Left */}
        {!compact && (
          <motion.div
            style={
              shouldReduceMotion
                ? {
                    backgroundColor: "rgba(18, 20, 29, 0.85)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px rgba(139,92,246,0.2)",
                  }
                : {
                    x: badge1X,
                    y: badge1Y,
                    transform: "translateZ(70px)",
                    backgroundColor: "rgba(18, 20, 29, 0.85)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px rgba(139,92,246,0.2)",
                  }
            }
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden sm:flex absolute -left-16 top-14 z-30 items-center gap-3 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl"
          >
            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-violet-500/20 text-violet-400 border border-violet-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white tracking-wide">AES-256 Offline</span>
              <span className="text-[10px] text-neutral-400">Zero Cloud Leaks</span>
            </div>
          </motion.div>
        )}

        {/* Spatial Floating Badge 2 - Bottom Right */}
        {!compact && (
          <motion.div
            style={
              shouldReduceMotion
                ? {
                    backgroundColor: "rgba(18, 20, 29, 0.85)",
                    borderColor: "rgba(0, 212, 255, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px rgba(0,212,255,0.2)",
                  }
                : {
                    x: badge2X,
                    y: badge2Y,
                    transform: "translateZ(85px)",
                    backgroundColor: "rgba(18, 20, 29, 0.85)",
                    borderColor: "rgba(0, 212, 255, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px rgba(0,212,255,0.2)",
                  }
            }
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden sm:flex absolute -right-16 bottom-20 z-30 items-center gap-3 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl"
          >
            <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-white tracking-wide">95%+ Accuracy</span>
              <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Dynamic Biometric
              </span>
            </div>
          </motion.div>
        )}

        {/* Ambient Backlight Halo behind Phone */}
        <div
          className="absolute -inset-10 rounded-[56px] blur-[90px] pointer-events-none transition-colors duration-700"
          style={{
            backgroundColor:
              phase === "unlocked" || phase === "success"
                ? "rgba(16, 185, 129, 0.28)"
                : phase === "verifying"
                ? "rgba(0, 212, 255, 0.24)"
                : "rgba(139, 92, 246, 0.22)",
          }}
        />

        {/* Outer Titanium Phone Bezel */}
        <div
          className="relative rounded-[44px] p-[10px] transition-shadow duration-500"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(40,40,48,0.9) 30%, rgba(15,15,20,0.95) 70%, rgba(255,255,255,0.08) 100%)",
            boxShadow:
              "0 30px 80px -15px rgba(0,0,0,0.9), 0 0 60px rgba(139,92,246,0.18), inset 0 1px 2px rgba(255,255,255,0.3)",
          }}
        >
          {/* Internal Screen Frame */}
          <div
            className={`relative aspect-[9/19] ${phoneWidthClass} rounded-[36px] overflow-hidden bg-[#090A0F] border border-white/10`}
            style={{
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
            }}
          >
            {/* Specular Dynamic Sheen reacting to pointer */}
            <motion.div
              style={{
                left: sheenX,
                top: sheenY,
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)",
              }}
              className="absolute -inset-full w-[200%] h-[200%] pointer-events-none z-30 opacity-25 mix-blend-overlay"
            />

            {/* Phone Top Notch / Dynamic Island */}
            <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 py-3.5 text-[10px] font-medium text-white/70">
              <span>9:41</span>
              {/* Pill Notch */}
              <div className="h-4 w-20 rounded-full bg-black/90 border border-white/10 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-white/50">5G</span>
                <div className="w-4 h-2.5 rounded-sm border border-white/40 p-[1px]">
                  <div className="h-full w-full bg-white/80 rounded-xs" />
                </div>
              </div>
            </div>

            {/* SCREEN CONTENT - PHASE 1: LOCKSCREEN & SIGNATURE */}
            <AnimatePresence mode="wait">
              {phase !== "unlocked" && (
                <motion.div
                  key="lockscreen-ui"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-between pt-14 pb-6 px-5"
                  style={{
                    background: "radial-gradient(circle at 50% 25%, #151829 0%, #090A0F 80%)",
                  }}
                >
                  {/* Top Status Header */}
                  <div className="flex flex-col items-center text-center mt-2">
                    <motion.div
                      animate={{
                        scale: phase === "success" ? [1, 1.25, 1] : 1,
                        color: phase === "success" ? "#10B981" : "#A78BFA",
                      }}
                      className="w-10 h-10 rounded-2xl flex items-center justify-center mb-2 border"
                      style={{
                        backgroundColor:
                          phase === "success"
                            ? "rgba(16, 185, 129, 0.15)"
                            : "rgba(139, 92, 246, 0.15)",
                        borderColor:
                          phase === "success"
                            ? "rgba(16, 185, 129, 0.4)"
                            : "rgba(139, 92, 246, 0.3)",
                      }}
                    >
                      {phase === "success" ? (
                        <Unlock className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Lock className="w-5 h-5 text-violet-400" />
                      )}
                    </motion.div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-white/70">
                      SignLock Vault
                    </span>
                    <span className="text-[10px] text-white/40 mt-0.5">
                      {phase === "locked" && "Signature authentication required"}
                      {phase === "drawing" && "Detecting biometric stroke..."}
                      {phase === "verifying" && "Evaluating stroke telemetry..."}
                      {phase === "success" && "Signature verified • Access granted"}
                    </span>
                  </div>

                  {/* SIGNATURE DRAWING CANVAS ZONE */}
                  <div className="w-full flex flex-col items-center my-auto">
                    <div
                      ref={drawingBoxRef}
                      onMouseDown={(e) => handleStartDraw(e.clientX, e.clientY)}
                      onMouseMove={(e) => handleMoveDraw(e.clientX, e.clientY)}
                      onMouseUp={handleEndDraw}
                      onTouchStart={(e) =>
                        handleStartDraw(e.touches[0].clientX, e.touches[0].clientY)
                      }
                      onTouchMove={(e) =>
                        handleMoveDraw(e.touches[0].clientX, e.touches[0].clientY)
                      }
                      onTouchEnd={handleEndDraw}
                      className="relative w-full aspect-square max-w-[210px] rounded-2xl flex items-center justify-center overflow-hidden cursor-crosshair border"
                      style={{
                        background:
                          "radial-gradient(circle at 40% 40%, rgba(139,92,246,0.18), rgba(6,7,12,0.95))",
                        borderColor:
                          phase === "success"
                            ? "rgba(16, 185, 129, 0.6)"
                            : phase === "verifying"
                            ? "rgba(0, 212, 255, 0.5)"
                            : "rgba(139, 92, 246, 0.3)",
                        boxShadow:
                          phase === "success"
                            ? "0 0 35px rgba(16, 185, 129, 0.3)"
                            : "0 0 25px rgba(139, 92, 246, 0.15)",
                      }}
                    >
                      {/* Grid Pattern inside canvas */}
                      <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        }}
                      />

                      {/* User Drawn Stroke */}
                      {userPoints.length > 1 ? (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <polyline
                            fill="none"
                            stroke="url(#userStrokeGrad)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={userPoints.map((p) => `${p.x},${p.y}`).join(" ")}
                          />
                          <defs>
                            <linearGradient id="userStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#00D4FF" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        /* Automated Cinematic Vector Signature */
                        <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] pointer-events-none">
                          <defs>
                            <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8B5CF6" />
                              <stop offset="50%" stopColor="#00D4FF" />
                              <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                              <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          {/* Outer Glow Path */}
                          <motion.path
                            d="M 28 125 Q 55 25, 95 85 T 145 60 T 175 130 Q 130 170, 85 140"
                            fill="none"
                            stroke="url(#laserGrad)"
                            strokeWidth="5"
                            strokeLinecap="round"
                            filter="url(#neonGlow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={
                              phase === "drawing" ||
                              phase === "verifying" ||
                              phase === "success"
                                ? { pathLength: 1, opacity: 0.95 }
                                : { pathLength: 0, opacity: 0 }
                            }
                            transition={{ duration: 1.3, ease: "easeInOut" }}
                          />

                          {/* Crisp Inner Laser Core */}
                          <motion.path
                            d="M 28 125 Q 55 25, 95 85 T 145 60 T 175 130 Q 130 170, 85 140"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={
                              phase === "drawing" ||
                              phase === "verifying" ||
                              phase === "success"
                                ? { pathLength: 1, opacity: 0.9 }
                                : { pathLength: 0, opacity: 0 }
                            }
                            transition={{ duration: 1.3, ease: "easeInOut" }}
                          />
                        </svg>
                      )}

                      {/* Verification Radar Scan Line */}
                      {phase === "verifying" && (
                        <motion.div
                          initial={{ top: "-10%", opacity: 0 }}
                          animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
                          style={{
                            boxShadow: "0 0 15px #00D4FF",
                          }}
                        />
                      )}

                      {/* Success Shockwave Rings */}
                      {phase === "success" && (
                        <motion.div
                          initial={{ scale: 0.4, opacity: 1 }}
                          animate={{ scale: 2.2, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute w-24 h-24 rounded-full border-2 border-emerald-400 pointer-events-none"
                        />
                      )}
                    </div>

                    {/* Interactive hint */}
                    <div className="flex items-center gap-1.5 mt-3 text-[10px] text-white/40">
                      <Fingerprint className="w-3.5 h-3.5 text-violet-400" />
                      <span>{isInteractive ? "Release to authenticate" : "Draw or watch unlock"}</span>
                    </div>
                  </div>

                  {/* Bottom Security Pill */}
                  <div className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] text-white/50">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      App Protected
                    </span>
                    <span>99.4% Match</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SCREEN CONTENT - PHASE 2: UNLOCKED SECURED APPS */}
            <AnimatePresence>
              {phase === "unlocked" && (
                <motion.div
                  key="unlocked-ui"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-20 flex flex-col justify-between pt-14 pb-6 px-6"
                  style={{
                    background: "radial-gradient(circle at 50% 10%, #172421 0%, #090D0D 80%)",
                  }}
                >
                  {/* Verified Header */}
                  <div className="flex flex-col items-center text-center mt-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Unlocked with Signature
                    </span>
                    <span className="text-[10px] text-emerald-400/80 mt-0.5">
                      Ready to access protected apps
                    </span>
                  </div>

                  {/* App Grid */}
                  <div className="grid grid-cols-3 gap-3.5 my-auto px-1">
                    {[
                      { icon: MessageSquare, name: "WhatsApp", color: "#25D366" },
                      { icon: Wallet, name: "Finance", color: "#3B82F6" },
                      { icon: Camera, name: "Gallery", color: "#EC4899" },
                      { icon: Settings, name: "Settings", color: "#64748B" },
                      { icon: Lock, name: "SignLock", color: "#8B5CF6" },
                      { icon: ShieldCheck, name: "Vault", color: "#10B981" },
                    ].map((app, i) => (
                      <motion.div
                        key={app.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-colors"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md"
                          style={{ backgroundColor: app.color }}
                        >
                          <app.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-medium text-white/70 truncate max-w-full">
                          {app.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Reset/Relock Button */}
                  <button
                    onClick={() => {
                      setPhase("locked");
                      setUserPoints([]);
                      setIsInteractive(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-[10px] font-medium text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Relock App</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Home Indicator Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/20 z-30 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
