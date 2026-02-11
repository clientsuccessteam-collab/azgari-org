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
          "Business outcomes depend on three things: our proven framework (we own this), your consistent execution (you own this), and market conditions (nobody controls this). We can\u2019t guarantee you won\u2019t face challenges \u2014 but we guarantee you won\u2019t face them alone. During our programs, you get weekly check-ins, honest feedback, and support when things get tough.",
      },
      {
        question: "Can I do this while keeping my full-time job?",
        answer:
          "Yes \u2014 especially in the first 90 days. You\u2019ll need 2-3 hours per week for coaching calls and action items. As you approach launch (months 4-6), you may need to reduce hours or dedicate more time. Many successful clients launched while working full-time, then transitioned once revenue stabilized.",
      },
      {
        question: "I don\u2019t have business experience. Am I qualified?",
        answer:
          "Most of our successful clients didn\u2019t have experience in their specific business. We teach the business model, operations, and systems. What matters is your consistency and willingness to follow the framework. We\u2019ve helped corporate professionals, veterans, trades workers, and career changers \u2014 all with different backgrounds.",
      },
      {
        question: "How is Azgari different from buying a franchise?",
        answer:
          "Franchises give you structure but take your profits (3-8% royalties) and control. With Azgari, you get expert-guided structure AND 100% ownership. No ongoing fees, no restrictions on how you run your business, and you keep every dollar you earn.",
      },
    ],
  },
  {
    title: "About Azgari",
    items: [
      {
        question: "What is Azgari Foundation?",
        answer:
          "We're a business consulting firm that helps professionals launch or acquire local service businesses. We're an alternative to franchises — you get expert guidance without franchise fees or royalties.",
      },
      {
        question: "Is Azgari a franchise?",
        answer:
          "No. You maintain 100% ownership and control of your business. We provide training and guidance, not a franchise model.",
      },
      {
        question: "Are you a lender?",
        answer:
          "No. We help you prepare for SBA financing, but all lending decisions are made by independent SBA lenders.",
      },
    ],
  },
  {
    title: "Programs & Pricing",
    items: [
      {
        question: "Which program is right for me?",
        answer:
          "Quick Win ($500) if you want to test us. Foundation ($10K) if validating an idea. Full Launch ($25K) if you want hands-on support. Scale ($50K) if you have a business ready to systematize.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, most programs offer 3-6 month payment plans.",
      },
      {
        question: "What's included in Full Launch?",
        answer:
          "180 days of support including business model selection, compliance setup, brand development, go-to-market strategy, and ongoing mentorship.",
      },
    ],
  },
  {
    title: "Business Questions",
    items: [
      {
        question: "What types of businesses do you help with?",
        answer:
          "Local service businesses: pressure washing, HVAC, cleaning, lawn care, moving, pest control, pool service, junk removal, and more.",
      },
      {
        question: "Do I need experience in the industry?",
        answer:
          "No. We teach you the business model. Many successful clients came from corporate backgrounds.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "Depends on the business. Some start under $10K, others need $50K+. We help you match your capital to the right model.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        question: "Do you guarantee results?",
        answer:
          "No. Business outcomes depend on your execution, market conditions, and capital. We provide structure and guidance, not guarantees.",
      },
      {
        question: "How long until I'm profitable?",
        answer:
          "Varies widely. Some clients see revenue in 30-60 days, profitability in 6-12 months. No guarantees.",
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
            Let's talk. We're here to help you make the right decision for your future.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary inline-block"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
