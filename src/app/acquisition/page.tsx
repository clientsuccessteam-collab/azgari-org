import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS } from "@/lib/links";

const costOfBadAcquisition = [
  {
    cost: "$30K–$80K",
    label: "Overpaying Without Proper Valuation",
    detail: "First-time buyers overpay by 15–40% without professional deal analysis. On a $200K acquisition, that's $30K–$80K you'll never recover — and it kills your cash flow from day one.",
  },
  {
    cost: "$50K–$200K+",
    label: "Buying a Business With Hidden Problems",
    detail: "Undisclosed liabilities, inflated revenue, key employee departures, equipment that needs replacing. Bad due diligence doesn't just cost money — it can wipe out your entire investment.",
  },
  {
    cost: "$5K–$15K",
    label: "Failed SBA Applications",
    detail: "42% of SBA loan applications are denied on first submission. Each rejection costs months of delays, application fees, and lost deals. The right packaging gets approved the first time.",
  },
  {
    cost: "6–18 Months",
    label: "Searching Alone Without a Network",
    detail: "Good deals don't sit on BizBuySell. They're found through broker relationships, off-market networks, and industry connections. Solo searchers waste 6–18 months looking in the wrong places.",
  },
];

const whyBuyReasons = [
  {
    metric: "$0 → $300K+",
    title: "Immediate Revenue",
    desc: "No 12–18 month ramp-up. You acquire a business already generating $200K–$500K+ in annual revenue and start collecting income from day one.",
  },
  {
    metric: "90%",
    title: "SBA Finances 90%",
    desc: "SBA 7(a) loans cover up to 90% of acquisition cost. A $200K business may only need $20K–$30K out of pocket — less than most franchise fees.",
  },
  {
    metric: "2–3x",
    title: "Built-In Asset Value",
    desc: "You're buying a sellable asset worth 2–3x annual profit. A business earning $100K/year in profit is worth $200K–$300K the day you buy it.",
  },
  {
    metric: "Day 1",
    title: "Customers, Staff & Systems",
    desc: "No hiring from scratch, no building a customer base, no figuring out operations. Everything is already running — you just step in and improve.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Define Your Criteria",
    desc: "Industry, location, revenue range, lifestyle goals, and capital. We match your profile to the right type of acquisition.",
  },
  {
    number: 2,
    title: "Source & Screen",
    desc: "We tap broker networks, off-market leads, and industry contacts to surface deals that match — then filter for quality before you see them.",
  },
  {
    number: 3,
    title: "Due Diligence & Valuation",
    desc: "Financial analysis, operational review, customer concentration risk, equipment assessment, and fair market valuation. No surprises after closing.",
  },
  {
    number: 4,
    title: "SBA Loan Packaging",
    desc: "We prepare your full loan package — business plan, projections, documentation — and introduce you to SBA lenders who fund acquisitions.",
  },
  {
    number: 5,
    title: "Negotiate, Close & Transition",
    desc: "Deal structuring, seller negotiations, closing coordination, and 90-day post-close support to ensure a smooth ownership transfer.",
  },
];

const advisorComparison = [
  {
    name: "Business Broker",
    cost: "$15K–$50K",
    detail: "10–12% of sale price (paid by seller, but inflates asking price). They represent the seller, not you.",
    downside: "Their incentive is to close fast at the highest price — not to protect your interests.",
  },
  {
    name: "M&A Attorney",
    cost: "$10K–$25K",
    detail: "$350–$750/hr for deal review, LOI drafting, and closing docs. Essential but expensive, and they don't find deals.",
    downside: "Handles legal only. No deal sourcing, no valuation, no SBA guidance, no post-close support.",
  },
  {
    name: "CPA / Accountant",
    cost: "$3K–$8K",
    detail: "Financial due diligence, tax review, and projection modeling. Important but narrow scope.",
    downside: "Reviews the numbers but can't assess operations, customer risk, or market position.",
  },
  {
    name: "Business Valuator",
    cost: "$3K–$10K",
    detail: "Formal business appraisal required by some lenders. Takes 2–4 weeks.",
    downside: "Gives you a number. Doesn't tell you if the business is actually worth buying.",
  },
];

