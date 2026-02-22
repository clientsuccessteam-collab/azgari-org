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
  qualifyQuiz: "https://go.azgari.org/question-flow-d",
  
  // Program Pages
  programs: {
    quickWin: "https://go.azgari.org/quick-win",
    foundation: "https://go.azgari.org/foundation",
    fullLaunch: "https://go.azgari.org/full-launch",
    scale: "https://go.azgari.org/scale",
    acquisition: "https://go.azgari.org/question-flow-d",
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
  allTools: "https://go.azgari.org/products-list",
};

// Default CTA configuration
export const DEFAULT_CTA = {
  text: "See If You Qualify →",
  href: GHL_LINKS.qualify,
};

// ============================================
// PROGRAMS (Services Page & Homepage Pricing)
// ============================================
export const PROGRAMS = [
  {
    name: "Launch Validation",
    price: "$2,500",
    note: "or $958 × 3 payments",
    description: "Prove the concept, land your first paying customers, and validate it works — before investing more. Perfect for entrepreneurs willing to get their hands dirty.",
    whoItsFor: "40+ hrs/wk available, $5K–$10K capital, ready to hustle",
    guarantee: "Launched in 60 days or continued support until you do",
    timeCommitment: "40+ hrs/wk",
    features: [
      "Business name + tagline",
      "Simple logo + brand colors",
      "Social media profile setup",
      "Payment system (Square/Stripe)",
      "Website or landing page",
      "Weekly check-in calls (8 weeks)",
    ],
    graduation: "Credits toward Foundation if you upgrade",
    href: GHL_LINKS.programs.quickWin,
    featured: false,
  },
  {
    name: "Foundation",
    price: "$10,000",
    note: "or $3,500 × 3 payments",
    description: "Test the model, land your first paying customers, and prove this works for you — before investing $25K or more. Most of our successful clients started exactly here.",
    whoItsFor: "10–15 hrs/wk available, $10K–$25K capital, want to validate before scaling",
    guarantee: "Launched in 90 days or continued support until you do",
    timeCommitment: "10–15 hrs/wk",
    features: [
      "Business model selection (50+ proven models)",
      "Market validation",
      "Brand foundation (name, positioning, presence)",
      "Turn contacts into customers system",
      "Weekly group coaching for 90 days",
    ],
    graduation: "$10K credits toward Full Launch if you upgrade",
    href: GHL_LINKS.programs.foundation,
    featured: false,
  },
  {
    name: "Full Launch",
    price: "$25,000",
    note: "or $8,500 × 3 payments",
    description: "We build the business WITH you — marketing, systems, customer acquisition. You'll have paying customers before you officially launch. For people ready to go all-in.",
    whoItsFor: "20–30 hrs/wk available, $25K–$50K capital, ready to commit fully",
    guarantee: "Launched in 120 days or continued support — plus $3,000 cash if we miss",
    timeCommitment: "20–30 hrs/wk",
    features: [
      "Everything in Foundation",
      "Done-with-you business buildout",
      "Complete marketing systems (website, funnels, lead gen)",
      "Sales team hiring + training support",
      "Client acquisition & referral system",
      "120-day launch timeline",
    ],
    graduation: "Investment credits toward Scale if you upgrade",
    href: GHL_LINKS.programs.fullLaunch,
    featured: true,
  },
  {
    name: "Scale",
    price: "$50,000",
    note: "Payment plans available",
    description: "Stop running your business — start owning it. We hire your team, train your manager, and get you to true business ownership. You become an OWNER, not an operator.",
    whoItsFor: "5–10 hrs/wk (oversight only), $50K+ capital, existing revenue",
    guarantee: "Business operational in 180 days with manager in seat or continued support",
    timeCommitment: "5–10 hrs/wk",
    features: [
      "Everything in Full Launch",
      "Full operational team (hired + trained)",
      "Manager in place",
      "Funding concierge (if qualified)",
      "12-month support",
      "180-day launch timeline",
    ],
    graduation: null,
    href: GHL_LINKS.programs.scale,
    featured: false,
  },
];

