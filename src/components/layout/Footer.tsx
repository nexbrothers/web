import { Container } from "@/components/ui";
import { Zap, Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  products: [
    { label: "Playro", href: "/playro" },
    { label: "Coming Soon", href: "/products" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#", disabled: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nexbrothers", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/nexbrothers/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@nex-brothers", label: "YouTube" },
  { icon: Github, href: "https://github.com/nexbrothers", label: "GitHub" },
  { icon: Mail, href: "mailto:support@nexbrothers.com", label: "Email" },
];

export function Footer() {
  return (
    <footer 
      className="relative border-t"
      style={{ 
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -bottom-1/2 left-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent)", opacity: 0.05 }}
        />
        <div 
          className="absolute -bottom-1/2 right-1/4 w-96 h-96 rounded-full blur-[128px]" 
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.05 }}
        />
      </div>

      <Container className="relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span 
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  NexBrothers
                </span>
              </Link>
              <p 
                className="mb-6 max-w-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Building tomorrow&apos;s technology, today. We create innovative apps
                and digital solutions that make a real difference.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: "var(--background-card)",
                      color: "var(--text-secondary)",
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 
                className="font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 
                className="font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span 
                        className="cursor-not-allowed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}{" "}
                        <span className="text-xs text-[#7C3AED]">(Soon)</span>
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 
                className="font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="py-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} NexBrothers. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Made with <span className="text-red-500">❤️</span> in India
          </p>
        </div>
      </Container>
    </footer>
  );
}
