"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Button, Card } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Package,
  Wifi,
  WifiOff,
  RefreshCw,
  Database,
  Shield,
  Clock,
  Zap,
  Code,
  FileCode,
  Copy,
  Check,
  ExternalLink,
  Github,
  AlertTriangle,
  ShoppingCart,
  Smartphone,
  FileText,
  CreditCard,
  MapPin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Play,
  Terminal,
} from "lucide-react";

const features = [
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Offline-First Persistence",
    description:
      "Requests made while offline are saved to IndexedDB. Data survives reloads, crashes, and restarts.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Auto-Replay on Reconnection",
    description:
      "Automatically processes queued requests when coming back online via browser's 'online' event.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Ordered Processing",
    description:
      "Requests replayed in exact order they were created, ensuring data consistency for dependent operations.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Crash-Safe Recovery",
    description:
      "Entries in 'processing' state are automatically recovered on reload with 5-minute timeout for stale locks.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Configurable Retry",
    description:
      "Fixed delay, exponential backoff, or manual retry strategies. Smart error handling for 4xx vs 5xx.",
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    title: "TypeScript-First",
    description:
      "Full type definitions included. Strict TypeScript configuration with IntelliSense support.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Custom Storage Adapters",
    description:
      "Use IndexedDB by default or implement your own storage backend with the LedgerStorage interface.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Zero Dependencies",
    description:
      "No external packages required. ~8KB gzipped bundle size. Tree-shakeable ES modules.",
  },
];

const useCases = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Checkouts",
    description:
      "Never lose an order even with spotty network. Idempotency keys prevent duplicate charges.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Field Data Collection",
    description:
      "Warehouse inventory, delivery confirmations, agricultural data. Works in basements and rural areas.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Offline Form Submissions",
    description:
      "Survey responses, user registrations, feedback forms, CRM updates that sync when online.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Critical API Calls",
    description:
      "Financial transactions, booking confirmations, status updates that must not be lost.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Progressive Web Apps",
    description:
      "Works without Service Workers. Simpler than background sync. More reliable than retry libraries.",
  },
];

const steps = [
  {
    number: "01",
    title: "Request Goes Through Ledger",
    description: "Your app makes an API request through the ledger instead of directly via fetch.",
  },
  {
    number: "02",
    title: "Online? Execute Immediately",
    description: "If online, the request executes immediately and returns the response.",
  },
  {
    number: "03",
    title: "Offline? Persist to IndexedDB",
    description: "If offline, the request is durably persisted to IndexedDB with all metadata.",
  },
  {
    number: "04",
    title: "Connectivity Returns",
    description: "Browser fires 'online' event when network is restored.",
  },
  {
    number: "05",
    title: "Auto-Replay in Order",
    description: "Queued requests are replayed in order. Failed requests are never silently dropped.",
  },
];

