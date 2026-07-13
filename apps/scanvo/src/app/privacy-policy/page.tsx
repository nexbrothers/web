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
                At Scanvo, accessible from scanvo.nexbrothers.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Scanvo and how we use it.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                Information we collect
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p className="leading-relaxed mt-4" style={{ color: "var(--text-secondary)" }}>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                How we use your information
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="space-y-2 list-disc list-inside mt-4" style={{ color: "var(--text-secondary)" }}>
                <li>Provide, operate, and maintain our website and app</li>
                <li>Improve, personalize, and expand our website and app</li>
                <li>Understand and analyze how you use our website and app</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                Document Processing and Storage
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Documents uploaded and processed through Scanvo are encrypted at rest. We do not use your private documents to train public AI models unless you explicitly opt-in.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
