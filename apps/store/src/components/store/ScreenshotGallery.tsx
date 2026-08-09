"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ImageOff } from "lucide-react";

export function ScreenshotGallery({ screenshots, appName }: { screenshots: string[]; appName: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, screenshots.length]);

  if (screenshots.length === 0) {
    return (
      <div
        className="flex items-center gap-2 rounded-xl border px-4 py-8 justify-center text-sm"
        style={{ borderColor: "var(--border-primary)", color: "var(--text-muted)", backgroundColor: "var(--bg-secondary)" }}
      >
        <ImageOff className="w-4 h-4" />
        No screenshots available yet
      </div>
    );
  }

  return (
    <>
      <div
        className="flex gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="relative shrink-0 w-40 sm:w-48 aspect-[9/19] rounded-xl overflow-hidden border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <Image src={src} alt={`${appName} screenshot ${i + 1}`} fill sizes="192px" className="object-cover" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6" role="dialog" aria-modal="true">
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,12,0.9)" }} onClick={() => setOpenIndex(null)} />
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <X className="w-4 h-4" />
          </button>
          {screenshots.length > 1 && (
            <>
              <button
                onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length))}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % screenshots.length))}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          <div className="relative w-full max-w-xs aspect-[9/19]">
            <Image
              src={screenshots[openIndex]}
              alt={`${appName} screenshot ${openIndex + 1}`}
              fill
              sizes="360px"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
