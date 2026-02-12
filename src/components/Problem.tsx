const costItems = [
  {
    cost: "$23,750/mo",
    label: "Lost Revenue",
    detail: "Our average client generates $285K in year one. Every month you wait is another $23,750 you're leaving on the table — going to a competitor who started sooner.",
  },
  {
    cost: "$15K–$50K",
    label: "Cost of Trial & Error",
    detail: "Most first-time founders burn $15K–$50K figuring things out alone — wrong entity, bad marketing, underpricing, legal mistakes. Our framework eliminates the expensive learning curve.",
  },
  {
    cost: "80%",
    label: "Failure Rate (DIY)",
    detail: "80% of new businesses fail within the first 18 months. The difference isn't talent or luck — it's having a proven system and expert guidance from day one.",
  },
  {
    cost: "2–5 Years",
    label: "Time Lost to Guesswork",
    detail: "Without a framework, most entrepreneurs spend 2–5 years reaching the revenue our clients hit in under 12 months. Your time has a cost — and it's the one asset you can't get back.",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}
          >
            THE REAL COST OF WAITING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Every Month You Delay Is Costing You Money
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The biggest expense isn&apos;t what you spend — it&apos;s what you lose by staying stuck. Here&apos;s what inaction actually costs:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {costItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm"
              style={{ borderTop: '4px solid #DC2626' }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: '#DC2626' }}>
                {item.cost}
              </div>
              <p className="font-bold text-gray-900 mb-2 text-sm">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            <p className="text-lg font-semibold mb-2">
              The question isn&apos;t &quot;Can I afford to invest in guidance?&quot;
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
              It&apos;s &quot;Can I afford NOT to?&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
