import Link from "next/link";
import type { AppRecord } from "../../types";
import { AppIcon } from "./AppIcon";
import { PriceTag } from "./PriceTag";
import { WishlistButton } from "./WishlistButton";
import { Stars } from "../ui";
import { ShieldCheck } from "lucide-react";

export function AppCard({ app, layout = "grid" }: { app: AppRecord; layout?: "grid" | "list" }) {
  const comingSoon = app.status === "coming-soon";

  return (
    <Link
      href={`/apps/${app.slug}`}
      className={`hover-card group relative block rounded-xl border p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] ${
        layout === "list" ? "flex items-center gap-4" : ""
      }`}
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
    >
      <div className={layout === "list" ? "flex items-center gap-4 flex-1 min-w-0" : "flex items-start gap-3"}>
        <AppIcon app={app} size={layout === "list" ? "md" : "lg"} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
              {app.name}
            </h3>
            {app.verified && (
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--brand)" }} aria-label="Verified" />
            )}
          </div>
          <p className="text-xs truncate mt-0.5" style={{ color: "var(--text-secondary)" }}>
            {app.tagline}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {comingSoon ? (
              <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
                Coming Soon
              </span>
            ) : (
              <>
                <Stars rating={app.reviewSummary.average} size={11} />
                <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                  {app.reviewSummary.count > 0 ? app.reviewSummary.average.toFixed(1) : "New"}
                </span>
                <span style={{ color: "var(--border-hover)" }}>·</span>
                <PriceTag price={app.price} originalPrice={app.originalPrice} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className={layout === "list" ? "shrink-0" : "absolute top-3 right-3"}>
        <WishlistButton slug={app.slug} appName={app.name} size="sm" />
      </div>
    </Link>
  );
}
