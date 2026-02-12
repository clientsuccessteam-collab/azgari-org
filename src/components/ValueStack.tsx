import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

const valueItems = [
  {
    item: "Business Model Selection & Market Validation",
    separate: "$3,000–$5,000",
    detail: "Consultants charge $200–$500/hr for market research and model validation",
  },
  {
    item: "Entity Formation, Licensing & Compliance Setup",
    separate: "$2,500–$5,000",
    detail: "Business attorneys charge $250–$500/hr for entity setup and compliance",
  },
  {
    item: "Brand Development (Name, Logo, Positioning)",
    separate: "$3,000–$8,000",
    detail: "Branding agencies charge $5K–$15K for brand strategy and identity",
  },
  {
    item: "Website, Funnels & Marketing Systems",
    separate: "$5,000–$15,000",
    detail: "Web agencies charge $5K–$20K for a marketing website with lead funnels",
  },
  {
    item: "Sales Process & Client Acquisition Systems",
    separate: "$3,000–$8,000",
    detail: "Sales consultants charge $2K–$10K for CRM setup and sales playbooks",
  },
  {
    item: "Hiring, Training & Operations SOPs",
    separate: "$3,000–$7,000",
    detail: "HR consultants charge $150–$300/hr for hiring systems and SOPs",
  },
  {
    item: "120 Days of Weekly Expert Coaching & Accountability",
    separate: "$8,000–$16,000",
    detail: "Business coaches charge $500–$1,000/session for weekly 1-on-1s",
  },
  {
    item: "Launch Guarantee (120 days or $3K cash back)",
    separate: "Priceless",
    detail: "No consultant, franchise, or MBA offers this kind of accountability",
  },
];

export default function ValueStack() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white">
            WHAT YOU ACTUALLY GET
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything Included in Full Launch
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
                $30,500–$69,000
              </p>

              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                Your Full Launch investment:
              </p>
              <p className="text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                $25,000
              </p>
              <p className="text-sm text-gray-500 mb-6">
                or $8,500 × 3 payments
              </p>

              {/* ROI Box */}
              <div
                className="rounded-xl p-5 mb-6 max-w-lg mx-auto"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  The math on your return:
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>$25K</div>
                    <div className="text-xs text-gray-500">You Invest</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-xl" style={{ color: 'var(--color-accent)' }}>→</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>$285K</div>
                    <div className="text-xs text-gray-500">Avg Year 1 Revenue</div>
                  </div>
                </div>
                <p className="text-center mt-3 text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                  = 11.4x return on your investment
                </p>
              </div>

              <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-4">
                See If You Qualify →
              </Link>
              <p className="text-xs text-gray-400 mt-3">
                Not ready for Full Launch? Programs start at $2,500.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
