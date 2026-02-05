import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Start a Service Business in 180 Days | Azgari Foundation",
  description: "Launch a profitable local service business in 180 days — no franchise fees, no royalties, full ownership. Expert guidance from idea to revenue.",
  keywords: "service business, SBA loan, franchise alternative, business consulting, business ownership",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
