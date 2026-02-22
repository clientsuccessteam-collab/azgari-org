import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "See If You Qualify | Azgari Foundation",
  description:
    "Own a profitable, fully-operational service business in 90 days — with paying customers before you officially open. 100% ownership. No franchise fees. No royalties. Ever.",
};

/* ── GHL quiz link (configurable via env var) ── */
const QUIZ_URL =
  process.env.NEXT_PUBLIC_QUALIFY_QUIZ_URL ||
  "https://go.azgari.org/landing-page-business-launch-n-452699";

/* ── Testimonials with ICP matching ── */
const PROOF = [
  {
    name: "Marcus T.",
    role: "Former Operations Manager → Pressure Washing Owner",
    location: "Austin, TX",
    image: "/images/testimonials/marcus.jpg",
    before: "Stuck in corporate ops, managing someone else's P&L.",
    quote:
      "I went from corporate burnout to $287K in my first year. Azgari gave me the roadmap — I just had to follow it.",
    metric: "$287K year one",
    timeline: "First customer: Day 41",
  },
  {
    name: "Jennifer R.",
    role: "Former Admin Assistant → Commercial Cleaning Owner",
    location: "Tampa, FL",
    image: "/images/testimonials/jennifer.jpg",
    before: "Making $38K/year with no path to more.",
    quote:
      "Started with $15K and no experience. Now we're doing $35K/month with 14 recurring contracts. My operator runs daily ops.",
    metric: "$35K/month recurring",
    timeline: "First revenue: Day 52",
  },
  {
    name: "Anthony M.",
    role: "Former Warehouse Supervisor → Lawn Care Owner",
    location: "Columbus, OH",
    image: "/images/testimonials/anthony.jpg",
    before: "60-hour weeks, $3K/month, no equity.",
    quote:
      "Went from 60-hour weeks at $3K/month to 20-hour weeks at $12K. The difference? Systems. The business runs without me.",
    metric: "4x income, half the hours",
    timeline: "Fully operational: Day 87",
  },
];

/* ── Rewritten 8-Step Framework (outcomes, not activities) ── */
const FRAMEWORK_STEPS = [
  {
    num: "01",
    title: "Find Your Perfect-Fit Business",
    desc: "We analyze 50+ service models against 12 local market factors — competition density, demand signals, capital requirements. You get the top 3 with revenue projections. You don't guess. We pick.",
    outcome: "Walk away with: Your ideal business model, validated by data.",
    timeline: "Week 1-2",
  },
  {
    num: "02",
    title: "Build Your Revenue Blueprint",
    desc: "Pricing, service packages, and profit margins mapped before you spend a dollar. You'll know your price, your margin, and your take-home before you invest.",
    outcome: "Walk away with: Full financial model showing months 1-12.",
    timeline: "Week 2-3",
  },
  {
    num: "03",
    title: "Set Up Legally Bulletproof",
    desc: "LLC, licensing, insurance, EIN, contracts — all handled. Most people spend 3 months on this. We do it in 2 weeks.",
    outcome: "Walk away with: Fully compliant business entity, ready to operate.",
    timeline: "Week 2-4 (parallel)",
  },
  {
    num: "04",
    title: "Create a Brand Customers Trust Instantly",
    desc: "Professional website, logo, brand guide, social media presence. Live in 14 days. You look like you've been in business for years, not weeks.",
    outcome: "Walk away with: Complete brand that builds instant credibility.",
    timeline: "Week 3-4",
  },
  {
    num: "05",
    title: "Get Customers Before You Officially Launch",
    desc: "Ads, outreach, referral partnerships — your pipeline is built pre-launch. This is the step nobody else does. You have revenue before your first official day.",
    outcome: "Walk away with: Booked jobs and deposits before you 'open.'",
    timeline: "Week 5-7",
    highlight: true,
  },
  {
    num: "06",
    title: "Install the Machine That Runs Without You",
    desc: "CRM, SOPs, hiring playbook, operator training. You oversee — you don't operate. Your business runs like a system, not a side hustle.",
    outcome: "Walk away with: Operational team + systems handling daily work.",
    timeline: "Week 6-9",
  },
  {
    num: "07",
    title: "Land Your First Revenue",
    desc: "Real customers, real invoices, real deposits. $3K-$15K/month within 90 days. We don't celebrate plans. We celebrate deposits.",
    outcome: "Walk away with: Cash-flowing business with recurring revenue.",
    timeline: "Week 8-12",
  },
  {
    num: "08",
    title: "Scale or Stabilize — Your Choice",
    desc: "12 months of hands-on growth support. Build toward a $200K-$800K asset, or replace your salary and enjoy the freedom. Your business, your call.",
    outcome: "Walk away with: A business that runs — with or without you.",
    timeline: "Month 4-12",
  },
];

