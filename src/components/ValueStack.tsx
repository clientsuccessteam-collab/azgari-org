import Link from "next/link";
import { GHL_LINKS, NONPROFIT } from "@/lib/links";

const valueItems = [
  {
    item: "Business Model Selection & Market Validation Curriculum",
    separate: "$5,000",
    detail: "Curriculum covers analyzing 50+ service models against local market data",
  },
  {
    item: "Entity Formation, Licensing & Compliance Coursework",
    separate: "$5,000",
    detail: "Guided coursework through LLC setup, permits, insurance, and EIN",
  },
  {
    item: "Brand Development Mentorship (Name, Logo, Positioning)",
    separate: "$8,000",
    detail: "Mentor-supported brand identity development",
  },
  {
    item: "Website, Funnels & Marketing Systems Modules",
    separate: "$15,000",
    detail: "Hands-on curriculum for building a digital presence and lead-generation systems",
  },
  {
    item: "Sales Education & Practicum (Pre-Launch Revenue)",
    separate: "$8,000",
    detail: "Sales methodology training and mentorship for securing B2B contracts before launch",
  },
  {
    item: "Team Hiring, Training & Manager Placement Curriculum",
    separate: "$10,000",
    detail: "Coursework and mentorship for recruiting, training, and placing an operational team",
  },
  {
    item: "Operations Systems & SOPs Education",
    separate: "$7,000",
    detail: "Curriculum covering the systems that allow the business to run without the owner",
  },
  {
    item: "12 Months of Ongoing Educational Support",
    separate: "$16,000",
    detail: "Continued mentorship through growth, hiring, and scaling"
  },
];

export default function ValueStack() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 text-white">
            WHAT THE CURRICULUM COVERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything Included in the Flagship Program
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here&apos;s what comparable educational services and professional support would cost separately — and how it comes together inside our flagship program.
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
                Comparable services if purchased separately:
              </p>
              <p className="text-3xl font-bold text-gray-400 line-through mb-4">
                $74,000+
              </p>

              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                Program Tuition:
              </p>
              <p className="text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                $50,000
              </p>
              <p className="text-sm text-gray-500 mb-4">
                $50K tuition paid in full or $10K down + $6,667.67/mo × 6
              </p>
              <p className="text-xs text-gray-500 mb-6 max-w-md mx-auto">
                {NONPROFIT.tuitionJustification}
              </p>

              <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-4">
                Check Program Eligibility →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
