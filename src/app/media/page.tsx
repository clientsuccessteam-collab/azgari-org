import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MEDIA, GHL_LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Media & Podcasts | Azgari Foundation",
  description: "Watch and listen to Azgari Lipshy's podcast appearances discussing entrepreneurship, SBA loans, and building profitable service businesses.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section 
          className="pt-32 pb-16 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, white 100%)' }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-primary)' }}
            >
              MEDIA & PODCASTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              As Seen & Heard On
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Azgari Lipshy shares insights on entrepreneurship, SBA financing, and building profitable service businesses.
            </p>
          </div>
        </section>

        {/* Podcast Grid - Uses MEDIA from config */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-12">
              {MEDIA.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          {index + 1}
                        </span>
                        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                          {item.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {item.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                          Discussion Highlights:
                        </h3>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-2 text-sm">
                              <span style={{ color: 'var(--color-accent)' }}>•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {item.externalUrl && (
                        <Link 
                          href={item.externalUrl}
                          className="btn btn-secondary inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Listen to Full Episode →
                        </Link>
                      )}
                    </div>
                    
                    {/* Video Embed Placeholder */}
                    {item.videoUrl ? (
                      <div className="lg:w-80 flex-shrink-0">
                        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                          <iframe 
                            src={item.videoUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="lg:w-80 flex-shrink-0">
                        <div 
                          className="aspect-video rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-cream)' }}
                        >
                          <div className="text-center p-6">
                            <span className="text-4xl mb-2 block">🎙️</span>
                            <span className="text-sm text-gray-500">Podcast Episode</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want Azgari on Your Podcast?
            </h2>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">
              Azgari is available for podcast interviews, speaking engagements, and media appearances on topics including entrepreneurship, SBA financing, and service business ownership.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
