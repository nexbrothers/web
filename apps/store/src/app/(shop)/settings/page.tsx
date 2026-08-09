"use client";

import { AlertTriangle, LogOut } from "lucide-react";
import { useStore } from "../../../store/StoreProvider";
import { showToast } from "../../../hooks/useToast";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative w-9 h-5 rounded-full shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
      style={{ backgroundColor: checked ? "var(--brand)" : "var(--border-hover)" }}
    >
      <span
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-150"
        style={{ transform: checked ? "translateX(18px)" : "translateX(2px)" }}
      />
    </button>
  );
}

export default function SettingsPage() {
  const { settings, session, dispatch } = useStore();

  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Settings
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Preferences for this Brothers Store prototype.
      </p>

      <div className="rounded-xl border divide-y" style={{ borderColor: "var(--border-primary)" }}>
        <div className="flex items-center justify-between gap-4 p-4">
          <div>
            <p className="text-sm font-medium flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
              <AlertTriangle className="w-3.5 h-3.5" style={{ color: "var(--warning)" }} />
              Simulate failures
            </p>
            <p className="text-xs mt-0.5 max-w-xs" style={{ color: "var(--text-muted)" }}>
              Makes payments and downloads randomly fail so you can preview error and retry states.
            </p>
          </div>
          <Toggle
            checked={settings.simulateFailures}
            onChange={(v) => {
              dispatch({ type: "SET_SIMULATE_FAILURES", value: v });
              showToast(v ? "Failure simulation enabled" : "Failure simulation disabled", "info");
            }}
          />
        </div>

        {session.signedIn && (
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Signed in</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Sign out of this simulated session.</p>
            </div>
            <button
              onClick={() => {
                dispatch({ type: "SET_SIGNED_IN", value: false });
                showToast("Signed out", "info");
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "var(--danger)" }}
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        )}
      </div>

      <p className="text-xs mt-6" style={{ color: "var(--text-muted)" }}>
        Brothers Store is a frontend-only prototype. All data shown is stored locally in your
        browser and no real network requests, payments, or downloads occur.
      </p>
    </div>
  );
}
