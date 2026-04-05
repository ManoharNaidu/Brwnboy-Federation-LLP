import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  keywords: string[];
  lightThemeColor: string;
  darkThemeColor: string;
  iconHref: string;
};

export type ThemeMode = "light" | "dark";

export type ThemeOption = {
  mode: ThemeMode;
  label: string;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLines: string[];
  description: string;
  subpoints: string[];
  primaryCta: NavItem;
  secondaryCta: NavItem;
  metrics: HeroMetric[];
  quote: string;
};

export type ProofItem = {
  value: string;
  label: string;
  detail: string;
};

export type PhilosophyItem = {
  number: string;
  label: string;
  title: string;
  description: string;
};

export type PortfolioItem = {
  code: string;
  initial: string;
  category: string;
  name: string;
  description: string;
  audience: string;
  entityType: string;
  href: string;
  tone: string;
};

export type ClientReference = {
  name: string;
  category: string;
  detail: string;
  icon: LucideIcon;
};

export type ClientColumn = {
  title: string;
  items: ClientReference[];
};

export type LeadershipItem = {
  name: string;
  role: string;
  focus: string;
  bio: string;
};

export type ValueItem = {
  numeral: string;
  title: string;
  description: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type FooterContent = {
  brand: string;
  description: string;
  columns: FooterColumn[];
  legal: string;
  policies: NavItem[];
};
