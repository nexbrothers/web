import { Container } from "@/components/ui";
import { Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";
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
      className="relative border-t mt-24"
      style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)" }}
    >
      <Container className="relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <span className="brand-mark" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1rem', display: 'grid', placeItems: 'center', background: 'var(--charcoal)', color: 'var(--cream)', borderRadius: '50%', fontFamily: 'var(--serif)' }}>N</span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--ink)", fontFamily: "var(--serif)" }}
                >
                  NexBrothers
                </span>
              </Link>
              <p 
                className="mb-6 max-w-sm text-sm"
                style={{ color: "var(--muted)", lineHeight: 1.7 }}
              >
                Building tomorrow's technology, today. We create innovative apps
                and digital solutions that make a real difference.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border hover:-translate-y-1"
                    style={{ 
                      backgroundColor: "var(--panel)",
                      borderColor: "var(--line)",
                      color: "var(--ink)",
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 
                className="mb-4 text-sm uppercase tracking-wider font-bold"
                style={{ color: "var(--oxide)", fontFamily: "var(--mono)" }}
              >
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:underline text-sm"
                      style={{ color: "var(--muted)", textUnderlineOffset: "4px" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 
                className="mb-4 text-sm uppercase tracking-wider font-bold"
                style={{ color: "var(--oxide)", fontFamily: "var(--mono)" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span 
                        className="cursor-not-allowed text-sm"
                        style={{ color: "var(--muted)", opacity: 0.7 }}
                      >
                        {link.label}{" "}
                        <span className="text-xs" style={{ color: "var(--oxide)" }}>(Soon)</span>
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition-colors hover:underline text-sm"
                        style={{ color: "var(--muted)", textUnderlineOffset: "4px" }}
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
              <h4 
                className="mb-4 text-sm uppercase tracking-wider font-bold"
                style={{ color: "var(--oxide)", fontFamily: "var(--mono)" }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:underline text-sm"
                      style={{ color: "var(--muted)", textUnderlineOffset: "4px" }}
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
        <div className="site-footer" style={{ borderTop: "1px solid var(--line)", padding: "1.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "uppercase", fontSize: "0.72rem", fontFamily: "var(--mono)", color: "var(--muted)" }}>
          <span>NexBrothers</span>
          <span>Made with ❤️ in India</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
