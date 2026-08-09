import type { ReleaseDraft } from "../types";

export const releaseDrafts: ReleaseDraft[] = [
  {
    id: "rel-1",
    appSlug: "scanvo",
    version: "2.2.0",
    versionCode: 22,
    notes: "Faster OCR, redesigned export sheet, minor bug fixes.",
    status: "draft",
    createdAt: "2026-08-05",
  },
  {
    id: "rel-2",
    appSlug: "nimbus-notes",
    version: "4.3.0",
    versionCode: 43,
    notes: "New tag-based organization, sync-free backup export.",
    status: "draft",
    createdAt: "2026-08-07",
  },
  {
    id: "rel-3",
    appSlug: "quietvault",
    version: "3.1.2",
    versionCode: 31,
    notes: "Added decoy vault mode, security audit fixes.",
    status: "published",
    createdAt: "2026-07-22",
  },
];
