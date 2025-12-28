# request-ledger

**Never lose a request again.**

A durable, client-side HTTP request ledger for web applications on unreliable networks. Think of it as a transactional outbox for your client-side HTTP requests.

## Installation

```bash
npm install request-ledger
```

## Features

- **Offline-First Persistence**: Requests made while offline are saved to IndexedDB. Data survives reloads, crashes, and restarts.
- **Auto-Replay on Reconnection**: Automatically processes queued requests when coming back online via browser's 'online' event.
- **Ordered Processing**: Requests replayed in exact order they were created, ensuring data consistency for dependent operations.
- **Crash-Safe Recovery**: Entries in 'processing' state are automatically recovered on reload with 5-minute timeout for stale locks.
- **Configurable Retry**: Fixed delay, exponential backoff, or manual retry strategies. Smart error handling for 4xx vs 5xx.
- **TypeScript-First**: Full type definitions included. Strict TypeScript configuration with IntelliSense support.
- **Custom Storage Adapters**: Use IndexedDB by default or implement your own storage backend with the LedgerStorage interface.
- **Zero Dependencies**: No external packages required. ~8KB gzipped bundle size. Tree-shakeable ES modules.

## Quick Start

```typescript
import { createLedger } from "request-ledger";

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
}
```

## Use Cases

- **E-Commerce Checkouts**: Never lose an order even with spotty network. Idempotency keys prevent duplicate charges.
- **Field Data Collection**: Warehouse inventory, delivery confirmations, agricultural data. Works in basements and rural areas.
- **Offline Form Submissions**: Survey responses, user registrations, feedback forms, CRM updates that sync when online.
- **Critical API Calls**: Financial transactions, booking confirmations, status updates that must not be lost.
- **Progressive Web Apps**: Works without Service Workers. Simpler than background sync. More reliable than retry libraries.

## Technical Specifications

- **Bundle Size**: ~8KB gzipped
- **Dependencies**: 0
- **Module Formats**: ESM + CommonJS
- **TypeScript**: Full support
- **Storage**: IndexedDB (customizable)
- **Max Entries**: 1000 (configurable)
- **Browser Support**: Chrome 80+, Firefox 75+, Safari 14+, Edge 80+
- **License**: MIT

## Backend Requirement: Idempotency

Your backend **MUST** support idempotency keys for safe replay. When a request is replayed, there's no guarantee the first attempt didn't succeed.

Your backend must:

- Accept an `X-Idempotency-Key` header
- If the key was already processed, return the cached response
- If new, process and cache the result

Without this, replayed requests may cause: double charges, duplicate orders, duplicate database entries, incorrect inventory counts.

[Learn more about Idempotency-Key header (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key)

## FAQ

**Is this a retry library?**
No. Retry libraries retry on every failure. request-ledger only queues requests when offline and replays them when online. It's a durable outbox pattern for HTTP requests.

**Is this a sync engine?**
No. Sync engines resolve conflicts and merge data. request-ledger doesn't guess your backend behavior or mutate payloads. It simply ensures requests are delivered exactly as you created them.

**Does it work with Service Workers?**
request-ledger works independently of Service Workers. You can use both together, but it's not required. The library uses IndexedDB directly for persistence.

**What happens if my backend is down?**
Requests that get 5xx errors will be retried according to your retry strategy. Requests that get 4xx errors are marked as failed (client errors shouldn't be retried).

**Can I use a different storage backend?**
Yes! Implement the LedgerStorage interface and pass your custom storage adapter to createLedger(). See the documentation for details.
