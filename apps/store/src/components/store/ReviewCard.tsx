"use client";

import { useState } from "react";
import { ShieldCheck, ThumbsUp } from "lucide-react";
import { Stars } from "../ui";
import { formatDate, initialsOf } from "../../lib/format";
import type { Review } from "../../types";

export function ReviewCard({ review }: { review: Review }) {
  const [helpful, setHelpful] = useState(review.helpfulCount);
  const [marked, setMarked] = useState(false);

  return (
    <div
      className="rounded-xl border p-4"
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
    >
      <div className="flex items-start gap-3 mb-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
          style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
        >
          {initialsOf(review.author)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {review.author}
            </span>
            {review.verified && (
              <span
                className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "var(--success-subtle)", color: "var(--success)" }}
              >
                <ShieldCheck className="w-2.5 h-2.5" />
                Verified
              </span>
            )}
            {review.isUserReview && (
              <span
                className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
              >
                Your review
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars rating={review.rating} size={11} />
            <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
              {formatDate(review.date)}
            </span>
          </div>
        </div>
      </div>
      {review.title && (
        <p className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {review.title}
        </p>
      )}
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {review.content}
      </p>
      <button
        onClick={() => {
          if (marked) return;
          setHelpful((h) => h + 1);
          setMarked(true);
        }}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium focus:outline-none"
        style={{ color: marked ? "var(--brand)" : "var(--text-muted)" }}
      >
        <ThumbsUp className="w-3 h-3" style={{ fill: marked ? "var(--brand)" : "none" }} />
        Helpful{helpful > 0 ? ` (${helpful})` : ""}
      </button>
    </div>
  );
}
