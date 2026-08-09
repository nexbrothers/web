export type AppCategory =
  | "productivity"
  | "tools"
  | "finance"
  | "lifestyle"
  | "entertainment"
  | "games"
  | "security"
  | "utilities";

export interface VersionEntry {
  version: string;
  versionCode: number;
  date: string; // ISO date
  notes: string[];
  sizeMb: number;
}

export interface AppReviewSummary {
  average: number;
  count: number;
  distribution: [number, number, number, number, number]; // count for 1..5 stars, index 0 = 1 star
}

export interface AppRecord {
  slug: string;
  name: string;
  developer: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: AppCategory;
  categoryLabel: string;
  features: string[];
  requirements: string[];
  permissions: { label: string; detail: string }[];
  verified: boolean;
  isNexBrothers: boolean;
  price: number; // 0 = free, otherwise INR
  originalPrice?: number; // for discount display
  currency: "INR";
  iconSrc?: string; // path if a real image exists, else fall back to lettermark
  screenshots: string[];
  downloadsLabel: string; // e.g. "8K+"
  sizeMb: number;
  currentVersion: string;
  versionCode: number;
  updatedAt: string; // ISO date
  releasedAt: string; // ISO date
  playStoreUrl?: string;
  packageId: string;
  reviewSummary: AppReviewSummary;
  versionHistory: VersionEntry[];
  featured?: boolean;
  premium?: boolean; // has a paid tier beyond base price
  status: "live" | "coming-soon";
}

export interface Review {
  id: string;
  appSlug: string;
  author: string;
  rating: number;
  date: string; // ISO date
  title?: string;
  content: string;
  verified: boolean;
  helpfulCount: number;
  isUserReview?: boolean;
}

export type PaymentMethod = "upi" | "card" | "netbanking" | "wallet";

export interface Order {
  id: string;
  appSlug: string;
  amount: number;
  currency: "INR";
  method: PaymentMethod;
  status: "success" | "failed";
  createdAt: string; // ISO date
}

export type DownloadStatus =
  | "idle"
  | "preparing"
  | "downloading"
  | "verifying"
  | "complete"
  | "failed";

export interface DownloadRecord {
  id: string;
  appSlug: string;
  version: string;
  sizeMb: number;
  status: DownloadStatus;
  startedAt: string; // ISO date
  completedAt?: string;
}

export interface LibraryEntry {
  appSlug: string;
  installedVersion: string;
  installedAt: string; // ISO date
  updateStatus: "up-to-date" | "update-available" | "updating";
}

export interface User {
  name: string;
  email: string;
  avatarInitials: string;
  memberSince: string; // ISO date
}

export interface ReleaseDraft {
  id: string;
  appSlug: string;
  version: string;
  versionCode: number;
  notes: string;
  status: "draft" | "published";
  createdAt: string; // ISO date
}
