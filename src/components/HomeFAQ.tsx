"use client";

import FAQAccordion from "@/components/FAQAccordion";

const homeFaqItems = [
  {
    question: "Is Azgari Foundation a nonprofit?",
    answer:
      "Yes. Azgari Foundation is a 501(c)(3) nonprofit organization. Our mission is to expand economic mobility and create local jobs through entrepreneurship education. Program tuition from enrolled participants directly funds our educational services, scholarships for underserved founders, and free community training programs. We are not a franchise, a lender, or a for-profit consulting firm.",
  },
  {
    question: "What does the flagship entrepreneurship program cover?",
    answer:
      "The curriculum covers the complete business-launch journey: selecting the right service business model for your market, forming the entity, handling licensing and compliance, building a brand, a sales methodology practicum to secure B2B contracts, team hiring and training, and manager placement. Participants learn through structured coursework with mentor support and hands-on guidance. Once operational, participants spend roughly an hour a week on oversight.",
  },
  {
    question: "How is this different from a franchise?",
    answer:
      "Franchises give you a brand but charge 3\u20138% in royalties indefinitely and control how you run your business. Our flagship program is an educational program — participants own 100% of the businesses they build with no ongoing fees, no territory restrictions, and no royalty payments. Participants can sell, expand, or operate their business on their own terms.",
  },
  {
    question: "How long is the program?",
    answer:
      "The flagship program is structured around a 180-day guided curriculum leading to an operational business with a manager in seat. Many participants secure their first contracts before the 180-day mark. Program Commitment: if a participant has not achieved an operational business within 180 days of enrollment, the Foundation will continue providing mentorship and educational support at no additional tuition cost until program objectives are met.",
  },
  {
    question: "Can I do the program while keeping my full-time job?",
    answer:
      "Yes. The curriculum is designed around a 5\u201310 hr/week coursework commitment during the program, and roughly 1 hr/week once the business is operational and a manager is in place. Most participants keep their existing jobs while the business reaches operational status.",
  },
  {
    question: "What if I don\u2019t have business experience?",
    answer:
      "Most participants do not arrive with prior business-ownership experience. That\u2019s why the program is a guided, mentor-supported curriculum rather than self-directed learning. The Foundation\u2019s team brings 20+ years of experience building service businesses, and participants bring their professional expertise and commitment to the coursework.",
  },
  {
    question: "How does the sales education and practicum work?",
    answer:
      "Participants learn a structured B2B sales methodology as part of the curriculum. The practicum covers remote prospecting, relationship-building, and qualification. When a prospect is ready to sign, the participant meets with the decision-maker and finalizes the contract \u2014 applying the methodology in real-world situations rather than cold calling or running consumer ads.",
  },
  {
    question: "Do you guarantee outcomes?",
    answer:
      "No. As a 501(c)(3) nonprofit educational organization, we do not guarantee specific income levels or business outcomes. We do make a Program Commitment: if a participant has not achieved an operational business within 180 days of enrollment, the Foundation will continue providing mentorship and educational support at no additional tuition cost until program objectives are met. Individual results vary based on effort, market conditions, and capital.",
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
            Answers to the questions we hear most from professionals considering
            business ownership education.
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
