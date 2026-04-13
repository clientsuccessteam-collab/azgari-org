import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import { GHL_LINKS, NONPROFIT } from "@/lib/links";

const costOfBadAcquisition = [
  {
    cost: "$30K–$80K",
    label: "Overpaying Without Proper Valuation",
    detail: "First-time buyers can overpay by 15–40% without rigorous deal analysis. On a $200K acquisition, that is $30K–$80K of avoidable cost. Our curriculum covers valuation fundamentals so participants can assess deals accurately.",
  },
  {
    cost: "$50K–$200K+",
    label: "Buying a Business With Hidden Problems",
    detail: "Undisclosed liabilities, inflated revenue, key employee departures, and aging equipment are common due-diligence failures. Our curriculum covers structured due diligence to help participants surface these risks before closing.",
  },
  {
    cost: "$5K–$15K",
    label: "Failed SBA Applications",
    detail: "A significant share of SBA loan applications are denied on first submission. Each rejection costs time, application fees, and lost deals. Our curriculum covers funding readiness and SBA documentation so participants can submit stronger applications.",
  },
  {
    cost: "6–18 Months",
    label: "Searching Alone Without a Network",
    detail: "Quality deals are often sourced through broker relationships, off-market networks, and industry connections. Our curriculum covers deal-sourcing strategies and the networks participants can build to shorten their search.",
  },
];

const whyBuyReasons = [
  {
    metric: "Existing Revenue",
    title: "Established Cash Flow",
    desc: "Acquiring an established business can mean inheriting existing revenue streams rather than building from zero. Outcomes vary significantly based on deal quality and market conditions.",
  },
  {
    metric: "Up to 90%",
    title: "SBA 7(a) Financing",
    desc: "SBA 7(a) loans may cover up to 90% of acquisition cost. Our curriculum covers funding readiness and how to position an application for lender review.",
  },
  {
    metric: "2–3x",
    title: "Typical Valuation Range",
    desc: "Small service businesses commonly trade at multiples of 2–3x annual earnings. Our curriculum covers how these multiples work and how to evaluate asking prices.",
  },
  {
    metric: "Day 1",
    title: "Existing Team & Systems",
    desc: "An acquired business often comes with an existing team, customer base, and operational systems. The curriculum covers how to evaluate those assets and plan the ownership transition.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Define Acquisition Criteria",
    desc: "The curriculum covers how to define industry, location, revenue range, lifestyle goals, and capital — and how to match a participant profile to the right type of acquisition.",
  },
  {
    number: 2,
    title: "Source & Screen Deals",
    desc: "Participants learn to use broker networks, off-market leads, and industry contacts to surface deals, then apply screening frameworks to filter for quality.",
  },
  {
    number: 3,
    title: "Due Diligence & Valuation",
    desc: "The curriculum covers financial analysis, operational review, customer concentration risk, equipment assessment, and fair market valuation methods.",
  },
  {
    number: 4,
    title: "SBA Loan Packaging",
    desc: "Participants are guided through preparing a full loan package — business plan, projections, documentation — and understanding how SBA lenders evaluate acquisition financing.",
  },
  {
    number: 5,
    title: "Negotiate, Close & Transition",
    desc: "Mentors guide participants through deal structuring, seller negotiations, closing coordination, and the 90-day post-close transition period.",
  },
];

const advisorComparison = [
  {
    name: "Business Broker",
    cost: "$15K–$50K",
    detail: "Typically paid 10–12% of sale price (paid by the seller, but often factored into the asking price). Brokers generally represent the seller.",
    downside: "Understanding broker incentives is part of learning to evaluate deals objectively.",
  },
  {
    name: "M&A Attorney",
    cost: "$10K–$25K",
    detail: "$350–$750/hr for deal review, LOI drafting, and closing documents. Legal counsel is essential in any acquisition.",
    downside: "Attorneys handle legal work only — understanding how that fits into overall due diligence is part of the curriculum.",
  },
  {
    name: "CPA / Accountant",
    cost: "$3K–$8K",
    detail: "Financial due diligence, tax review, and projection modeling. Narrow in scope but important.",
    downside: "CPAs review the numbers — the curriculum covers how operational and market risk fit alongside the financials.",
  },
  {
    name: "Business Valuator",
    cost: "$3K–$10K",
    detail: "Formal business appraisal required by some lenders. Typically takes 2–4 weeks.",
    downside: "A valuation is one data point — the curriculum covers how to contextualize it in an acquisition decision.",
  },
];

