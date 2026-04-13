import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import ImpactModule from "@/components/ImpactModule";
import { NONPROFIT } from "@/lib/links";

const missionPoints = [
  "Deliver entrepreneurship education, mentorship, and workforce development to underserved communities",
  "Expand access to business ownership for veterans, foster youth, single parents, and first-generation entrepreneurs",
  "Headquartered in Austin, TX; programming serves participants nationwide",
];

const communitiesServed = [
  {
    icon: "🎖️",
    title: "Veterans",
    desc: "Transition-focused coursework and mentorship for service members entering civilian business ownership.",
  },
  {
    icon: "🧑‍🎓",
    title: "Aging-Out Foster Youth",
    desc: "Scholarship-supported programming that opens entrepreneurship pathways for young adults leaving the foster system.",
  },
  {
    icon: "👩‍👧",
    title: "Single Parents",
    desc: "Flexible, mentor-supported curriculum designed for learners balancing family responsibilities.",
  },
  {
    icon: "🌱",
    title: "First-Generation Entrepreneurs",
    desc: "Structured education for learners whose families have not previously owned businesses.",
  },
  {
    icon: "🏘️",
    title: "Underserved Communities",
    desc: "Free community workshops, training programs, and scholarship pathways expanding economic mobility.",
  },
];

const educationalOutcomes = [
  {
    title: "Foundational Business Education",
    desc: "Participants graduate with a working knowledge of business model selection, compliance, operations, and sales methodology.",
  },
  {
    title: "Mentor-Supported Practicum",
    desc: "Every learner receives hands-on mentorship as they apply curriculum concepts to a real service business launch.",
  },
  {
    title: "Workforce &amp; Ownership Pathways",
    desc: "Graduates are prepared to create jobs in their communities by launching and operating their own service enterprises.",
  },
];

const transparencyPoints = [
  "We do not promise any specific income or business outcome — individual results vary",
  "We provide education, mentorship, and structured coursework",
  "Outcomes depend on participant effort, market conditions, and available capital",
  "As a 501(c)(3) nonprofit, program tuition funds educational services, scholarships, and community programming",
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
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              ABOUT AZGARI FOUNDATION
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Educating Founders.<br />
              Building Communities.
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {NONPROFIT.mission}
            </p>
          </div>
        </section>

        {/* Communities We Serve */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Communities We Serve
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Azgari Foundation focuses its educational programming and scholarship resources on learners who have historically had limited access to entrepreneurship education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {communitiesServed.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6 bg-white border border-gray-100 shadow-sm"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Outcomes */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Educational Outcomes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our curriculum is structured so participants leave the program with durable business-ownership knowledge and real-world, mentor-supported experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {educationalOutcomes.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-8 bg-white shadow-sm"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'var(--color-accent-light)' }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Azgari Foundation exists to expand access to entrepreneurship education and mentorship. Our programming supports learners as they develop the skills, confidence, and community needed to own service businesses and create jobs in their neighborhoods.
                </p>
                <ul className="space-y-4">
                  {missionPoints.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl p-6 sm:p-12 text-center shadow-sm"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <div
                  className="text-6xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  180
                </div>
                <div className="text-lg text-gray-600 mb-6">Days of Guided Coursework</div>
                <div
                  className="text-6xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  501(c)(3)
                </div>
                <div className="text-lg text-gray-600">Nonprofit Organization</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <ImpactModule />

        {/* Founder */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-20"
                    style={{ backgroundColor: 'var(--color-accent)' }}
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
                  <div
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100"
                  >
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>20+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                >
                  FOUNDER &amp; EXECUTIVE DIRECTOR
                </span>

                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Azgari Lipshy
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  Azgari Lipshy founded the Azgari Foundation to expand access to entrepreneurship education for communities historically excluded from business-ownership pathways.
                </p>

                <p className="text-lg text-gray-600 mb-6">
                  After two decades of operating service businesses, she channeled what she learned into a structured educational mission — focused on mentorship, coursework, and scholarship-supported access for veterans, foster youth, single parents, and first-generation founders.
                </p>

                <p className="text-lg text-gray-600 mb-8">
                  Today, Azgari leads the Foundation&apos;s educational programs, mentor network, and community workshops, working with participants across the country.
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
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Our Commitment to Transparency
            </h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
              We believe in honest conversations about what entrepreneurship education can and cannot do. Here&apos;s what participants and donors can expect from the Foundation.
            </p>

            <div className="max-w-3xl mx-auto">
              {transparencyPoints.map((point, i) => (
                <div
                  key={i}
                  className="py-5 px-6 border-b border-white/20 flex gap-4 items-start"
                >
                  <span style={{ color: 'var(--color-accent)' }}>•</span>
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Learn about our flagship entrepreneurship program, scholarships for underserved founders, and community workshops.
            </p>
            <Link href="/services" className="btn btn-primary">
              View Programs &amp; Tuition →
            </Link>

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
