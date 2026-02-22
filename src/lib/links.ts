/**
 * Centralized GHL Links & Product Data
 * =====================================
 * Update URLs and products here — changes apply site-wide
 * 
 * TO ADD A NEW COURSE: Add to COURSES array below
 * TO ADD A NEW TOOL: Add to TOOLS array below
 */

export const GHL_LINKS = {
  // Main CTA (used across navbar, hero, footers)
  qualify: "/qualify",
  qualifyQuiz: "https://go.azgari.org/landing-page-d",
  
  // Program Pages
  programs: {
    quickWin: "https://go.azgari.org/quick-win",
    foundation: "https://go.azgari.org/foundation",
    fullLaunch: "https://go.azgari.org/full-launch",
    scale: "https://go.azgari.org/scale",
    acquisition: "https://go.azgari.org/landing-page-d",
  },
  
  // Lead Magnets (Free Downloads — routed through store for email capture)
  leadMagnets: {
    checklist: "https://go.azgari.org/product-details/product/699b4bc7ea607e2e0d1a7f29",
    assessment: "https://go.azgari.org/product-details/product/699b4bd9c0607441c091969e",
    sbaGuide: "https://go.azgari.org/product-details/product/699b4bf1aec1c12d84307715",
  },
  
  // Forms
  forms: {
    contact: "https://go.azgari.org/contact",
    scholarship: "https://go.azgari.org/non-for-profit-home-page-page",
    bookCall: "https://go.azgari.org/book-call",
  },
  
  // All Courses Page
  allCourses: "https://go.azgari.org/digitalcoursespage",
  
  // All Tools Page  
  allTools: "https://go.azgari.org/tools",
};

// Default CTA configuration
export const DEFAULT_CTA = {
  text: "See If You Qualify →",
  href: GHL_LINKS.qualify,
};

// ============================================
// PROGRAMS (Services Page & Homepage Pricing)
// ============================================
// One flagship offer — done-for-you business building
export const PROGRAMS = [
  {
    name: "Done-for-You Business Build",
    price: "$50,000",
    note: "Payment plans and SBA funding paths available",
    description: "We build your service business from scratch — business selection, entity setup, branding, marketing, hiring, operations, and customer acquisition. You become an owner, not an operator.",
    whoItsFor: "Professionals, veterans, and operators with $50K+ capital ready to own a business",
    guarantee: "Operational business with manager in seat in 180 days — or we keep working until it is",
    timeCommitment: "~1 hr/wk (oversight only)",
    features: [
      "Data-driven business model selection (50+ proven models)",
      "Full entity formation, licensing, and compliance — handled",
      "Complete brand buildout (name, logo, website, marketing systems)",
      "Customer acquisition — paying clients before official launch",
      "Full operational team hired and trained",
      "Manager placed and running day-to-day operations",
      "Funding concierge for SBA loan qualification",
      "12 months of ongoing support",
    ],
    graduation: null,
    href: GHL_LINKS.programs.scale,
    featured: true,
  },
];

// ============================================
// COURSES (Courses Page)
// To add a course: copy a block, update fields
// ============================================
export const COURSES = [
  {
    id: "acquisition-accelerator",
    title: "Small Business Acquisition Accelerator",
    tagline: "Buy a real business without overpaying.",
    price: "$297",
    href: "https://go.azgari.org/product-details/product/691a490c8a72126f6ccd8cd3",
    features: [
      "How to value a business",
      "How to read financials (real-life examples)",
      "What sellers hide",
      "Due-diligence templates",
      "Deal negotiation scripts",
    ],
    perfectFor: "Anyone researching BizBuySell or thinking of replacing their job with a business purchase.",
    featured: true,
  },
  {
    id: "franchise-blueprint",
    title: "Franchise Buying Blueprint",
    tagline: "Avoid the traps. Choose the RIGHT franchise.",
    price: "$247",
    href: "https://go.azgari.org/product-details/product/691a6125c9b6806d37b01793",
    features: [
      "Full due-diligence SOP",
      "Item 19 breakdowns",
      "Red flag detection",
      "Interview scripts",
      "Franchise broker scripts (to protect yourself)",
    ],
    perfectFor: "Buyers who want clarity BEFORE committing $50K–$150K to a franchise.",
    featured: false,
  },
  {
    id: "30-day-launch",
    title: "Start a Service Business in 30 Days",
    tagline: "Launch a local service business fast — with proven templates.",
    price: "$247",
    href: "https://go.azgari.org/product-details/product/691a5d8eb1ec060e1770b2f2",
    features: [
      "30-day launch roadmap",
      "Pricing templates",
      "Marketing scripts",
      "Operations & workflow templates",
      "Step-by-step launch instructions",
    ],
    perfectFor: "People who want a fast, profitable business they own 100%.",
    featured: true,
  },
  {
    id: "sba-masterclass",
    title: "SBA Loan Approval Masterclass",
    tagline: "Get SBA-approved without a broker. Step-by-step.",
    price: "$297",
    href: "https://go.azgari.org/product-details/product/691aa46eb1ec0612d4953f38",
    features: [
      "Exact documents, templates & loan packaging checklist",
      "Funding readiness assessment",
      "Underwriter psychology: what gets approved",
      "Credit, debt, utilization, and income structuring",
      "How to submit your application correctly",
    ],
    perfectFor: "Anyone who needs funding to start or buy a business.",
    featured: false,
  },
  {
    id: "slack-community",
    title: "Unlimited Slack Access + Weekly Live Calls",
    tagline: "Get daily support. Get answers. Get unstuck.",
    price: "$67",
    href: "https://go.azgari.org/product-details/product/691aad968a721238effd6684",
    features: [
      "Unlimited Slack support",
      "Weekly Coffee & Chat live Q&A",
      "Fireside Chats",
      "Daily help with any digital course",
    ],
    perfectFor: "Anyone who wants personal support with any of our digital programs.",
    featured: false,
  },
];