const valueStackItems = [
  {
    item: "Acquisition Criteria Development Curriculum",
    separate: "Educational",
    detail: "Coursework on defining search strategy and matching models to participant capacity",
  },
  {
    item: "Deal Sourcing Coursework (Broker + Off-Market Networks)",
    separate: "Educational",
    detail: "How to build broker relationships and identify off-market opportunities",
  },
  {
    item: "Financial Due Diligence & Valuation Coursework",
    separate: "Educational",
    detail: "Frameworks for financial review, quality-of-earnings analysis, and valuation",
  },
  {
    item: "Operational Due Diligence Coursework (Staff, Systems, Risk)",
    separate: "Educational",
    detail: "How to assess operations, customer concentration, and transition risk",
  },
  {
    item: "SBA Funding Readiness Curriculum",
    separate: "Educational",
    detail: "Loan packaging, documentation standards, and lender-review expectations",
  },
  {
    item: "Deal Structuring & Negotiation Training",
    separate: "Educational",
    detail: "Coursework on LOI terms, seller notes, earnouts, and structure",
  },
  {
    item: "90-Day Post-Close Transition Mentorship",
    separate: "Educational",
    detail: "Ongoing mentor support during the ownership transition period",
  },
  {
    item: "Access to Foundation Mentor Community",
    separate: "Educational",
    detail: "Peer and mentor community for ongoing learning and accountability",
  },
];

const acquisitionCaseStudy = {
  name: "Illustrative Educational Example",
  location: "Representative SBA-financed acquisition scenario",
  business: "Commercial HVAC Service Company",
  purchasePrice: "$250K",
  downPayment: "$30K",
  annualRevenue: "$350K",
  ownerTakeHome: "$120K",
  timeline: "Illustrative timeline: 60–90 days from LOI to close",
  quote: "This is an illustrative example used in the curriculum to show how an SBA-financed acquisition can be structured. It is not a guarantee of outcomes. Individual results vary based on effort, market conditions, and capital.",
};

const idealCandidates = [
  { text: "$50K+ available for down payment (or SBA-financeable)" },
  { text: "Credit position that supports SBA qualification (typically 680+)" },
  { text: "Management or industry experience helpful (not required)" },
  { text: "Prepared to operate the business or install a manager" },
];

