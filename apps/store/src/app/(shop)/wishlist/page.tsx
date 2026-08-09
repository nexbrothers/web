"use client";

import { Heart } from "lucide-react";
import { AppCard } from "../../../components/store";
import { EmptyState } from "../../../components/ui";
import { useStore } from "../../../store/StoreProvider";
import { getApp } from "../../../data";

export default function WishlistPage() {
  const { wishlist } = useStore();
  const apps = wishlist.map((slug) => getApp(slug)).filter(Boolean) as ReturnType<typeof getApp>[];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Wishlist
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Apps you&apos;ve saved to explore later.
      </p>

      {apps.length === 0 ? (
        <EmptyState
          icon={<Heart className="w-5 h-5" />}
          title="Your wishlist is empty"
          description="Save apps you want to explore later by tapping the heart icon."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {apps.map((app) => app && <AppCard key={app.slug} app={app} />)}
        </div>
      )}
    </div>
  );
}
