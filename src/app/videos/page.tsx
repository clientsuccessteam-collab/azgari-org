import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoShowcase from "./VideoShowcase";

export const metadata: Metadata = {
  title: "Video Content | Azgari Foundation",
  description:
    "Watch animated videos showcasing Azgari Foundation's service business launch process, client results, and success stories.",
};

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cream) 0%, white 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-primary)",
              }}
            >
              VIDEO CONTENT
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              See Our Story in Motion
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore animated videos about our launch process, client success
              metrics, and real testimonials from service business owners.
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <VideoShowcase />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
