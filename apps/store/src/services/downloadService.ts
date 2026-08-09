import type { DownloadStatus } from "../types";
import { delay, shouldFail } from "./latency";

export interface DownloadProgressEvent {
  status: DownloadStatus;
  progress: number; // 0-100
}

export interface DownloadRunResult {
  success: boolean;
}

/**
 * Drives a simulated download through preparing → downloading → verifying → complete/failed,
 * invoking onProgress at each tick. Cancelled by AbortSignal (e.g. on unmount).
 */
export async function runDownloadSimulation(
  onProgress: (event: DownloadProgressEvent) => void,
  signal?: AbortSignal
): Promise<DownloadRunResult> {
  const check = () => {
    if (signal?.aborted) throw new DOMException("aborted", "AbortError");
  };

  onProgress({ status: "preparing", progress: 0 });
  await delay(500);
  check();

  onProgress({ status: "downloading", progress: 0 });
  const steps = 20;
  for (let i = 1; i <= steps; i++) {
    await delay(90 + Math.random() * 60);
    check();
    onProgress({ status: "downloading", progress: Math.round((i / steps) * 100) });
  }

  onProgress({ status: "verifying", progress: 100 });
  await delay(450);
  check();

  if (shouldFail(0.35)) {
    onProgress({ status: "failed", progress: 100 });
    return { success: false };
  }

  onProgress({ status: "complete", progress: 100 });
  return { success: true };
}

export type UpdateStatus = "checking" | "downloading" | "installing" | "complete" | "failed";

export interface UpdateProgressEvent {
  status: UpdateStatus;
  progress: number;
}

export async function runUpdateSimulation(
  onProgress: (event: UpdateProgressEvent) => void,
  signal?: AbortSignal
): Promise<DownloadRunResult> {
  const check = () => {
    if (signal?.aborted) throw new DOMException("aborted", "AbortError");
  };

  onProgress({ status: "checking", progress: 0 });
  await delay(600);
  check();

  onProgress({ status: "downloading", progress: 0 });
  const steps = 14;
  for (let i = 1; i <= steps; i++) {
    await delay(80 + Math.random() * 50);
    check();
    onProgress({ status: "downloading", progress: Math.round((i / steps) * 100) });
  }

  onProgress({ status: "installing", progress: 100 });
  await delay(700);
  check();

  if (shouldFail(0.25)) {
    onProgress({ status: "failed", progress: 100 });
    return { success: false };
  }

  onProgress({ status: "complete", progress: 100 });
  return { success: true };
}
