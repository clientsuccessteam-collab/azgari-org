/**
 * Azgari Foundation — azgari.org link & content registry
 * ========================================================
 * azgari.org is the 501(c)(3) nonprofit surface. Only charitable /
 * educational data belongs here (mission, scholarships, free resources,
 * communities served). Commercial program pricing, paid courses, paid
 * tools, and strategy-call booking are operated separately at azgari.com
 * and reached via 301 redirects defined in `next.config.ts`.
 */

// The commercial sister site. Any CTA that used to point at a paid
// program funnel on this domain is routed here.
const AZGARI_COM = "https://azgari.com";

export const GHL_LINKS = {
  // Lead magnets — truly free educational downloads available to the public.
  leadMagnets: {
    checklist: "https://go.azgari.org/product-details/product/699b4bc7ea607e2e0d1a7f29",
    assessment: "https://go.azgari.org/product-details/product/699b4bd9c0607441c091969e",
    sbaGuide: "https://go.azgari.org/product-details/product/699b4bf1aec1c12d84307715",
  },

  // Forms — all charitable/informational.
  forms: {
    contact: "https://go.azgari.org/contact",
    scholarship: "https://go.azgari.org/non-for-profit-home-page-page",
  },

  // Commercial sister site (for any residual references). Strategy calls,
  // program pricing, and enrollment all happen there.
  commercialSite: AZGARI_COM,
};

// ============================================
// FREE EDUCATIONAL TOOLS (published by the Foundation)
// ============================================
// Only truly free resources live on azgari.org. Paid templates, kits, and
// the Vault are operated separately at azgari.com.
export const TOOLS = [
  {
    id: "startup-checklist",
    title: "47-Step Service Business Launch Checklist",
    description:
      "Step-by-step educational checklist covering entity formation, licensing, insurance, banking, marketing setup, and first-customer outreach — published by the Foundation as free community education.",
    price: "Free",
    href: GHL_LINKS.leadMagnets.checklist,
    category: "free",
    popular: false,
  },
  {
    id: "business-assessment",
    title: "Which Business Is Right for Me? (2-Min Quiz)",
    description:
      "A free educational self-assessment. Answer 12 questions about your skills, capital, and lifestyle — receive a personalized recommendation from the Foundation's library of service business models.",
    price: "Free",
    href: GHL_LINKS.leadMagnets.assessment,
    category: "free",
    popular: false,
  },
];

// Helper used by /tools page — kept for compatibility with the page's
// existing filtering logic.
export const getToolsByCategory = (category: string) =>
  TOOLS.filter((tool) => tool.category === category);

