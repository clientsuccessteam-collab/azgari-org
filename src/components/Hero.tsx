import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center" style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <span 
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
          style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
        >
          FROM SERVICE BUSINESS EXPERTS
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: 'var(--color-primary)' }}>
          Build Real Wealth. Own 100%.
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Launch a profitable local service business in 180 days — no franchise fees, no royalties, full ownership.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href={GHL_LINKS.qualify} className="btn btn-primary">
            See If You Qualify →
          </Link>
          <Link href="#pricing" className="btn btn-secondary">
            View Pricing
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-600">
          <span className="flex items-center justify-center gap-2">
            <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> No Franchise Fees
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 100% Ownership
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> SBA-Aligned
          </span>
        </div>
      </div>
    </section>
  );
}
