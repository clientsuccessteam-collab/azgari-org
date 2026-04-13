import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import MissionBanner from "@/components/MissionBanner";
import JsonLd from "@/app/JsonLd";
import { NONPROFIT } from "@/lib/links";

export const metadata: Metadata = {
  title: "FAQ | Azgari Foundation",
  description: "Answers to frequently asked questions about Azgari Foundation&apos;s entrepreneurship education program, nonprofit mission, and participant eligibility.",
  openGraph: {
    title: "FAQ | Azgari Foundation",
    description: "Learn about our 501(c)(3) nonprofit entrepreneurship education programs, tuition, and participant pathways.",
    type: "website",
    url: "https://azgari.org/faq",
  },
};

const faqCategories = [
  {
    title: "About the Foundation",
    items: [
      {
        question: "Is Azgari Foundation a nonprofit?",
        answer:
          "Yes. Azgari Foundation is a 501(c)(3) nonprofit organization. Our mission is to expand economic mobility and create local jobs through entrepreneurship education. Program tuition from enrolled participants directly funds our educational services, scholarships for underserved founders, and free community training programs. We are not a franchise, a lender, or a for-profit consulting firm.",
      },
      {
        question: "What is Azgari Foundation?",
        answer:
          "We are a 501(c)(3) nonprofit entrepreneurship education organization. Our curriculum guides participants through launching local service businesses they own outright \u2014 covering business model selection, entity formation, brand development, sales education and practicum, hiring, and operational readiness. Founded by serial entrepreneur Azgari Lipshy, the Foundation serves as a mentor-supported alternative to franchise models: participants complete a guided educational program while retaining 100% ownership, with no franchise fees or royalties.",
      },
      {
        question: "Is Azgari a franchise?",
        answer:
          "No. Participants maintain 100% ownership and control of their businesses. Our curriculum guides them through the launch process, but they own everything \u2014 the brand, the entity, the customer relationships, and all systems. There are no royalties, no territory restrictions, and no ongoing fees.",
      },
      {
        question: "Are you a lender?",
        answer:
          "No. Our curriculum includes funding readiness education to help participants prepare for SBA financing. All lending decisions are made by independent SBA lenders. We help ensure participant business plans, financials, and documentation are lender-ready.",
      },
    ],
  },
  {
    title: "Before You Enroll",
    items: [
      {
        question: "What if I fail?",
        answer:
          "Business outcomes depend on three things: our educational framework and mentorship (we own this), market conditions (nobody controls this), and the participant&apos;s effort and involvement (the participant owns this). We do not guarantee any specific level of income or business success. Individual results vary based on effort, market conditions, and capital. " + NONPROFIT.programCommitment,
      },
      {
        question: "Can I participate while keeping my full-time job?",
        answer:
          "Yes. Our guided curriculum is designed so participants can remain employed while they complete coursework and oversight. Time commitment is roughly 5\u201310 hours per week. Many participants keep their full-time jobs while completing the program, then decide later whether to transition.",
      },
      {
        question: "I don\u2019t have business experience. Am I eligible?",
        answer:
          "You do not need prior experience in the specific business model you select. Our curriculum covers business model selection, entity formation, branding, marketing systems, hiring, and operations \u2014 with structured mentorship throughout. Past participants have come from corporate, military, skilled-trade, and career-change backgrounds.",
      },
      {
        question: "How is Azgari different from a franchise?",
        answer:
          "Franchises license a brand in exchange for 3\u20138% royalties forever and operational control. Azgari Foundation is a nonprofit entrepreneurship education organization \u2014 we guide participants through launching a business they own 100%. No ongoing fees, no restrictions, no royalty payments. Participants keep every dollar they earn and may sell the business whenever they choose.",
      },
    ],
  },
  {
    title: "Program Tuition & What\u2019s Included",
    items: [
      {
        question: "What does the $50,000 program tuition cover?",
        answer:
          "The guided entrepreneurship education program includes: data-driven business model selection curriculum (50+ proven service models), entity formation and compliance coursework, mentor-supported brand development (name, logo, website, marketing systems), sales methodology training and practicum so participants secure paying customers before launch, team recruitment and hiring curriculum, manager placement and operational readiness coaching, funding readiness education for SBA qualification, and 12 months of ongoing mentorship and educational support. " + NONPROFIT.tuitionJustification,
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. Payment plans and SBA funding paths are available. We will discuss the options that fit your situation during the strategy session.",
      },
      {
        question: "What is the Program Commitment?",
        answer:
          NONPROFIT.programCommitment + " " + NONPROFIT.resultsDisclaimer,
      },
    ],
  },
  {
    title: "Business Models Covered in the Curriculum",
    items: [
      {
        question: "What types of businesses does the curriculum cover?",
        answer:
          "Our curriculum covers B2B service businesses that secure contracts with other businesses \u2014 not retail or walk-in models. Examples include commercial cleaning, commercial pressure washing, commercial HVAC, pest control (commercial accounts), staffing and recruiting agencies, fractional C-suite consulting, IT services, bookkeeping, and business consulting. Participants learn an inside sales methodology in which they build relationships remotely and meet decision-makers to sign contracts. We help match participants to the right model from a library of 50+ proven service models based on their skills, capital, and market.",
      },
      {
        question: "Can the curriculum support a professional services business, not just trades?",
        answer:
          "Yes. Past program graduates have launched recruiting firms, fractional CFO and COO practices, HR consulting businesses, and other professional service companies. The same guided curriculum applies: we help participants select the model, build the systems, learn the sales methodology, and put the team in place. Startup costs are often lower and margins can be higher with professional services.",
      },
      {
        question: "How does the sales methodology work for securing B2B contracts?",
        answer:
          "Participants learn an inside sales approach: relationship-building with businesses in their market through prospecting, outreach, follow-up, and lead qualification. When a prospect is ready, the participant is the face who meets the decision-maker and signs the contract. This is how B2B service businesses work: relationships first, then contracts. Participants are not expected to cold-call homeowners or run consumer ads \u2014 the curriculum teaches the pipeline approach so they can focus on closing and oversight.",
      },
      {
        question: "Do I need prior experience in the industry I choose?",
        answer:
          "No. The curriculum covers the business model and operations in depth, including team training. Many program graduates came from completely different backgrounds \u2014 corporate, military, and career-change. A participant&apos;s role is ownership oversight, not day-to-day operations.",
      },
      {
        question: "How much capital do I need?",
        answer:
          "The guided entrepreneurship education program is $50,000 in tuition, with payment plans and SBA funding paths available. Some business models also require working capital beyond tuition, depending on the business type (equipment, vehicles, etc.). We help participants match their available capital to the right model during the discovery process.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        question: "Do you guarantee business results?",
        answer:
          "No. " + NONPROFIT.resultsDisclaimer + " " + NONPROFIT.programCommitment,
      },
      {
        question: "How long until the business is running?",
        answer:
          "The Foundation&apos;s educational objective is an operational business with a manager in seat within approximately 180 days of enrollment. Actual timelines vary based on business model, licensing requirements, hiring market, and participant-specific factors.",
      },
      {
        question: "What happens after the program is complete?",
        answer:
          "Participants own 100% of their business and all the systems developed through the curriculum. The program includes 12 months of ongoing mentorship and educational support after launch. The manager handles day-to-day operations while the participant provides oversight \u2014 roughly 1 hour per week. Many program graduates apply the framework to launch additional businesses.",
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
      <MissionBanner variant="full" />
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
            Answers about our 501(c)(3) nonprofit entrepreneurship education programs, tuition, and participant pathways.
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
