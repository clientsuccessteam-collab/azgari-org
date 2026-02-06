import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { stateData } from "@/lib/stateData";

export const metadata: Metadata = {
  title: "Find the Best Business for Your State | Azgari Foundation",
  description: "Discover the top service businesses to start in your state. Data-driven recommendations based on climate, demographics, and local market demand.",
};

export default function StateSelectorPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Find the Best Business for Your State
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              You tell us your state — we&apos;ll show you the smartest, highest-demand business models for your area.
            </p>
          </div>
        </section>

        {/* States Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
              style={{ color: 'var(--color-primary-dark)' }}
            >
              Select Your State
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {stateData.map((state) => (
                <Link
                  key={state.slug}
                  href={`/state/${state.slug}`}
                  className="group block p-6 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  style={{ 
                    borderColor: 'var(--color-primary)',
                    backgroundColor: 'white'
                  }}
                >
                  <span 
                    className="block text-2xl font-bold mb-2 transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {state.abbreviation}
                  </span>
                  <span 
                    className="block text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors"
                  >
                    {state.name}
                  </span>
                </Link>
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
              Not Sure Which Business is Right for You?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team can help you evaluate your skills, market conditions, and local opportunities to find the perfect fit.
            </p>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
