import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  productName: string;
  logoSrc?: string;
  navLinks?: NavLink[];
}

export function Header({ productName, logoSrc, navLinks }: HeaderProps) {
  const defaultLinks: NavLink[] = [
    { label: "Features", href: "/#features" },
    { label: "Details", href: "/product-details" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-and-conditions" },
  ];

  const links = navLinks || defaultLinks;

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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
