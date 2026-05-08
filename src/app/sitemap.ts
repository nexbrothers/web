import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://nexbrothers.com";
const SITE_UPDATED_AT = new Date("2026-05-08T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/playro`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: posts[0]?.date ? new Date(posts[0].date) : SITE_UPDATED_AT,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/products/request-ledger`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/request-ledger/docs`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/products/scanvo`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/photoprint-pro`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/job-automator`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/playro/privacy-policy`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/playro/delete-account`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${BASE_URL}/blog/tags/${encodeURIComponent(tag)}`,
    lastModified: posts
      .filter((post) => post.tags.includes(tag))
      .map((post) => post.date)
      .sort()
      .reverse()[0]
      ? new Date(
          posts
            .filter((post) => post.tags.includes(tag))
            .map((post) => post.date)
            .sort()
            .reverse()[0],
        )
      : SITE_UPDATED_AT,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPages, ...tagPages];
}
