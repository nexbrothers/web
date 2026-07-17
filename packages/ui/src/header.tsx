"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme";
import { useState, useEffect } from "react";
import { cn } from "@repo/utils";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  productName: string;
  logoSrc?: string;
  navLinks?: NavLink[];
}

export function Header({ productName, logoSrc, navLinks }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const defaultLinks: NavLink[] = [
    { label: "Features", href: "/#features" },
    { label: "Details", href: "/product-details" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  const links = navLinks || defaultLinks;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b"
          : "border-b border-transparent"
      )}
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg-primary) 85%, transparent)"
          : "transparent",
        borderColor: scrolled ? "var(--border-primary)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          {logoSrc ? (
            <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md">
              <Image src={logoSrc} alt={`${productName} logo`} width={28} height={28} className="object-contain" />
            </div>
          ) : (
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <span className="font-bold text-xs text-white">{productName[0]}</span>
            </div>
          )}
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {productName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="15" y2="5" />
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <line x1="3" y1="13" x2="15" y2="13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t px-5 py-3"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-primary)",
          }}
        >
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-elevated)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
