import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionWrapper from "@/components/MissionWrapper";
import ReinvestmentDisclosure from "@/components/ReinvestmentDisclosure";
import ScholarshipCallout from "@/components/ScholarshipCallout";

export const metadata: Metadata = {
  title: "Done-for-You Business Build | Azgari Foundation",
  description: "We build service businesses you own 100%. Full entity, brand, marketing, team, and operations — built for you in 180 days. $50,000 investment.",
  keywords: "done-for-you business, service business building, business ownership, SBA loan guidance, business launch",
  openGraph: {
    title: "Done-for-You Business Build | Azgari Foundation",
    description: "We build your entire service business — entity, brand, marketing, team, operations. You own 100%.",
    url: "https://azgari.org/services",
    type: "website",
  },
};

const flagshipFeatures = [
  "Data-driven business model selection (50+ proven models)",
  "Full entity formation, licensing, and compliance — handled",
  "Complete brand buildout (name, logo, website, marketing systems)",
  "Customer acquisition — paying clients before official launch",
  "Full operational team hired and trained",
  "Manager placed and running day-to-day operations",
  "Funding concierge for SBA loan qualification",
  "12 months of ongoing support",
];

const deliverables = [
  {
    title: "Business Strategy",
    items: ["Market validation", "Competitor analysis", "Pricing strategy", "Business model design"],
    icon: "📊",
  },
  {
    title: "Brand & Marketing",
    items: ["Logo & brand identity", "Website design", "Marketing materials", "Social media kit"],
    icon: "🎨",
  },
  {
    title: "Operations",
    items: ["Operations playbook", "Service delivery systems", "Quality control processes", "Vendor relationships"],
    icon: "⚙️",
  },
  {
    title: "Technology",
    items: ["CRM setup", "Booking automation", "Payment processing", "Reporting dashboards"],
    icon: "💻",
  },
  {
    title: "Growth Systems",
    items: ["Lead generation", "Sales scripts", "Referral programs", "Review management"],
    icon: "📈",
  },
  {
    title: "Ongoing Support",
    items: ["12-month post-launch support", "Performance monitoring", "Resource library", "Priority access to our team"],
    icon: "🤝",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
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
              DONE-FOR-YOU BUSINESS BUILD
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              We Build It. You Own It.
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We build your entire service business — entity, brand, marketing, team, customers, operations. You own 100%, pay zero royalties, and spend about an hour a week overseeing it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://go.azgari.org/landing-page-d" className="btn btn-primary">
                See If You Qualify →
              </Link>
              <Link href="#details" className="btn btn-secondary">
                See What&apos;s Included
              </Link>
            </div>
          </div>
        </section>

        {/* Flagship Offer */}
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
                  FLAGSHIP OFFER
                </span>

                <h2
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Done-for-You Business Build
                </h2>

                <p className="text-sm text-gray-500 mb-6">180-day build · ~1 hr/wk your time (oversight only)</p>

                <div
                  className="text-4xl font-bold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  $50,000
                  <small className="block text-sm font-normal text-gray-500 mt-1">
                    Payment plans and SBA funding paths available
                  </small>
                </div>

                <p className="text-gray-600 mt-4 mb-6">
                  We build your service business from scratch — you get a fully operational company with a team in place, customers paying, and a manager running day-to-day. You own 100% and pay zero royalties.
                </p>

                <ul className="text-sm text-gray-600 mb-6 space-y-3">
                  {flagshipFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Guarantee */}
                <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: 'var(--color-cream)' }}>
                  <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Guarantee:</span>{" "}
                  <span className="text-gray-600">Business operational with manager in seat within 180 days, or we continue building at no additional cost.</span>
                </div>

                <Link
                  href="https://go.azgari.org/landing-page-d"
                  className="btn btn-primary w-full text-center"
                >
                  See If You Qualify →
                </Link>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8 mb-12">
              <ReinvestmentDisclosure />
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <ScholarshipCallout variant="banner" />
            </div>
          </div>
        </section>

        {/* Acquisition Advisory Section */}
        <section 
          className="py-16 md:py-24"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                >
                  ALTERNATIVE PATH
                </span>
                
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Skip the Startup Risk — Buy an Existing Business
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  Why start from scratch when you can acquire a business with proven cash flow? Our Acquisition Advisory helps you find, evaluate, and close deals on profitable service businesses.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    >
                      <span style={{ color: 'var(--color-primary)' }}>🔍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--color-primary)' }}>Deal Sourcing</h4>
                      <p className="text-gray-600 text-sm">We help you find off-market opportunities that fit your criteria.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    >
                      <span style={{ color: 'var(--color-primary)' }}>📋</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--color-primary)' }}>Due Diligence Support</h4>
                      <p className="text-gray-600 text-sm">Financial analysis, operations review, and risk assessment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent-light)' }}
                    >
                      <span style={{ color: 'var(--color-primary)' }}>🏦</span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--color-primary)' }}>SBA Financing Guidance</h4>
                      <p className="text-gray-600 text-sm">Navigate SBA 7(a) loans with as little as 10% down.</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="inline-block rounded-xl p-6 mb-6"
                  style={{ backgroundColor: 'white', border: '2px solid var(--color-accent)' }}
                >
                  <p className="text-sm text-gray-600 mb-1">Acquisition Advisory</p>
                  <p 
                    className="text-3xl font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Starting at $2,500
                  </p>
                  <p className="text-sm text-gray-500">Project-based or ongoing retainer available</p>
                </div>
                
                <div>
                  <Link 
                    href="https://go.azgari.org/landing-page-d" 
                    className="btn btn-primary"
                  >
                    Explore Acquisition Advisory →
                  </Link>
                </div>
              </div>
              
              <div 
                className="rounded-2xl p-5 sm:p-8 text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <h3 className="text-2xl font-bold mb-6">Why Buy Instead of Build?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      →
                    </span>
                    <div>
                      <p className="font-semibold">Instant Cash Flow</p>
                      <p className="text-white/80 text-sm">Start earning day one instead of waiting months to break even.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      →
                    </span>
                    <div>
                      <p className="font-semibold">Proven Systems</p>
                      <p className="text-white/80 text-sm">Existing processes, equipment, and customer relationships.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      →
                    </span>
                    <div>
                      <p className="font-semibold">Lower Risk</p>
                      <p className="text-white/80 text-sm">Financial history means easier financing and predictable returns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      →
                    </span>
                    <div>
                      <p className="font-semibold">SBA-Friendly</p>
                      <p className="text-white/80 text-sm">Established businesses qualify for favorable loan terms.</p>
                    </div>
                  </div>
                </div>
              </div>
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
                What&apos;s Included
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every build follows our proven systems, refined over 20+ years of building service businesses.
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
              Ready to Own a Business Without Running It?
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8">
              Answer a few quick questions to see if you qualify — and whether our scholarship fund can help.
            </p>
            
            <Link 
              href="https://go.azgari.org/landing-page-d" 
              className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
            >
              See If You Qualify →
            </Link>
            
            <p className="mt-6 text-white/70 text-sm">
              No commitment required. We&apos;ll tell you honestly if it&apos;s a fit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
