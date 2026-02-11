const commitments = [
  "We do not promise revenue, timelines, or financial outcomes",
  "We provide education, structure, tools, and guidance",
  "All business outcomes depend on individual execution, market demand, capital, and regulatory requirements",
  "This is not a franchise and not a funding provider; all lending decisions are made by independent SBA lenders",
];

export default function Transparency() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
          Our Commitment to Transparency
        </h2>
        
        <ul className="max-w-3xl mx-auto space-y-0">
          {commitments.map((item, i) => (
            <li 
              key={i}
              className="py-4 px-6 border-b border-gray-200 flex gap-4"
            >
              <span className="font-bold" style={{ color: 'var(--color-primary)' }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
