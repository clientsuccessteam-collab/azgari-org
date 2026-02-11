"use client";

import Link from "next/link";
import { TESTIMONIALS } from "@/lib/links";

interface TestimonialsProps {
  limit?: number;
  showCTA?: boolean;
}

export default function Testimonials({ limit = 6, showCTA = true }: TestimonialsProps) {
  const displayedTestimonials = TESTIMONIALS.slice(0, limit);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
          >
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real struggles. Real breakthroughs. Real results. Hear from entrepreneurs who went from uncertain to unstoppable.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              style={{ color: 'var(--color-primary)' }}
            >
              Read Full Case Studies
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
