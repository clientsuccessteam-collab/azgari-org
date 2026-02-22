import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import JsonLd from "@/app/JsonLd";

export const metadata: Metadata = {
  title: "We Build Service Businesses You Own 100% | Azgari Foundation",
  description: "Done-for-you business building. We select the business, set up operations, hire your team, and deliver paying customers. You own 100% — no franchise fees, no royalties.",
  keywords: "service business, done for you business, franchise alternative, business building, business ownership",
  alternates: {
    canonical: "https://azgari.org",
  },
  openGraph: {
    title: "We Build Service Businesses You Own 100% | Azgari Foundation",
    description: "Done-for-you business building. We handle everything — you become an owner, not an operator. No franchise fees. No royalties. Full ownership.",
    type: "website",
    url: "https://azgari.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Build Service Businesses You Own 100% | Azgari Foundation",
    description: "Done-for-you business building. You invest, we build, you own everything.",
  },
};

const organizationJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Azgari Foundation",
  url: "https://azgari.org",
  description:
    "Business consulting helping professionals launch and acquire profitable local service businesses",
  foundingLocation: {
    "@type": "Place",
    address: "Austin, TX",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@azgari.org",
    contactType: "customer service",
  },
  sameAs: ["https://azgari.blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <JsonLd data={organizationJsonLd} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
