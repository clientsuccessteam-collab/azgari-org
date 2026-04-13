import { NONPROFIT } from "@/lib/links";

const stats = [
  { number: "20+", label: "Years of Entrepreneurship Education", detail: "across dozens of service industries" },
  { number: "50+", label: "Business Models in the Curriculum", detail: "examined against local market data" },
  { number: "100%", label: "Participant Ownership", detail: "no franchise fees, no royalties, ever" },
  { number: "180", label: "Days of Guided Program", detail: "toward an operational business with a manager in seat" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Curriculum Brings to Participants
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-12">
          Two decades of hands-on experience building service businesses — distilled into a structured educational program.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                {stat.number}
              </div>
              <div className="text-sm font-semibold opacity-90">{stat.label}</div>
              <div className="text-xs opacity-60 mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/50 mt-6 max-w-lg mx-auto text-center">
          {NONPROFIT.resultsDisclaimer}
        </p>
      </div>
    </section>
  );
}
