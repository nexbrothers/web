"use client";

import { cn } from "@repo/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "@repo/ui/ui";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "border-b" : "border-b border-transparent"
        )}
        style={{
          backgroundColor: isScrolled
            ? "color-mix(in srgb, var(--background) 88%, transparent)"
            : "transparent",
          borderColor: isScrolled ? "var(--border)" : "transparent",
          backdropFilter: isScrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(14px)" : "none",
        }}
      >
        <Container>
          <nav className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-[9px] text-sm font-bold shrink-0 transition-transform duration-200 group-hover:-rotate-6"
                style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
              >
                N
              </span>
              <span
                className="font-display text-[17px] font-semibold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                NexBrothers
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-9">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-[15px] font-medium transition-colors duration-200"
                    style={{ color: active ? "var(--text-primary)" : "var(--text-secondary)" }}
                  >
                    {item.label}
                    {active && (
                      <span
                        className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 active:scale-[0.97]"
                style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile: Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 -mr-2"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
        currentPath={pathname}
      />
    </>
  );
}
