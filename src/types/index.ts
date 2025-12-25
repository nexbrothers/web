export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  status: 'live' | 'coming-soon';
  features?: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
