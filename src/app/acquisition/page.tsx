import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whyBuyReasons = [
  {
    icon: "💰",
    title: "Immediate Revenue",
    desc: "Cash flow from day one — no 12-18 month ramp-up period"
  },
  {
    icon: "👥",
    title: "Proven Customer Base",
    desc: "Established relationships and recurring revenue streams"
  },
  {
    icon: "⚙️",
    title: "Existing Systems",
    desc: "Employees, processes, and operations already in place"
  },
  {
    icon: "🏦",
    title: "Easier SBA Financing",
    desc: "Historical financials make loan approval more predictable"
  },
  {
    icon: "📉",
    title: "Lower Risk",
    desc: "Proven business model vs. startup uncertainty"
  },
];

const processSteps = [
  {
    number: 1,
    title: "Define Your Criteria",
    desc: "We work together to identify your ideal industry, location, budget, and lifestyle goals."
  },
  {
    number: 2,
    title: "Source & Screen",
    desc: "We identify opportunities from brokers, off-market deals, and our network — filtering for quality."
  },
  {
    number: 3,
    title: "Due Diligence Support",
    desc: "Financial analysis, operational review, and risk assessment to make an informed decision."
  },
  {
    number: 4,
    title: "SBA Loan Guidance",
    desc: "Navigate the SBA 7(a) process with lender introductions and application support."
  },
  {
    number: 5,
    title: "Transition & Handoff",
    desc: "Smooth ownership transfer with seller training and 90-day post-close support."
  },
];

const idealCandidates = [
  { icon: "💵", text: "$50K+ available for down payment" },
  { icon: "📊", text: "Good credit score (680+)" },
  { icon: "👔", text: "Management or industry experience preferred" },
  { icon: "🎯", text: "Ready to be an owner-operator" },
];

export default function AcquisitionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="pt-32 pb-24 text-center" 
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              ACQUISITION ADVISORY
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" 
              style={{ color: 'var(--color-primary)' }}
            >
              Skip the Startup Risk.<br />Buy a Profitable Business.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We help you find, evaluate, and acquire local service businesses using SBA financing — with cash flow from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="https://go.azgari.org/landing-page-d" className="btn btn-primary">
                Schedule a Discovery Call →
              </Link>
              <Link href="#process" className="btn btn-secondary">
                See How It Works
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> SBA Financing Ready
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Full Due Diligence
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Post-Close Support
              </span>
            </div>
          </div>
        </section>

        {/* Why Buy vs Start Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-primary)' }}
            >
              Why Buy Instead of Start?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-16">
              Starting from scratch means 12-18 months before profitability. Buying an existing business means income from day one.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyBuyReasons.map((reason) => (
                <div 
                  key={reason.title} 
                  className="p-6 rounded-2xl transition-all hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <span className="text-4xl mb-4 block">{reason.icon}</span>
                  <h4 
                    className="text-lg font-semibold mb-2" 
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section 
          id="process" 
          className="py-24"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-primary)' }}
            >
              Our 5-Step Acquisition Process
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-16">
              From criteria to closing — we guide you through every stage.
            </p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="text-left bg-white p-6 rounded-2xl shadow-sm">
                  <span 
                    className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full font-bold mb-4"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {step.number}
                  </span>
                  <h4 
                    className="text-lg font-semibold mb-2" 
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4" 
                  style={{ color: 'var(--color-primary)' }}
                >
                  Simple, Transparent Pricing
                </h2>
                <p className="text-gray-600 mb-8">
                  We align our success with yours. Our fee structure is designed to make acquisition advisory accessible while ensuring we&apos;re invested in your outcome.
                </p>
                
                <div className="space-y-6">
                  <div 
                    className="p-6 rounded-2xl border-2"
                    style={{ borderColor: 'var(--color-accent)' }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 
                        className="text-xl font-bold" 
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Advisory Retainer
                      </h3>
                      <span 
                        className="text-2xl font-bold" 
                        style={{ color: 'var(--color-accent)' }}
                      >
                        $2,500
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Covers criteria development, opportunity sourcing, and initial screening. Applied toward success fee if you close.
                    </p>
                  </div>
                  
                  <div 
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 
                        className="text-xl font-bold" 
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Success Fee
                      </h3>
                      <span 
                        className="text-lg font-semibold text-gray-600"
                      >
                        On closed deals
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Percentage of transaction value, structured based on deal size. We only succeed when you succeed.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mt-6 italic">
                  Every situation is unique. Schedule a call to discuss your specific goals and budget.
                </p>
              </div>
              
              {/* Ideal Candidates Card */}
              <div 
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ideal Candidates
                </h3>
                <p className="text-white/80 mb-8">
                  Our acquisition advisory works best for individuals who meet these criteria:
                </p>
                
                <div className="space-y-4">
                  {idealCandidates.map((candidate) => (
                    <div 
                      key={candidate.text}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <span className="text-2xl">{candidate.icon}</span>
                      <span className="text-white font-medium">{candidate.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm">
                    Not sure if you qualify? Let&apos;s talk. Many successful acquisitions start with a conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          className="py-24 text-white text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Own a Profitable Business?
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto mb-8">
              Stop building from scratch. Acquire an established business with proven cash flow, existing customers, and SBA financing available.
            </p>
            
            <Link 
              href="https://go.azgari.org/landing-page-d" 
              className="btn btn-primary text-lg px-10 py-5"
            >
              Schedule a Discovery Call →
            </Link>
            
            <p className="text-white/60 text-sm mt-6">
              Free 30-minute call • No obligation • See if acquisition is right for you
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
