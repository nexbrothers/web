import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                At Signlock, accessible from signlock.nexbrothers.com, one of our main priorities is the privacy of our visitors. Because we are a zero-knowledge service, our privacy policy is much simpler than most.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                Information we collect
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We collect only the bare minimum required to maintain your account and process payments. This includes your email address, billing information (processed securely by Stripe), and metadata regarding signature requests (e.g., timestamps and recipient email addresses).
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                What we DO NOT collect
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>We do not collect or have access to your documents.</strong> All documents are encrypted on your device before they are transmitted to our servers. We do not have the decryption keys.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                How we use your information
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="space-y-2 list-disc list-inside mt-4" style={{ color: "var(--text-secondary)" }}>
                <li>Facilitate the delivery of signature requests to third parties</li>
                <li>Maintain audit logs for legal compliance</li>
                <li>Process your subscription payments</li>
              </ul>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