// Quick Win Bundle — entry-level closing incentive
export const QUICK_WIN = {
  name: "Quick Win Bundle",
  price: "$500",
  note: "Value: $2,000",
  description: "Not ready to commit? Start here. Get a Business Model Report (48hrs), Competitor Analysis (72hrs), 90-Day Action Plan, and a 1-hour Strategy Call. Credits toward any full program if you upgrade within 30 days.",
  href: GHL_LINKS.programs.quickWin,
};

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
  googleBusiness: "https://share.google/SlJmbdLaQ1oJGkgeX",
  trustpilot: "https://www.trustpilot.com/review/azgari.com",
  bbb: "https://www.bbb.org/us/tx/austin/profile/business-consultant/azgari-0825-1000247694",
  linkedin: "https://www.linkedin.com/company/azgari",
  instagram: "https://www.instagram.com/azgari.lipshy/",
  youtube: "https://www.youtube.com/@azgarilipshy",
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
export const CASE_STUDIES = [
  {
    id: "pressure-washing-texas",
    name: "Marcus T.",
    location: "Austin, TX",
    business: "Pressure Washing",
    image: "/images/case-studies/marcus.jpg",
    challenge: "Corporate burnout after 15 years in tech sales. Had savings but no idea how to start a business. Considered franchises but didn't want royalties eating into profits.",
    solution: "Launched a residential pressure washing business with Azgari's Full Launch program. We helped with equipment selection, pricing strategy, and a customer acquisition plan targeting HOA neighborhoods.",
    results: [
      { metric: "$287K", label: "First Year Revenue" },
      { metric: "47%", label: "Net Profit Margin" },
      { metric: "68", label: "Days to First $10K Month" },
      { metric: "3", label: "Crew Members Hired" },
    ],
    quote: "I went from dreading Mondays to genuinely loving what I do. The systems Azgari helped me build meant I wasn't reinventing the wheel—I was following a proven path.",
    timeline: "Launch to $287K in 11 months",
    featured: true,
  },
  {
    id: "commercial-cleaning-florida",
    name: "Jennifer & David R.",
    location: "Tampa, FL",
    business: "Commercial Cleaning",
    image: "/images/case-studies/jennifer-david.jpg",
    challenge: "Husband-wife team looking to build something together after David's layoff. Limited startup capital (~$15K) and no business experience.",
    solution: "Started with office cleaning contracts. Azgari helped secure SBA microloan for equipment and provided sales scripts specifically for approaching property managers.",
    results: [
      { metric: "$412K", label: "Year 2 Revenue" },
      { metric: "52%", label: "Net Margin" },
      { metric: "14", label: "Recurring Contracts" },
      { metric: "$0", label: "Spent on Paid Ads" },
    ],
    quote: "We built this entire business on referrals and cold outreach using the scripts Azgari gave us. No fancy marketing—just consistent execution.",
    timeline: "Started with $15K, now doing $35K/month",
    featured: true,
  },
  {
    id: "lawn-care-ohio",
    name: "Anthony M.",
    location: "Columbus, OH",
    business: "Lawn Care & Landscaping",
    image: "/images/case-studies/anthony.jpg",
    challenge: "Side hustle that was stuck at $3K/month. Wanted to go full-time but couldn't figure out how to scale beyond himself.",
    solution: "Restructured pricing, built route density strategy, and created hiring/training SOPs. Transitioned from solo operator to managing a crew.",
    results: [
      { metric: "$189K", label: "Revenue (from $36K)" },
      { metric: "425%", label: "Revenue Increase" },
      { metric: "4", label: "Full-Time Employees" },
      { metric: "20hrs", label: "Owner Hours/Week" },
    ],
    quote: "I was working 60 hours a week making $3K/month. Now I work 20 hours and clear $12K. The difference was systems.",
    timeline: "Scaled 5x in 8 months",
    featured: false,
  },
  {
    id: "junk-removal-georgia",
    name: "Robert K.",
    location: "Atlanta, GA",
    business: "Junk Removal",
    image: "/images/case-studies/robert.jpg",
    challenge: "Recently retired military, had GI Bill benefits but wanted to build equity instead of going back to school. Strong work ethic but zero business background.",
    solution: "Used Azgari's veteran-specific pathway. Secured SBA loan with veteran advantage terms. Built junk removal operation targeting estate cleanouts and realtor partnerships.",
    results: [
      { metric: "$340K", label: "First Year Revenue" },
      { metric: "$425", label: "Avg Job Ticket" },
      { metric: "6", label: "Realtor Partners" },
      { metric: "2", label: "Trucks Running" },
    ],
    quote: "The military taught me discipline. Azgari taught me business. Combining those two things changed my family's future.",
    timeline: "From discharge to $340K in 14 months",
    featured: false,
  },
  {
    id: "hvac-california",
    name: "Miguel S.",
    location: "Sacramento, CA",
    business: "HVAC Services",
    image: "/images/case-studies/miguel.jpg",
    challenge: "Licensed HVAC tech working for someone else for 12 years. Great at the trade but intimidated by the business side—pricing, marketing, hiring.",
    solution: "Foundation program focused on business fundamentals. Built brand, set up pricing tiers, and created a service agreement model for recurring revenue.",
    results: [
      { metric: "$520K", label: "Year 1 Revenue" },
      { metric: "$180K", label: "Owner Take-Home" },
      { metric: "340", label: "Service Agreement Customers" },
      { metric: "38%", label: "Recurring Revenue" },
    ],
    quote: "I knew HVAC. I didn't know business. Azgari filled that gap. Now I make more than my old boss.",
    timeline: "Solo tech to $520K owner-operator",
    featured: false,
  },
  {
    id: "recruiting-texas",
    name: "Danielle W.",
    location: "Dallas, TX",
    business: "Recruiting & Staffing",
    image: "/images/case-studies/danielle.jpg",
    challenge: "Former corporate HR director tired of building teams for someone else. Had deep recruiting skills but no idea how to run her own agency — pricing, contracts, client acquisition.",
    solution: "Foundation program to validate the model, then upgraded to Full Launch. Built a niche staffing agency specializing in healthcare placements with a retainer-based revenue model.",
    results: [
      { metric: "$380K", label: "Year 1 Revenue" },
      { metric: "$195K", label: "Owner Take-Home" },
      { metric: "22", label: "Active Client Contracts" },
      { metric: "68%", label: "Gross Margin" },
    ],
    quote: "I spent 15 years placing talent for companies. Now I place talent for MY company. The margins in recruiting are incredible when you have the right systems.",
    timeline: "Corporate HR to $380K agency owner in 10 months",
    featured: false,
  },
  {
    id: "fractional-cfo-colorado",
    name: "James H.",
    location: "Denver, CO",
    business: "Fractional C-Suite Consulting",
    image: "/images/case-studies/james.jpg",
    challenge: "20-year corporate CFO who was laid off at 52. Didn't want another corporate job but thought consulting meant starting from zero. Had the expertise but no client pipeline or business structure.",
    solution: "Foundation program to build the practice framework, then Full Launch to build marketing systems and client acquisition. Positioned as a fractional CFO serving 4-6 companies simultaneously.",
    results: [
      { metric: "$420K", label: "Year 1 Revenue" },
      { metric: "$340K", label: "Owner Take-Home" },
      { metric: "5", label: "Retainer Clients" },
      { metric: "15hrs", label: "Avg Hours/Week" },
    ],
    quote: "I went from one company paying me $180K to five companies paying me $420K total — and I work fewer hours. Azgari showed me how to package my experience as a service business.",
    timeline: "Laid-off CFO to $420K fractional practice in 8 months",
    featured: false,
  },
  {
    id: "pest-control-arizona",
    name: "Carlos M.",
    location: "Phoenix, AZ",
    business: "Pest Control",
    image: "/images/case-studies/carlos.jpg",
    challenge: "Worked for a national pest control chain for 8 years. Knew the industry inside out but was capped at $55K salary. Wanted his own routes but didn't know how to handle licensing, marketing, or scaling beyond himself.",
    solution: "Launch Validation to land first customers fast, then upgraded to Foundation. Built residential pest control routes in Phoenix suburbs with recurring monthly service contracts.",
    results: [
      { metric: "$295K", label: "Year 1 Revenue" },
      { metric: "420", label: "Monthly Service Contracts" },
      { metric: "92%", label: "Customer Retention" },
      { metric: "3", label: "Technicians Hired" },
    ],
    quote: "My old employer charged customers $65/month and paid me $22/hour. Now I charge $55/month and keep the profit. Recurring revenue changes everything.",
    timeline: "Pest control tech to $295K owner in 11 months",
    featured: false,
  },
  {
    id: "handyman-north-carolina",
    name: "Kevin B.",
    location: "Charlotte, NC",
    business: "Handyman Services",
    image: "/images/case-studies/kevin.jpg",
    challenge: "Retired firefighter with strong fix-it skills but zero business background. Was doing odd jobs for neighbors at low rates. No pricing structure, no marketing, no systems — just word of mouth.",
    solution: "Launch Validation program. Built pricing tiers (small/medium/large jobs), set up Google Business Profile and lead gen, created a referral system targeting real estate agents and property managers.",
    results: [
      { metric: "$175K", label: "Year 1 Revenue" },
      { metric: "$425", label: "Avg Job Ticket" },
      { metric: "8", label: "Realtor Partners" },
      { metric: "42%", label: "Net Margin" },
    ],
    quote: "I was charging neighbors $20/hour and feeling guilty about it. Azgari showed me how to price by the job, not the hour. My average ticket is now $425.",
    timeline: "Odd jobs to $175K handyman business in 9 months",
    featured: false,
  },
  {
    id: "flood-remediation-florida",
    name: "Patricia & Tom R.",
    location: "Jacksonville, FL",
    business: "Flood & Water Remediation",
    image: "/images/case-studies/patricia-tom.jpg",
    challenge: "Husband-wife team living in flood-prone Florida. Tom had construction experience but no insurance restoration knowledge. Saw the opportunity after Hurricane Idalia but didn't know how to break into the industry.",
    solution: "Full Launch program. Secured IICRC certifications, built relationships with insurance adjusters, and created a rapid-response system. SBA loan covered equipment (dehumidifiers, extractors, vehicles).",
    results: [
      { metric: "$610K", label: "Year 1 Revenue" },
      { metric: "$8,200", label: "Avg Job Ticket" },
      { metric: "12", label: "Insurance Adjuster Contacts" },
      { metric: "4", label: "Response Crews" },
    ],
    quote: "Insurance pays the bills — literally. Our average job is $8,200 and it's paid directly by the insurance company. Azgari showed us how to build the relationships that keep the phone ringing.",
    timeline: "Zero experience to $610K remediation company in 14 months",
    featured: false,
  },
];

