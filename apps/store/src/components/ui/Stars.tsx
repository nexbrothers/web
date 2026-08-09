"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            width={size}
            height={size}
            style={{
              fill: filled ? "var(--brand)" : "none",
              color: filled ? "var(--brand)" : "var(--border-hover)",
            }}
          />
        );
      })}
    </div>
  );
}

export function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        const filled = starValue <= (hover || value);
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === starValue}
            aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
          >
            <Star
              width={26}
              height={26}
              style={{
                fill: filled ? "var(--brand)" : "none",
                color: filled ? "var(--brand)" : "var(--border-hover)",
                transition: "color 150ms, fill 150ms",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
