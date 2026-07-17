"use client";

import { Container, Button, FeatureCard } from "@repo/ui/ui";
import { Features, Stats, CTA, Hero } from "@repo/ui/sections";
import {
  Scan,
  FileText,
  Shield,
  Search,
  Crop,
  Sparkles,
  QrCode,
  Layout,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FadeIn } from "@repo/ui/animations";
import { HeroScannerAnimation } from "../components/hero-scanner";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo";

const features = [
  {
    icon: <Scan className="w-5 h-5" />,
    title: "Smart Edge Detection",
    description: "AI instantly finds document boundaries, auto-crops, and corrects perspective in milliseconds.",
  },
  {
    icon: <Crop className="w-5 h-5" />,
    title: "Perspective Correction",
    description: "Straightens skewed documents and fixes perspective distortion for perfect results every time.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Image Enhancement",
    description: "CLAHE enhancement, shadow removal, and white balance make text crisp even in poor lighting.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Multi-Page PDFs",
    description: "Scan multiple pages and compile into a single organized PDF. Arrange on A4 sheets.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "OCR Text Recognition",
    description: "Extract text from any scan using ML Kit OCR. Search, copy, and share instantly.",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "ID Card Mode",
    description: "Capture both sides of ID cards and passports, aligned perfectly on a single page.",
  },
  {
    icon: <QrCode className="w-5 h-5" />,
    title: "QR & Barcode Scanner",
    description: "Built-in scanner powered by ML Kit. Scan codes directly from the app.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Private & Offline",
    description: "All processing happens on your device. Nothing is ever uploaded to any server.",
  },
];

const howItWorks = [
  { step: "01", title: "Capture", description: "Point your camera at any document. Smart edge detection auto-crops in real-time." },
  { step: "02", title: "Enhance", description: "Apply filters, remove shadows, and enhance text with a single tap." },
  { step: "03", title: "Export", description: "Save as PDF, PNG, or JPEG. Share via email, WhatsApp, or Google Drive." },
];

