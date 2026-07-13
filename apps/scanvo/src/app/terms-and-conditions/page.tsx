import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";

export default function TermsAndConditions() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.1 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Terms & Conditions
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>Last updated: {new Date().toLocaleDateString()}</p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Welcome to Scanvo!
              </p>
              <p className="leading-relaxed mt-4" style={{ color: "var(--text-secondary)" }}>
                These terms and conditions outline the rules and regulations for the use of NexBrothers's Website and Application, located at scanvo.nexbrothers.com.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                1. Terms
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                By accessing this Website, accessible from scanvo.nexbrothers.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                2. Use License
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Permission is granted to temporarily download one copy of the materials (information or software) on Scanvo's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 list-disc list-inside mt-4" style={{ color: "var(--text-secondary)" }}>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on Scanvo's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                3. Disclaimer
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                All the materials on Scanvo's Website are provided "as is". Scanvo makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Scanvo does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4" style={{ color: "var(--text-primary)" }}>
                4. Limitations
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Scanvo or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Scanvo's Website, even if Scanvo or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
