import Link from "next/link";
import Image from "next/image";
import { GHL_LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              DONE-FOR-YOU BUSINESS BUILDING
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight" style={{ color: 'var(--color-primary)' }}>
              Your Expertise Deserves Its Own Business.{" "}
              <span style={{ color: 'var(--color-accent)' }}>We&apos;ll Build It For You.</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mb-4">
              We take corporate professionals with 7+ years of industry experience and launch fully operational businesses — from legal formation to first paying clients — in 180 days.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mb-8">
              You bring the expertise. We build the entity, brand, marketing, team, and client pipeline. You own 100%. No franchise fees. No royalties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                Apply For A Strategy Call →
              </Link>
              <Link href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> 100% Ownership — Zero Royalties
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> ~1 hr/wk Once Operational
              </span>
              <span className="flex items-center justify-center lg:justify-start gap-2">
                <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span> Done-for-You — We Build Everything
              </span>
            </div>
          </div>

          {/* Right - Founder Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder/azgari-headshot.jpg"
                  alt="Azgari Lipshy - Founder of Azgari Foundation"
                  width={450}
                  height={450}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>20+ Years</div>
                <div className="text-sm text-gray-600">Building Businesses</div>
              </div>

              {/* Floating stat card - right */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              >
                <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>100%</div>
                <div className="text-sm text-gray-600">Owner Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
