import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Azgari Foundation",
  description: "Azgari Foundation privacy policy. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Contact info (name, email, phone) when you fill out forms",
      "Usage data (pages visited, time on site) via analytics",
      "Payment info processed by third-party providers (not stored by us)",
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "Respond to inquiries",
      "Provide services you requested",
      "Send relevant updates (with opt-out)",
      "Improve our website and services",
    ],
  },
  {
    title: "Information Sharing",
    items: [
      "We don't sell your data",
      "Share with service providers (payment processing, email)",
      "May disclose if required by law",
    ],
  },
  {
    title: "Cookies & Tracking",
    items: [
      "We use cookies for site functionality",
      "Analytics to understand usage patterns",
      "You can disable cookies in browser settings",
    ],
  },
  {
    title: "Your Rights",
    items: [
      "Access your data",
      "Request deletion",
      "Opt out of marketing",
      "Contact: privacy@azgari.org",
    ],
  },
  {
    title: "Data Security",
    items: [
      "SSL encryption",
      "Secure third-party providers",
      "Regular security reviews",
    ],
  },
  {
    title: "Changes to Policy",
    items: [
      "We may update this policy",
      "Changes posted on this page",
      "Continued use = acceptance",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-24 md:pt-32 pb-16 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-gray-500">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gray-600 mb-12 text-lg">
              At Azgari Foundation, we take your privacy seriously. This policy explains 
              how we collect, use, and protect your personal information when you use 
              our website and services.
            </p>

            <div className="space-y-12">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className="py-16 text-center"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <a
              href="mailto:privacy@azgari.org"
              className="text-lg font-medium hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              privacy@azgari.org
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
