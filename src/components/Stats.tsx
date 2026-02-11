const stats = [
  { number: "160+", label: "Businesses Launched" },
  { number: "$285K", label: "Avg. First-Year Revenue" },
  { number: "47", label: "Days to First Revenue" },
  { number: "94%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Results That Speak for Themselves
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-12">
          These aren&apos;t promises — they&apos;re outcomes from clients who followed our framework and did the work.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                {stat.number}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