// ============================================
// MEDIA / PODCASTS (educational interviews & appearances)
// ============================================
export const MEDIA = [
  {
    id: "built-online",
    title: "Built Online with Cody McGuffie",
    description:
      "Azgari Lipshy, founder of Azgari Foundation, discusses validating demand, door-knocking, micro-influencer marketing, and building recurring revenue models.",
    highlights: [
      "How to validate demand before you build",
      "Why door knocking still works in 2025",
      "Leveraging micro-influencers for local business growth",
      "Building recurring revenue models",
      "Taking a service business from zero to $300K in year one",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/ajjRBZXrEiQ",
    externalUrl: "https://youtu.be/ajjRBZXrEiQ",
  },
  {
    id: "elite-league",
    title: "Elite League Podcast with Greg Carlson",
    description:
      "Azgari Lipshy shares how professionals can leave corporate for business ownership and achieve economic freedom.",
    highlights: [
      "The 'golden handcuffs' problem in corporate",
      "Matching business models to lifestyle",
      "The franchise trap (and better options)",
      "When buying an existing business makes sense",
      "Stop reading and start doing",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/4T5OHIz40N8",
    externalUrl: "https://youtu.be/4T5OHIz40N8",
  },
  {
    id: "profitable-service-90-days",
    title: "How to Start a Profitable Service Business in 90 Days",
    description:
      "Educational interview breaking down the step-by-step path from idea to profitable service business.",
    highlights: [
      "The 90-day launch framework",
      "Picking a service model with proven demand",
      "Getting your first customers before launch",
      "Building systems from day one",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/fE4qyWibuRs",
    externalUrl: "https://youtu.be/fE4qyWibuRs",
  },
  {
    id: "systems-over-hustle",
    title: "Systems Over Hustle",
    description:
      "Azgari Lipshy explains why building systems beats grinding 80-hour weeks, and how operators can work smarter, not harder.",
    highlights: [
      "Why hustle culture kills businesses",
      "Building repeatable systems early",
      "Delegating before you think you're ready",
      "Scaling without burning out",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/c8-NxLi0Y7Y",
    externalUrl: "https://youtu.be/c8-NxLi0Y7Y",
  },
  {
    id: "solution-for-that",
    title: "There Is A Solution For That",
    description:
      "Azgari Lipshy discusses how to start a cash-flow positive service business with a seasoned launch team.",
    highlights: [
      "Why many solo founders struggle",
      "The importance of a seasoned launch team",
      "Educational resources for SBA loans",
      "Selecting profitable business models",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/iHAig1wnLok",
    externalUrl: "https://youtu.be/iHAig1wnLok",
  },
  {
    id: "build-scale-2026",
    title: "How to Build & Scale Your Business in 2026",
    description:
      "A forward-looking educational conversation about building and scaling a service business in the current market.",
    highlights: [
      "Market trends for service businesses in 2026",
      "Scaling strategies that actually work",
      "When to hire vs. when to automate",
      "Building a business that runs without you",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/hLaFRfBMjzQ",
    externalUrl: "https://youtu.be/hLaFRfBMjzQ",
  },
  {
    id: "scale-service-business",
    title: "How to Scale a Service Business",
    description:
      "Tactical educational discussion on growing a service business through key inflection points.",
    highlights: [
      "The inflection points in scaling",
      "Hiring your first team members",
      "Route density and territory management",
      "Building recurring revenue streams",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/QvKNpLzfkjk",
    externalUrl: "https://youtu.be/QvKNpLzfkjk",
  },
  {
    id: "mens-mental-health",
    title: "Men's Mental Health & Entrepreneurship",
    description:
      "A candid conversation about the mental-health challenges founders face and how to build resilience.",
    highlights: [
      "The loneliness of entrepreneurship",
      "Managing stress and uncertainty",
      "Building a support system",
      "Why mental health is a business asset",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/sC-7tsQ6xrk",
    externalUrl: "https://youtu.be/sC-7tsQ6xrk",
  },
  {
    id: "exit-corporate-1",
    title: "How to Exit Corporate the Smart Way",
    description:
      "The educational playbook for leaving a corporate job and transitioning into business ownership.",
    highlights: [
      "When to quit vs. when to build on the side",
      "Financial runway planning",
      "Picking the right business for your skills",
      "The corporate-to-owner transition timeline",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/pZyLWOh0tOA",
    externalUrl: "https://youtu.be/pZyLWOh0tOA",
  },
  {
    id: "exit-corporate-2",
    title: "How to Exit Corporate the Smart Way (Part 2)",
    description:
      "Continuing the educational conversation — deeper on execution and first steps.",
    highlights: [
      "Building momentum while still employed",
      "The first 30 days after quitting",
      "Avoiding common first-year mistakes",
      "Setting realistic revenue expectations",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/Jh38BgZ60Ig",
    externalUrl: "https://youtu.be/Jh38BgZ60Ig",
  },
  {
    id: "default-profitable",
    title: "Default Profitable Podcast",
    description:
      "Azgari Lipshy discusses bootstrapping, the 8-phase blueprint for launches in 120 days, SBA loans, and starting cash-positive.",
    highlights: [
      "Bootstrapping a supplement line as a teenager",
      "The 8-phase educational blueprint",
      "Funding readiness education for SBA loans",
      "Starting cash-positive with pre-booked contracts",
      "Validating ideas to scaling with teams and tech",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/xYH8xAfo8MI",
    externalUrl: "https://youtu.be/xYH8xAfo8MI",
  },
  {
    id: "amr-internet-guy",
    title: "Amr The Internet Guy Podcast",
    description:
      "Azgari Lipshy discusses digital-marketing strategies for local service businesses.",
    highlights: [
      "Local SEO for service businesses",
      "Leveraging Google Business Profile",
      "Social media strategies that work for local markets",
      "Building a lead-generation approach",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/wqbOtsiknEk",
    externalUrl: "https://youtu.be/wqbOtsiknEk",
  },
  {
    id: "melvin-edwards",
    title: "MelvinE.Edwards Show",
    description:
      "Azgari Lipshy discusses the fundamentals of building scalable service-based businesses.",
    highlights: [
      "Why service businesses offer a path to ownership",
      "How to identify profitable markets",
      "Building systems that allow you to step back",
      "Creating wealth through business equity",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/QPrqmiDo9rI",
    externalUrl: "https://youtu.be/QPrqmiDo9rI",
  },
  {
    id: "shebecameceo",
    title: "SheBecameCEO Podcast",
    description:
      "Azgari Lipshy shares her journey and advice for women founders considering business ownership.",
    highlights: [
      "Starting businesses as a teenager",
      "Overcoming imposter syndrome",
      "Why women make excellent service business owners",
      "Balancing business ownership with life responsibilities",
      "Building confidence through action",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/7MyHZy5etLQ",
    externalUrl: "https://youtu.be/7MyHZy5etLQ",
  },
  {
    id: "start-small-business-2026",
    title: "How To Start A Small Business In 2026",
    description:
      "A comprehensive educational guide to starting a small business — market selection, funding, and launch strategies.",
    highlights: [
      "Common business models for 2026",
      "Funding options beyond personal savings",
      "The first 90 days framework",
      "Common mistakes that affect new businesses",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/VGXXO71z_d8",
    externalUrl: "https://youtu.be/VGXXO71z_d8",
  },
];

// ============================================
// TRUST BADGES (external third-party profiles)
// ============================================
export const TRUST_LINKS = {
  googleBusiness: "https://share.google/SlJmbdLaQ1oJGkgeX",
  trustpilot: "https://www.trustpilot.com/review/azgari.com",
  bbb: "https://www.bbb.org/us/tx/austin/profile/business-consultant/azgari-0825-1000247694",
  linkedin: "https://www.linkedin.com/company/azgari",
  instagram: "https://www.instagram.com/azgari.lipshy/",
  youtube: "https://www.youtube.com/@azgarilipshy",
};

// ============================================
// LEAD MAGNETS (free educational downloads)
// ============================================
export const LEAD_MAGNETS = [
  {
    id: "checklist",
    icon: "📋",
    type: "Free Download",
    title: "47-Step Service Business Launch Checklist",
    description:
      "Educational checklist published by the Foundation covering entity formation, licensing, insurance, banking, marketing setup, and first-customer outreach.",
    cta: "Get the Checklist",
    href: GHL_LINKS.leadMagnets.checklist,
  },
  {
    id: "assessment",
    icon: "🎯",
    type: "Free 2-Minute Quiz",
    title: "Which Business Is Right for Me?",
    description:
      "Free educational self-assessment — 12 questions about your skills, capital, and lifestyle yield a personalized recommendation from the Foundation's library of service business models.",
    cta: "Take the Quiz",
    href: GHL_LINKS.leadMagnets.assessment,
  },
  {
    id: "sba-guide",
    icon: "🏦",
    type: "Free Download",
    title: "SBA Loan Readiness Guide",
    description:
      "A free educational guide covering SBA credit requirements, document preparation, underwriter expectations, and application packaging. Lending decisions are made by independent SBA-approved lenders.",
    cta: "Get the SBA Guide",
    href: GHL_LINKS.leadMagnets.sbaGuide,
  },
];

// ============================================
// PARTICIPANT STORIES (/case-studies)
// ============================================
// Only include real, verified participants with signed permission.
// Leave empty until verified stories are collected.
export const CASE_STUDIES: {
  id: string;
  name: string;
  location: string;
  business: string;
  image: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  quote: string;
  timeline: string;
  featured: boolean;
}[] = [];

// ============================================
// IMPACT METRICS (Social Mission)
// Used by ImpactModule component
// ============================================
export const IMPACT_METRICS = [
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Business Models Covered" },
  { value: "100%", label: "Participant Ownership" },
  { value: "35+", label: "Communities Served" },
];

// ============================================
// NONPROFIT COMPLIANCE DATA
// Single source of truth for 501(c)(3) disclosures used site-wide.
// ============================================
export const NONPROFIT = {
  name: "Azgari Foundation",
  type: "501(c)(3) Nonprofit Organization",
  // EIN: 9-digit XX-XXXXXXX format, confirmed by Foundation leadership.
  ein: "41-2896092",

  // Full charitable mission statement (leads every page).
  mission:
    "Azgari Foundation is a 501(c)(3) nonprofit organization whose mission is to increase economic mobility, expand access to business ownership, and create jobs in underserved communities through entrepreneurship education, mentorship, and workforce development programs.",

  // Short mission (tight spaces).
  missionShort:
    "Entrepreneurship education, mentorship & workforce development for economic mobility and community job creation.",

  // Reinvestment disclosure — no specific tuition amount referenced on .org.
  reinvestmentStatement:
    "As a 501(c)(3) nonprofit, Foundation revenue funds charitable educational services, scholarships for veterans, foster youth, single parents & first-generation entrepreneurs, free community training programs, and expansion of Foundation programming to underserved communities.",

  // Global legal disclosure (rendered site-wide in the footer).
  legalDisclosure:
    "Azgari Foundation is a tax-exempt nonprofit organization under Section 501(c)(3) of the Internal Revenue Code. Foundation revenue supports charitable educational services, scholarships, and workforce development initiatives.",

  // Scholarship allocation statement.
  scholarshipAllocation:
    "A meaningful portion of Foundation revenue is allocated directly to scholarships and free programming for underserved founders — including aging-out foster youth, veterans, single parents, and first-generation entrepreneurs from underserved communities.",

  // Results disclaimer (FTC-safe) — required on any page that mentions outcomes.
  resultsDisclaimer:
    "Individual results vary based on effort, market conditions, and capital. Azgari Foundation does not guarantee any specific level of income or business success.",
};