// ============================================
// TOOLS (Tools Page)
// To add a tool: copy a block, update fields
// category: "free" | "starter" | "premium" | "vault"
// ============================================
export const TOOLS = [
  // FREE
  {
    id: "startup-checklist",
    title: "47-Step Service Business Launch Checklist",
    description: "The exact checklist our team uses to launch businesses. Covers entity formation, licensing, insurance, banking, marketing setup, and first-customer acquisition — nothing left to guesswork.",
    price: "Free",
    href: GHL_LINKS.leadMagnets.checklist,
    category: "free",
    popular: false,
  },
  {
    id: "business-assessment",
    title: "Which Business Is Right for Me? (2-Min Quiz)",
    description: "Answer 12 quick questions about your skills, capital, and lifestyle — get a personalized recommendation from our library of 50+ proven service business models.",
    price: "Free",
    href: GHL_LINKS.leadMagnets.assessment,
    category: "free",
    popular: false,
  },
  
  // STARTER ($27-$47)
  {
    id: "business-model-canvas",
    title: "Business Model Canvas for Service Businesses",
    description: "Visual framework to map your value proposition, revenue streams, and customer segments.",
    price: "$27",
    href: "https://go.azgari.org/product-details/product/6965204d936bd80d7c7e566b",
    category: "starter",
    popular: false,
  },
  {
    id: "pricing-calculator",
    title: "Pricing Calculator Spreadsheet",
    description: "Automated tool to calculate profitable pricing based on costs, labor, and market rates.",
    price: "$37",
    href: "https://go.azgari.org/product-details/product/698520f2504addb78dcd9411",
    category: "starter",
    popular: true,
  },
  {
    id: "customer-acquisition",
    title: "Customer Acquisition Playbook",
    description: "Proven strategies to find, attract, and convert your first 100 customers.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/696523f4936bd836a77e56c7",
    category: "starter",
    popular: false,
  },
  {
    id: "sop-templates",
    title: "Operations SOP Templates",
    description: "Ready-to-use standard operating procedures for daily business operations.",
    price: "$37",
    href: "https://go.azgari.org/product-details/product/698520fd8b0f990bbc48d29e",
    category: "starter",
    popular: false,
  },
  {
    id: "30-day-action-plan",
    title: "First 30 Days Action Plan",
    description: "Day-by-day roadmap for your critical first month as a business owner.",
    price: "$27",
    href: "https://go.azgari.org/product-details/product/6965204d936bd8267a7e566d",
    category: "starter",
    popular: false,
  },
  
  // INDUSTRY STARTUP KITS ($47)
  {
    id: "pressure-washing-kit",
    title: "Pressure Washing Startup Kit",
    description: "Complete launch package: equipment checklist, pricing calculator, 30-day plan, customer scripts, and licensing guide.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/699b3720c8397947f9fd7a54",
    category: "starter",
    popular: true,
  },
  {
    id: "lawn-care-kit",
    title: "Lawn Care Startup Kit",
    description: "Everything to launch a lawn care business: equipment guide, route pricing, 30-day plan, scripts, and insurance checklist.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/699b3720c83979b2d4fd7a65",
    category: "starter",
    popular: false,
  },
  {
    id: "junk-removal-kit",
    title: "Junk Removal Startup Kit",
    description: "Full junk removal launch package: truck buying guide, volume pricing calculator, dump site strategy, and customer scripts.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/699b3721aec1c161782b3f23",
    category: "starter",
    popular: false,
  },
  
  // PREMIUM ($67-$147)
  {
    id: "boring-business-kit",
    title: "Boring Business Starter Kit",
    description: "Everything you need to launch a cash-flow-positive service business that runs without you.",
    price: "$97",
    href: "https://go.azgari.org/product-details/product/698520e5504add54e6cd91bd",
    category: "premium",
    popular: true,
  },
  {
    id: "veteran-launch-kit",
    title: "Veteran Launch Kit",
    description: "Resources specifically designed for veterans transitioning to business ownership.",
    price: "$67",
    href: "https://go.azgari.org/product-details/product/698520e5c3023e6137d825d7",
    category: "premium",
    popular: false,
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning Accelerator",
    description: "Complete toolkit for starting and scaling a commercial cleaning business.",
    price: "$147",
    href: "https://go.azgari.org/product-details/product/698520e639b827283a615377",
    category: "premium",
    popular: false,
  },
  {
    id: "cash-flow-kit",
    title: "Cash Flow Mastery Kit",
    description: "Templates and systems to manage cash flow and stay profitable from day one.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/698520e647316204892b4f1e",
    category: "premium",
    popular: false,
  },
  {
    id: "local-marketing",
    title: "Local Marketing Toolkit",
    description: "Proven local marketing strategies that work for service businesses.",
    price: "$47",
    href: "https://go.azgari.org/product-details/product/698520e63b1e97cdb46f82c1",
    category: "premium",
    popular: false,
  },
  
  // VAULT
  {
    id: "complete-vault",
    title: "The Complete Vault",
    description: "Every tool, template, and resource we offer — plus lifetime updates. Best value for serious entrepreneurs.",
    price: "$697",
    href: "https://go.azgari.org/product-details/product/698520fe08999c7b243fce35",
    category: "vault",
    popular: false,
  },
];

