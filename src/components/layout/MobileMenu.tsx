"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
  currentPath: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  currentPath,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#1f241f]/20 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] border-l md:hidden"
            style={{ backgroundColor: "var(--paper)", borderColor: "var(--line)" }}
          >
            <div className="flex flex-col pt-24 px-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-4 text-lg font-medium border-b transition-colors",
                      currentPath === item.href
                        ? "text-[var(--ink)]"
                        : "text-[var(--muted)] hover:text-[var(--ink)]"
                    )}
                    style={{ borderColor: "var(--line)" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
