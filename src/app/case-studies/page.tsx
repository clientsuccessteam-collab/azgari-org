import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS, CASE_STUDIES, AGGREGATE_STATS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Case Studies | Azgari Foundation",
  description: "Real results from real entrepreneurs. See how our clients built $200K-$500K service businesses with the Azgari method.",
};

export default function CaseStudiesPage() {
  const featuredStudies = CASE_STUDIES.filter(study => study.featured);
  const otherStudies = CASE_STUDIES.filter(study => !study.featured);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section 
          className="pt-24 md:pt-32 pb-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              REAL RESULTS • REAL PEOPLE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              From Zero to Profitable Business Owner
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              These aren&apos;t hypotheticals. These are real entrepreneurs who built real businesses using our proven system.
            </p>
          </div>
        </section>

        {/* Aggregate Stats Bar */}
        <section className="py-8" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-white">
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.businessesLaunched}
                </div>
                <div className="text-sm opacity-80">Businesses Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.averageFirstYearRevenue}
                </div>
                <div className="text-sm opacity-80">Avg First Year Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.averageNetMargin}
                </div>
                <div className="text-sm opacity-80">Avg Net Margin</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.averageDaysToFirstRevenue}
                </div>
                <div className="text-sm opacity-80">Days to First Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.clientSatisfaction}
                </div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {AGGREGATE_STATS.totalClientRevenue}
                </div>
                <div className="text-sm opacity-80">Total Client Revenue</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: 'var(--color-primary)' }}>
              Featured Success Stories
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Deep dives into how our clients built their businesses from the ground up.
            </p>

            <div className="space-y-16">
              {featuredStudies.map((study, index) => (
                <div 
                  key={study.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Image/Placeholder */}
                  <div className="lg:w-2/5">
                    <div 
                      className="aspect-square rounded-2xl flex items-center justify-center text-6xl"
                      style={{ backgroundColor: 'var(--color-cream)' }}
                    >
                      {study.business === "Pressure Washing" && "🚿"}
                      {study.business === "Commercial Cleaning" && "🧹"}
                      {study.business === "Lawn Care & Landscaping" && "🌿"}
                      {study.business === "Junk Removal" && "🚛"}
                      {study.business === "HVAC Services" && "❄️"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                      >
                        {study.business}
                      </span>
                      <span className="text-gray-500 text-sm">{study.location}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                      {study.name}
                    </h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>
                      {study.timeline}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div 
                          key={i}
                          className="text-center p-3 rounded-lg"
                          style={{ backgroundColor: 'var(--color-cream)' }}
                        >
                          <div className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-gray-700">The Challenge: </span>
                        <span className="text-gray-600">{study.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">The Solution: </span>
                        <span className="text-gray-600">{study.solution}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote 
                      className="border-l-4 pl-4 italic text-gray-700"
                      style={{ borderColor: 'var(--color-accent)' }}
                    >
                      &quot;{study.quote}&quot;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Success Stories */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: 'var(--color-primary)' }}>
              More Success Stories
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Every business model. Every background. Same proven system.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherStudies.map((study) => (
                <div 
                  key={study.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ backgroundColor: 'var(--color-cream)' }}
                    >
                      {study.business === "Pressure Washing" && "🚿"}
                      {study.business === "Commercial Cleaning" && "🧹"}
                      {study.business === "Lawn Care & Landscaping" && "🌿"}
                      {study.business === "Junk Removal" && "🚛"}
                      {study.business === "HVAC Services" && "❄️"}
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: 'var(--color-primary)' }}>
                        {study.name}
                      </h3>
                      <p className="text-sm text-gray-500">{study.business} • {study.location}</p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((result, i) => (
                      <div 
                        key={i}
                        className="text-center p-2 rounded-lg"
                        style={{ backgroundColor: 'var(--color-cream)' }}
                      >
                        <div className="text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 italic mb-3">
                    &quot;{study.quote}&quot;
                  </p>

                  <p className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {study.timeline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-b bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-500">
              <strong>Earnings Disclaimer:</strong> These results are from individual clients and are not typical. 
              Your results will vary based on effort, market conditions, experience, and many other factors. 
              We do not guarantee any level of income or business success.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join 160+ entrepreneurs who&apos;ve built profitable service businesses with our proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                See If You Qualify →
              </Link>
              <Link href={GHL_LINKS.forms.bookCall} className="btn btn-secondary">
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
