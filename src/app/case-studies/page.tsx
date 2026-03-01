import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GHL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Client Stories | Azgari Foundation",
  description: "Real video testimonials from real business owners. See how Azgari builds businesses people own 100%.",
};

// Video testimonials data — real clients only
// Lead with healthcare + consulting verticals (strongest case studies)
const VIDEO_TESTIMONIALS = [
  {
    id: "matthew-p",
    name: "Matthew P.",
    title: "Healthcare Director → Staffing Agency Owner",
    videoSrc: "/videos/testimonials/matthew-p.mp4",
    quote: "The systems and guidance made all the difference.",
  },
  {
    id: "antwain-davis",
    name: "Antwain Davis",
    title: "Business Owner",
    videoSrc: "/videos/testimonials/antwain-davis.mp4",
    quote: "Azgari helped me turn my idea into a real business.",
  },
  {
    id: "window-washing",
    name: "Window Washing Specialist",
    title: "Cleaning Business Owner",
    videoSrc: "/videos/testimonials/window-washing.mp4",
    quote: "From zero to profitable in record time.",
  },
  {
    id: "hardscaping",
    name: "Hardscaping Professional",
    title: "Landscaping Business Owner",
    videoSrc: "/videos/testimonials/hardscaping.mp4",
    quote: "Finally, a clear path to growth.",
  },
  {
    id: "yoga-studio",
    name: "Yoga Studio Owner",
    title: "Wellness Entrepreneur",
    videoSrc: "/videos/testimonials/yoga-studio.mp4",
    quote: "Launching my dream studio became reality.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-24 md:pt-32 pb-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              REAL CLIENTS • REAL VIDEO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Hear From People We&apos;ve Built Businesses For
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              No stock photos. No fake names. Real business owners sharing their experience on camera.
            </p>
          </div>
        </section>

        {/* Featured Video - Antwain Davis */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
              >
                VIDEO TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Hear From Our Clients
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real stories from corporate professionals who leveraged their expertise into businesses they own.
              </p>
            </div>

            {/* Featured Video — Lead with healthcare vertical */}
            <div className="max-w-3xl mx-auto mb-12">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'white', border: '2px solid var(--color-accent)' }}
              >
                <div className="aspect-[4/5] bg-gray-900">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/matthew-p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                    Matthew P.
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
                    Healthcare Director → Staffing Agency Owner
                  </p>
                  <blockquote className="italic text-gray-600">
                    &quot;The systems and guidance made all the difference.&quot;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VIDEO_TESTIMONIALS.filter(v => v.id !== "matthew-p").map((video) => (
                <div
                  key={video.id}
                  className="rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                  style={{ backgroundColor: 'white' }}
                >
                  <div className="aspect-[4/5] bg-gray-900">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>
                      {video.name}
                    </h3>
                    <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      &quot;{video.quote}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-b bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> These are real client experiences shared voluntarily.
              Your results will vary based on effort, market conditions, experience, and many other factors.
              We do not guarantee any level of income or business success.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Ready to Have Us Build Your Business?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We build it. You own it. Start with a 20-minute strategy call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={GHL_LINKS.qualify} className="btn btn-primary">
                See If You Qualify →
              </Link>
              <Link href={GHL_LINKS.forms.bookCall} className="btn btn-secondary">
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
