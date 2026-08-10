'use client';

import { useState } from 'react';
import { Container } from '@repo/ui/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@repo/ui/animations';
import {
  BriefcaseBusiness,
  Search,
  LayoutDashboard,
  SlidersHorizontal,
  ClipboardList,
  Github,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Globe,
  Bot,
  Shield,
  Code,
} from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Naukri integration',
    description: 'Connect your Naukri account credentials and let the app access job listings on your behalf.',
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Smart job scraping',
    description: 'Automatically scrapes and finds jobs matching your skills, experience, and preferences.',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Auto apply',
    description: 'Automatically applies to matching jobs with your profile, no more clicking apply by hand.',
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: 'Activity dashboard',
    description: 'Full dashboard to monitor jobs found, applications sent, and real-time status updates.',
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" />,
    title: 'Custom filters',
    description: 'Set preferences like role, location, salary range, experience level, and company type.',
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Application logs',
    description: 'Detailed logs of every action: which jobs were found, applied to, skipped, and why.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Runs locally',
    description: 'Your credentials never leave your machine. Everything runs on your local system.',
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: 'Open source',
    description: 'Fully open source on GitHub. Inspect the code, contribute, or customize it to your needs.',
  },
];

const steps = [
  { title: 'Clone & setup', description: 'Clone the repo from GitHub and install dependencies with a single command.' },
  { title: 'Add credentials & preferences', description: 'Add your Naukri credentials and set your job search preferences: role, location, salary.' },
  { title: 'Run & relax', description: 'Start the app and let it find and apply to jobs for you. Monitor it from the dashboard.' },
];

const faqs = [
  {
    question: 'Is Job Automator free?',
    answer: "Yes, it's completely free and open source. You can clone the repo, run it locally, and use all features at no cost.",
  },
  {
    question: 'Is it safe to use my Naukri credentials?',
    answer: 'Job Automator runs entirely on your local machine. Your credentials are stored locally and never sent to any external server. You can verify this by inspecting the source code.',
  },
  {
    question: 'What platforms does it support?',
    answer: 'Currently it supports Naukri.com. Support for LinkedIn, Indeed, and other job platforms is planned for future releases.',
  },
  {
    question: 'Can I customize which jobs it applies to?',
    answer: 'Yes. You can set filters for job title, location, experience range, salary expectations, and company type. The app only applies to jobs matching your criteria.',
  },
  {
    question: 'How do I contribute?',
    answer: 'Fork the repo on GitHub, make your changes, and submit a pull request. We welcome bug fixes, new features, and documentation.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0" style={{ borderColor: 'var(--border)' }}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left">
        <span className="text-base font-medium pr-4" style={{ color: 'var(--text-primary)' }}>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 shrink-0" style={{ color: 'var(--accent)' }} />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0" style={{ color: 'var(--text-secondary)' }} />
        )}
      </button>
      {isOpen && <div className="pb-5 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>{answer}</div>}
    </div>
  );
}

export default function JobAutomatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                <BriefcaseBusiness className="w-5 h-5" style={{ color: '#fff' }} />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(30,157,91,0.12)', color: 'var(--success)' }}>
                Open source
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Job Automator
            </h1>
            <p className="text-xl font-medium mb-5" style={{ color: 'var(--accent)' }}>
              Automated job search and apply, for Naukri
            </p>
            <p className="text-lg mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Stop manually searching and applying to hundreds of jobs. Connect your Naukri
              credentials, set your preferences, and let it find and apply for you.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Open source', 'Runs locally', 'Free forever'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Anujkumar2001/naukri-job"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>

            <p className="mt-5 text-sm" style={{ color: 'var(--text-muted)' }}>
              Check the README on GitHub for setup instructions and configuration details.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: 'var(--text-primary)' }}>
              Job hunting shouldn&apos;t be a full-time job
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Spending hours scrolling through Naukri, clicking apply on every listing, filling
              out the same details repeatedly? Let automation handle the repetitive work while
              you focus on interview prep.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['No more manual job searching', 'No more repetitive applications', 'No more losing track of where you applied'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <CheckCircle className="w-5 h-5 shrink-0" style={{ color: 'var(--success)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Everything you need to automate the search
            </h2>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-subtle)', color: 'var(--accent)' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <FadeIn className="mb-14 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Up and running in minutes
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <span className="font-display text-6xl font-semibold block mb-4" style={{ color: 'var(--border-hover)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <FadeIn className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Frequently asked
            </h2>
          </FadeIn>

          <FadeIn className="max-w-3xl">
            <div className="rounded-[24px] border p-6" style={{ backgroundColor: 'var(--background-secondary)', borderColor: 'var(--border)' }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <Container>
          <FadeIn>
            <div className="rounded-[32px] p-10 sm:p-14" style={{ backgroundColor: 'var(--ink)' }}>
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4" style={{ color: 'var(--on-ink)' }}>
                  Automate your job search today
                </h2>
                <p className="text-lg mb-8" style={{ color: 'var(--on-ink-muted)' }}>
                  Clone the repo, set your preferences, and let Job Automator do the heavy
                  lifting.
                </p>

                <a
                  href="https://github.com/Anujkumar2001/naukri-job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold mb-6"
                  style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>

                <div className="flex flex-wrap gap-2">
                  {['Open source', 'Runs locally', 'Free forever', 'Your data stays with you'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(246,245,241,0.08)', color: 'var(--on-ink-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
