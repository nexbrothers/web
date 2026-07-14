import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { Scale, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - SignLock",
  description: "SignLock terms and conditions. Understand the rules and regulations for using the SignLock Android application.",
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--background)" }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: "var(--accent)", opacity: 0.1 }} />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(0, 212, 255, 0.08)",
                border: "1px solid rgba(0, 212, 255, 0.22)",
                color: "var(--accent)",
              }}
            >
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">Terms of Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Terms & Conditions
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--background), var(--background-secondary))" }} />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                Welcome to SignLock! These terms and conditions outline the rules and regulations for using the SignLock Android application, developed and published by NexBrothers.
              </p>

              <div
                className="rounded-2xl p-6 mb-10 flex gap-4 items-start"
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.08)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                }}
              >
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#F59E0B]" />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Important: Local Data Responsibility
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    SignLock operates entirely on your device. All data — including your drawing template, backup PIN, and app preferences — is stored locally. We cannot recover this data if you uninstall the app, clear app data, or forget your drawing and PIN. You are solely responsible for maintaining access to your device.
                  </p>
                </div>
              </div>

              <div className="policy-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using SignLock, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use the application.
                </p>
              </div>

              <div className="policy-section">
                <h2>2. Use License</h2>
                <p>
                  Permission is granted to download and use SignLock on your personal Android device(s) for personal, non-commercial use. This is a license, not a transfer of title. Under this license, you may not:
                </p>
                <ul>
                  <li>Modify, reverse engineer, decompile, or disassemble the application</li>
                  <li>Use the application for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Attempt to bypass, disable, or circumvent the app's security features</li>
                  <li>Distribute, sublicense, rent, lease, or sell the application to third parties</li>
                  <li>Remove any copyright or proprietary notices from the application</li>
                  <li>Use the application to lock system-critical applications that could render the device unusable</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>3. No Data Collection Warranty</h2>
                <p>
                  SignLock is designed to operate fully offline. We do not collect, store, transmit, or have access to:
                </p>
                <ul>
                  <li>Your drawing or signature patterns</li>
                  <li>Your backup PIN</li>
                  <li>The list of apps you choose to protect</li>
                  <li>Any personal or device identifiers</li>
                </ul>
                <p>
                  However, the application integrates third-party services (Firebase, Sentry, AdMob, Google Play Billing) that may collect anonymized data as governed by their own terms and privacy policies. These services are used solely for crash reporting, analytics, advertising, and payment processing.
                </p>
              </div>

              <div className="policy-section">
                <h2>4. Limitation of Liability</h2>
                <p>
                  SignLock is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. NexBrothers makes no warranties, expressed or implied, regarding the application&apos;s performance, reliability, or suitability for any particular purpose.
                </p>
                <p>
                  <strong>In no event shall NexBrothers be liable for:</strong>
                </p>
                <ul>
                  <li>Loss of access to your own apps or data due to forgotten drawings or PINs</li>
                  <li>Any damage to your device arising from the use of the application</li>
                  <li>Any indirect, incidental, or consequential damages arising from the use or inability to use the application</li>
                  <li>Third-party actions, including but not limited to unauthorized access to your device</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>5. Accessibility Service</h2>
                <p>
                  SignLock requires Accessibility Service permission to function. This permission is used exclusively to detect when a protected app is opened, so the lock screen can be shown. We do not use this permission for any other purpose, including:
                </p>
                <ul>
                  <li>Reading or collecting app content or data</li>
                  <li>Monitoring user behavior or keystrokes</li>
                  <li>Transmitting any information to external servers</li>
                </ul>
                <p>
                  The Accessibility Service is used solely for the core functionality of showing the unlock screen when a protected app is launched.
                </p>
              </div>

              <div className="policy-section">
                <h2>6. Premium Subscription</h2>
                <p>
                  SignLock offers a premium subscription that unlocks additional features. Subscription terms, including pricing and renewal, are handled by Google Play Billing and are subject to Google&apos;s terms and conditions.
                </p>
                <ul>
                  <li>Premium features are provided on a subscription basis</li>
                  <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                  <li>Cancellation can be managed through Google Play Store settings</li>
                  <li>Premium features are non-transferable between devices or accounts</li>
                  <li>NexBrothers reserves the right to modify premium features with reasonable notice</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>7. Updates and Modifications</h2>
                <p>
                  NexBrothers may release updates to SignLock, including bug fixes, feature improvements, or security patches. These terms apply to all versions of the application. We reserve the right to modify or discontinue the application, temporarily or permanently, with or without notice.
                </p>
              </div>

              <div className="policy-section">
                <h2>8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>

              <div className="policy-section">
                <h2>9. Contact Information</h2>
                <p>
                  For any questions, concerns, or reports regarding these terms and conditions, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> support@nexbrothers.com</p>
                  <p><strong>Developer:</strong> NexBrothers</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
