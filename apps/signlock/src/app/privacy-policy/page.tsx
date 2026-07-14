import { Metadata } from "next";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";
import { ShieldCheck, WifiOff, Lock, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - SignLock",
  description: "SignLock privacy policy. Your data never leaves your device. Fully offline, no data collection, zero-knowledge architecture.",
};

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Privacy Policy
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
              {/* Privacy Promise */}
              <div
                className="rounded-2xl p-8 mb-12"
                style={{
                  backgroundColor: "var(--background-card)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                    }}
                  >
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      Our Privacy Promise
                    </h2>
                    <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      SignLock operates entirely on your device. We never have access to your drawing, PIN, or the apps you protect. There is no account system, no cloud sync, and no data collection. What stays on your device stays on your device — period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="policy-section">
                <h2>What Information We Collect</h2>
                <p>
                  SignLock is designed to be completely private. We collect no personal information, no usage data, and no biometric data.
                </p>
                <p>
                  <strong>We do not collect or transmit:</strong>
                </p>
                <ul>
                  <li>Your drawing or signature patterns</li>
                  <li>Your backup PIN</li>
                  <li>The list of apps you choose to protect</li>
                  <li>Any personal or device identifiers</li>
                  <li>Usage analytics or statistics</li>
                  <li>Location data</li>
                  <li>Contact or account information</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>How Your Data Is Stored</h2>
                <p>
                  All data is stored locally on your device using Android's built-in secure storage mechanisms:
                </p>
                <ul>
                  <li><strong>Drawing Templates:</strong> Encrypted using AES-256/GCM via Android Keystore before being stored in the local Room database.</li>
                  <li><strong>Backup PIN:</strong> Encrypted using the same Android Keystore-based encryption before storage.</li>
                  <li><strong>Protected Apps List:</strong> Stored locally in Room database, never transmitted.</li>
                  <li><strong>Preferences:</strong> Stored in Android DataStore, local only.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>Third-Party Services</h2>
                <p>
                  SignLock uses the following third-party services, which may collect non-identifiable data as governed by their own privacy policies:
                </p>
                <ul>
                  <li><strong>Firebase Analytics & Crashlytics:</strong> Used for app stability monitoring and crash reporting. No personal data is collected. Anonymous usage statistics help us improve the app.</li>
                  <li><strong>Sentry:</strong> Used for error tracking and performance monitoring.</li>
                  <li><strong>Google Play Billing:</strong> Used for processing premium subscription payments. No payment information is handled directly by SignLock.</li>
                  <li><strong>AdMob:</strong> Used to display advertisements in the free version. Ad personalization follows Google's advertising privacy policy.</li>
                </ul>
                <p>
                  <strong>Important:</strong> These services are only used for app functionality (crash reporting, payments, ads). Your drawing, PIN, and app selection data are never shared with any third party.
                </p>
              </div>

              <div className="policy-section">
                <h2>Data Security</h2>
                <p>
                  SignLock implements industry-standard security measures:
                </p>
                <ul>
                  <li>AES-256/GCM encryption for all sensitive data via Android Keystore</li>
                  <li>Hardware-backed encryption keys that never leave secure hardware</li>
                  <li>FLAG_SECURE on the unlock screen to prevent screenshots/screen recording</li>
                  <li>Automatic data reset if encryption key corruption is detected</li>
                  <li>No network permissions required for core functionality</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>Data Deletion</h2>
                <p>
                  Since all data is stored locally on your device, you can delete all data at any time by:
                </p>
                <ul>
                  <li>Using the "Reset Application" option in SignLock's Settings tab</li>
                  <li>Uninstalling the app from your device</li>
                  <li>Clearing the app's data from Android Settings</li>
                </ul>
                <p>
                  Any of these actions will permanently delete your drawing template, backup PIN, protected apps list, and all preferences from your device.
                </p>
              </div>

              <div className="policy-section">
                <h2>Children&apos;s Privacy</h2>
                <p>
                  SignLock does not knowingly collect any personal information from children. The app is not directed at children under the age of 13.
                </p>
              </div>

              <div className="policy-section">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="policy-section">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about this privacy policy or SignLock's privacy practices, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> support@nexbrothers.com</p>
                  <p><strong>Website:</strong> <a href="https://signlock.nexbrothers.com">signlock.nexbrothers.com</a></p>
                </div>
              </div>

              <div
                className="rounded-xl p-6 mt-10 flex gap-4 items-start"
                style={{
                  backgroundColor: "rgba(0, 212, 255, 0.05)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <WifiOff className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    Fully Offline Operation
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    SignLock does not require internet access for its core functionality. Your data never leaves your device. No accounts, no cloud, no tracking.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
