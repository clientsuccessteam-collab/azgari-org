const steps = [
  { number: 1, title: "Industry Selection", desc: "Based on market demand, capital, and SBA-aligned criteria" },
  { number: 2, title: "Business Model Mapping", desc: "Clear deliverables, pricing logic, and operational scope" },
  { number: 3, title: "Compliance Setup", desc: "Entity, licensing, and required documentation" },
  { number: 4, title: "Brand & Positioning", desc: "Simple messaging that resonates with your local market" },
  { number: 5, title: "Go-to-Market Execution", desc: "Practical customer acquisition paths based on your service" },
  { number: 6, title: "Operations Setup", desc: "Tools, onboarding, hiring, and delivery systems" },
  { number: 7, title: "Early Revenue", desc: "Ethical, realistic ways to secure early customers" },
  { number: 8, title: "Launch & Growth", desc: "Next steps for scaling or stabilizing operations" },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Our 8-Step Launch Framework
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          From industry selection to first revenue — every step mapped out.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-left p-6">
              <span 
                className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full font-bold mb-4"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {step.number}
              </span>
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
