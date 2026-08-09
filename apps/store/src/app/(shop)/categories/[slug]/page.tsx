import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, PackageSearch } from "lucide-react";
import { apps, categories, getCategory } from "../../../../data";
import { AppCard } from "../../../../components/store";
import { EmptyState } from "../../../../components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: `${category.label} Apps | Brothers Store`, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const results = apps.filter((a) => a.category === category.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
      <Link href="/categories" className="inline-flex items-center gap-1 text-sm mb-5" style={{ color: "var(--text-muted)" }}>
        <ChevronLeft className="w-4 h-4" />
        All categories
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        {category.label}
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>{category.description}</p>

      {results.length === 0 ? (
        <EmptyState icon={<PackageSearch className="w-5 h-5" />} title="No apps in this category yet" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {results.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
