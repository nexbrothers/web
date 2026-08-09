import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Brothers Store" };

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        Last updated {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="policy-section">
        <p>
          Brothers Store is currently a frontend product prototype built by NexBrothers to
          demonstrate a future app marketplace. This page describes how the prototype behaves —
          it is not a live commercial product yet.
        </p>
      </div>

      <div className="policy-section">
        <h2>What this prototype stores</h2>
        <p>
          All apps, prices, reviews, downloads, and purchase history you see are simulated. Any
          data you generate — wishlist entries, reviews you write, simulated purchases and
          downloads — is stored only in your browser&apos;s local storage and is never transmitted
          to NexBrothers or any third party.
        </p>
      </div>

      <div className="policy-section">
        <h2>No real payments or downloads</h2>
        <p>
          Checkout, payment processing, and APK downloads on Brothers Store are entirely
          simulated for demonstration purposes. No real payment gateway is integrated, no money
          changes hands, and no application files are actually transferred.
        </p>
      </div>

      <div className="policy-section">
        <h2>Clearing your data</h2>
        <p>
          Since all prototype data lives in local storage, clearing your browser&apos;s site data
          for this domain will reset your library, wishlist, downloads, and purchase history.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact</h2>
        <p>
          Questions about this prototype can be sent to{" "}
          <a href="mailto:nexbrotherss@gmail.com" className="prose-link">
            nexbrotherss@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
