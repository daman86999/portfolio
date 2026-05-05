export interface PortfolioMeta {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface ThemeColors {
  bg: string;
  bg2: string;
  purple: string;
  purpleLight: string;
  accent: string;
  text: string;
  muted: string;
  card: string;
  border: string;
}

export interface Theme {
  preset: string;
  colors: ThemeColors;
  fonts: {
    display: string;
    body: string;
    mono: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Nav {
  logo: string;
  links: NavLink[];
  cta: { label: string; href: string };
}

export interface HeroCta {
  primary: { label: string; href: string };
  secondary: { label: string; href: string; icon: string }[];
}

export interface ResumeDownload {
  label: string;
  href: string;
  filename: string;
}

export interface Hero {
  openForoppurtunity: boolean;
  name: string;
  nameAccent: string;
  title: string;
  description: string;
  avatarLetter: string;
  floatingTags?: string[];
  cta: HeroCta;
  resumeDownload: ResumeDownload;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  locationEmoji: string;
  tags: string[];
  bullets: string[];
}

export interface ProjectStat {
  label: string;
  emoji: string;
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  stats: ProjectStat[];
  tags: string[];
}

export interface Skill {
  label: string;
  icon: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  certificateLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export type ContactIcon = "github" | "linkedin" | "email" | "phone" | "download";

export interface ContactLink {
  label: string;
  href: string;
  icon: ContactIcon;
}

export interface Contact {
  heading: string;
  headingAccent: string;
  subtext: string;
  links: ContactLink[];
}

export interface SectionToggle {
  enabled: boolean;
}

export interface PortfolioData {
  meta: PortfolioMeta;
  theme: Theme;
  nav: Nav;
  hero: Hero;
  marquee: string[];
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
  education: Education[];
  contact: Contact;
  footer: { text: string };
  sections: Record<string, SectionToggle>;
}
