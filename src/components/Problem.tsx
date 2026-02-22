const costItems = [
  {
    cost: "$50K–$500K",
    label: "Franchise Cost",
    detail: "Plus 3-8% royalties forever. You follow their playbook, use their name, and never truly own it. We build you a business you own 100%.",
  },
  {
    cost: "$15K–$50K",
    label: "Cost of Trial & Error",
    detail: "Most first-time founders burn $15K–$50K figuring things out alone — wrong entity, bad marketing, underpricing, legal mistakes. Our team eliminates the expensive learning curve.",
  },
  {
    cost: "80%",
    label: "Failure Rate (DIY)",
    detail: "80% of new businesses fail within the first 18 months. The difference isn&apos;t talent or luck — it&apos;s having a proven system and an experienced team building it for you.",
  },
  {
    cost: "2–5 Years",
    label: "Time Lost to Guesswork",
    detail: "Without a framework, most entrepreneurs spend years reaching profitability. Your time has a cost — and it&apos;s the one asset you can&apos;t get back.",
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
            THE REAL COST OF GOING IT ALONE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            The Expensive Way vs. the Smart Way
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most aspiring business owners choose one of these paths — and pay the price. There&apos;s a better option.
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
              The question isn&apos;t &quot;Can I afford professional help?&quot;
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
              It&apos;s &quot;Can I afford to build alone?&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
