/**
 * Centralized GHL Links Configuration
 * Update URLs here — changes apply site-wide
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
  
  // Digital Products
  products: {
    tools: "https://go.azgari.org/tools",
    boringBusinessKit: "https://go.azgari.org/tools",
    veteranLaunchKit: "https://go.azgari.org/tools",
    commercialCleaning: "https://go.azgari.org/tools",
    cashFlowKit: "https://go.azgari.org/tools",
    localMarketing: "https://go.azgari.org/tools",
    completeVault: "https://go.azgari.org/tools",
  },
  
  // Courses (GHL)
  courses: {
    allCourses: "https://go.azgari.org/digitalcoursespage",
    acquisitionAccelerator: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/6b70d7f7-e171-4ad1-b70c-021e11a1df9c",
    franchiseBlueprint: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/c1f6c6e1-e8e2-408e-a774-30e0ac14fe7e",
    thirtyDayLaunch: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/faacdaaf-324b-40e7-9afe-960f742cfb20",
    sbaLoanMasterclass: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/c15f4e9a-78cc-452b-96d6-08319f84ff99",
    slackCommunity: "https://uo7nasucjhbw16u2ktuq.app.clientclub.net/courses/offers/90ec07f8-f6e9-4360-9a92-04c941af86e7",
  },
  
  // Forms
  forms: {
    contact: "https://go.azgari.org/contact",
    scholarship: "https://go.azgari.org/scholarship",
    bookCall: "https://go.azgari.org/book-call",
  },
};

// Default CTA configuration
export const DEFAULT_CTA = {
  text: "See If You Qualify →",
  href: GHL_LINKS.qualify,
};

// Program pricing data (centralized for easy updates)
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

// Lead magnet data
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
