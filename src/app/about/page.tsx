import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const missionPoints = [
  "Help pre-retirees, veterans, and working professionals launch or acquire local service businesses",
  "Alternative to franchises — expert guidance without franchise fees or royalties",
  "Based in Austin, TX",
];

const whyWeExist = [
  { title: "Proven Wealth Builders", desc: "Service businesses generate predictable cash flow and build real equity" },
  { title: "Structure Over Effort", desc: "Most people fail because of lack of structure, not lack of effort" },
  { title: "Framework That Works", desc: "We provide the system that turns ambition into action" },
];

const ourApproach = [
  { icon: "📋", title: "SBA-Aligned Models", desc: "Business plans structured for lender approval" },
  { icon: "📅", title: "180-Day Framework", desc: "Clear milestones from day one to first revenue" },
  { icon: "✓", title: "Compliance-First", desc: "Entity, licensing, and legal handled properly" },
  { icon: "⚡", title: "No Hype", desc: "Just proven systems and realistic expectations" },
];

const transparencyPoints = [
  "We don't promise outcomes — success depends on you",
  "We provide education, tools, and guidance",
  "Results depend on individual execution, market conditions, and capital",
  "This is not a franchise — you own 100% of what you build",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section 
          className="pt-24 pb-12 md:pt-32 md:pb-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              ABOUT AZGARI FOUNDATION
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Helping Professionals Build Real Wealth<br />
              Through Business Ownership
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help everyday professionals escape the paycheck-to-paycheck cycle by 
              building local service businesses that create lasting wealth and independence.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We exist to make business ownership accessible to working professionals 
                  who have the drive but need the structure. No franchises. No royalties. 
                  Just a proven path to building something you own.
                </p>
                <ul className="space-y-4">
                  {missionPoints.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span 
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div 
                className="rounded-2xl p-6 sm:p-12 text-center"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <div 
                  className="text-6xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  180
                </div>
                <div className="text-lg text-gray-600 mb-6">Days to Launch</div>
                <div 
                  className="text-6xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  100%
                </div>
                <div className="text-lg text-gray-600">Your Ownership</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Why We Exist
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-16">
              Too many capable people fail at business — not because they lack ambition, 
              but because they lack the framework to turn that ambition into results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyWeExist.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--color-accent-light)' }}
                  >
                    <span 
                      className="text-xl font-bold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Our Approach
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                No hype. No get-rich-quick promises. Just a methodical approach 
                to building a real business.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourApproach.map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Our Commitment to Transparency
            </h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
              We believe in honest conversations about what business ownership takes. 
              Here's what you can expect from us.
            </p>
            
            <div className="max-w-3xl mx-auto">
              {transparencyPoints.map((point, i) => (
                <div 
                  key={i}
                  className="py-5 px-6 border-b border-white/20 flex gap-4 items-start"
                >
                  <span style={{ color: 'var(--color-accent)' }}>•</span>
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section 
          className="py-16 md:py-24 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our services and see how we can help you build a business 
              that creates real wealth — on your terms.
            </p>
            <Link href="/services" className="btn btn-primary">
              View Our Services →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
