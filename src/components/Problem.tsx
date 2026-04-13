const costItems = [
  {
    cost: "$50K–$500K",
    label: "Typical Franchise Cost",
    detail: "Plus 3-8% royalties forever. Franchisees follow the franchisor&apos;s playbook and never fully own the brand. Our curriculum helps participants build a business they own 100%.",
  },
  {
    cost: "$15K–$50K",
    label: "Cost of Learning Alone",
    detail: "Many first-time founders spend $15K–$50K learning on their own — wrong entity, inefficient marketing, underpricing, legal missteps. Structured education can help reduce that learning curve.",
  },
  {
    cost: "80%",
    label: "Industry Failure Rate",
    detail: "Industry data shows roughly 80% of new businesses close within the first 18 months. Research often points to systems, mentorship, and preparation — not talent — as differentiators.",
  },
  {
    cost: "2–5 Years",
    label: "Time Spent in Trial and Error",
    detail: "Without a framework, many founders spend years reaching profitability. Time is the one resource that cannot be recovered, which is why structured education matters.",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Emotional lead-in — speak to the corporate professional's internal monologue */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            You&apos;ve spent years building expertise, managing teams, driving results — for someone else&apos;s company. You&apos;ve thought about going out on your own.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            But between the LLC paperwork, building a website, figuring out marketing, finding customers, hiring people... when exactly are you supposed to learn all that while still working 50+ hours a week?
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most business courses hand you information and wish you luck. Our flagship entrepreneurship program is structured differently.
          </p>
        </div>

        <div className="text-center mb-4">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}
          >
            COMMON CHALLENGES OF LEARNING ALONE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Understanding the Costs of Self-Directed Learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the challenges many professionals encounter when navigating business ownership without structured education.
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
              Structured education and mentorship can help founders navigate these challenges —
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
              and that&apos;s the role our nonprofit was built to serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
