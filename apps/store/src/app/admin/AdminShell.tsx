"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Rocket, ArrowLeft, Store } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/apps", label: "Apps", icon: Package, exact: false },
  { href: "/admin/releases", label: "Releases", icon: Rocket, exact: false },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <aside
        className="hidden sm:flex w-56 shrink-0 flex-col border-r p-4"
        style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
      >
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--brand)" }}>
            <Store className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Admin</span>
        </div>

        <nav className="space-y-0.5 flex-1">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: active ? "var(--brand-subtle)" : "transparent",
                  color: active ? "var(--brand)" : "var(--text-secondary)",
                }}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to store
        </Link>
      </aside>

      <div className="flex-1 min-w-0">
        <header
          className="sm:hidden flex items-center justify-between px-4 h-12 border-b"
          style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
        >
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Admin</span>
          <Link href="/" className="text-xs" style={{ color: "var(--text-muted)" }}>Back to store</Link>
        </header>
        <nav className="sm:hidden flex gap-1 px-4 py-2 border-b overflow-x-auto" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-2.5 py-1 rounded-lg text-xs font-medium shrink-0"
                style={{ backgroundColor: active ? "var(--brand-subtle)" : "transparent", color: active ? "var(--brand)" : "var(--text-secondary)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main className="p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