// ============================================
// TESTIMONIALS (Homepage Component)
// Short quotes for social proof sections
// ============================================
export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Marcus T.",
    role: "Pressure Washing Owner",
    location: "Austin, TX",
    image: "/images/case-studies/marcus.jpg",
    quote: "I was terrified. Fifteen years in corporate, and I was about to bet everything on myself. Azgari's system was so clear that the fear turned into focus. Six months in, I hit $10K months. Year one: $287K. The framework works — you just have to show up.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Jennifer R.",
    role: "Commercial Cleaning Owner",
    location: "Tampa, FL",
    image: "/images/case-studies/jennifer-david.jpg",
    quote: "We had $15K and zero business experience. I didn't think we could afford the program, but it paid for itself in 90 days. Now we're doing $35K/month with 14 recurring contracts. The sales scripts alone were worth 10x what we paid.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Anthony M.",
    role: "Lawn Care Owner",
    location: "Columbus, OH",
    image: "/images/case-studies/anthony.jpg",
    quote: "I was grinding 60-hour weeks for $3K/month and going nowhere. Azgari showed me the difference between working hard and working smart. Now I do $12K/month in 20-hour weeks with a team of 4. Systems changed everything.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "Robert K.",
    role: "Junk Removal Owner",
    location: "Atlanta, GA",
    image: "/images/case-studies/robert.jpg",
    quote: "Leaving the military, I had discipline but no business direction. Azgari gave me the roadmap I was missing. $340K first year — and I hired three other vets. This is what I was meant to do.",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Miguel S.",
    role: "HVAC Business Owner",
    location: "Sacramento, CA",
    image: "/images/case-studies/miguel.jpg",
    quote: "Twelve years turning wrenches for someone else. I knew HVAC inside out but business terrified me. Azgari made the business side simple. First year: $520K revenue, $180K take-home. Should've done this a decade ago.",
    rating: 5,
  },
  {
    id: "testimonial-6",
    name: "Sarah L.",
    role: "Mobile Pet Grooming Owner",
    location: "Denver, CO",
    image: "/images/case-studies/marcus.jpg",
    quote: "I was paralyzed by the business side — pricing, marketing, licenses, all of it. Azgari broke it down into steps I could actually follow. Booked solid within 90 days. Now I'm turning away clients and hiring my first employee.",
    rating: 5,
  },
];

