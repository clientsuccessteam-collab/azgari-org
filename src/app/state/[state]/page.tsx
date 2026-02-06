import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { stateData, getStateBySlug, getAllStateSlugs } from "@/lib/stateData";

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({
    state: slug,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const stateInfo = getStateBySlug(state);
  
  if (!stateInfo) {
    return {
      title: "State Not Found | Azgari Foundation",
    };
  }

  return {
    title: `${stateInfo.name}: Top 10 Service Businesses to Start | Azgari Foundation`,
    description: `Discover the best service businesses to start in ${stateInfo.name}. Data-driven rankings based on local climate, demographics, and market demand.`,
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const stateInfo = getStateBySlug(state);

  if (!stateInfo) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              {stateInfo.name}: Top 10 Service Businesses to Start
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The smartest, highest-demand business models for {stateInfo.name} — ranked by climate, demographics, and local market conditions.
            </p>
          </div>
        </section>

        {/* Top Businesses List */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-6">
              {stateInfo.topBusinesses.map((business, index) => (
                <div
                  key={business.id}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md border-l-4 transition-all hover:shadow-lg"
                  style={{ borderLeftColor: 'var(--color-accent)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Rank Number */}
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{ 
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-accent)'
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h2 
                        className="text-2xl font-bold mb-3"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {business.name}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {business.whyItWorks}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <span 
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
                          style={{ 
                            backgroundColor: 'var(--color-cream)',
                            color: 'var(--color-primary)'
                          }}
                        >
                          Startup Cost: {business.startupCost}
                        </span>
                        
                        {business.blogPostUrl && (
                          <Link
                            href={business.blogPostUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold transition-colors hover:underline"
                            style={{ color: 'var(--color-accent)' }}
                          >
                            Read Our Guide
                            <svg 
                              className="ml-2 w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start in {stateInfo.name}?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let us help you launch your service business with expert guidance, proven systems, and ongoing support. No franchise fees. No royalties. Full ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary-dark)'
                }}
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white text-white transition-all hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Other States */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 
              className="text-2xl font-bold text-center mb-8"
              style={{ color: 'var(--color-primary)' }}
            >
              Explore Other States
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {stateData
                .filter(s => s.slug !== stateInfo.slug)
                .slice(0, 15)
                .map((otherState) => (
                  <Link
                    key={otherState.slug}
                    href={`/state/${otherState.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                    style={{ 
                      backgroundColor: 'white',
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-primary)'
                    }}
                  >
                    {otherState.name}
                  </Link>
                ))}
              <Link
                href="/state"
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary-dark)'
                }}
              >
                View All States
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
