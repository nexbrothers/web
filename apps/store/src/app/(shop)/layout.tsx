import { StoreHeader } from "../../components/layout/StoreHeader";
import { StoreFooter } from "../../components/layout/StoreFooter";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StoreHeader />
      <main className="flex-1">{children}</main>
      <StoreFooter />
    </>
  );
}
