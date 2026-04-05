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
  primaryCta: NavItem;
  metrics: HeroMetric[];
  quote: string;
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
  tone: string;
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
