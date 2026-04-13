"use client";

import FAQAccordion from "@/components/FAQAccordion";

// Azgari Foundation (501(c)(3) nonprofit) — homepage FAQ covers only
// nonprofit / charitable topics. Paid-program questions (tuition amount,
// enrollment, strategy-call logistics) are intentionally excluded from the
// .org surface; those questions live on azgari.com.
const homeFaqItems = [
  {
    question: "Is Azgari Foundation a nonprofit?",
    answer:
      "Yes. Azgari Foundation is a 501(c)(3) nonprofit organization. Our mission is to expand economic mobility and create local jobs through entrepreneurship education. We are not a franchise, a lender, or a for-profit consulting firm.",
  },
  {
    question: "Who does the Foundation serve?",
    answer:
      "The Foundation directs its scholarships and free community programs to founders from underserved communities — including aging-out foster youth (ages 18–24), veterans transitioning to civilian careers, single parents re-entering the workforce, and first-generation entrepreneurs with no family business background.",
  },
  {
    question: "What does the Foundation offer at no cost?",
    answer:
      "Free educational guides, free educational tools and templates, free community training, and full scholarship access to the Foundation's entrepreneurship education for qualifying applicants. All free resources are available to the general public — no purchase required.",
  },
  {
    question: "How are scholarships funded?",
    answer:
      "Scholarships and free community programming are funded through a combination of charitable contributions and a meaningful portion of program tuition from the Foundation's fee-based educational programs, which are operated separately. Donations directly expand the number of scholarship recipients the Foundation is able to support.",
  },
  {
    question: "How do I apply for a scholarship?",
    answer:
      "Scholarship applications are open on an ongoing basis to founders who meet our eligibility criteria. Visit the Scholarships page to learn more and apply. The process includes a short application, a brief interview, documentation to verify eligibility, and a decision within two weeks.",
  },
  {
    question: "Where can I learn about program tuition and commercial offerings?",
    answer:
      "Fee-based programs, pricing, and enrollment are operated separately at azgari.com. Azgari Foundation (this site) covers the nonprofit's mission, scholarships, and free community education only.",
  },
  {
    question: "Does the Foundation guarantee business outcomes?",
    answer:
      "No. The Foundation is a 501(c)(3) nonprofit educational organization. We do not guarantee any specific level of income or business success. Individual results vary based on effort, market conditions, and capital.",
  },
];

export default function HomeFAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Common Questions
          </h2>
          <p className="text-gray-600">
            About the Foundation, our scholarships, and our free community programs.
          </p>
        </div>
        <FAQAccordion items={homeFaqItems} />
        <p className="text-center mt-8">
          <a
            href="/faq"
            className="text-sm font-medium underline"
            style={{ color: "var(--color-accent)" }}
          >
            View all frequently asked questions →
          </a>
        </p>
      </div>
    </section>
  );
}
