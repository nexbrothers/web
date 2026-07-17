# NexBrothers

Welcome to the official NexBrothers repository. This project is a monorepo managed using [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/repo), containing the main NexBrothers corporate website and dedicated applications for our products.

## Project Structure

This monorepo contains multiple apps and shared packages:

- **`.` (Root)**: The main NexBrothers corporate website (`nexbrothers.com`).
- **`apps/scanvo`**: The dedicated Next.js application for [Scanvo](https://scanvo.nexbrothers.com).
- **`apps/signlock`**: The dedicated Next.js application for [Signlock](https://signlock.nexbrothers.com).
- **`packages/ui`**: Shared UI components used across applications (Header, Footer, Hero).
- **`packages/utils`**: Shared utilities and helper functions.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **pnpm** installed on your system.
We highly recommend using `pnpm` (v11+) as the package manager for this monorepo.

### Installation

Clone the repository and install the dependencies for all workspace projects:

```bash
pnpm install
```

## Running Applications Locally

You can run all applications simultaneously using Turborepo, or run them individually.

### Running All Apps Together

To start the development servers for **all** applications at once:

```bash
pnpm turbo:dev
```

This will concurrently start:
- NexBrothers Main Site at `http://localhost:3000`
- Scanvo App at `http://localhost:3001`
- Signlock App at `http://localhost:3002`

### Running Individual Apps

If you prefer to run only a single application, you can use the Turborepo `--filter` flag:

**Run only the main NexBrothers site:**
```bash
npx turbo dev --filter=nex-brothers
```

**Run only the Scanvo app:**
```bash
npx turbo dev --filter=scanvo
```

**Run only the Signlock app:**
```bash
npx turbo dev --filter=signlock
```

**Run only the MyMoneyReport app:**
```bash
npx turbo dev --filter=mymoneyreport
```

## Building for Production

To build all applications for production:

```bash
pnpm turbo:build
```

You can also build a specific app using the filter flag:
```bash
npx turbo build --filter=scanvo
```

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Monorepo Tools**: [pnpm Workspaces](https://pnpm.io/workspaces) & [Turborepo](https://turbo.build/repo)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

&copy; NexBrothers. All rights reserved.
