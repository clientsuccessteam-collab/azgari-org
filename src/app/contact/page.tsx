import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Azgari",
  description: "Get in touch with Azgari. We help professionals build real wealth through service business ownership.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 text-center"
        style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Let&apos;s Talk About Your Business Goals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to build real wealth through business ownership? We&apos;re here to help you take the first step.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--color-primary)' }}
              >
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Alternative Contact */}
            <div className="lg:pl-8">
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--color-primary)' }}
              >
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-light)' }}
                  >
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@azgari.org"
                      className="text-gray-600 hover:underline"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      info@azgari.org
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-light)' }}
                  >
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Austin, TX</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent-light)' }}
                  >
                    <span className="text-xl">⏱️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div 
                className="mt-12 p-6 rounded-xl"
                style={{ backgroundColor: 'white' }}
              >
                <h3 
                  className="font-bold text-lg mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Check out our frequently asked questions for quick answers about our programs and services.
                </p>
                <Link 
                  href="/faq"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Visit our FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
