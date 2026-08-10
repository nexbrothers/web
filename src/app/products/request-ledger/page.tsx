"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@repo/ui/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@repo/ui/animations";
import {
  Package,
  Wifi,
  WifiOff,
  RefreshCw,
  Database,
  Shield,
  Clock,
  Zap,
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
    icon: <WifiOff className="w-5 h-5" />,
    title: "Offline-first persistence",
    description: "Requests made while offline are saved to IndexedDB. Data survives reloads, crashes, and restarts.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Auto-replay on reconnection",
    description: "Automatically processes queued requests when coming back online via the browser's online event.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Ordered processing",
    description: "Requests replay in the exact order they were created, keeping dependent operations consistent.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Crash-safe recovery",
    description: "Entries stuck in a processing state are recovered on reload, with a 5-minute stale-lock timeout.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Configurable retry",
    description: "Fixed delay, exponential backoff, or manual retry. Smart handling for 4xx versus 5xx errors.",
  },
  {
    icon: <FileCode className="w-5 h-5" />,
    title: "TypeScript-first",
    description: "Full type definitions included, with a strict configuration and complete IntelliSense support.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Custom storage adapters",
    description: "IndexedDB by default, or bring your own backend through the LedgerStorage interface.",
  },
  {
    icon: <Package className="w-5 h-5" />,
    title: "Zero dependencies",
    description: "No external packages. About 8KB gzipped, and fully tree-shakeable as ES modules.",
  },
];

const useCases = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce checkouts",
    description: "Never lose an order on spotty networks. Idempotency keys prevent duplicate charges.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Field data collection",
    description: "Warehouse inventory, delivery confirmations, agricultural data. Works in basements and rural areas.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Offline form submissions",
    description: "Survey responses, registrations, feedback, and CRM updates that sync when back online.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Critical API calls",
    description: "Financial transactions, booking confirmations, and status updates that must not be lost.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Progressive Web Apps",
    description: "Works without Service Workers, simpler than background sync, more reliable than retry libraries.",
  },
];

const steps = [
  { title: "Request goes through the ledger", description: "Your app makes an API request through the ledger instead of calling fetch directly." },
  { title: "Online? Execute immediately", description: "If the browser is online, the request executes right away and returns the response." },
  { title: "Offline? Persist to IndexedDB", description: "If offline, the request is durably persisted to IndexedDB with all of its metadata." },
  { title: "Connectivity returns", description: "The browser fires an online event the moment the network is restored." },
  { title: "Auto-replay in order", description: "Queued requests replay in order. Failed requests are never silently dropped." },
];

const specs = [
  { label: "Bundle size", value: "~8KB gzipped" },
  { label: "Dependencies", value: "0" },
  { label: "Module formats", value: "ESM + CJS" },
  { label: "TypeScript", value: "Full support" },
  { label: "Storage", value: "IndexedDB" },
  { label: "Max entries", value: "1000" },
  { label: "Browser support", value: "Chrome 80+, FF 75+, Safari 14+" },
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
    <button onClick={handleCopy} className="p-1.5 rounded-md transition-colors" title="Copy to clipboard" style={{ color: "var(--on-ink-muted)" }}>
      {copied ? <Check className="w-4 h-4" style={{ color: "var(--success)" }} /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--ink)" }}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(246,245,241,0.1)" }}>
        <span className="text-xs font-medium" style={{ color: "var(--on-ink-muted)" }}>{language}</span>
        <CopyButton text={code} />
      </div>
      <pre className="p-5 overflow-x-auto">
        <code className="text-sm" style={{ color: "var(--on-ink)", fontFamily: "var(--font-mono), monospace" }}>{code}</code>
      </pre>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left">
        <span className="text-base font-medium pr-4" style={{ color: "var(--text-primary)" }}>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "var(--text-secondary)" }} />
        )}
      </button>
      {isOpen && <div className="pb-5 leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>{answer}</div>}
    </div>
  );
}

