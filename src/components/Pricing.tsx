import Link from "next/link";
import { PROGRAMS } from "@/lib/links";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          Find the Path That Matches Your Goals
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Paid tuition funds free programs and scholarships for underserved founders.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((plan) => (
            <div 
              key={plan.name}
              className="relative bg-white rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
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
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              
              <Link 
                href={plan.href}
                className={`btn w-full ${plan.featured ? "btn-primary" : "btn-secondary"}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
