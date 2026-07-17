"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

type Phase = "camera" | "scanning" | "processing" | "result" | "share" | "sharing";

/* ─── invoice content rows ─── */
const rows = [
  ["Document Scanning", "2", "$24.00"],
  ["PDF Export", "1", "$10.00"],
  ["OCR Processing", "3", "$45.00"],
];

/* ─── SVG document shown inside the phone ─── */
function DocPaper({ variant }: { variant: "dirty" | "clean" }) {
  const isDirty = variant === "dirty";
  return (
    <svg viewBox="0 0 320 420" className="w-full h-full block" preserveAspectRatio="xMidYMid meet">
      <defs>
        {isDirty && (
          <>
            <radialGradient id="v" cx="50%" cy="50%" r="72%">
              <stop offset="45%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.28)" />
            </radialGradient>
            <linearGradient id="ul" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
            </linearGradient>
          </>
        )}
      </defs>

      <rect x={16} y={32} width={288} height={356} rx={2} fill={isDirty ? "#f5f5f0" : "#fcfcf8"} />

      <g opacity={isDirty ? 0.8 : 1}>
        <text x={30} y={66} fontFamily="'Clash Display',system-ui,sans-serif" fontSize={11} fontWeight="700" fill="#1a1a1a">NEXBROTHERS</text>
        <text x={30} y={80} fontFamily="system-ui,sans-serif" fontSize={6} fill="#666">123 Business Avenue &middot; contact@nexbrothers.com</text>

        <text x={30} y={104} fontFamily="'Clash Display',system-ui,sans-serif" fontSize={8} fontWeight="600" fill="#333">INVOICE #SC-2026-0042</text>
        <text x={254} y={104} fontFamily="system-ui,sans-serif" fontSize={6} fill="#666" textAnchor="end">March 15, 2026</text>

        <line x1={30} y1={113} x2={290} y2={113} stroke="#ddd" strokeWidth={0.5} />

        <text x={30} y={134} fontFamily="system-ui,sans-serif" fontSize={6} fontWeight="600" fill="#999" letterSpacing={1}>DESCRIPTION</text>
        <text x={216} y={134} fontFamily="system-ui,sans-serif" fontSize={6} fontWeight="600" fill="#999" textAnchor="end" letterSpacing={1}>QTY</text>
        <text x={290} y={134} fontFamily="system-ui,sans-serif" fontSize={6} fontWeight="600" fill="#999" textAnchor="end" letterSpacing={1}>AMOUNT</text>

        {rows.map(([desc, qty, amt], i) => {
          const y = 158 + i * 19;
          return (
            <g key={desc}>
              <text x={30} y={y} fontFamily="system-ui,sans-serif" fontSize={7} fill="#333">{desc}</text>
              <text x={216} y={y} fontFamily="system-ui,sans-serif" fontSize={7} fill="#333" textAnchor="end">{qty}</text>
              <text x={290} y={y} fontFamily="system-ui,sans-serif" fontSize={7} fill="#333" textAnchor="end">{amt}</text>
            </g>
          );
        })}

        <line x1={30} y1={218} x2={290} y2={218} stroke="#ddd" strokeWidth={0.5} />

        <text x={30} y={240} fontFamily="'Clash Display',system-ui,sans-serif" fontSize={9} fontWeight="600" fill="#111">TOTAL DUE</text>
        <text x={290} y={240} fontFamily="'Clash Display',system-ui,sans-serif" fontSize={9} fontWeight="600" fill="#111" textAnchor="end">$79.00</text>

        <text x={30} y={266} fontFamily="system-ui,sans-serif" fontSize={6} fill="#888">Payment Terms: Net 30</text>
        <text x={30} y={278} fontFamily="system-ui,sans-serif" fontSize={6} fill="#888">Thank you for your business!</text>

        <rect x={240} y={286} width={54} height={22} rx={1} fill="#f0f0ec" />
        {[2,1,3,1,2,1,1,2,3,1,2,2,1].map((w, i) => (
          <line key={i} x1={244 + i * 3.8} y1={290} x2={244 + i * 3.8} y2={304} stroke="#333" strokeWidth={w} />
        ))}

        <line x1={30} y1={334} x2={120} y2={334} stroke="#ccc" strokeWidth={0.5} strokeDasharray="2 2" />
        <text x={30} y={346} fontFamily="system-ui,sans-serif" fontSize={5} fill="#aaa">Authorized Signature</text>
      </g>

      {isDirty && (
        <g>
          <rect x={16} y={32} width={288} height={356} fill="url(#v)" />
          <rect x={16} y={32} width={288} height={356} fill="url(#ul)" />
          <path d="M80 120 Q108 132 120 112" stroke="rgba(0,0,0,0.07)" strokeWidth={1} fill="none" />
          <path d="M190 266 Q214 276 240 258" stroke="rgba(0,0,0,0.05)" strokeWidth={0.8} fill="none" />
          <ellipse cx={260} cy={110} rx={30} ry={20} fill="rgba(0,0,0,0.09)" />
          <ellipse cx={48} cy={304} rx={26} ry={34} fill="rgba(0,0,0,0.07)" />
        </g>
      )}
    </svg>
  );
}

