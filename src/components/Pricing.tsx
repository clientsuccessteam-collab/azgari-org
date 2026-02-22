import Link from "next/link";
import { PROGRAMS, GHL_LINKS, NONPROFIT } from "@/lib/links";
import ReinvestmentDisclosure from "@/components/ReinvestmentDisclosure";

export default function Pricing() {
  const plan = PROGRAMS[0];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            One Offer. Everything Included.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We don&apos;t sell tiers. We build businesses. One investment, one outcome: a fully operational business you own.
          </p>
          <p className="text-xs text-gray-400 mt-3 max-w-lg mx-auto">
            {NONPROFIT.resultsDisclaimer}
          </p>
        </div>

        {/* Single Flagship Card */}
        <div
          className="relative bg-white rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-12"
          style={{
            border: '2px solid var(--color-accent)',
            boxShadow: '0 8px 30px rgba(212, 160, 41, 0.2)',
          }}
        >
          <span
            className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
          >
            DONE-FOR-YOU
          </span>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{plan.name}</h3>
            <p className="text-xs text-gray-500 mb-4">{plan.timeCommitment} commitment</p>

            <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
              {plan.price}
            </div>
            <p className="text-sm text-gray-500">{plan.note}</p>
          </div>

          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">{plan.description}</p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 font-bold" style={{ color: 'var(--color-accent)' }}>✓</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="rounded-lg p-4 mb-8 text-center" style={{ backgroundColor: 'var(--color-cream)' }}>
            <span className="font-bold text-sm" style={{ color: 'var(--color-primary)' }}>Guarantee:</span>{" "}
            <span className="text-gray-600 text-sm">{plan.guarantee}</span>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3">
            <Link
              href={plan.href}
              className="btn btn-primary text-lg px-10 py-4 block sm:inline-block"
            >
              Apply Now →
            </Link>
            <div>
              <Link
                href={GHL_LINKS.forms.bookCall}
                className="btn btn-secondary text-sm py-3 block sm:inline-block"
              >
                Book a Free Strategy Call First
              </Link>
            </div>
          </div>
        </div>

        {/* SBA Investment Callout */}
        <div className="max-w-3xl mx-auto mb-8 rounded-2xl p-6 sm:p-8 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-cream)' }}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <span className="text-3xl shrink-0">🏦</span>
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                Your Investment Counts Toward SBA Funding
              </h3>
              <p className="text-sm text-gray-700">
                SBA lenders require you to show <strong>30% of the loan amount</strong> already invested in your business before they&apos;ll approve funding. Our program fees count toward that investment. You&apos;re not financing our service with an SBA loan — you&apos;re building toward one.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ReinvestmentDisclosure />
        </div>
      </div>
    </section>
  );
}
