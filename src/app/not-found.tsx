"use client";

import { motion } from "framer-motion";
import { Container } from "@repo/ui/ui";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center" style={{ backgroundColor: "var(--background)" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <span
            className="font-display block text-[120px] sm:text-[160px] font-semibold leading-none select-none mb-2"
            style={{ color: "var(--accent)" }}
          >
            404
          </span>

          <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Page not found
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
              style={{ backgroundColor: "var(--primary)", color: "var(--background)" }}
            >
              <Home className="w-4 h-4" />
              Go home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold border"
              style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
