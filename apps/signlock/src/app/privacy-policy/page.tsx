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
              Privacy Policy for SignLock
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              <strong>Effective Date:</strong> July 30, 2026 &mdash; <strong>Last Updated:</strong> July 30, 2026
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
                      SignLock operates entirely on your device. We never have access to your drawing, PIN, or the apps you protect. There is no account system, no cloud sync, and no data collection. What stays on your device stays on your device &mdash; period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="policy-section">
                <h2>1. Introduction</h2>
                <p>
                  NexBrothers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal data of our users (&quot;you&quot; or &quot;user&quot;). This Privacy Policy explains how we collect, use, store, process, share, and protect your information when you use:
                </p>
                <ol>
                  <li>The <strong>SignLock: Signature App Lock</strong> mobile application for Android (&quot;App&quot; or &quot;Application&quot;), including all sub-features such as Signature Lock, Backup PIN, Drawing Privacy Mode, Custom Wallpapers &amp; Themes, App Locking Schedules, and Guardian Remote Lock Control.</li>
                  <li>The official NexBrothers website located at <a href="https://www.nexbrothers.com">https://www.nexbrothers.com</a> (&quot;Website&quot;).</li>
                </ol>
                <p>
                  This Privacy Policy is designed to comply with:
                </p>
                <ul>
                  <li><strong>Google Play User Data Policy</strong></li>
                  <li><strong>Google Play Developer Program Policies</strong></li>
                  <li><strong>Google Play Data Safety Requirements</strong></li>
                  <li><strong>Google Play Accessibility API Policy</strong></li>
                  <li><strong>Google Play Permissions Policy</strong></li>
                  <li><strong>Google Play Advertising Policy</strong></li>
                  <li><strong>General Data Protection Regulation (GDPR)</strong></li>
                  <li><strong>California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA)</strong></li>
                  <li><strong>Other applicable international data protection laws</strong></li>
                </ul>
                <p>
                  Please read this document carefully to understand our privacy practices. By installing, accessing, or using SignLock or our Website, you agree to the collection and use of information in accordance with this policy. If you do not agree with any part of this policy, please do not install or use the Application or Website.
                </p>
              </div>

              <div className="policy-section">
                <h2>2. Core Privacy Philosophy: Offline-First &amp; Privacy-By-Design</h2>
                <p>
                  SignLock is engineered with an <strong>offline-first, privacy-by-design architecture</strong>:
                </p>
                <ul>
                  <li><strong>Local Authentication &amp; Security:</strong> Your signature gesture patterns, backup PIN numbers, application lock lists, and personal settings are stored exclusively on your device, protected by hardware-backed cryptographic encryption (AES-256-GCM via the Android Keystore).</li>
                  <li><strong>No Cloud Upload of Biometric/Gesture Passwords:</strong> Your signature coordinates and backup PINs are <strong>never</strong> uploaded to our servers, third-party clouds, or any remote infrastructure.</li>
                  <li><strong>End-to-End Encrypted Remote Features:</strong> Optional remote management capabilities (Guardian Remote Lock Control) utilize zero-knowledge, end-to-end encryption (E2EE) via ECDH key exchange. Remote policy updates are encrypted on-device before transmission, preventing anyone &mdash; including NexBrothers and Google &mdash; from viewing your policy content.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>3. Information We Collect and How We Use It</h2>

                <h3>A. Information Stored Locally on Your Device (Not Uploaded)</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--text-secondary)" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>
                        <th className="p-3 text-left font-semibold">Information Type</th>
                        <th className="p-3 text-left font-semibold">Description &amp; Implementation Details</th>
                        <th className="p-3 text-left font-semibold">Purpose &amp; Necessity</th>
                        <th className="p-3 text-left font-semibold">Remote Upload Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Signature Gesture Data</strong></td>
                        <td className="p-3">Vector coordinates, normalized stroke ratios, directional vectors, stroke timestamps, and mathematical gesture templates created when you configure or confirm your signature unlock.</td>
                        <td className="p-3">Required to verify your identity when unlocking protected applications. Evaluated locally using custom Chamfer distance and stroke geometry comparison algorithms.</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Encrypted in local Room DB via Android Keystore AES-256-GCM; never leaves device).</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Backup PIN Code</strong></td>
                        <td className="p-3">4-digit or 6-digit numeric backup passcode created by the user.</td>
                        <td className="p-3">Provides an alternative unlock method if signature drawing fails or is unavailable.</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Encrypted in local Room DB via Android Keystore AES-256-GCM; verified using constant-time hash comparison).</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Protected Applications List</strong></td>
                        <td className="p-3">Package names (e.g., <code>com.whatsapp</code>, <code>com.instagram.android</code>) of applications selected by the user for locking.</td>
                        <td className="p-3">Required to enable the Accessibility Service to detect when a protected application is launched and display the signature unlock screen overlay.</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Stored in encrypted Room SQLite database).</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Lock Schedules &amp; Rules</strong></td>
                        <td className="p-3">Time schedules, active days, grace period settings, and lock policy preferences configured by the user.</td>
                        <td className="p-3">Enables time-based conditional app locking (e.g., locking specific apps during work or sleep hours).</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Stored in local DataStore &amp; Room DB).</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Unlock Attempt Records</strong></td>
                        <td className="p-3">Timestamp of unlock attempt, success/failure status, package name, and verification method (Drawing vs. PIN).</td>
                        <td className="p-3">Stored in local Room database (<code>unlock_attempts</code> table) to calculate unlock statistics, enforce exponential lockout backoff, and show security attempt logs.</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Stored in local SQLite DB; never uploaded).</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Package Installation Events</strong></td>
                        <td className="p-3">Event notification when a new application is installed on your Android device (<code>ACTION_PACKAGE_ADDED</code>).</td>
                        <td className="p-3">Intercepted by <code>PackageInstallReceiver</code> in Guardian mode to prompt or apply lock rules to newly installed applications immediately.</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>STRICTLY LOCAL</strong> (Processed on-device).</td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Support &amp; Custom Theme Email Requests</strong></td>
                        <td className="p-3">Email messages, design requests, bug reports, or support tickets explicitly submitted by the user.</td>
                        <td className="p-3">Contains user message, app version, device manufacturer/model, Android OS version, and system timestamp sent to <code>nexbrotherss@gmail.com</code> via user&apos;s email client (<code>Intent.ACTION_SENDTO</code>).</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>USER-INITIATED EMAIL</strong> (Sent only when user explicitly taps submit/contact).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>B. Information Processed for Remote Sync (Guardian Mode)</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--text-secondary)" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>
                        <th className="p-3 text-left font-semibold">Information Type</th>
                        <th className="p-3 text-left font-semibold">Description &amp; Implementation Details</th>
                        <th className="p-3 text-left font-semibold">Purpose &amp; Necessity</th>
                        <th className="p-3 text-left font-semibold">Remote Upload &amp; Encryption Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Guardian Pairing Payload &amp; Policy Commands</strong></td>
                        <td className="p-3">Paired device IDs, encrypted policy rules (such as lists of apps to lock, schedule limits, and lock states), and public key exchange parameters.</td>
                        <td className="p-3">Allows a paired Guardian device (e.g., parent/controller) to manage app locking rules on a Protected target device (e.g., child/managed device).</td>
                        <td className="p-3"><strong style={{ color: "var(--accent)" }}>END-TO-END ENCRYPTED</strong> (Encrypted on-device using AES-256-GCM with ECDH keys before transmission via Firebase Cloud Firestore. Firebase stores only encrypted binary blobs and anonymous Firebase Auth UIDs; plaintext rules are never visible on servers).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>C. Technical &amp; Diagnostic Information (Automated Collection)</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--text-secondary)" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>
                        <th className="p-3 text-left font-semibold">Information Type</th>
                        <th className="p-3 text-left font-semibold">Description &amp; Implementation Details</th>
                        <th className="p-3 text-left font-semibold">Purpose &amp; Necessity</th>
                        <th className="p-3 text-left font-semibold">Third-Party Service Provider</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Crash &amp; Diagnostic Logs</strong></td>
                        <td className="p-3">App crash stack traces, system event breadcrumbs, OS version, device hardware model, screen resolution, and build architecture.</td>
                        <td className="p-3">Enables our engineering team to identify, troubleshoot, and fix bugs, ANRs (Application Not Responding), and stability issues.</td>
                        <td className="p-3"><strong>Sentry Android SDK</strong> (<code>send-default-pii=false</code>, <code>attach-screenshot=false</code>) &amp; <strong>Firebase Crashlytics</strong>.</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Aggregated App Analytics</strong></td>
                        <td className="p-3">Anonymous usage statistics, screen view counts, feature adoption metrics, performance durations, and remote configuration flags.</td>
                        <td className="p-3">Helps us analyze app performance, improve user interface design, and deploy feature flags.</td>
                        <td className="p-3"><strong>Firebase Analytics</strong> &amp; <strong>Firebase Remote Config</strong>.</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Advertising Identifiers</strong></td>
                        <td className="p-3">Android Advertising ID (AD_ID), IP address (truncated for geolocation), ad interaction events, and ad placement metrics (free version only).</td>
                        <td className="p-3">Serves non-intrusive banner, interstitial, or rewarded advertisements to free tier users and measures ad campaign performance.</td>
                        <td className="p-3"><strong>Google Mobile Ads (AdMob)</strong> SDK.</td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Subscription &amp; Billing Data</strong></td>
                        <td className="p-3">Purchase status, entitlement active states, subscription product IDs, transaction timestamps, and obfuscated Google Play account tokens.</td>
                        <td className="p-3">Validates Premium subscription entitlements, manages free trials, and unlocks Pro features across app reinstalls.</td>
                        <td className="p-3"><strong>Google Play Billing SDK</strong> &amp; local <code>EncryptedSharedPreferences</code>.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>D. Website Information Collection (nexbrothers.com)</h3>
                <p>When you visit our Website, we may collect:</p>
                <ul>
                  <li><strong>Cookies &amp; Local Storage:</strong> Technical cookies required for website operation, layout performance, and user consent settings.</li>
                  <li><strong>Web Analytics:</strong> Anonymous visit metrics including browser type, operating system, referrer URL, pages visited, and general country location.</li>
                  <li><strong>Support Inquiries:</strong> If you contact us via email or web contact forms, we collect your name, email address, and the contents of your message solely to respond to your support request.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>4. Detailed Audit of Android System Permissions</h2>
                <p>
                  SignLock requests specific Android system permissions to execute its security features. Each permission is requested in accordance with Google Play Developer Policies and is used strictly for its declared purpose:
                </p>

                <h3>1. <code>BIND_ACCESSIBILITY_SERVICE</code> (Accessibility Service API)</h3>
                <ul>
                  <li><strong>Declaration:</strong> Declared in <code>AndroidManifest.xml</code> under <code>ScreenLockAccessibilityService</code>.</li>
                  <li><strong>Purpose:</strong> Used exclusively to detect window state changes (<code>TYPE_WINDOW_STATE_CHANGED</code> and <code>TYPE_WINDOW_CONTENT_CHANGED</code>) to identify when a user opens an application that is marked as protected in SignLock.</li>
                  <li><strong>User Privacy &amp; Data Safety Protection:</strong>
                    <ul>
                      <li><strong>Zero Keystroke Logging:</strong> SignLock&apos;s Accessibility Service does <strong>NOT</strong> monitor, log, capture, or transmit typed text, passwords, search queries, or form inputs.</li>
                      <li><strong>Zero Content Interception:</strong> It does <strong>NOT</strong> read on-screen text, message contents, emails, or personal data inside other applications.</li>
                      <li><strong>Zero Remote Transmission:</strong> Foreground application detection is evaluated 100% locally on the device against local database rules.</li>
                      <li><strong>User Authorization:</strong> The service must be explicitly enabled by the user in Android System Settings and can be revoked at any time.</li>
                    </ul>
                  </li>
                </ul>

                <h3>2. <code>QUERY_ALL_PACKAGES</code></h3>
                <ul>
                  <li><strong>Declaration:</strong> Declared in <code>AndroidManifest.xml</code>.</li>
                  <li><strong>Purpose:</strong> On Android 11+ (API level 30+), SignLock requires this permission to query the list of installed applications on your device. This allows SignLock to present a full list of installed apps in the App Selection dashboard so you can select which apps to lock.</li>
                  <li><strong>Privacy Assurance:</strong> Installed package lists are processed strictly on-device and are never uploaded to any remote server, database, or third party.</li>
                </ul>

                <h3>3. <code>SYSTEM_ALERT_WINDOW</code> (&quot;Display Over Other Apps&quot;)</h3>
                <ul>
                  <li><strong>Purpose:</strong> Enables SignLock to overlay the secure signature unlock screen immediately on top of a protected application when launched, blocking unauthorized access until the correct signature or PIN is entered.</li>
                </ul>

                <h3>4. <code>CAMERA</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> Used exclusively during Guardian pairing mode. Uses CameraX and Google ML Kit Barcode Scanning to scan the QR code displayed on a paired device.</li>
                  <li><strong>Privacy Assurance:</strong> The camera preview is analyzed in real time in device RAM to extract the QR code payload. No video, photography, or image files are recorded, saved, or uploaded.</li>
                </ul>

                <h3>5. <code>POST_NOTIFICATIONS</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> On Android 13+ (API level 33+), allows SignLock to display persistent protection status notifications (ensuring the background service is not killed by the OS) and security alerts (such as lockout warnings or Guardian policy updates).</li>
                </ul>

                <h3>6. <code>RECEIVE_BOOT_COMPLETED</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> Ensures SignLock&apos;s background protection service automatically resumes monitoring immediately after your device reboots.</li>
                </ul>

                <h3>7. <code>SCHEDULE_EXACT_ALARM</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> Triggers time-precise locking schedule transitions configured by the user (e.g., automatically locking financial apps at midnight).</li>
                </ul>

                <h3>8. <code>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> Prompts the user to exclude SignLock from aggressive OS battery saver limits so background protection remains active and uninterrupted.</li>
                </ul>

                <h3>9. <code>MODIFY_AUDIO_SETTINGS</code></h3>
                <ul>
                  <li><strong>Purpose:</strong> Controls audio playback for optional unlock sound effects and silent feedback during signature drawing.</li>
                </ul>

                <h3>10. <code>com.google.android.gms.permission.AD_ID</code> (Google Advertising ID)</h3>
                <ul>
                  <li><strong>Purpose:</strong> Used by the Google Mobile Ads (AdMob) SDK on Android 13+ to provide ad delivery, frequency capping, and anti-fraud detection for free-tier users.</li>
                </ul>

                <h3>11. WorkManager Background Processing Tasks</h3>
                <ul>
                  <li><strong><code>EntitlementSyncWorker</code>:</strong> Periodically executed in the background (every 6 hours) to re-verify Google Play Store billing entitlement tokens and ensure active subscription states are updated locally.</li>
                  <li><strong><code>PolicyCatchUpWorker</code>:</strong> Executed in Guardian mode to retrieve pending end-to-end encrypted policy rules from Firebase Cloud Firestore when network connectivity is restored.</li>
                </ul>

                <h3>12. Broadcast Receivers</h3>
                <ul>
                  <li><strong><code>BootCompletedReceiver</code>:</strong> Receives <code>android.intent.action.BOOT_COMPLETED</code> to re-initialize protection services upon device restart.</li>
                  <li><strong><code>ProtectionAlarmReceiver</code>:</strong> Receives exact alarm triggers from <code>SCHEDULE_EXACT_ALARM</code> to activate or deactivate app locking schedules.</li>
                  <li><strong><code>PackageInstallReceiver</code>:</strong> Receives <code>android.intent.action.PACKAGE_ADDED</code> when a new app is installed on the device so SignLock / Guardian can evaluate and apply protection rules to the newly installed application.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>5. Third-Party SDKs and Data Processors</h2>
                <p>
                  SignLock integrates with a minimal set of trusted third-party SDKs to provide core app functionality, analytics, billing, and advertising. Each third-party processor handles data according to their respective privacy policies:
                </p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "var(--text-secondary)" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>
                        <th className="p-3 text-left font-semibold">Third-Party Provider</th>
                        <th className="p-3 text-left font-semibold">SDK / Service Name</th>
                        <th className="p-3 text-left font-semibold">Data Processed</th>
                        <th className="p-3 text-left font-semibold">Privacy Policy Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Google LLC</strong></td>
                        <td className="p-3">Google Play Services / Firebase (Analytics, Remote Config, Cloud Firestore, Auth)</td>
                        <td className="p-3">Anonymous usage stats, crash telemetry, remote config flags, encrypted Guardian sync payloads, device identifiers.</td>
                        <td className="p-3"><a href="https://policies.google.com/privacy">Google Privacy Policy</a></td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Google LLC</strong></td>
                        <td className="p-3">Google Mobile Ads (AdMob)</td>
                        <td className="p-3">Advertising ID (AD_ID), IP address, coarse location, ad interaction data (free tier only).</td>
                        <td className="p-3"><a href="https://policies.google.com/technologies/ads">Google Ad Policies</a></td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Google LLC</strong></td>
                        <td className="p-3">Google Play Billing SDK</td>
                        <td className="p-3">Purchase tokens, order IDs, product identifiers, subscription state.</td>
                        <td className="p-3"><a href="https://play.google.com/about/play-terms/">Google Play Services Terms</a></td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Google LLC</strong></td>
                        <td className="p-3">Google ML Kit Barcode Scanning</td>
                        <td className="p-3">Local camera frame analysis for QR code detection (100% on-device).</td>
                        <td className="p-3"><a href="https://developers.google.com/ml-kit/terms">ML Kit Terms &amp; Privacy</a></td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong style={{ color: "var(--text-primary)" }}>Functional Software, Inc.</strong></td>
                        <td className="p-3">Sentry Android SDK</td>
                        <td className="p-3">Crash stack traces, OS version, hardware model (<code>send-default-pii=false</code>, <code>attach-screenshot=false</code>).</td>
                        <td className="p-3"><a href="https://sentry.io/privacy/">Sentry Privacy Policy</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="policy-section">
                <h2>6. How Information Is Processed and Retained</h2>

                <h3>A. Processing Location</h3>
                <ul>
                  <li><strong>On-Device Processing:</strong> All signature vector comparisons, PIN hashing, accessibility window checks, schedule calculations, wallpaper caching, and database queries occur entirely on your Android device.</li>
                  <li><strong>Remote Cloud Processing:</strong> Remote cloud infrastructure (Google Firebase / Firestore) is used <em>solely</em> to pass encrypted Guardian sync messages between paired devices and to manage anonymous remote configuration flags.</li>
                </ul>

                <h3>B. Data Retention Period</h3>
                <ul>
                  <li><strong>Local Application Data:</strong> Signature templates, backup PINs, protected app lists, and preferences remain stored on your device until you manually clear them via the in-app &quot;Reset&quot; option or uninstall the Application.</li>
                  <li><strong>Guardian Firestore Sync Documents:</strong> Encrypted sync pairing documents stored in Firebase Firestore are deleted upon unpairing or after 30 days of inactivity.</li>
                  <li><strong>Crash &amp; Diagnostic Logs:</strong> Crash reporting logs sent to Sentry and Firebase Crashlytics are automatically deleted after 90 days.</li>
                  <li><strong>Analytics Data:</strong> Aggregated, non-personally identifiable analytics data stored by Google Firebase Analytics is retained for up to 14 months.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>7. User Data Control, Rights, and Deletion Procedures</h2>
                <p>
                  We empower users with complete control over their personal data. Depending on your jurisdiction (including the EU/EEA under GDPR and California under CCPA/CPRA), you have specific data rights:
                </p>

                <h3>A. How to Delete Your Data Immediately</h3>
                <ol>
                  <li><strong>In-App Data Reset (Complete Instant Erasure):</strong> Open <strong>SignLock</strong> &rarr; <strong>Settings</strong> &rarr; <strong>Security</strong> &rarr; <strong>Reset App</strong>. Confirm reset. This permanently deletes all signature templates, backup PINs, protected app lists, lockout history, and local preferences from device storage and wipes encryption keys from the Android Keystore.</li>
                  <li><strong>Guardian Unpairing (Remote Sync Erasure):</strong> Open <strong>SignLock</strong> &rarr; <strong>Guardian</strong> tab &rarr; <strong>Unpair Device</strong>. This instantly revokes cryptographic keys and deletes the associated pairing document from Firebase Cloud Firestore.</li>
                  <li><strong>App Uninstallation:</strong> Uninstalling SignLock from your Android device immediately destroys all application files, Room databases, DataStore preferences, and private storage directories.</li>
                </ol>

                <h3>B. Rights Under GDPR (European Economic Area &amp; UK Users)</h3>
                <p>If you reside in the EEA or UK, you hold the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Right of Access:</strong> You have the right to request information about the personal data we process.</li>
                  <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You have the right to request the deletion of your personal data.</li>
                  <li><strong>Right to Data Portability:</strong> You have the right to receive a copy of your personal data in a structured, machine-readable format.</li>
                  <li><strong>Right to Restrict or Object to Processing:</strong> You may object to or restrict processing of your data, including direct marketing or ad personalization.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time without affecting lawful processing prior to withdrawal.</li>
                </ul>
                <p>To exercise any of these rights, contact us at <a href="mailto:nexbrotherss@gmail.com">nexbrotherss@gmail.com</a>.</p>

                <h3>C. Rights Under CCPA / CPRA (California Residents)</h3>
                <p>California law grants residents specific rights:</p>
                <ul>
                  <li><strong>Right to Know / Access:</strong> Request disclosure of categories and specific pieces of personal information collected.</li>
                  <li><strong>Right to Delete:</strong> Request deletion of personal information collected from you.</li>
                  <li><strong>Right to Opt-Out of Sale or Sharing:</strong> <strong>SignLock does NOT sell your personal information or share it for cross-context behavioral advertising.</strong></li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>8. Security Measures &amp; Encryption Protocols</h2>
                <p>
                  NexBrothers implements industry-leading security practices to safeguard your data against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul>
                  <li><strong>Hardware-Backed Encryption:</strong> All sensitive local data (signature gesture matrices and backup PINs) are encrypted using <strong>AES-256-GCM</strong> keys generated via the Android Keystore system.</li>
                  <li><strong>End-to-End Encrypted Cloud Sync:</strong> Guardian pairing uses <strong>Elliptic-Curve Diffie-Hellman (ECDH)</strong> key exchange and <strong>AES-256-GCM</strong> payload encryption. Remote policies cannot be decrypted by intermediate servers.</li>
                  <li><strong>Timing-Attack Protection:</strong> PIN validation uses constant-time string comparison (<code>MessageDigest.isEqual</code>) to prevent cryptographic timing side-channel attacks.</li>
                  <li><strong>Clock-Tampering Protection:</strong> Lockout timers utilize system monotonic clocks (<code>SystemClock.elapsedRealtime</code>) to prevent users or unauthorized actors from bypassing lockouts by altering device system time.</li>
                  <li><strong>PII Suppression in Crash Reports:</strong> Release builds are configured with <code>send-default-pii=false</code> and <code>attach-screenshot=false</code> to ensure no sensitive screen contents or personal identifiers enter crash stack traces.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>9. Children&apos;s Privacy</h2>
                <p>
                  SignLock is a general audience tool and parental control utility. The Application is <strong>not</strong> directed to children under the age of 13 (or under 16 in the European Union). We do not knowingly collect personal identifiable information from children.
                </p>
                <p>
                  When SignLock is used in Guardian Mode for parental supervision, the pairing process and policy controls must be configured and managed by a parent or legal guardian. If you believe a child has provided us with personal information without parental consent, please contact us at <a href="mailto:nexbrotherss@gmail.com">nexbrotherss@gmail.com</a>, and we will immediately take steps to remove such information.
                </p>
              </div>

              <div className="policy-section">
                <h2>10. International Data Transfers</h2>
                <p>
                  Our Application is designed to operate primarily on your local device. Where cloud infrastructure is used (such as Google Firebase for Guardian sync, Google AdMob, or Sentry), your data may be transferred to and processed on servers located outside your state, province, or country (including in the United States).
                </p>
                <p>
                  These third-party providers comply with recognized international transfer mechanisms, including the EU-U.S. Data Privacy Framework, Standard Contractual Clauses (SCCs), and robust encryption standards to protect your data across borders.
                </p>
              </div>

              <div className="policy-section">
                <h2>11. Website Cookies and Tracking Technologies</h2>
                <p>
                  When you interact with our Website (<a href="https://www.nexbrothers.com">https://www.nexbrothers.com</a>), we use standard web tracking technologies:
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Necessary for basic website navigation and access to secure areas.</li>
                  <li><strong>Analytical Cookies:</strong> Help us understand site visitor counts, traffic sources, and popular pages.</li>
                  <li><strong>Cookie Management:</strong> You can instruct your web browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features may not function properly without cookies.</li>
                </ul>
              </div>

              <div className="policy-section">
                <h2>12. Advertising and Subscriptions</h2>

                <h3>A. Free Version &amp; Advertisements</h3>
                <p>
                  The free version of SignLock displays advertisements provided by Google Mobile Ads (AdMob). AdMob may use your device&apos;s Advertising ID (AD_ID) and coarse location to serve contextual or personalized ads, subject to your device ad tracking settings and consent. You can reset or limit ad tracking in your Android device settings under <strong>Settings</strong> &rarr; <strong>Google</strong> &rarr; <strong>Ads</strong>.
                </p>

                <h3>B. Premium Subscription &amp; Purchases</h3>
                <p>
                  Upgrading to SignLock Premium removes all advertisements and unlocks advanced Guardian and personalization features. Subscription transactions are processed directly by Google Play Billing. NexBrothers does not collect or store your credit card details, bank account numbers, or payment credentials.
                </p>
              </div>

              <div className="policy-section">
                <h2>13. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time to reflect changes in our application features, legal requirements, or operational practices. When we make material changes, we will:
                </p>
                <ol>
                  <li>Update the &quot;Last Updated&quot; date at the top of this Privacy Policy.</li>
                  <li>Post the revised Privacy Policy on our Website at <a href="https://signlock.nexbrothers.com/privacy-policy">https://signlock.nexbrothers.com/privacy-policy</a>.</li>
                  <li>Provide an in-app notice or notification where appropriate.</li>
                </ol>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your privacy.
                </p>
              </div>

              <div className="policy-section">
                <h2>14. Contact Us &amp; Data Protection Officer</h2>
                <p>
                  If you have any questions, concerns, feedback, or data privacy requests regarding this Privacy Policy or our practices, please contact us at:
                </p>
                <div className="contact-info">
                  <p><strong>Developer / Company:</strong> NexBrothers</p>
                  <p><strong>Email Support:</strong> <a href="mailto:nexbrotherss@gmail.com">nexbrotherss@gmail.com</a></p>
                  <p><strong>Privacy &amp; Data Protection Email:</strong> <a href="mailto:nexbrotherss@gmail.com">nexbrotherss@gmail.com</a></p>
                  <p><strong>Official Website:</strong> <a href="https://www.nexbrothers.com">https://www.nexbrothers.com</a></p>
                  <p><strong>Privacy Policy Web Address:</strong> <a href="https://signlock.nexbrothers.com/privacy-policy">https://signlock.nexbrothers.com/privacy-policy</a></p>
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
