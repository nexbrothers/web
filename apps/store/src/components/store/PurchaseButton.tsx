import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@repo/ui/ui";
import { formatPrice } from "../../lib/format";
import type { AppRecord } from "../../types";

export function PurchaseButton({ app, size = "lg" }: { app: AppRecord; size?: "sm" | "md" | "lg" }) {
  return (
    <Link href={`/checkout/${app.slug}`}>
      <Button size={size}>
        <ShoppingCart className="w-4 h-4 mr-1.5" />
        Buy & Download — {formatPrice(app.price)}
      </Button>
    </Link>
  );
}
