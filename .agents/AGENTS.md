# NexBrothers Monorepo Architecture

This project is a Turborepo-managed monorepo using pnpm workspaces. It houses the primary NexBrothers corporate website as well as individual landing pages for the various products.

When working on this repository, you **MUST ALWAYS** follow the architectural rules and constraints detailed below to maintain a highly-scalable, DRY, and visually consistent ecosystem.

## 1. Directory Structure

### Root Application (`/`)
- The main NexBrothers corporate website (nexbrothers.com) must **always** remain at the root directory.
- Its `src/app`, `public`, and configuration files reside in the root folder.
- Do **not** move the root application into the `/apps` directory.

### Product Applications (`/apps`)
- Individual product landing pages (e.g., Scanvo, Signlock) must be created as standalone Next.js applications inside the `/apps` directory.
- This allows each product to be independently deployed to its own subdomain (e.g., `scanvo.nexbrothers.com`).
- To create a new product app, initialize a Next.js app inside `/apps/<product-name>`.

### Shared Packages (`/packages`)
- **`@repo/ui`**: Contains all shared, premium UI components, animations, and complex page sections (e.g., Hero, Features, Stats, CTA).
- **`@repo/utils`**: Contains shared utility functions, such as the `cn()` function for Tailwind class merging.

## 2. Shared UI and Theming Constraints

To ensure all product landing pages match the premium, highly-detailed aesthetic of the main NexBrothers website:
- **Never duplicate complex components**. If a new component or section is needed across multiple apps, build it in `@repo/ui`.
- **Importing from UI**: Apps should import components using the exports defined in `@repo/ui/package.json` (e.g., `import { Button } from "@repo/ui/ui";` or `import { Features } from "@repo/ui/sections";`).
- **Tailwind CSS v4 Integration**: The project uses Tailwind CSS v4. For sub-apps in the `/apps` directory to properly compile the styles of the shared UI components, their `src/app/globals.css` file **must** include the source directive pointing to the UI package:
  ```css
  @import "tailwindcss";
  @source "../../../../packages/ui";
  ```

## 3. Development Workflow

- **Install Dependencies**: Always run `pnpm install` at the root of the workspace.
- **Run All Apps Locally**: Use `pnpm turbo:dev` from the root to spin up the main website and all product apps concurrently. They will be assigned different local ports (e.g., `localhost:3000`, `3001`, `3002`).
- **Run a Specific App**: Use Turborepo's filter command: `npx turbo dev --filter=scanvo`
- **Add Dependencies to Packages**: Use the `--filter` flag to add dependencies to specific packages. Example: `pnpm add framer-motion --filter=@repo/ui`.

By adhering to these rules, the codebase will remain modular, maintainable, and visually cohesive across the entire product suite.
