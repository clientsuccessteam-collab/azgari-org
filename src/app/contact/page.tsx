import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionWrapper from "@/components/MissionWrapper";
import { GHL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact Us | Azgari Foundation",
  description: "Get in touch with Azgari Foundation. We help professionals launch and acquire profitable service businesses.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section 
          className="pt-24 pb-12 md:pt-32 md:pb-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Let&apos;s Talk About Your Business Goals
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start or acquire a service business? We&apos;re here to help you find the right path.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="pt-8 pb-0">
          <div className="max-w-3xl mx-auto px-6">
            <MissionWrapper variant="section" />
          </div>
        </section>

        {/* Main CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Schedule a Discovery Call
              </h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Tell us about your goals and we&apos;ll help you determine the best path forward — whether that&apos;s starting fresh, buying an existing business, or scaling what you have.
              </p>
              <Link 
                href={GHL_LINKS.forms.contact}
                className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
              >
                Start the Conversation →
              </Link>
              <p className="text-white/70 text-sm mt-4">
                Takes about 2 minutes. No commitment required.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Contact Options */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
              Other Ways to Reach Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)' }}
                >
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Email</h3>
                <a 
                  href="mailto:info@azgari.org" 
                  className="hover:underline"
                  style={{ color: 'var(--color-accent)' }}
                >
                  info@azgari.org
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)' }}
                >
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Location</h3>
                <p className="text-gray-600">Austin, TX</p>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)' }}
                >
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Response Time</h3>
                <p className="text-gray-600">Within 24-48 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Check out our FAQ for answers to common questions about our programs, pricing, and process.
            </p>
            <Link href="/faq" className="btn btn-secondary">
              View FAQ →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
