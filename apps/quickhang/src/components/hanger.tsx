import Image from "next/image";

/** The character on his rope. The rope starts at the top of the wrapper and he swings gently from it. */
export function Hanger({ ropeRem = 5, width = 120, className = "" }: { ropeRem?: number; width?: number; className?: string }) {
  const height = Math.round((width * 823) / 291);
  return (
    <div className={`qh-swing flex flex-col items-center ${className}`} aria-hidden="false">
      <div style={{ height: `${ropeRem}rem`, width: 3, borderRadius: 3, background: "linear-gradient(180deg, var(--rope), var(--orange))" }} />
      <Image
        src="/images/quickhang/character-idle.webp"
        alt="The QuickHang character hanging from a rope"
        width={width}
        height={height}
        priority
        className="-mt-1 drop-shadow-[0_14px_18px_rgba(120,60,10,0.25)]"
      />
    </div>
  );
}
