"use client";

import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import { useToastQueue, dismissToast, ToastVariant } from "../../hooks/useToast";

const iconFor: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const colorFor: Record<ToastVariant, string> = {
  success: "var(--success)",
  error: "var(--danger)",
  info: "var(--brand)",
};

export function ToastHost() {
  const toasts = useToastQueue();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 w-[calc(100%-2rem)] sm:w-80"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        const Icon = iconFor[toast.variant];
        return (
          <div
            key={toast.id}
            className="flex items-start gap-2.5 rounded-xl border shadow-lg px-4 py-3"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border-primary)",
              animation: "toast-in 180ms ease-out",
            }}
          >
            <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: colorFor[toast.variant] }} />
            <p className="text-sm flex-1" style={{ color: "var(--text-primary)" }}>
              {toast.message}
            </p>
            <button
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss"
              className="shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
