import { Container } from "@repo/ui/ui";
import { Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";
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
    <footer
      style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--background)" }}
    >
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span
                className="font-display text-xl font-semibold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                NexBrothers
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              We build digital products, applications, and software systems
              for people and businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 active:scale-[0.97]"
                  style={{ color: "var(--text-muted)" }}
                  aria-label={social.label}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {finalLegal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 active:scale-[0.97] inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="py-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            NEXBROTHERS / {new Date().getFullYear()}
            <br className="sm:hidden" />
            <span className="sm:ml-1">INDEPENDENT SOFTWARE COMPANY</span>
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} NexBrothers. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
