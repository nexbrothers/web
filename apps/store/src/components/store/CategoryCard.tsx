import Link from "next/link";
import {
  Briefcase,
  Wrench,
  Wallet,
  Heart,
  Clapperboard,
  Gamepad2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { CategoryDef } from "../../data/categories";

const ICONS: Record<string, typeof Briefcase> = {
  productivity: Briefcase,
  tools: Wrench,
  finance: Wallet,
  lifestyle: Heart,
  entertainment: Clapperboard,
  games: Gamepad2,
  security: ShieldCheck,
  utilities: Sparkles,
};

export function CategoryCard({ category, count }: { category: CategoryDef; count: number }) {
  const Icon = ICONS[category.slug] ?? Sparkles;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="hover-card group flex flex-col gap-3 rounded-xl border p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {category.label}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          {count} {count === 1 ? "app" : "apps"}
        </p>
      </div>
    </Link>
  );
}
