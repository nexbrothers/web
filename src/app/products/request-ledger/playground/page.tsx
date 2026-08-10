"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createLedger, RequestLedger, LedgerEntry, LedgerState } from "request-ledger";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Trash2, Send, AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react";

export default function TestLedgerPage() {
  const [entries, setEntries] = useState<LedgerEntry[]>([]);
  const [state, setState] = useState<LedgerState>("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [requestUrl, setRequestUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
  const [isLoading, setIsLoading] = useState(false);
  const [autoProcessEnabled, setAutoProcessEnabled] = useState(true);

  const ledgerRef = useRef<RequestLedger | null>(null);

  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${message}`, ...prev.slice(0, 49)]);
  }, []);

  const refreshState = useCallback(async (ledgerInstance: RequestLedger) => {
    try {
      const [currentEntries, currentState] = await Promise.all([
        ledgerInstance.list(),
        ledgerInstance.getState(),
      ]);
      setEntries(currentEntries);
      setState(currentState);
    } catch (error) {
      console.error("Error refreshing state:", error);
    }
  }, []);

  // Create/recreate ledger when autoProcessEnabled changes
  useEffect(() => {
    if (ledgerRef.current) {
      ledgerRef.current.destroy();
    }

    const ledgerInstance = createLedger({
      retry: {
        type: "exponential",
        baseMs: 1000,
        maxMs: 30000,
        maxAttempts: 5,
      },
      autoProcess: autoProcessEnabled,
      autoProcessOptions: {
        concurrency: 1,
        stopOnError: false,
        onSuccess: (entry) => {
          addLog(`auto-processed: ${entry.id}`);
        },
        onFailure: (entry, error) => {
          addLog(`auto-process failed: ${entry.id} - ${error.message}`);
        },
      },
      hooks: {
        onPersist: (entry) => {
          addLog(`entry persisted: ${entry.id}`);
        },
        onReplayStart: (entry) => {
          addLog(`replay started: ${entry.id}`);
        },
        onReplaySuccess: (entry) => {
          addLog(`replay success: ${entry.id}`);
        },
        onReplayFailure: (entry, error) => {
          addLog(`replay failed: ${entry.id} - ${error?.message || "unknown error"}`);
        },
      },
    });

    ledgerRef.current = ledgerInstance;
    refreshState(ledgerInstance);
    addLog(`ledger initialized (autoProcess: ${autoProcessEnabled})`);

    return () => {
      ledgerInstance.destroy();
    };
  }, [autoProcessEnabled, addLog, refreshState]);

  // Refresh state periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (ledgerRef.current) {
        refreshState(ledgerRef.current);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [refreshState]);

  const handleMakeRequest = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      const requestId = `get-${Date.now()}`;
      addLog(`making request (id: ${requestId}) to: ${requestUrl}`);
      const response = await ledgerRef.current.request({
        id: requestId,
        url: requestUrl,
        method: "GET",
      });
      if (response) {
        const data = await response.json();
        addLog(`response received: ${JSON.stringify(data).slice(0, 100)}...`);
      } else {
        addLog("request queued for later processing");
      }
    } catch (error) {
      addLog(`request error: ${error instanceof Error ? error.message : "unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleMakePostRequest = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      const requestId = `post-${Date.now()}`;
      addLog(`making POST request (id: ${requestId})...`);
      const response = await ledgerRef.current.request({
        id: requestId,
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          title: "Test Post",
          body: "This is a test post from request-ledger",
          userId: 1,
        },
        idempotencyKey: `post-idem-${requestId}`,
      });
      if (response) {
        const data = await response.json();
        addLog(`POST response: ${JSON.stringify(data)}`);
      } else {
        addLog("POST request queued for later processing");
      }
    } catch (error) {
      addLog(`POST request error: ${error instanceof Error ? error.message : "unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleMakeFailingRequest = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      const requestId = `fail-${Date.now()}`;
      addLog(`making request to failing endpoint (id: ${requestId})...`);
      const response = await ledgerRef.current.request({
        id: requestId,
        url: "https://httpstat.us/500",
        method: "GET",
      });
      if (response) {
        addLog(`response status: ${response.status}`);
      } else {
        addLog("request queued for later processing");
      }
    } catch (error) {
      addLog(`request error: ${error instanceof Error ? error.message : "unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleProcessPending = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      addLog("processing pending entries...");
      await ledgerRef.current.process({
        concurrency: 1,
        stopOnError: false,
        onSuccess: (entry) => {
          addLog(`processed: ${entry.id}`);
        },
        onFailure: (entry, error) => {
          addLog(`failed: ${entry.id} - ${error.message}`);
        },
      });
      addLog("processing complete");
    } catch (error) {
      addLog(`process error: ${error instanceof Error ? error.message : "unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleClearAll = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      await ledgerRef.current.clear();
      addLog("all entries cleared");
    } catch (error) {
      addLog(`clear error: ${error instanceof Error ? error.message : "unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleRetryEntry = async (id: string) => {
    if (!ledgerRef.current) return;
    try {
      addLog(`retrying entry: ${id}`);
      await ledgerRef.current.retry(id);
      await refreshState(ledgerRef.current);
    } catch (error) {
      addLog(`retry error: ${error instanceof Error ? error.message : "unknown error"}`);
    }
  };

  const handleRemoveEntry = async (id: string) => {
    if (!ledgerRef.current) return;
    try {
      await ledgerRef.current.remove(id);
      addLog(`entry removed: ${id}`);
      await refreshState(ledgerRef.current);
    } catch (error) {
      addLog(`remove error: ${error instanceof Error ? error.message : "unknown error"}`);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "processing":
        return <Loader2 className="w-4 h-4 animate-spin" />;
      case "completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "failed":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const statusColors: Record<string, string> = {
    pending: "#b45309",
    processing: "var(--accent)",
    completed: "var(--success)",
    failed: "var(--danger)",
  };

  const getStatusColor = (status: string) => statusColors[status] ?? "var(--text-muted)";

  // Calculate counts from entries
  const pendingCount = entries.filter((e) => e.status === "pending").length;
  const processingCount = entries.filter((e) => e.status === "processing").length;
  const failedCount = entries.filter((e) => e.status === "failed").length;

  return (
    <div className="min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link href="/products/request-ledger" className="inline-flex items-center gap-2 mb-6 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
            <ArrowLeft className="w-4 h-4" />
            Back to product
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
            request-ledger playground
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-lg">
            Test the request-ledger library for durable HTTP requests.
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            Ledger state:{" "}
            <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono), monospace" }}>{state}</span>
          </p>
        </div>

        {/* Auto Process Toggle */}
        <div className="rounded-[24px] border p-5 mb-6" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
          <label className="flex items-center gap-4 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={autoProcessEnabled}
                onChange={(e) => {
                  setAutoProcessEnabled(e.target.checked);
                  addLog(`auto-process ${e.target.checked ? "enabled" : "disabled"}`);
                }}
                className="sr-only peer"
              />
              <div
                className="w-12 h-6 rounded-full transition-all"
                style={{ backgroundColor: autoProcessEnabled ? "var(--accent)" : "var(--border)" }}
              />
              <div
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all peer-checked:translate-x-6"
                style={{ background: "#fff" }}
              />
            </div>
            <span style={{ color: "var(--text-primary)" }} className="font-medium">
              Auto-process when online
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: autoProcessEnabled ? "rgba(30,157,91,0.12)" : "var(--background)",
                color: autoProcessEnabled ? "var(--success)" : "var(--text-muted)",
              }}
            >
              {autoProcessEnabled ? "ON" : "OFF"}
            </span>
          </label>
          <p className="text-xs mt-3 ml-16" style={{ color: "var(--text-muted)" }}>
            When enabled, pending requests automatically process once the browser is back online.
          </p>
        </div>

        {/* State Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-[24px] border p-5" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Pending</div>
            <div className="text-3xl font-semibold" style={{ color: "#b45309", fontFamily: "var(--font-mono), monospace" }}>{pendingCount}</div>
          </div>
          <div className="rounded-[24px] border p-5" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Processing</div>
            <div className="text-3xl font-semibold" style={{ color: "var(--accent)", fontFamily: "var(--font-mono), monospace" }}>{processingCount}</div>
          </div>
          <div className="rounded-[24px] border p-5" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Failed</div>
            <div className="text-3xl font-semibold" style={{ color: "var(--danger)", fontFamily: "var(--font-mono), monospace" }}>{failedCount}</div>
          </div>
          <div className="rounded-[24px] border p-5" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Total entries</div>
            <div className="text-3xl font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono), monospace" }}>{entries.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Request URL Input */}
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Custom request</h2>
              <input
                type="text"
                value={requestUrl}
                onChange={(e) => setRequestUrl(e.target.value)}
                className="w-full rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 transition-all"
                style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                placeholder="Enter URL..."
              />
              <button
                onClick={handleMakeRequest}
                disabled={isLoading}
                className="w-full font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {isLoading ? "Loading..." : "Make GET request"}
              </button>
            </div>

            {/* Quick Actions */}
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Quick actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleMakePostRequest}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "rgba(30,157,91,0.1)", color: "var(--success)" }}
                >
                  <Send className="w-4 h-4" />
                  POST request
                </button>
                <button
                  onClick={handleMakeFailingRequest}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "rgba(217,45,32,0.1)", color: "var(--danger)" }}
                >
                  <AlertCircle className="w-4 h-4" />
                  Failing request
                </button>
                <button
                  onClick={handleProcessPending}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}
                >
                  <RefreshCw className="w-4 h-4" />
                  Process pending
                </button>
                <button
                  onClick={handleClearAll}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--background)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear all
                </button>
              </div>
            </div>

            {/* Entries List */}
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Ledger entries</h2>
              {entries.length === 0 ? (
                <p className="text-center py-8" style={{ color: "var(--text-muted)" }}>No entries in the ledger</p>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                  {entries.map((entry) => (
                    <div key={entry.id} className="rounded-xl p-4" style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ backgroundColor: "var(--background-secondary)", color: getStatusColor(entry.status) }}
                        >
                          {getStatusIcon(entry.status)}
                          {entry.status}
                        </span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Attempts: {entry.attemptCount}</span>
                      </div>
                      <div className="text-sm mb-1 truncate" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent)" }}>{entry.request.method}</span> {entry.request.url}
                      </div>
                      <div className="text-xs mb-2 truncate" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono), monospace" }}>
                        ID: {entry.id}
                      </div>
                      {entry.error && (
                        <div className="text-xs mb-2" style={{ color: "var(--danger)" }}>Error: {entry.error.message}</div>
                      )}
                      <div className="flex gap-2">
                        {entry.status === "failed" && (
                          <button
                            onClick={() => handleRetryEntry(entry.id)}
                            className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                            style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}
                          >
                            Retry
                          </button>
                        )}
                        <button
                          onClick={() => handleRemoveEntry(entry.id)}
                          className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                          style={{ backgroundColor: "rgba(217,45,32,0.1)", color: "var(--danger)" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Logs Panel */}
          <div className="rounded-[24px] p-6 h-fit" style={{ backgroundColor: "var(--ink)" }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold" style={{ color: "var(--on-ink)" }}>Activity logs</h2>
              <button onClick={() => setLogs([])} className="text-xs transition-colors" style={{ color: "var(--on-ink-muted)" }}>
                Clear logs
              </button>
            </div>
            <div className="rounded-xl p-4 h-[500px] overflow-y-auto text-sm" style={{ backgroundColor: "rgba(246,245,241,0.03)", fontFamily: "var(--font-mono), monospace" }}>
              {logs.length === 0 ? (
                <p style={{ color: "var(--on-ink-muted)" }}>No logs yet...</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1.5" style={{ color: "var(--on-ink-muted)" }}>{log}</div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-[24px] border p-6 mt-8" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Testing instructions</h2>
          <ol className="list-decimal list-inside space-y-2" style={{ color: "var(--text-secondary)" }}>
            <li>Make sure &quot;Auto-process when online&quot; is checked</li>
            <li>Open DevTools, Application, IndexedDB to see stored entries</li>
            <li>Go to DevTools, Network tab, and set it to &quot;Offline&quot;</li>
            <li>Click &quot;Make GET request&quot; or &quot;POST request&quot;, they will be queued</li>
            <li>Check IndexedDB, you should see entries with status &quot;pending&quot;</li>
            <li>Go back online in the Network tab</li>
            <li>Watch it work: requests auto-process and complete</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
