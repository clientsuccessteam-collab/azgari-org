import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS, COURSES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Courses | Azgari Foundation",
  description: "Self-paced digital courses to help you buy, launch, or fund your service business. Learn from founders who've done it.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section 
          className="pt-32 pb-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              SELF-PACED DIGITAL COURSES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Build Your Business the Smart Way
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              The exact frameworks designed to get you fundable, confident, and ready. Pick the course that solves your problem today.
            </p>
            <p className="text-lg font-semibold" style={{ color: 'var(--color-accent)' }}>
              Full Refund Guarantee — No Questions Asked
            </p>
          </div>
        </section>

        {/* Quick Recommendation */}
        <section className="py-8 border-b" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6 text-white text-center">
            <h2 className="text-lg font-semibold mb-4">Which Course Should You Pick?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <span className="font-semibold">Not fundable?</span> → SBA Masterclass
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <span className="font-semibold">Researching franchises?</span> → Franchise Blueprint
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <span className="font-semibold">Buying a business?</span> → Acquisition Accelerator
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <span className="font-semibold">Ready to launch?</span> → 30-Day Launch
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <span className="font-semibold">Need support?</span> → Slack + Weekly Calls
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <Link href={GHL_LINKS.allCourses} className="underline hover:text-amber-400">
                  View All Courses →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Grid - Uses COURSES from config */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {COURSES.map((course) => (
                <div 
                  key={course.id}
                  className="relative bg-white rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
                  style={{ 
                    border: course.featured ? '2px solid var(--color-accent)' : '2px solid #e5e7eb',
                    boxShadow: course.featured ? '0 8px 30px rgba(212, 160, 41, 0.2)' : undefined
                  }}
                >
                  {course.featured && (
                    <span 
                      className="absolute -top-3 left-6 text-xs font-bold px-4 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                    >
                      ⭐ POPULAR
                    </span>
                  )}
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold pr-4" style={{ color: 'var(--color-primary)' }}>
                      {course.title}
                    </h3>
                    <span 
                      className="text-2xl font-bold whitespace-nowrap"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {course.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">
                    &quot;{course.tagline}&quot;
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span style={{ color: 'var(--color-accent)' }}>✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div 
                    className="text-sm p-3 rounded-lg mb-6"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <span className="font-semibold">Perfect for: </span>
                    {course.perfectFor}
                  </div>
                  
                  <Link 
                    href={course.href}
                    className="btn btn-primary w-full text-center"
                  >
                    Enroll Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              FULL REFUND GUARANTEE
            </h2>
            <p className="text-lg opacity-90 mb-4">
              If you follow the courses and learn absolutely nothing new that moves you forward in your entrepreneurial journey... No Questions Asked Money Back Guarantee.
            </p>
            <p className="opacity-80">
              You have no excuse to not take a bet on yourself and build that business and move forward towards the life and freedom you deserve.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Book a free call with our team. We&apos;ll help you find the best path based on your goals, experience, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GHL_LINKS.forms.bookCall} className="btn btn-primary">
                Book a Free Call
              </Link>
              <Link href={GHL_LINKS.allCourses} className="btn btn-secondary">
                View All Courses on GHL
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
