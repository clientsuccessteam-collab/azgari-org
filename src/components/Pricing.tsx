import Link from "next/link";
import { PROGRAMS, GHL_LINKS } from "@/lib/links";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Find the Path That Matches Your Goals
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Paid tuition funds free programs and scholarships for underserved founders.
        </p>
        
        {/* Decision Guide */}
        <div className="max-w-2xl mx-auto mb-12 rounded-2xl p-6 sm:p-8 border-2 border-gray-100">
          <h3 className="text-lg font-bold mb-4 text-center" style={{ color: 'var(--color-primary)' }}>
            Not sure which program fits?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
              <p><span className="font-semibold text-gray-800">Want to test our approach first?</span> Start with Quick Win ($500)</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
              <p><span className="font-semibold text-gray-800">Have an idea you&apos;re committed to?</span> Foundation ($10K) validates and launches it</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
              <p><span className="font-semibold text-gray-800">Want hands-on guidance every step?</span> Full Launch ($25K) is our most popular — 180 days of expert support</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
              <p><span className="font-semibold text-gray-800">Already running a business?</span> Scale ($50K) makes it loan-ready and franchise-ready</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">Still unsure? <a href="/contact" className="font-medium underline" style={{ color: 'var(--color-accent)' }}>Book a free call</a> — we&apos;ll recommend the right fit.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((plan) => (
            <div 
              key={plan.name}
              className="relative bg-white rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
              style={{ 
                border: plan.featured ? '2px solid var(--color-accent)' : '2px solid #e5e7eb',
                boxShadow: plan.featured ? '0 8px 30px rgba(212, 160, 41, 0.2)' : undefined
              }}
            >
              {plan.featured && (
                <span 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary-dark)' }}
                >
                  ⭐ MOST POPULAR
                </span>
              )}
              
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>{plan.name}</h3>
              <div className="text-3xl font-bold my-4" style={{ color: 'var(--color-primary)' }}>
                {plan.price}
                <small className="block text-sm font-normal text-gray-500 mt-1">
                  {plan.note}
                </small>
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{plan.description}</p>
              
              {/* Two-button layout */}
              <div className="space-y-3">
                <Link 
                  href={plan.href}
                  className={`btn w-full ${plan.featured ? "btn-primary" : "btn-primary"}`}
                >
                  Get Started Now
                </Link>
                <Link 
                  href={GHL_LINKS.forms.bookCall}
                  className="btn btn-secondary w-full text-sm py-3"
                >
                  Book a Call First
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
