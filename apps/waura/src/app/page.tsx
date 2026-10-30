import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  CheckCircle2,
  Clock3,
  Focus,
  Gauge,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Sparkles,
  TimerReset,
  WifiOff,
} from "lucide-react";
import { Container } from "@repo/ui/ui";
import { FadeIn } from "@repo/ui/animations";

const screenshots = [
  ["screenshot-s_home.png", "Home", "Your phone time has an aura.", "peach"],
  ["screenshot-s_running.png", "Focus", "Focus sessions add aura.", "pink"],
  ["screenshot-s_limits.png", "Limits", "Keep your limits. Take the W.", "mint"],
  ["screenshot-s_insights.png", "Insights", "See what changed, line by line.", "yellow"],
  ["screenshot-s_levelup.png", "Levels", "Level up from Static to Halo.", "coral"],
  ["screenshot-s_privacy.png", "Privacy", "Everything stays on your phone.", "blue"],
] as const;

const levels = [
  ["Static", "0–199", "A clean slate. Start with one small win.", "#e8e5e0"],
  ["Flicker", "200–399", "The first spark of a more intentional rhythm.", "#ffb6d3"],
  ["Glow", "400–599", "Your focus and limits are finding their balance.", "#ffe27a"],
  ["Radiant", "600–799", "Strong habits are becoming your default.", "#ff9b84"],
  ["Halo", "800–1000", "Calm, deliberate, and fully in control.", "#9ff0cf"],
] as const;

const faqs = [
  ["Is Waura free?", "Yes. Waura is free to download and use on Android."],
  ["Why does Waura need usage access?", "Android usage access lets Waura count how long an app was open. It cannot see your messages, photos, searches, or anything you do inside an app."],
  ["Where is my data stored?", "Only on your phone. Waura has no internet permission, so your activity cannot be sent to us or anyone else."],
  ["What happens if I end a focus session early?", "Nothing bad. You only earn aura when a session completes, and ending early never takes aura away."],
  ["Does it work on iPhone?", "Not yet. Waura is built for Android 8 and newer."],
] as const;

