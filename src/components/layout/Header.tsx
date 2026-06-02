"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn("site-header", isScrolled && "is-scrolled")}>
        <div className="header-container">
          <Link className="brand" href="/" aria-label="NexBrothers home">
            <span className="brand-mark">N</span>
            <span>
              <strong>NexBrothers</strong>
              <small>Building the Future</small>
            </span>
          </Link>

          <nav className="site-nav hidden md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "true" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={cn("menu-toggle md:hidden flex", isMobileMenuOpen && "active")}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger"></span>
          </button>
        </div>
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
