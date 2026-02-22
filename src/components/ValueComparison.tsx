import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

const alternatives = [
  {
    name: "Buy a Franchise",
    cost: "$50K–$500K",
    ongoing: "+ 3–8% royalties forever",
    downsides: [
      "You don't own the brand — they do",
      "Territory restrictions limit your growth",
      "Must follow their playbook, not yours",
      "Can't sell without franchisor approval",
    ],
    verdict: "You pay more, own less, and never stop paying.",
  },
  {
    name: "Get an MBA",
    cost: "$60K–$180K",
    ongoing: "+ 2 years of your life",
    downsides: [
      "Theory-heavy, not practitioner-led",
      "No business at the end — just a degree",
      "Designed for corporate, not entrepreneurship",
      "Opportunity cost of 2 years' lost income",
    ],
    verdict: "You learn about business. You don't build one.",
  },
  {
    name: "Hire Consultants",
    cost: "$30K–$100K+",
    ongoing: "$150–$500/hr, no guarantees",
    downsides: [
      "Piecemeal advice, no unified system",
      "No accountability — they bill and leave",
      "No guarantee you'll actually launch",
      "You manage 5+ vendors instead of building",
    ],
    verdict: "You get advice. You don't get a business.",
  },
  {
    name: "Figure It Out Alone",
    cost: "$15K–$50K in mistakes",
    ongoing: "+ 2–5 years of trial and error",
    downsides: [
      "80% failure rate within 18 months",
      "No framework — you guess at every step",
      "Expensive mistakes in legal, pricing, marketing",
      "No one to call when you're stuck at 2 AM",
    ],
    verdict: "The \"cheapest\" option that costs the most.",
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
            WHY AZGARI IS DIFFERENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Compare Your Options — Then Decide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are many paths to business ownership. Only one gives you a done-for-you buildout, full ownership, AND a launch guarantee.
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
                THE AZGARI ALTERNATIVE
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Done-for-You Business Build: $50,000
              </h3>
              <p className="text-sm text-white/60 mb-4">Payment plans and SBA funding available</p>
              <p className="text-white/90 mb-6">
                We build your entire business — entity, brand, marketing, team, customers, operations. You own 100%, pay zero royalties, and spend about an hour a week overseeing it.
              </p>
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                See If You Qualify →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "100% ownership — no royalties, ever",
                "Operational in 180 days with manager in seat",
                "50+ proven business models to choose from",
                "Marketing, hiring, operations — all built for you",
                "12 months of ongoing support",
                "SBA funding concierge included",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ color: 'var(--color-accent)' }}>✓</span>
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
