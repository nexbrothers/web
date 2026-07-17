"use client";

import { Container } from "./ui";
import { Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface FooterProps {
  productName?: string;
  legalLinks?: { label: string; href: string }[];
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nexbrothers", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/nexbrotherss/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@nex-brothers", label: "YouTube" },
  { icon: Github, href: "https://github.com/nexbrothers", label: "GitHub" },
  { icon: Mail, href: "mailto:nexbrotherss@gmail.com", label: "Email" },
];

export function Footer({ productName = "NexBrothers", legalLinks }: FooterProps) {
  const defaultLegal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const products = [
    { label: "Playro", href: "https://nexbrothers.com/playro" },
    { label: "Coming Soon", href: "https://nexbrothers.com/products" },
  ];

  const company = [
    { label: "About", href: "https://nexbrothers.com/about" },
    { label: "Contact", href: "https://nexbrothers.com/contact" },
    { label: "Careers", href: "#", disabled: true },
  ];

  const finalLegal = legalLinks || defaultLegal;

  return (
    <footer style={{ borderTop: "1px solid var(--border-primary)", backgroundColor: "var(--bg-primary)" }}>
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Link href="https://nexbrothers.com" className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/favicon_io/android-chrome-512x512.png"
                    alt="NexBrothers Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  {productName === "NexBrothers" ? "NexBrothers" : `${productName} by NexBrothers`}
                </span>
              </Link>
              <p className="text-sm mb-5 max-w-sm" style={{ color: "var(--text-secondary)" }}>
                Building tomorrow&apos;s technology, today. We create innovative apps
                and digital solutions that make a real difference.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Products
              </h3>
              <ul className="space-y-2.5">
                {products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Company
              </h3>
              <ul className="space-y-2.5">
                {company.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {link.label}
                        <span className="text-xs ml-1" style={{ color: "var(--brand)" }}>Soon</span>
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Legal
              </h3>
              <ul className="space-y-2.5">
                {finalLegal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-5 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "var(--border-primary)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} NexBrothers. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Made with <span style={{ color: "var(--danger)" }}>&#9829;</span> in India
          </p>
        </div>
      </Container>
    </footer>
  );
}
