import { NONPROFIT } from "@/lib/links";

const outcomes = [
  {
    metric: "100%",
    label: "Ownership",
    detail: "No franchise fees, no royalties, ever",
  },
  {
    metric: "~1 hr/wk",
    label: "Your Time Commitment",
    detail: "Manager runs day-to-day operations",
  },
  {
    metric: "180 Days",
    label: "To Operational Business",
    detail: "With team in place and contracts signed",
  },
  {
    metric: "2–3x",
    label: "Business Sale Value",
    detail: "Based on annual profit multiple",
  },
];

const lifeOutcomes = [
  "You own 100% of a business — no boss, no royalties, no permission needed",
  "You have a sellable asset that grows in value every year",
  "Your team runs daily operations — you oversee, not operate",
  "You have systems that run without you, so the business works even when you don&apos;t",
  "You have an asset you can replicate to build a second business",
];

export default function Transformation() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
          >
            THE OUTCOME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            What You Get When We Build It for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This isn&apos;t about motivation or mindset. It&apos;s about what actually happens when a professional team builds your business from the ground up.
          </p>
        </div>

        {/* Outcomes Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 text-center shadow-sm"
              style={{ borderBottom: '3px solid var(--color-accent)' }}
            >
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                {item.metric}
              </div>
              <p className="font-semibold text-sm text-gray-800 mb-1">{item.label}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Life Outcomes + Before/After */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              12 Months From Now, You Could Be:
            </h3>
            <ul className="space-y-4">
              {lifeOutcomes.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold flex-shrink-0" style={{ color: 'var(--color-accent)' }}>✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Before */}
            <div className="p-6 rounded-xl bg-gray-100 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Today</p>
              <p className="text-gray-500 italic leading-relaxed">
                &quot;I want to own a business, but I don&apos;t know what kind, I&apos;m afraid of picking wrong, and I can&apos;t afford to lose $50K on a franchise that might not work.&quot;
              </p>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <div className="text-3xl" style={{ color: 'var(--color-accent)' }}>↓</div>
            </div>

            {/* After */}
            <div
              className="p-6 rounded-xl shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent)' }}>
                12 Months Later
              </p>
              <p className="font-semibold leading-relaxed">
                &quot;My business has a team of 3, a manager running daily ops, and B2B contracts bringing in recurring revenue. I spend about an hour a week on it. I own 100% and I&apos;m building real equity.&quot;
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-6 max-w-lg mx-auto text-center">
          {NONPROFIT.resultsDisclaimer}
        </p>
      </div>
    </section>
  );
}
