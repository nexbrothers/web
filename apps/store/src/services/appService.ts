import { apps, categories, getApp as getAppData } from "../data";
import type { AppCategory, AppRecord } from "../types";
import { delay } from "./latency";

export interface AppFilters {
  query?: string;
  category?: AppCategory | "all";
  price?: "all" | "free" | "paid";
  minRating?: number;
  sort?: "relevance" | "rating" | "downloads" | "updated" | "name";
}

function matchesQuery(app: AppRecord, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    app.name.toLowerCase().includes(q) ||
    app.tagline.toLowerCase().includes(q) ||
    app.shortDescription.toLowerCase().includes(q) ||
    app.categoryLabel.toLowerCase().includes(q) ||
    app.developer.toLowerCase().includes(q)
  );
}

function downloadsWeight(label: string): number {
    const n = parseFloat(label);
    if (Number.isNaN(n)) return 0;
    if (label.includes("K")) return n * 1_000;
    if (label.includes("L")) return n * 100_000;
    if (label.includes("M")) return n * 1_000_000;
    return n;
}

export function filterApps(filters: AppFilters): AppRecord[] {
  let result = [...apps];

  if (filters.query) result = result.filter((app) => matchesQuery(app, filters.query!));
  if (filters.category && filters.category !== "all") {
    result = result.filter((app) => app.category === filters.category);
  }
  if (filters.price === "free") result = result.filter((app) => app.price === 0);
  if (filters.price === "paid") result = result.filter((app) => app.price > 0);
  if (filters.minRating) {
    result = result.filter((app) => app.reviewSummary.average >= filters.minRating!);
  }

  const sort = filters.sort ?? "relevance";
  const sorted = [...result];
  switch (sort) {
    case "rating":
      sorted.sort((a, b) => b.reviewSummary.average - a.reviewSummary.average);
      break;
    case "downloads":
      sorted.sort((a, b) => downloadsWeight(b.downloadsLabel) - downloadsWeight(a.downloadsLabel));
      break;
    case "updated":
      sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      break;
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
  return sorted;
}

export async function listApps(filters: AppFilters = {}): Promise<AppRecord[]> {
  await delay(220);
  return filterApps(filters);
}

export async function getAppBySlug(slug: string): Promise<AppRecord | undefined> {
  await delay(180);
  return getAppData(slug);
}

export async function getFeaturedApps(): Promise<AppRecord[]> {
  await delay(180);
  return apps.filter((a) => a.featured);
}

export async function getRecentlyUpdated(limit = 6): Promise<AppRecord[]> {
  await delay(180);
  return [...apps]
    .filter((a) => a.status === "live")
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

export async function getPremiumApps(): Promise<AppRecord[]> {
  await delay(180);
  return apps.filter((a) => a.premium || a.price > 0);
}

export async function searchApps(query: string): Promise<AppRecord[]> {
  await delay(160);
  if (!query.trim()) return [];
  return apps.filter((app) => matchesQuery(app, query)).slice(0, 8);
}

export function getSuggestedApps(limit = 6): AppRecord[] {
  return apps.filter((a) => a.status === "live").slice(0, limit);
}

export { categories };
