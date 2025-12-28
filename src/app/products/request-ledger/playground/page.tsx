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
    // Destroy existing ledger
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
      // Auto-process toggle
      autoProcess: autoProcessEnabled,
      autoProcessOptions: {
        concurrency: 1,
        stopOnError: false,
        onSuccess: (entry) => {
          addLog(`✅ Auto-processed: ${entry.id}`);
        },
        onFailure: (entry, error) => {
          addLog(`❌ Auto-process failed: ${entry.id} - ${error.message}`);
        },
      },
      hooks: {
        onPersist: (entry) => {
          addLog(`📋 Entry persisted: ${entry.id}`);
        },
        onReplayStart: (entry) => {
          addLog(`🔄 Replay started: ${entry.id}`);
        },
        onReplaySuccess: (entry) => {
          addLog(`🎉 Replay success: ${entry.id}`);
        },
        onReplayFailure: (entry, error) => {
          addLog(`❌ Replay failed: ${entry.id} - ${error?.message || "Unknown error"}`);
        },
      },
    });

    ledgerRef.current = ledgerInstance;
    refreshState(ledgerInstance);
    addLog(`📦 Ledger initialized (autoProcess: ${autoProcessEnabled})`);

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
      addLog(`📤 Making request (id: ${requestId}) to: ${requestUrl}`);
      const response = await ledgerRef.current.request({
        id: requestId,
        url: requestUrl,
        method: "GET",
      });
      if (response) {
        const data = await response.json();
        addLog(`📥 Response received: ${JSON.stringify(data).slice(0, 100)}...`);
      } else {
        addLog("📋 Request queued for later processing");
      }
    } catch (error) {
      addLog(`❌ Request error: ${error instanceof Error ? error.message : "Unknown error"}`);
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
      addLog(`📤 Making POST request (id: ${requestId})...`);
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
        addLog(`📥 POST Response: ${JSON.stringify(data)}`);
      } else {
        addLog("📋 POST Request queued for later processing");
      }
    } catch (error) {
      addLog(`❌ POST Request error: ${error instanceof Error ? error.message : "Unknown error"}`);
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
      addLog(`📤 Making request to failing endpoint (id: ${requestId})...`);
      const response = await ledgerRef.current.request({
        id: requestId,
        url: "https://httpstat.us/500",
        method: "GET",
      });
      if (response) {
        addLog(`📥 Response status: ${response.status}`);
      } else {
        addLog("📋 Request queued for later processing");
      }
    } catch (error) {
      addLog(`❌ Request error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleProcessPending = async () => {
    if (!ledgerRef.current) return;
    setIsLoading(true);
    try {
      addLog("🔄 Processing pending entries...");
      await ledgerRef.current.process({
        concurrency: 1,
        stopOnError: false,
        onSuccess: (entry) => {
          addLog(`✅ Processed: ${entry.id}`);
        },
        onFailure: (entry, error) => {
          addLog(`❌ Failed: ${entry.id} - ${error.message}`);
        },
      });
      addLog("✅ Processing complete");
    } catch (error) {
      addLog(`❌ Process error: ${error instanceof Error ? error.message : "Unknown error"}`);
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
      addLog("🗑️ All entries cleared");
    } catch (error) {
      addLog(`❌ Clear error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsLoading(false);
      if (ledgerRef.current) await refreshState(ledgerRef.current);
    }
  };

  const handleRetryEntry = async (id: string) => {
    if (!ledgerRef.current) return;
    try {
      addLog(`🔄 Retrying entry: ${id}`);
      await ledgerRef.current.retry(id);
      await refreshState(ledgerRef.current);
    } catch (error) {
      addLog(`❌ Retry error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  const handleRemoveEntry = async (id: string) => {
    if (!ledgerRef.current) return;
    try {
      await ledgerRef.current.remove(id);
      addLog(`🗑️ Entry removed: ${id}`);
      await refreshState(ledgerRef.current);
    } catch (error) {
      addLog(`❌ Remove error: ${error instanceof Error ? error.message : "Unknown error"}`);
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

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "processing":
        return "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20";
      case "completed":
        return "bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20";
      case "failed":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-[var(--text-muted)]/10 text-[var(--text-muted)] border-[var(--text-muted)]/20";
    }
  };

  // Calculate counts from entries
  const pendingCount = entries.filter((e) => e.status === "pending").length;
  const processingCount = entries.filter((e) => e.status === "processing").length;
  const failedCount = entries.filter((e) => e.status === "failed").length;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-6 transition-colors link-underline"
            style={{ color: "var(--accent)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            <span className="gradient-text">Request Ledger</span> Playground
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-lg">
            Test the request-ledger library for durable HTTP requests
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            Ledger State: <span className="font-mono" style={{ color: "var(--accent)" }}>{state}</span>
          </p>
        </div>

        {/* Auto Process Toggle */}
        <div className="glass-card p-5 mb-6">
          <label className="flex items-center gap-4 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={autoProcessEnabled}
                onChange={(e) => {
                  setAutoProcessEnabled(e.target.checked);
                  addLog(`⚙️ Auto-process ${e.target.checked ? "enabled" : "disabled"}`);
                }}
                className="sr-only peer"
              />
              <div 
                className="w-12 h-6 rounded-full transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--accent)] peer-checked:to-[var(--accent-purple)]"
                style={{ background: autoProcessEnabled ? undefined : "var(--border)" }}
              />
              <div 
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all peer-checked:translate-x-6"
                style={{ background: "var(--text-primary)" }}
              />
            </div>
            <span style={{ color: "var(--text-primary)" }} className="font-medium">
              Auto-process when online
            </span>
            <span 
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                autoProcessEnabled 
                  ? "bg-[var(--success)]/10 text-[var(--success)]" 
                  : "bg-[var(--text-muted)]/10 text-[var(--text-muted)]"
              }`}
            >
              {autoProcessEnabled ? "ON" : "OFF"}
            </span>
          </label>
          <p className="text-xs mt-3 ml-16" style={{ color: "var(--text-muted)" }}>
            When enabled, pending requests will automatically process when the browser comes back online
          </p>
        </div>

        {/* State Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-5">
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Pending</div>
            <div className="text-3xl font-bold text-yellow-400">{pendingCount}</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Processing</div>
            <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{processingCount}</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Failed</div>
            <div className="text-3xl font-bold text-red-400">{failedCount}</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>Total Entries</div>
            <div className="text-3xl font-bold" style={{ color: "var(--accent-purple)" }}>{entries.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Request URL Input */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Custom Request
              </h2>
              <input
                type="text"
                value={requestUrl}
                onChange={(e) => setRequestUrl(e.target.value)}
                className="w-full rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 transition-all"
                style={{ 
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)"
                }}
                placeholder="Enter URL..."
              />
              <button
                onClick={handleMakeRequest}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] hover:shadow-lg hover:shadow-[var(--accent)]/25 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                style={{ color: "white" }}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {isLoading ? "Loading..." : "Make GET Request"}
              </button>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleMakePostRequest}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-[var(--success)]/10 hover:bg-[var(--success)]/20 border border-[var(--success)]/20 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                  style={{ color: "var(--success)" }}
                >
                  <Send className="w-4 h-4" />
                  POST Request
                </button>
                <button
                  onClick={handleMakeFailingRequest}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-red-400"
                >
                  <AlertCircle className="w-4 h-4" />
                  Failing Request
                </button>
                <button
                  onClick={handleProcessPending}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-[var(--accent-purple)]/10 hover:bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)]/20 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                  style={{ color: "var(--accent-purple)" }}
                >
                  <RefreshCw className="w-4 h-4" />
                  Process Pending
                </button>
                <button
                  onClick={handleClearAll}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 bg-[var(--text-muted)]/10 hover:bg-[var(--text-muted)]/20 border border-[var(--text-muted)]/20 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>
            </div>

            {/* Entries List */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                Ledger Entries
              </h2>
              {entries.length === 0 ? (
                <p className="text-center py-8" style={{ color: "var(--text-muted)" }}>
                  No entries in the ledger
                </p>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                  {entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="rounded-xl p-4 transition-all duration-300 hover:border-[var(--accent)]/50"
                      style={{ 
                        background: "var(--background)",
                        border: "1px solid var(--border)"
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium ${getStatusStyles(entry.status)}`}
                        >
                          {getStatusIcon(entry.status)}
                          {entry.status}
                        </span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          Attempts: {entry.attemptCount}
                        </span>
                      </div>
                      <div className="text-sm mb-1 truncate" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent)" }}>{entry.request.method}</span>{" "}
                        {entry.request.url}
                      </div>
                      <div className="text-xs mb-2 truncate font-mono" style={{ color: "var(--text-muted)" }}>
                        ID: {entry.id}
                      </div>
                      {entry.error && (
                        <div className="text-xs text-red-400 mb-2">
                          Error: {entry.error.message}
                        </div>
                      )}
                      <div className="flex gap-2">
                        {entry.status === "failed" && (
                          <button
                            onClick={() => handleRetryEntry(entry.id)}
                            className="text-xs bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 px-3 py-1.5 rounded-lg transition-colors"
                            style={{ color: "var(--accent)" }}
                          >
                            Retry
                          </button>
                        )}
                        <button
                          onClick={() => handleRemoveEntry(entry.id)}
                          className="text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg transition-colors"
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
          <div className="glass-card p-6 h-fit">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                Activity Logs
              </h2>
              <button
                onClick={() => setLogs([])}
                className="text-xs hover:text-[var(--accent)] transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Clear Logs
              </button>
            </div>
            <div 
              className="rounded-xl p-4 h-[500px] overflow-y-auto font-mono text-sm"
              style={{ background: "var(--background)" }}
            >
              {logs.length === 0 ? (
                <p style={{ color: "var(--text-muted)" }}>No logs yet...</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="glass-card p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Testing Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2" style={{ color: "var(--text-secondary)" }}>
            <li>Make sure &quot;Auto-process when online&quot; is checked</li>
            <li>Open DevTools → Application → IndexedDB to see stored entries</li>
            <li>Go to DevTools → Network tab → Set to &quot;Offline&quot;</li>
            <li>Click &quot;Make GET Request&quot; or &quot;POST Request&quot; - they will be queued</li>
            <li>Check IndexedDB - you should see entries with status &quot;pending&quot;</li>
            <li>Go back online in Network tab</li>
            <li>Watch the magic! ✨ Requests will auto-process and complete</li>
          </ol>
        </div>
      </div>
    </div>
  );
}