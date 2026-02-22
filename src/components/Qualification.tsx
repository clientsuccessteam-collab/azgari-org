import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function Qualification() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            This Isn&apos;t for Everyone
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re selective about who we work with — because your success depends on fit, not just desire. Here&apos;s how to know if this path is right for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This IS for you */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2" style={{ borderColor: 'var(--color-primary)' }}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                ✓
              </span>
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                This IS for You If...
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "You're a corporate professional, veteran, or skilled operator ready to own",
                "You have $10K–$50K+ in available capital (or SBA loan eligibility)",
                "You can commit 10–40 hours/week to building this",
                "You want a proven system, not another course or coaching program",
                "You're ready to make a decision within 90 days",
                "You value process certainty over motivational hype",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold" style={{ color: 'var(--color-primary)' }}>✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold text-lg">
                ✗
              </span>
              <h3 className="text-xl font-bold text-red-700">
                This is NOT for You If...
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "You're looking for a side hustle or passive income idea",
                "You have no capital and no plan to secure funding",
                "You're still shopping for ideas and not ready to commit",
                "You want someone to do it all for you (this is done WITH you)",
                "You're not willing to follow a structured process",
                "You expect overnight results without putting in the work",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold text-red-500">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href={GHL_LINKS.qualify} className="btn btn-primary">
            See If You Qualify →
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Takes 2 minutes. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
