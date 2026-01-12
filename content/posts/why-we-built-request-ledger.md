---
title: "Why We Built request-ledger: Solving Offline-First Challenges"
description: "Learn how request-ledger helps web apps handle unreliable networks with durable HTTP request persistence and automatic replay."
date: "2026-01-10"
tags: ["open-source", "javascript", "offline-first", "developer-tools"]
author: "aman-sharma"
coverImage: "/images/blog/request-ledger-cover.jpg"
---

Modern web apps assume reliable connectivity. But in the real world — especially in emerging markets — networks drop, connections timeout, and requests fail silently.

After experiencing this pain firsthand, we built **request-ledger**.

## The Problem We Faced

While building apps for users in areas with spotty connectivity, we kept hitting the same wall:

1. Users would submit a form
2. The network would fail mid-request
3. Data was lost forever
4. Users had no idea what happened

Standard retry logic wasn't enough. We needed **durability**.

## What is request-ledger?

request-ledger is a lightweight, client-side library that:

- **Persists pending requests** to IndexedDB before sending
- **Automatically replays** failed requests when connectivity returns
- **Guarantees at-least-once delivery** for critical operations
- **Works with any HTTP client** (fetch, axios, etc.)

### Quick Example

```javascript
import { RequestLedger } from "request-ledger";

const ledger = new RequestLedger();

// This request is persisted before it's sent
await ledger.record({
  url: "/api/orders",
  method: "POST",
  body: { item: "Widget", quantity: 5 },
});

// Even if the user closes the tab, the request will
// eventually be delivered when they return online
```

## Design Principles

We built request-ledger with three core principles:

### 1. Zero Dependencies

The library has no external dependencies. It's small, fast, and won't bloat your bundle.

### 2. Non-Intrusive

Works alongside your existing code. No need to rewrite your API layer.

### 3. Transparent Recovery

Users don't need to know about the complexity. Requests just... work.

## Get Started

request-ledger is available on npm:

```bash
npm install request-ledger
```

Check out the [full documentation](/products/request-ledger) to learn more.

---

Building for unreliable networks is hard. We hope request-ledger makes it a little easier.
