"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  ReactNode,
} from "react";
import type { DownloadRecord, LibraryEntry, Order, Review } from "../types";
import { seedDownloads, seedLibrary, seedOrders } from "../data";
import { setSimulateFailures } from "../services/latency";

const STORAGE_KEY = "brothers-store:v1";

export type TaskKind = "download" | "update" | "checkout";
export type TaskStatus =
  | "idle"
  | "preparing"
  | "checking"
  | "validating"
  | "downloading"
  | "verifying"
  | "processing"
  | "installing"
  | "complete"
  | "success"
  | "failed";

export interface TaskState {
  kind: TaskKind;
  appSlug: string;
  status: TaskStatus;
  progress: number;
}

interface StoreState {
  session: { signedIn: boolean };
  wishlist: string[];
  library: LibraryEntry[];
  downloads: DownloadRecord[];
  orders: Order[];
  userReviews: Record<string, Review[]>;
  activeTasks: Record<string, TaskState>;
  recentSearches: string[];
  settings: { simulateFailures: boolean };
  isHydrated: boolean;
}

const initialState: StoreState = {
  session: { signedIn: false },
  wishlist: [],
  library: seedLibrary,
  downloads: seedDownloads,
  orders: seedOrders,
  userReviews: {},
  activeTasks: {},
  recentSearches: [],
  settings: { simulateFailures: false },
  isHydrated: false,
};

type Action =
  | { type: "HYDRATE"; payload: Partial<StoreState> }
  | { type: "TOGGLE_WISHLIST"; slug: string }
  | { type: "SET_LIBRARY_ENTRY"; entry: LibraryEntry }
  | { type: "ADD_DOWNLOAD"; record: DownloadRecord }
  | { type: "UPDATE_DOWNLOAD"; id: string; patch: Partial<DownloadRecord> }
  | { type: "ADD_ORDER"; order: Order }
  | { type: "ADD_REVIEW"; slug: string; review: Review }
  | { type: "SET_TASK"; key: string; task: TaskState | null }
  | { type: "ADD_RECENT_SEARCH"; query: string }
  | { type: "CLEAR_RECENT_SEARCHES" }
  | { type: "SET_SIMULATE_FAILURES"; value: boolean }
  | { type: "SET_SIGNED_IN"; value: boolean };

function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload, isHydrated: true };

    case "TOGGLE_WISHLIST": {
      const exists = state.wishlist.includes(action.slug);
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter((s) => s !== action.slug)
          : [...state.wishlist, action.slug],
      };
    }

    case "SET_LIBRARY_ENTRY": {
      const others = state.library.filter((e) => e.appSlug !== action.entry.appSlug);
      return { ...state, library: [...others, action.entry] };
    }

    case "ADD_DOWNLOAD":
      return { ...state, downloads: [action.record, ...state.downloads] };

    case "UPDATE_DOWNLOAD":
      return {
        ...state,
        downloads: state.downloads.map((d) =>
          d.id === action.id ? { ...d, ...action.patch } : d
        ),
      };

    case "ADD_ORDER":
      return { ...state, orders: [action.order, ...state.orders] };

    case "ADD_REVIEW": {
      const existing = state.userReviews[action.slug] ?? [];
      return {
        ...state,
        userReviews: { ...state.userReviews, [action.slug]: [action.review, ...existing] },
      };
    }

    case "SET_TASK": {
      const next = { ...state.activeTasks };
      if (action.task) next[action.key] = action.task;
      else delete next[action.key];
      return { ...state, activeTasks: next };
    }

    case "ADD_RECENT_SEARCH": {
      const q = action.query.trim();
      if (!q) return state;
      const deduped = [q, ...state.recentSearches.filter((s) => s.toLowerCase() !== q.toLowerCase())];
      return { ...state, recentSearches: deduped.slice(0, 8) };
    }

    case "CLEAR_RECENT_SEARCHES":
      return { ...state, recentSearches: [] };

    case "SET_SIMULATE_FAILURES":
      return { ...state, settings: { ...state.settings, simulateFailures: action.value } };

    case "SET_SIGNED_IN":
      return { ...state, session: { signedIn: action.value } };

    default:
      return state;
  }
}

interface StoreContextValue extends StoreState {
  dispatch: React.Dispatch<Action>;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoreState>;
        dispatch({ type: "HYDRATE", payload: parsed });
        setSimulateFailures(Boolean(parsed.settings?.simulateFailures));
      } else {
        dispatch({ type: "HYDRATE", payload: {} });
      }
    } catch {
      dispatch({ type: "HYDRATE", payload: {} });
    }
  }, []);

  useEffect(() => {
    if (!state.isHydrated) return;
    const persisted: Omit<StoreState, "isHydrated" | "activeTasks"> = {
      session: state.session,
      wishlist: state.wishlist,
      library: state.library,
      downloads: state.downloads,
      orders: state.orders,
      userReviews: state.userReviews,
      recentSearches: state.recentSearches,
      settings: state.settings,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch {
      // storage unavailable (private mode, quota) — state stays in-memory for this session
    }
  }, [state]);

  useEffect(() => {
    setSimulateFailures(state.settings.simulateFailures);
  }, [state.settings.simulateFailures]);

  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}