// ============================================
// MEDIA / PODCASTS (Media Page)
// To add a podcast: copy a block, update fields
// NOTE: Update externalUrl with actual podcast links
// ============================================
export const MEDIA = [
  {
    id: "built-online",
    title: "Built Online with Cody McGuffie",
    description: "In this episode of Built Online, we sit down with Azgari Lipshy, founder of Azgari.com and veteran operator across CPG and local services.",
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
    description: "Feeling stuck in a corporate job you don't love? Azgari Lipshy shares how professionals can quit corporate and start business ventures to achieve freedom.",
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
    description: "Azgari Lipshy breaks down the exact steps to go from idea to profitable service business in just 90 days.",
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
    description: "Why building systems beats grinding 80-hour weeks. Azgari Lipshy explains how operators can work smarter, not harder.",
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
    description: "Azgari Lipshy, founder of Azgari.com, discusses how to start a cash-flow positive business with a launch partner.",
    highlights: [
      "Why 90% of solo entrepreneurs fail",
      "The importance of a seasoned launch team",
      "Securing SBA loans for your business",
      "Selecting profitable business models",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/iHAig1wnLok",
    externalUrl: "https://youtu.be/iHAig1wnLok",
  },
  {
    id: "build-scale-2026",
    title: "How to Build & Scale Your Business in 2026",
    description: "A forward-looking conversation about what it takes to build and scale a service business in the current market.",
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
    description: "Azgari Lipshy shares tactical advice on taking a service business from six figures to seven figures and beyond.",
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
    description: "A candid conversation about the mental health challenges entrepreneurs face and how to build resilience while building a business.",
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
    description: "The step-by-step playbook for leaving your corporate job and transitioning into business ownership without blowing up your finances.",
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
    description: "Continuing the conversation on leaving corporate — this episode dives deeper into execution and first steps.",
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
    description: "In this episode, we meet Azgari Lipshy, a true serial entrepreneur who's been hustling since she was 16, jumping from supplement manufacturing and garment exports to running two construction companies today.",
    highlights: [
      "Bootstrapping a supplement line as a teenager",
      "The 8-phase blueprint that guarantees launches in 120 days",
      "How to snag SBA loans",
      "Starting cash-positive with pre-booked clients",
      "Validating ideas to scaling with teams and tech",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/xYH8xAfo8MI",
    externalUrl: "https://youtu.be/xYH8xAfo8MI",
  },
  {
    id: "amr-internet-guy",
    title: "Amr The Internet Guy Podcast",
    description: "Azgari Lipshy joins Amr to discuss digital marketing strategies specifically designed for local service businesses.",
    highlights: [
      "Local SEO for service businesses",
      "Leveraging Google Business Profile",
      "Social media strategies that work for local markets",
      "Building a lead generation machine",
    ],
    image: "/images/founder/azgari-headshot.jpg",
    videoUrl: "https://www.youtube.com/embed/wqbOtsiknEk",
    externalUrl: "https://youtu.be/wqbOtsiknEk",
  },
  {
    id: "melvin-edwards",
    title: "MelvinE.Edwards Show",
    description: "Azgari Lipshy joins Melvin E. Edwards to discuss the fundamentals of building scalable service-based businesses.",
    highlights: [
      "Why service businesses offer the best path to ownership",
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
    description: "Azgari Lipshy shares her inspiring journey as a female entrepreneur and offers advice for women looking to make the leap into business ownership.",
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
    description: "A comprehensive guide to starting a small business in 2026 — covering market selection, funding, and launch strategies.",
    highlights: [
      "Best business models for 2026",
      "Funding options beyond personal savings",
      "The first 90 days blueprint",
      "Common mistakes that kill new businesses",
    ],
    image: "/images/founder/azgari-speaking.jpg",
    videoUrl: "https://www.youtube.com/embed/VGXXO71z_d8",
    externalUrl: "https://youtu.be/VGXXO71z_d8",
  },
];

// ============================================
// TRUST BADGES (Homepage)
// ============================================
export const TRUST_LINKS = {
  googleBusiness: "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID", // Update with actual link
  trustpilot: "https://www.trustpilot.com/review/azgari.org", // Update with actual link
  bbb: "https://www.bbb.org/us/tx/austin/profile/business-consultants/azgari-foundation-0000-0000000", // Update with actual link
};

// Lead magnet data (for guides page)
export const LEAD_MAGNETS = [
  {
    id: "checklist",
    icon: "📋",
    type: "Instant Download",
    title: "47-Step Service Business Launch Checklist",
    description: "The exact checklist our team uses to launch 160+ businesses. Entity formation, licensing, insurance, banking, marketing setup, and first-customer acquisition — nothing left to guesswork.",
    cta: "Get the Checklist",
    href: GHL_LINKS.leadMagnets.checklist,
  },
  {
    id: "assessment",
    icon: "🎯",
    type: "2-Minute Quiz",
    title: "Which Business Is Right for Me?",
    description: "Answer 12 questions about your skills, capital, and lifestyle goals — get a personalized business model recommendation from our library of 50+ proven models.",
    cta: "Take the Quiz",
    href: GHL_LINKS.leadMagnets.assessment,
  },
  {
    id: "sba-guide",
    icon: "🏦",
    type: "Instant Download",
    title: "SBA Loan Readiness Guide",
    description: "The step-by-step guide to getting SBA-approved without a broker. Credit requirements, exact documents needed, underwriter psychology, and how to package your application for approval.",
    cta: "Get the SBA Guide",
    href: GHL_LINKS.leadMagnets.sbaGuide,
  },
];

// Helper to filter tools by category
export const getToolsByCategory = (category: string) => 
  TOOLS.filter(tool => tool.category === category);

// ============================================
// CASE STUDIES (Case Studies Page)
// Detailed client success stories with metrics
// ============================================
// Case studies — only include real, verified clients
// Add entries here as real client stories become available.
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
// TESTIMONIALS (Homepage Component)
// Only real, verified client testimonials
// ============================================
export const TESTIMONIALS: {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  videoSrc?: string;
}[] = [
  // NOTE: Add real client testimonials here as they are collected.
  // Only include clients who have given permission and can be verified.
  // Video testimonials are preferred — reference /videos/testimonials/ directory.
];

// ============================================
// STATS (For Case Studies Page)
// Aggregate metrics across all clients
// ============================================
export const AGGREGATE_STATS = {
  yearsExperience: "20+",
  businessModels: "50+",
  clientOwnership: "100%",
  launchGuarantee: "120 days",
};

// ============================================
// NONPROFIT COMPLIANCE DATA
// Single source of truth for all compliance copy
// ============================================
export const NONPROFIT = {
  name: "Azgari Foundation",
  type: "501(c)(3) Nonprofit Organization",
  ein: "32-1032584-33",

  // Mission statement — BRD "north star"
  mission:
    "Azgari Foundation delivers entrepreneurship training that increases income potential, expands economic mobility, and creates jobs in local communities.",

  // Short mission (for tight spaces like footer tagline)
  missionShort:
    "Entrepreneurship training for economic mobility and community job creation.",

  // Revenue reinvestment disclosure (BRD §5.2, §10)
  reinvestmentStatement:
    "Program fees support business building services, scholarships, and expansion of our workforce initiatives.",

  // Global legal disclosure (BRD §10)
  legalDisclosure:
    "Azgari Foundation is a 501(c)(3) nonprofit. Revenue is reinvested into services, scholarships, and economic mobility initiatives.",

  // Results disclaimer (FTC-safe)
  resultsDisclaimer:
    "Individual results vary based on effort, market conditions, and capital. We do not guarantee any level of income or business success.",
};

// ============================================
// IMPACT METRICS (Social Mission)
// Used by ImpactModule component
// ============================================
export const IMPACT_METRICS = [
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Business Models Available" },
  { value: "100%", label: "Client Ownership" },
  { value: "35+", label: "Communities Served" },
];
