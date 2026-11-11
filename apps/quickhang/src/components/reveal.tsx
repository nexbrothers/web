import type { ReactNode } from "react";

/** CSS-only fade-up on scroll. Content is fully visible without JS or when motion is reduced. */
export function Reveal({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`qh-reveal ${className}`}>{children}</div>;
}
