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
  qualify: "https://go.azgari.org/landing-page-d",
  
  // Program Pages
  programs: {
    quickWin: "https://go.azgari.org/quick-win",
    foundation: "https://go.azgari.org/foundation",
    fullLaunch: "https://go.azgari.org/full-launch",
    scale: "https://go.azgari.org/scale",
    acquisition: "https://go.azgari.org/landing-page-d",
  },
  
  // Lead Magnets (Free Downloads)
  leadMagnets: {
    checklist: "https://go.azgari.org/checklist",
    assessment: "https://go.azgari.org/assessment",
    sbaGuide: "https://go.azgari.org/sba-guide",
  },
  
  // Forms
  forms: {
    contact: "https://go.azgari.org/contact",
    scholarship: "https://go.azgari.org/scholarship",
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
// PROGRAMS (Services Page)
// ============================================
export const PROGRAMS = [
  {
    name: "Quick Win Bundle",
    price: "$500",
    note: "Value: $2,000",
    description: "Not ready to commit? Start here. Delivered in 48-72 hours. See exactly how we work.",
    href: GHL_LINKS.programs.quickWin,
    featured: false,
  },
  {
    name: "Foundation",
    price: "$10,000",
    note: "or $3,500 × 3 payments",
    description: "Best for testing the model with guidance. Perfect for entrepreneurs ready to validate their business idea.",
    href: GHL_LINKS.programs.foundation,
    featured: false,
  },
  {
    name: "Full Launch",
    price: "$25,000",
    note: "or $8,500 × 3 payments",
    description: "Best for professionals who want it built WITH them. Complete 180-day launch support.",
    href: GHL_LINKS.programs.fullLaunch,
    featured: true,
  },
  {
    name: "Scale",
    price: "$50,000",
    note: "or $10K + $6,667 × 6",
    description: "Best for owners ready to step back. Make your business loan-ready as a franchise.",
    href: GHL_LINKS.programs.scale,
    featured: false,
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
    href: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/6b70d7f7-e171-4ad1-b70c-021e11a1df9c",
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
    href: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/c1f6c6e1-e8e2-408e-a774-30e0ac14fe7e",
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
    href: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/faacdaaf-324b-40e7-9afe-960f742cfb20",
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
    href: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/c15f4e9a-78cc-452b-96d6-08319f84ff99",
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
    href: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/90ec07f8-f6e9-4360-9a92-04c941af86e7",
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
    title: "Service Business Startup Checklist",
    description: "The complete step-by-step roadmap to launch your service business legally and profitably.",
    price: "Free",
    href: GHL_LINKS.leadMagnets.checklist,
    category: "free",
    popular: false,
  },
  {
    id: "business-assessment",
    title: "Is This Business Right for Me? Assessment",
    description: "A quick self-assessment to determine if entrepreneurship fits your goals and lifestyle.",
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
    href: GHL_LINKS.allTools,
    category: "starter",
    popular: false,
  },
  {
    id: "pricing-calculator",
    title: "Pricing Calculator Spreadsheet",
    description: "Automated tool to calculate profitable pricing based on costs, labor, and market rates.",
    price: "$37",
    href: GHL_LINKS.allTools,
    category: "starter",
    popular: true,
  },
  {
    id: "customer-acquisition",
    title: "Customer Acquisition Playbook",
    description: "Proven strategies to find, attract, and convert your first 100 customers.",
    price: "$47",
    href: GHL_LINKS.allTools,
    category: "starter",
    popular: false,
  },
  {
    id: "sop-templates",
    title: "Operations SOP Templates",
    description: "Ready-to-use standard operating procedures for daily business operations.",
    price: "$37",
    href: GHL_LINKS.allTools,
    category: "starter",
    popular: false,
  },
  {
    id: "30-day-action-plan",
    title: "First 30 Days Action Plan",
    description: "Day-by-day roadmap for your critical first month as a business owner.",
    price: "$27",
    href: GHL_LINKS.allTools,
    category: "starter",
    popular: false,
  },
  
  // PREMIUM ($67-$147)
  {
    id: "boring-business-kit",
    title: "Boring Business Starter Kit",
    description: "Everything you need to launch a cash-flow-positive service business that runs without you.",
    price: "$97",
    href: GHL_LINKS.allTools,
    category: "premium",
    popular: true,
  },
  {
    id: "veteran-launch-kit",
    title: "Veteran Launch Kit",
    description: "Resources specifically designed for veterans transitioning to business ownership.",
    price: "$67",
    href: GHL_LINKS.allTools,
    category: "premium",
    popular: false,
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning Accelerator",
    description: "Complete toolkit for starting and scaling a commercial cleaning business.",
    price: "$147",
    href: GHL_LINKS.allTools,
    category: "premium",
    popular: false,
  },
  {
    id: "cash-flow-kit",
    title: "Cash Flow Mastery Kit",
    description: "Templates and systems to manage cash flow and stay profitable from day one.",
    price: "$47",
    href: GHL_LINKS.allTools,
    category: "premium",
    popular: false,
  },
  {
    id: "local-marketing",
    title: "Local Marketing Toolkit",
    description: "Proven local marketing strategies that work for service businesses.",
    price: "$47",
    href: GHL_LINKS.allTools,
    category: "premium",
    popular: false,
  },
  
  // VAULT
  {
    id: "complete-vault",
    title: "The Complete Vault",
    description: "Every tool, template, and resource we offer — plus lifetime updates. Best value for serious entrepreneurs.",
    price: "$697",
    href: GHL_LINKS.allTools,
    category: "vault",
    popular: false,
  },
];

// Lead magnet data (for guides page)
export const LEAD_MAGNETS = [
  {
    id: "checklist",
    icon: "📋",
    type: "PDF Download",
    title: "Service Business Startup Checklist",
    description: "The exact 47-step checklist we use to launch service businesses. Covers legal, operations, marketing, and finance.",
    href: GHL_LINKS.leadMagnets.checklist,
  },
  {
    id: "assessment",
    icon: "🎯",
    type: "Self Assessment",
    title: "Is This Business Right for Me?",
    description: "Answer 12 questions to discover which service business matches your skills, budget, and lifestyle goals.",
    href: GHL_LINKS.leadMagnets.assessment,
  },
  {
    id: "sba-guide",
    icon: "🏦",
    type: "PDF Download",
    title: "SBA Loan Readiness Guide",
    description: "Everything you need to qualify for SBA financing: credit requirements, documentation, and lender matching.",
    href: GHL_LINKS.leadMagnets.sbaGuide,
  },
];

// Helper to filter tools by category
export const getToolsByCategory = (category: string) => 
  TOOLS.filter(tool => tool.category === category);
