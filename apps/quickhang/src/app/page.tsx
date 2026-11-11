import Image from "next/image";
import Link from "next/link";
import { Hand, MoveDiagonal, Unlock, Layers, Zap, ListOrdered, Palette, Waves, Accessibility, ShieldCheck, WifiOff, UserX, Ban, Eye } from "lucide-react";
import { Container } from "@repo/ui/ui";
import { Reveal } from "../components/reveal";
import { Hanger } from "../components/hanger";
import { PlayButton } from "../components/play-button";
import { SITE_URL } from "../lib/site";

const steps = [
  { icon: Hand, title: "Pull", body: "Pull the little character down from the top of your screen. It works over any app." },
  { icon: MoveDiagonal, title: "Slide", body: "Up to five apps you chose fan out in a ring. Slide onto the one you want." },
  { icon: Unlock, title: "Let go", body: "Lift your finger to open it. Let go anywhere else and nothing happens." },
];

const features = [
  { icon: Layers, title: "Over every app", body: "One-handed shortcuts that work on top of whatever you are doing, so you never go back to the home screen first." },
  { icon: Zap, title: "Quick actions", body: "Pull sideways or all the way down for the flashlight, the camera or an app of your choice." },
  { icon: ListOrdered, title: "Your five apps", body: "Choose up to five apps and drag them into your order. Your most-used app goes where your thumb lands." },
  { icon: Palette, title: "Make him yours", body: "Pick a character, a size and a look: light, dark or follow your phone." },
  { icon: Waves, title: "He swings and naps", body: "He swings when you tilt or shake the phone, and naps under the camera after a minute of no use. Tap once to wake him." },
  { icon: Accessibility, title: "Comfortable to use", body: "Large text, reduce motion and haptic feedback settings are built in." },
];

const gallery = [
  { src: "one-pull-away", alt: "QuickHang screenshot: your apps, one pull away" },
  { src: "pull-slide-let-go", alt: "QuickHang screenshot: pull, slide, let go, with apps fanned out in a ring" },
  { src: "make-him-yours", alt: "QuickHang screenshot: choose your character, size and look" },
  { src: "naps-when-idle", alt: "QuickHang screenshot: the character naps when idle" },
];

const faqs = [
  ["Is QuickHang a launcher replacement?", "No. It is a shortcut that sits over your apps. You keep your current home screen and launcher."],
  ["Is it free?", "Yes. QuickHang is free, with no ads and no in-app purchases."],
  ["Which phones does it work on?", "Android phones running Android 8.0 or newer."],
  ["Does it need an account or the internet?", "No. There is no account, and the app does not request the internet permission, so it cannot send anything anywhere."],
  ["Why does it need \"Display over other apps\"?", "That permission is what lets the character appear on top of other apps. QuickHang never reads or records your screen."],
  ["How many apps can I add?", "Up to five. You can drag them into any order."],
] as const;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "QuickHang",
    alternateName: "QuickHang: Quick App Launcher",
    operatingSystem: "Android 8.0+",
    applicationCategory: "ProductivityApplication",
    description: "Pull the character down and your favourite apps appear. A one-handed quick app launcher for Android.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "NexBrothers", url: "https://nexbrothers.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function QuickHangHome() {
  return (
    <div className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="qh-hero pt-24 pb-16 lg:pt-28 lg:pb-24">
        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
            <div className="max-w-xl">
              <div className="mb-4 flex justify-center lg:hidden">
                <Hanger ropeRem={2.5} width={92} />
              </div>
              <Reveal>
                <p className="qh-eyebrow mb-5">Quick app launcher for Android</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="qh-h1">
                  Pull him down.<br />
                  <span className="qh-accent">Your apps appear.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="qh-lead mt-6">
                  A small cartoon character hangs on a rope at the top of your screen, over any app. Pull him down, slide onto one of your five favourite apps and let go to open it.
                </p>
              </Reveal>
              <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-3">
                <PlayButton />
                <Link href="/#how-it-works" className="qh-btn qh-btn-ghost">See how it works</Link>
              </Reveal>
              <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
                Free · No ads · No account · Android 8.0 and up
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[19rem] lg:max-w-[21rem] lg:justify-self-center">
              <div className="absolute -left-32 -top-14 hidden lg:block">
                <Hanger ropeRem={5} width={110} />
              </div>
              <Image
                src="/images/quickhang/one-pull-away.webp"
                alt="QuickHang on an Android phone: your apps, one pull away"
                width={720}
                height={1280}
                priority
                className="qh-phone-img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 lg:py-28" style={{ background: "var(--bg-primary)" }}>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="qh-eyebrow mb-4">How it works</p>
            <h2 className="qh-h2">Pull. Slide. Let go.</h2>
            <p className="qh-lead mt-4">Three small moves, one hand, no hunting for the home screen.</p>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.08} className="qh-card h-full p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "var(--grad)", color: "#1e1b18" }}>
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold"><span className="qh-accent">{i + 1}.</span> {s.title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-20 lg:py-28" style={{ background: "var(--bg-secondary)" }}>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="qh-eyebrow mb-4">Features</p>
            <h2 className="qh-h2">Small shortcut, big time saver.</h2>
            <p className="qh-lead mt-4">QuickHang is a shortcut, not a home-screen replacement. Keep the launcher you already like.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.07} className="qh-card h-full p-7">
                <f.icon className="mb-4 h-7 w-7 qh-accent" aria-hidden="true" />
                <h3 className="text-lg font-extrabold">{f.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-h" className="py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="qh-eyebrow mb-4">Take a look</p>
            <h2 id="gallery-h" className="qh-h2">Friendly on the outside, tidy on the inside.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.06}>
                <Image src={`/images/quickhang/${g.src}.webp`} alt={g.alt} width={720} height={1280} loading="lazy" className="qh-phone-img" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Private by design */}
      <section id="private" className="qh-band py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <Reveal>
              <p className="qh-eyebrow mb-4" style={{ color: "#ffb347" }}>Private by design</p>
              <h2 className="qh-h2">Nothing leaves your phone, because nothing can.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "#dccdc0" }}>
                QuickHang does not request the internet permission. Your choices stay on your device and are deleted when you uninstall.
              </p>
              <Link href="/privacy-policy" className="qh-btn mt-8 border border-[#ffb347] text-[#ffb347]">Read the privacy policy</Link>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  [UserX, "No account"],
                  [Ban, "No ads"],
                  [Eye, "No tracking"],
                  [WifiOff, "No internet"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Eye;
                  return (
                    <li key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/15 p-4 font-bold">
                      <I className="h-6 w-6 shrink-0" style={{ color: "#ffb347" }} aria-hidden="true" />
                      {label as string}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28">
        <Container size="md">
          <Reveal>
            <p className="qh-eyebrow mb-4">FAQ</p>
            <h2 className="qh-h2">Quick answers.</h2>
          </Reveal>
          <div className="qh-faq mt-10">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p className="pb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
          <Reveal className="qh-card flex flex-col items-center gap-6 px-6 py-14 text-center" >
            <ShieldCheck className="h-8 w-8 qh-accent" aria-hidden="true" />
            <h2 className="qh-h2 max-w-2xl">Your apps, one pull away.</h2>
            <p className="qh-lead max-w-xl">Free, private and tiny. Pull, slide, let go.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <PlayButton />
              <Link href="/support" className="qh-btn qh-btn-ghost">Get support</Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
