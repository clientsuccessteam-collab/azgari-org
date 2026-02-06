import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Scholarships & Free Programs | Azgari Foundation",
  description: "Business training scholarships for foster youth, veterans, single parents, and first-generation entrepreneurs. Full Foundation program access at no cost.",
  openGraph: {
    title: "Free Business Training for Those Who Need It Most | Azgari",
    description: "10% of paid enrollments fund scholarships for underserved founders. Apply today.",
    type: "website",
    url: "https://azgari.org/scholarships",
  },
};

const qualifications = [
  {
    icon: "🎓",
    title: "Aging-Out Foster Youth",
    desc: "Ages 18-24 transitioning out of the foster care system",
  },
  {
    icon: "🎖️",
    title: "Veterans",
    desc: "Military service members transitioning to civilian careers",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Single Parents",
    desc: "Re-entering the workforce and seeking financial independence",
  },
  {
    icon: "🌱",
    title: "First-Generation Entrepreneurs",
    desc: "From underserved communities with no family business background",
  },
];

const benefits = [
  {
    title: "Full Foundation Program Access",
    desc: "$10,000 value — complete curriculum with nothing held back",
    value: "$10,000",
  },
  {
    title: "Business Model Selection",
    desc: "Guided help choosing the right service business for your situation",
    value: "Included",
  },
  {
    title: "Compliance & Licensing Support",
    desc: "Entity formation, permits, and legal requirements handled",
    value: "Included",
  },
  {
    title: "90 Days of Structured Mentorship",
    desc: "Weekly check-ins with experienced business operators",
    value: "Included",
  },
];

const applicationSteps = [
  { step: 1, title: "Complete Application", desc: "Fill out our simple online form (10 minutes)" },
  { step: 2, title: "Brief Interview", desc: "15-minute video call to discuss your goals" },
  { step: 3, title: "Provide Documentation", desc: "Verify eligibility with simple paperwork" },
  { step: 4, title: "Get Your Decision", desc: "Hear back within 2 weeks" },
];

const commitments = [
  { stat: "10%", label: "of paid enrollments fund scholarships" },
  { stat: "100%", label: "same quality training as paid programs" },
  { stat: "$0", label: "cost to you — no strings attached" },
];

export default function ScholarshipsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="pt-32 pb-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              SCHOLARSHIPS & FREE PROGRAMS
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Business Training for Those<br className="hidden md:block" /> Who Need It Most
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Paid tuition funds free programs and scholarships for underserved founders. 
              If you qualify, you get the same world-class training — at no cost.
            </p>
            
            <Link href="#apply" className="btn btn-primary">
              Apply for Scholarship →
            </Link>
          </div>
        </section>

        {/* Who Qualifies Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Who Qualifies?
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Our scholarships are reserved for founders facing real barriers to business ownership.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualifications.map((qual) => (
                <div 
                  key={qual.title}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-amber-200 transition-colors"
                >
                  <span className="text-4xl mb-4 block">{qual.icon}</span>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {qual.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{qual.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Covered Section */}
        <section className="py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                What&apos;s Covered
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Scholarship recipients get full access to our Foundation program — the same training 
                that paid participants receive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="bg-white p-6 rounded-xl shadow-sm flex gap-4"
                >
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {benefit.value}
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                How to Apply
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Our application process is simple and respectful of your time.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {applicationSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <span 
                    className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full font-bold text-xl mb-4"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    {item.step}
                  </span>
                  <h3 
                    className="font-semibold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section 
          className="py-24"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to You
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-12">
              This isn&apos;t charity. It&apos;s an investment in founders who deserve a real shot.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              {commitments.map((item) => (
                <div key={item.label}>
                  <div 
                    className="text-5xl font-bold mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {item.stat}
                  </div>
                  <p className="text-white/80 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg mb-2">
                &quot;Every paid enrollment helps fund a scholarship.&quot;
              </p>
              <p className="text-white/70 text-sm">
                When you invest in Azgari, you&apos;re also investing in someone else&apos;s future.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Ready to Apply?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Take the first step toward building your own business — 
              with expert guidance and zero financial barrier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="mailto:scholarships@azgari.org?subject=Scholarship Application Inquiry"
                className="btn btn-primary"
              >
                Apply for Scholarship →
              </Link>
              <ShareButton
                title="Azgari Scholarships"
                text="Free business training for foster youth, veterans, single parents, and first-gen entrepreneurs."
                url="https://azgari.org/scholarships"
                className="btn btn-secondary"
              >
                Share This Page
              </ShareButton>
            </div>
            
            <p className="text-gray-500 text-sm">
              Know someone who qualifies? Share this page — it could change their life.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
