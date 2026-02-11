const outcomes = [
  "Someone who makes decisions from clarity, not fear",
  "Someone who owns a business their family is proud of",
  "Someone building an asset they can sell or pass down",
  "Someone who controls their time, income, and future",
  "Someone aligned with work that fits their life \u2014 not the other way around",
];

export default function Transformation() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Who You Become
            </h2>
            <p className="text-gray-600 mb-8">
              When you build with structure instead of guesswork:
            </p>

            <ul className="space-y-4">
              {outcomes.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold" style={{ color: 'var(--color-accent)' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center p-5 sm:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-500 italic mb-4">
              &quot;I want to start a business, but I&apos;m scared of failing...&quot;
            </p>
            <div className="text-4xl my-4" style={{ color: 'var(--color-accent)' }}>↓</div>
            <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              &quot;I have a clear plan, expert guidance, and the confidence to build something that lasts.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
