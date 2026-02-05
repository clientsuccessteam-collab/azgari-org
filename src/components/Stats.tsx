const stats = [
  { number: "100+", label: "Businesses Launched" },
  { number: "180", label: "Days to Launch" },
  { number: "50", label: "States Served" },
  { number: "0%", label: "Franchise Fees" },
];

export default function Stats() {
  return (
    <section className="py-24 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Professionals Across the U.S.
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-12">
          We support professionals shifting out of corporate roles, service operators seeking structure, and career changers exploring SBA-aligned service models.
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
