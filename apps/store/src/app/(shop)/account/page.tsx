"use client";

import Link from "next/link";
import { useState } from "react";
import { LibraryBig, DownloadCloud, Heart, Receipt, Settings as SettingsIcon, LogIn, Loader2 } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { useStore } from "../../../store/StoreProvider";
import { mockUser } from "../../../data";
import { signIn } from "../../../services/accountService";
import { formatDate, formatPrice, initialsOf } from "../../../lib/format";

const LINKS = [
  { href: "/library", label: "My Apps", icon: LibraryBig },
  { href: "/downloads", label: "Downloads", icon: DownloadCloud },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export default function AccountPage() {
  const { session, orders, dispatch } = useStore();
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = async () => {
    setSigningIn(true);
    await signIn();
    dispatch({ type: "SET_SIGNED_IN", value: true });
    setSigningIn(false);
  };

  if (!session.signedIn) {
    return (
      <div className="mx-auto max-w-sm px-4 sm:px-6 py-20 text-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
        >
          <LogIn className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
          Sign in to Brothers Store
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Access your library, downloads, and purchases.
        </p>
        <Button onClick={handleSignIn} disabled={signingIn} className="w-full">
          {signingIn ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in…
            </span>
          ) : (
            "Sign In"
          )}
        </Button>
        <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
          Simulated sign-in — no credentials required for this prototype.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
      <div
        className="flex items-center gap-4 rounded-xl border p-5 mb-8"
        style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
          style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
        >
          {initialsOf(mockUser.name)}
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold truncate" style={{ color: "var(--text-primary)" }}>{mockUser.name}</p>
          <p className="text-sm truncate" style={{ color: "var(--text-secondary)" }}>{mockUser.email}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Member since {formatDate(mockUser.memberSince)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hover-card flex flex-col items-center gap-2 rounded-xl border p-4 text-center"
            style={{ borderColor: "var(--border-primary)", backgroundColor: "var(--bg-primary)" }}
          >
            <l.icon className="w-5 h-5" style={{ color: "var(--brand)" }} />
            <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{l.label}</span>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
          <Receipt className="w-4 h-4" />
          Purchase History
        </h2>
        {orders.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>No purchases yet.</p>
        ) : (
          <div className="space-y-2">
            {orders.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <div>
                  <p style={{ color: "var(--text-primary)" }} className="font-medium capitalize">{o.appSlug.replace(/-/g, " ")}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{formatDate(o.createdAt)} · {o.method.toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <p style={{ color: "var(--text-primary)" }}>{formatPrice(o.amount)}</p>
                  <p className="text-xs" style={{ color: o.status === "success" ? "var(--success)" : "var(--danger)" }}>
                    {o.status === "success" ? "Paid" : "Failed"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