export default function RequestLedgerPage() {
  const installCommand = "npm install request-ledger";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                <Database className="w-5 h-5" style={{ color: "#fff" }} />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold border" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                v0.1.1
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              request-ledger
            </h1>
            <p className="text-xl font-medium mb-5" style={{ color: "var(--accent)" }}>
              Never lose a request again.
            </p>
            <p className="text-lg mb-8 max-w-xl" style={{ color: "var(--text-secondary)" }}>
              A durable, client-side HTTP request ledger for web apps on unreliable networks.
              Think of it as a transactional outbox for your client-side requests.
            </p>

            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border mb-8"
              style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}
            >
              <Terminal className="w-4 h-4" style={{ color: "var(--accent)" }} />
              <code className="text-sm" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono), monospace" }}>{installCommand}</code>
              <CopyButton text={installCommand} />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="https://www.npmjs.com/package/request-ledger"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
              >
                <Package className="w-4 h-4" />
                View on npm
              </Link>
              <Link href="/products/request-ledger/playground" className="group inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                <Play className="w-4 h-4" />
                Live demo
              </Link>
              <Link
                href="https://github.com/nexbrothers/request-ledger"
                target="_blank"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
                What happens when your user submits an order and loses connection?
              </h2>
              <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
                Without request-ledger, the request is lost. The user sees an error, has no
                idea if it went through, and might retry, causing a duplicate order.
              </p>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>With request-ledger,</strong>{" "}
                the request is durably persisted and replayed automatically when connectivity
                returns. No lost data, no duplicates.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-3">
              <div className="flex items-center gap-4 p-5 rounded-2xl border" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(217,45,32,0.1)" }}>
                  <WifiOff className="w-5 h-5" style={{ color: "var(--danger)" }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: "var(--text-primary)" }}>Without ledger</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Request lost → error → user frustration</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,157,91,0.1)" }}>
                  <Wifi className="w-5 h-5" style={{ color: "var(--success)" }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: "var(--text-primary)" }}>With ledger</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Request queued → auto-replayed → success</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                How it works
              </h2>
              <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                A simple mental model for durable HTTP requests.
              </p>
            </FadeIn>

            <div>
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.06}>
                  <div className="flex gap-6 py-6" style={{ borderTop: index === 0 ? "none" : "1px solid var(--border)" }}>
                    <span className="font-display text-2xl font-semibold w-8 shrink-0" style={{ color: "var(--border-hover)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                      <p style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <div className="mt-4 p-5 rounded-2xl border" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border)" }}>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  <strong style={{ color: "var(--text-secondary)" }}>Note:</strong> this is not a
                  retry library (it doesn&apos;t retry every failure) and not a sync engine (it
                  doesn&apos;t resolve conflicts). It&apos;s a durable outbox for HTTP requests.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Everything you need for reliable requests
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Quick Start */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Quick start
            </h2>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn>
              <CodeBlock
                language="typescript"
                code={`import { createLedger } from "request-ledger";

const ledger = createLedger({
  autoProcess: true,
  retry: { type: "exponential", baseMs: 1000, maxAttempts: 5 },
});

const response = await ledger.request({
  id: "order-123",
  url: "/api/orders",
  method: "POST",
  body: { items: ["item1", "item2"] },
  idempotencyKey: "order-123-v1",
});

if (response) {
  const order = await response.json();
} else {
  console.log("Order queued for later");
}`}
              />
            </FadeIn>

            <FadeIn delay={0.1} className="mt-6">
              <Link href="/products/request-ledger/docs" className="group inline-flex items-center gap-2 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                <BookOpen className="w-4 h-4" />
                View full documentation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Specs + Use Cases */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-12">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
                Technical specs
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{spec.label}</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono), monospace" }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
                  Where it fits
                </h2>
              </FadeIn>
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <StaggerItem key={useCase.title}>
                    <div className="p-5 rounded-2xl border h-full" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "var(--brand-subtle)", color: "var(--accent)" }}>
                        {useCase.icon}
                      </div>
                      <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{useCase.title}</h3>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{useCase.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </Container>
      </section>

      {/* Backend Warning */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn>
            <div className="max-w-3xl p-8 rounded-[24px] border" style={{ backgroundColor: "rgba(217,150,10,0.06)", borderColor: "rgba(217,150,10,0.3)" }}>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "#b45309" }} />
                <div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#b45309" }}>
                    Backend requirement: idempotency
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    Your backend <strong style={{ color: "var(--text-primary)" }}>must</strong>{" "}
                    support idempotency keys for safe replay. When a request is replayed, there&apos;s
                    no guarantee the first attempt didn&apos;t already succeed.
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: "var(--text-secondary)" }}>
                    <li>
                      Accept an{" "}
                      <code className="text-sm px-1.5 py-0.5 rounded" style={{ backgroundColor: "var(--background-secondary)" }}>
                        X-Idempotency-Key
                      </code>{" "}
                      header
                    </li>
                    <li>If the key was already processed, return the cached response</li>
                    <li>If it&apos;s new, process it and cache the result</li>
                  </ul>
                  <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                    Without this, replayed requests can cause double charges, duplicate orders, or
                    incorrect inventory counts.
                  </p>
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: "#b45309" }}
                  >
                    <BookOpen className="w-4 h-4" />
                    Idempotency-Key header on MDN
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "var(--background-secondary)" }}>
        <Container>
          <FadeIn className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Frequently asked
            </h2>
          </FadeIn>

          <FadeIn className="max-w-3xl">
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}>
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
                answer="Requests that get 5xx errors are retried according to your retry strategy. Requests that get 4xx errors are marked as failed, since client errors shouldn't be retried."
              />
              <FAQItem
                question="Can I use a different storage backend?"
                answer="Yes. Implement the LedgerStorage interface and pass your custom storage adapter to createLedger(). See the documentation for details."
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <FadeIn>
            <div className="rounded-[32px] p-10 sm:p-14" style={{ backgroundColor: "var(--ink)" }}>
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--on-ink)" }}>
                  Ready to make your requests durable?
                </h2>
                <p className="text-lg mb-8" style={{ color: "var(--on-ink-muted)" }}>
                  Install request-ledger today and stop worrying about dropped requests.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link
                    href="https://www.npmjs.com/package/request-ledger"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                    style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                  >
                    <Package className="w-4 h-4" />
                    npm install request-ledger
                  </Link>
                  <Link href="/products/request-ledger/docs" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--on-ink)" }}>
                    <BookOpen className="w-4 h-4" />
                    Read the docs
                  </Link>
                  <Link href="https://github.com/nexbrothers/request-ledger" target="_blank" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--on-ink)" }}>
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
