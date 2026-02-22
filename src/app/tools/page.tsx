import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS, getToolsByCategory } from "@/lib/links";

export const metadata: Metadata = {
  title: "Business Tools & Templates | Azgari Foundation",
  description: "Battle-tested templates, calculators, and guides used by successful service business owners.",
};

export default function ToolsPage() {
  const freeTools = getToolsByCategory("free");
  const starterTools = getToolsByCategory("starter");
  const premiumTools = getToolsByCategory("premium");
  const vaultTools = getToolsByCategory("vault");

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
              BUSINESS TOOLS & TEMPLATES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Tools to Launch and Scale Your Service Business
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Battle-tested templates, calculators, and guides used by successful business owners.
            </p>
          </div>
        </section>

        {/* Free Training Video */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/20 text-white">
                  FREE TRAINING
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  How to Launch a Profitable Service Business in 180 Days
                </h2>
                <p className="text-white/80 mb-6">
                  Watch our free 30-minute training where Azgari Lipshy breaks down the exact 8-step framework we use to build businesses for our clients. Learn which business models work, how to get your first customers, and the #1 mistake that kills new businesses.
                </p>
                <Link
                  href={GHL_LINKS.qualify}
                  className="btn btn-primary"
                >
                  Watch Free Training →
                </Link>
                <p className="text-white/50 text-xs mt-3">Enter your email and phone to get instant access.</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-white/20">
                    <span className="text-3xl text-white">▶</span>
                  </div>
                  <p className="text-white/60 text-sm">Free 30-min training</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              Free Resources to Get Started
            </h2>
            <p className="text-gray-600 mb-8">Enter your email for instant access — no credit card required</p>

            <div className="grid md:grid-cols-2 gap-6">
              {freeTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                      {tool.title}
                    </h3>
                    <span className="text-green-600 font-bold flex-shrink-0">{tool.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                  <Link href={tool.href} className="btn btn-secondary w-full text-center mt-auto">
                    Get Instant Access →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Starter Tools */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              Starter Tools
            </h2>
            <p className="text-gray-600 mb-8">$27–$47 — Essential templates and guides</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starterTools.map((tool) => (
                <div 
                  key={tool.id}
                  className="relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-amber-500 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  {tool.popular && (
                    <span 
                      className="absolute -top-3 left-4 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                    >
                      POPULAR
                    </span>
                  )}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold" style={{ color: 'var(--color-primary)' }}>
                      {tool.title}
                    </h3>
                    <span className="font-bold flex-shrink-0" style={{ color: 'var(--color-accent)' }}>{tool.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                  <Link href={tool.href} className="btn btn-secondary w-full text-center text-sm py-3 mt-auto">
                    Get Access →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Tools */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              Premium Bundles
            </h2>
            <p className="text-gray-600 mb-8">$47–$147 — Comprehensive toolkits</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumTools.map((tool) => (
                <div 
                  key={tool.id}
                  className="relative bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-amber-500 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  {tool.popular && (
                    <span 
                      className="absolute -top-3 left-4 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                    >
                      POPULAR
                    </span>
                  )}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold" style={{ color: 'var(--color-primary)' }}>
                      {tool.title}
                    </h3>
                    <span className="font-bold flex-shrink-0" style={{ color: 'var(--color-accent)' }}>{tool.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                  <Link href={tool.href} className="btn btn-primary w-full text-center text-sm py-3 mt-auto">
                    Get Access →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vault */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center text-white">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-white/20">
                BEST VALUE
              </span>
              {vaultTools.map((tool) => (
                <div key={tool.id}>
                  <h2 className="text-3xl font-bold mb-2">{tool.title}</h2>
                  <p className="text-white/90 mb-4 max-w-xl mx-auto">{tool.description}</p>
                  <p className="text-4xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
                    {tool.price}
                  </p>
                  <Link href={tool.href} className="btn btn-primary text-lg px-10 py-5">
                    Get Complete Access →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Not Sure What You Need?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Start with our free assessment to discover which tools match your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GHL_LINKS.leadMagnets.assessment} className="btn btn-primary">
                Take Free Assessment
              </Link>
              <Link href={GHL_LINKS.forms.bookCall} className="btn btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
