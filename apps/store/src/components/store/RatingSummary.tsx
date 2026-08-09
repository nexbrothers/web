import { Stars } from "../ui";
import { ratingPercent } from "../../lib/format";
import type { AppReviewSummary } from "../../types";

export function RatingSummary({ summary }: { summary: AppReviewSummary }) {
  if (summary.count === 0) {
    return (
      <div className="flex items-center gap-3 py-2">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          No ratings yet — be the first to review.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
      <div className="flex flex-col items-start sm:items-center shrink-0">
        <span className="text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
          {summary.average.toFixed(1)}
        </span>
        <Stars rating={summary.average} size={14} />
        <span className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
          {summary.count.toLocaleString("en-IN")} reviews
        </span>
      </div>
      <div className="flex-1 space-y-1.5 min-w-0 max-w-sm">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-2">
            <span className="text-xs w-3 shrink-0" style={{ color: "var(--text-muted)" }}>
              {star}
            </span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-elevated)" }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${ratingPercent(summary.distribution, star)}%`, backgroundColor: "var(--brand)" }}
              />
            </div>
            <span className="text-xs w-8 text-right shrink-0" style={{ color: "var(--text-muted)" }}>
              {ratingPercent(summary.distribution, star)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
