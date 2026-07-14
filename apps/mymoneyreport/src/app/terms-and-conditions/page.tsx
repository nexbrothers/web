import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - My Money Report",
  description: "Terms and conditions for using My Money Report - a 100% offline expense tracking application by NexBrothers.",
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.08 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#5844EE" }}>
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(88, 68, 238, 0.15)", color: "#5844EE" }}
              >
                My Money Report
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Terms & Conditions
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Last updated: July 4, 2026
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="policy-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using My Money Report (&quot;the App&quot;), you agree to be
                  bound by these Terms & Conditions. If you do not agree with any part of these
                  terms, you should not use the App.
                </p>
              </div>

              <div className="policy-section">
                <h2>2. Description of Service</h2>
                <p>
                  My Money Report is a personal finance tracking application that helps users
                  track expenses, manage budgets, set financial goals, and analyze spending
                  patterns. The App operates entirely offline on your device and does not
                  require an internet connection for its core functionality.
                </p>
              </div>

              <div className="policy-section">
                <h2>3. No Financial Advice</h2>
                <p>
                  The App provides tools for tracking and visualizing your financial data. It
                  does <strong>not</strong> provide financial advice, investment recommendations,
                  tax advice, or any form of professional financial guidance. You are solely
                  responsible for your financial decisions.
                </p>
              </div>

              <div className="policy-section">
                <h2>4. Use License</h2>
                <p>
                  NexBrothers grants you a limited, non-exclusive, non-transferable license to
                  use the App for personal, non-commercial purposes. You agree not to:
                </p>
                <ul>
                  <li>Modify, reverse engineer, decompile, or disassemble the App</li>
                  <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Distribute, sublicense, or sell the App to third parties</li>
                  <li>Remove or alter any copyright or proprietary notices</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>5. Data Responsibility</h2>
                <p>
                  All data you enter into the App is stored locally on your device. You are
                  solely responsible for:
                </p>
                <ul>
                  <li>Maintaining backups of your financial data</li>
                  <li>Protecting your device with appropriate security measures</li>
                  <li>Any data loss resulting from device failure, uninstallation, or clearing app data</li>
                </ul>
                <div className="highlight-box">
                  <p>
                    <strong>Important:</strong> NexBrothers cannot recover your financial data under
                    any circumstances, as we never have access to it.
                  </p>
                </div>
              </div>

              <div className="policy-section">
                <h2>6. SMS Permissions</h2>
                <p>
                  The App may request SMS permissions to automatically detect and import
                  financial transactions from SMS messages. This feature is entirely optional
                  and can be disabled at any time. SMS content is processed locally on your
                  device and is never transmitted to NexBrothers or any third party.
                </p>
              </div>

              <div className="policy-section">
                <h2>7. Intellectual Property</h2>
                <p>
                  The App, including its code, design, branding, and content, is the
                  intellectual property of NexBrothers. You may not reproduce, modify, or
                  distribute any part of the App without our written consent.
                </p>
              </div>

              <div className="policy-section">
                <h2>8. Limitation of Liability</h2>
                <p>
                  The App is provided &quot;as is&quot; without any warranty, express or implied.
                  NexBrothers shall not be liable for any damages arising from the use or
                  inability to use the App, including but not limited to data loss, financial
                  loss, or any indirect damages.
                </p>
              </div>

              <div className="policy-section">
                <h2>9. Changes to Terms</h2>
                <p>
                  We reserve the right to update these terms at any time. Changes will be
                  effective immediately upon posting. Continued use of the App after changes
                  constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="policy-section">
                <h2>10. Governing Law</h2>
                <p>
                  These terms are governed by the laws of India. Any disputes shall be subject
                  to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
                </p>
              </div>

              <div className="policy-section">
                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about these terms, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> support@nexbrothers.com</p>
                  <p><strong>Company:</strong> NexBrothers</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
