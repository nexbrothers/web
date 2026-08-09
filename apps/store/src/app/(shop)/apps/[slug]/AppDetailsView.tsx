"use client";

import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { AppIcon, WishlistButton, DownloadButton, PurchaseButton, ScreenshotGallery, RatingSummary, ReviewCard, VersionHistory, SecurityCard, PermissionsList } from "../../../../components/store";
import { Stars } from "../../../../components/ui";
import { formatSize, formatDate } from "../../../../lib/format";
import { getReviewsForApp } from "../../../../data";
import { useStore } from "../../../../store/StoreProvider";
import type { AppRecord } from "../../../../types";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="py-6 border-t first:border-t-0 first:pt-0" style={{ borderColor: "var(--border-primary)" }}>
      <h2 className="text-base font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{title}</h2>
      {children}
    </section>
  );
}

export function AppDetailsView({ app }: { app: AppRecord }) {
  const { library } = useStore();
  const reviews = getReviewsForApp(app.slug).slice(0, 3);
  const comingSoon = app.status === "coming-soon";
  const owned = app.price === 0 || library.some((e) => e.appSlug === app.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-5 pb-6 border-b" style={{ borderColor: "var(--border-primary)" }}>
        <AppIcon app={app} size="xl" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {app.name}
                </h1>
                {app.verified && <ShieldCheck className="w-4 h-4" style={{ color: "var(--brand)" }} aria-label="Verified" />}
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{app.tagline}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>by {app.developer}</p>
            </div>
            <WishlistButton slug={app.slug} appName={app.name} />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4">
            {app.reviewSummary.count > 0 && (
              <Link href={`/apps/${app.slug}/reviews`} className="flex flex-col hover:opacity-80">
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: "var(--text-primary)" }}>
                  {app.reviewSummary.average.toFixed(1)}
                  <Stars rating={app.reviewSummary.average} size={11} />
                </span>
                <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>{app.reviewSummary.count} reviews</span>
              </Link>
            )}
            <Stat label="Downloads" value={app.downloadsLabel} />
            <Stat label="Version" value={app.currentVersion} />
            <Stat label="Size" value={formatSize(app.sizeMb)} />
          </div>

          <div className="mt-5">
            {comingSoon ? (
              <span
                className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium"
                style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
              >
                Coming soon
              </span>
            ) : owned ? (
              <DownloadButton app={app} />
            ) : (
              <PurchaseButton app={app} />
            )}
          </div>
        </div>
      </div>

      <Section title="Screenshots">
        <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />
      </Section>

      <Section title="About this app">
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{app.description}</p>
      </Section>

      <Section title="Features">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          {app.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--brand)" }} />
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What's New">
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
          Version {app.versionHistory[0].version} · {formatDate(app.versionHistory[0].date)}
        </p>
        <ul className="space-y-1">
          {app.versionHistory[0].notes.map((n) => (
            <li key={n} className="text-sm" style={{ color: "var(--text-secondary)" }}>— {n}</li>
          ))}
        </ul>
      </Section>

      <Section title="Version History">
        <VersionHistory versions={app.versionHistory} />
      </Section>

      <Section title="Requirements">
        <ul className="space-y-1.5">
          {app.requirements.map((r) => (
            <li key={r} className="text-sm" style={{ color: "var(--text-secondary)" }}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section title="Permissions">
        <PermissionsList permissions={app.permissions} />
      </Section>

      <Section title="Security">
        <SecurityCard app={app} />
      </Section>

      <Section title="Ratings & Reviews">
        <RatingSummary summary={app.reviewSummary} />
        {reviews.length > 0 && (
          <div className="space-y-3 mt-6">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        )}
        <Link
          href={`/apps/${app.slug}/reviews`}
          className="inline-flex items-center gap-1 text-sm font-medium mt-4"
          style={{ color: "var(--brand)" }}
        >
          {app.reviewSummary.count > 0 ? "See all reviews" : "Write the first review"}
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </Section>

      {/* Mobile sticky CTA */}
      {!comingSoon && (
        <div
          className="sm:hidden fixed bottom-0 left-0 right-0 z-30 border-t px-4 py-3 flex items-center gap-3"
          style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}
        >
          <AppIcon app={app} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate" style={{ color: "var(--text-primary)" }}>{app.name}</p>
          </div>
          {owned ? <DownloadButton app={app} size="sm" /> : <PurchaseButton app={app} size="sm" />}
        </div>
      )}
    </div>
  );
}