const testimonials = [
  {
    name: "Inspire with me",
    date: "26 May 2026",
    content: "I was literally stressed after tea spilled on my important documents and the text became unclear. But this app completely saved me — the scan quality and filters restored everything perfectly. Truly impressed, highly recommended!",
    rating: 5,
  },
  {
    name: "Rajeev Sharma",
    date: "14 April 2026",
    content: "Very helpful app for scanning documents. The scan quality is really impressive. The interface is simple and user friendly. Overall, a great all-in-one scanning tool.",
    rating: 5,
  },
  {
    name: "Manoj Sharma",
    date: "15 June 2026",
    content: "I have tried many scanner apps, but Scanvo stands out because of its privacy-first approach. Being able to scan documents without uploading them to the cloud gives me peace of mind. Fast, reliable, and easy to use.",
    rating: 5,
  },
  {
    name: "Rupali Sharmaa",
    date: "18 May 2026",
    content: "Scanvo is one of the best document scanner apps I have used. The scanning quality is clear, the app is easy to use, and the PDF tools are very helpful. Highly recommended for students, office work, and daily document needs.",
    rating: 5,
  },
  {
    name: "Prateek Babu",
    date: "3 April 2026",
    content: "This document scanner app is really impressive. It works completely offline, which makes it fast, secure, and reliable. The scanning quality is excellent with smooth performance and no lag. One of the best scanner apps I've used so far.",
    rating: 5,
  },
  {
    name: "Anik Kumar",
    date: "26 May 2026",
    content: "Wonderful app amazing experience.",
    rating: 5,
  },
  {
    name: "Sunny Kumar Sharma",
    date: "21 April 2026",
    content: "Best offline app for document scanning. Works perfectly without internet.",
    rating: 5,
  },
  {
    name: "Hina Ansari",
    date: "10 May 2026",
    content: "Very good app. Works great for all my scanning needs.",
    rating: 5,
  },
  {
    name: "Dipu Sharma",
    date: "15 April 2026",
    content: "Awesome app I found, I was exactly finding such application. Does everything I need.",
    rating: 5,
  },
  {
    name: "Aditya raj",
    date: "12 April 2026",
    content: "Easy to use. Simple interface and great results every time.",
    rating: 5,
  },
  {
    name: "kiran kumari",
    date: "30 May 2026",
    content: "Great application, love it! The scanning quality is top notch.",
    rating: 5,
  },
  {
    name: "Saurabh Kumar",
    date: "21 May 2026",
    content: "Best app I found for document scanning. Highly recommended.",
    rating: 5,
  },
  {
    name: "ADARSH SHARMA",
    date: "6 April 2026",
    content: "Best app I found for scanning documents. Works flawlessly.",
    rating: 5,
  },
  {
    name: "Anshu Sharma",
    date: "13 April 2026",
    content: "Everything is wow. The app is perfect for all my scanning needs.",
    rating: 5,
  },
  {
    name: "Rakesh Kumar",
    date: "31 May 2026",
    content: "Nice app. Does exactly what it promises with great quality.",
    rating: 5,
  },
  {
    name: "navin sharma",
    date: "17 April 2026",
    content: "Main ye application bahut time se dhundh raha tha. Thanks for this amazing app.",
    rating: 5,
  },
  {
    name: "Ayush Sharma",
    date: "12 April 2026",
    content: "Best app for document scanning. Simple and effective.",
    rating: 5,
  },
  {
    name: "Roba Ediris",
    date: "3 May 2026",
    content: "Good job. The app works really well for all my scanning needs.",
    rating: 5,
  },
  {
    name: "Mr Aaka",
    date: "18 April 2026",
    content: "Great app. Does everything I need from a document scanner.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is Scanvo really free?",
    a: "Yes. Scanvo offers a generous free tier with core scanning features including edge detection, OCR, and PDF export. A premium subscription removes ads and unlocks advanced PDF tools, but the free version is fully functional for everyday scanning needs.",
  },
  {
    q: "Are my documents private?",
    a: "Absolutely. All document processing happens entirely on your device. No images or data are ever uploaded to any server. Scanvo works fully offline — no internet connection required for scanning.",
  },
  {
    q: "What formats can I export to?",
    a: "Scanvo supports export to PDF, PNG, and JPEG with configurable quality (60/80/95) and resolution (150/200/300 DPI).",
  },
  {
    q: "Does Scanvo work in low light?",
    a: "Yes. Advanced image processing uses CLAHE enhancement, shadow removal, and white balance to produce clear scans even in challenging lighting conditions.",
  },
  {
    q: "Can I scan ID cards and passports?",
    a: "Yes, Scanvo has a dedicated ID Card mode that captures both front and back sides and arranges them on a single page.",
  },
  {
    q: "Does Scanvo support OCR?",
    a: "Yes. ML Kit-powered OCR extracts text from scanned documents. The model is prefetched on first launch for fast performance and supports 50+ languages.",
  },
];

