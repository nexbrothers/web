import type { AppCategory } from "../types";

export interface CategoryDef {
  slug: AppCategory;
  label: string;
  description: string;
}

export const categories: CategoryDef[] = [
  { slug: "productivity", label: "Productivity", description: "Get more done, faster." },
  { slug: "tools", label: "Tools", description: "Everyday utilities that just work." },
  { slug: "finance", label: "Finance", description: "Track, budget, and understand your money." },
  { slug: "lifestyle", label: "Lifestyle", description: "Apps for everyday life." },
  { slug: "entertainment", label: "Entertainment", description: "Things to watch, play, and enjoy." },
  { slug: "games", label: "Games", description: "Play something new." },
  { slug: "security", label: "Security", description: "Keep your data and identity safe." },
  { slug: "utilities", label: "Utilities", description: "Small apps that solve real problems." },
];

export function getCategory(slug: string): CategoryDef | undefined {
  return categories.find((c) => c.slug === slug);
}
