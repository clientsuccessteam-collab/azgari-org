"use client";

import FAQAccordion from "@/components/FAQAccordion";

const homeFaqItems = [
  {
    question: "Which program is right for me?",
    answer:
      "It depends on your time and capital. Launch Validation ($2,500) if you can commit 40+ hours/week and want to prove the concept fast. Foundation ($10K) if you have 10\u201315 hours/week and want to validate before going bigger. Full Launch ($25K) is our most popular \u2014 we build the business WITH you in 120 days. Scale ($50K) if you already have revenue and want to step back from day-to-day operations. Not sure? Start with our Quick Win Bundle ($500) to see how we work, or book a free call.",
  },
  {
    question: "Can I do this while keeping my full-time job?",
    answer:
      "Yes \u2014 Foundation is specifically designed for people with 10\u201315 hours per week. Many clients start part-time, prove the model, then transition to full-time once revenue stabilizes. Launch Validation requires 40+ hours/week, so that\u2019s better if you\u2019re ready to go all-in from day one.",
  },
  {
    question: "What if I don't have business experience?",
    answer:
      "Most of our successful clients didn\u2019t. We provide the business model, operations systems, and step-by-step framework \u2014 you bring the consistency. That\u2019s why our lower tiers help you acquire customers for one business first, before investing in scaling.",
  },
  {
    question: "How long until I see revenue?",
    answer:
      "Our clients average 47 days to first revenue. Each program has a specific launch guarantee: Launch Validation in 60 days, Foundation in 90 days, Full Launch in 120 days. If we miss the timeline, you get continued support at no extra cost \u2014 and Full Launch includes a $3,000 cash guarantee.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "Every program includes a launch guarantee with specific timelines. Full Launch has our strongest: launched in 120 days or continued support plus $3,000 cash. Your results still depend on your execution and market \u2014 we\u2019re transparent about that. What we can tell you: 160+ businesses launched, 94% client satisfaction, $285K average first-year revenue.",
  },
  {
    question: "How is this different from a franchise?",
    answer:
      "Franchises give you a brand but take 3\u20138% in royalties forever and control how you run your business. With Azgari, you get expert-guided structure AND 100% ownership. No ongoing fees, no restrictions, no royalty payments. You keep every dollar you earn, and you can sell the business whenever you want \u2014 on your terms.",
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
