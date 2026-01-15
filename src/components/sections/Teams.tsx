'use client';

import { Container } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Linkedin,
  Twitter,
  Github,
  Code2,
  Sparkles,
  Building2,
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  company?: string;
  image: string;
  experience?: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamsProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
}

export function Teams({
  title = 'Meet Our Team',
  subtitle,
  members,
}: TeamsProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--background)' }}
      />

      {/* Secondary background layer */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundColor: 'var(--background-secondary)' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.4,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.2,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              backgroundColor: 'var(--background-card)',
              border: '1px solid var(--border)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: 'var(--accent)' }}
            >
              THE BROTHERS
            </span>
          </motion.div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {subtitle}
            </p>
          )}
        </FadeIn>

        {/* Team Cards */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative h-full cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Main card */}
                <div
                  className="glass-card relative h-full rounded-3xl overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)]"
                  style={{
                    backgroundColor: 'var(--background-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {/* Inner content */}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar container */}
                      <div className="relative mb-8">
                        {/* Gradient ring - subtle glow on hover */}
                        <div
                          className="absolute -inset-1 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--accent), var(--accent-purple))',
                          }}
                        />

                        {/* Avatar */}
                        <div
                          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden"
                          style={{
                            border: '4px solid var(--background)',
                            boxShadow: '0 4px 20px var(--shadow)',
                          }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          />
                        </div>

                        {/* Experience badge */}
                        {member.experience && (
                          <div
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap"
                            style={{
                              background:
                                'linear-gradient(135deg, var(--accent), var(--accent-purple))',
                              color: 'white',
                              boxShadow: '0 4px 16px var(--glow)',
                            }}
                          >
                            {member.experience}
                          </div>
                        )}
                      </div>

                      {/* Name */}
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {member.name}
                      </h3>

                      {/* Role */}
                      <div className="flex items-center gap-2 mb-2">
                        <Code2
                          className="w-4 h-4"
                          style={{ color: 'var(--accent)' }}
                        />
                        <p
                          className="text-sm md:text-base font-medium"
                          style={{ color: 'var(--accent)' }}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* Company */}
                      {member.company && (
                        <div className="flex items-center gap-2 mb-5">
                          <Building2
                            className="w-3.5 h-3.5"
                            style={{ color: 'var(--text-muted)' }}
                          />
                          <p
                            className="text-sm"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            @ {member.company}
                          </p>
                        </div>
                      )}

                      {/* Divider */}
                      <div
                        className="w-16 h-0.5 rounded-full mb-5"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent, var(--accent), var(--accent-purple), transparent)',
                        }}
                      />

                      {/* Bio */}
                      {member.bio && (
                        <p
                          className="text-sm md:text-base leading-relaxed mb-6 max-w-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {member.bio}
                        </p>
                      )}

                      {/* Social Links */}
                      {member.social && (
                        <div className="flex gap-3">
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl transition-all duration-200 bg-background text-text-secondary border border-(--border) hover:text-accent hover:border-accent hover:scale-110"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.social.twitter && (
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl transition-all duration-200 bg-background text-text-secondary border border-(--border) hover:text-accent hover:border-accent hover:scale-110"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl transition-all duration-200 bg-background text-text-secondary border border-(--border) hover:text-accent hover:border-accent hover:scale-110"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at top right, var(--accent), transparent 70%)',
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at bottom left, var(--accent-purple), transparent 70%)',
                    }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
