'use client';

import { useState } from 'react';
import { Container, Button, Card } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import {
  BriefcaseBusiness,
  Search,
  Send,
  LayoutDashboard,
  SlidersHorizontal,
  ClipboardList,
  Github,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ExternalLink,
  Globe,
  Bot,
  Shield,
  Code,
} from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Naukri Integration',
    description:
      'Connect your Naukri account credentials and let the app access job listings on your behalf.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Smart Job Scraping',
    description:
      'Automatically scrapes and finds jobs matching your skills, experience, and preferences from Naukri.',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Auto Apply',
    description:
      'Automatically applies to matching jobs with your profile. No more clicking apply on hundreds of listings.',
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: 'Activity Dashboard',
    description:
      'Full dashboard to monitor all activities — jobs found, applications sent, and real-time status updates.',
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: 'Custom Filters',
    description:
      'Set job preferences like role, location, salary range, experience level, and company type.',
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Application Logs',
    description:
      'Detailed logs of every action — which jobs were found, applied to, skipped, and why.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Runs Locally',
    description:
      'Your credentials never leave your machine. Everything runs on your local system for full privacy.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Open Source',
    description:
      'Fully open source on GitHub. Inspect the code, contribute, or customize it to your needs.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Clone & Setup',
    description:
      'Clone the repo from GitHub and install dependencies with a single command.',
  },
  {
    number: '02',
    title: 'Add Credentials & Preferences',
    description:
      'Add your Naukri credentials and set your job search preferences — role, location, salary, etc.',
  },
  {
    number: '03',
    title: 'Run & Relax',
    description:
      'Start the app and let it find and apply to jobs for you. Monitor everything from the dashboard.',
  },
];

const faqs = [
  {
    question: 'Is Job Automator free?',
    answer:
      "Yes, it's completely free and open source. You can clone the repo, run it locally, and use all features at no cost.",
  },
  {
    question: 'Is it safe to use my Naukri credentials?',
    answer:
      'Job Automator runs entirely on your local machine. Your credentials are stored locally and never sent to any external server. You can verify this by inspecting the source code.',
  },
  {
    question: 'What platforms does it support?',
    answer:
      'Currently it supports Naukri.com. Support for LinkedIn, Indeed, and other job platforms is planned for future releases.',
  },
  {
    question: 'Can I customize which jobs it applies to?',
    answer:
      'Absolutely. You can set filters for job title, location, experience range, salary expectations, company type, and more. The app only applies to jobs matching your criteria.',
  },
  {
    question: 'How do I contribute?',
    answer:
      'Fork the repo on GitHub, make your changes, and submit a pull request. We welcome contributions of all kinds — bug fixes, new features, documentation, and more.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderColor: 'var(--border)' }} className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span
          className="text-lg font-medium"
          style={{ color: 'var(--text-primary)' }}
        >
          {question}
        </span>
        {isOpen ? (
          <ChevronUp style={{ color: 'var(--accent)' }} className="w-5 h-5" />
        ) : (
          <ChevronDown
            style={{ color: 'var(--text-secondary)' }}
            className="w-5 h-5"
          />
        )}
      </button>
      {isOpen && (
        <div
          className="pb-6 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function JobAutomatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent-purple)', opacity: 0.15 }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
                  <BriefcaseBusiness className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#10B981]/20 text-[#10B981]">
                  Open Source
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Job Automator
              </h1>
              <p
                className="text-2xl font-medium mb-6"
                style={{ color: 'var(--accent)' }}
              >
                Automated Job Search & Apply for Naukri
              </p>
              <p
                className="text-lg mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                Stop manually searching and applying to hundreds of jobs.
                Connect your Naukri credentials, set your preferences, and let
                Job Automator find and apply to matching jobs automatically.
                Track everything from a clean dashboard.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Open Source', 'Runs Locally', 'Free Forever'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border"
                    style={{
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/Anujkumar2001/naukri-job"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto group">
                    <Github className="mr-2 w-5 h-5" />
                    View on GitHub
                  </Button>
                </a>
              </div>

              <p
                className="mt-6 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                Check the README on GitHub for setup instructions and
                configuration details.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Job Hunting Shouldn&apos;t Be a Full-Time Job
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Spending hours scrolling through Naukri, clicking apply on every
              listing, filling out the same details repeatedly? Let automation
              handle the repetitive work while you focus on interview prep.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                'No more manual job searching',
                'No more repetitive applications',
                'No more losing track of where you applied',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.05 }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Powerful Features
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Everything you need to automate your job search on Naukri.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6" gradient>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        'linear-gradient(to bottom right, var(--accent), var(--accent-purple))',
                      opacity: 0.9,
                    }}
                  >
                    <div style={{ color: 'white' }}>{feature.icon}</div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background-secondary), var(--background))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              How It Works
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Get up and running in minutes.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative text-center">
                  <div
                    className="text-7xl font-bold mb-4"
                    style={{ color: 'var(--accent)', opacity: 0.1 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-12 right-0 w-1/2 h-0.5"
                      style={{
                        background:
                          'linear-gradient(to right, var(--accent), transparent)',
                        opacity: 0.2,
                      }}
                    />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background), var(--background-secondary))',
          }}
        />

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Got questions? We&apos;ve got answers.
            </p>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto">
            <div
              className="backdrop-blur-xl border rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--background-card)',
                borderColor: 'var(--border)',
              }}
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--background-secondary)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px]"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
        />

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Automate Your Job Search Today
              </h2>
              <p
                className="text-lg mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                Clone the repo, set your preferences, and let Job Automator do
                the heavy lifting. Open source, runs locally, free forever.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://github.com/Anujkumar2001/naukri-job"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group">
                    <Github className="mr-2 w-5 h-5" />
                    View on GitHub
                  </Button>
                </a>
              </div>

              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Open Source • Runs Locally • Free Forever • Your Data Stays With
                You
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
