"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LayoutGrid, List, PackageSearch } from "lucide-react";
import { useAppFilters } from "../../../hooks/useAppFilters";
import { FilterBar, SortMenu, AppCard } from "../../../components/store";
import { EmptyState } from "../../../components/ui";
import type { AppCategory } from "../../../types";
import type { AppFilters } from "../../../services/appService";

function AppsListing() {
  const searchParams = useSearchParams();
  const filters = useAppFilters();
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const price = searchParams.get("price") as AppFilters["price"] | null;
    const sort = searchParams.get("sort") as AppFilters["sort"] | null;
    const category = searchParams.get("category") as AppCategory | null;
    if (price) filters.setPrice(price);
    if (sort) filters.setSort(sort);
    if (category) filters.setCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
          All Apps
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {filters.results.length} {filters.results.length === 1 ? "app" : "apps"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <FilterBar
            query={filters.query}
            onQueryChange={filters.setQuery}
            category={filters.category}
            onCategoryChange={filters.setCategory}
            price={filters.price}
            onPriceChange={filters.setPrice}
            minRating={filters.minRating}
            onMinRatingChange={filters.setMinRating}
            onReset={filters.reset}
            activeFilterCount={filters.activeFilterCount}
          />
        </aside>

        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <SortMenu value={filters.sort} onChange={filters.setSort} />
            <div className="hidden sm:flex items-center gap-1 rounded-lg border p-0.5" style={{ borderColor: "var(--border-primary)" }}>
              <button
                onClick={() => setLayout("grid")}
                aria-label="Grid view"
                aria-pressed={layout === "grid"}
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ backgroundColor: layout === "grid" ? "var(--bg-elevated)" : "transparent", color: "var(--text-secondary)" }}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setLayout("list")}
                aria-label="List view"
                aria-pressed={layout === "list"}
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ backgroundColor: layout === "list" ? "var(--bg-elevated)" : "transparent", color: "var(--text-secondary)" }}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {filters.results.length === 0 ? (
            <EmptyState
              icon={<PackageSearch className="w-5 h-5" />}
              title="No apps found"
              description="Try adjusting your filters or search terms."
              action={{ label: "Clear filters", onClick: filters.reset }}
            />
          ) : (
            <div className={layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" : "space-y-2"}>
              {filters.results.map((app) => (
                <AppCard key={app.slug} app={app} layout={layout} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppsPage() {
  return (
    <Suspense>
      <AppsListing />
    </Suspense>
  );
}
