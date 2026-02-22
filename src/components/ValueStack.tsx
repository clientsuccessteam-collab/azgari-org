import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

const valueItems = [
  {
    item: "Business Model Selection & Market Validation",
    separate: "$3,000–$5,000",
    detail: "We analyze 50+ models against your local market and pick the best fit",
  },
  {
    item: "Entity Formation, Licensing & Compliance Setup",
    separate: "$2,500–$5,000",
    detail: "LLC, permits, insurance, EIN — all handled by our team",
  },
  {
    item: "Brand Development (Name, Logo, Positioning)",
    separate: "$3,000–$8,000",
    detail: "Professional brand identity that builds instant credibility",
  },
  {
    item: "Website, Funnels & Marketing Systems",
    separate: "$5,000–$15,000",
    detail: "Complete digital presence and lead generation built for you",
  },
  {
    item: "Customer Acquisition (Pre-Launch Revenue)",
    separate: "$3,000–$8,000",
    detail: "Paying customers before your official launch day",
  },
  {
    item: "Team Hiring, Training & Manager Placement",
    separate: "$5,000–$10,000",
    detail: "Full operational team recruited, trained, and managed",
  },
  {
    item: "Operations Systems & SOPs",
    separate: "$3,000–$7,000",
    detail: "The systems that let the business run without you",
  },
  {
    item: "12 Months of Ongoing Support",
    separate: "$8,000–$16,000",
    detail: "Continued guidance through growth, hiring, and scaling",
  },
];

export default function ValueStack() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white">
            WHAT WE BUILD FOR YOU
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything Included in Your Business Build
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here&apos;s what you&apos;d pay if you hired each of these separately — and what you pay with us.
          </p>
        </div>

        {/* Value Stack Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="divide-y divide-gray-100">
            {valueItems.map((item, i) => (
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

          {/* Total / Reveal */}
          <div className="border-t-2 border-gray-200">
            <div className="p-6 sm:p-8 text-center">
              <p className="text-sm text-gray-500 mb-2">
                Total value if purchased separately:
              </p>
              <p className="text-3xl font-bold text-gray-400 line-through mb-4">
                $32,500–$74,000
              </p>

              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                Your done-for-you investment:
              </p>
              <p className="text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                $50,000
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Payment plans and SBA funding paths available
              </p>

              <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-4">
                See If You Qualify →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
