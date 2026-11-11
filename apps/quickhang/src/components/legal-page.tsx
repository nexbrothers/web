import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@repo/ui/ui";
import { SITE_URL } from "../lib/site";

export function LegalPage({
  title,
  path,
  meta,
  children,
}: {
  title: string;
  path: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <div className="qh-hero pb-20 pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Container size="md" className="relative z-10">
        <Link href="/" className="mb-6 inline-flex min-h-12 items-center gap-2 text-sm font-bold qh-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to QuickHang
        </Link>
        <h1 className="qh-h2">{title}</h1>
        {meta && <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>{meta}</p>}
        <div className="qh-prose mt-10 grid gap-8">{children}</div>
      </Container>
    </div>
  );
}
