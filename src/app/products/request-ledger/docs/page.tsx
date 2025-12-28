"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import {
  ArrowLeft,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Package,
  Github,
  Play,
  ExternalLink,
} from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded hover:bg-white/10 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-[var(--success)]" />
      ) : (
        <Copy className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
      )}
    </button>
  );
}

function CodeBlock({ code, language = "typescript" }: { code: string; language?: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border my-4"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          {language}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="font-mono" style={{ color: "var(--text-primary)" }}>
          {code}
        </code>
      </pre>
    </div>
  );
}

function Section({
  id,
  title,
  children,
  defaultOpen = true,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      id={id}
      className="border-b py-6"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h2>
        {isOpen ? (
          <ChevronDown className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
        ) : (
          <ChevronRight className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 prose-custom">
          {children}
        </div>
      )}
    </div>
  );
}

function Param({ name, type, required, description }: { name: string; type: string; required?: boolean; description: string }) {
  return (
    <div className="py-3 border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <div className="flex items-center gap-2 mb-1">
        <code className="text-sm font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: "var(--background-secondary)", color: "var(--accent)" }}>
          {name}
        </code>
        <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "var(--background-secondary)", color: "var(--text-muted)" }}>
          {type}
        </span>
        {required && (
          <span className="text-xs text-red-400">required</span>
        )}
      </div>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{description}</p>
    </div>
  );
}

