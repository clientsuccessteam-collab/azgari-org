const commitments = [
  "We build your business using frameworks proven over 20+ years — not theories, not hype",
  "Our team handles execution — entity setup, branding, marketing, hiring, operations",
  "Your success depends on choosing the right market and business model — we use data to eliminate guesswork",
  "We\u2019re not a franchise and not a lender — you own 100% of what we build, and SBA decisions are made by independent lenders",
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
