import Link from "next/link";
import { PROGRAMS, QUICK_WIN, GHL_LINKS } from "@/lib/links";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
          >
            INVEST IN YOUR FUTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Choose Your Investment Level
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Every program includes hands-on guidance, a launch guarantee, and systems you own forever. Your investment in a lower tier credits toward the next — so you never pay twice.
          </p>
          <p className="text-sm font-semibold max-w-xl mx-auto" style={{ color: 'var(--color-accent)' }}>
            Remember: our average client generates $285K in first-year revenue. That&apos;s 11x return on our most popular program.
          </p>
        </div>

        {/* Decision Tree */}
        <div className="max-w-2xl mx-auto mb-12 rounded-2xl p-6 sm:p-8 border-2 border-gray-100" style={{ backgroundColor: 'var(--color-cream)' }}>
          <h3 className="text-lg font-bold mb-2 text-center" style={{ color: 'var(--color-primary)' }}>
            Which program is right for you?
          </h3>
          <p className="text-sm text-gray-500 text-center mb-5">Answer these questions to find your fit:</p>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: 'var(--color-primary)' }}>1</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">How much time can you commit per week?</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span>40+ hrs → <strong className="text-gray-700">Launch Validation</strong></span>
                  <span>20–30 hrs → <strong className="text-gray-700">Full Launch</strong></span>
                  <span>10–15 hrs → <strong className="text-gray-700">Foundation</strong></span>
                  <span>&lt;10 hrs → <strong className="text-gray-700">Scale</strong></span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: 'var(--color-primary)' }}>2</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Do you want to be hands-on, or have us build it?</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>&quot;I want to learn and do it myself&quot; → <strong className="text-gray-700">Launch Validation or Foundation</strong></p>
                  <p>&quot;Build it with me&quot; → <strong className="text-gray-700">Full Launch</strong></p>
                  <p>&quot;I want to own, not operate&quot; → <strong className="text-gray-700">Scale</strong></p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: 'var(--color-primary)' }}>3</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">What&apos;s your available capital?</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span>$5K–$10K → <strong className="text-gray-700">Launch Validation</strong></span>
                  <span>$10K–$25K → <strong className="text-gray-700">Foundation</strong></span>
                  <span>$25K–$50K → <strong className="text-gray-700">Full Launch</strong></span>
                  <span>$50K+ → <strong className="text-gray-700">Scale</strong></span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-5 text-sm text-gray-500">
            Still unsure? <Link href={GHL_LINKS.forms.bookCall} className="font-medium underline" style={{ color: 'var(--color-accent)' }}>Book a free 20-minute call</Link> — we&apos;ll recommend the right fit.
          </p>
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
                To qualify for an SBA loan, you need to show <strong>$64,000 invested in your business</strong>. Our program fees count toward that investment threshold. You&apos;re not financing our service with an SBA loan — you&apos;re building toward one.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-white p-3">
                  <p className="font-bold" style={{ color: 'var(--color-primary)' }}>Step 1</p>
                  <p className="text-gray-600">Invest in your program with Azgari</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="font-bold" style={{ color: 'var(--color-primary)' }}>Step 2</p>
                  <p className="text-gray-600">Our fees + your business expenses count toward the $64K threshold</p>
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
