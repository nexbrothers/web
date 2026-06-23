import { Metadata } from "next";
import { Container, Card, Badge } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { 
  Shield, 
  CloudOff, 
  Lock, 
  Layers, 
  Smartphone, 
  Activity, 
  Bell, 
  EyeOff, 
  Database, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | signlock",
  description:
    "Privacy Policy for signlock. Learn how we protect your privacy with a 100% offline-first application locking service by NexBrothers.",
  openGraph: {
    title: "Privacy Policy | signlock",
    description:
      "Privacy Policy for signlock. Learn how we protect your privacy with a 100% offline-first application locking service by NexBrothers.",
    url: "https://nexbrothers.com/signlock/privacypolicy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | signlock",
    description:
      "Privacy Policy for signlock. Learn how we protect your privacy with a 100% offline-first application locking service by NexBrothers.",
  },
  alternates: {
    canonical: "https://nexbrothers.com/signlock/privacypolicy",
  },
};

export default function SignlockPrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: "var(--accent-purple)", opacity: 0.08 }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="info" className="flex items-center gap-1.5 py-1 px-3">
                <Shield className="w-3.5 h-3.5" />
                <span>Security & Privacy First</span>
              </Badge>
              <Badge variant="success" className="flex items-center gap-1.5 py-1 px-3">
                <CloudOff className="w-3.5 h-3.5" />
                <span>100% Offline App</span>
              </Badge>
            </div>
            
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Privacy Policy for <span className="gradient-text">signlock</span>
            </h1>
            
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <Calendar className="w-4 h-4" />
              <span>Last updated: June 23, 2026</span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background), var(--background-secondary))",
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Quick Philosophy Callout */}
            <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
              <FadeIn>
                <Card className="p-6 border border-accent/20" hover={false} gradient>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/10">
                    <CloudOff className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    Offline-First Philosophy
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    <strong>signlock is a 100% offline application.</strong> We do not operate external cloud servers for user data.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    All core functions, including password verification, PIN management, and app locking, take place strictly on your local device.
                  </p>
                </Card>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="p-6" hover={false}>
                  <h4 className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                    Quick Summary
                  </h4>
                  <ul className="space-y-3 text-xs" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Zero servers, zero data transmissions</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Gesture templates saved securely offline</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>No advertising SDKs or analytics trackers</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>No account registration or logins required</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>
            </div>

            {/* Right Column: Detailed Policy Sections */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <FadeIn>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    NexBrothers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the <strong>signlock</strong> mobile application (the &quot;App&quot;). We are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our App.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    By using signlock, you agree to the terms outlined in this policy.
                  </p>
                </div>
              </FadeIn>

              {/* Section 1: Overview */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    1. Overview &amp; &quot;Offline-First&quot; Philosophy
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    The core architecture of signlock guarantees that your data stays under your control. Because signlock does not connect to external servers for operations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 pl-4" style={{ color: "var(--text-secondary)" }}>
                    <li>Your custom lock templates (gestures, signatures, or drawings) are calculated and evaluated entirely on your CPU.</li>
                    <li>No credentials, personal data, or lists of applications are collected or transmitted to any external server.</li>
                    <li>The application works fully without an active internet connection.</li>
                  </ul>
                </div>
              </FadeIn>

              {/* Section 2: Permissions */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    2. Information We Access and How We Use It
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    To provide secure, real-time app-locking capabilities, signlock requires access to certain Android permissions. These are processed exclusively on your device:
                  </p>

                  <div className="space-y-6">
                    {/* Accessibility Service */}
                    <Card className="p-6 border border-border" hover={false}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10 flex-shrink-0">
                          <Lock className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            A. Accessibility Service API (<code className="text-xs">BIND_ACCESSIBILITY_SERVICE</code>)
                          </h3>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>What it does:</strong> signlock uses the Accessibility Service API to detect when you launch or switch to an application that you have marked for protection (detecting window state changes via <code className="text-xs">typeWindowStateChanged</code>).
                          </p>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>Why it is required:</strong> It allows the App to instantly and reliably display the secure drawing unlock screen overlay on top of the protected application before any of its content is visible.
                          </p>
                          <div className="p-3.5 rounded-lg bg-green-500/5 border border-green-500/20 text-xs text-green-400 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Privacy Guarantee:</strong> We do NOT monitor, log, read, store, or transmit any screen content, keystrokes, personal information, or text typed in other applications. The Accessibility Service is used solely as a system trigger to draw the unlock overlay.</span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Query All Packages */}
                    <Card className="p-6 border border-border" hover={false}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 flex-shrink-0">
                          <Smartphone className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            B. Query All Packages Permission (<code className="text-xs">QUERY_ALL_PACKAGES</code>)
                          </h3>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>What it does:</strong> Allows signlock to query the list of installed applications on your device.
                          </p>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>Why it is required:</strong> It is necessary to display a list of your installed apps in the signlock dashboard, enabling you to select which apps you want to protect.
                          </p>
                          <div className="p-3.5 rounded-lg bg-green-500/5 border border-green-500/20 text-xs text-green-400 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Privacy Guarantee:</strong> The list of installed applications remains entirely local to your device. It is never uploaded to any server or shared with any third party.</span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Overlay Permission */}
                    <Card className="p-6 border border-border" hover={false}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 flex-shrink-0">
                          <Layers className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            C. System Alert Window / Overlay Permission (<code className="text-xs">SYSTEM_ALERT_WINDOW</code>)
                          </h3>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>What it does:</strong> Allows the App to draw over other applications.
                          </p>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            <strong>Why it is required:</strong> Used to display the lock screen interface (the drawing canvas and PIN pad) directly over a protected app when it is launched.
                          </p>
                        </div>
                      </div>
                    </Card>

                    {/* Foreground Service */}
                    <Card className="p-6 border border-border" hover={false}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/10 flex-shrink-0">
                          <Activity className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            D. Foreground Service (<code className="text-xs">FOREGROUND_SERVICE</code>)
                          </h3>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>What it does:</strong> Runs a persistent background service.
                          </p>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            <strong>Why it is required:</strong> Ensures the lock detection service remains active and responsive in the background. It displays a persistent notification to prevent the Android operating system from prematurely terminating the protection process.
                          </p>
                        </div>
                      </div>
                    </Card>

                    {/* Notifications */}
                    <Card className="p-6 border border-border" hover={false}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-500/10 flex-shrink-0">
                          <Bell className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                            E. Post Notifications (<code className="text-xs">POST_NOTIFICATIONS</code>)
                          </h3>
                          <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                            <strong>What it does:</strong> Allows the App to send notifications.
                          </p>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            <strong>Why it is required:</strong> Used to show the foreground service notification and other essential security alerts.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </FadeIn>

              {/* Section 3: Local Data Storage & Security */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    3. Local Data Storage &amp; Security
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    Any credentials, credentials templates, or configurations you set up in the App are saved locally on your device in a secure database (utilizing Room and EncryptedSharedPreferences) and are never transmitted online:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="p-4" hover={false}>
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-cyan-400" />
                        <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Drawing Templates</h4>
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        Your custom gesture/signature drawing patterns are processed and stored as math-based stroke coordinates on your device to compare against during unlock attempts.
                      </p>
                    </Card>

                    <Card className="p-4" hover={false}>
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4 text-purple-400" />
                        <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Backup PIN</h4>
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        Your backup PIN is stored in a secure local database and is only used to verify your identity if you choose to unlock using the PIN.
                      </p>
                    </Card>

                    <Card className="p-4" hover={false}>
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="w-4 h-4 text-blue-400" />
                        <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Protected Apps List</h4>
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        The list of package identifiers you choose to lock is stored locally in the database.
                      </p>
                    </Card>

                    <Card className="p-4" hover={false}>
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-orange-400" />
                        <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Unlock Statistics</h4>
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                        Any logged unlock attempt counters or statistics are stored locally on the device to populate your personal dashboard.
                      </p>
                    </Card>
                  </div>
                </div>
              </FadeIn>

              {/* Section 4: Third-Party Services */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    4. Third-Party Services
                  </h2>
                  <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-cyan-500/10 flex-shrink-0 mt-0.5">
                        <EyeOff className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div>
                        <strong style={{ color: "var(--text-primary)" }}>No Analytics or Trackers:</strong> We do not use third-party analytics libraries (such as Google Analytics, Firebase Analytics, or Mixpanel) that collect or track your usage patterns.
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-purple-500/10 flex-shrink-0 mt-0.5">
                        <Shield className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div>
                        <strong style={{ color: "var(--text-primary)" }}>No Advertisements:</strong> signlock is completely ad-free and contains no advertising SDKs that track your device identifier or online behavior.
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500/10 flex-shrink-0 mt-0.5">
                        <CloudOff className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div>
                        <strong style={{ color: "var(--text-primary)" }}>No Third-Party SDK Integrations:</strong> The App does not integrate with any external social networks, cloud storage providers, or authentication services.
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Section 5: Children's Privacy */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    5. Children&apos;s Privacy
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Our App does not collect or solicit personal information from anyone, including children under the age of 13. Since no personal data is collected or transmitted, we do not knowingly hold any information belonging to children.
                  </p>
                </div>
              </FadeIn>

              {/* Section 6: Regulatory Compliance */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    6. Compliance with Global Regulations
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    Because signlock stores all data locally and does not collect or transmit personal identifiers, we satisfy major global privacy mandates by design:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <li><strong>GDPR (General Data Protection Regulation):</strong> We act as neither a controller nor a processor of personal data, as no personal data is transmitted off your device.</li>
                    <li><strong>CCPA (California Consumer Privacy Act):</strong> We do not sell or share any personal information.</li>
                    <li><strong>Google Play Developer Program Policy:</strong> We comply fully with the Prominent Disclosure and Consent requirements for the use of the Accessibility API and high-risk permissions.</li>
                  </ul>
                </div>
              </FadeIn>

              {/* Section 7: Changes */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    7. Changes to This Privacy Policy
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last Updated&quot; date at the top of this Privacy Policy and making the updated policy available inside the App or on our website.
                  </p>
                </div>
              </FadeIn>

              {/* Section 8: Contact */}
              <FadeIn>
                <div className="border-t pt-8" style={{ borderColor: "var(--border)" }}>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                    8. Contact Us
                  </h2>
                  <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    If you have any questions or feedback regarding this Privacy Policy, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="mailto:support@nexbrothers.com" className="group">
                      <Card className="p-5 border border-border group-hover:border-accent transition-all duration-300" hover={false}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Email Support</h4>
                            <p className="text-sm font-semibold transition-colors group-hover:text-accent" style={{ color: "var(--text-primary)" }}>
                              support@nexbrothers.com
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>

                    <a href="https://nexbrothers.com" target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="p-5 border border-border group-hover:border-accent-purple transition-all duration-300" hover={false}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                            <Globe className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Official Website</h4>
                            <p className="text-sm font-semibold transition-colors group-hover:text-accent-purple" style={{ color: "var(--text-primary)" }}>
                              nexbrothers.com
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
