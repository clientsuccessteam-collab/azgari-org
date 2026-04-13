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
  description:
    "Frequently asked questions about Azgari Foundation — a 501(c)(3) nonprofit entrepreneurship education organization, our scholarships, free community programs, and charitable mission.",
  openGraph: {
    title: "FAQ | Azgari Foundation",
    description:
      "Learn about our 501(c)(3) nonprofit mission, scholarships, and free educational resources.",
    type: "website",
    url: "https://azgari.org/faq",
  },
};

// Azgari Foundation (501(c)(3) nonprofit) — FAQ restricted to charitable /
// educational topics. Fee-based program details, strategy-call logistics,
// and enrollment pathways live on the for-profit sister site at azgari.com.
const faqCategories = [
  {
    title: "About the Foundation",
    items: [
      {
        question: "Is Azgari Foundation a nonprofit?",
        answer:
          "Yes. Azgari Foundation is a 501(c)(3) nonprofit organization. Our mission is to expand economic mobility, expand access to business ownership, and create jobs in underserved communities through entrepreneurship education, mentorship, and workforce development programs. We are not a franchise, a lender, or a for-profit consulting firm.",
      },
      {
        question: "What is the Foundation's charitable mission?",
        answer: NONPROFIT.mission,
      },
      {
        question: "Who runs the Foundation?",
        answer:
          "The Foundation was founded by serial entrepreneur Azgari Lipshy, who leads its educational programming. The Foundation is governed in accordance with 501(c)(3) nonprofit requirements; governance information will be made publicly available as it is finalized.",
      },
      {
        question: "Is the Foundation a franchise or a lender?",
        answer:
          "No. The Foundation is an educational nonprofit. It is not a franchise — there are no franchise fees, territories, or royalty structures. It is not a lender — any SBA loans participants obtain are from independent SBA-approved lenders, and all credit decisions are made by those lenders.",
      },
    ],
  },
  {
    title: "Communities We Serve",
    items: [
      {
        question: "Who qualifies for the Foundation's scholarships and free programs?",
        answer:
          "The Foundation's scholarships and free community programming are directed to founders facing real barriers to business ownership — specifically aging-out foster youth (ages 18–24), veterans transitioning to civilian careers, single parents re-entering the workforce, and first-generation entrepreneurs from underserved communities.",
      },
      {
        question: "How do I apply for a scholarship?",
        answer:
          "Visit the Scholarships page to submit your application. The process includes a short online application (~10 minutes), a brief 15-minute video interview, documentation to verify eligibility, and a decision within two weeks.",
      },
      {
        question: "What does a scholarship cover?",
        answer:
          "Scholarship recipients receive full access to the Foundation's educational curriculum at no cost — the same curriculum offered through the Foundation's fee-based programs. There are no strings attached and no hidden costs to the scholarship recipient.",
      },
    ],
  },
  {
    title: "Free Community Education",
    items: [
      {
        question: "What free resources does the Foundation publish?",
        answer:
          "The Foundation publishes free educational guides, free educational tools and templates, and free community training videos. All free resources are available to the general public at no cost and no purchase is required.",
      },
      {
        question: "Where can I find free educational resources?",
        answer:
          "Visit the Free Educational Guides page and the Free Educational Tools page. Additional educational videos and media are available from the Media and Videos pages.",
      },
    ],
  },
  {
    title: "Funding & Compliance",
    items: [
      {
        question: "How are scholarships and free programs funded?",
        answer:
          "Scholarships and free community programming are funded through a combination of charitable contributions and a meaningful portion of program tuition from the Foundation's fee-based educational programs, which are operated separately. Donations directly expand the number of scholarship recipients the Foundation can support.",
      },
      {
        question: "Where can I learn about fee-based program tuition?",
        answer:
          "Fee-based program pricing, enrollment, and strategy-session booking are operated by the for-profit sister brand at azgari.com. Azgari Foundation (this site) covers only the nonprofit's mission, scholarships, and free community education.",
      },
      {
        question: "Does the Foundation guarantee business outcomes?",
        answer:
          "No. " + NONPROFIT.resultsDisclaimer,
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
            About the Foundation, our scholarships, and our free community programs.
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
      <section className="py-16 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Still have questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            The Foundation&apos;s team is happy to help you understand the mission and the
            scholarship process.
          </p>
          <Link href="/contact" className="btn btn-primary inline-block">
            Contact the Foundation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