/* ─── edge detection corner ─── */
function EdgeCorners({ show }: { show: boolean }) {
  const props = { stroke: "var(--brand)", strokeWidth: "1.5", strokeLinecap: "round" as const, fill: "none" };
  const anim = { initial: { pathLength: 0 }, animate: { pathLength: show ? 1 : 0 }, transition: { duration: 0.3, delay: show ? 0.1 : 0 } };
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.25 }}>
      <motion.line x1="12%" y1="16%" x2="22%" y2="16%" {...props} {...anim} />
      <motion.line x1="12%" y1="16%" x2="12%" y2="26%" {...props} {...anim} />
      <motion.line x1="88%" y1="16%" x2="78%" y2="16%" {...props} {...anim} />
      <motion.line x1="88%" y1="16%" x2="88%" y2="26%" {...props} {...anim} />
      <motion.line x1="12%" y1="84%" x2="22%" y2="84%" {...props} {...anim} />
      <motion.line x1="12%" y1="84%" x2="12%" y2="74%" {...props} {...anim} />
      <motion.line x1="88%" y1="84%" x2="78%" y2="84%" {...props} {...anim} />
      <motion.line x1="88%" y1="84%" x2="88%" y2="74%" {...props} {...anim} />
    </motion.g>
  );
}

/* ─── camera viewfinder corners ─── */
function VFCorner({ pos }: { pos: [string, string, "tl" | "tr" | "bl" | "br"] }) {
  const [x, y, dir] = pos;
  const s = "11";
  const d = {
    tl: `M${x} ${y} h${s} M${x} ${y} v${s}`,
    tr: `M${x} ${y} h-${s} M${x} ${y} v${s}`,
    bl: `M${x} ${y} h${s} M${x} ${y} v-${s}`,
    br: `M${x} ${y} h-${s} M${x} ${y} v-${s}`,
  };
  return <path d={d[dir]} stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" fill="none" />;
}

/* ─── processing dots ─── */
function Dots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i} className="w-[4px] h-[4px] rounded-full bg-white"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