export default function AcquisitionPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="strip" />
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
              501(c)(3) ENTREPRENEURSHIP EDUCATION
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Business Acquisition Curriculum
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Understanding your options for business ownership education. Our acquisition curriculum guides participants through finding, evaluating, and acquiring established local service businesses using SBA financing.
            </p>
            <p className="text-sm max-w-2xl mx-auto mb-4 text-gray-500 italic">
              {NONPROFIT.resultsDisclaimer}
            </p>
            <p className="text-sm font-semibold max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-accent)' }}>
              Illustrative acquisition range covered in the curriculum: $200K–$400K revenue businesses; typical SBA 7(a) down payment: $20K–$50K.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                Apply for a Strategy Session →
              </Link>
              <Link href="#value" className="btn btn-secondary">
                See What&apos;s Included
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Mentor-Supported Curriculum
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> SBA Funding Readiness Education
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 90-Day Post-Close Mentorship
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
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                WHY STRUCTURED EDUCATION MATTERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Common Pitfalls Our Curriculum Addresses
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Attempting a business acquisition without structured education can be costly. Here are common pitfalls first-time buyers encounter that our curriculum is designed to help participants avoid:
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
                  Structured entrepreneurship education can help participants avoid common, costly acquisition mistakes.
                </p>
                <p className="text-base md:text-lg" style={{ color: 'var(--color-accent)' }}>
                  That educational foundation is the focus of the Foundation&apos;s acquisition curriculum.
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
                ACQUIRE VS. BUILD
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Understanding Acquisition as a Pathway
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Starting a business from scratch and acquiring an existing business are both valid paths to ownership. Our curriculum covers both — this section introduces key differences participants will learn to evaluate.
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
                Acquisition vs. Franchise: Understanding Your Options
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding your options for business ownership education. The table below summarizes common differences between acquiring an independent business and purchasing a franchise, for educational context.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-center mb-2">
                <div></div>
                <div className="font-bold text-sm py-2 rounded-t-lg" style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}>Acquire a Business</div>
                <div className="font-bold text-sm py-2 rounded-t-lg bg-gray-100 text-gray-600">Franchise Purchase</div>
              </div>
              {[
                { label: "Typical Upfront Cost", acquire: "$20K–$50K down (SBA)", franchise: "$50K–$300K+ franchise fee" },
                { label: "Existing Revenue at Start", acquire: "Often — established customers", franchise: "No — customer base is built from zero" },
                { label: "Ongoing Fees", acquire: "None", franchise: "Typically 3–8% royalties plus marketing fees" },
                { label: "Illustrative 10-Year Royalty Cost", acquire: "$0", franchise: "$90K–$240K (on $300K revenue)" },
                { label: "Ownership Structure", acquire: "100% independent ownership", franchise: "Licensee of the franchisor" },
                { label: "Operational Flexibility", acquire: "Independent operating decisions", franchise: "Guided by franchisor playbook" },
                { label: "Exit Options", acquire: "Sell independently at market value", franchise: "Subject to franchisor approval" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-200">
                  <div className="font-medium text-gray-700 text-left">{row.label}</div>
                  <div className="text-center font-medium" style={{ color: 'var(--color-primary)' }}>{row.acquire}</div>
                  <div className="text-center text-gray-500">{row.franchise}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm mt-8 max-w-2xl mx-auto" style={{ color: 'var(--color-primary)' }}>
              On an illustrative $300K-revenue business, franchise royalties over 10 years commonly range $90K–$240K. Independent acquisition does not carry royalty obligations. Individual results vary.
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
              The 5-Step Acquisition Curriculum
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-16">
              From criteria through closing and beyond — mentors guide participants through each stage of the educational program.
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
                UNDERSTANDING ADVISOR ROLES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Understanding the Professionals Involved in an Acquisition
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our curriculum covers the different professionals typically involved in a business acquisition, their roles, typical costs, and how to evaluate their input. Participants learn how to coordinate across these advisors rather than replace them.
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
              <p className="text-sm text-gray-500 mb-2">Typical combined professional fees for a full acquisition:</p>
              <p className="text-3xl font-bold text-gray-500 mb-4">$31,000–$93,000</p>
              <p style={{ color: 'var(--color-primary)' }}>
                Our curriculum teaches participants how to evaluate and coordinate these professionals — not to replace them — while building the foundational knowledge to oversee the process.
              </p>
            </div>
          </div>
        </section>

        {/* Value Stack */}
        <section id="value" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white">
                WHAT THE CURRICULUM INCLUDES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What&apos;s Covered in the Acquisition Curriculum
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                A structured educational program with mentor support — from criteria-setting through closing and the 90-day post-close transition period.
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
                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                    Program Tuition
                  </p>
                  <p className="text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                    $50,000
                  </p>
                  <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
                    {NONPROFIT.tuitionJustification}
                  </p>
                  <p className="text-xs text-gray-500 mb-6 max-w-xl mx-auto italic">
                    {NONPROFIT.resultsDisclaimer}
                  </p>

                  {/* Illustrative Example Box */}
                  <div
                    className="rounded-xl p-5 mb-6 max-w-lg mx-auto"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                      Illustrative curriculum example:
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>$30K</div>
                        <div className="text-xs text-gray-500">Illustrative Down Payment</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-xl" style={{ color: 'var(--color-accent)' }}>→</span>
                      </div>
                      <div>
                        <div className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>$250K</div>
                        <div className="text-xs text-gray-500">Illustrative Deal Size</div>
                      </div>
                    </div>
                    <p className="text-center mt-3 text-xs text-gray-500">
                      Educational illustration only. Individual results vary based on effort, market conditions, and capital.
                    </p>
                  </div>

                  <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-4">
                    Apply for a Strategy Session →
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
                ILLUSTRATIVE CURRICULUM EXAMPLE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                What an Acquisition Scenario Can Look Like
              </h2>
              <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
                {NONPROFIT.resultsDisclaimer}
              </p>
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
                  *Illustrative educational example only. Individual results vary based on effort, market conditions, and capital. Azgari Foundation does not guarantee any specific level of income or business success.
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
                PROGRAM TUITION
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Acquisition Curriculum Tuition
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-2">
                The acquisition curriculum is offered through Azgari Foundation&apos;s flagship entrepreneurship education program. Tuition supports educational services for enrolled participants and the Foundation&apos;s charitable mission.
              </p>
              <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--color-accent)' }}>
                {NONPROFIT.tuitionJustification}
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
                        Acquisition Curriculum (Coursework Phase)
                      </h3>
                      <p className="text-xs text-gray-500">Curriculum foundations and mentor-guided search preparation</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Acquisition criteria development coursework</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Deal sourcing coursework (broker + off-market networks)</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Initial screening frameworks and shortlisting</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Preliminary financial review instruction</li>
                  </ul>
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
                        Deal Execution Curriculum (Practicum Phase)
                      </h3>
                      <p className="text-xs text-gray-500">Mentor-supported practicum through close and transition</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Full due diligence and valuation coursework</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> SBA funding readiness education</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Deal structuring and negotiation training</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> Closing coordination mentorship</li>
                    <li className="flex gap-2"><span style={{ color: 'var(--color-primary)' }}>✓</span> 90-day post-close transition mentorship</li>
                  </ul>
                  <div
                    className="mt-4 rounded-lg p-3 text-xs"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Program Commitment:</span>{" "}
                    <span className="text-gray-600">{NONPROFIT.programCommitment}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm italic">
                  Every participant&apos;s path is unique. Apply for a strategy session to discuss goals, capital, and timeline with a Foundation mentor.
                </p>
              </div>

              {/* Ideal Candidates Card */}
              <div
                className="p-5 sm:p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Is the Acquisition Curriculum a Fit for You?
                </h3>
                <p className="text-white/70 text-sm mb-8">
                  The acquisition curriculum tends to fit participants who meet these criteria:
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
                    SBA 7(a) loans may finance up to 90% of acquisition price. The curriculum covers SBA funding readiness and how to structure an application for lender review.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                  <Link href={GHL_LINKS.qualify} className="btn btn-primary w-full text-center">
                    Apply for a Strategy Session →
                  </Link>
                  <p className="text-white/50 text-xs text-center">
                    Educational conversation only. No obligation. A mentor will discuss whether the acquisition curriculum is a fit for your situation.
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
              Learn the Acquisition Pathway to Business Ownership
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto mb-4">
              Our acquisition curriculum guides participants through evaluating, financing, and acquiring established local service businesses — grounded in structured education and mentorship.
            </p>
            <p className="text-sm mb-4" style={{ color: 'var(--color-accent)' }}>
              Curriculum scope: service businesses typically in the $200K–$400K revenue range; SBA 7(a) pathways covered in coursework.
            </p>
            <p className="text-xs mb-8 text-white/70 italic max-w-2xl mx-auto">
              {NONPROFIT.resultsDisclaimer}
            </p>

            <Link
              href={GHL_LINKS.qualify}
              className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
            >
              Apply for a Strategy Session →
            </Link>

            <p className="text-white/60 text-sm mt-6">
              Educational conversation only &bull; No obligation &bull; A mentor will help you understand whether the curriculum is a fit
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
