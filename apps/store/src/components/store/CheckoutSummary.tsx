import { ShieldCheck } from "lucide-react";
import { AppIcon } from "./AppIcon";
import { formatPrice } from "../../lib/format";
import type { AppRecord } from "../../types";

export function CheckoutSummary({ app }: { app: AppRecord }) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)" }}
    >
      <div className="flex items-center gap-3 pb-4 mb-4 border-b" style={{ borderColor: "var(--border-primary)" }}>
        <AppIcon app={app} size="lg" />
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
            {app.name} Premium
          </p>
          <p className="text-xs truncate" style={{ color: "var(--text-secondary)" }}>
            {app.tagline}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span style={{ color: "var(--text-secondary)" }}>Price</span>
          <span style={{ color: "var(--text-primary)" }}>
            {formatPrice(app.originalPrice ?? app.price)}
          </span>
        </div>
        {app.originalPrice && app.originalPrice > app.price && (
          <div className="flex justify-between">
            <span style={{ color: "var(--text-secondary)" }}>Discount</span>
            <span style={{ color: "var(--success)" }}>
              -{formatPrice(app.originalPrice - app.price)}
            </span>
          </div>
        )}
        <div className="flex justify-between pt-2 mt-2 border-t font-semibold" style={{ borderColor: "var(--border-primary)" }}>
          <span style={{ color: "var(--text-primary)" }}>Total</span>
          <span style={{ color: "var(--text-primary)" }}>{formatPrice(app.price)}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mt-4 pt-4 border-t" style={{ borderColor: "var(--border-primary)" }}>
        <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--success)" }} />
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Secured, simulated checkout — no real payment is processed.
        </span>
      </div>
    </div>
  );
}