const valueStackItems = [
  {
    item: "Acquisition Criteria Development & Business Matching",
    separate: "$2,000–$5,000",
    detail: "Acquisition consultants charge $200–$400/hr for search strategy",
  },
  {
    item: "Deal Sourcing (Broker Network + Off-Market Access)",
    separate: "$5,000–$15,000",
    detail: "Buyer's agents charge retainers plus success fees for deal flow",
  },
  {
    item: "Financial Due Diligence & Valuation Analysis",
    separate: "$5,000–$15,000",
    detail: "CPAs + valuators charge separately for financials and appraisals",
  },
  {
    item: "Operational Due Diligence (Staff, Systems, Risk)",
    separate: "$3,000–$8,000",
    detail: "Operations consultants charge $200–$500/hr for business assessment",
  },
  {
    item: "SBA Loan Packaging & Lender Introductions",
    separate: "$3,000–$7,000",
    detail: "SBA consultants and loan brokers charge 1–3% of loan amount",
  },
  {
    item: "Deal Structuring & Negotiation Support",
    separate: "$5,000–$15,000",
    detail: "M&A advisors charge 3–5% of deal value for negotiation",
  },
  {
    item: "90-Day Post-Close Transition Support",
    separate: "$5,000–$10,000",
    detail: "Business coaches charge $1,000–$2,500/month for transition guidance",
  },
  {
    item: "Ongoing Access to Azgari&apos;s Deal Network",
    separate: "Priceless",
    detail: "No other advisor gives you ongoing access to their pipeline",
  },
];

const acquisitionCaseStudy = {
  name: "Hypothetical Example",
  location: "Based on typical SBA acquisition",
  business: "Commercial HVAC Service Company",
  purchasePrice: "$250K",
  downPayment: "$30K",
  annualRevenue: "$350K",
  ownerTakeHome: "$120K",
  timeline: "Typical timeline: 60–90 days from LOI to close",
  quote: "This is a representative example of a typical SBA-financed service business acquisition. Actual results vary significantly based on deal quality, market conditions, and buyer execution. We help you find, evaluate, and close the right deal for your situation.",
};

const idealCandidates = [
  { text: "$50K+ available for down payment (or SBA-financeable)" },
  { text: "Good credit (680+ for SBA qualification)" },
  { text: "Management or industry experience preferred (not required)" },
  { text: "Ready to be an owner-operator or install a manager" },
];

