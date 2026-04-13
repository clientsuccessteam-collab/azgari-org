import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import { NONPROFIT } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Funders | Azgari Foundation",
  description:
    "Azgari Foundation's theory of change, logic model, and outcomes framework — prepared for foundation, corporate, and government funders considering a grant or partnership.",
  openGraph: {
    title: "For Funders | Azgari Foundation",
    description:
      "Theory of change, logic model, and outcomes framework for foundation, corporate, and government partners.",
    type: "website",
    url: "https://azgari.org/funders",
  },
};

// For-funders page: written in the language foundation program officers and
// federal grant reviewers expect. Includes theory of change, logic model
// (inputs → activities → outputs → outcomes), target outcomes / KPIs, and
// funding priorities. Referenced in LOIs and proposals.

const logicModel = [
  {
    label: "INPUTS",
    subtitle: "What the Foundation invests",
    items: [
      "501(c)(3) nonprofit governance (Delaware, TX + FL registrations)",
      "24-week online entrepreneurship education curriculum",
      "Founder and educator with 20+ years of service-business operating experience",
      "Scholarship funds (philanthropic and, upon approval, government sources)",
      "Mentor network and community partnerships",
      "Planned: transitional housing, training stipends, on-site workforce infrastructure (contingent on grant capital)",
    ],
  },
  {
    label: "ACTIVITIES",
    subtitle: "What the Foundation does",
    items: [
      "Recruit participants from the four priority charitable classes",
      "Deliver 24-week structured curriculum (business model, compliance, branding, sales, operations, funding readiness)",
      "Provide mentor-supported practicum — applied business learning",
      "Award scholarships so participants attend at no cost",
      "Planned: provide transitional housing + living stipend during training",
      "Planned: deliver post-program job-placement and micro-enterprise seed grants",
    ],
  },
  {
    label: "OUTPUTS",
    subtitle: "Immediate measurable deliverables",
    items: [
      "# of participants enrolled per cohort",
      "# of scholarships awarded",
      "# of curriculum modules completed per participant",
      "# of mentor hours delivered",
      "# of communities / ZIP codes served",
      "Planned: # of transitional-housing beds filled",
    ],
  },
  {
    label: "SHORT-TERM OUTCOMES",
    subtitle: "6–12 months after enrollment",
    items: [
      "Program completion rate (target ≥ 70%)",
      "Credential attainment (certificate of completion)",
      "Participant confidence & readiness (validated pre/post survey)",
      "Business-plan completion rate",
      "Funding-readiness score (SBA-readiness assessment)",
    ],
  },
  {
    label: "MEDIUM-TERM OUTCOMES",
    subtitle: "12–24 months after graduation",
    items: [
      "% of graduates in employment or self-employment",
      "Median wage gain vs. baseline",
      "% of graduates launching a formally-registered business",
      "Housing stability (for residential-program participants, once launched)",
      "Reduced reliance on public-assistance programs",
    ],
  },
  {
    label: "LONG-TERM IMPACT",
    subtitle: "3–5 years",
    items: [
      "Economic-mobility index gains in served communities",
      "Jobs created in participants' local communities",
      "Intergenerational wealth and knowledge transfer",
      "Reduced recidivism among justice-involved graduates",
      "Reduced long-term homelessness among residential-program graduates",
    ],
  },
];

const fundingPriorities = [
  {
    tier: "Immediate (current year)",
    needs: [
      {
        label: "Scholarship fund",
        range: "$25,000–$100,000",
        use: "Direct scholarship support for next 4 cohorts (~40 participants).",
      },
      {
        label: "Program operations",
        range: "$25,000–$75,000",
        use: "Curriculum maintenance, mentor stipends, participant support services.",
      },
      {
        label: "Capacity grant",
        range: "$15,000–$50,000",
        use: "Grant-writing capacity, outcome-tracking infrastructure, financial audit readiness.",
      },
    ],
  },
  {
    tier: "Near-term (Year 2, contingent on 501(c)(3) determination)",
    needs: [
      {
        label: "Residential pilot",
        range: "$250,000–$500,000",
        use: "Lease a small transitional-housing property (6–12 beds) and run a residential pilot cohort alongside the online curriculum.",
      },
      {
        label: "Stipend fund",
        range: "$100,000–$250,000",
        use: "Basic-needs and training stipends for residential participants.",
      },
      {
        label: "Outcome evaluation",
        range: "$50,000–$100,000",
        use: "Third-party evaluation partner to independently measure short-term outcomes across the first three cohorts.",
      },
    ],
  },
  {
    tier: "Long-term (Year 3+)",
    needs: [
      {
        label: "Capital campaign",
        range: "$3M–$10M",
        use: "Acquisition and buildout of a permanent campus with transitional-housing, workforce infrastructure, and self-sustaining features (vertical farming, renewable energy).",
      },
    ],
  },
];

