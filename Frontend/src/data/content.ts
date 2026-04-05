import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import type {
  ClientColumn,
  FooterContent,
  HeroContent,
  LeadershipItem,
  NavItem,
  PhilosophyItem,
  PortfolioItem,
  ProofItem,
  SiteMetadata,
  ThemeOption,
  ValueItem,
} from "@/types/content";

export const siteMetadata: SiteMetadata = {
  title: "Federation LLP | Group Strategy, Governance and Operating Companies",
  description:
    "Federation LLP is a group platform for specialist businesses across strategy, operations, finance, people, growth and corporate administration.",
  keywords: [
    "Federation LLP",
    "group of companies",
    "business management group",
    "specialist operating companies",
    "corporate governance",
  ],
  lightThemeColor: "#f8f7f4",
  darkThemeColor: "#101722",
  iconHref: "/favicon.svg",
};

export const themeOptions: ThemeOption[] = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
];

export const navigation: NavItem[] = [
  { label: "Group Model", href: "#philosophy" },
  { label: "Companies", href: "#portfolio" },
  { label: "Who We Work With", href: "#clients" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#cta" },
];

export const heroContent: HeroContent = {
  eyebrow: "Federation LLP · Group Platform for Specialist Businesses",
  titleLines: ["A business group", "built for clear", "leadership and", "specialist execution"],
  description:
    "Federation LLP provides central leadership, governance and strategic oversight for a focused group of specialist businesses. Each company operates in its own domain, while the group ensures consistency, discipline and long-term direction.",
  subpoints: [
    "Group-level governance and strategic oversight",
    "Independent specialist companies with defined operating roles",
    "Clear entry points for clients, partners and investors",
  ],
  primaryCta: { label: "Explore the group", href: "#portfolio" },
  secondaryCta: { label: "Contact group leadership", href: "#cta" },
  metrics: [
    { value: "6", label: "Operating companies" },
    { value: "18+", label: "Years of combined experience" },
    { value: "340+", label: "Client engagements supported" },
  ],
  quote: "A clear group model is only valuable when every company knows its role and every stakeholder knows where to start.",
};

export const proofIntro = {
  eyebrow: "WHY THIS GROUP MODEL WORKS",
  title: ["Practical proof for", "clients and partners"],
};

export const proofItems: ProofItem[] = [
  {
    value: "6",
    label: "Defined business units",
    detail: "Each company has a clear operating mandate instead of overlapping services.",
  },
  {
    value: "3",
    label: "Core stakeholder groups",
    detail: "The site now speaks directly to clients, partners and investors.",
  },
  {
    value: "1",
    label: "Group entry point",
    detail: "Federation acts as the central route for governance, introductions and strategic coordination.",
  },
];

export const marqueeItems = [
  "Group Governance",
  "Specialist Operating Companies",
  "Strategic Advisory",
  "Operational Management",
  "Financial Administration",
  "Corporate Support",
];

export const philosophyIntro = {
  eyebrow: "HOW THE GROUP OPERATES",
  title: ["A simple structure", "behind multiple businesses"],
};

export const philosophyItems: PhilosophyItem[] = [
  {
    number: "01",
    label: "GROUP ROLE",
    title: "Federation leads governance, direction and coordination",
    description:
      "The parent group sets standards, allocates oversight and creates a consistent operating model across the portfolio. This gives stakeholders one reliable centre for direction and accountability.",
  },
  {
    number: "02",
    label: "COMPANY ROLE",
    title: "Each business stays focused on its own specialist mandate",
    description:
      "The operating companies do not try to do everything. Each one is responsible for a specific area of expertise, which keeps the group sharper, more credible and easier to understand.",
  },
  {
    number: "03",
    label: "CLIENT BENEFIT",
    title: "Stakeholders get specialist delivery without fragmented engagement",
    description:
      "Clients and partners can access the right specialist business through a single group relationship, with clearer routing, less duplication and better strategic alignment.",
  },
];

export const portfolioIntro = {
  eyebrow: "THE GROUP COMPANIES",
  title: ["Specialist businesses.", "Defined responsibilities."],
  cta: { label: "Contact the group for introductions", href: "#cta" },
};

export const portfolioItems: PortfolioItem[] = [
  {
    code: "MRD-01",
    initial: "M",
    category: "STRATEGIC ADVISORY",
    name: "Meridian Advisory",
    description:
      "Supports leadership teams with strategic planning, market positioning and decision support on complex business priorities.",
    audience: "Best for boards, founders and senior leadership teams.",
    entityType: "Operating company",
    href: "#cta",
    tone: "#ebf0f8",
  },
  {
    code: "PXS-02",
    initial: "P",
    category: "OPERATIONAL MANAGEMENT",
    name: "Praxis Solutions",
    description:
      "Designs and improves operating systems, delivery structures and execution workflows across day-to-day business functions.",
    audience: "Best for operators and business managers.",
    entityType: "Operating company",
    href: "#cta",
    tone: "#f0ede8",
  },
  {
    code: "SLF-03",
    initial: "S",
    category: "FINANCIAL ADMINISTRATION",
    name: "Solace Finance",
    description:
      "Provides financial administration, reporting support and governance discipline for organisations that need tighter financial visibility.",
    audience: "Best for CFO functions, reporting teams and holding structures.",
    entityType: "Operating company",
    href: "#cta",
    tone: "#f4f2ef",
  },
  {
    code: "CDN-04",
    initial: "C",
    category: "HUMAN CAPITAL",
    name: "Cadence People",
    description:
      "Covers people operations, workforce structure and leadership capability for teams that are scaling or restructuring.",
    audience: "Best for HR leads and growth-stage teams.",
    entityType: "Operating company",
    href: "#cta",
    tone: "#edf2fa",
  },
  {
    code: "AXM-05",
    initial: "A",
    category: "GROWTH & EXPANSION",
    name: "Axiom Ventures",
    description:
      "Supports market expansion, partnership evaluation and growth planning when businesses are moving into new stages or geographies.",
    audience: "Best for growth initiatives and expansion planning.",
    entityType: "Operating company",
    href: "#cta",
    tone: "#f4f2ef",
  },
  {
    code: "NXS-06",
    initial: "N",
    category: "CORPORATE ADMINISTRATION",
    name: "Nexus Administration",
    description:
      "Handles administrative backbone functions, compliance processes and structured support that keep group operations orderly.",
    audience: "Best for governance, compliance and support operations.",
    entityType: "Shared services company",
    href: "#cta",
    tone: "#ebf0f8",
  },
];

export const clientShowcaseIntro = {
  eyebrow: "WHO THE GROUP SUPPORTS",
  title: ["Client types across", "the businesses we serve"],
  description:
    "These are representative client profiles and sectors that the group companies commonly support. The icons are directional references so stakeholders can quickly read the breadth of coverage.",
};

export const clientColumns: ClientColumn[] = [
  {
    title: "Leadership & Advisory",
    items: [
      { name: "Private Holdings", category: "Board advisory", detail: "Owners and leadership teams requiring strategic direction.", icon: Landmark },
      { name: "Growth Ventures", category: "Expansion planning", detail: "Businesses preparing for new markets or new operating phases.", icon: Globe2 },
      { name: "Professional Firms", category: "Strategic support", detail: "Service-led companies refining positioning and operations.", icon: BriefcaseBusiness },
      { name: "Investment Partners", category: "Governance coordination", detail: "Stakeholders needing group-level visibility and structure.", icon: Handshake },
    ],
  },
  {
    title: "Operations & Administration",
    items: [
      { name: "Manufacturing Groups", category: "Operational systems", detail: "Businesses improving process discipline and delivery consistency.", icon: Factory },
      { name: "Multi-site Businesses", category: "Shared services", detail: "Operators standardising central functions across locations.", icon: Building2 },
      { name: "Hospitality Operators", category: "Administration", detail: "Teams needing stronger back-office and compliance support.", icon: Hotel },
      { name: "Regulated Businesses", category: "Corporate control", detail: "Organisations with tighter governance and reporting obligations.", icon: ShieldCheck },
    ],
  },
  {
    title: "People, Finance & Community",
    items: [
      { name: "Education Providers", category: "People systems", detail: "Institutions aligning leadership capability and workforce planning.", icon: GraduationCap },
      { name: "Health Services", category: "Structure and compliance", detail: "Operators balancing growth, workforce needs and governance.", icon: HeartPulse },
      { name: "Family Enterprises", category: "Financial discipline", detail: "Businesses formalising reporting and administration as they scale.", icon: BadgeDollarSign },
      { name: "Emerging Groups", category: "Group formation", detail: "Founders organising multiple entities under a clearer structure.", icon: Building2 },
    ],
  },
];

export const leadershipIntro = {
  eyebrow: "GROUP LEADERSHIP",
  title: ["Visible leadership", "builds trust"],
  description:
    "A business group usually gets approved when stakeholders can see who leads it, what they are responsible for and how decisions are made.",
};

export const leadershipItems: LeadershipItem[] = [
  {
    name: "Group Managing Partner",
    role: "Federation LLP",
    focus: "Group strategy and governance",
    bio: "Leads portfolio direction, stakeholder relationships and the governance standards that apply across the group.",
  },
  {
    name: "Director of Operations",
    role: "Federation LLP",
    focus: "Operating model and shared services",
    bio: "Coordinates how central support functions and operating businesses work together without overlap.",
  },
  {
    name: "Head of Partnerships",
    role: "Federation LLP",
    focus: "Client, investor and partner entry points",
    bio: "Acts as the first routing point for external relationships and directs enquiries to the right company or leadership contact.",
  },
];

export const valuesIntro = {
  eyebrow: "GROUP STANDARDS",
  title: ["Principles stakeholders", "can assess quickly"],
  quote:
    "We build specialist businesses with clear roles, disciplined governance and a single point of accountability at group level.",
  quoteAttribution: "Federation LLP Group Positioning",
};

export const valueItems: ValueItem[] = [
  {
    numeral: "I",
    title: "Clear operating boundaries",
    description:
      "Every company should have a role that is easy to explain, commercially useful and distinct from the rest of the group.",
  },
  {
    numeral: "II",
    title: "Governance before expansion",
    description:
      "The group should scale only when leadership, reporting and accountability are strong enough to support the next layer of growth.",
  },
  {
    numeral: "III",
    title: "Specialism over generalism",
    description:
      "Each business exists to do one area of work well, not to become a broad and confusing services list.",
  },
  {
    numeral: "IV",
    title: "One front door for the group",
    description:
      "External stakeholders should know exactly where to start, even when the right delivery point sits inside one of several companies.",
  },
];

export const ctaContent = {
  eyebrow: "CHOOSE YOUR NEXT STEP",
  title: ["Speak to the group", "through the right channel"],
  description:
    "Different stakeholders need different entry points. These routes make the site easier to approve and easier to use.",
  primaryCta: { label: "Contact group leadership", href: "mailto:hello@federationllp.com?subject=Group%20Enquiry" },
  secondaryCta: { label: "Request a group overview", href: "mailto:hello@federationllp.com?subject=Request%20Group%20Overview" },
};

export const audienceCtas = [
  {
    label: "For clients",
    href: "mailto:hello@federationllp.com?subject=Client%20Enquiry",
    description: "Use this if you need to be routed to the most relevant operating company.",
  },
  {
    label: "For partners",
    href: "mailto:hello@federationllp.com?subject=Partnership%20Enquiry",
    description: "Use this for collaboration, referrals or strategic partnership discussions.",
  },
  {
    label: "For investors",
    href: "mailto:hello@federationllp.com?subject=Investor%20Enquiry",
    description: "Use this for group structure, growth and investment-related conversations.",
  },
];

export const footerContent: FooterContent = {
  brand: "FEDERATION LLP",
  description:
    "Federation LLP is the central leadership and governance platform for a focused group of specialist operating businesses.",
  columns: [
    {
      title: "GROUP",
      links: [
        { label: "How the group works", href: "#philosophy" },
        { label: "Who we support", href: "#clients" },
        { label: "Leadership", href: "#leadership" },
      ],
    },
    {
      title: "COMPANIES",
      links: portfolioItems.map((item) => ({ label: item.name, href: item.href })),
    },
    {
      title: "AUDIENCES",
      links: [
        { label: "Clients", href: "mailto:hello@federationllp.com?subject=Client%20Enquiry" },
        { label: "Partners", href: "mailto:hello@federationllp.com?subject=Partnership%20Enquiry" },
        { label: "Investors", href: "mailto:hello@federationllp.com?subject=Investor%20Enquiry" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { label: "Group leadership", href: "mailto:hello@federationllp.com?subject=Group%20Enquiry" },
        { label: "Request overview", href: "mailto:hello@federationllp.com?subject=Request%20Group%20Overview" },
        { label: "General enquiries", href: "mailto:hello@federationllp.com" },
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