const specs = [
  { label: "Bundle Size", value: "~8KB gzipped" },
  { label: "Dependencies", value: "0" },
  { label: "Module Formats", value: "ESM + CommonJS" },
  { label: "TypeScript", value: "Full support" },
  { label: "Storage", value: "IndexedDB (customizable)" },
  { label: "Max Entries", value: "1000 (configurable)" },
  { label: "Chrome", value: "80+" },
  { label: "Firefox", value: "75+" },
  { label: "Safari", value: "14+" },
  { label: "Edge", value: "80+" },
  { label: "License", value: "MIT" },
];

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
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
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

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border"
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
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono" style={{ color: "var(--text-primary)" }}>
          {code}
        </code>
      </pre>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderColor: "var(--border)" }} className="border-b last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-base font-medium pr-4" style={{ color: "var(--text-primary)" }}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp style={{ color: "var(--accent)" }} className="w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronDown style={{ color: "var(--text-secondary)" }} className="w-5 h-5 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function RequestLedgerPage() {
  const installCommand = "npm install request-ledger";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                <Database className="w-7 h-7 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#10B981]/20 text-[#10B981]">
                v0.1.1
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              request-ledger
            </h1>
            <p className="text-2xl sm:text-3xl font-medium mb-6 gradient-text">
              Never lose a request again.
            </p>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A durable, client-side HTTP request ledger for web applications on unreliable
              networks. Think of it as a transactional outbox for your client-side HTTP requests.
            </p>

            {/* Install Command */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border mb-8"
              style={{
                backgroundColor: "var(--background-secondary)",
                borderColor: "var(--border)",
              }}
            >
              <Terminal className="w-5 h-5" style={{ color: "var(--accent)" }} />
              <code className="font-mono text-sm" style={{ color: "var(--text-primary)" }}>
                {installCommand}
              </code>
              <CopyButton text={installCommand} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://www.npmjs.com/package/request-ledger" target="_blank">
                <Button size="lg" className="group">
                  <Package className="mr-2 w-5 h-5" />
                  View on npm
                  <ExternalLink className="ml-2 w-4 h-4 opacity-50" />
                </Button>
              </Link>
              <Link href="https://github.com/nexbrothers/request-ledger" target="_blank">
                <Button variant="secondary" size="lg">
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </Button>
              </Link>
              <Link href="/products/request-ledger/playground">
                <Button variant="ghost" size="lg">
                  <Play className="mr-2 w-5 h-5" />
                  Live Demo
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  What happens when your user submits an order and{" "}
                  <span className="gradient-text">loses connection?</span>
                </h2>
                <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>
                  Without request-ledger, the request is lost forever. The user sees an error, has
                  no idea if it went through, and might retry — causing duplicate orders.
                </p>
                <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>With request-ledger:</strong>{" "}
                  The request is durably persisted and automatically replayed when connectivity
                  returns. No lost data. No duplicates.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 flex items-center gap-4" gradient>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <WifiOff className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      Without Ledger
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Request lost → Error → User frustration
                    </div>
                  </div>
                </Card>
                <Card className="p-4 flex items-center gap-4" gradient>
                  <div className="w-12 h-12 rounded-xl bg-[var(--success)]/10 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-[var(--success)]" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      With Ledger
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                      Request queued → Auto-replayed → Success
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />
        <div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              A simple mental model for durable HTTP requests
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{
                        background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                        color: "white",
                      }}
                    >
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className="w-0.5 h-8 mx-auto mt-2"
                        style={{ backgroundColor: "var(--border)" }}
                      />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-12">
            <div
              className="max-w-2xl mx-auto p-6 rounded-xl border"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text-secondary)" }}>Note:</strong> This is NOT a
                retry library (doesn&apos;t retry on every failure). This is NOT a sync engine
                (doesn&apos;t resolve conflicts). It&apos;s a durable outbox for HTTP requests.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--background-secondary), var(--background))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Powerful Features
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Everything you need for reliable client-side HTTP requests
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                    }}
                  >
                    <div style={{ color: "white" }}>{feature.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {feature.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Quick Start Code Example */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Start
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Get started in minutes with just a few lines of code
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <CodeBlock
                language="typescript"
                code={`import { createLedger } from "request-ledger";

// Create a ledger instance
const ledger = createLedger({
  autoProcess: true,
  retry: {
    type: "exponential",
    baseMs: 1000,
    maxAttempts: 5,
  },
});

// Make a request (works offline!)
const response = await ledger.request({
  id: "order-123",
  url: "/api/orders",
  method: "POST",
  body: { items: ["item1", "item2"] },
  idempotencyKey: "order-123-v1",
});

if (response) {
  // Request succeeded immediately
  const order = await response.json();
} else {
  // Request was queued (we're offline)
  console.log("Order queued for later");
}`}
              />
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8 text-center">
              <Link href="/products/request-ledger/docs">
                <Button variant="secondary" size="lg">
                  <BookOpen className="mr-2 w-5 h-5" />
                  View Full Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Technical Specs */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Technical Specifications
            </h2>
          </FadeIn>

          <FadeIn className="max-w-2xl mx-auto">
            <Card className="overflow-hidden" gradient>
              <div className="divide-y" style={{ borderColor: "var(--border)" }}>
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-6 py-4"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span style={{ color: "var(--text-secondary)" }}>{spec.label}</span>
                    <span className="font-mono font-medium" style={{ color: "var(--text-primary)" }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--background-secondary), var(--background))",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Use Cases
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Perfect for any scenario where HTTP requests must not be lost
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "linear-gradient(to bottom right, var(--accent), var(--accent-purple))",
                    }}
                  >
                    <div style={{ color: "white" }}>{useCase.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {useCase.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>{useCase.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Backend Warning */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />

        <Container className="relative z-10">
          <FadeIn>
            <div
              className="max-w-3xl mx-auto p-8 rounded-2xl border-2"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.05)",
                borderColor: "rgba(245, 158, 11, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#F59E0B]">
                    Backend Requirement: Idempotency
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    Your backend <strong style={{ color: "var(--text-primary)" }}>MUST</strong>{" "}
                    support idempotency keys for safe replay. When a request is replayed,
                    there&apos;s no guarantee the first attempt didn&apos;t succeed.
                  </p>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    Your backend must:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: "var(--text-secondary)" }}>
                    <li>Accept an <code className="text-sm px-1 py-0.5 rounded" style={{ backgroundColor: "var(--background-secondary)" }}>X-Idempotency-Key</code> header</li>
                    <li>If the key was already processed, return the cached response</li>
                    <li>If new, process and cache the result</li>
                  </ul>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Without this, replayed requests may cause: double charges, duplicate orders,
                    duplicate database entries, incorrect inventory counts.
                  </p>
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key"
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#F59E0B] hover:underline"
                  >
                    <BookOpen className="w-4 h-4" />
                    Learn more about Idempotency-Key header (MDN)
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background-secondary)" }} />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto">
            <Card className="p-6" gradient>
              <FAQItem
                question="Is this a retry library?"
                answer="No. Retry libraries retry on every failure. request-ledger only queues requests when offline and replays them when online. It's a durable outbox pattern for HTTP requests."
              />
              <FAQItem
                question="Is this a sync engine?"
                answer="No. Sync engines resolve conflicts and merge data. request-ledger doesn't guess your backend behavior or mutate payloads. It simply ensures requests are delivered exactly as you created them."
              />
              <FAQItem
                question="Does it work with Service Workers?"
                answer="request-ledger works independently of Service Workers. You can use both together, but it's not required. The library uses IndexedDB directly for persistence."
              />
              <FAQItem
                question="What happens if my backend is down?"
                answer="Requests that get 5xx errors will be retried according to your retry strategy. Requests that get 4xx errors are marked as failed (client errors shouldn't be retried)."
              />
              <FAQItem
                question="Can I use a different storage backend?"
                answer="Yes! Implement the LedgerStorage interface and pass your custom storage adapter to createLedger(). See the documentation for details."
              />
            </Card>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Ready to Make Your Requests Durable?
              </h2>
              <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
                Install request-ledger today and never lose a request again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="https://www.npmjs.com/package/request-ledger" target="_blank">
                  <Button size="lg" className="group">
                    <Package className="mr-2 w-5 h-5" />
                    npm install request-ledger
                  </Button>
                </Link>
                <Link href="/products/request-ledger/docs">
                  <Button variant="secondary" size="lg">
                    <BookOpen className="mr-2 w-5 h-5" />
                    Read the Docs
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
                <Link
                  href="https://github.com/nexbrothers/request-ledger"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
                <Link
                  href="https://www.npmjs.com/package/request-ledger"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <Package className="w-4 h-4" />
                  npm
                </Link>
                <Link
                  href="/products/request-ledger/playground"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Playground
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
