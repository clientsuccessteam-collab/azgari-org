const steps = [
  { number: 1, title: "Identify Your Best-Fit Business Model", desc: "Our curriculum covers how to analyze your local market, background, and capital so you can select a high-demand service model to build. Participants learn to use data instead of guessing." },
  { number: 2, title: "Build Your Revenue Blueprint", desc: "Pricing, service packages, and profit margins — mapped out before any spend. Participants leave this module knowing how to set pricing, scope deliverables, and project take-home income." },
  { number: 3, title: "Establish Legal and Compliance Foundations", desc: "LLC formation, licensing, insurance, EIN, contracts — we guide you through each piece so you launch compliant from day one rather than retrofitting later." },
  { number: 4, title: "Develop a Trustworthy Brand", desc: "Participants work through a professional website, logo, brand guide, and social presence over roughly 14 days with mentor support, so the brand reads established rather than brand-new." },
  { number: 5, title: "Practice Customer Acquisition Before Launch", desc: "Our sales education and practicum covers remote B2B relationship-building in your market. You learn the methodology and step in to meet decision-makers and sign contracts as part of the practicum." },
  { number: 6, title: "Install Operational Systems", desc: "CRM, booking systems, SOPs, hiring playbooks, and team training — so the business operates like a system, not a side hustle. Owners oversee rather than run daily operations." },
  { number: 7, title: "Reach Your First Revenue", desc: "The program is structured so participants aim to have real contracts, real invoices, and real recurring revenue in place — a fully operational business with an active prospect pipeline." },
  { number: 8, title: "Scale or Stabilize — Your Choice", desc: "Ongoing mentorship, growth strategy, and 12 months of educational support. Build toward a sellable asset or stabilize at a profit level that fits your goals. Your business, your call." },
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Our 8-Step Guided Launch Curriculum
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          From &ldquo;I have an idea&rdquo; to &ldquo;I have signed contracts&rdquo; — every step guided by our curriculum and mentors.
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
