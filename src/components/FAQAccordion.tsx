"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          style={{
            backgroundColor: openIndex === index ? "var(--color-cream)" : "white",
          }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
          >
            <span
              className="font-medium text-base"
              style={{
                color: openIndex === index ? "var(--color-primary)" : "#1f2937",
              }}
            >
              {item.question}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: openIndex === index ? "var(--color-accent)" : "var(--color-cream)",
                color: openIndex === index ? "var(--color-primary-dark)" : "var(--color-primary)",
              }}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openIndex === index ? "500px" : "0",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
