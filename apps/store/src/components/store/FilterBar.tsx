"use client";

import { Search, X } from "lucide-react";
import { categories } from "../../data";
import type { AppCategory } from "../../types";
import type { AppFilters } from "../../services/appService";

interface FilterBarProps {
  query: string;
  onQueryChange: (v: string) => void;
  category: AppCategory | "all";
  onCategoryChange: (v: AppCategory | "all") => void;
  price: AppFilters["price"];
  onPriceChange: (v: AppFilters["price"]) => void;
  minRating: number;
  onMinRatingChange: (v: number) => void;
  onReset: () => void;
  activeFilterCount: number;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-lg text-xs font-medium border shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
      style={{
        borderColor: active ? "var(--brand)" : "var(--border-primary)",
        backgroundColor: active ? "var(--brand-subtle)" : "var(--bg-primary)",
        color: active ? "var(--brand)" : "var(--text-secondary)",
      }}
    >
      {children}
    </button>
  );
}

export function FilterBar({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  price,
  onPriceChange,
  minRating,
  onMinRatingChange,
  onReset,
  activeFilterCount,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-muted)" }} />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search apps…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-primary)",
            color: "var(--text-primary)",
          }}
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--text-muted)" }}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        <Chip active={category === "all"} onClick={() => onCategoryChange("all")}>
          All categories
        </Chip>
        {categories.map((c) => (
          <Chip key={c.slug} active={category === c.slug} onClick={() => onCategoryChange(c.slug)}>
            {c.label}
          </Chip>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Chip active={price === "free"} onClick={() => onPriceChange(price === "free" ? "all" : "free")}>
          Free
        </Chip>
        <Chip active={price === "paid"} onClick={() => onPriceChange(price === "paid" ? "all" : "paid")}>
          Paid
        </Chip>
        <Chip active={minRating === 4} onClick={() => onMinRatingChange(minRating === 4 ? 0 : 4)}>
          4.0+ rating
        </Chip>
        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="text-xs font-medium ml-1"
            style={{ color: "var(--text-muted)" }}
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
