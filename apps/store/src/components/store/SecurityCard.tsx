import { ShieldCheck, Lock, WifiOff } from "lucide-react";
import type { AppRecord } from "../../types";

export function SecurityCard({ app }: { app: AppRecord }) {
  const offlineFirst = app.permissions.some((p) => p.label.toLowerCase().includes("no network"));

  const points = [
    { icon: ShieldCheck, text: app.verified ? "Verified by NexBrothers" : "Published on Brothers Store" },
    { icon: Lock, text: "Scanned for malware before every release" },
    ...(offlineFirst ? [{ icon: WifiOff, text: "Works without sending data over the network" }] : []),
  ];

  return (
    <div
      className="rounded-xl border p-4 space-y-2.5"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)" }}
    >
      {points.map((p) => (
        <div key={p.text} className="flex items-center gap-2.5">
          <p.icon className="w-4 h-4 shrink-0" style={{ color: "var(--success)" }} />
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {p.text}
          </span>
        </div>
      ))}
    </div>
  );
}
