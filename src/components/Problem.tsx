const problems = [
  { text: "Choosing the Wrong Business", detail: "\"What if I pick wrong and waste everything?\" Our model evaluation framework matches your capital, skills, and market \u2014 so you invest with confidence, not fear." },
  { text: "Navigating Compliance Alone", detail: "\"I don't want to accidentally break laws.\" We handle entity formation, licensing, and documentation \u2014 step by step, state by state." },
  { text: "Finding Your First Customers", detail: "\"What if nobody wants my service?\" Our go-to-market playbook gets you pre-booked customers \u2014 average 47 days to first revenue." },
  { text: "Building Everything Yourself", detail: "\"I can't work 100-hour weeks forever.\" Our operations systems give you repeatable processes, hiring templates, and delivery playbooks from day one." },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          The Real Barriers Keeping You Stuck
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          It&apos;s not about working harder. It&apos;s about removing the obstacles between you and a business that works.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm"
              style={{ borderLeft: '4px solid var(--color-accent)' }}
            >
              <p className="font-bold text-gray-900 mb-2">{item.text}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
