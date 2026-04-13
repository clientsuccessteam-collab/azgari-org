import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionBanner from "@/components/MissionBanner";
import VideoShowcase from "./VideoShowcase";

export const metadata: Metadata = {
  title: "Video Content | Azgari Foundation",
  description:
    "Educational videos from Azgari Foundation showcasing the service business launch curriculum, participant reflections, and community education.",
};

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <MissionBanner variant="full" />
      <main>
        {/* Hero */}
        <section
          className="pt-12 pb-16 text-center"
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
              See the Foundation&apos;s Story in Motion
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore educational videos about the Foundation&apos;s launch curriculum, program participant outcomes, and reflections from service business graduates.
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
