import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
