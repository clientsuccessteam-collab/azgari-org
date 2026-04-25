import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import MissionWrapper from "@/components/MissionWrapper";
import TrustBanner from "@/components/TrustBanner";
import Testimonials from "@/components/Testimonials";
import ScholarshipCallout from "@/components/ScholarshipCallout";
import ImpactModule from "@/components/ImpactModule";
import HomeFAQ from "@/components/HomeFAQ";
import Link from "next/link";
import Image from "next/image";
import { NONPROFIT, GHL_LINKS, LEAD_MAGNETS } from "@/lib/links";

// Azgari Foundation homepage — 501(c)(3) nonprofit. The page is split into:
// (1) MISSION — full charitable purpose (current + planned activities).
// (2) WHAT WE DO TODAY — strictly accurate description of current programs.
// (3) PLANNED EXPANSION — aspirational programming contingent on grant capital.
// This separation is intentional: funders and IRS reviewers expect the mission
// to state the Foundation's full organizational purpose while the "current"
// section reflects only what the Foundation operates today.
export default function Home() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="strip" />
      <main>
        {/* 1. HERO — full charitable mission */}
        <section
          className="pt-20 md:pt-28 pb-16"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                501(C)(3) NONPROFIT · ENTREPRENEURSHIP EDUCATION &amp; WORKFORCE DEVELOPMENT
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                Expanding Economic Mobility Through Entrepreneurship Education.
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {NONPROFIT.mission}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/scholarships" className="btn btn-primary">
                  Apply for a Scholarship →
                </Link>
                <Link href="/guides" className="btn btn-secondary">
                  Free Educational Resources
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder/azgari-headshot.jpg"
                  alt="Azgari Lipshy — Founder, Azgari Foundation"
                  width={450}
                  height={450}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <MissionWrapper variant="hero" />
        <TrustBanner />

        {/* 2. WHAT WE DO TODAY — accurate description of current programs */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                WHAT WE DO TODAY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Our Current Program
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Foundation was incorporated in January 2026 and received IRS 501(c)(3)
                determination (Letter 947) effective December 1, 2025. Everything below
                describes programs we operate today — on a scholarship basis, fully online.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl border-2 border-gray-100 text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  24 wks
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Online Curriculum
                </h3>
                <p className="text-gray-600 text-sm">
                  Structured 24-week educational program covering entrepreneurship
                  fundamentals — business model selection, branding, sales, operations, and
                  funding readiness.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-gray-100 text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  100%
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Scholarship Supported
                </h3>
                <p className="text-gray-600 text-sm">
                  All current participants attend through Foundation scholarships. There are
                  no paid programs sold on azgari.org.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-gray-100 text-center">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  Online
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Delivered Remotely
                </h3>
                <p className="text-gray-600 text-sm">
                  Participants complete the curriculum online from anywhere in the country —
                  no geographic barrier to access.
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-6 max-w-3xl mx-auto text-center"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <p className="text-sm text-gray-700">
                <strong>As of April 2026:</strong> the Foundation has awarded scholarships to
                eight participants since launching in January 2026. Outcomes data is collected
                continuously and will be published as cohorts complete the program.
              </p>
              <p className="text-xs text-gray-500 mt-3 italic">
                {NONPROFIT.resultsDisclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* 3. COMMUNITIES WE SERVE — charitable class */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                COMMUNITIES WE SERVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Who Our Scholarships Reach
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Foundation directs its scholarships and programming to young adults
                facing real barriers to economic mobility.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📚",
                  title: "Out-of-School Youth",
                  desc: "Ages 16–24 who are not in school and are working toward economic self-sufficiency.",
                },
                {
                  icon: "🎓",
                  title: "Aging-Out Foster Youth",
                  desc: "Ages 18–24 transitioning out of the foster care system.",
                },
                {
                  icon: "⚖️",
                  title: "Justice-Involved Young Adults",
                  desc: "Ages 18–24 reentering their communities after involvement with the justice system.",
                },
                {
                  icon: "🎖️",
                  title: "Low-Income Veterans",
                  desc: "Military members transitioning to civilian careers, including those facing housing instability.",
                },
              ].map((group) => (
                <div
                  key={group.title}
                  className="p-6 rounded-xl border-2 border-gray-100 bg-white"
                >
                  <span className="text-4xl mb-4 block">{group.icon}</span>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                    {group.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{group.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/scholarships" className="btn btn-primary">
                Apply for a Scholarship →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. PLANNED EXPANSION — aspirational programming (contingent on funding) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                PLANNED EXPANSION · CONTINGENT ON GRANT FUNDING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                What the Foundation Is Working Toward
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The programs below are part of the Foundation&apos;s planned expansion.
                Each is contingent on securing government grants, foundation awards, and
                capital-campaign funding. <strong>None of these programs are operating today.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="p-6 rounded-xl border-2 border-dashed"
                style={{ borderColor: "var(--color-accent)" }}
              >
                <span className="text-4xl mb-4 block">🏠</span>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Transitional Housing Program
                </h3>
                <p className="text-gray-600 text-sm">
                  Planned residential component pairing stable housing with the
                  entrepreneurship curriculum for participants without stable housing —
                  modeled on programs like YouthBuild and Chafee-funded transitional
                  housing for foster youth.
                </p>
              </div>
              <div
                className="p-6 rounded-xl border-2 border-dashed"
                style={{ borderColor: "var(--color-accent)" }}
              >
                <span className="text-4xl mb-4 block">💵</span>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Basic-Needs &amp; Training Stipends
                </h3>
                <p className="text-gray-600 text-sm">
                  Planned living-expense stipends for residential participants so they can
                  focus on the curriculum without income pressure during training.
                </p>
              </div>
              <div
                className="p-6 rounded-xl border-2 border-dashed"
                style={{ borderColor: "var(--color-accent)" }}
              >
                <span className="text-4xl mb-4 block">🌱</span>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                  Self-Sustaining Campus
                </h3>
                <p className="text-gray-600 text-sm">
                  Longer-term vision for a campus with vertical-farming, renewable energy,
                  and on-site workforce-development infrastructure — contingent on capital
                  grants, LIHTC, and USDA/HUD housing-capital awards.
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto italic">
              Planned programs are not operating today. The Foundation is actively seeking
              government grants and philanthropic funding to launch each component. Estimated
              timelines will be published as funding is secured.
            </p>
          </div>
        </section>

        {/* 5. FREE RESOURCES — community education */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Free Educational Resources
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Community education materials published by the Foundation — free, no purchase
                required.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {LEAD_MAGNETS.map((lm) => (
                <div
                  key={lm.id}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 flex flex-col"
                >
                  <span className="text-4xl mb-3">{lm.icon}</span>
                  <p
                    className="text-xs font-semibold tracking-wider mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {lm.type}
                  </p>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                    {lm.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{lm.description}</p>
                  <Link href={lm.href} className="btn btn-secondary w-full text-center mt-auto">
                    {lm.cta}
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/guides" className="text-sm font-medium underline" style={{ color: "var(--color-accent)" }}>
                Browse all free resources →
              </Link>
            </div>
          </div>
        </section>

        {/* 6. IMPACT / MISSION BRIDGE */}
        <ImpactModule />

        {/* 7. REAL PARTICIPANT STORIES */}
        <Testimonials />

        {/* 8. SCHOLARSHIP CALLOUT */}
        <div className="max-w-4xl mx-auto px-6 py-10">
          <ScholarshipCallout variant="card" />
        </div>

        {/* 9. FAQ */}
        <HomeFAQ />

        {/* 10. FINAL CTA — direct to scholarships */}
        <section
          className="py-16 md:py-24 text-center"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support the Foundation&apos;s Mission</h2>
            <p className="text-white/80 mb-8">
              Apply for a scholarship, connect the Foundation with a funder, or reach out
              to discuss partnership — every connection helps expand access to
              entrepreneurship education in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scholarships" className="btn btn-primary">
                Apply for a Scholarship
              </Link>
              <Link href={GHL_LINKS.forms.contact} className="btn btn-secondary">
                Contact the Foundation
              </Link>
            </div>
            <p className="text-xs text-white/50 mt-8 max-w-2xl mx-auto">
              {NONPROFIT.resultsDisclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
