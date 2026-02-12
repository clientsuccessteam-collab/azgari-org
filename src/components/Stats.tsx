import { NONPROFIT } from "@/lib/links";

const stats = [
  { number: "160+", label: "Businesses Launched", detail: "and counting" },
  { number: "$285K", label: "Avg. First-Year Revenue", detail: "across all business types" },
  { number: "47", label: "Days to First Revenue", detail: "average time to first paying customer" },
  { number: "11.4x", label: "Avg Return on Investment", detail: "$285K revenue on $25K Full Launch" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Numbers Don&apos;t Lie
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-12">
          These aren&apos;t projections — they&apos;re actual outcomes from clients who followed our framework and did the work.
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
