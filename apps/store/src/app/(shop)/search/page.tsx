"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon, PackageSearch } from "lucide-react";
import { filterApps } from "../../../services/appService";
import { AppCard } from "../../../components/store";
import { EmptyState } from "../../../components/ui";
import { useStore } from "../../../store/StoreProvider";

function SearchResults({ initialQuery }: { initialQuery: string }) {
  const { dispatch } = useStore();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (initialQuery) dispatch({ type: "ADD_RECENT_SEARCH", query: initialQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const results = query.trim() ? filterApps({ query }) : [];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
      <div className="relative max-w-lg mb-6">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-muted)" }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search apps…"
          autoFocus
          className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1"
          style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
        />
      </div>

      {query.trim() === "" ? (
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>Start typing to search Brothers Store.</p>
      ) : results.length === 0 ? (
        <EmptyState
          icon={<PackageSearch className="w-5 h-5" />}
          title="No apps match your search"
          description={`We couldn't find anything for "${query}".`}
        />
      ) : (
        <>
          <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
            {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {results.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function SearchPageInner() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  return <SearchResults key={q} initialQuery={q} />;
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchPageInner />
    </Suspense>
  );
}
