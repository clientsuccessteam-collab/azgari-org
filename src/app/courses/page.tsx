import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Courses | Azgari Foundation",
  description: "Self-paced courses to help you start, grow, and scale your service business. Learn from founders who've done it.",
};

const courses = [
  {
    title: "Service Business Fundamentals",
    description: "The foundation every service business owner needs. Covers business model selection, pricing strategy, and operations basics.",
    duration: "4 weeks",
    level: "Beginner",
    price: "Free",
    href: GHL_LINKS.leadMagnets.checklist,
    featured: false,
  },
  {
    title: "Launch Your Service Business",
    description: "Step-by-step roadmap from idea to first customer. Includes compliance, branding, and go-to-market strategy.",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    price: "$497",
    href: GHL_LINKS.programs.foundation,
    featured: true,
  },
  {
    title: "Customer Acquisition Mastery",
    description: "Proven strategies to find, attract, and convert customers for your service business. Local marketing that works.",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$297",
    href: GHL_LINKS.products.tools,
    featured: false,
  },
  {
    title: "Scale & Systemize",
    description: "Turn your service business into a scalable operation. Hiring, SOPs, and building a business that runs without you.",
    duration: "10 weeks",
    level: "Advanced",
    price: "$697",
    href: GHL_LINKS.programs.scale,
    featured: false,
  },
];

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
              SELF-PACED LEARNING
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Learn at Your Own Pace
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Practical courses designed by founders who&apos;ve built successful service businesses. No fluff, just actionable strategies.
            </p>
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div 
                  key={course.title}
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
                      ⭐ MOST POPULAR
                    </span>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      {course.title}
                    </h3>
                    <span 
                      className="text-lg font-bold whitespace-nowrap ml-4"
                      style={{ color: course.price === "Free" ? 'var(--color-primary)' : 'var(--color-accent)' }}
                    >
                      {course.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="flex gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      ⏱️ {course.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      📊 {course.level}
                    </span>
                  </div>
                  
                  <Link 
                    href={course.href}
                    className={`btn w-full ${course.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {course.price === "Free" ? "Start Free Course" : "Enroll Now"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
              What&apos;s Included in Every Course
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎥", title: "Video Lessons", desc: "On-demand video content" },
                { icon: "📝", title: "Worksheets", desc: "Actionable templates" },
                { icon: "💬", title: "Community", desc: "Connect with peers" },
                { icon: "📱", title: "Mobile Access", desc: "Learn anywhere" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Not Sure Which Course Is Right for You?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Book a free call with our team. We&apos;ll help you find the best path based on your goals, experience, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GHL_LINKS.forms.bookCall} className="btn btn-primary">
                Book a Free Call
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Full Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
