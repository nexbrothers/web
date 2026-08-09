"use client";

import { useCallback } from "react";
import { useStore, TaskState } from "../store/StoreProvider";
import { runUpdateSimulation } from "../services/downloadService";
import { showToast } from "./useToast";
import type { AppRecord, LibraryEntry } from "../types";

import { taskKey } from "./useDownloadSim";

export function useUpdateSim(app: AppRecord, entry: LibraryEntry | undefined) {
  const { activeTasks, dispatch } = useStore();
  const key = taskKey("update", app.slug);
  const task = activeTasks[key];

  const start = useCallback(async () => {
    if (!entry) return;
    dispatch({ type: "SET_TASK", key, task: { kind: "update", appSlug: app.slug, status: "checking", progress: 0 } });
    dispatch({ type: "SET_LIBRARY_ENTRY", entry: { ...entry, updateStatus: "updating" } });

    const result = await runUpdateSimulation((event) => {
      const t: TaskState = { kind: "update", appSlug: app.slug, status: event.status, progress: event.progress };
      dispatch({ type: "SET_TASK", key, task: t });
    });

    if (result.success) {
      dispatch({
        type: "SET_LIBRARY_ENTRY",
        entry: {
          appSlug: app.slug,
          installedVersion: app.currentVersion,
          installedAt: entry.installedAt,
          updateStatus: "up-to-date",
        },
      });
      showToast(`${app.name} updated to ${app.currentVersion}`, "success");
    } else {
      dispatch({ type: "SET_LIBRARY_ENTRY", entry: { ...entry, updateStatus: "update-available" } });
      showToast(`${app.name} update failed`, "error");
    }

    setTimeout(() => dispatch({ type: "SET_TASK", key, task: null }), 2400);
  }, [app, dispatch, entry, key]);

  return {
    status: task?.status ?? "idle",
    progress: task?.progress ?? 0,
    isActive: Boolean(task) && task.status !== "complete" && task.status !== "failed",
    start,
  };
}
