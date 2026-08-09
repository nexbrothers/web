import Image from "next/image";
import type { AppRecord } from "../../types";

const PALETTE = [
  { bg: "var(--brand-subtle)", fg: "var(--brand)" },
  { bg: "var(--premium-subtle)", fg: "var(--premium)" },
  { bg: "var(--success-subtle)", fg: "var(--success)" },
  { bg: "var(--warning-subtle)", fg: "var(--warning)" },
];

function hashIndex(input: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  return hash % mod;
}

const SIZE_MAP = { sm: 32, md: 44, lg: 64, xl: 88 } as const;

export function AppIcon({
  app,
  size = "md",
  className = "",
}: {
  app: Pick<AppRecord, "slug" | "name" | "iconSrc">;
  size?: keyof typeof SIZE_MAP;
  className?: string;
}) {
  const px = SIZE_MAP[size];
  const radius = size === "xl" ? "rounded-[22px]" : size === "lg" ? "rounded-2xl" : "rounded-xl";

  if (app.iconSrc) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden ${radius} ${className}`}
        style={{ width: px, height: px, backgroundColor: "var(--bg-elevated)" }}
      >
        <Image src={app.iconSrc} alt="" fill sizes={`${px}px`} className="object-cover" />
      </div>
    );
  }

  const palette = PALETTE[hashIndex(app.slug, PALETTE.length)];
  return (
    <div
      className={`shrink-0 flex items-center justify-center font-semibold ${radius} ${className}`}
      style={{
        width: px,
        height: px,
        backgroundColor: palette.bg,
        color: palette.fg,
        fontSize: px * 0.4,
      }}
      aria-hidden="true"
    >
      {app.name[0]}
    </div>
  );
}
