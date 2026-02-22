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
          "Business outcomes depend on three things: our proven framework (we own this), market conditions (nobody controls this), and your involvement as an owner (you own this). We can\u2019t guarantee you won\u2019t face challenges \u2014 but you won\u2019t face them alone. Our done-for-you build includes a launch guarantee with continued support if we miss the timeline, plus 12 months of ongoing support after launch.",
      },
      {
        question: "Can I do this while keeping my full-time job?",
        answer:
          "Yes \u2014 that\u2019s the whole point. We build the business for you, including hiring and training your team and placing a manager. Your time commitment is roughly 1 hour per week for oversight. Most of our clients keep their full-time jobs while we build, then decide later whether to transition.",
      },
      {
        question: "I don\u2019t have business experience. Am I qualified?",
        answer:
          "You don\u2019t need experience in the specific business we build for you. Our team handles business model selection, entity formation, branding, marketing systems, hiring, and operations. We\u2019ve built businesses for corporate professionals, veterans, trades workers, and career changers \u2014 all with different backgrounds.",
      },
      {
        question: "How is Azgari different from buying a franchise?",
        answer:
          "Franchises give you a brand but take 3\u20138% in royalties forever and control how you run your business. With Azgari, we build your business from scratch and you own 100% \u2014 the brand, the systems, the customers, everything. No ongoing fees, no restrictions, no royalty payments. You keep every dollar you earn, and you can sell the business whenever you want \u2014 on your terms.",
      },
    ],
  },
  {
    title: "About Azgari",
    items: [
      {
        question: "What is Azgari Foundation?",
        answer:
          "We\u2019re a done-for-you business building firm. We help professionals launch local service businesses by building the entire operation for them \u2014 entity, brand, marketing, team, customers, and operations. Founded by serial entrepreneur Azgari Lipshy, we\u2019re an alternative to franchises: you get a fully built business without franchise fees or royalties.",
      },
      {
        question: "Is Azgari a franchise?",
        answer:
          "No. You maintain 100% ownership and control of your business. We build it for you, but you own everything \u2014 the brand, the entity, the customer relationships, and all systems. There are no royalties, no territory restrictions, and no ongoing fees.",
      },
      {
        question: "Are you a lender?",
        answer:
          "No. We help you prepare for SBA financing through our funding concierge service included in the program. All lending decisions are made by independent SBA lenders. We ensure your business plan, financials, and documentation are lender-ready.",
      },
    ],
  },
  {
    title: "Investment & What\u2019s Included",
    items: [
      {
        question: "What does the $50,000 investment cover?",
        answer:
          "Everything needed to build a fully operational service business you own 100%. That includes: data-driven business model selection from 50+ proven models, complete entity formation and compliance, full brand buildout (name, logo, website, marketing systems), customer acquisition so you have paying clients before launch, a full operational team hired and trained, a manager placed to run day-to-day operations, SBA funding concierge if needed, and 12 months of ongoing support.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. Payment plans and SBA funding paths are available. We\u2019ll discuss the options that work best for your situation during the strategy call.",
      },
      {
        question: "What\u2019s the guarantee?",
        answer:
          "Your business will be operational with a manager in place within 180 days, or we continue building at no additional cost until it is. Your business results still depend on market conditions, the business model selected, and your involvement as an owner \u2014 we\u2019re transparent about that.",
      },
    ],
  },
  {
    title: "Business Types We Work With",
    items: [
      {
        question: "What types of businesses do you build?",
        answer:
          "We build a wide range of service businesses. Physical services: pressure washing, HVAC, pest control, lawn care, cleaning (residential and commercial), handyman services, flood and water remediation, junk removal, moving, pool service, roofing, and painting. Professional services: fractional C-suite consulting, recruiting and staffing agencies, bookkeeping, IT services, and business consulting. We match the right business model to your skills, capital, and market \u2014 from our library of 50+ proven models.",
      },
      {
        question: "Can I start a professional services business, not just trades?",
        answer:
          "Absolutely. We\u2019ve built recruiting firms, fractional CFO and COO practices, HR consulting businesses, and other professional service companies for clients. The same done-for-you framework applies: we select the model, build the systems, acquire the clients, and put the team in place. The difference is startup costs are often lower and margins can be higher with professional services.",
      },
      {
        question: "Do I need experience in the industry I choose?",
        answer:
          "No. We build the entire business for you, including training your team on the business model and operations. Many of our clients come from completely different backgrounds \u2014 corporate professionals, veterans, and career changers. Your role is ownership oversight, not day-to-day operations.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "The done-for-you business build is $50,000, with payment plans and SBA funding paths available. Some business models also require working capital beyond the build fee, depending on the type of business (equipment, vehicles, etc.). We\u2019ll help you match your available capital to the right model during our discovery process.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        question: "Do you guarantee results?",
        answer:
          "We guarantee your business will be operational with a manager in place within 180 days, or we continue building at no additional cost. Your actual business results \u2014 revenue, profit, growth \u2014 depend on the business model, market conditions, and your involvement as an owner. We do not guarantee any specific level of income or business success.",
      },
      {
        question: "How long until the business is running?",
        answer:
          "Our target is 180 days from kickoff to having an operational business with a manager in seat and customers paying. The exact timeline depends on the business model, licensing requirements, hiring market, and other factors specific to your build.",
      },
      {
        question: "What happens after the build is complete?",
        answer:
          "You own 100% of your business and all the systems we built. The program includes 12 months of ongoing support after launch. Your manager handles day-to-day operations while you provide oversight \u2014 roughly 1 hour per week. Many clients use the framework to build additional businesses.",
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
