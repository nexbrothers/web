# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two overlapping audiences on nexbrothers.com: (1) visitors discovering NexBrothers' products — evaluating whether to try Scanvo, Sign Lock, request-ledger, Playro, PhotoPrint Pro, or Job Automator, then continuing to that product's dedicated site or page; (2) readers arriving via SEO/blog search for document-scanning and productivity topics who may not know NexBrothers yet. A smaller audience of potential collaborators/employers assesses the two-person team via About/Team.

## Product Purpose

The root site is NexBrothers' corporate/portfolio hub: it introduces the studio, showcases its shipped and upcoming consumer apps, routes traffic to each product's marketing surface (own subdomain or `/products/*` page), and publishes SEO content (24 posts under `content/posts`) that funnels readers toward the products.

## Positioning

A small, two-person independent software studio ("Aman Sharma" and "Anuj Sharma") that ships multiple polished, privacy-leaning consumer utilities (offline processing, no-nonsense UX) rather than one VC-backed product. Tagline: "Software built with intent."

## Operating Context

Next.js App Router monorepo (pnpm + Turborepo). The root app (this site, package name `nex-brothers`) is a distinct Next.js app from `apps/scanvo`, `apps/signlock`, and `apps/mymoneyreport`; `packages/ui` holds shared primitives (Container, Card, Button, Features/Stats/CTA sections, animations) used by the root site. Root site routes: home, `/about`, `/blog` + `/blog/[slug]` + `/blog/tags/[tag]`, `/products` + per-product pages (`request-ledger`, `photoprint-pro`, `job-automator`), `/playro` (+ sub-pages), `/mymoneyreport` (+ privacy policy), `/contact`, `/privacy-policy`, `/terms-and-conditions`.

## Capabilities and Constraints

- Product status badges (Live vs Coming Soon) on the homepage/products grid must stay accurate to reality; do not flip them as part of layout work.
- External product links (`scanvo.nexbrothers.com`, `signlock.nexbrothers.com`) and internal product routes must keep working.
- SEO/metadata (OpenGraph, JSON-LD, sitemap, robots) is already configured in `layout.tsx` and per-route `metadata.ts`/`layout.tsx` files — layout changes must not remove or break these.
- Blog content is markdown-driven (`content/posts`, `src/lib/blog.ts`, `src/lib/markdown.ts`); prose styling lives in `globals.css` (`.prose-*` classes) and must keep rendering correctly.
- Legal pages (`/privacy-policy`, `/terms-and-conditions`, product-specific privacy policies) use `.policy-section` styles in `globals.css`.

## Brand Commitments

- Name: NexBrothers. Contact: nexbrotherss@gmail.com. Social: X (@nexbrothers), Instagram (@nexbrotherss), YouTube (@nex-brothers), GitHub (nexbrothers).
- Editorial visual world — cream/off-white background (`#f5f0e8`), deep brick-red accent (`#8a1503`), built around the Scanvo hero mockup (phone + signed paper document, `new_design.png` / `public/images/home/`). Preserve this direction; do not revert to a prior palette.
- Typography: **Fraunces** (serif, `var(--font-display)`) for all headings and the wordmark, **Inter** (sans, `var(--font-sans)`) for body copy, **JetBrains Mono** for code. The serif pairs with the printed-paper/signed-document material already present in the hero imagery — do not revert headings to sans without a reason.
- A very faint SVG-noise "paper grain" overlay sits on `body::after` in `globals.css` (opacity 0.035, `mix-blend-mode: multiply`) — keep it subtle if touched; it's meant to be felt, not seen.

## Evidence on Hand

- 24 published blog posts (`content/posts/*.md`) covering document scanning, PDF tools, and product comparisons.
- Team bios/photos for both founders (`/aman.jpeg`, `/anuj.jpg`).
- Written descriptions and status for 6 products, already present in `src/app/page.tsx`.
- Reference mockup for the current visual direction: `new_design.png` (repo root).

## Product Principles

- Ship real, working products over vaporware — status badges reflect reality, not ambition.
- Stay lean: content and components should serve a two-person team's maintenance capacity, not enterprise scale.
- Each product page doubles as that product's landing surface; it must stand alone for a visitor who never sees the homepage.
- Be transparent about product status (live vs coming soon) everywhere it appears.
- Favor privacy/offline-first framing where it's true of the underlying product (Scanvo, Sign Lock).
