import Link from "next/link";
import { PROGRAMS, QUICK_WIN, GHL_LINKS } from "@/lib/links";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            Choose Your Investment Level
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-5">
            Every tier includes a launch guarantee and systems you own forever. Pay into a lower tier? It credits toward the next — you never pay twice.
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary-dark)' }}
          >
            Average client first-year revenue: <span style={{ color: 'var(--color-accent-hover)' }}>$285K</span> — that&apos;s 11x return
          </div>
        </div>

        {/* Quick-Match Grid */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl border-2 border-gray-100 overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="px-6 pt-6 pb-4 text-center">
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
              Find your fit in 10 seconds
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-gray-200">
                  <th className="text-left py-3 px-4 sm:px-6 font-medium text-gray-500 w-28 sm:w-36"></th>
                  <th className="py-3 px-3 sm:px-4 font-bold text-center" style={{ color: 'var(--color-primary)' }}>Launch Validation</th>
                  <th className="py-3 px-3 sm:px-4 font-bold text-center" style={{ color: 'var(--color-primary)' }}>Foundation</th>
                  <th className="py-3 px-3 sm:px-4 font-bold text-center relative" style={{ color: 'var(--color-primary)' }}>
                    Full Launch
                    <span className="block text-[10px] font-semibold mt-0.5" style={{ color: 'var(--color-accent)' }}>MOST POPULAR</span>
                  </th>
                  <th className="py-3 px-3 sm:px-4 font-bold text-center" style={{ color: 'var(--color-primary)' }}>Scale</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-600">
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-gray-700">Your time</td>
                  <td className="py-3 px-3 sm:px-4 text-center">40+ hrs/wk</td>
                  <td className="py-3 px-3 sm:px-4 text-center">10–15 hrs/wk</td>
                  <td className="py-3 px-3 sm:px-4 text-center">20–30 hrs/wk</td>
                  <td className="py-3 px-3 sm:px-4 text-center">&lt;10 hrs/wk</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-gray-700">Your role</td>
                  <td className="py-3 px-3 sm:px-4 text-center">I do it myself</td>
                  <td className="py-3 px-3 sm:px-4 text-center">I learn &amp; build</td>
                  <td className="py-3 px-3 sm:px-4 text-center">We build together</td>
                  <td className="py-3 px-3 sm:px-4 text-center">I own, not operate</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-gray-700">Capital</td>
                  <td className="py-3 px-3 sm:px-4 text-center font-medium">$5K–$10K</td>
                  <td className="py-3 px-3 sm:px-4 text-center font-medium">$10K–$25K</td>
                  <td className="py-3 px-3 sm:px-4 text-center font-medium">$25K–$50K</td>
                  <td className="py-3 px-3 sm:px-4 text-center font-medium">$50K+</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 sm:px-6 font-semibold text-gray-700">Best for</td>
                  <td className="py-3 px-3 sm:px-4 text-center">Prove the concept fast</td>
                  <td className="py-3 px-3 sm:px-4 text-center">Validate before scaling</td>
                  <td className="py-3 px-3 sm:px-4 text-center">Go all-in with support</td>
                  <td className="py-3 px-3 sm:px-4 text-center">True business ownership</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 pb-5 pt-3 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Still unsure? <Link href={GHL_LINKS.forms.bookCall} className="font-medium underline" style={{ color: 'var(--color-accent)' }}>Book a free 20-minute call</Link> — we&apos;ll match you.
            </p>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROGRAMS.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
              style={{
                border: plan.featured ? '2px solid var(--color-accent)' : '2px solid #e5e7eb',
                boxShadow: plan.featured ? '0 8px 30px rgba(212, 160, 41, 0.2)' : undefined
              }}
            >
              {plan.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                >
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{plan.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{plan.timeCommitment} commitment</p>

              <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                {plan.price}
                <small className="block text-sm font-normal text-gray-500 mt-1">
                  {plan.note}
                </small>
              </div>

              <p className="text-gray-600 text-sm my-4 flex-grow">{plan.description}</p>

              {/* Guarantee */}
              <div className="rounded-lg p-3 mb-4 text-xs" style={{ backgroundColor: 'var(--color-cream)' }}>
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Guarantee:</span>{" "}
                <span className="text-gray-600">{plan.guarantee}</span>
              </div>

              {/* Graduation path */}
              {plan.graduation && (
                <p className="text-xs text-gray-400 mb-4 italic">
                  {plan.graduation}
                </p>
              )}

              {/* Buttons */}
              <div className="space-y-2 mt-auto">
                <Link
                  href={plan.href}
                  className={`btn w-full ${plan.featured ? "btn-primary" : "btn-primary"}`}
                >
                  Get Started
                </Link>
                <Link
                  href={GHL_LINKS.forms.bookCall}
                  className="btn btn-secondary w-full text-sm py-3"
                >
                  Book a Call First
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SBA Investment Callout */}
        <div className="max-w-3xl mx-auto mb-12 rounded-2xl p-6 sm:p-8 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-cream)' }}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <span className="text-3xl shrink-0">🏦</span>
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                Your Investment Counts Toward SBA Funding
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                SBA lenders require you to show <strong>30% of the loan amount</strong> already invested in your business before they&apos;ll approve funding. Our program fees count toward that investment. You&apos;re not financing our service with an SBA loan — you&apos;re building toward one.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-white p-3">
                  <p className="font-bold" style={{ color: 'var(--color-primary)' }}>Step 1</p>
                  <p className="text-gray-600">Invest in your program with Azgari</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="font-bold" style={{ color: 'var(--color-primary)' }}>Step 2</p>
                  <p className="text-gray-600">Our fees + your business expenses count toward the 30% requirement</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="font-bold" style={{ color: 'var(--color-primary)' }}>Step 3</p>
                  <p className="text-gray-600">Once qualified, apply for SBA funding to scale further</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Win Bundle — Entry Point */}
        <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 text-center border-2 border-dashed border-gray-200">
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>NOT READY TO COMMIT?</p>
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
            {QUICK_WIN.name} — {QUICK_WIN.price}
          </h3>
          <p className="text-sm text-gray-600 mb-4 max-w-lg mx-auto">
            {QUICK_WIN.description}
          </p>
          <Link href={QUICK_WIN.href} className="btn btn-secondary">
            Start with Quick Win →
          </Link>
        </div>
      </div>
    </section>
  );
}