export default function WauraHome() {
  return (
    <div className="waura-site overflow-hidden">
      <section className="waura-hero relative min-h-[94vh] overflow-hidden pt-28 pb-16 lg:pt-32">
        <div className="aura-blob aura-blob-pink" />
        <div className="aura-blob aura-blob-mint" />
        <div className="aura-blob aura-blob-yellow" />
        <Container className="relative z-10" size="xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
            <div className="max-w-2xl">
              <FadeIn><div className="waura-eyebrow mb-7"><Sparkles className="h-4 w-4" />PRIVATE DIGITAL WELLBEING</div></FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="max-w-2xl text-[clamp(3.8rem,8vw,7.7rem)] font-black leading-[0.86] tracking-[-0.075em] text-[#17161c]">Take the W on screen time.</h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#4d4a52] sm:text-xl">Focus sessions add aura. Keeping your limits protects it. Waura turns better phone habits into a score you can actually feel.</p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#inside-waura" className="waura-button waura-button-primary">See Waura in action <ArrowRight className="h-4 w-4" /></a>
                  <a href="#privacy" className="waura-button waura-button-secondary"><ShieldCheck className="h-4 w-4" />Why it stays private</a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#5d5961]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Free</span>
                  <span className="flex items-center gap-2"><WifiOff className="h-4 w-4" /> No internet permission</span>
                  <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> No account</span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="relative mx-auto w-full max-w-[620px]">
              <div className="hero-phone-wrap">
                <Image src="/images/waura/store/screenshot-s_home.png" alt="Waura home screen showing an aura score and today's app limits" width={1080} height={1920} priority className="hero-phone" />
                <div className="hero-note hero-note-score"><span className="text-xs font-bold uppercase tracking-[0.14em]">Today</span><strong>+65 aura</strong></div>
                <div className="hero-note hero-note-private"><ShieldCheck className="h-5 w-5" /><strong>Everything stays here.</strong></div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-y border-black/10 bg-[#17161c] py-5 text-[#fffaf3]" aria-label="Waura highlights">
        <Container size="xl"><div className="grid gap-4 text-center text-sm font-bold sm:grid-cols-3 sm:text-base">
          <p className="flex items-center justify-center gap-2"><Focus className="h-4 w-4 text-[#ff9ec7]" /> +1 aura per focus minute</p>
          <p className="flex items-center justify-center gap-2"><Gauge className="h-4 w-4 text-[#ffe27a]" /> A score from 0 to 1000</p>
          <p className="flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4 text-[#9ff0cf]" /> 0 KB sent off-device</p>
        </div></Container>
      </section>

      <section id="how-it-works" className="bg-[#fffdf8] py-24 sm:py-32">
        <Container size="xl">
          <FadeIn className="mb-14 max-w-3xl"><span className="waura-kicker">A kinder score for your attention</span><h2 className="waura-heading mt-4">A simple loop that rewards the right things.</h2><p className="waura-lead mt-5">No shame charts. No aggressive lockouts. Just a clear signal that helps you notice, adjust, and keep going.</p></FadeIn>
          <div className="grid gap-5 lg:grid-cols-3">
            <FadeIn delay={0.05} className="h-full"><article className="mechanic-card mechanic-card-pink h-full"><span className="mechanic-number">01</span><TimerReset className="h-9 w-9" /><h3>Focus adds aura.</h3><p>Choose 25, 50, or 90 minutes. Complete the session and every focused minute becomes +1 aura.</p><div className="mechanic-rule"><span>Reward</span><strong>up to +100/day</strong></div></article></FadeIn>
            <FadeIn delay={0.1} className="h-full"><article className="mechanic-card mechanic-card-yellow h-full"><span className="mechanic-number">02</span><Clock3 className="h-9 w-9" /><h3>Limits protect it.</h3><p>Give distracting apps a daily budget. Staying inside it earns a midnight bonus and keeps your momentum intact.</p><div className="mechanic-rule"><span>Kept limit</span><strong>+20/app</strong></div></article></FadeIn>
            <FadeIn delay={0.15} className="h-full"><article className="mechanic-card mechanic-card-mint h-full"><span className="mechanic-number">03</span><BarChart3 className="h-9 w-9" /><h3>See the story.</h3><p>Every gain and change appears line by line, so your score never feels mysterious or arbitrary.</p><div className="mechanic-rule"><span>History</span><strong>clear by design</strong></div></article></FadeIn>
          </div>
        </Container>
      </section>

      <section id="inside-waura" className="bg-[#f1efe9] py-24 sm:py-32">
        <Container size="xl"><div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <FadeIn className="max-w-3xl"><span className="waura-kicker">Inside Waura</span><h2 className="waura-heading mt-4">Everything you need. Nothing that wants your attention.</h2></FadeIn>
          <FadeIn delay={0.08}><p className="max-w-md text-base font-medium leading-relaxed text-[#5c5860] lg:text-right">Built to help you put the phone down—not keep you tapping around inside another app.</p></FadeIn>
        </div></Container>
        <div className="screenshot-rail" aria-label="Waura app screenshots">
          {screenshots.map(([file, label, title, tone], index) => (
            <FadeIn key={label} delay={Math.min(index * 0.04, 0.18)} className="screenshot-card">
              <div className={`screenshot-frame screenshot-frame-${tone}`}>
                <div className="mb-5 flex items-center justify-between gap-4"><span className="screenshot-label">{label}</span><ArrowRight className="h-4 w-4" /></div>
                <h3>{title}</h3>
                <Image src={`/images/waura/store/${file}`} alt={`${label} screen in the Waura Android app`} width={1080} height={1920} className="screenshot-image" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="five-levels" className="relative bg-[#17161c] py-24 text-[#fffaf3] sm:py-32">
        <div className="level-glow level-glow-one" /><div className="level-glow level-glow-two" />
        <Container className="relative z-10" size="xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <FadeIn><span className="waura-kicker text-[#ffb6d3]">Your aura evolves</span><h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">From Static to Halo.</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-[#cbc5cd]">Five levels make progress visible without turning your attention into a competition. Your best score is the one that reflects a day you chose.</p><div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold"><Sparkles className="h-4 w-4 text-[#ffe27a]" />0 → 1000 aura</div></FadeIn>
          <div className="space-y-3">{levels.map(([name, range, copy, color], index) => <FadeIn key={name} delay={index * 0.05}><article className="level-row"><span className="level-dot" style={{ background: color }} /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3>{name}</h3><span className="level-range">{range}</span></div><p>{copy}</p></div></article></FadeIn>)}</div>
        </div></Container>
      </section>

      <section id="privacy" className="relative overflow-hidden bg-[#dff9ed] py-24 sm:py-32">
        <div className="privacy-orb privacy-orb-pink" /><div className="privacy-orb privacy-orb-blue" />
        <Container className="relative z-10" size="xl"><div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn className="mx-auto w-full max-w-[420px]"><div className="privacy-phone-shell"><Image src="/images/waura/store/screenshot-s_privacy.png" alt="Waura privacy screen explaining what the app can and cannot see" width={1080} height={1920} className="w-full rounded-[2.25rem]" /></div></FadeIn>
          <div>
            <FadeIn><span className="waura-kicker">Private by architecture</span><h2 className="waura-heading mt-4">Your habits are yours. Full stop.</h2><p className="waura-lead mt-6 max-w-2xl">Waura can count how long selected apps are open. It cannot read what you watch, write, search, photograph, or share—and it cannot send anything away.</p></FadeIn>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <FadeIn><div className="privacy-proof"><WifiOff className="h-5 w-5" /><strong>No internet permission</strong></div></FadeIn>
              <FadeIn delay={0.05}><div className="privacy-proof"><Lock className="h-5 w-5" /><strong>No account or cloud sync</strong></div></FadeIn>
              <FadeIn delay={0.1}><div className="privacy-proof"><ShieldCheck className="h-5 w-5" /><strong>No ads or analytics</strong></div></FadeIn>
              <FadeIn delay={0.15}><div className="privacy-proof"><HeartHandshake className="h-5 w-5" /><strong>Delete everything anytime</strong></div></FadeIn>
            </div>
            <FadeIn delay={0.2}><Link href="/privacy-policy" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#17161c] pb-1 text-sm font-black text-[#17161c]">Read the plain-language privacy policy <ArrowRight className="h-4 w-4" /></Link></FadeIn>
          </div>
        </div></Container>
      </section>

      <section className="bg-[#fffdf8] py-24 sm:py-32">
        <Container size="lg">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center"><span className="waura-kicker">Built to respect you</span><h2 className="waura-heading mt-4">Helpful when it matters. Quiet when it doesn’t.</h2></FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            <FadeIn className="h-full"><article className="respect-card h-full"><BellRing className="h-7 w-7" /><h3>A gentle heads-up</h3><p>A warning five minutes before a limit—not a panic-inducing interruption.</p></article></FadeIn>
            <FadeIn delay={0.07} className="h-full"><article className="respect-card h-full"><TimerReset className="h-7 w-7" /><h3>No punishment</h3><p>Ending a focus session early never costs aura. Reset and try again when you’re ready.</p></article></FadeIn>
            <FadeIn delay={0.14} className="h-full"><article className="respect-card h-full"><Check className="h-7 w-7" /><h3>Essentials stay essential</h3><p>Calls, maps, banking, and anything you choose can stay outside the scoring system.</p></article></FadeIn>
          </div>
        </Container>
      </section>

      <section id="faq" className="bg-[#f1efe9] py-24 sm:py-32">
        <Container size="md">
          <FadeIn className="mb-10"><span className="waura-kicker">Good to know</span><h2 className="waura-heading mt-4">Questions, answered simply.</h2></FadeIn>
          <div className="space-y-3">{faqs.map(([question, answer], index) => <FadeIn key={question} delay={index * 0.04}><details className="faq-item group"><summary><span>{question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details></FadeIn>)}</div>
        </Container>
      </section>

      <section id="download" className="relative overflow-hidden bg-[#ff9b84] py-24 sm:py-32">
        <div className="download-sun" />
        <Container className="relative z-10" size="lg"><FadeIn className="mx-auto max-w-4xl text-center">
          <Image src="/images/waura/store/waura-icon-512.png" alt="Waura app icon" width={112} height={112} className="mx-auto mb-8 rounded-[1.8rem] shadow-xl" />
          <h2 className="text-[clamp(3.2rem,8vw,6.8rem)] font-black leading-[0.86] tracking-[-0.07em] text-[#17161c]">Your next scroll can wait.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-[#40383a] sm:text-xl">Waura is coming to Google Play for Android 8 and newer. Free, private, and built to help your attention feel like yours again.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><span className="waura-button waura-button-primary cursor-default">Coming soon on Google Play</span><Link href="/product-details" className="waura-button waura-button-secondary">Explore how scoring works <ArrowRight className="h-4 w-4" /></Link></div>
        </FadeIn></Container>
      </section>
    </div>
  );
}
