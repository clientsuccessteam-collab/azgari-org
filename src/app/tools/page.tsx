import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Product data organized by category
const productCategories = [
  {
    id: "free",
    title: "Free Lead Magnets",
    subtitle: "Start here — no credit card required",
    products: [
      {
        name: "Service Business Startup Checklist",
        price: "Free",
        description: "The complete step-by-step roadmap to launch your service business legally and profitably.",
        popular: false,
      },
      {
        name: "Is This Business Right for Me? Assessment",
        price: "Free",
        description: "A quick self-assessment to determine if entrepreneurship fits your goals and lifestyle.",
        popular: false,
      },
    ],
  },
  {
    id: "starter",
    title: "Starter Tools",
    subtitle: "$27–$47 — Essential templates and guides",
    products: [
      {
        name: "Business Model Canvas for Service Businesses",
        price: "$27",
        description: "Visual framework to map your value proposition, revenue streams, and customer segments.",
        popular: false,
      },
      {
        name: "Pricing Calculator Spreadsheet",
        price: "$37",
        description: "Automated tool to calculate profitable pricing based on costs, labor, and market rates.",
        popular: true,
      },
      {
        name: "Customer Acquisition Playbook",
        price: "$47",
        description: "Proven strategies to find, attract, and convert your first 100 customers.",
        popular: false,
      },
      {
        name: "Operations SOP Templates",
        price: "$37",
        description: "Ready-to-use standard operating procedures for daily business operations.",
        popular: false,
      },
      {
        name: "First 30 Days Action Plan",
        price: "$27",
        description: "Day-by-day roadmap for your critical first month as a business owner.",
        popular: false,
      },
    ],
  },
  {
    id: "premium",
    title: "Premium Bundles",
    subtitle: "$47–$147 — Comprehensive toolkits",
    products: [
      {
        name: "Boring Business Starter Kit",
        price: "$97",
        description: "Everything you need to launch a cash-flow-positive service business that runs without you.",
        popular: true,
      },
      {
        name: "Veteran Launch Kit",
        price: "$67",
        description: "Resources specifically designed for veterans transitioning to business ownership.",
        popular: false,
      },
      {
        name: "Commercial Cleaning Accelerator",
        price: "$147",
        description: "Complete toolkit for starting and scaling a commercial cleaning business.",
        popular: false,
      },
      {
        name: "Cash Flow Mastery Kit",
        price: "$47",
        description: "Financial templates and forecasting tools to keep your business profitable.",
        popular: false,
      },
      {
        name: "Local Marketing Toolkit",
        price: "$47",
        description: "Done-for-you marketing materials to dominate your local market.",
        popular: false,
      },
    ],
  },
  {
    id: "vault",
    title: "Complete Vault",
    subtitle: "Best value for serious entrepreneurs",
    highlight: true,
    products: [
      {
        name: "The Azgari Business Vault",
        price: "$697",
        description: "Everything above plus lifetime updates, exclusive resources, and priority support.",
        popular: false,
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              BUSINESS TOOLS & TEMPLATES
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Tools to Launch and Scale<br />
              Your Service Business
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battle-tested templates, calculators, and guides used by successful business owners.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category) => (
          <section
            key={category.id}
            className={`py-20 ${category.highlight ? '' : category.id === 'starter' || category.id === 'premium' ? 'bg-white' : ''}`}
            style={{
              backgroundColor: category.highlight
                ? 'var(--color-primary)'
                : category.id === 'free' || category.id === 'vault'
                ? undefined
                : 'white',
            }}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: category.highlight ? 'white' : 'var(--color-primary)' }}
                >
                  {category.title}
                </h2>
                <p
                  className="text-lg"
                  style={{ color: category.highlight ? 'rgba(255,255,255,0.8)' : 'rgb(75, 85, 99)' }}
                >
                  {category.subtitle}
                </p>
              </div>

              {/* Product Grid */}
              <div
                className={`grid gap-6 ${
                  category.id === 'vault'
                    ? 'md:grid-cols-1 max-w-2xl mx-auto'
                    : 'md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {category.products.map((product, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl p-8 transition-all hover:shadow-xl ${
                      category.highlight
                        ? 'bg-white/10 backdrop-blur border border-white/20'
                        : 'bg-white border border-gray-100'
                    }`}
                  >
                    {/* Popular Badge */}
                    {product.popular && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          color: 'var(--color-primary-dark)',
                        }}
                      >
                        POPULAR
                      </span>
                    )}

                    {/* Product Name */}
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: category.highlight ? 'white' : 'var(--color-primary)' }}
                    >
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div
                      className="text-3xl font-bold mb-4"
                      style={{ color: category.highlight ? 'var(--color-accent)' : 'var(--color-accent)' }}
                    >
                      {product.price}
                    </div>

                    {/* Description */}
                    <p
                      className="mb-6"
                      style={{ color: category.highlight ? 'rgba(255,255,255,0.8)' : 'rgb(75, 85, 99)' }}
                    >
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href="https://go.azgari.org/tools"
                      className={`btn w-full text-center ${
                        category.highlight || product.price === 'Free'
                          ? 'btn-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      {product.price === 'Free' ? 'Free Download →' : 'Get Access →'}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Best Value Note for Vault */}
              {category.highlight && (
                <p className="text-center mt-6 text-white/70 text-sm">
                  Best value for serious entrepreneurs • Includes all tools + lifetime updates
                </p>
              )}
            </div>
          </section>
        ))}

        {/* Bottom CTA Section */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Not Sure What You Need?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with our free assessment to discover which tools are right for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://go.azgari.org/tools"
                className="btn btn-primary"
              >
                Take Free Assessment →
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
