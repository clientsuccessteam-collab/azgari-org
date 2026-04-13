import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import MissionWrapper from "@/components/MissionWrapper";
import ReinvestmentDisclosure from "@/components/ReinvestmentDisclosure";
import ScholarshipCallout from "@/components/ScholarshipCallout";
import { NONPROFIT, PROGRAMS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Programs & Tuition | Azgari Foundation 501(c)(3)",
  description:
    "Flagship entrepreneurship education program from Azgari Foundation, a 501(c)(3) nonprofit. Guided curriculum, mentorship, and workforce development for participants launching service businesses.",
  keywords:
    "entrepreneurship education, nonprofit program, business ownership curriculum, mentorship, 501(c)(3) education, workforce development",
  openGraph: {
    title: "Programs & Tuition | Azgari Foundation 501(c)(3)",
    description:
      "A guided entrepreneurship education program with mentorship and hands-on coursework — offered by Azgari Foundation, a 501(c)(3) nonprofit.",
    url: "https://azgari.org/services",
    type: "website",
  },
};

const flagshipProgram = PROGRAMS[0];

const deliverables = [
  {
    title: "Business Strategy Curriculum",
    items: [
      "Market validation coursework",
      "Competitor analysis methods",
      "Pricing strategy education",
      "Business model design",
    ],
    icon: "📊",
  },
  {
    title: "Brand &amp; Marketing Education",
    items: [
      "Logo &amp; brand identity workshop",
      "Website design coursework",
      "Marketing materials curriculum",
      "Social media training",
    ],
    icon: "🎨",
  },
  {
    title: "Operations Readiness",
    items: [
      "Operations playbook coursework",
      "Service delivery systems",
      "Quality control practicum",
      "Vendor relationship training",
    ],
    icon: "⚙️",
  },
  {
    title: "Technology Training",
    items: [
      "CRM setup coursework",
      "Booking automation training",
      "Payment processing education",
      "Reporting &amp; analytics curriculum",
    ],
    icon: "💻",
  },
  {
    title: "Sales Education &amp; Practicum",
    items: [
      "Sales methodology training and mentorship",
      "B2B prospecting curriculum",
      "Contract proposal &amp; pricing coursework",
      "Account retention education",
    ],
    icon: "📈",
  },
  {
    title: "Ongoing Mentorship",
    items: [
      "12-month post-launch mentorship",
      "Progress monitoring &amp; coaching",
      "Resource library access",
      "Priority mentor access",
    ],
    icon: "🤝",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="strip" />
      <main>
        {/* Hero Section */}
        <section
          className="pt-24 pb-12 md:pt-32 md:pb-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              501(C)(3) ENTREPRENEURSHIP EDUCATION
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Programs &amp; Tuition
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our flagship entrepreneurship program guides participants through launching a service business they own outright — delivered through mentor-supported curriculum, hands-on coursework, and sales education and practicum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qualify" className="btn btn-primary">
                Check Program Eligibility →
              </Link>
              <Link href="#details" className="btn btn-secondary">
                See What&apos;s Included
              </Link>
            </div>
          </div>
        </section>

        {/* Flagship Program */}
        <section id="details" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-8">
              <MissionWrapper variant="section" />
            </div>

            <div className="max-w-3xl mx-auto">
              <div
                className="relative bg-white rounded-2xl p-8 sm:p-10"
                style={{ border: '2px solid var(--color-accent)', boxShadow: '0 8px 30px rgba(212, 160, 41, 0.2)' }}
              >
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                >
                  FLAGSHIP PROGRAM
                </span>

                <h2
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {flagshipProgram.name}
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                  180-day guided program · ~5–10 hrs/wk coursework &amp; oversight
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  {flagshipProgram.priceLabel}
                </p>

                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {flagshipProgram.price}
                  <small className="block text-sm font-normal text-gray-500 mt-1">
                    Payment plans and SBA funding readiness education available
                  </small>
                </div>

                <p className="text-sm text-gray-600 mt-3 mb-6 italic">
                  {flagshipProgram.tuitionJustification}
                </p>

                <p className="text-gray-600 mb-6">
                  {flagshipProgram.description}
                </p>

                <ul className="text-sm text-gray-600 mb-6 space-y-3">
                  {flagshipProgram.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Program Commitment */}
                <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: 'var(--color-cream)' }}>
                  <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Program Commitment:</span>{" "}
                  <span className="text-gray-600">
                    If a participant has not achieved an operational business within 180 days of enrollment, the Foundation will continue providing mentorship and educational support at no additional tuition cost until program objectives are met.
                  </span>
                </div>

                <Link
                  href="/qualify"
                  className="btn btn-primary w-full text-center"
                >
                  Check Program Eligibility →
                </Link>
              </div>
            </div>

            <p className="max-w-3xl mx-auto text-center text-xs text-gray-500 italic mt-6">
              {NONPROFIT.resultsDisclaimer}
            </p>

            <div className="max-w-2xl mx-auto mt-8 mb-12">
              <ReinvestmentDisclosure />
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <ScholarshipCallout variant="banner" />
            </div>
          </div>
        </section>

        {/* What's Included Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                What&apos;s Included in the Curriculum
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every participant is guided through the same mentor-supported curriculum, refined over 20+ years of teaching service business fundamentals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col h-full"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {category.title}
                  </h3>
                  <ul className="space-y-2 flex-grow">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-16 md:py-24 text-white text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore Enrollment?
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8">
              Answer a few quick questions to check program eligibility — and learn whether our scholarship fund can support your participation.
            </p>

            <Link
              href="/qualify"
              className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
            >
              Check Program Eligibility →
            </Link>

            <p className="mt-6 text-white/70 text-sm">
              No commitment required. We&apos;ll share an honest assessment of program fit.
            </p>

            <p className="mt-8 text-white/60 text-xs max-w-2xl mx-auto italic">
              {NONPROFIT.resultsDisclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
