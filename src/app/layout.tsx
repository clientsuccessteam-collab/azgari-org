import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import JsonLd from "@/app/JsonLd";

export const metadata: Metadata = {
  title: "Azgari Foundation | 501(c)(3) Nonprofit Entrepreneurship Education",
  description: "Azgari Foundation is a 501(c)(3) nonprofit providing entrepreneurship education, mentorship, and workforce development programs to increase economic mobility and expand access to business ownership in underserved communities.",
  keywords: "501(c)(3) nonprofit, entrepreneurship education, business ownership education, mentorship program, workforce development, scholarships, economic mobility",
  alternates: {
    canonical: "https://azgari.org",
  },
  openGraph: {
    title: "Azgari Foundation | 501(c)(3) Nonprofit Entrepreneurship Education",
    description: "A 501(c)(3) nonprofit delivering entrepreneurship education, mentorship, and workforce development to expand access to business ownership in underserved communities.",
    type: "website",
    url: "https://azgari.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azgari Foundation | 501(c)(3) Nonprofit Entrepreneurship Education",
    description: "A 501(c)(3) nonprofit expanding access to business ownership through entrepreneurship education and mentorship.",
  },
};

const organizationJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Azgari Foundation",
  url: "https://azgari.org",
  description:
    "501(c)(3) nonprofit providing entrepreneurship education, mentorship, and workforce development programs for underserved communities.",
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
