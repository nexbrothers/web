"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { filterApps, getSuggestedApps } from "../../services/appService";
import { categories } from "../../data";
import { useStore } from "../../store/StoreProvider";
import { AppIcon } from "../store/AppIcon";
import { PriceTag } from "../store/PriceTag";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const { recentSearches, dispatch } = useStore();
  const [query, setQuery] = useState("");

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const results = query.trim() ? filterApps({ query }) : [];
  const suggested = getSuggestedApps(6);

  const goToApp = (slug: string) => {
    if (query.trim()) dispatch({ type: "ADD_RECENT_SEARCH", query: query.trim() });
    handleClose();
    router.push(`/apps/${slug}`);
  };

  const submitSearch = () => {
    if (!query.trim()) return;
    dispatch({ type: "ADD_RECENT_SEARCH", query: query.trim() });
    handleClose();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-[120]">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,12,0.4)" }} onClick={handleClose} />
      <div
        className="relative mx-auto mt-0 sm:mt-20 w-full sm:max-w-xl rounded-none sm:rounded-2xl border shadow-2xl max-h-screen sm:max-h-[75vh] flex flex-col overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
      >
        <div className="flex items-center gap-2.5 px-4 py-3.5 border-b" style={{ borderColor: "var(--border-primary)" }}>
          <Search className="w-4 h-4 shrink-0" style={{ color: "var(--text-muted)" }} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitSearch()}
            placeholder="Search apps, categories…"
            className="flex-1 bg-transparent text-sm focus:outline-none"
            style={{ color: "var(--text-primary)" }}
          />
          <button onClick={handleClose} aria-label="Close search" style={{ color: "var(--text-muted)" }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {query.trim() ? (
            results.length > 0 ? (
              <div className="space-y-1">
                {results.map((app) => (
                  <button
                    key={app.slug}
                    onClick={() => goToApp(app.slug)}
                    className="w-full flex items-center gap-3 p-2 rounded-lg text-left focus:outline-none"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-elevated)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <AppIcon app={app} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{app.name}</p>
                      <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{app.tagline}</p>
                    </div>
                    <PriceTag price={app.price} />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>
                No apps match &ldquo;{query}&rdquo;
              </p>
            )
          ) : (
            <div className="space-y-6">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                      Recent
                    </h3>
                    <button
                      onClick={() => dispatch({ type: "CLEAR_RECENT_SEARCHES" })}
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    {recentSearches.map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuery(q)}
                        className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-left"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--text-muted)" }} />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                  <TrendingUp className="w-3 h-3" />
                  Suggested
                </h3>
                <div className="space-y-1">
                  {suggested.map((app) => (
                    <button
                      key={app.slug}
                      onClick={() => goToApp(app.slug)}
                      className="w-full flex items-center gap-3 p-2 rounded-lg text-left"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-elevated)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <AppIcon app={app} size="sm" />
                      <span className="text-sm font-medium truncate">{app.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>
                  Categories
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/categories/${c.slug}`}
                      onClick={handleClose}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                      style={{ borderColor: "var(--border-primary)", color: "var(--text-secondary)" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