/* ── Value Stack ── */
const VALUE_STACK = [
  { item: "Custom Market Analysis + Business Model Selection", value: "$2,000" },
  { item: "Entity, Licensing, Insurance, Compliance — Done", value: "$3,500" },
  { item: "Professional Brand + Website in 14 Days", value: "$2,500" },
  { item: "CRM, Automations, Booking System — Installed", value: "$1,500" },
  { item: "Customers Before Launch (Lead Gen System)", value: "$3,500" },
  { item: "Operator Hiring + Training Playbook", value: "$5,000" },
  { item: "12 Months of Growth Support", value: "$6,000" },
];

export default function QualifyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Minimal top bar ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold" style={{ color: "var(--color-primary)" }}>
            <Image src="/logo-black.svg" alt="Azgari Foundation Logo" width={24} height={21} className="h-6 w-auto" />
            Azgari Foundation
          </Link>
          <Link
            href={QUIZ_URL}
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
            }}
          >
            Apply Now →
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          SECTION 1 — GRAND SLAM OFFER STATEMENT
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
            NOT A FRANCHISE · NOT A COURSE · NOT A COACH
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold mb-8 leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            We build service businesses for people who are done building{" "}
            <span style={{ color: "var(--color-accent)" }}>someone else&apos;s.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            You tell us your background and your budget. We find the right business,
            build it with you, and get you paying customers — usually before you officially open.
            You keep 100% of everything. No franchise. No royalties.
            And if we don&apos;t deliver, we keep working until we do.
          </p>

          {/* Guarantee callout */}
          <div
            className="inline-block rounded-xl px-6 py-4 mb-10 border-2"
            style={{
              borderColor: "var(--color-accent)",
              backgroundColor: "rgba(212, 160, 41, 0.06)",
            }}
          >
            <p className="text-sm font-bold mb-1" style={{ color: "var(--color-accent)" }}>
              THE GUARANTEE
            </p>
            <p className="text-gray-700">
              5-10 paying clients in 120 days — or <strong>full refund + $3,000 cash</strong>.
            </p>
          </div>

          <div className="block">
            <Link
              href={QUIZ_URL}
              className="inline-block text-lg font-bold px-10 py-5 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
              }}
            >
              See If You Qualify →
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              4 questions · 90 seconds · Instant result
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — WHO THIS IS FOR / NOT FOR
          (Moved ABOVE mechanism per playbook — 
          exclusion-first reduces scroll-to-qualify friction)
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
              We only onboard 12 clients per month. That constraint is intentional — it&apos;s how we keep results this high.
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
                  "You have less than $10,000 liquid to invest",
                  'You\'re looking for "passive income" with zero involvement',
                  "You want someone to run the entire business for you",
                  "You're not ready to commit within the next 60 days",
                  "You're still browsing ideas with no real urgency",
                  "You want a side hustle — this builds real equity",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
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
                  "You're a professional, veteran, nurse, or operator ready to own something",
                  "You have $10K–$100K+ to invest in a real business asset",
                  "You can dedicate 10-15 hours/week — we handle execution",
                  "You want a proven, data-selected model — not another experiment",
                  "You're ready to move in the next 30-60 days",
                  "You want 100% ownership with franchise-level systems",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <span
                      className="font-bold mt-0.5 flex-shrink-0"
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
          SECTION 3 — THE 8-STEP MECHANISM
          (Rewritten with outcomes, timelines, and 
          "what you walk away with")
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
              How the 90-day launch actually works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              8 phases. Defined gates. Clear decision points. Every step produces an outcome you can see and measure — not just &quot;coaching calls.&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FRAMEWORK_STEPS.map((step) => (
              <div
                key={step.num}
                className={`relative p-7 rounded-2xl border transition-colors ${
                  step.highlight
                    ? "border-2 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{
                  backgroundColor: step.highlight ? "rgba(212, 160, 41, 0.06)" : "white",
                  borderColor: step.highlight ? "var(--color-accent)" : undefined,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{
                      backgroundColor: step.highlight ? "var(--color-accent)" : "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    STEP {step.num}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{step.timeline}</span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                <p className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                  ✓ {step.outcome}
                </p>
                {step.highlight && (
                  <span
                    className="absolute top-3 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                    }}
                  >
                    ★ THE GRAND SLAM STEP
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Average time from qualification to first paying customer:{" "}
              <strong style={{ color: "var(--color-primary)" }}>47 days</strong>.
              Not because we rush — because the system removes guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — VALUE STACK
          (New section — makes the math obvious)
          ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              What&apos;s included
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Everything you need to go from idea to operating business — handled for you.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {VALUE_STACK.map((row, i) => (
              <div
                key={row.item}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : ""
                }`}
                style={{
                  backgroundColor: i % 2 !== 0 ? "var(--color-cream)" : undefined,
                }}
              >
                <span className="text-gray-700 font-medium text-sm md:text-base pr-4">{row.item}</span>
                <span className="text-gray-400 text-sm font-semibold whitespace-nowrap">{row.value} value</span>
              </div>
            ))}
            <div
              className="flex items-center justify-between px-6 py-5 border-t-2"
              style={{ borderColor: "var(--color-accent)", backgroundColor: "rgba(212, 160, 41, 0.06)" }}
            >
              <span className="font-bold" style={{ color: "var(--color-primary)" }}>
                Total Value Delivered
              </span>
              <span className="font-bold text-lg" style={{ color: "var(--color-accent)" }}>
                $24,000+
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Programs start at $10,000. Flexible payment plans and SBA funding paths available.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — PROOF (with before/after + timelines)
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
              They were where you are now
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              They weren&apos;t special. They were ready. Here&apos;s what happened.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROOF.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
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

                {/* Before state */}
                <p className="text-xs text-red-600 font-semibold mb-1">BEFORE:</p>
                <p className="text-sm text-gray-500 mb-3">{t.before}</p>

                <p className="text-sm text-gray-500 mb-2">{t.role}</p>
                <p className="text-gray-700 mb-4 italic text-sm">&quot;{t.quote}&quot;</p>

                <div className="flex items-center gap-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t.metric}
                  </span>
                  <span className="text-xs text-gray-400">{t.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6 — GUARANTEE STACK
          (New section — risk reversal per Kennedy)
          ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              We take the risk. You get the results.
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Every program comes with a guarantee that puts our money where our mouth is. If we don&apos;t deliver, we pay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Foundation",
                price: "$10K",
                guarantee: "If we can't validate your business model in 60 days — full refund.",
                fear: 'Eliminates: "What if it doesn\'t work?"',
              },
              {
                tier: "Full Launch",
                price: "$25K",
                guarantee: "5-10 paying clients in 120 days — or full refund + $3,000 cash back to you.",
                fear: 'Eliminates: "What if I don\'t get customers?"',
                highlight: true,
              },
              {
                tier: "Scale",
                price: "$50K",
                guarantee: "Operational team + $100K revenue pipeline in 180 days — or we keep working free until done.",
                fear: 'Eliminates: "What if it can\'t run without me?"',
              },
            ].map((g) => (
              <div
                key={g.tier}
                className={`rounded-2xl p-7 border-2 ${
                  g.highlight ? "shadow-lg relative" : ""
                }`}
                style={{
                  borderColor: g.highlight ? "var(--color-accent)" : "#e5e7eb",
                  backgroundColor: g.highlight ? "rgba(212, 160, 41, 0.04)" : "white",
                }}
              >
                {g.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)", color: "white" }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <p className="text-sm font-bold text-gray-400 mb-1">{g.tier}</p>
                <p className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                  {g.price}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{g.guarantee}</p>
                <p className="text-xs italic text-gray-500">{g.fear}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 7 — WHAT HAPPENS ON THE CALL
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
            If the quiz confirms you&apos;re a fit, you&apos;ll book a 30-minute strategy session. It&apos;s not a sales pitch — it&apos;s a mutual evaluation.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              {
                icon: "📍",
                title: "Evaluate Market Fit",
                desc: "We analyze your local market for demand, competition gaps, and revenue potential specific to your area.",
              },
              {
                icon: "💰",
                title: "Assess Your Capital Path",
                desc: "We map your investment to the right tier — SBA-funded, self-funded, or hybrid. No surprises.",
              },
              {
                icon: "🔧",
                title: "Match Your Business Model",
                desc: "Based on your skills, market, capital, and income goals — we recommend the highest-probability model.",
              },
              {
                icon: "📅",
                title: "Build Your Revenue Timeline",
                desc: "You leave with a realistic timeline: first customer, break-even, and monthly revenue targets for months 1-12.",
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
            If we&apos;re not the right fit, we&apos;ll tell you — and point you in the right direction. No pressure. No pitch.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 8 — FINAL CTA
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Ready to find out if you qualify?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4">
            We only onboard 12 clients per month. Answer 4 quick questions to see if there&apos;s a fit.
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-10">
            5-10 paying clients in 120 days — or full refund + $3,000. That&apos;s our promise.
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
            <span>✓ 90 seconds</span>
            <span>✓ No commitment</span>
            <span>✓ Instant result</span>
            <span>✓ 12 spots/month</span>
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
