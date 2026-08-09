import Link from "next/link";
import { Store } from "lucide-react";
import { categories } from "../../data";

const COLUMNS = [
  {
    title: "Discover",
    links: [
      { label: "All apps", href: "/apps" },
      { label: "Categories", href: "/categories" },
      { label: "Premium", href: "/apps?price=paid" },
      { label: "Search", href: "/search" },
    ],
  },
  {
    title: "Library",
    links: [
      { label: "My Apps", href: "/library" },
      { label: "Downloads", href: "/downloads" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Account", href: "/account" },
    ],
  },
  {
    title: "NexBrothers",
    links: [
      { label: "About", href: "https://nexbrothers.com/about" },
      { label: "Contact", href: "https://nexbrothers.com/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export function StoreFooter() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand)" }}>
                <Store className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Brothers Store
              </span>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-secondary)" }}>
              Trusted apps. Made by NexBrothers. A prototype marketplace for discovering and
              installing NexBrothers products in one place.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {categories.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="px-2.5 py-1 rounded-lg text-xs border"
                  style={{ borderColor: "var(--border-primary)", color: "var(--text-muted)" }}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--border-primary)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} NexBrothers. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Brothers Store is a frontend prototype — no real payments or downloads occur.
          </p>
        </div>
      </div>
    </footer>
  );
}
