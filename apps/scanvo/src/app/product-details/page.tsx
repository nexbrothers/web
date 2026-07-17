"use client";

import { Container, Button } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import {
  CheckCircle,
  Shield,
  FileText,
  Scan,
  Sparkles,
  Star,
  Download,
} from "lucide-react";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nexbrothers.scanvo";

const features = [
  {
    icon: <Scan className="w-5 h-5" />,
    title: "Smart Document Scanning",
    desc: "Real-time edge detection with auto-crop and perspective correction. Powered by OpenCV.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Image Enhancement",
    desc: "CLAHE enhancement, shadow removal, denoising, and auto white balance for crystal-clear scans.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "OCR Text Recognition",
    desc: "ML Kit-powered OCR extracts text from scans. Supports 50+ languages. Fully offline.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Private & Offline",
    desc: "All processing happens on your device. No data is ever uploaded to any server.",
  },
];

const specs = [
  { label: "Platform", value: "Android 7.0+ (API 24+)" },
  { label: "Processing", value: "100% On-Device" },
  { label: "Edge Detection", value: "OpenCV (Canny, Sobel, Morphology)" },
  { label: "OCR Engine", value: "ML Kit Text Recognition" },
  { label: "Barcode Scanner", value: "ML Kit Barcode Scanning" },
  { label: "Image Enhancement", value: "CLAHE, Denoising, Shadow Removal" },
  { label: "PDF Engine", value: "Apache PDFBox" },
  { label: "Export Formats", value: "PDF, PNG, JPEG" },
  { label: "Export Quality", value: "60 / 80 / 95" },
  { label: "Export DPI", value: "150 / 200 / 300 DPI" },
  { label: "Background Removal", value: "ONNX Runtime AI" },
  { label: "Backup", value: "Google Drive Integration" },
];

export default function ProductDetails() {
  return (
    <main>
      <section className="pt-28 pb-12">
        <Container>
          <FadeIn className="max-w-xl">
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: "var(--brand)" }}>
              Product Details
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Your complete document scanner
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Scanvo is an Android document scanner that turns your phone into a
              powerful document management system. Everything processes
              offline-first on your device.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-xl border p-5" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "var(--brand-subtle)" }}>
                    <div style={{ color: "var(--brand)" }}>{f.icon}</div>
                  </div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <Container>
          <FadeIn className="mb-12">
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: "var(--brand)" }}>
              Technical Specifications
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Built with powerful technology
            </h2>
          </FadeIn>

          <div className="max-w-2xl">
            <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}>
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: i < specs.length - 1 ? "1px solid var(--border-primary)" : "none" }}
                >
                  <span className="text-base" style={{ color: "var(--text-secondary)" }}>{spec.label}</span>
                  <span className="text-base font-medium text-right ml-4" style={{ color: "var(--text-primary)" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <FadeIn className="mb-12">
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: "var(--brand)" }}>
              Document Toolkit
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Over 20 powerful tools
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Scanvo includes a complete document toolkit organized into three categories.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                title: "PDF Tools",
                tools: [
                  "Protect Document", "Remove Password", "Merge PDF", "Split PDF",
                  "Organize Pages", "Adjust Size", "Add Page Numbers", "Add Watermark",
                  "Edit PDF", "Sign PDF", "Smart Highlight", "Booklet Printing",
                ],
              },
              {
                title: "Converter Tools",
                tools: [
                  "JPG to PDF", "PDF to JPG", "Text to PDF", "PDF to Text",
                  "Word to PDF", "PDF to Word", "Excel to PDF", "PDF to ZIP Images",
                ],
              },
              {
                title: "Utility Tools",
                tools: ["Merge Images", "Clean Document", "Pixel Studio", "QR Scanner", "Photo Lab"],
              },
            ].map((category, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-xl border p-5" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-primary)" }}>
                  <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text-primary)" }}>{category.title}</h3>
                  <ul className="space-y-2">
                    {category.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2 text-base" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--success)" }} />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <Container>
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: "var(--brand)" }}>
              Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Start free. Upgrade when you need more.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <FadeIn>
              <div className="rounded-xl border p-6 flex flex-col" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-primary)" }}>
                <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>Free</h3>
                <div className="text-2xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
                  $0
                  <span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>/mo</span>
                </div>
                <ul className="space-y-2.5 flex-1 text-base" style={{ color: "var(--text-secondary)" }}>
                  {[
                    "Unlimited document scanning",
                    "Smart edge detection & correction",
                    "Image enhancement & OCR",
                    "PDF, PNG, JPEG export",
                    "QR & barcode scanner",
                    "ID card mode",
                    "Folder organization",
                    "Google Drive backup",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--success)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="md" className="w-full">
                      <Download className="w-4 h-4 mr-1.5" />
                      Get Started Free
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-xl border p-6 flex flex-col relative" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--brand)" }}>
                <div className="absolute top-0 right-4 -translate-y-1/2 rounded-full px-3 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: "var(--brand)" }}>
                  Popular
                </div>
                <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>Scanvo Premium</h3>
                <div className="text-2xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
                  ₹150
                  <span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>/mo</span>
                </div>
                <ul className="space-y-2.5 flex-1 text-base" style={{ color: "var(--text-secondary)" }}>
                  <li className="font-semibold" style={{ color: "var(--text-primary)" }}>Everything in Free, plus:</li>
                  {[
                    "Complete ad-free experience",
                    "Unlimited high-speed exports",
                    "All premium PDF tools",
                    "Booklet printing",
                    "Pixel Studio (image editor)",
                    "Photo Lab (passport photos)",
                    "24/7 priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--success)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="md" className="w-full">
                      <Star className="w-4 h-4 mr-1.5" />
                      Go Premium
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-4">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              All plans include 100% on-device processing. Cancel anytime.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <FadeIn className="max-w-md mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
              Download Scanvo today
            </h2>
            <p className="text-base mb-6" style={{ color: "var(--text-secondary)" }}>
              Free to download. No sign-up required.
            </p>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block transition-opacity hover:opacity-80">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
            </a>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