const navItems = [
  { id: "installation", label: "Installation" },
  { id: "quick-start", label: "Quick Start" },
  { id: "createledger", label: "createLedger()" },
  { id: "ledger-request", label: "ledger.request()" },
  { id: "ledger-process", label: "ledger.process()" },
  { id: "control-methods", label: "Control Methods" },
  { id: "entry-schema", label: "Entry Schema" },
  { id: "retry-strategies", label: "Retry Strategies" },
  { id: "error-types", label: "Error Types" },
  { id: "custom-storage", label: "Custom Storage" },
  { id: "full-example", label: "Full Example" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12" style={{ background: "var(--background)" }}>
      <Container>
        {/* Header */}
        <FadeIn>
          <Link
            href="/products/request-ledger"
            className="inline-flex items-center gap-2 mb-6 transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Product
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                <span className="gradient-text">request-ledger</span> Documentation
              </h1>
              <p style={{ color: "var(--text-secondary)" }}>
                Complete API reference and usage examples
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="https://www.npmjs.com/package/request-ledger" target="_blank">
                <Button variant="ghost" size="sm">
                  <Package className="w-4 h-4 mr-2" />
                  npm
                  <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                </Button>
              </Link>
              <Link href="https://github.com/nexbrothers/request-ledger" target="_blank">
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                </Button>
              </Link>
              <Link href="/products/request-ledger/playground">
                <Button variant="secondary" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Playground
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <FadeIn className="hidden lg:block">
            <nav
              className="sticky top-28 p-4 rounded-xl border"
              style={{
                backgroundColor: "var(--background-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                On this page
              </div>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block py-1.5 px-2 rounded text-sm transition-colors hover:bg-white/5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>

          {/* Main Content */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-xl border p-6 lg:p-8"
              style={{
                backgroundColor: "var(--background-secondary)",
                borderColor: "var(--border)",
              }}
            >
              {/* Installation */}
              <Section id="installation" title="Installation">
                <CodeBlock language="bash" code={`npm install request-ledger
# or
yarn add request-ledger
# or
pnpm add request-ledger`} />
              </Section>

              {/* Quick Start */}
              <Section id="quick-start" title="Quick Start">
                <CodeBlock code={`import { createLedger } from "request-ledger";

const ledger = createLedger({ autoProcess: true });

// Make a request (works offline!)
const response = await ledger.request({
  id: "unique-id",
  url: "/api/endpoint",
  method: "POST",
  body: { data: "value" },
});

if (response) {
  // Request succeeded
  const data = await response.json();
} else {
  // Request was queued for later
}`} />
              </Section>

              {/* createLedger */}
              <Section id="createledger" title="createLedger(config?)">
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  Creates a new ledger instance with optional configuration.
                </p>
                
                <CodeBlock code={`import { createLedger } from "request-ledger";

const ledger = createLedger({
  // Storage configuration
  storageConfig: {
    dbName: "request-ledger",
    storeName: "entries",
    maxEntries: 1000,
  },
  
  // Retry strategy
  retry: {
    type: "exponential",
    baseMs: 1000,
    maxMs: 30000,
    maxAttempts: 3,
  },
  
  // Online detection
  onlineCheck: {
    pingUrl: "/api/health",
    pingTimeout: 5000,
    customCheck: async () => true,
  },
  
  // Lifecycle hooks
  hooks: {
    onPersist: (entry) => {},
    onReplayStart: (entry) => {},
    onReplaySuccess: (entry, response) => {},
    onReplayFailure: (entry, error) => {},
  },
  
  // Idempotency
  idempotencyHeader: "X-Idempotency-Key",
  
  // Auto-process
  autoProcess: true,
  autoProcessOptions: {
    concurrency: 1,
    stopOnError: false,
  },
});`} />

                <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                  Configuration Options
                </h3>
                <div className="rounded-lg border" style={{ borderColor: "var(--border)" }}>
                  <Param name="storageConfig" type="object" description="IndexedDB configuration: dbName, storeName, maxEntries" />
                  <Param name="retry" type="object" description="Retry strategy configuration (fixed, exponential, or manual)" />
                  <Param name="onlineCheck" type="object" description="Online detection configuration with pingUrl, timeout, or custom check" />
                  <Param name="hooks" type="object" description="Lifecycle hooks: onPersist, onReplayStart, onReplaySuccess, onReplayFailure" />
                  <Param name="idempotencyHeader" type="string" description="Header name for idempotency key (default: X-Idempotency-Key)" />
                  <Param name="autoProcess" type="boolean" description="Automatically process when coming back online (default: false)" />
                  <Param name="autoProcessOptions" type="object" description="Options for auto-processing: concurrency, stopOnError" />
                </div>
              </Section>

              {/* ledger.request */}
              <Section id="ledger-request" title="ledger.request(options)">
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  Make a request through the ledger.
                </p>
                
                <CodeBlock code={`const response = await ledger.request({
  id: string,              // Required: unique identifier
  url: string,             // Required: target URL
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  headers?: Record<string, string>,
  body?: unknown,          // JSON serializable
  idempotencyKey?: string, // For safe replay
  metadata?: Record<string, unknown>,
});`} />

                <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                  Parameters
                </h3>
                <div className="rounded-lg border" style={{ borderColor: "var(--border)" }}>
                  <Param name="id" type="string" required description="Unique identifier for this request" />
                  <Param name="url" type="string" required description="Target URL for the request" />
                  <Param name="method" type="string" required description="HTTP method: GET, POST, PUT, PATCH, DELETE" />
                  <Param name="headers" type="object" description="HTTP headers to include" />
                  <Param name="body" type="unknown" description="Request body (must be JSON serializable)" />
                  <Param name="idempotencyKey" type="string" description="Key for idempotent retries" />
                  <Param name="metadata" type="object" description="Custom metadata to store with the entry" />
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                  Returns
                </h3>
                <ul className="list-disc list-inside space-y-1" style={{ color: "var(--text-secondary)" }}>
                  <li><code className="text-sm">Response</code> if request succeeded immediately</li>
                  <li><code className="text-sm">void</code> if request was queued for later</li>
                  <li>Throws <code className="text-sm">PersistenceError</code> if queuing fails</li>
                </ul>
              </Section>

              {/* ledger.process */}
              <Section id="ledger-process" title="ledger.process(options?)">
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  Process queued entries manually.
                </p>
                
                <CodeBlock code={`await ledger.process({
  concurrency: 1,        // Max concurrent requests
  stopOnError: true,     // Stop on first failure
  onSuccess: (entry) => {
    console.log("Processed:", entry.id);
  },
  onFailure: (entry, error) => {
    console.error("Failed:", entry.id, error);
  },
});`} />

                <div className="rounded-lg border mt-4" style={{ borderColor: "var(--border)" }}>
                  <Param name="concurrency" type="number" description="Maximum concurrent requests (default: 1)" />
                  <Param name="stopOnError" type="boolean" description="Stop processing on first failure (default: true)" />
                  <Param name="onSuccess" type="function" description="Callback when an entry is successfully processed" />
                  <Param name="onFailure" type="function" description="Callback when an entry fails to process" />
                </div>
              </Section>

              {/* Control Methods */}
              <Section id="control-methods" title="Control Methods">
                <CodeBlock code={`// Pause/Resume processing
ledger.pause();
ledger.resume();

// Get current state
const state = await ledger.getState();
// Returns: 'idle' | 'pending' | 'processing' | 'paused' | 'error'

// List all entries
const entries = await ledger.list();

// Get single entry
const entry = await ledger.get(id);

// Retry a failed entry (resets to 'pending')
await ledger.retry(id);

// Remove an entry
await ledger.remove(id);

// Clear all entries
await ledger.clear();

// Cleanup and close
ledger.destroy();`} />
              </Section>

              {/* Entry Schema */}
              <Section id="entry-schema" title="Entry Schema">
                <CodeBlock code={`interface LedgerEntry {
  id: string;
  request: {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    headers: Record<string, string>;
    body: unknown;
  };
  status: "pending" | "processing" | "completed" | "failed";
  attemptCount: number;
  createdAt: number;       // Timestamp (ms)
  lastAttemptAt?: number;
  error?: {
    message: string;
    code?: string;
  };
  idempotencyKey?: string;
  metadata?: Record<string, unknown>;
}`} />

                <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                  Entry Statuses
                </h3>
                <div className="space-y-2" style={{ color: "var(--text-secondary)" }}>
                  <p><code className="text-yellow-400">pending</code> — Queued, waiting to be processed</p>
                  <p><code style={{ color: "var(--accent)" }}>processing</code> — Currently being executed</p>
                  <p><code className="text-[var(--success)]">completed</code> — Successfully completed (transient)</p>
                  <p><code className="text-red-400">failed</code> — Failed after all retry attempts</p>
                </div>
              </Section>

              {/* Retry Strategies */}
              <Section id="retry-strategies" title="Retry Strategies">
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  Fixed Delay
                </h3>
                <CodeBlock code={`{ type: "fixed", delayMs: 1000, maxAttempts: 3 }`} />
                <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                  Retries with the same delay between each attempt.
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  Exponential Backoff (Default)
                </h3>
                <CodeBlock code={`{ type: "exponential", baseMs: 1000, maxMs: 30000, maxAttempts: 3 }`} />
                <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                  Delay doubles with each attempt: 1s → 2s → 4s → 8s (capped at maxMs)
                </p>

                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  Manual
                </h3>
                <CodeBlock code={`{ type: "manual" }`} />
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  No automatic retries. User must call <code>ledger.retry(id)</code> manually.
                </p>
              </Section>

              {/* Error Types */}
              <Section id="error-types" title="Error Types">
                <CodeBlock code={`import { 
  LedgerError,           // Base error class
  PersistenceError,      // Storage operation failed
  NetworkError,          // Network request failed
  EntryNotFoundError,    // Entry with ID not found
  DuplicateEntryError,   // Entry with ID already exists
} from "request-ledger";`} />

                <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                  Error Handling Behavior
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p>✅ <strong>Retries on:</strong> Network errors (offline), 5xx server errors</p>
                  <p>❌ <strong>Never retries:</strong> 4xx client errors (permanent failures)</p>
                </div>
              </Section>

              {/* Custom Storage */}
              <Section id="custom-storage" title="Custom Storage Adapter">
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  Implement the <code>LedgerStorage</code> interface for custom storage backends:
                </p>
                
                <CodeBlock code={`interface LedgerStorage {
  put(entry: LedgerEntry): Promise<void>;
  getAll(): Promise<LedgerEntry[]>;
  get(id: string): Promise<LedgerEntry | undefined>;
  update(id: string, patch: LedgerEntryPatch): Promise<void>;
  remove(id: string): Promise<void>;
  clear(): Promise<void>;
  count(): Promise<number>;
}

// Usage
const ledger = createLedger({
  storage: new MyCustomStorage(),
});`} />
              </Section>

              {/* Full Example */}
              <Section id="full-example" title="Full Example">
                <CodeBlock code={`import { createLedger } from "request-ledger";

// Create ledger with full configuration
const ledger = createLedger({
  retry: {
    type: "exponential",
    baseMs: 1000,
    maxMs: 30000,
    maxAttempts: 5,
  },
  autoProcess: true,
  hooks: {
    onPersist: (entry) => {
      console.log("📋 Queued:", entry.id);
      showNotification("Request saved for later");
    },
    onReplaySuccess: (entry) => {
      console.log("✅ Completed:", entry.id);
      showNotification("Request completed!");
    },
    onReplayFailure: (entry, error) => {
      console.error("❌ Failed:", entry.id, error.message);
      showNotification("Request failed: " + error.message);
    },
  },
});

// Make a request (works offline!)
async function createOrder(items: string[]) {
  const orderId = \`order-\${Date.now()}\`;
  
  const response = await ledger.request({
    id: orderId,
    url: "/api/orders",
    method: "POST",
    body: { items, total: calculateTotal(items) },
    idempotencyKey: \`\${orderId}-v1\`,
    metadata: { userId: getCurrentUserId() },
  });

  if (response) {
    // Request succeeded immediately
    return await response.json();
  } else {
    // Request was queued (we're offline)
    return { queued: true, id: orderId };
  }
}

// Check pending entries on app startup
async function checkPendingOrders() {
  const state = await ledger.getState();
  
  if (state === "pending") {
    const entries = await ledger.list();
    const count = entries.filter(e => e.status === "pending").length;
    showBanner(\`You have \${count} pending orders.\`);
  }
}

// Cleanup when app closes
window.addEventListener("beforeunload", () => {
  ledger.destroy();
});`} />
              </Section>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
