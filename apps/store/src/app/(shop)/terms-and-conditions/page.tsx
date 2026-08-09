import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions | Brothers Store" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Terms &amp; Conditions
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        Last updated {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="policy-section">
        <p>
          Brothers Store is a frontend-only prototype built to evaluate the design and user
          experience of a future NexBrothers app marketplace. By using this prototype, you
          acknowledge that it does not provide a real commercial service.
        </p>
      </div>

      <div className="policy-section">
        <h2>Simulated functionality</h2>
        <p>
          All purchases, downloads, updates, and account actions on this prototype are simulated
          using local browser state. No real transactions occur, no real applications are
          distributed, and no account credentials are collected or verified.
        </p>
      </div>

      <div className="policy-section">
        <h2>App listings</h2>
        <p>
          Some applications shown are real NexBrothers products; others are illustrative examples
          created to demonstrate the marketplace experience across categories. Ratings, download
          counts, and reviews for illustrative apps are fictional and do not represent real user
          activity.
        </p>
      </div>

      <div className="policy-section">
        <h2>No warranty</h2>
        <p>
          This prototype is provided as-is for evaluation purposes, without warranty of any kind.
          Features and content are subject to change without notice as the product evolves.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:nexbrotherss@gmail.com" className="prose-link">
            nexbrotherss@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
