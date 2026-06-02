"use client";

import Image from 'next/image';

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
    <section className="work-section section-shell">
      <div className="section-heading reveal is-visible">
        <p className="eyebrow">The Brothers</p>
        <h2>{title}</h2>
        {subtitle && <p className="mt-4">{subtitle}</p>}
      </div>

      <div className="work-grid">
        {members.map((member, index) => (
          <article className="work-card reveal is-visible" key={index}>
            <div className="work-index">0{index + 1}</div>
            <div className="mb-6 relative w-20 h-20 rounded-full overflow-hidden border-2" style={{ borderColor: 'var(--line)' }}>
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h3>{member.name}</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--oxide)' }}>
              {member.role} {member.company && `@ ${member.company}`}
            </p>
            <p className="mt-4">{member.bio}</p>
            
            <ul className="mt-6 flex flex-wrap gap-2">
              {member.experience && <li>{member.experience} Experience</li>}
              {member.social?.linkedin && <li><a href={member.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
              {member.social?.twitter && <li><a href={member.social.twitter} target="_blank" rel="noreferrer">Twitter</a></li>}
              {member.social?.github && <li><a href={member.social.github} target="_blank" rel="noreferrer">GitHub</a></li>}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
