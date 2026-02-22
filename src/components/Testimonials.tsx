"use client";

import Link from "next/link";

const VIDEO_TESTIMONIALS = [
  {
    id: "antwain-davis",
    name: "Antwain Davis",
    title: "Business Owner",
    videoSrc: "/videos/testimonials/antwain-davis.mp4",
    quote: "Azgari helped me turn my idea into a real business.",
  },
  {
    id: "matthew-p",
    name: "Matthew P.",
    title: "Staffing Agency Owner",
    videoSrc: "/videos/testimonials/matthew-p.mp4",
    quote: "The systems and guidance made all the difference.",
  },
];

export default function Testimonials() {
  if (VIDEO_TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
          >
            CLIENT STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Hear From Real Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real people. Real businesses. Real video.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video bg-gray-900">
                <video
                  controls
                  className="w-full h-full object-contain"
                  preload="metadata"
                >
                  <source src={video.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5">
                <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {video.name}
                </p>
                <p className="text-sm text-gray-500 mb-2">{video.title}</p>
                <p className="text-gray-600 text-sm italic">
                  &quot;{video.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
            style={{ color: 'var(--color-primary)' }}
          >
            See More Client Stories
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
