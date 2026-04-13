import type { NextConfig } from "next";

// Commercial program pricing, enrollment, strategy-session booking, and
// paid educational products are operated by the for-profit sister brand
// at azgari.com. The .org domain is a 501(c)(3) nonprofit surface and
// redirects all commercial paths to azgari.com via permanent (301)
// redirects so inbound links and SEO signals transfer cleanly.
const AZGARI_COM = "https://azgari.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Commercial program funnels (removed from .org for 501(c)(3) compliance) ──
      { source: "/services", destination: AZGARI_COM, permanent: true },
      { source: "/qualify", destination: AZGARI_COM, permanent: true },
      { source: "/acquisition", destination: AZGARI_COM, permanent: true },
      { source: "/webinar", destination: AZGARI_COM, permanent: true },
      // ── Paid digital products (no free courses exist, so the entire page moves) ──
      { source: "/courses", destination: AZGARI_COM, permanent: true },

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
