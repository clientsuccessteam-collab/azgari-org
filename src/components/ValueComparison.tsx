import Link from "next/link";
import { GHL_LINKS, NONPROFIT } from "@/lib/links";

const alternatives = [
  {
    name: "Buy a Franchise",
    cost: "$50K–$500K",
    ongoing: "+ 3–8% ongoing royalties",
    downsides: [
      "Brand is owned by the franchisor",
      "Territory restrictions limit growth",
      "Operations must follow the franchisor&apos;s playbook",
      "Resale typically requires franchisor approval",
    ],
    verdict: "Structured support, but ongoing fees and limited ownership.",
  },
  {
    name: "Pursue an MBA",
    cost: "$60K–$180K",
    ongoing: "+ 2 years of study",
    downsides: [
      "Theory-heavy, rarely practitioner-led",
      "Results in a degree, not an operating business",
      "Designed largely for corporate career paths",
      "Opportunity cost of 2 years of potential income",
    ],
    verdict: "Strong academic credential, but not a business build.",
  },
  {
    name: "Hire Consultants",
    cost: "$30K–$100K+",
    ongoing: "$150–$500/hr, per-engagement",
    downsides: [
      "Advice is often piecemeal rather than integrated",
      "Accountability typically ends when the engagement ends",
      "No structured educational arc",
      "Founders often coordinate multiple vendors",
    ],
    verdict: "Tactical help, without a unified curriculum.",
  },
  {
    name: "Self-Directed Learning",
    cost: "$15K–$50K in learning costs",
    ongoing: "+ 2–5 years of iteration",
    downsides: [
      "High industry failure rate within 18 months",
      "No framework — each decision made from scratch",
      "Learning expenses in legal, pricing, and marketing",
      "Limited access to experienced mentors",
    ],
    verdict: "Lowest upfront cost, highest time investment.",
  },
];

export default function ValueComparison() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
          >
            UNDERSTANDING YOUR EDUCATION OPTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Understanding Your Options for Business Ownership Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are several educational paths toward business ownership. Each has trade-offs. The table below is meant as neutral context as you evaluate which path fits your situation.
          </p>
        </div>

        {/* Alternatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {alternatives.map((alt) => (
            <div
              key={alt.name}
              className="rounded-xl p-6 flex flex-col h-full"
              style={{ backgroundColor: '#FFF7ED', border: '1px solid #FED7AA' }}
            >
              <h3 className="font-bold text-lg mb-1 text-gray-900">{alt.name}</h3>
              <div className="text-xl font-bold mb-1" style={{ color: '#DC2626' }}>{alt.cost}</div>
              <p className="text-xs text-gray-500 mb-4">{alt.ongoing}</p>

              <ul className="space-y-2 mb-4 flex-grow">
                {alt.downsides.map((d, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    {d}
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold text-gray-500 italic mt-auto pt-3 border-t border-orange-200">
                {alt.verdict}
              </p>
            </div>
          ))}
        </div>

        {/* Azgari Card */}
        <div
          className="rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto"
          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
              >
                FLAGSHIP EDUCATION PROGRAM
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Flagship Entrepreneurship Program: $50,000 Tuition
              </h3>
              <p className="text-sm text-white/60 mb-4">Payment plans and scholarship applications available</p>
              <p className="text-white/90 mb-6">
                Our curriculum covers the full business-building journey — entity, brand, marketing, team, customers, operations — with mentor support throughout. Participants own 100% of the business they build, pay no royalties, and typically spend about an hour a week on oversight once operational.
              </p>
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                Check Program Eligibility →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "100% participant ownership — no royalties",
                "Designed to reach operational status in 180 days",
                "50+ business models covered in the curriculum",
                "Marketing, hiring, operations modules included",
                "12 months of ongoing educational support",
                "SBA funding education and concierge guidance",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ color: 'var(--color-accent)' }}>✓</span>
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6 max-w-2xl mx-auto text-center">
          {NONPROFIT.resultsDisclaimer}
        </p>
      </div>
    </section>
  );
}
