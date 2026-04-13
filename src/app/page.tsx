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

// Azgari Foundation is a 501(c)(3) nonprofit. This homepage surfaces ONLY
// the Foundation's charitable activities (mission, communities served,
// scholarships, free community resources). Commercial program pricing and
// paid enrollment live on the for-profit sister site at azgari.com and are
// routed there via next.config.ts redirects.
export default function Home() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="strip" />
      <main>
        {/* 1. HERO — charitable mission, communities served, primary CTA = scholarships */}
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
                501(C)(3) NONPROFIT · ENTREPRENEURSHIP EDUCATION
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                Expanding Economic Mobility Through Entrepreneurship Education.
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{NONPROFIT.mission}</p>
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

        {/* 2. COMMUNITIES WE SERVE — charitable class, front-and-center */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
              >
                COMMUNITIES WE SERVE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Who Our Scholarships &amp; Free Programs Reach
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Foundation directs its scholarships and free community training to founders
                facing real barriers to business ownership.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎓", title: "Aging-Out Foster Youth", desc: "Ages 18–24 transitioning out of foster care" },
                { icon: "🎖️", title: "Veterans", desc: "Military members transitioning to civilian careers" },
                { icon: "👨‍👩‍👧", title: "Single Parents", desc: "Re-entering the workforce and seeking independence" },
                { icon: "🌱", title: "First-Generation Entrepreneurs", desc: "From underserved communities, with no family business background" },
              ].map((group) => (
                <div key={group.title} className="p-6 rounded-xl border-2 border-gray-100">
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

        {/* 3. FREE RESOURCES — community education */}
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
                <div key={lm.id} className="bg-white rounded-xl p-6 border-2 border-gray-100 flex flex-col">
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

        {/* 4. IMPACT / MISSION BRIDGE */}
        <ImpactModule />

        {/* 5. REAL PARTICIPANT STORIES */}
        <Testimonials />

        {/* 6. SCHOLARSHIP CALLOUT */}
        <div className="max-w-4xl mx-auto px-6 py-10">
          <ScholarshipCallout variant="card" />
        </div>

        {/* 7. FAQ */}
        <HomeFAQ />

        {/* 8. FINAL CTA — direct to scholarships, not paid program */}
        <section
          className="py-16 md:py-24 text-center"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support the Foundation&apos;s Mission</h2>
            <p className="text-white/80 mb-8">
              Every scholarship funded means another founder from an underserved community
              receives entrepreneurship education at no cost.
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
