import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function CallPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            What Happens on the Strategy Call
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This isn&apos;t a sales pitch. It&apos;s a structured evaluation to determine if business ownership is the right path for you — and which model fits your situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Call Agenda */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Your 20-Minute Call Agenda
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Evaluate Your Market Fit",
                  desc: "We analyze your local market, skills, and background to identify which service business models have the highest demand and margin in your area.",
                },
                {
                  step: "2",
                  title: "Assess Your Capital Path",
                  desc: "We review your available capital, SBA loan eligibility, and funding options to determine which program tier matches your financial position.",
                },
                {
                  step: "3",
                  title: "Determine Your Launch Model",
                  desc: "Based on your time commitment and goals, we recommend the right ownership model — from validation to full build to acquisition.",
                },
                {
                  step: "4",
                  title: "Build Your Revenue Timeline",
                  desc: "You leave with a clear picture of expected revenue, timeline to first customers, and what the first 90 days look like.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call Details Sidebar */}
          <div className="rounded-2xl p-6 border border-gray-200 bg-gray-50 h-fit">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Call Details
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Duration:</span>
                <span>20 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Cost:</span>
                <span>Free — no credit card</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>With:</span>
                <span>A launch strategist (not a sales rep)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Outcome:</span>
                <span>Clear next step or honest &ldquo;not a fit&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Prep:</span>
                <span>Know your available capital and weekly hours</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-red-700 text-sm mb-2">Don&apos;t Book If:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>No capital and no funding plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Still browsing ideas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Not ready to execute within 90 days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-5">
            Apply for a Strategy Call →
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Serious inquiries only. We&apos;ll confirm your call within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
