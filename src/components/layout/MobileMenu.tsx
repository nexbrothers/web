"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@repo/utils";

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
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "rgba(20, 17, 16, 0.4)" }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] border-l md:hidden"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col pt-24 px-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-4 text-lg font-medium border-b transition-colors active:scale-[0.97]"
                    )}
                    style={{
                      borderColor: "var(--border)",
                      color:
                        currentPath === item.href
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: items.length * 0.06 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center gap-1.5 py-4 text-lg font-semibold active:scale-[0.97]"
                  style={{ color: "var(--accent)" }}
                >
                  Let&apos;s talk
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
