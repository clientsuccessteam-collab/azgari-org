import type { NextConfig } from "next";

// Commercial program pricing, enrollment, strategy-session booking, and
// paid educational products are operated by the for-profit sister brand
// at azgari.com. The .org domain is a 501(c)(3) nonprofit surface and
// redirects all commercial paths to azgari.com via permanent (301)
// redirects so inbound links and SEO signals transfer cleanly.
const AZGARI_COM = "https://azgari.com";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // The AI Agency Business Owner Training pilot site is a static page
        // served from public/index.html as the azgari.org homepage.
        { source: "/", destination: "/index.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      // ── Commercial program funnels (removed from .org for 501(c)(3) compliance) ──
      { source: "/services", destination: AZGARI_COM, permanent: true },
      { source: "/qualify", destination: AZGARI_COM, permanent: true },
      { source: "/acquisition", destination: AZGARI_COM, permanent: true },
      { source: "/webinar", destination: AZGARI_COM, permanent: true },
      { source: "/courses", destination: AZGARI_COM, permanent: true },

      // ── Legacy nonprofit routes → pilot-program homepage sections ──
      { source: "/about", destination: "/#team", permanent: true },
      { source: "/scholarships", destination: "/#apply", permanent: true },
      { source: "/funders", destination: "/#funders", permanent: true },
      { source: "/transparency", destination: "/#funders", permanent: true },
      { source: "/contact", destination: "/#faq", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/guides", destination: "/", permanent: true },
      { source: "/tools", destination: "/", permanent: true },
      { source: "/media", destination: "/", permanent: true },
      { source: "/videos", destination: "/", permanent: true },
      { source: "/case-studies", destination: "/", permanent: true },
      { source: "/state", destination: "/", permanent: true },
      { source: "/state/:slug", destination: "/", permanent: true },
      { source: "/privacy", destination: "/privacy.html", permanent: true },
      { source: "/terms", destination: "/privacy.html", permanent: true },

      // ── Pre-existing lead-magnet shortcuts (retained) ──
      {
        source: "/checklist",
        destination: "https://go.azgari.org/product-details/product/699b4bc7ea607e2e0d1a7f29",
        permanent: true,
      },
      {
        source: "/franchise-kit",
        destination: "https://go.azgari.org/product-details/product/691a6125c9b6806d37b01793",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
