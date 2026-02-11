"use client";

const videos = [
  {
    id: "logo-reveal-founder",
    title: "Brand Introduction",
    description: "Meet Azgari Lipshy and the Azgari Foundation — helping professionals build real wealth through service business ownership.",
    src: "/videos/logo-reveal-founder.mp4",
    poster: "/images/founder/azgari-headshot.jpg",
  },
  {
    id: "stats-reveal",
    title: "Client Results",
    description: "Animated statistics showcasing aggregate client outcomes — 160+ businesses launched, $285K average first-year revenue.",
    src: "/videos/stats-reveal.mp4",
  },
  {
    id: "testimonial-with-host",
    title: "Client Testimonial",
    description: "Real success stories from service business owners who launched with Azgari Foundation's proven framework.",
    src: "/videos/testimonial-with-host.mp4",
  },
  {
    id: "social-quote-azgari",
    title: "Founder Insights",
    description: "Wisdom from Azgari Lipshy on building businesses that fund your life, not consume it.",
    src: "/videos/social-quote-azgari.mp4",
    poster: "/images/founder/azgari-speaking.jpg",
  },
  {
    id: "service-highlight",
    title: "Service Business Spotlight",
    description: "A closer look at profitable service business models — startup costs, revenue potential, and margins.",
    src: "/videos/service-highlight.mp4",
  },
];

export default function VideoShowcase() {
  return (
    <div className="space-y-16">
      {videos.map((video) => (
        <div key={video.id}>
          <div className="mb-4">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              {video.title}
            </h2>
            <p className="text-gray-600">{video.description}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black">
            <video
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className="w-full"
              style={{ aspectRatio: video.id.includes("vertical") ? "9/16" : "16/9" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ))}

      {/* Social Media Formats Section */}
      <div className="mt-20">
        <h2
          className="text-2xl font-bold mb-2 text-center"
          style={{ color: "var(--color-primary)" }}
        >
          Social Media Ready
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Vertical formats optimized for Instagram Reels, TikTok, and YouTube Shorts
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div>
            <h3 className="font-semibold mb-3 text-center" style={{ color: "var(--color-primary)" }}>
              Founder Quote (Vertical)
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black mx-auto" style={{ maxWidth: "300px" }}>
              <video
                src="/videos/social-quote-azgari-vertical.mp4"
                poster="/images/founder/azgari-headshot.jpg"
                controls
                playsInline
                preload="metadata"
                className="w-full"
                style={{ aspectRatio: "9/16" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-center" style={{ color: "var(--color-primary)" }}>
              Client Quote (Vertical)
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-black mx-auto" style={{ maxWidth: "300px" }}>
              <video
                src="/videos/social-quote.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full"
                style={{ aspectRatio: "9/16" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
