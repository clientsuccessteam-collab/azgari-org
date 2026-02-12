const steps = [
  { number: 1, title: "Find Your Perfect-Fit Business", desc: "We analyze your local market, background, and capital to match you with the highest-demand, highest-margin service model in your area. You don't guess — you launch with data." },
  { number: 2, title: "Build Your Revenue Blueprint", desc: "Pricing, service packages, and profit margins — mapped out before you spend a dollar. You'll know exactly how much you charge, what you deliver, and what you take home." },
  { number: 3, title: "Set Up Legally Bulletproof", desc: "LLC formation, licensing, insurance, EIN, contracts — all handled. You launch compliant from day one, not scrambling to fix paperwork after the fact." },
  { number: 4, title: "Create a Brand Customers Trust Instantly", desc: "Professional website, logo, brand guide, and social media presence — built in 14 days. You look like you've been in business for years, not weeks." },
  { number: 5, title: "Get Customers Before You Launch", desc: "We build your lead pipeline — ads, local outreach, referral partnerships — so you have paying clients lined up BEFORE launch day. No hoping. No waiting." },
  { number: 6, title: "Install the Machine That Runs Without You", desc: "CRM, booking systems, SOPs, hiring playbooks, and team training — so your business operates like a system, not a side hustle. You oversee, you don't operate." },
  { number: 7, title: "Land Your First Revenue", desc: "Real customers, real invoices, real money in the bank. We don't celebrate plans — we celebrate deposits. Most clients hit $3K-$15K/month within 3-6 months." },
  { number: 8, title: "Scale or Stabilize — Your Choice", desc: "Monthly optimization, growth strategy, and 12 months of support. Build toward a sellable asset worth $200K-$800K, or stabilize at a profit level that replaces your salary." },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Our 8-Step Launch Framework
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          From &ldquo;I have an idea&rdquo; to &ldquo;I have paying customers&rdquo; — every step handled.
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