// ============================================
// STATS (For Case Studies Page)
// Aggregate metrics across all clients
// ============================================
export const AGGREGATE_STATS = {
  businessesLaunched: "160+",
  averageFirstYearRevenue: "$285K",
  averageNetMargin: "42%",
  clientSatisfaction: "94%",
  averageDaysToFirstRevenue: "47",
  totalClientRevenue: "$45M+",
};

// ============================================
// NONPROFIT COMPLIANCE DATA
// Single source of truth for all compliance copy
// ============================================
export const NONPROFIT = {
  name: "Azgari Foundation",
  type: "501(c)(3) Nonprofit Organization",
  ein: "XX-XXXXXXX", // TODO: Insert real EIN

  // Mission statement — BRD "north star"
  mission:
    "Azgari Foundation delivers entrepreneurship training that increases income potential, expands economic mobility, and creates jobs in local communities.",

  // Short mission (for tight spaces like footer tagline)
  missionShort:
    "Entrepreneurship training for economic mobility and community job creation.",

  // Revenue reinvestment disclosure (BRD §5.2, §10)
  reinvestmentStatement:
    "Program fees support training delivery, scholarships, and expansion of our nonprofit workforce initiatives.",

  // Global legal disclosure (BRD §10)
  legalDisclosure:
    "Azgari Foundation is a nonprofit organization. Program revenue is reinvested into training, scholarships, and economic mobility initiatives.",

  // Results disclaimer (FTC-safe)
  resultsDisclaimer:
    "Individual results vary based on effort, market conditions, and capital. Stated figures reflect aggregate client outcomes, not guarantees.",
};

// ============================================
// IMPACT METRICS (Social Mission)
// Used by ImpactModule component
// ============================================
export const IMPACT_METRICS = [
  { value: "160+", label: "Businesses Launched" },
  { value: "500+", label: "Jobs Created" },
  { value: "40+", label: "Scholarships Awarded" },
  { value: "35+", label: "Communities Served" },
];