const tools = [
  { title: "Merge PDF", desc: "Combine multiple PDFs into one" },
  { title: "Edit PDF", desc: "Modify text and images directly" },
  { title: "Sign Documents", desc: "Draw or stamp your signature" },
  { title: "JPG to PDF", desc: "Convert images to PDF format" },
  { title: "PDF to Word", desc: "Export PDFs to editable DOCX" },
  { title: "Add Watermark", desc: "Protect your documents" },
  { title: "Page Numbers", desc: "Auto-number your pages" },
  { title: "Password Protect", desc: "Secure PDFs with encryption" },
  { title: "Split PDF", desc: "Extract pages into separate files" },
  { title: "Compress PDF", desc: "Reduce file size" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          style={{
            fill: i < rating ? "var(--brand)" : "none",
            color: i < rating ? "var(--brand)" : "var(--border-hover)",
          }}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map(w => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}


export default function ScanvoHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onDragStart = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current?.scrollLeft ?? 0 };
  }, []);

  const onDragMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, [isDragging]);

  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX, scrollLeft: scrollRef.current?.scrollLeft ?? 0 };
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, [isDragging]);

  return (
    <main>
      {/* ─── Hero ─── */}
      <Hero
        title={
          <>
            Scan <span style={{ color: "var(--brand)" }}>smarter</span>.
            <br />
            Create Perfect PDFs.
          </>
        }
        subtitle="Transform paper documents into crystal-clear PDFs with AI-powered scanning, automatic edge detection, smart enhancement, OCR, editing, signatures, and secure sharing—all from one powerful app."
        primaryCTA={{ label: "Download for Free", href: PLAY_STORE_URL }}
      >
        <div className="flex flex-col items-center gap-6">
          <HeroScannerAnimation />
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
        </div>
      </Hero>

      {/* ─── Stats ─── */}
      <Stats
        stats={[
          { label: "Downloads", value: 8, suffix: "K+" },
          { label: "Scans Processed", value: 1, suffix: "L+" },
          { label: "Edge Accuracy", value: 99.9, suffix: "%" },
          { label: "Rating", value: 4.5, suffix: "/5" },
        ]}
      />

      {/* ─── Features ─── */}
      <Features
        title="Everything you need for perfect scans."
        subtitle="Packed with intelligent features so you spend less time adjusting and more time doing what matters. All powered by on-device AI."
        features={features}
      />

      {/* ─── How It Works ─── */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <Container>
          <FadeIn className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Three steps to digitize.
            </h2>
            <p className="text-base max-w-md" style={{ color: "var(--text-secondary)" }}>
              No complicated settings. Just point, tap, and share.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-xl border p-6 h-full" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold" style={{ color: "var(--brand)" }}>{step.step}</span>
                    <div className="flex-1 h-px" style={{ backgroundColor: "var(--border-primary)" }} />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Toolkit ─── */}
      <section className="py-20" id="tools">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <FadeIn>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                  More than a scanner.
                </h2>
                <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
                  Over 20 powerful PDF and image tools. Merge, split, edit, sign, protect, and convert — all in one app.
                </p>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="md">Download Scanvo</Button>
                </a>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tools.map((tool, i) => (
                  <FadeIn key={i} delay={i * 0.03}>
                    <div className="flex items-center gap-3 rounded-lg border p-3 transition-colors duration-200" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)" }}>
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--success)" }} />
                      <div>
                        <div className="text-base font-medium" style={{ color: "var(--text-primary)" }}>{tool.title}</div>
                        <div className="text-base" style={{ color: "var(--text-muted)" }}>{tool.desc}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Privacy ─── */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-xl border p-10 text-center" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}>
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "var(--brand-subtle)" }}>
                  <Shield className="w-6 h-6" style={{ color: "var(--brand)" }} />
                </div>
                <div className="text-3xl font-semibold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>100%</div>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>On-Device Processing</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Your documents never leave your phone. No cloud. No servers. No exceptions.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
                The most private document scanner on Android.
              </h2>
              <ul className="space-y-3">
                {[
                  "No account or sign-up required",
                  "All processing done on your device",
                  "No data uploaded to any server",
                  "Works fully offline — no internet needed",
                  "Your scans stay yours, always",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--success)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20">
        <Container>
          <FadeIn className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              What users say.
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Real reviews from Google Play.
            </p>
          </FadeIn>

          <div className="relative group">
            {/* left arrow */}
            <button
              onClick={() => { const el = scrollRef.current; if (!el) return; el.scrollBy({ left: -360, behavior: "smooth" }); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
              style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border-primary)" }}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* right arrow */}
            <button
              onClick={() => { const el = scrollRef.current; if (!el) return; el.scrollBy({ left: 360, behavior: "smooth" }); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
              style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border-primary)" }}
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div
              ref={scrollRef}
              onMouseDown={onDragStart}
              onMouseMove={onDragMove}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onDragEnd}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[340px] snap-start shrink-0"
                >
                  <div
                    className="rounded-xl border p-5 h-full flex flex-col transition-all duration-200"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    {/* avatar + name row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
                        style={{ backgroundColor: "var(--brand-subtle)", color: "var(--brand)" }}
                      >
                        {getInitials(t.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                          {t.name}
                        </div>
                        <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                          {t.date}
                        </div>
                      </div>
                      <StarRating rating={t.rating} />
                    </div>

                    {/* quote */}
                    <div className="relative flex-1">
                      <span
                        className="absolute -top-1 -left-1 text-2xl leading-none select-none"
                        style={{ color: "var(--brand)", opacity: 0.2 }}
                      >
                        &ldquo;
                      </span>
                      <p className="text-sm leading-relaxed pl-3" style={{ color: "var(--text-secondary)" }}>
                        {t.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <Container>
          <FadeIn className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Frequently asked questions.
            </h2>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: openFaq === i ? "var(--brand)" : "var(--border-primary)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left"
                >
                  <span className="text-base font-medium pr-4" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-200"
                    style={{
                      color: "var(--text-muted)",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? "300px" : "0px",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <CTA title="Ready to digitize your life?">
        <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
          Free to download. No sign-up required. Works offline.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
          </a>
          <Link href="/product-details">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </CTA>
    </main>
  );
}
