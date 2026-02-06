import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

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

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6"
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
