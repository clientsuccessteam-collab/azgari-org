import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function Qualification() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Is This Program the Right Fit?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our flagship entrepreneurship program serves a specific type of learner. These eligibility criteria help participants self-assess whether this educational path aligns with their current situation.
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
                "You're a corporate professional with 7+ years of industry expertise preparing to launch your own business",
                "You have $25K–$50K+ in available capital (or SBA loan eligibility) for program tuition and launch costs",
                "You can commit a few hours/week to coursework during the program — about 1 hr/week once operational",
                "You want a structured, mentor-supported curriculum rather than self-directed learning",
                "You're prepared to begin an enrollment decision within 90 days",
                "You value process and accountability over motivational content",
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
                "You don't have capital available and no plan to secure funding",
                "You're still exploring options and not ready to enroll in a structured program",
                "You have no domain expertise or professional background to leverage",
                "You prefer self-directed learning to a structured curriculum",
                "You expect guaranteed outcomes without active participation in coursework",
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
            Check Program Eligibility →
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Takes 2 minutes. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
