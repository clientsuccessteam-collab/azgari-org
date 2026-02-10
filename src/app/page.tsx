import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Transparency from "@/components/Transparency";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Problem />
        <Process />
        <Stats />
        <Transformation />
        <Testimonials />
        <Pricing />
        <Transparency />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
