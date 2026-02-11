const commitments = [
  "We give you proven frameworks tested by 160+ entrepreneurs \u2014 not theories, not hype",
  "We provide weekly accountability, honest feedback, and expert guidance when you\u2019re stuck",
  "Your success depends on your execution \u2014 we maximize the framework, you bring the consistency",
  "We\u2019re not a franchise and not a lender \u2014 you own 100% of what you build, and SBA decisions are made by independent lenders",
];

export default function Transparency() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
          Our Commitment to You
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
