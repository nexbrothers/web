"use client";

import { Heart } from "lucide-react";
import { useStore } from "../../store/StoreProvider";
import { showToast } from "../../hooks/useToast";

export function WishlistButton({
  slug,
  appName,
  size = "md",
}: {
  slug: string;
  appName: string;
  size?: "sm" | "md";
}) {
  const { wishlist, dispatch } = useStore();
  const active = wishlist.includes(slug);
  const dim = size === "sm" ? 30 : 36;
  const iconSize = size === "sm" ? 14 : 16;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "TOGGLE_WISHLIST", slug });
        showToast(active ? `Removed ${appName} from wishlist` : `Added ${appName} to wishlist`, "info");
      }}
      aria-pressed={active}
      aria-label={active ? `Remove ${appName} from wishlist` : `Add ${appName} to wishlist`}
      className="flex items-center justify-center rounded-full border shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
      style={{
        width: dim,
        height: dim,
        borderColor: "var(--border-primary)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Heart
        width={iconSize}
        height={iconSize}
        style={{
          fill: active ? "var(--danger)" : "none",
          color: active ? "var(--danger)" : "var(--text-muted)",
        }}
      />
    </button>
  );
}
