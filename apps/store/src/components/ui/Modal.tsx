"use client";

import { ReactNode, useEffect, useRef } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  children,
  maxWidthClass = "max-w-md",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidthClass?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15, 15, 20, 0.5)", animation: "fade-in 150ms ease-out" }}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={`relative w-full ${maxWidthClass} rounded-2xl border shadow-xl focus:outline-none max-h-[85vh] overflow-y-auto`}
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-primary)",
          animation: "slide-up 180ms ease-out",
        }}
      >
        {title && (
          <div
            className="flex items-center justify-between px-5 py-4 border-b sticky top-0"
            style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
          >
            <h2 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-7 h-7 rounded-lg flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
              style={{ color: "var(--text-muted)" }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
