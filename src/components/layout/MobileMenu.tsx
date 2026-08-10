"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, items, currentPath }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "rgba(20, 20, 15, 0.45)" }}
            onClick={onClose}
          />

          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] border-l md:hidden rounded-l-[28px] overflow-hidden"
            style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col h-full pt-28 px-7 pb-8">
              <div className="flex-1">
                {items.map((item, index) => {
                  const active = currentPath === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-4 font-display text-3xl font-semibold border-b active:scale-[0.98] transition-transform"
                        style={{
                          borderColor: "var(--border)",
                          color: active ? "var(--accent)" : "var(--text-primary)",
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: items.length * 0.05 + 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 rounded-full py-4 text-base font-semibold active:scale-[0.98] transition-transform"
                  style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
                >
                  Contact
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
