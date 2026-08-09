import { formatPrice } from "../../lib/format";

export function PriceTag({ price, originalPrice }: { price: number; originalPrice?: number }) {
  if (price === 0) {
    return (
      <span className="text-xs font-semibold" style={{ color: "var(--success)" }}>
        Free
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="text-[11px] line-through" style={{ color: "var(--text-muted)" }}>
          {formatPrice(originalPrice)}
        </span>
      )}
    </span>
  );
}
