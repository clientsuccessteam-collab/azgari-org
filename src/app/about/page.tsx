import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import ImpactModule from "@/components/ImpactModule";
import { NONPROFIT } from "@/lib/links";

// About page is split to keep IRS and funder review clean:
// - Mission = full charitable purpose (current + planned).
// - "What We Do Today" = strictly accurate description of current programs.
// - "Planned Expansion" = aspirational programming contingent on grants.
// - Founder section = leadership context.

const communitiesServed = [
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
];

const currentProgramFacts = [
  {
    title: "24-Week Online Curriculum",
    desc: "A structured educational program covering business model selection, compliance, branding, operations, sales, and funding readiness — delivered remotely from anywhere in the U.S.",
  },
  {
    title: "Scholarship-Only Access",
    desc: "Every current participant attends through a Foundation scholarship. There is no paid enrollment on azgari.org; fee-based programming is operated separately at the commercial sister site, azgari.com.",
  },
  {
    title: "Founded January 2026 · IRS Recognized",
    desc: "The Foundation was incorporated in January 2026 and received IRS 501(c)(3) determination (Letter 947) effective December 1, 2025. As of April 2026, eight participants have been awarded scholarships. Outcome data is collected continuously and will be published as cohorts complete the program.",
  },
];

const plannedExpansion = [
  {
    title: "Transitional Housing Program",
    desc: "Planned residential component pairing stable housing with the entrepreneurship curriculum for participants without stable housing. Modeled on programs like YouthBuild and Chafee-funded transitional housing for foster youth.",
  },
  {
    title: "Basic-Needs & Training Stipends",
    desc: "Planned living-expense stipends for residential participants so they can focus on the curriculum without income pressure during training.",
  },
  {
    title: "Self-Sustaining Campus",
    desc: "Longer-term vision for a campus with vertical-farming infrastructure, renewable energy, and on-site workforce-development facilities — contingent on capital grants, LIHTC, and USDA/HUD housing-capital awards.",
  },
  {
    title: "Post-Program Seed Grants",
    desc: "Planned micro-enterprise seed grants for graduates pursuing self-employment, structured as an approved workforce outcome in alignment with federal workforce-development programs.",
  },
];

const transparencyPoints = [
  "The Foundation is a Delaware-incorporated, federally recognized 501(c)(3) public charity with foreign-entity registrations in Texas and Florida. IRS determination effective December 1, 2025 (Letter 947). EIN: 41-2896092.",
  "The only programs operating today are the 24-week online curriculum and scholarships. Planned housing, stipend, and campus programming are not currently operating.",
  "We do not promise any specific income or business outcome. Individual results vary based on effort, market conditions, and capital.",
  "The Foundation does not sell paid programs on azgari.org. Any fee-based educational offerings are operated separately by the for-profit sister brand at azgari.com.",
  "As planned programming launches, the Foundation will publish updated program pages, outcome data, and audited financials.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="full" />
      <main>
        {/* Hero */}
        <section
          className="pt-10 pb-12 md:pt-16 md:pb-20 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
            >
              ABOUT AZGARI FOUNDATION
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Educating Founders.
              <br />
              Building Communities.
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{NONPROFIT.mission}</p>
          </div>
        </section>

        {/* What We Do Today */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
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
                Strictly current activities — delivered online, on scholarship, to early
                cohorts since January 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {currentProgramFacts.map((item, i) => (
                <div key={i} className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold"
                    style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities We Serve */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Communities We Serve
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Foundation&apos;s scholarships and planned programming are directed to
                young adults facing real barriers to economic mobility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {communitiesServed.map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planned Expansion */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
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
                The programs below are part of the Foundation&apos;s planned expansion. Each
                is contingent on securing government grants, foundation awards, and
                capital-campaign funding. <strong>None of these programs are operating today.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {plannedExpansion.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border-2 border-dashed"
                  style={{ borderColor: "var(--color-accent)" }}
                >
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-8 max-w-2xl mx-auto italic">
              Planned programs are not operating today. Estimated timelines will be published
              as funding is secured.
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <ImpactModule />

        {/* Founder */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-20"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/founder/azgari-speaking.jpg"
                      alt="Azgari Lipshy, Founder of Azgari Foundation"
                      width={600}
                      height={600}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                    <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>20+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
                >
                  FOUNDER &amp; EXECUTIVE DIRECTOR
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                  Azgari Lipshy
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  Azgari Lipshy founded the Azgari Foundation in January 2026 to expand access
                  to entrepreneurship education for communities historically excluded from
                  business-ownership pathways.
                </p>

                <p className="text-lg text-gray-600 mb-6">
                  After two decades operating service businesses, she structured the Foundation
                  around a charitable educational mission — prioritizing scholarship-supported
                  training for out-of-school youth, aging-out foster youth, justice-involved
                  young adults, and low-income veterans.
                </p>

                <p className="text-lg text-gray-600 mb-8">
                  Azgari leads the Foundation&apos;s online curriculum and mentor network, and
                  is actively working to secure the grant funding needed to launch the
                  Foundation&apos;s planned transitional-housing and residential-training
                  programs.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/media" className="btn btn-secondary">
                    Watch Interviews →
                  </Link>
                  <Link href="/case-studies" className="btn btn-secondary">
                    See Participant Stories →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-primary)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Our Commitment to Transparency
            </h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
              Honest disclosures about where the Foundation is, what it operates today, and
              what it plans to operate as funding is secured.
            </p>

            <div className="max-w-3xl mx-auto">
              {transparencyPoints.map((point, i) => (
                <div key={i} className="py-5 px-6 border-b border-white/20 flex gap-4 items-start">
                  <span style={{ color: "var(--color-accent)" }}>•</span>
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Support the Foundation&apos;s Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Apply for a scholarship, access free community education, or contact the
              Foundation to learn how to support entrepreneurship education in underserved
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scholarships" className="btn btn-primary">
                Apply for a Scholarship →
              </Link>
              <Link href="/guides" className="btn btn-secondary">
                Free Educational Resources
              </Link>
            </div>

            <p className="mt-10 text-xs text-gray-500 max-w-2xl mx-auto italic">
              {NONPROFIT.resultsDisclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
