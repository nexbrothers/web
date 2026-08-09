import type { Metadata } from "next";
import { apps, categories } from "../../../data";
import { CategoryCard } from "../../../components/store";

export const metadata: Metadata = {
  title: "Categories | Brothers Store",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
        Categories
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Browse Brothers Store by category.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} count={apps.filter((a) => a.category === c.slug).length} />
        ))}
      </div>
    </div>
  );
}
