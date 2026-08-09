import { Package, Download, IndianRupee, Users, Rocket } from "lucide-react";
import { apps, releaseDrafts } from "../../data";
import { formatDate } from "../../lib/format";

const STATS = [
  { label: "Applications", value: apps.length.toString(), icon: Package },
  { label: "Total Downloads", value: "84.6K", icon: Download },
  { label: "Revenue (illustrative)", value: "₹42,318", icon: IndianRupee },
  { label: "Registered Users", value: "3,204", icon: Users },
];

export default function AdminDashboardPage() {
  const recentReleases = [...releaseDrafts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Dashboard
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Illustrative platform metrics for this prototype.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border p-4" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}>
              <s.icon className="w-4 h-4" />
            </div>
            <p className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{s.value}</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
          <Rocket className="w-4 h-4" />
          Recent Releases
        </h2>
        <div className="rounded-xl border divide-y" style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
          {recentReleases.map((r) => {
            const app = apps.find((a) => a.slug === r.appSlug);
            return (
              <div key={r.id} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {app?.name ?? r.appSlug} <span style={{ color: "var(--text-muted)" }}>v{r.version}</span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{formatDate(r.createdAt)}</p>
                </div>
                <span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: r.status === "published" ? "var(--success-subtle)" : "var(--warning-subtle)",
                    color: r.status === "published" ? "var(--success)" : "var(--warning)",
                  }}
                >
                  {r.status === "published" ? "Published" : "Draft"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
