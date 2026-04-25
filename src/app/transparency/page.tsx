import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import { NONPROFIT } from "@/lib/links";

export const metadata: Metadata = {
  title: "Governance & Transparency | Azgari Foundation",
  description:
    "Azgari Foundation's governance, legal status, financial-disclosure plans, and operating commitments — published for donors, funders, and the public.",
  openGraph: {
    title: "Governance & Transparency | Azgari Foundation",
    description:
      "Legal status, governance, financial-disclosure plans, and operating commitments.",
    type: "website",
    url: "https://azgari.org/transparency",
  },
};

// Transparency page — donors and grant officers check for this.  Donors and
// funders evaluating a young 501(c)(3) will look here for (1) legal / IRS
// status, (2) governance, (3) financial-disclosure plan, and (4) explicit
// separation between nonprofit and commercial activities. All statements
// here are factual disclosures; forward-looking items are labeled "planned."

const legalFacts = [
  { label: "Legal Name", value: NONPROFIT.name },
  { label: "Organization Type", value: NONPROFIT.type },
  { label: "EIN", value: NONPROFIT.ein },
  { label: "IRS Determination", value: "Approved — IRS Letter 947 issued" },
  { label: "Effective Date of Exemption", value: NONPROFIT.determinationDate },
  { label: "Public Charity Classification", value: NONPROFIT.publicCharityStatus },
  { label: "Contribution Deductibility", value: NONPROFIT.contributionDeductibility },
  { label: "DLN (Determination Letter Number)", value: NONPROFIT.dln },
  { label: "Accounting Period", value: NONPROFIT.accountingPeriod },
  { label: "State of Incorporation", value: "Delaware" },
  { label: "Foreign Entity Registrations", value: "Texas, Florida" },
  { label: "Year Incorporated", value: "2026" },
  { label: "Primary Operating Address", value: "10328 Ember Glen Drive, Austin, TX 78726" },
];

const governanceCommitments = [
  {
    title: "Board Governance",
    desc: "The Foundation is governed by a Board of Directors with independent oversight of mission, finances, and the Executive Director. The initial board roster and bylaws will be published on this page as the board is seated.",
    status: "In progress",
  },
  {
    title: "Conflict of Interest Policy",
    desc: "A written conflict-of-interest policy consistent with IRS requirements is in place and available upon request.",
    status: "Adopted",
  },
  {
    title: "Executive Compensation",
    desc: "The Executive Director's compensation, if any, will be set by the independent board based on comparable-compensation data and disclosed in the Foundation's annual Form 990 filings.",
    status: "Disclosed annually via Form 990",
  },
  {
    title: "Document Retention & Whistleblower Policies",
    desc: "Standard IRS-recommended document-retention and whistleblower policies are in place and available upon request.",
    status: "Adopted",
  },
];

const financialCommitments = [
  {
    title: "Annual Form 990 Filing",
    desc: "The Foundation will file Form 990-N, 990-EZ, or 990 (as required by size) with the IRS annually (calendar-year accounting period ending December 31). A link to each filing will be published on this page.",
  },
  {
    title: "Audited Financial Statements",
    desc: "The Foundation commits to publishing independently audited financial statements beginning with its first full fiscal year in which revenue exceeds standard audit thresholds ($500K).",
  },
  {
    title: "Outcome Reporting",
    desc: "Annual outcome reports (participants served, completion rates, employment and self-employment outcomes, wage gains) will be published on the Foundation's website beginning 12 months after the first cohort completes the 24-week curriculum.",
  },
  {
    title: "Expense Transparency",
    desc: "Program / management / fundraising expense ratios will be published in the annual report and align with IRS Form 990 Schedule O narrative disclosures.",
  },
];

const disclosures = [
  "Azgari Foundation has received its IRS determination letter (Letter 947) recognizing the Foundation as a tax-exempt public charity under IRC § 501(c)(3), effective December 1, 2025. Contributions to the Foundation are tax-deductible to the extent permitted by law under IRC §§ 170, 2055, 2106, and 2522. The Foundation is classified as a public charity under IRC § 170(b)(1)(A)(vi).",
  "azgari.org publishes only free educational resources and scholarship information. The Foundation does not sell paid programs on this site. Any fee-based educational offerings are operated separately by the for-profit sister brand at azgari.com.",
  "The Foundation's planned residential, transitional-housing, stipend, and self-sustaining-campus programs are not currently operating. Their launch is contingent on government grants, foundation awards, and capital-campaign funding.",
  "The Foundation does not guarantee any specific level of income or business success for participants. Individual results vary based on effort, market conditions, and capital.",
  "The Foundation does not engage in political-campaign activity on behalf of or in opposition to any candidate for public office, consistent with IRC § 501(c)(3) restrictions.",
  "Lobbying activities, if any, will be limited and reported as required under IRC § 501(h) or the substantial-part test, whichever is elected.",
  "The Foundation is required to file Form 990 annually with the IRS (accounting period ending December 31). Missing three consecutive annual filings results in automatic revocation of exempt status.",
];

export default function TransparencyPage() {
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
              GOVERNANCE &amp; TRANSPARENCY
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              How We Are Structured, Governed &amp; Held Accountable.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Legal status, governance, financial commitments, and operating disclosures —
              published for donors, funders, and the public.
            </p>
          </div>
        </section>

        {/* Legal & Registration */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Legal &amp; Registration
            </h2>
            <p className="text-gray-600 mb-8">
              Core facts donors and grant officers will look up first.
            </p>
            <dl className="rounded-xl overflow-hidden border border-gray-100 divide-y divide-gray-100">
              {legalFacts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 bg-white">
                  <dt className="font-semibold text-sm" style={{ color: "var(--color-primary)" }}>
                    {fact.label}
                  </dt>
                  <dd className="md:col-span-2 text-gray-700 text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Governance */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Governance
            </h2>
            <p className="text-gray-600 mb-8">
              The Foundation operates under the governance standards expected of 501(c)(3)
              organizations.
            </p>
            <div className="space-y-4">
              {governanceCommitments.map((g) => (
                <div key={g.title} className="rounded-xl p-6 bg-white shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
                      {g.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
                    >
                      {g.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Commitments */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Financial &amp; Outcome Reporting
            </h2>
            <p className="text-gray-600 mb-8">
              What the Foundation will publish, and when.
            </p>
            <div className="space-y-4">
              {financialCommitments.map((f) => (
                <div key={f.title} className="rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-700">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosures */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-primary)" }}>
          <div className="max-w-4xl mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Disclosures</h2>
            <p className="text-white/80 mb-8">
              Statements the Foundation makes publicly so donors and funders can evaluate
              alignment before engaging.
            </p>
            <ol className="space-y-4">
              {disclosures.map((d, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary-dark)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white/90 text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ol>

            <p className="text-xs text-white/60 mt-10 italic">{NONPROFIT.legalDisclosure}</p>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Need Additional Documentation?
            </h2>
            <p className="text-gray-600 mb-8">
              The Foundation is happy to share its articles of incorporation, bylaws,
              IRS determination letter (Letter 947), or conflict-of-interest policy upon request
              from donors, funders, or accredited journalists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Contact the Foundation →
              </Link>
              <Link href="/funders" className="btn btn-secondary">
                View Funder Information
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
