import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { apps, categories } from "../../data";
import { AppCard, CategoryCard } from "../../components/store";

export default function HomePage() {
  const featured = apps.filter((a) => a.featured);
  const recentlyUpdated = [...apps]
    .filter((a) => a.status === "live")
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6);
  const premium = apps.filter((a) => a.premium || a.price > 0).slice(0, 4);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="border-b" style={{ borderColor: "var(--border-primary)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-4"
              style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
            >
              <Sparkles className="w-3 h-3" />
              The NexBrothers marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4" style={{ color: "var(--text-primary)" }}>
              Trusted apps.
              <br />
              Made by NexBrothers.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              Discover secure, fast and useful applications built by NexBrothers — all in one
              place, with no hidden costs or bloatware.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/apps"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Explore Apps
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-medium border"
                style={{ borderColor: "var(--border-primary)", color: "var(--text-primary)" }}
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 space-y-14">
        {/* ─── Featured ─── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Featured
            </h2>
            <Link href="/apps" className="text-xs font-medium" style={{ color: "var(--brand)" }}>
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featured.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>

        {/* ─── Categories ─── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Categories
            </h2>
            <Link href="/categories" className="text-xs font-medium" style={{ color: "var(--brand)" }}>
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} count={apps.filter((a) => a.category === c.slug).length} />
            ))}
          </div>
        </section>

        {/* ─── New & Updated ─── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              New &amp; Updated
            </h2>
            <Link href="/apps?sort=updated" className="text-xs font-medium" style={{ color: "var(--brand)" }}>
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentlyUpdated.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>

        {/* ─── Premium ─── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                Premium
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: "var(--premium-subtle)", color: "var(--premium)" }}
                >
                  PAID
                </span>
              </h2>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                Apps worth paying for.
              </p>
            </div>
            <Link href="/apps?price=paid" className="text-xs font-medium" style={{ color: "var(--brand)" }}>
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {premium.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
