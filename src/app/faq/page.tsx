import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/app/JsonLd";

export const metadata: Metadata = {
  title: "FAQ | Azgari Foundation",
  description: "Get answers to frequently asked questions about starting a service business with Azgari. Learn about our programs, pricing, and how we help you succeed.",
  openGraph: {
    title: "FAQ | Azgari Foundation",
    description: "Everything you need to know about starting your service business with Azgari.",
    type: "website",
    url: "https://azgari.org/faq",
  },
};

const faqCategories = [
  {
    title: "Before You Decide",
    items: [
      {
        question: "What if I fail?",
        answer:
          "Business outcomes depend on three things: our proven framework (we own this), your consistent execution (you own this), and market conditions (nobody controls this). We can\u2019t guarantee you won\u2019t face challenges \u2014 but we guarantee you won\u2019t face them alone. Every program includes a specific launch guarantee with continued support if we miss the timeline. During our programs, you get weekly check-ins, honest feedback, and support when things get tough.",
      },
      {
        question: "Can I do this while keeping my full-time job?",
        answer:
          "Yes \u2014 Foundation is specifically designed for people with 10\u201315 hours per week. Many clients start part-time, prove the model, then transition to full-time once revenue stabilizes. Launch Validation requires 40+ hours/week, so that\u2019s better suited if you\u2019re ready to go all-in from day one.",
      },
      {
        question: "I don\u2019t have business experience. Am I qualified?",
        answer:
          "Most of our successful clients didn\u2019t have experience in their specific business. We teach the business model, operations, and systems from the ground up. We\u2019ve helped corporate professionals, veterans, trades workers, recruiters, consultants, and career changers \u2014 all with different backgrounds. What matters is your consistency and willingness to follow the framework.",
      },
      {
        question: "How is Azgari different from buying a franchise?",
        answer:
          "Franchises give you a brand but take 3\u20138% in royalties forever and control how you run your business. With Azgari, you get expert-guided structure AND 100% ownership. No ongoing fees, no restrictions, no royalty payments. You keep every dollar you earn, and you can sell the business whenever you want \u2014 on your terms.",
      },
    ],
  },
  {
    title: "About Azgari",
    items: [
      {
        question: "What is Azgari Foundation?",
        answer:
          "We\u2019re a business consulting firm that helps professionals launch or acquire local service businesses. Founded by serial entrepreneur Azgari Lipshy, we\u2019re an alternative to franchises \u2014 you get expert guidance, proven frameworks, and hands-on support without franchise fees or royalties.",
      },
      {
        question: "Is Azgari a franchise?",
        answer:
          "No. You maintain 100% ownership and control of your business. We provide the framework, training, and guidance \u2014 not a franchise model. There are no royalties, no territory restrictions, and no ongoing fees after your program ends.",
      },
      {
        question: "Are you a lender?",
        answer:
          "No. We help you prepare for SBA financing through our funding concierge service (available in Scale tier), but all lending decisions are made by independent SBA lenders. We ensure your business plan, financials, and documentation are lender-ready.",
      },
    ],
  },
  {
    title: "Programs & Pricing",
    items: [
      {
        question: "Which program is right for me?",
        answer:
          "It depends on your time and capital. Launch Validation ($2,500) if you can commit 40+ hours/week and want to prove the concept fast. Foundation ($10K) if you have 10\u201315 hours/week and want to validate before going bigger. Full Launch ($25K) is our most popular \u2014 we build the business WITH you in 120 days with our strongest guarantee. Scale ($50K) if you already have revenue and want to step back from day-to-day operations. Not sure? Start with our Quick Win Bundle ($500) to see how we work, or book a free 20-minute call.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. Launch Validation offers 3 payments of $958. Foundation offers 3 payments of $3,500. Full Launch offers 3 payments of $8,500. Scale has SBA financing options available. Your investment in a lower tier also credits toward the next tier if you upgrade \u2014 so Foundation becomes your down payment on Full Launch.",
      },
      {
        question: "What\u2019s included in Full Launch?",
        answer:
          "120 days of done-with-you support: everything in Foundation plus a complete business buildout, marketing systems (website, funnels, lead gen), sales team hiring and training, client acquisition and referral systems, and a 120-day launch timeline. It comes with our strongest guarantee: launched in 120 days or continued support plus $3,000 cash.",
      },
      {
        question: "What guarantees do you offer?",
        answer:
          "Every program includes a specific launch guarantee. Launch Validation: launched in 60 days or continued support. Foundation: launched in 90 days or continued support. Full Launch: launched in 120 days or continued support plus $3,000 cash if we miss. Scale: business operational with manager in seat within 180 days or continued support. Your results still depend on your execution and market \u2014 we\u2019re transparent about that.",
      },
    ],
  },
  {
    title: "Business Types We Work With",
    items: [
      {
        question: "What types of businesses do you help launch?",
        answer:
          "We work across a wide range of service businesses. Physical services: pressure washing, HVAC, pest control, lawn care, cleaning (residential and commercial), handyman services, flood and water remediation, junk removal, moving, pool service, roofing, and painting. Professional services: fractional C-suite consulting, recruiting and staffing agencies, bookkeeping, IT services, and business consulting. We help you match the right business model to your skills, capital, and market \u2014 from our library of 50+ proven models.",
      },
      {
        question: "Can I start a professional services business, not just trades?",
        answer:
          "Absolutely. We\u2019ve helped clients launch recruiting firms, fractional CFO and COO practices, HR consulting businesses, and other professional service companies. The same framework applies: validate the model, build systems, acquire clients, and scale. The difference is startup costs are often lower and margins can be higher with professional services.",
      },
      {
        question: "Do I need experience in the industry I choose?",
        answer:
          "No. We teach you the business model from the ground up. Many successful clients came from completely different backgrounds \u2014 corporate professionals launching cleaning companies, veterans starting pest control businesses, recruiters pivoting to fractional C-suite consulting. What matters is your consistency and willingness to follow the framework.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "It depends on the business model. Some professional services (recruiting, consulting) can start under $5K. Trades like pressure washing or lawn care typically need $5K\u2013$15K. HVAC, flood remediation, or multi-truck operations may need $25K\u2013$50K+. We help you match your available capital to the right model during our discovery process.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        question: "Do you guarantee results?",
        answer:
          "Every program includes a launch guarantee with specific timelines and continued support if we miss. Full Launch has our strongest: launched in 120 days or continued support plus $3,000 cash. Your business results still depend on your execution, market conditions, and capital \u2014 we\u2019re transparent about that. What we can tell you: 160+ businesses launched, 94% client satisfaction, and $285K average first-year revenue for clients who follow the framework.",
      },
      {
        question: "How long until I see revenue?",
        answer:
          "Our clients average 47 days to first revenue. Each program has a specific launch guarantee: Launch Validation in 60 days, Foundation in 90 days, Full Launch in 120 days. Full profitability typically comes within 6\u201312 months, depending on business model, capital invested, and your execution.",
      },
      {
        question: "What happens after my program ends?",
        answer:
          "You own 100% of your business and all the systems we built together. Many clients continue growing independently using the frameworks. If you want ongoing support, you can join our Slack community ($67/month) for daily help and weekly live calls. Clients who hit revenue milestones also have the option to upgrade to the next tier with their investment credited toward the higher program.",
      },
    ],
  },
];

const faqJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JsonLd data={faqJsonLd} />

      {/* Hero Section */}
      <section
        className="pt-24 md:pt-32 pb-16 px-6"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about starting your service business with
            Azgari.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "white" }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--color-primary)" }}
                >
                  {category.title}
                </h2>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
            Still have questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s talk. We&apos;re here to help you make the right decision for your future.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary inline-block"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
