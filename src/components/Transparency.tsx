const commitments = [
  "Our curriculum is grounded in frameworks refined over 20+ years of hands-on service business experience",
  "Participants are guided through every module — entity setup, branding, marketing, hiring, operations — with mentor support",
  "Program outcomes depend on market selection and business model fit; our curriculum uses data to inform those decisions",
  "The Foundation is a 501(c)(3) nonprofit, not a franchise or a lender — participants own 100% of the businesses they build, and SBA approval is determined solely by independent lenders",
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
