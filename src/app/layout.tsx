import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/app/JsonLd";

export const metadata: Metadata = {
  title: "Start a Service Business in 180 Days | Azgari Foundation",
  description: "Launch a profitable local service business in 180 days — no franchise fees, no royalties, full ownership. Expert guidance from idea to revenue.",
  keywords: "service business, SBA loan, franchise alternative, business consulting, business ownership",
  alternates: {
    canonical: "https://azgari.org",
  },
  openGraph: {
    title: "Build Real Wealth. Own 100% | Azgari Foundation",
    description: "Launch a profitable local service business in 180 days — no franchise fees, no royalties.",
    type: "website",
    url: "https://azgari.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Real Wealth. Own 100% | Azgari Foundation",
    description: "Launch a profitable local service business in 180 days.",
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
      </body>
    </html>
  );
}
