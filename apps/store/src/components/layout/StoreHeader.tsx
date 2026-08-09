"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, User, Menu, X, Store } from "lucide-react";
import { ThemeToggle } from "@repo/ui/theme";
import { useStore } from "../../store/StoreProvider";
import { SearchOverlay } from "./SearchOverlay";

const NAV_LINKS = [
  { label: "Apps", href: "/apps" },
  { label: "Games", href: "/categories/games" },
  { label: "Categories", href: "/categories" },
  { label: "Premium", href: "/apps?price=paid" },
  { label: "Downloads", href: "/downloads" },
];

export function StoreHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist } = useStore();

  return (
    <>
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-primary) 92%, transparent)",
          borderColor: "var(--border-primary)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <Store className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight hidden sm:inline" style={{ color: "var(--text-primary)" }}>
              Brothers Store
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg text-sm transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex-1 max-w-sm hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
            style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)" }}
          >
            <Search className="w-3.5 h-3.5" />
            Search apps…
          </button>

          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ color: "var(--text-secondary)" }}
            >
              <Search className="w-4 h-4" />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ color: "var(--text-secondary)" }}
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[15px] h-[15px] px-0.5 rounded-full flex items-center justify-center text-[9px] font-semibold text-white"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="w-8 h-8 rounded-lg hidden sm:flex items-center justify-center"
              style={{ color: "var(--text-secondary)" }}
            >
              <User className="w-4 h-4" />
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ color: "var(--text-primary)" }}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t px-4 py-3" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
            <div className="space-y-0.5">
              {[...NAV_LINKS, { label: "Account", href: "/account" }, { label: "Wishlist", href: "/wishlist" }].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
