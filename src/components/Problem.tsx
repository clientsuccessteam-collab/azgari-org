const problems = [
  { text: "Choose the right model", detail: "for their capital + market" },
  { text: "Follow a realistic pathway", detail: "for compliance and licensing" },
  { text: "Use simple, recurring-revenue", detail: "operations that scale" },
  { text: "Apply consistent systems", detail: "— not theories, not hype" },
];

export default function Problem() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          Business Works When the Fundamentals Are Right
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The people who succeed in service-based businesses aren&apos;t the ones who &quot;hustle harder.&quot; They&apos;re the ones who:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-sm"
              style={{ borderLeft: '4px solid var(--color-accent)' }}
            >
              <p className="text-gray-900">
                <strong>{item.text}</strong> {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