/* ─── main ─── */
export function HeroScannerAnimation() {
  const [phase, setPhase] = useState<Phase>("camera");
  const [edges, setEdges] = useState(false);
  const [done, setDone] = useState(false);
  const [shareTapped, setShareTapped] = useState(false);
  const tm = useRef<ReturnType<typeof setTimeout>[]>([]);
  const sp = useMotionValue(0);
  const clipI = useTransform(sp, v => `inset(${v}% 0 0 0)`);
  const beamT = useTransform(sp, v => `${v}%`);

  const cycle = useCallback(() => {
    sp.set(0); setPhase("camera"); setEdges(false); setDone(false); setShareTapped(false);
    const t1 = setTimeout(() => setEdges(true), 1400);
    const t2 = setTimeout(() => { setPhase("scanning"); animate(sp, 100, { duration: 1.8, ease: "linear" }); }, 2600);
    const t3 = setTimeout(() => setPhase("processing"), 4600);
    const t4 = setTimeout(() => { setPhase("result"); setDone(true); }, 5300);
    const t5 = setTimeout(() => setPhase("share"), 6800);
    const t6 = setTimeout(() => setShareTapped(true), 8200);
    const t7 = setTimeout(() => cycle(), 9600);
    tm.current = [t1, t2, t3, t4, t5, t6, t7];
  }, [sp]);

  useEffect(() => {
    const start = setTimeout(() => cycle(), 600);
    tm.current.push(start);
    return () => { tm.current.forEach(clearTimeout); tm.current = []; };
  }, [cycle]);

  return (
    <div className="relative w-[200px] sm:w-[220px] lg:w-[250px] mx-auto">
      {/* glow behind phone */}
      <div
        className="absolute inset-0 scale-[1.3] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--brand) 15%, transparent), transparent 70%)",
        }}
      />

      <div className="relative rounded-[34px] p-[2px]" style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="rounded-[31px] overflow-hidden bg-black">
          {/* notch + status */}
          <div className="mx-auto w-[72px] h-[5px] bg-black rounded-b-lg" />
          <div className="flex justify-between items-center px-5 h-[22px]">
            <span className="text-white/90 text-[9px] font-semibold">9:41</span>
            <svg width="12" height="7" viewBox="0 0 12 7">
              <rect x="8.5" y="2" width="2.5" height="5" rx="0.3" fill="white" opacity="0.35" />
              <rect x="5.5" y="0.8" width="2.5" height="6.2" rx="0.3" fill="white" opacity="0.55" />
              <rect x="2.5" y="0" width="2.5" height="7" rx="0.3" fill="white" />
            </svg>
          </div>

          {/* camera view */}
          <div className="relative" style={{ aspectRatio: "9/17" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, #28282c, #0a0a0c)" }} />

            {/* document */}
            <motion.div
              className="absolute inset-x-[6%] top-[10%] bottom-[14%]"
              animate={{
                rotateX: phase === "result" ? 0 : 4,
                rotateY: phase === "result" ? 0 : -2,
                scale: phase === "result" ? 1.04 : 1,
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: "600px", transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-full">
                <DocPaper variant="clean" />
                <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath: clipI }}>
                  <DocPaper variant="dirty" />
                </motion.div>
              </div>
            </motion.div>

            {/* document shadow on desk */}
            <motion.div
              className="absolute left-[4%] right-[4%] bottom-[12%] h-[6%] rounded-full pointer-events-none"
              animate={{ opacity: phase === "result" ? 0 : 0.35 }}
              transition={{ duration: 0.8 }}
              style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.5), transparent)" }}
            />

            {/* viewfinder corners */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
              <VFCorner pos={["8%", "7%", "tl"]} />
              <VFCorner pos={["92%", "7%", "tr"]} />
              <VFCorner pos={["8%", "93%", "bl"]} />
              <VFCorner pos={["92%", "93%", "br"]} />
            </svg>

            {/* edge detection corners */}
            {(phase === "camera" || phase === "scanning") && <EdgeCorners show={edges} />}

            {/* scan beam */}
            {phase === "scanning" && (
              <motion.div className="absolute left-0 right-0 z-10 pointer-events-none flex flex-col items-center" style={{ top: beamT }}>
                <div className="h-10 w-[86%]" style={{ background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--brand) 10%, transparent))" }} />
                <div className="w-[86%] h-[1.5px]" style={{ backgroundColor: "var(--brand)", boxShadow: "0 0 5px var(--brand), 0 0 14px color-mix(in srgb, var(--brand) 50%, transparent)" }} />
              </motion.div>
            )}

            {/* processing */}
            {phase === "processing" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center gap-1.5" style={{ backgroundColor: "rgba(0,0,0,0.45)" }}>
                <Dots />
                <span className="text-white/60 text-[7px] font-medium tracking-wider">ENHANCING</span>
              </motion.div>
            )}

            {/* success badge */}
            {done && phase !== "share" && phase !== "sharing" && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "color-mix(in srgb, var(--success) 15%, transparent)", backdropFilter: "blur(4px)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="var(--success)" strokeWidth="1" />
                  <path d="M3.2 5l1.2 1.2L6.8 3.8" stroke="var(--success)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white text-[7px] font-medium">Scan Complete</span>
              </motion.div>
            )}

            {/* share sheet overlay */}
            {(phase === "share" || phase === "sharing") && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="absolute inset-0 z-20"
                  style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                />
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 z-30 rounded-t-xl overflow-hidden"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <div className="flex flex-col items-center pt-2 pb-3 px-4">
                    {/* drag handle */}
                    <div className="w-7 h-[3px] rounded-full mb-2.5" style={{ backgroundColor: "var(--border-hover)" }} />

                    {/* preview + info */}
                    <div className="flex items-center gap-2.5 w-full mb-3">
                      <div className="w-8 h-10 rounded border shrink-0 overflow-hidden" style={{ borderColor: "var(--border-primary)" }}>
                        <svg viewBox="0 0 32 40" className="w-full h-full">
                          <rect x="2" y="2" width="28" height="36" rx="1" fill="#fcfcf8" />
                          <rect x="5" y="6" width="12" height="3" rx="0.5" fill="#1a1a1a" />
                          <rect x="5" y="11" width="20" height="1.5" rx="0.5" fill="#999" />
                          <rect x="5" y="15" width="14" height="2" rx="0.5" fill="#444" />
                          <rect x="5" y="19" width="8" height="2" rx="0.5" fill="#444" />
                          <rect x="5" y="23" width="16" height="2" rx="0.5" fill="#444" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[8px] font-medium truncate" style={{ color: "var(--text-primary)" }}>Scan_2026-03-15.pdf</div>
                        <div className="text-[6px] mt-0.5" style={{ color: "var(--text-muted)" }}>PDF &middot; 2.4 MB &middot; 3 pages</div>
                      </div>
                    </div>

                    {/* Share button */}
                    <motion.button
                      className="w-full rounded-lg py-2 text-[8px] font-semibold text-white"
                      style={{ backgroundColor: "var(--brand)" }}
                      animate={shareTapped ? { scale: [1, 0.95, 1] } : { scale: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      {shareTapped ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center gap-1.5"
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1" />
                            <path d="M3.2 5l1.2 1.2L6.8 3.8" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Shared Successfully
                        </motion.span>
                      ) : (
                        <span className="flex items-center justify-center gap-1.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 2v4.5M3.5 3.5L5 2l1.5 1.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 5.5v2a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-2" stroke="white" strokeWidth="1" strokeLinecap="round" />
                          </svg>
                          Share as PDF
                        </span>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          {/* bottom bar */}
          <div className="flex items-center justify-between px-6 py-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="0.8" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <rect x="9" y="1" width="6" height="6" rx="0.8" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <rect x="1" y="9" width="6" height="6" rx="0.8" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <rect x="9" y="9" width="6" height="6" rx="0.8" fill="white" opacity="0.08" />
              <line x1="12" y1="11" x2="12" y2="13" stroke="white" strokeWidth="0.6" opacity="0.3" />
              <line x1="11" y1="12" x2="13" y2="12" stroke="white" strokeWidth="0.6" opacity="0.3" />
            </svg>

            <motion.button animate={{ scale: done ? [1, 1.08, 1] : 1 }} transition={{ duration: 0.35, delay: done ? 0.15 : 0 }}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ border: "2px solid rgba(255,255,255,0.8)" }}
            >
              <div className="w-[34px] h-[34px] rounded-full bg-white" />
            </motion.button>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="8" cy="8" r="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="8" y1="2" x2="8" y2="3.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
              <line x1="8" y1="12.5" x2="8" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
              <line x1="2" y1="8" x2="3.5" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
              <line x1="12.5" y1="8" x2="14" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
