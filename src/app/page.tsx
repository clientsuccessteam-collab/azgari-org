import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Transformation from "@/components/Transformation";
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
        <Problem />
        <Process />
        <Stats />
        <Transformation />
        <Pricing />
        <Transparency />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
