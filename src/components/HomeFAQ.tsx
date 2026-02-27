"use client";

import FAQAccordion from "@/components/FAQAccordion";

const homeFaqItems = [
  {
    question: "What exactly do you build for me?",
    answer:
      "Everything. We select the right business model for your market, form the entity, handle licensing and compliance, build the brand, run inside sales to land B2B contracts, hire and train your team, place a manager, and deliver signed accounts. You spend about an hour a week on oversight. We handle the rest.",
  },
  {
    question: "How is this different from a franchise?",
    answer:
      "Franchises give you a brand but take 3\u20138% in royalties forever and control how you run your business. With Azgari, you get the same level of structure AND 100% ownership. No ongoing fees, no restrictions, no royalty payments. You keep every dollar you earn, and you can sell the business whenever you want \u2014 on your terms.",
  },
  {
    question: "How long does it take?",
    answer:
      "Our guarantee is an operational business with a manager in seat within 180 days. Most clients land their first contracts well before that. If we miss the timeline, we keep working until we deliver.",
  },
  {
    question: "Can I do this while keeping my full-time job?",
    answer:
      "Yes. That\u2019s the point. Because we handle execution and place a manager to run day-to-day operations, your time commitment is about an hour a week for oversight calls and key decisions. Most clients keep their jobs until the business is generating consistent revenue.",
  },
  {
    question: "What if I don\u2019t have business experience?",
    answer:
      "Most of our clients don\u2019t. That\u2019s why this is done-for-you, not done-with-you. Our team has 20+ years of experience building service businesses. You bring the capital and the commitment \u2014 we bring the expertise and execution.",
  },
  {
    question: "How do you land B2B contracts remotely?",
    answer:
      "Inside sales. Our team prospects, builds relationships, and qualifies leads with businesses in your market \u2014 all remotely. When a prospect is ready to sign, you\u2019re the face who meets the decision-maker and closes the contract. You\u2019re not cold calling or running ads to consumers. We handle the pipeline, you close the deals.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We guarantee an operational business with a manager in seat and signed contracts within 180 days. If we don\u2019t deliver, we keep working at no additional cost until we do. Individual revenue results vary based on market, business model, and many factors \u2014 we\u2019re transparent about that.",
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
            business ownership.
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
