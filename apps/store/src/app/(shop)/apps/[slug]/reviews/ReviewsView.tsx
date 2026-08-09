"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, PenLine } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { AppIcon, RatingSummary, ReviewCard, WriteReviewForm } from "../../../../../components/store";
import { Modal, EmptyState } from "../../../../../components/ui";
import { useStore } from "../../../../../store/StoreProvider";
import { getReviewsForApp } from "../../../../../data";
import type { AppRecord } from "../../../../../types";

export function ReviewsView({ app }: { app: AppRecord }) {
  const { userReviews } = useStore();
  const [writeOpen, setWriteOpen] = useState(false);
  const combined = [...(userReviews[app.slug] ?? []), ...getReviewsForApp(app.slug)];

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8">
      <Link href={`/apps/${app.slug}`} className="inline-flex items-center gap-1 text-sm mb-5" style={{ color: "var(--text-muted)" }}>
        <ChevronLeft className="w-4 h-4" />
        Back to {app.name}
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <AppIcon app={app} size="md" />
        <div>
          <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Ratings & Reviews</h1>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{app.name}</p>
        </div>
      </div>

      <RatingSummary summary={app.reviewSummary} />

      <div className="mt-6">
        <Button onClick={() => setWriteOpen(true)} variant="secondary">
          <PenLine className="w-4 h-4 mr-1.5" />
          Write a Review
        </Button>
      </div>

      <div className="mt-8">
        {combined.length === 0 ? (
          <EmptyState title="No reviews yet" description="Be the first to share your experience with this app." />
        ) : (
          <div className="space-y-3">
            {combined.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        )}
      </div>

      <Modal open={writeOpen} onClose={() => setWriteOpen(false)} title="Write a Review">
        <WriteReviewForm appSlug={app.slug} onDone={() => setWriteOpen(false)} />
      </Modal>
    </div>
  );
}
