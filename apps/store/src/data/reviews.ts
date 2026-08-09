import type { Review } from "../types";

export const reviews: Review[] = [
  // Scanvo
  { id: "r-scanvo-1", appSlug: "scanvo", author: "Rajeev Sharma", rating: 5, date: "2026-07-20", title: "Best scanner I've used", content: "Scan quality is excellent and the interface is simple. OCR picks up even messy handwriting.", verified: true, helpfulCount: 34 },
  { id: "r-scanvo-2", appSlug: "scanvo", author: "Priya Nair", rating: 5, date: "2026-07-11", title: "Fully offline, love it", content: "Being able to scan sensitive documents without anything touching the cloud is exactly what I needed.", verified: true, helpfulCount: 21 },
  { id: "r-scanvo-3", appSlug: "scanvo", author: "Karan Patel", rating: 4, date: "2026-06-28", content: "Great app. Wish the ID card mode had a landscape option.", verified: true, helpfulCount: 8 },

  // My Money Report
  { id: "r-mmr-1", appSlug: "my-money-report", author: "Sunita Verma", rating: 5, date: "2026-07-02", title: "No ads, no nonsense", content: "Finally a finance app that doesn't want my bank login. Simple and honest.", verified: true, helpfulCount: 18 },
  { id: "r-mmr-2", appSlug: "my-money-report", author: "Amit Joshi", rating: 4, date: "2026-06-15", content: "Charts could use more customization but the core tracking works well.", verified: true, helpfulCount: 6 },

  // Request Ledger
  { id: "r-rl-1", appSlug: "request-ledger", author: "Dev Kulkarni", rating: 5, date: "2026-05-10", content: "Saved us hours of debugging silent request failures. Lightweight and does exactly what it says.", verified: true, helpfulCount: 9 },

  // PhotoPrint Pro
  { id: "r-ppp-1", appSlug: "photoprint-pro", author: "Meena Iyer", rating: 4, date: "2026-04-02", content: "Printed passport photos came out perfectly sized. Handy for visa applications.", verified: true, helpfulCount: 5 },
  { id: "r-ppp-2", appSlug: "photoprint-pro", author: "Rohit Bansal", rating: 4, date: "2026-03-14", content: "Does the job well, interface feels a little dated.", verified: false, helpfulCount: 2 },

  // Job Automator
  { id: "r-ja-1", appSlug: "job-automator", author: "Nikhil Rao", rating: 4, date: "2026-03-01", content: "Runs locally which I appreciate. Setup takes a bit of reading but works great once configured.", verified: true, helpfulCount: 4 },

  // Breakup Saathi
  { id: "r-bs-1", appSlug: "breakup-saathi", author: "Ananya Ghosh", rating: 5, date: "2026-06-18", title: "Genuinely helped", content: "The daily prompts gave me something to focus on instead of spiraling. Private and judgment-free.", verified: true, helpfulCount: 42 },
  { id: "r-bs-2", appSlug: "breakup-saathi", author: "Vikram Singh", rating: 4, date: "2026-05-30", content: "Good structure, some prompts felt repetitive after week three.", verified: true, helpfulCount: 11 },

  // Daily Rasoi
  { id: "r-dr-1", appSlug: "daily-rasoi", author: "Kavita Reddy", rating: 5, date: "2026-06-25", content: "The auto grocery list sorted by aisle is a small thing that saves so much time every week.", verified: true, helpfulCount: 15 },
  { id: "r-dr-2", appSlug: "daily-rasoi", author: "Suresh Pillai", rating: 4, date: "2026-06-02", content: "Great for planning, wish it had a shared family list.", verified: true, helpfulCount: 7 },

  // QuietVault
  { id: "r-qv-1", appSlug: "quietvault", author: "Farah Khan", rating: 5, date: "2026-07-15", title: "Trust it completely", content: "Biometric unlock is fast and the decoy vault is a smart touch for peace of mind.", verified: true, helpfulCount: 58 },
  { id: "r-qv-2", appSlug: "quietvault", author: "Manish Agarwal", rating: 5, date: "2026-07-01", content: "Exactly what I wanted — no cloud sync, no accounts, just a locked vault.", verified: true, helpfulCount: 26 },

  // PocketMandi
  { id: "r-pm-1", appSlug: "pocketmandi", author: "Deepa Nambiar", rating: 4, date: "2026-07-20", content: "Prices are usually accurate for my local market. Helps me time bulk purchases.", verified: true, helpfulCount: 19 },
  { id: "r-pm-2", appSlug: "pocketmandi", author: "Arjun Malhotra", rating: 3, date: "2026-07-05", content: "Works well but my town isn't covered yet, hoping for wider coverage soon.", verified: false, helpfulCount: 4 },

  // Nimbus Notes
  { id: "r-nn-1", appSlug: "nimbus-notes", author: "Ishaan Kapoor", rating: 5, date: "2026-07-30", title: "Opens instantly", content: "This is the fastest notes app I've used on Android. No sync delays because there's no sync.", verified: true, helpfulCount: 88 },
  { id: "r-nn-2", appSlug: "nimbus-notes", author: "Tanvi Desai", rating: 5, date: "2026-07-22", content: "Markdown support is exactly enough without becoming complicated.", verified: true, helpfulCount: 40 },

  // LoopReel
  { id: "r-lr-1", appSlug: "loopreel", author: "Yash Thakur", rating: 4, date: "2026-07-25", content: "The time limit actually stops me from scrolling for an hour straight. Refreshing.", verified: true, helpfulCount: 23 },
  { id: "r-lr-2", appSlug: "loopreel", author: "Simran Kaur", rating: 3, date: "2026-07-08", content: "Content is decent but the recommendation variety could improve.", verified: false, helpfulCount: 9 },

  // TapClock
  { id: "r-tc-1", appSlug: "tapclock", author: "Ritesh Chauhan", rating: 5, date: "2026-06-10", content: "Replaced three separate apps on my phone. Fast and no clutter.", verified: true, helpfulCount: 30 },

  // WordForge
  { id: "r-wf-1", appSlug: "wordforge", author: "Neha Bhatt", rating: 5, date: "2026-07-12", content: "My morning routine now. Love that there's no streak pressure at odd hours.", verified: true, helpfulCount: 47 },
  { id: "r-wf-2", appSlug: "wordforge", author: "Aditya Menon", rating: 4, date: "2026-06-20", content: "Fun daily puzzle, occasionally the word list feels a bit obscure.", verified: true, helpfulCount: 12 },

  // SnapConvert
  { id: "r-sc-1", appSlug: "snapconvert", author: "Pooja Saxena", rating: 5, date: "2026-06-30", content: "Converted a batch of HEIC photos to JPG in seconds, entirely offline.", verified: true, helpfulCount: 16 },
  { id: "r-sc-2", appSlug: "snapconvert", author: "Harsh Vardhan", rating: 4, date: "2026-06-05", content: "Solid conversion quality. Audio format support was a nice surprise.", verified: false, helpfulCount: 5 },
];

export function getReviewsForApp(slug: string): Review[] {
  return reviews.filter((r) => r.appSlug === slug);
}
