import { getReviewsForApp } from "../data";
import type { Review } from "../types";
import { delay } from "./latency";

export async function fetchReviews(slug: string): Promise<Review[]> {
  await delay(220);
  return getReviewsForApp(slug).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function buildReview(input: {
  appSlug: string;
  author: string;
  rating: number;
  title?: string;
  content: string;
}): Review {
  return {
    id: `user-review-${Date.now()}`,
    appSlug: input.appSlug,
    author: input.author,
    rating: input.rating,
    date: new Date().toISOString(),
    title: input.title,
    content: input.content,
    verified: false,
    helpfulCount: 0,
    isUserReview: true,
  };
}
