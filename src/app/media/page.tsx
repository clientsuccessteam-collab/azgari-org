import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MEDIA, GHL_LINKS } from "@/lib/links";
import MediaPromoPlayer from "./MediaPromoPlayer";

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

        {/* Featured Video */}
        <section className="py-16" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center" style={{ color: 'var(--color-primary)' }}>
              Featured Video
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Learn about our proven 8-phase launch framework
            </p>
            <MediaPromoPlayer />
          </div>
        </section>

        {/* Podcast Grid - Uses MEDIA from config */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-8">
              {MEDIA.map((item, index) => {
                const CardWrapper = item.externalUrl 
                  ? ({ children }: { children: React.ReactNode }) => (
                      <Link 
                        href={item.externalUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {children}
                      </Link>
                    )
                  : ({ children }: { children: React.ReactNode }) => <>{children}</>;
                
                return (
                  <CardWrapper key={item.id}>
                    <div 
                      className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all ${
                        item.externalUrl 
                          ? 'hover:shadow-xl hover:border-[var(--color-accent)] hover:scale-[1.005] cursor-pointer' 
                          : 'hover:shadow-lg'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Podcast Icon - Left on desktop */}
                        <div className="lg:w-48 flex-shrink-0 order-1 lg:order-none">
                          {item.videoUrl ? (
                            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                              <iframe 
                                src={item.videoUrl}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ) : (
                            <div 
                              className="aspect-square rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: 'var(--color-cream)' }}
                            >
                              <div className="text-center">
                                <span className="text-5xl block">🎙️</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content - Middle */}
                        <div className="flex-1 flex flex-col min-h-[200px]">
                          <div className="flex items-center gap-3 mb-3">
                            <span 
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                            >
                              {index + 1}
                            </span>
                            <h2 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                              {item.title}
                            </h2>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-primary)' }}>
                              Highlights:
                            </h3>
                            <ul className="space-y-1">
                              {item.highlights.slice(0, 4).map((highlight, i) => (
                                <li key={i} className="flex gap-2 text-sm text-gray-600">
                                  <span style={{ color: 'var(--color-accent)' }}>•</span>
                                  <span className="line-clamp-1">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* CTA - Always at bottom left */}
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <span 
                              className="inline-flex items-center gap-2 text-sm font-semibold"
                              style={{ color: 'var(--color-primary)' }}
                            >
                              {item.externalUrl ? (
                                <>
                                  Listen to Episode
                                  <span style={{ color: 'var(--color-accent)' }}>→</span>
                                </>
                              ) : (
                                <span className="text-gray-400">Coming Soon</span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
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
