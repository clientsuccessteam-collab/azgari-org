import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Azgari Foundation",
  description: "Azgari Foundation terms of service. Read our terms and conditions for using our programs and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    items: [
      "By using azgari.org, you agree to these terms",
      "If you don't agree, don't use the site",
    ],
  },
  {
    title: "Services Description",
    items: [
      "Azgari Foundation provides business education, training, and consulting",
      "We are NOT a franchise",
      "We are NOT a lender or funding provider",
      "All business outcomes depend on individual execution",
    ],
  },
  {
    title: "No Guarantees",
    items: [
      "We do not guarantee revenue, profits, or business success",
      "Results vary based on market conditions, capital, execution",
      "Educational content is for informational purposes only",
    ],
  },
  {
    title: "Payment Terms",
    items: [
      "Fees as listed on /services page",
      "Payment plans available for select programs",
      "Refund policy: Contact within 7 days for evaluation",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "Content on this site is owned by Azgari Foundation",
      "You may not copy, distribute, or repurpose without permission",
      "Client materials provided during programs are for personal use only",
    ],
  },
  {
    title: "User Conduct",
    items: [
      "Use the site lawfully",
      "Don't attempt to hack or disrupt services",
      "Don't misrepresent yourself",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "We are not liable for business losses or decisions",
      "Maximum liability limited to fees paid",
      "Use services at your own risk",
    ],
  },
  {
    title: "Governing Law",
    items: [
      "These terms governed by Texas law",
      "Disputes resolved in Austin, TX",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-24 md:pt-32 pb-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cream) 0%, white 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Terms of Service
            </h1>
            <p className="text-gray-500">Last updated: February 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="pb-10 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3 items-start">
                        <span
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact Section */}
              <div
                className="p-8 rounded-xl"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Questions about these terms? Contact us at:{" "}
                  <a
                    href="mailto:legal@azgari.org"
                    className="font-semibold hover:underline ml-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    legal@azgari.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
