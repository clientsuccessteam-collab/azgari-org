import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import { GHL_LINKS, getToolsByCategory } from "@/lib/links";

export const metadata: Metadata = {
  title: "Free Educational Tools & Templates | Azgari Foundation",
  description:
    "Free educational tools, templates, and calculators published by Azgari Foundation to support community entrepreneurship education. No cost, no purchase required.",
};

export default function ToolsPage() {
  // Azgari Foundation (501(c)(3) nonprofit) publishes ONLY free educational
  // tools on azgari.org. Any paid/commercial tools are offered separately by
  // the for-profit sister brand at azgari.com.
  const freeTools = getToolsByCategory("free");

  return (
    <>
      <Navbar />
      <MissionBanner variant="full" />
      <main>
        {/* Hero */}
        <section
          className="pt-12 md:pt-16 pb-16 text-center"
          style={{ background: "linear-gradient(135deg, var(--color-cream) 0%, white 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "var(--color-accent-light)", color: "var(--color-primary)" }}
            >
              FREE COMMUNITY EDUCATION RESOURCES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Free Educational Tools &amp; Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Community education materials published by the Foundation to support
              entrepreneurship learning — available to the public at no cost.
            </p>
          </div>
        </section>

        {/* Free Resources */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
              Free Educational Resources
            </h2>
            <p className="text-gray-600 mb-8">
              No purchase required — enter your email for instant access.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {freeTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg" style={{ color: "var(--color-primary)" }}>
                      {tool.title}
                    </h3>
                    <span className="text-green-600 font-bold flex-shrink-0">{tool.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                  <Link href={tool.href} className="btn btn-secondary w-full text-center mt-auto">
                    Get Instant Access →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarship bridge */}
        <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Need More Than Free Resources?
            </h2>
            <p className="text-gray-600 mb-8">
              The Foundation offers full scholarship access to its educational programs for
              foster youth, veterans, single parents, and first-generation entrepreneurs
              from underserved communities.
            </p>
            <Link href="/scholarships" className="btn btn-primary">
              Learn About Scholarships →
            </Link>
          </div>
        </section>

        {/* Contact bridge */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Have a Question About Our Educational Materials?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We&apos;re happy to help you find the right free resource for your situation.
            </p>
            <Link href={GHL_LINKS.forms.contact} className="btn btn-secondary">
              Contact the Foundation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
