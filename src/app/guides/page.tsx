import { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";

export const metadata: Metadata = {
  title: "Free Educational Guides & Community Resources | Azgari Foundation",
  description: "Free educational guides, templates, and community education materials from Azgari Foundation, a 501(c)(3) nonprofit supporting aspiring entrepreneurs.",
  keywords: "free educational guides, community education, service business templates, SBA loan guide, business launch checklist",
  openGraph: {
    title: "Free Educational Resources from the Foundation",
    description: "Educational guides, templates, and community education materials from Azgari Foundation.",
    url: "https://azgari.org/guides",
    type: "website",
  },
};

const howToStartGuides = [
  {
    title: "How to Start a Pressure Washing Business",
    slug: "pressure-washing-equipment-guide-2026",
    icon: "🚿",
    description: "Low startup costs, high demand, and scalable — learn how to launch a profitable pressure washing company.",
  },
  {
    title: "How to Start a Pest Control Business",
    slug: "pest-control-equipment-guide",
    icon: "🐛",
    description: "Recurring revenue from residential and commercial contracts. Licensing, equipment, and route-building strategies.",
  },
  {
    title: "How to Start an HVAC Business",
    slug: "hvac-tools-equipment-guide-2026-technician-startup-kit",
    icon: "❄️",
    description: "Recession-proof and essential — discover how to build a six-figure HVAC service company.",
  },
  {
    title: "How to Start a Handyman Business",
    slug: "handyman-business-license",
    icon: "🔧",
    description: "Low overhead, high demand. How to price jobs, get licensed, and build a referral engine that fills your calendar.",
  },
  {
    title: "How to Start a House Cleaning Business",
    slug: "how-to-start-a-house-cleaning-business",
    icon: "🧹",
    description: "One of the easiest businesses to start. Learn commercial vs residential and how to scale fast.",
  },
  {
    title: "How to Start a Plumbing Business",
    slug: "how-to-start-a-plumbing-business",
    icon: "🔧",
    description: "Essential service with strong recurring revenue. Licensing, equipment, and customer acquisition strategies.",
  },
  {
    title: "How to Start a Roofing Business",
    slug: "how-to-start-a-roofing-business",
    icon: "🏠",
    description: "High-ticket jobs with strong margins. How to get licensed, find leads, and scale with crews.",
  },
  {
    title: "How to Start a Landscaping Business",
    slug: "how-to-start-a-landscaping-business",
    icon: "🌳",
    description: "Design and maintain outdoor spaces. Equipment, pricing, and how to build recurring maintenance contracts.",
  },
  {
    title: "How to Start a Lawn Care Business",
    slug: "how-much-does-it-cost-to-start-a-lawn-care-business",
    icon: "🌱",
    description: "Seasonal or year-round revenue. Real startup costs, equipment, and recurring service models.",
  },
  {
    title: "How to Start a Recruiting Agency",
    slug: "how-to-start-a-recruiting-agency-in-2026-complete-guide",
    icon: "🤝",
    description: "High margins, low startup costs. Build a staffing or executive recruiting firm using proven placement frameworks.",
  },
  {
    title: "How to Start a Fractional C-Suite Practice",
    slug: "how-to-start-a-fractional-c-suite-practice-in-2026-complete-guide",
    icon: "👔",
    description: "Turn your corporate experience into a six-figure consulting business. Serve multiple companies as a fractional CFO, COO, or CMO.",
  },
  {
    title: "How to Start a Flood Remediation Business",
    slug: "how-to-start-a-flood-remediation-business-in-2026-complete-guide",
    icon: "💧",
    description: "Insurance-paid, high-ticket jobs. Certifications, equipment, and how to build relationships with adjusters and contractors.",
  },
];

const featuredStates = [
  { name: "Texas", abbr: "TX", slug: "texas" },
  { name: "Florida", abbr: "FL", slug: "florida" },
  { name: "California", abbr: "CA", slug: "california" },
  { name: "New York", abbr: "NY", slug: "new-york" },
  { name: "Georgia", abbr: "GA", slug: "georgia" },
  { name: "North Carolina", abbr: "NC", slug: "north-carolina" },
  { name: "Arizona", abbr: "AZ", slug: "arizona" },
  { name: "Ohio", abbr: "OH", slug: "ohio" },
];

const freeDownloads = [
  {
    title: "47-Step Service Business Launch Checklist",
    type: "Instant Download",
    description: "The exact checklist our team uses when building businesses for clients. Entity formation, licensing, insurance, banking, marketing setup, and first-customer acquisition — nothing left to guesswork.",
    icon: "📋",
    cta: "Get the Checklist →",
    link: "https://go.azgari.org/product-details/product/699b4bc7ea607e2e0d1a7f29",
  },
  {
    title: "Which Business Is Right for Me?",
    type: "2-Minute Quiz",
    description: "Answer 12 questions about your skills, capital, and lifestyle goals — get a personalized business model recommendation from our library of 50+ proven models.",
    icon: "🎯",
    cta: "Take the Quiz →",
    link: "https://go.azgari.org/product-details/product/699b4bd9c0607441c091969e",
  },
  {
    title: "SBA Loan Readiness Guide",
    type: "Instant Download",
    description: "The step-by-step guide to getting SBA-approved without a broker. Credit requirements, exact documents needed, underwriter psychology, and how to package your application for approval.",
    icon: "🏦",
    cta: "Get the SBA Guide →",
    link: "https://go.azgari.org/product-details/product/699b4bf1aec1c12d84307715",
  },
];

const blogHighlights = [
  {
    title: "The Ultimate Guide to Service Business Startup Costs",
    excerpt: "Real numbers from 50+ launches. What you actually need to budget for equipment, licenses, insurance, and marketing.",
    category: "Startup Costs",
  },
  {
    title: "How to Get Your First 10 Customers (Without Paid Ads)",
    excerpt: "Proven organic strategies that cost $0 and work in any market. Perfect for bootstrapped founders.",
    category: "Marketing",
  },
  {
    title: "Franchise vs Independent: The Real Cost Comparison",
    excerpt: "We crunched the numbers. See when buying a franchise makes sense — and when going independent wins.",
    category: "Strategy",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="full" />
      <main>
        {/* Hero Section */}
        <section
          className="pt-12 md:pt-16 pb-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              FREE EDUCATIONAL RESOURCES
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Free Educational Guides &amp; Community Resources
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Free educational guides, quizzes, and community education materials developed by the Foundation to support aspiring entrepreneurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#guides" className="btn btn-primary">
                Browse Educational Guides
              </Link>
              <Link href="#downloads" className="btn btn-secondary">
                Free Educational Downloads
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section id="guides" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                How to Start Educational Guides
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Step-by-step educational guides covering the most common service business models. Published as community education by the Foundation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {howToStartGuides.map((guide) => (
                <a
                  key={guide.slug}
                  href={`https://azgari.blog/${guide.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
                  style={{ border: '2px solid #e5e7eb' }}
                >
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{guide.description}</p>
                  <span 
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-auto"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Read Guide →
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a 
                href="https://azgari.blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                View All Business Guides 
                <span style={{ color: 'var(--color-accent)' }}>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* State Business Guides */}
        <section 
          className="py-16 md:py-24"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Find the Best Businesses for Your State
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Every state has different opportunities. Discover which businesses thrive where you live.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredStates.map((state) => (
                <Link
                  key={state.slug}
                  href={`/state/${state.slug}`}
                  className="group bg-white rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span 
                    className="text-3xl font-bold block mb-2 group-hover:text-amber-600 transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {state.abbr}
                  </span>
                  <span className="text-gray-600 text-sm">{state.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link 
                href="/state"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                View All 50 States 
                <span style={{ color: 'var(--color-accent)' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Free Downloads Section */}
        <section id="downloads" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                EMAIL REQUIRED
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Free Educational Downloads &amp; Tools
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Community education resources to support your learning journey. Enter your email for instant access.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeDownloads.map((download) => (
                <div
                  key={download.title}
                  className="bg-white rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
                  style={{ border: '2px solid #e5e7eb' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{download.icon}</div>
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
                    >
                      {download.type}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {download.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{download.description}</p>
                  
                  <a 
                    href={download.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full mt-auto"
                  >
                    {download.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section 
          className="py-16 md:py-24"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Latest from the Blog
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                365+ articles on starting and growing service businesses
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogHighlights.map((post, idx) => (
                <a
                  key={idx}
                  href="https://azgari.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all hover:bg-white/20 flex flex-col h-full"
                >
                  <span 
                    className="text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block self-start"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h3>
                  <p className="text-white/80 text-sm flex-grow">{post.excerpt}</p>
                  <span className="text-white/60 text-sm mt-4 inline-flex items-center gap-1">
                    Read Article <span style={{ color: 'var(--color-accent)' }}>→</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://azgari.blog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
              >
                Browse All Articles 
                <span style={{ color: 'var(--color-accent)' }}>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section 
          className="py-16 md:py-24"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Need More Support Than Free Resources Provide?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              The Foundation offers full scholarship access to its mentor-supported entrepreneurship
              education for founders from underserved communities — at no cost to the recipient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scholarships" className="btn btn-primary">
                Apply for a Scholarship →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact the Foundation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