export default function AcquisitionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="pt-24 md:pt-32 pb-24 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              ACQUISITION ADVISORY
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Why Build From Scratch<br />When You Can Buy Proven Cash Flow?
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              We help you find, evaluate, and acquire local service businesses using SBA financing — with revenue from day one and 90% lender coverage.
            </p>
            <p className="text-sm font-semibold max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-accent)' }}>
              Average acquisition: $200K–$400K revenue business. Average down payment: $20K–$50K via SBA 7(a).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                Schedule a Discovery Call →
              </Link>
              <Link href="#value" className="btn btn-secondary">
                See What&apos;s Included
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Revenue From Day One
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> SBA Finances Up to 90%
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 90-Day Post-Close Support
              </span>
            </div>
          </div>
        </section>

        {/* Cost of Bad Acquisitions */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-4">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}
              >
                THE COST OF GETTING IT WRONG
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                A Bad Acquisition Can Cost You Everything
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Buying a business without expert guidance isn&apos;t just risky — it&apos;s expensive. Here&apos;s what first-time buyers lose when they go it alone:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {costOfBadAcquisition.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  style={{ borderTop: '4px solid #DC2626' }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: '#DC2626' }}>
                    {item.cost}
                  </div>
                  <p className="font-bold text-gray-900 mb-2 text-sm">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto text-center">
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                <p className="text-lg font-semibold mb-2">
                  A $2,500 retainer protects you from $50K–$200K+ in acquisition mistakes.
                </p>
                <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  That&apos;s the most important investment you&apos;ll make in this process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Buy vs Start — Enhanced with Dollar Amounts */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                BUY VS. BUILD
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Why Buy Instead of Starting From Zero?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Starting from scratch means 12–18 months before profitability and an 80% failure rate.
                Buying an existing business means proven revenue, customers, and systems from day one.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyBuyReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg bg-white"
                  style={{ border: '2px solid #e5e7eb' }}
                >
                  <div className="text-2xl font-bold mb-3" style={{ color: 'var(--color-accent)' }}>
                    {reason.metric}
                  </div>
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Comparison — Enhanced with Dollar Impact */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Acquisition vs. Franchise: The Real Numbers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A franchise gives you a logo and rules. An acquisition gives you proven revenue and full ownership.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-center mb-2">
                <div></div>
                <div className="font-bold text-sm py-2 rounded-t-lg" style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}>Acquire a Business</div>
                <div className="font-bold text-sm py-2 rounded-t-lg bg-gray-100 text-gray-600">Buy a Franchise</div>
              </div>
              {[
                { label: "Upfront Cost", acquire: "$20K–$50K down (SBA)", franchise: "$50K–$300K+ franchise fee" },
                { label: "Revenue Day One", acquire: "Yes — existing customers", franchise: "No — you start from zero" },
                { label: "Ongoing Fees", acquire: "None — ever", franchise: "3–8% royalties + ad fees forever" },
                { label: "10-Year Royalty Cost", acquire: "$0", franchise: "$90K–$240K (on $300K revenue)" },
                { label: "Ownership", acquire: "100% yours to sell anytime", franchise: "You're a licensee" },
                { label: "Flexibility", acquire: "Full control of everything", franchise: "Must follow their playbook" },
                { label: "Exit Strategy", acquire: "Sell at full market value", franchise: "Requires franchisor approval" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-200">
                  <div className="font-medium text-gray-700 text-left">{row.label}</div>
                  <div className="text-center font-medium" style={{ color: 'var(--color-primary)' }}>{row.acquire}</div>
                  <div className="text-center text-gray-500">{row.franchise}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm mt-8 max-w-2xl mx-auto font-semibold" style={{ color: 'var(--color-primary)' }}>
              On a $300K-revenue business, franchise royalties alone cost $90K–$240K over 10 years. With an acquisition, you keep every dollar.
            </p>
          </div>
        </section>

        {/* Our Process Section */}
        <section
          id="process"
          className="py-16 md:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              HOW IT WORKS
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Our 5-Step Acquisition Process
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-16">
              From criteria to closing and beyond — we guide you through every stage.
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="text-left p-6 rounded-2xl shadow-sm" style={{ backgroundColor: 'var(--color-cream)' }}>
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full font-bold mb-4"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {step.number}
                  </span>
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'd Pay Hiring Advisors Separately */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                COMPARE YOUR OPTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                What You&apos;d Pay Hiring Each Advisor Separately
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Most buyers cobble together 4–5 separate professionals — none of whom talk to each other. Here&apos;s what that actually costs:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {advisorComparison.map((advisor) => (
                <div
                  key={advisor.name}
                  className="rounded-xl p-6 flex flex-col h-full"
                  style={{ backgroundColor: '#FFF7ED', border: '1px solid #FED7AA' }}
                >
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{advisor.name}</h3>
                  <div className="text-xl font-bold mb-1" style={{ color: '#DC2626' }}>{advisor.cost}</div>
                  <p className="text-gray-600 text-sm mb-3">{advisor.detail}</p>
                  <p className="text-xs font-semibold text-gray-500 italic mt-auto pt-3 border-t border-orange-200">
                    {advisor.downside}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-500 mb-2">Total cost hiring separately:</p>
              <p className="text-3xl font-bold text-gray-400 line-through mb-4">$31,000–$93,000</p>
              <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                And none of them give you a unified system, post-close support, or ongoing deal access.
              </p>
            </div>
          </div>
        </section>

        {/* Value Stack */}
        <section id="value" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white">
                WHAT YOU ACTUALLY GET
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything Included in Acquisition Advisory
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                One team. One retainer. Every service you need from search to close — and 90 days beyond.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="divide-y divide-gray-100">
                {valueStackItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 gap-2"
                  >
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.item}</p>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-sm font-bold text-gray-400 line-through">{item.separate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200">
                <div className="p-6 sm:p-8 text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Total value if hired separately:
                  </p>
                  <p className="text-3xl font-bold text-gray-400 line-through mb-4">
                    $28,000–$75,000
                  </p>

                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                    Your advisory retainer:
                  </p>
                  <p className="text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                    $2,500
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    + success fee on closed deals (aligned with your outcome)
                  </p>
                  <p className="text-xs text-gray-400 mb-6">
                    Retainer is applied toward success fee — so you never pay twice.
                  </p>

                  {/* ROI Box */}
                  <div
                    className="rounded-xl p-5 mb-6 max-w-lg mx-auto"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                      The math on a typical acquisition:
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>$30K</div>
                        <div className="text-xs text-gray-500">Down Payment</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-xl" style={{ color: 'var(--color-accent)' }}>→</span>
                      </div>
                      <div>
                        <div className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>$250K</div>
                        <div className="text-xs text-gray-500">Business Value</div>
                      </div>
                    </div>
                    <p className="text-center mt-3 text-xs text-gray-500">
                      Hypothetical example. Actual results vary based on deal, market, and execution.
                    </p>
                  </div>

                  <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-4">
                    Schedule a Discovery Call →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acquisition Case Study */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                REAL ACQUISITION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                What a Typical Acquisition Looks Like
              </h2>
            </div>

            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: '2px solid var(--color-accent)' }}
            >
              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                {[
                  { metric: acquisitionCaseStudy.purchasePrice, label: "Purchase Price" },
                  { metric: acquisitionCaseStudy.downPayment, label: "Down Payment" },
                  { metric: acquisitionCaseStudy.annualRevenue, label: "Annual Revenue" },
                  { metric: acquisitionCaseStudy.ownerTakeHome, label: "Owner Take-Home" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                      {stat.metric}
                    </div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote & Details */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {acquisitionCaseStudy.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {acquisitionCaseStudy.business} &bull; {acquisitionCaseStudy.location}
                    </p>
                    <p className="text-xs font-semibold mt-1" style={{ color: 'var(--color-accent)' }}>
                      {acquisitionCaseStudy.timeline}
                    </p>
                  </div>
                </div>

                <blockquote
                  className="border-l-4 pl-4 text-gray-700 leading-relaxed italic"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  &quot;{acquisitionCaseStudy.quote}&quot;
                </blockquote>

                <p className="text-xs text-gray-400 mt-4 italic">
                  *Hypothetical example for illustrative purposes. Individual results vary based on deal, market, and execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing + Ideal Candidates */}
        <section id="pricing" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                YOUR INVESTMENT
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Aligned Pricing — We Only Win When You Win
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                Our fee structure is designed so our incentives match yours. The retainer covers our work to find you the right deal. The success fee means we&apos;re invested in your outcome.
              </p>
              <p className="text-sm font-semibold max-w-xl mx-auto" style={{ color: 'var(--color-accent)' }}>
                Our retainer is a fraction of what you&apos;d pay hiring advisors separately — and it credits toward your success fee.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div
                  className="p-6 rounded-2xl border-2 bg-white"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Advisory Retainer
                      </h3>
                      <p className="text-xs text-gray-500">Applied toward success fee if you close</p>
                    </div>
                    <span
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      $2,500
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Acquisition criteria development</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Deal sourcing (broker + off-market network)</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Initial screening and shortlisting</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Preliminary financial review</li>
                  </ul>
                  <div
                    className="mt-4 rounded-lg p-3 text-xs"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Value context:</span>{" "}
                    <span className="text-gray-600">Hiring these services separately costs $7K–$20K. The retainer credits toward your success fee — so you never pay twice.</span>
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl bg-white"
                  style={{ border: '2px solid #e5e7eb' }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Success Fee
                      </h3>
                      <p className="text-xs text-gray-500">Only on closed acquisitions</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-600">
                      % of deal value
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Full due diligence and valuation</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> SBA loan packaging and lender intros</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Deal structuring and negotiation</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Closing coordination</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> 90-day post-close transition support</li>
                  </ul>
                  <div
                    className="mt-4 rounded-lg p-3 text-xs"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Alignment:</span>{" "}
                    <span className="text-gray-600">We only earn the success fee when you close a deal you&apos;re happy with. If we don&apos;t find the right business, you owe nothing beyond the retainer.</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm italic">
                  Every acquisition is unique. Schedule a call to discuss your specific goals, budget, and timeline.
                </p>
              </div>

              {/* Ideal Candidates Card */}
              <div
                className="p-5 sm:p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Is Acquisition Right for You?
                </h3>
                <p className="text-white/70 text-sm mb-8">
                  Our acquisition advisory works best for individuals who meet these criteria:
                </p>

                <div className="space-y-4">
                  {idealCandidates.map((candidate) => (
                    <div
                      key={candidate.text}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      <span className="text-white font-medium text-sm">{candidate.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-sm" style={{ color: 'var(--color-accent)' }}>
                    Don&apos;t have $50K+ saved? SBA 7(a) loans finance up to 90% of acquisition price. A $200K business may only need $20K–$30K down — we guide you through the entire SBA process.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                  <Link href={GHL_LINKS.qualify} className="btn btn-primary w-full text-center">
                    Schedule a Discovery Call →
                  </Link>
                  <p className="text-white/50 text-xs text-center">
                    Free 30-minute call. No obligation. We&apos;ll tell you honestly if acquisition is the right path for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-16 md:py-24 text-white text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Own a Profitable Business — Without Building From Scratch?
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto mb-4">
              Acquire an established business with proven cash flow, existing customers, and SBA financing covering up to 90%.
            </p>
            <p className="text-sm mb-8" style={{ color: 'var(--color-accent)' }}>
              Average acquisition: $200K–$400K revenue. Average down payment: $20K–$50K. Revenue from day one.
            </p>

            <Link
              href={GHL_LINKS.qualify}
              className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
            >
              Schedule a Discovery Call →
            </Link>

            <p className="text-white/60 text-sm mt-6">
              Free 30-minute call &bull; No obligation &bull; We&apos;ll tell you if acquisition is right for you
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
