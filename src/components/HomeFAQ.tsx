"use client";

import FAQAccordion from "@/components/FAQAccordion";

const homeFaqItems = [
  {
    question: "Which program is right for me?",
    answer:
      "Quick Win ($500) if you want to test our approach. Foundation ($10K) if you have an idea to validate. Full Launch ($25K) for complete 180-day guided support — our most popular. Scale ($50K) if you already have a business to systemize. Not sure? Book a free call and we'll recommend the right fit.",
  },
  {
    question: "Can I do this while keeping my full-time job?",
    answer:
      "Yes, especially in the first 90 days. You'll need about 2-3 hours per week for coaching calls and action items. As you approach launch, you may need more dedicated time. Many clients launched while working full-time, then transitioned once revenue stabilized.",
  },
  {
    question: "What if I don't have business experience?",
    answer:
      "Most of our successful clients didn't have experience in their specific business. We teach the business model, operations, and systems from the ground up. What matters is your consistency and willingness to follow a proven framework.",
  },
  {
    question: "How long until I see revenue?",
    answer:
      "Our clients average 47 days to first revenue. Full profitability typically comes within 6-12 months, depending on business model, capital invested, and your execution. Some clients hit $10K months within 90 days.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We guarantee a proven 8-step framework, weekly accountability, and expert guidance. Your results depend on your execution, market conditions, and capital — we're transparent about that. What we can tell you: 160+ businesses launched, 94% client satisfaction, and $285K average first-year revenue for clients who follow the framework.",
  },
  {
    question: "How is this different from a franchise?",
    answer:
      "Franchises give you structure but take 3-8% in royalties and control how you run your business. With Azgari, you get expert-guided structure AND 100% ownership. No ongoing fees, no restrictions, and you keep every dollar you earn.",
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
