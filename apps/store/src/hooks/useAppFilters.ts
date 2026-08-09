"use client";

import { useMemo, useState } from "react";
import { filterApps, AppFilters } from "../services/appService";
import type { AppCategory } from "../types";

export function useAppFilters(initial: Partial<AppFilters> = {}) {
  const [query, setQuery] = useState(initial.query ?? "");
  const [category, setCategory] = useState<AppCategory | "all">(initial.category ?? "all");
  const [price, setPrice] = useState<AppFilters["price"]>(initial.price ?? "all");
  const [minRating, setMinRating] = useState<number>(initial.minRating ?? 0);
  const [sort, setSort] = useState<AppFilters["sort"]>(initial.sort ?? "relevance");

  const results = useMemo(
    () => filterApps({ query, category, price, minRating, sort }),
    [query, category, price, minRating, sort]
  );

  const activeFilterCount = [
    category !== "all",
    price !== "all",
    minRating > 0,
  ].filter(Boolean).length;

  const reset = () => {
    setQuery("");
    setCategory("all");
    setPrice("all");
    setMinRating(0);
    setSort("relevance");
  };

  return {
    query, setQuery,
    category, setCategory,
    price, setPrice,
    minRating, setMinRating,
    sort, setSort,
    results,
    activeFilterCount,
    reset,
  };
}
