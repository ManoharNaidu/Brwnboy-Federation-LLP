import type {
  FooterContent,
  HeroContent,
  NavItem,
  PhilosophyItem,
  PortfolioItem,
  SiteMetadata,
  ThemeOption,
  ValueItem,
} from "@/types/content";

export const siteMetadata: SiteMetadata = {
  title: "Federation LLP | The Architecture of Excellence in Business",
  description:
    "Federation LLP governs a curated portfolio of specialist companies across business management, administration, and consultancy services.",
  keywords: [
    "Federation LLP",
    "business management",
    "strategic advisory",
    "corporate governance",
    "administrative excellence",
  ],
  lightThemeColor: "#f4efe7",
  darkThemeColor: "#161311",
  iconHref: "/favicon.svg",
};

export const themeOptions: ThemeOption[] = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
];

export const navigation: NavItem[] = [
  { label: "About", href: "#philosophy" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#values" },
  { label: "Insights", href: "#footer" },
];

export const heroContent: HeroContent = {
  eyebrow: "Est. Federation LLP · Unified Leadership",
  titleLines: ["The", "Architecture", "of Excellence", "in Business"],
  description:
    "A parent organisation governing a curated ecosystem of specialised companies, each a master of its domain, unified under a single vision of administrative and strategic supremacy.",
  primaryCta: { label: "Discover the Portfolio", href: "#portfolio" },
  metrics: [
    { value: "6", label: "Specialist Companies" },
    { value: "18+", label: "Years of Collective Expertise" },
    { value: "340+", label: "Enterprises Transformed" },
  ],
  quote: "Where complexity meets clarity — through unified, expert leadership.",
};

export const marqueeItems = [
  "Business Management",
  "Strategic Advisory",
  "Administrative Excellence",
  "Consultancy Services",
  "Corporate Governance",
  "Operational Leadership",
];

export const philosophyIntro = {
  eyebrow: "OUR FOUNDATION",
  title: ["Three dimensions of", "organisational philosophy"],
};

export const philosophyItems: PhilosophyItem[] = [
  {
    number: "01",
    label: "WHAT WE DO",
    title: "Strategic Oversight & Administrative Excellence",
    description:
      "Federation LLP provides the governance layer that every complex business structure needs — a coherent, authoritative centre bringing clarity, accountability, and direction to every entity within its portfolio.",
  },
  {
    number: "02",
    label: "HOW WE DO IT",
    title: "A Collective Ecosystem of Specialists",
    description:
      "We operate as a federated network — each company within our portfolio is a genuine specialist, operating with entrepreneurial agility while benefiting from shared infrastructure and institutional knowledge.",
  },
  {
    number: "03",
    label: "WHY WE DO IT",
    title: "Unified Leadership Across Complex Landscapes",
    description:
      "We transform fragmented operational challenges into streamlined, elegant structures where every decision is informed, intentional, and aligned with a singular, overarching vision of excellence.",
  },
];

export const portfolioIntro = {
  eyebrow: "THE FEDERATION PORTFOLIO",
  title: ["Six companies.", "One vision."],
  cta: { label: "View All Entities", href: "#footer" },
};

export const portfolioItems: PortfolioItem[] = [
  {
    code: "MRD-01",
    initial: "M",
    category: "STRATEGIC ADVISORY",
    name: "Meridian Advisory",
    description:
      "High-level strategic counsel for executive leadership teams navigating complex market transformations and organisational pivots.",
    tone: "#e8dfd3",
  },
  {
    code: "PXS-02",
    initial: "P",
    category: "OPERATIONAL MANAGEMENT",
    name: "Praxis Solutions",
    description:
      "End-to-end operational frameworks that translate vision into measurable outcomes with precision execution at every tier.",
    tone: "#d8dfde",
  },
  {
    code: "SLF-03",
    initial: "S",
    category: "FINANCIAL ADMINISTRATION",
    name: "Solace Finance",
    description:
      "Meticulous financial governance, reporting infrastructure, and treasury management for holding entities and subsidiaries.",
    tone: "#d9d0ca",
  },
  {
    code: "CDN-04",
    initial: "C",
    category: "HUMAN CAPITAL",
    name: "Cadence People",
    description:
      "Talent architecture, leadership development, and workforce strategy designed for high-performance organisational cultures.",
    tone: "#d8dfeb",
  },
  {
    code: "AXM-05",
    initial: "A",
    category: "GROWTH & EXPANSION",
    name: "Axiom Ventures",
    description:
      "Market entry strategy, venture evaluation, and growth capital advisory for businesses at critical inflection points.",
    tone: "#d8d2c9",
  },
  {
    code: "NXS-06",
    initial: "N",
    category: "CORPORATE ADMINISTRATION",
    name: "Nexus Administration",
    description:
      "Integrated back-office systems, compliance management, and secretarial services forming the operational backbone of enterprise.",
    tone: "#dbe2d8",
  },
];

export const valuesIntro = {
  eyebrow: "THE FEDERATION STANDARD",
  title: ["Principles that", "define our practice"],
  quote:
    "We do not manage businesses. We build the conditions in which they thrive.",
  quoteAttribution: "Federation LLP Charter, Founding Principles",
};

export const valueItems: ValueItem[] = [
  {
    numeral: "I",
    title: "Institutional Integrity",
    description:
      "Every decision, recommendation, and engagement is held to the highest standard of professional conduct and transparent governance.",
  },
  {
    numeral: "II",
    title: "Precision Over Volume",
    description:
      "We do not scale through dilution. Our portfolio companies are hand-selected for depth of expertise, not breadth of offering.",
  },
  {
    numeral: "III",
    title: "Long-term Partnership",
    description:
      "Our relationships are measured in decades, not engagements. We become embedded in the architecture of our clients' success.",
  },
  {
    numeral: "IV",
    title: "Unified Intelligence",
    description:
      "Every company shares insights and strategic intelligence — creating a compound advantage unavailable elsewhere.",
  },
];

export const ctaContent = {
  eyebrow: "BEGIN THE CONVERSATION",
  title: ["Ready to redefine your", "business architecture?"],
  description:
    "Whether you are an enterprise seeking strategic alignment or an organisation navigating structural complexity, we invite you to connect.",
  primaryCta: { label: "Engage Federation", href: "mailto:hello@federationllp.com" },
  secondaryCta: { label: "Download Overview", href: "#footer" },
};

export const footerContent: FooterContent = {
  brand: "FEDERATION LLP",
  description:
    "A parent organisation governing a portfolio of specialist companies in Business Management, Administration, and Consultancy.",
  columns: [
    {
      title: "PORTFOLIO",
      links: portfolioItems.map((item) => ({ label: item.name, href: "#portfolio" })),
    },
    {
      title: "SERVICES",
      links: [
        { label: "Strategic Advisory", href: "#portfolio" },
        { label: "Operational Mgmt", href: "#portfolio" },
        { label: "Financial Governance", href: "#portfolio" },
        { label: "Human Capital", href: "#portfolio" },
        { label: "Corporate Admin", href: "#portfolio" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Federation", href: "#philosophy" },
        { label: "Our Philosophy", href: "#philosophy" },
        { label: "Insights", href: "#values" },
        { label: "Careers", href: "#footer" },
        { label: "Contact Us", href: "mailto:hello@federationllp.com" },
      ],
    },
    {
      title: "CONNECT",
      links: [
        { label: "LinkedIn", href: "#footer" },
        { label: "Twitter / X", href: "#footer" },
        { label: "Newsletter", href: "#footer" },
        { label: "Client Portal", href: "#footer" },
        { label: "Press Enquiries", href: "mailto:hello@federationllp.com" },
      ],
    },
  ],
  legal: "© 2025 Federation LLP. All rights reserved.",
  policies: [
    { label: "Privacy Policy", href: "#footer" },
    { label: "Terms of Engagement", href: "#footer" },
    { label: "Cookie Policy", href: "#footer" },
  ],
};
