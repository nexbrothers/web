"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "var(--background)" }}
      />
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[128px]" 
        style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[128px]" 
        style={{ backgroundColor: "var(--accent-purple)", opacity: 0.1 }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <span 
              className="text-[150px] sm:text-[200px] font-bold select-none"
              style={{ color: "var(--background-secondary)" }}
            >
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-[150px] sm:text-[200px] font-bold gradient-text">
              404
            </span>
          </div>

          {/* Message */}
          <h1 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Page Not Found
          </h1>
          <p 
            className="text-lg mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
