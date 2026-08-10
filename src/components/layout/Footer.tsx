import { Container } from "@repo/ui/ui";
import { Github, Twitter, Instagram, Youtube, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface FooterProps {
  legalLinks?: { label: string; href: string }[];
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nexbrothers", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/nexbrotherss/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@nex-brothers", label: "YouTube" },
  { icon: Github, href: "https://github.com/nexbrothers", label: "GitHub" },
  { icon: Mail, href: "mailto:nexbrotherss@gmail.com", label: "Email" },
];

const products = [
  { label: "Scanvo", href: "https://scanvo.nexbrothers.com" },
  { label: "Sign Lock", href: "https://signlock.nexbrothers.com" },
  { label: "request-ledger", href: "/products/request-ledger" },
  { label: "All products", href: "/products" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer({ legalLinks }: FooterProps) {
  const defaultLegal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];
  const finalLegal = legalLinks || defaultLegal;

  return (
    <footer style={{ backgroundColor: "var(--ink)", color: "var(--on-ink)" }}>
      <Container>
        <div className="pt-20 pb-16 border-b" style={{ borderColor: "rgba(246,245,241,0.1)" }}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-lg">
              <span className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-none">
                Let&apos;s build something
                <br />
                that ships.
              </span>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold shrink-0 transition-transform active:scale-[0.97]"
              style={{ backgroundColor: "var(--accent)", color: "var(--on-ink)" }}
            >
              Contact
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-[8px] text-sm font-bold"
                style={{ backgroundColor: "var(--on-ink)", color: "var(--ink)" }}
              >
                N
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">NexBrothers</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--on-ink-muted)" }}>
              A two-person software studio shipping small, privacy-leaning tools with intent.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 active:scale-[0.97] hover:text-[var(--on-ink)]"
                  style={{ color: "var(--on-ink-muted)" }}
                  aria-label={social.label}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--on-ink-muted)" }}>
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block hover:text-[var(--on-ink)]"
                    style={{ color: "var(--on-ink-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--on-ink-muted)" }}>
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block hover:text-[var(--on-ink)]"
                    style={{ color: "var(--on-ink-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--on-ink-muted)" }}>
              Legal
            </h3>
            <ul className="space-y-3">
              {finalLegal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block hover:text-[var(--on-ink)]"
                    style={{ color: "var(--on-ink-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "var(--on-ink-muted)" }}>
            &copy; {new Date().getFullYear()} NexBrothers. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--on-ink-muted)" }}>
            Aman Sharma &amp; Anuj Sharma, India
          </p>
        </div>
      </Container>
    </footer>
  );
}
