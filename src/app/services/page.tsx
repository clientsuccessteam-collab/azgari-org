import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Business Programs & Pricing | Azgari Foundation",
  description: "4 programs from $500-$50K. Expert business coaching, SBA loan prep, and acquisition advisory for service business owners.",
  keywords: "service business programs, business consulting pricing, SBA loan guidance, business launch program, acquisition advisory",
  openGraph: {
    title: "Programs & Pricing — Launch Your Service Business with Expert Guidance",
    description: "From Quick Win ($500) to Scale ($50K). Choose your path to service business ownership.",
    url: "https://azgari.org/services",
    type: "website",
  },
};

const programs = [
  {
    name: "Launch Validation",
    price: "$2,500",
    note: "or 3 × $958",
    delivery: "60-day program · 40+ hrs/wk",
    description: "Prove the concept, land your first paying customers, and validate it works — before investing more. This is where smart entrepreneurs willing to get their hands dirty start.",
    whoItsFor: "$5K–$10K available capital · Ready to hustle full-time",
    guarantee: "Launched in 60 days or continued support until you do",
    features: [
      "Business name + tagline",
      "Simple logo + brand colors",
      "Instagram & Facebook profile setup",
      "Payment system (Square or Stripe)",
      "Website or landing page",
      "Weekly check-in calls for 8 weeks",
    ],
    graduation: "Your $2.5K investment credits toward Foundation if you upgrade.",
    link: "https://go.azgari.org/quick-win",
    featured: false,
    tag: "STARTER",
  },
  {
    name: "Foundation",
    price: "$10,000",
    note: "or 3 × $3,500",
    delivery: "90-day program · 10–15 hrs/wk",
    description: "Test the model, land your first paying customers, and prove this works for you — before investing $25K or more. Most of our successful clients started exactly here.",
    whoItsFor: "$10K–$25K available capital · Validating before scaling",
    guarantee: "Launched in 90 days or continued support until you do",
    features: [
      "Business model selection (50+ proven models)",
      "Market validation",
      "Brand foundation (name, positioning, presence)",
      "Turn contacts into customers system",
      "Weekly group coaching for 90 days",
    ],
    graduation: "Your $10K investment credits toward Full Launch if you upgrade.",
    link: "https://go.azgari.org/foundation",
    featured: false,
    tag: null,
  },
  {
    name: "Full Launch",
    price: "$25,000",
    note: "or 3 × $8,500",
    delivery: "120-day program · 20–30 hrs/wk",
    description: "We build the business WITH you — marketing, systems, customer acquisition. You'll have paying customers before you officially launch. Our strongest guarantee.",
    whoItsFor: "$25K–$50K available capital · Ready to go all-in",
    guarantee: "Launched in 120 days or continued support — plus $3,000 cash if we miss",
    features: [
      "Everything in Foundation",
      "Done-with-you business buildout",
      "Complete marketing systems (website, funnels, lead gen)",
      "Sales team hiring + training support",
      "Client acquisition & referral system",
      "120-day launch timeline",
    ],
    graduation: "SBA funding can cover your Scale upgrade — pay from loan proceeds, not pocket.",
    link: "https://go.azgari.org/full-launch",
    featured: true,
    tag: "MOST POPULAR",
  },
  {
    name: "Scale",
    price: "$50,000",
    note: "SBA financing available",
    delivery: "180-day program · 5–10 hrs/wk",
    description: "Stop running your business — start owning it. We hire your team, train your manager, and get you to true business ownership. You become an OWNER, not an operator.",
    whoItsFor: "$50K+ capital or SBA loan · Existing $100K+ revenue · Oversight only",
    guarantee: "Business operational in 180 days with manager in seat or continued support",
    features: [
      "Everything in Full Launch",
      "Full operational team (hired + trained)",
      "Manager recruited and in place",
      "Funding concierge (if qualified)",
      "12-month ongoing support",
      "180-day launch timeline",
    ],
    graduation: null,
    link: "https://go.azgari.org/scale",
    featured: false,
    tag: "ENTERPRISE",
  },
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
    items: ["Coaching calls", "Community access", "Resource library", "Priority support"],
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
              PROGRAMS & PRICING
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Programs Designed for Your Journey
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you're testing an idea, launching your first business, or scaling to multiple locations — we have a path that fits your goals, budget, and timeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://go.azgari.org/landing-page-d" className="btn btn-primary">
                See If You Qualify →
              </Link>
              <Link href="#programs" className="btn btn-secondary">
                Compare Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Program Cards */}
        <section id="programs" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Choose Your Program
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every program includes hands-on guidance. Paid tuition funds free programs and scholarships for underserved founders.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => (
                <div 
                  key={program.name}
                  className="relative bg-white rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ 
                    border: program.featured ? '2px solid var(--color-accent)' : '2px solid #e5e7eb',
                    boxShadow: program.featured ? '0 8px 30px rgba(212, 160, 41, 0.2)' : undefined
                  }}
                >
                  {program.tag && (
                    <span 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                      style={{ 
                        backgroundColor: program.featured ? 'var(--color-accent)' : 'var(--color-primary)',
                        color: program.featured ? 'var(--color-primary-dark)' : 'white'
                      }}
                    >
                      {program.tag}
                    </span>
                  )}
                  
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {program.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">{program.delivery}</p>
                  
                  <div 
                    className="text-3xl font-bold my-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {program.price}
                    <small className="block text-sm font-normal text-gray-500 mt-1">
                      {program.note}
                    </small>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{program.description}</p>

                  {/* Who it's for */}
                  <p className="text-xs text-gray-500 mb-4 italic">{program.whoItsFor}</p>

                  <ul className="text-sm text-gray-600 mb-4 space-y-2 flex-grow">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: 'var(--color-accent)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee */}
                  <div className="rounded-lg p-3 mb-3 text-xs" style={{ backgroundColor: 'var(--color-cream)' }}>
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Guarantee:</span>{" "}
                    <span className="text-gray-600">{program.guarantee}</span>
                  </div>

                  {/* Graduation path */}
                  {program.graduation && (
                    <p className="text-xs text-gray-400 mb-4 italic">{program.graduation}</p>
                  )}

                  <Link
                    href={program.link}
                    className={`btn w-full mt-auto ${program.featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Win Entry Point */}
        <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>NOT READY TO COMMIT?</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
              Quick Win Bundle — $500
            </h3>
            <p className="text-gray-600 mb-2 max-w-xl mx-auto">
              Get a Business Model Report (48hrs), Competitor Analysis (72hrs), 90-Day Action Plan, and a 1-hour Strategy Call. See exactly how we work before going all-in.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Credits toward any full program if you upgrade within 30 days.
            </p>
            <Link href="https://go.azgari.org/quick-win" className="btn btn-secondary">
              Start with Quick Win →
            </Link>
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
                What's Included
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every program is built on proven systems that have launched hundreds of successful service businesses.
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
              Ready to Start Your Journey?
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8">
              Answer a few quick questions to see which program fits your goals — and whether you qualify for our scholarship fund.
            </p>
            
            <Link 
              href="https://go.azgari.org/landing-page-d" 
              className="btn btn-primary text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-5"
            >
              See If You Qualify →
            </Link>
            
            <p className="mt-6 text-white/70 text-sm">
              No commitment required. We'll recommend the best path for you.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
