import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function CallPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            What Happens on the Strategy Session
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured educational consultation with a program advisor to help determine whether business ownership — and specifically the flagship entrepreneurship program — aligns with your goals and situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Call Agenda */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Your 20-Minute Session Agenda
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Review Your Market Context",
                  desc: "The advisor reviews your local market, skills, and background to discuss which service business models fit your situation.",
                },
                {
                  step: "2",
                  title: "Discuss Your Capital Path",
                  desc: "We walk through available capital, SBA loan readiness, and funding options relevant to the program tuition and business launch costs.",
                },
                {
                  step: "3",
                  title: "Clarify Your Educational Path",
                  desc: "Based on your time availability and goals, we discuss whether the flagship program, scholarship programs, or other Foundation resources are the best fit.",
                },
                {
                  step: "4",
                  title: "Outline a Learning Timeline",
                  desc: "You leave with a clearer picture of what the curriculum covers, timelines, and what the first stages of enrollment would look like.",
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

          {/* Session Details Sidebar */}
          <div className="rounded-2xl p-6 border border-gray-200 bg-gray-50 h-fit">
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Session Details
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
                <span>A program advisor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Outcome:</span>
                <span>A clearer sense of program fit and next educational steps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Prep:</span>
                <span>Know your available capital and weekly hours for coursework</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href={GHL_LINKS.qualify} className="btn btn-primary text-lg px-10 py-5">
            Apply for a Strategy Session →
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            We&apos;ll confirm your session within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
