"use client";

import { useCallback } from "react";
import { useStore, TaskState } from "../store/StoreProvider";
import { runDownloadSimulation } from "../services/downloadService";
import { showToast } from "./useToast";
import type { AppRecord } from "../types";

export function taskKey(kind: string, slug: string) {
  return `${kind}:${slug}`;
}

export function useDownloadSim(app: AppRecord) {
  const { activeTasks, dispatch } = useStore();
  const key = taskKey("download", app.slug);
  const task = activeTasks[key];

  const start = useCallback(async () => {
    const record = {
      id: `dl-${Date.now()}`,
      appSlug: app.slug,
      version: app.currentVersion,
      sizeMb: app.sizeMb,
      status: "preparing" as const,
      startedAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD_DOWNLOAD", record });
    dispatch({ type: "SET_TASK", key, task: { kind: "download", appSlug: app.slug, status: "preparing", progress: 0 } });

    const result = await runDownloadSimulation((event) => {
      const task: TaskState = { kind: "download", appSlug: app.slug, status: event.status, progress: event.progress };
      dispatch({ type: "SET_TASK", key, task });
      dispatch({ type: "UPDATE_DOWNLOAD", id: record.id, patch: { status: event.status } });
    });

    if (result.success) {
      dispatch({
        type: "UPDATE_DOWNLOAD",
        id: record.id,
        patch: { status: "complete", completedAt: new Date().toISOString() },
      });
      dispatch({
        type: "SET_LIBRARY_ENTRY",
        entry: {
          appSlug: app.slug,
          installedVersion: app.currentVersion,
          installedAt: new Date().toISOString(),
          updateStatus: "up-to-date",
        },
      });
      showToast(`${app.name} downloaded`, "success");
    } else {
      dispatch({ type: "UPDATE_DOWNLOAD", id: record.id, patch: { status: "failed" } });
      showToast(`${app.name} download failed`, "error");
    }

    setTimeout(() => dispatch({ type: "SET_TASK", key, task: null }), 2400);
  }, [app, dispatch, key]);

  return {
    status: task?.status ?? "idle",
    progress: task?.progress ?? 0,
    isActive: Boolean(task) && task.status !== "complete" && task.status !== "failed",
    start,
    retry: start,
  };
}
