import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "See If You Qualify | Azgari Foundation",
  description:
    "Find out if the Azgari ownership path is right for you. Not a franchise. Not a course. A structured system to launch a profitable service business you own 100%.",
};

/* ── GHL quiz link (configurable via env var) ── */
const QUIZ_URL =
  process.env.NEXT_PUBLIC_QUALIFY_QUIZ_URL ||
  "https://go.azgari.org/landing-page-business-launch-n-452699";

/* ── Testimonials (inline to keep page self-contained) ── */
const PROOF = [
  {
    name: "Marcus T.",
    role: "Former Operations Manager → Pressure Washing Owner",
    location: "Austin, TX",
    image: "/images/testimonials/marcus.jpg",
    quote:
      "I went from corporate burnout to $287K in my first year. Azgari gave me the roadmap — I just had to follow it.",
    metric: "$287K year one",
  },
  {
    name: "Jennifer R.",
    role: "Former Admin Assistant → Commercial Cleaning Owner",
    location: "Tampa, FL",
    image: "/images/testimonials/jennifer.jpg",
    quote:
      "Started with $15K and no experience. Now we're doing $35K/month with 14 recurring contracts.",
    metric: "$35K/month recurring",
  },
  {
    name: "Anthony M.",
    role: "Former Warehouse Supervisor → Lawn Care Owner",
    location: "Columbus, OH",
    image: "/images/testimonials/anthony.jpg",
    quote:
      "Went from 60-hour weeks at $3K/month to 20-hour weeks at $12K. The difference? Systems.",
    metric: "4x income, half the hours",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Market Selection",
    desc: "We analyze your local market, competition density, and demand signals to find the highest-probability service model for your area.",
  },
  {
    num: "02",
    title: "Business Model Lock",
    desc: "You pick from proven service models (not guesswork). We show you exactly what works, what it costs, and what revenue looks like in months 1-12.",
  },
  {
    num: "03",
    title: "Pre-Launch Pipeline",
    desc: "Before you spend a dollar on equipment, we help you book your first customers. Revenue before risk.",
  },
  {
    num: "04",
    title: "Operational Launch",
    desc: "Equipment, insurance, licensing, pricing, hiring — every system built and tested. You launch with a playbook, not a prayer.",
  },
];

export default function QualifyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Minimal top bar ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
            AZGARI
          </Link>
          <Link
            href={QUIZ_URL}
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
            }}
          >
            Start Qualification →
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          SECTION 1 — PROBLEM
          ════════════════════════════════════════════ */}
      <section
        className="pt-28 pb-16 md:pt-36 md:pb-24"
        style={{
          background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: "var(--color-accent-light)",
              color: "var(--color-primary)",
            }}
          >
            NOT A FRANCHISE. NOT A COURSE.
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            You don&apos;t need another idea.
            <br />
            <span style={{ color: "var(--color-accent)" }}>You need a launch system.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Most people who want to start a service business get stuck in the same loop: research, compare, overthink, repeat. Meanwhile, months pass and nothing changes.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The problem isn&apos;t motivation. It&apos;s that nobody showed you the actual steps — in order, with real numbers, for your specific market.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — MECHANISM (How it actually works)
          ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              How launches actually work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don&apos;t sell motivation. We run a structured ownership launch system — four phases, defined gates, clear decision points. Here&apos;s what happens:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="relative p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <span
                  className="text-5xl font-bold opacity-15 absolute top-4 right-6"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.num}
                </span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Average time from qualification to first paying customer:{" "}
              <strong style={{ color: "var(--color-primary)" }}>67 days</strong>.
              Not because we rush — because the system removes guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — PROOF
          ════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              People like you already did this
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              They weren&apos;t special. They were ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROOF.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div
                      className="font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-500">{t.location}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                <p className="text-gray-700 mb-4 italic">&quot;{t.quote}&quot;</p>
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--color-accent-light)",
                    color: "var(--color-primary)",
                  }}
                >
                  {t.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — WHO THIS IS FOR / NOT FOR
          ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              This is not for everyone
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We turn down more people than we accept. That&apos;s by design — it&apos;s how we keep results high.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NOT FOR */}
            <div className="rounded-2xl border-2 border-red-100 p-8 bg-red-50/30">
              <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                <span className="text-2xl">✕</span> Do NOT apply if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You have less than $10,000 available to invest",
                  "You're looking for \"passive income\" with zero effort",
                  "You're not ready to commit within the next 60 days",
                  "You want someone to run the business for you",
                  "You're just browsing ideas with no urgency",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <span className="text-red-400 font-bold mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IS FOR */}
            <div
              className="rounded-2xl border-2 p-8"
              style={{
                borderColor: "var(--color-primary)",
                backgroundColor: "rgba(27, 67, 50, 0.03)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--color-primary)" }}
              >
                <span className="text-2xl">✓</span> This IS for you if:
              </h3>
              <ul className="space-y-4">
                {[
                  "You're a professional, veteran, or operator ready to own something",
                  "You have $10K-$50K+ to invest in a real business",
                  "You can dedicate 20-30 hours/week to building",
                  "You want a proven model — not another experiment",
                  "You're ready to move in the next 30-60 days",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <span
                      className="font-bold mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — WHAT HAPPENS ON THE CALL
          ════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            What happens after you qualify
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            If the quiz confirms you&apos;re a fit, you&apos;ll book a 30-minute strategy call. Here&apos;s exactly what we cover:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              {
                icon: "📍",
                title: "Market Fit Analysis",
                desc: "We evaluate your local market for demand, competition, and revenue potential.",
              },
              {
                icon: "💰",
                title: "Capital Path",
                desc: "We map your investment to the right business model — SBA, self-funded, or hybrid.",
              },
              {
                icon: "🔧",
                title: "Launch Model",
                desc: "We determine which service business fits your skills, market, and income goals.",
              },
              {
                icon: "📅",
                title: "Revenue Timeline",
                desc: "You leave with a realistic timeline to first customer and monthly revenue targets.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8">
            This is not a sales pitch. It&apos;s a mutual evaluation. If we&apos;re not the right fit, we&apos;ll tell you.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6 — CTA → GHL QUIZ
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Ready to find out if you qualify?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
            Answer 4 quick questions. If you&apos;re a fit, you&apos;ll get access to book your strategy call. Takes about 90 seconds.
          </p>

          <Link
            href={QUIZ_URL}
            className="inline-block text-lg font-bold px-10 py-5 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
            }}
          >
            Start the Qualification Quiz →
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ No commitment</span>
            <span>✓ 90 seconds</span>
            <span>✓ Instant result</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Azgari Foundation. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Main Site
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