export default function FundersPage() {
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
          <div className="max-w-4xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
            >
              FOR FUNDERS &amp; GRANT PARTNERS
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              How We Create Economic Mobility —<br className="hidden md:block" /> And How You Can Help.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              A concise overview of the Foundation&apos;s theory of change, logic model,
              target outcomes, and current funding priorities — prepared for foundation
              program officers, corporate community-investment teams, and government grant
              reviewers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Request a Funder Conversation →
              </Link>
              <Link href="/transparency" className="btn btn-secondary">
                View Governance &amp; Transparency
              </Link>
            </div>
          </div>
        </section>

        {/* Theory of Change */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wider"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                THEORY OF CHANGE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                The Problem, The Lever, The Outcome
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                <p
                  className="text-xs font-semibold tracking-wider mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  THE PROBLEM
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Out-of-school youth, aging-out foster youth, justice-involved young adults,
                  and low-income veterans face structural barriers to stable employment and
                  business ownership — resulting in long-term poverty, housing instability,
                  and cycles of disadvantage.
                </p>
              </div>
              <div className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                <p
                  className="text-xs font-semibold tracking-wider mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  OUR LEVER
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Deliver a structured, mentor-supported entrepreneurship-education
                  curriculum at no cost — paired, as funding permits, with residential
                  stability, basic-needs support, and job-placement or seed-grant
                  transition assistance.
                </p>
              </div>
              <div className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                <p
                  className="text-xs font-semibold tracking-wider mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  THE OUTCOME
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Graduates enter stable employment or self-employment, achieve measurable
                  wage gains, and create jobs in their local communities — expanding
                  economic mobility for themselves, their families, and their neighborhoods.
                </p>
              </div>
            </div>

            <p
              className="mt-10 text-lg leading-relaxed rounded-xl p-6"
              style={{ backgroundColor: "var(--color-cream)", color: "var(--color-primary)" }}
            >
              <strong>If </strong>we provide structured entrepreneurship education, mentorship,
              and (as funding permits) residential support to young adults from historically
              underserved communities, <strong>then</strong> participants will complete a
              credentialing curriculum, enter stable employment or self-employment, and
              realize measurable wage gains, <strong>because</strong> the program removes the
              skills gap, the information gap, and — through planned residential support — the
              material-stability gap that keep these populations from accessing
              business-ownership pathways.
            </p>
          </div>
        </section>

        {/* Logic Model */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10 text-center">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wider"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                LOGIC MODEL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Inputs → Activities → Outputs → Outcomes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The pipeline from what we invest to the impact we measure — structured for
                funders who need a clear results framework.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logicModel.map((col) => (
                <div key={col.label} className="rounded-xl p-6 bg-white shadow-sm">
                  <p
                    className="text-xs font-bold tracking-widest mb-1"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {col.label}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{col.subtitle}</p>
                  <ul className="space-y-2">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span style={{ color: "var(--color-accent)" }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-gray-500 italic max-w-3xl mx-auto text-center">
              Target outcome numbers are planning benchmarks based on comparable
              workforce-development and transitional-housing program evidence. Actual results
              will be tracked and reported in the Foundation&apos;s annual outcome reports.
            </p>
          </div>
        </section>

        {/* Funding Priorities */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wider"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                FUNDING PRIORITIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Where Grant Capital Goes
              </h2>
              <p className="text-gray-600">
                Plain-English breakdown of the Foundation&apos;s near-term funding needs —
                phased so funders can match gift size and restriction to the right
                activity.
              </p>
            </div>

            <div className="space-y-10">
              {fundingPriorities.map((tier) => (
                <div key={tier.tier}>
                  <h3
                    className="text-xl font-bold mb-4 pb-2 border-b"
                    style={{ color: "var(--color-primary)", borderColor: "var(--color-accent-light)" }}
                  >
                    {tier.tier}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {tier.needs.map((need, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-5 border border-gray-100"
                        style={{ backgroundColor: "var(--color-cream)" }}
                      >
                        <p
                          className="font-semibold mb-1"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {need.label}
                        </p>
                        <p
                          className="text-sm font-bold mb-2"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {need.range}
                        </p>
                        <p className="text-sm text-gray-700">{need.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Engage */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-primary)" }}>
          <div className="max-w-4xl mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How Funders Can Engage
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Letter of Inquiry",
                  body: "The Foundation is happy to prepare a customized letter of inquiry or concept note for your review. Typical LOI turnaround: 5 business days.",
                },
                {
                  label: "Program Officer Conversation",
                  body: "We welcome a 30-minute exploratory call with foundation staff to discuss alignment with your funding priorities before any formal submission.",
                },
                {
                  label: "Site Visit",
                  body: "Remote site visits available now. In-person visits will be available once the residential pilot launches.",
                },
                {
                  label: "Multi-Year Commitments",
                  body: "Multi-year, general operating support is the Foundation's highest-leverage gift type — it enables stable staffing and long-cycle planning. We also welcome restricted gifts to specific program components.",
                },
              ].map((e) => (
                <div key={e.label} className="rounded-xl p-6 bg-white/10 backdrop-blur">
                  <p
                    className="text-xs font-bold tracking-widest mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {e.label.toUpperCase()}
                  </p>
                  <p className="text-white/90 text-sm leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/contact" className="btn btn-primary">
                Contact the Foundation →
              </Link>
            </div>

            <p className="text-center text-xs text-white/60 mt-10 max-w-2xl mx-auto italic">
              {NONPROFIT.resultsDisclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
