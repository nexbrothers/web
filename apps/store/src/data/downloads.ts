import type { DownloadRecord, LibraryEntry, Order } from "../types";

export const seedDownloads: DownloadRecord[] = [
  {
    id: "dl-seed-1",
    appSlug: "scanvo",
    version: "2.0.5",
    sizeMb: 40,
    status: "complete",
    startedAt: "2026-05-10T09:12:00.000Z",
    completedAt: "2026-05-10T09:12:41.000Z",
  },
  {
    id: "dl-seed-2",
    appSlug: "tapclock",
    version: "5.0.2",
    sizeMb: 6,
    status: "complete",
    startedAt: "2026-06-18T14:03:00.000Z",
    completedAt: "2026-06-18T14:03:09.000Z",
  },
  {
    id: "dl-seed-3",
    appSlug: "quietvault",
    version: "3.1.2",
    sizeMb: 33,
    status: "complete",
    startedAt: "2026-07-23T11:20:00.000Z",
    completedAt: "2026-07-23T11:20:52.000Z",
  },
];

export const seedLibrary: LibraryEntry[] = [
  { appSlug: "scanvo", installedVersion: "2.0.5", installedAt: "2026-05-10T09:12:41.000Z", updateStatus: "update-available" },
  { appSlug: "tapclock", installedVersion: "5.0.2", installedAt: "2026-06-18T14:03:09.000Z", updateStatus: "up-to-date" },
  { appSlug: "quietvault", installedVersion: "3.1.2", installedAt: "2026-07-23T11:20:52.000Z", updateStatus: "up-to-date" },
];

export const seedOrders: Order[] = [
  {
    id: "ord-seed-1",
    appSlug: "quietvault",
    amount: 129,
    currency: "INR",
    method: "upi",
    status: "success",
    createdAt: "2026-07-23T11:19:30.000Z",
  },
];
