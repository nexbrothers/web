import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme";

interface HeaderProps {
  productName: string;
  logoSrc?: string;
}

export function Header({ productName, logoSrc }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl dark:border-gray-800/50 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {logoSrc ? (
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <Image src={logoSrc} alt={`${productName} logo`} width={32} height={32} className="object-cover w-full h-full" />
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                <span className="font-bold text-sm">{productName[0]}</span>
              </div>
            )}
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Features</Link>
          <Link href="/product-details" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Details</Link>
          <Link href="/privacy-policy" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms-and-conditions" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Terms</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
