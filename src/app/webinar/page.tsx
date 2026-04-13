import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionWrapper from "@/components/MissionWrapper";
import MissionBanner from "@/components/MissionBanner";
import { GHL_LINKS, NONPROFIT } from "@/lib/links";

const learningPoints = [
  "The 3 service business models with the highest margins and lowest startup costs",
  "How to validate demand before committing capital to equipment or inventory",
  "How SBA funding works and how to position yourself for approval",
  "Why most new business owners struggle — and the educational framework that helps prevent common mistakes",
  "What a guided, mentor-supported business launch curriculum actually covers, step by step",
  "The difference between owning a business and buying yourself a job",
];

export default function WebinarPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="strip" />
      <main>
        {/* Hero Section */}
        <section
          className="pt-24 pb-12 md:pt-32 md:pb-20"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Content */}
              <div className="text-center lg:text-left">
                <span
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                >
                  FREE COMMUNITY TRAINING
                </span>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                  style={{ color: 'var(--color-primary)' }}
                >
                  How to Launch a Local Service Business
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  A free educational training from Azgari Foundation — no cost, no pitch, no obligation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a 
                    href="#watch" 
                    className="btn btn-primary text-lg px-8 py-4"
                  >
                    Watch the Free Training →
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-600">
                  <span className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 47 Minutes
                  </span>
                  <span className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Educational Examples
                  </span>
                  <span className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 100% Free
                  </span>
                </div>
              </div>

              {/* Right - Video Preview */}
              <div className="relative flex justify-center lg:justify-end" id="watch">
                <div className="relative w-full max-w-xl">
                  {/* Decorative background */}
                  <div 
                    className="absolute -inset-4 rounded-3xl opacity-20"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  
                  {/* Video Embed Placeholder */}
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video flex items-center justify-center cursor-pointer group"
                  >
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div 
                      className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      <svg 
                        className="w-8 h-8 ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        style={{ color: 'var(--color-primary-dark)' }}
                      >
                        <path d="M6.3 5.84a.5.5 0 01.77-.42l7.15 4.16a.5.5 0 010 .84l-7.15 4.16a.5.5 0 01-.77-.42V5.84z" />
                      </svg>
                    </div>
                    
                    {/* Video Coming Soon Text */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-white/80 text-sm">Video training will be embedded here</span>
                    </div>
                  </div>
                  
                  {/* Floating stat card */}
                  <div
                    className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                  >
                    <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>20+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                WHAT YOU&apos;LL DISCOVER
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                What the Training Covers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In this free community training, Azgari walks through the educational framework the Foundation&apos;s curriculum covers for participants launching local service businesses.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {learningPoints.map((point, i) => (
                  <div 
                    key={i} 
                    className="flex gap-4 p-6 rounded-xl"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                  >
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Azgari Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  {/* Decorative background */}
                  <div 
                    className="absolute -inset-4 rounded-3xl opacity-20"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/founder/azgari-headshot.jpg"
                      alt="Azgari Lipshy - Founder of Azgari Foundation"
                      width={600}
                      height={600}
                      className="object-cover w-full"
                    />
                  </div>
                  
                  {/* Floating card */}
                  <div
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100"
                  >
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>100%</div>
                    <div className="text-sm text-gray-600">Client Ownership</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                >
                  YOUR HOST
                </span>
                
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Meet Azgari Lipshy
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  Azgari founded the Azgari Foundation to expand access to entrepreneurship education for working professionals pursuing local service business ownership — outside of franchise models and their ongoing royalty structures.
                </p>

                <p className="text-lg text-gray-600 mb-6">
                  After observing how many capable people struggled with business launches due to lack of structured guidance, she developed a 180-day educational framework that the Foundation now delivers as curriculum and mentorship.
                </p>

                <p className="text-lg text-gray-600 mb-8">
                  Today, the Foundation serves pre-retirees, veterans, single parents, and career-change professionals through its entrepreneurship education and scholarship programs.
                </p>
                <p className="text-sm text-gray-500 italic mb-8">
                  {NONPROFIT.resultsDisclaimer}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn btn-secondary">
                    Learn More About Azgari →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Stories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                PARTICIPANT STORIES
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Hear From Program Participants
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Program graduates sharing their experience on camera.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: 'var(--color-primary)' }}
              >
                Watch Video Testimonials
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-8 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <MissionWrapper variant="section" />
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Want to Learn More About Our Programs?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              After watching the training, you can apply for a strategy session to discuss whether the Foundation&apos;s curriculum and mentorship are a fit for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GHL_LINKS.forms.bookCall}
                className="btn text-lg px-8 py-4 bg-white hover:bg-gray-100 font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                Apply for a Strategy Session →
              </a>
            </div>
            <p className="mt-6 text-white/60 text-sm">
              Educational conversation only. No obligation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
