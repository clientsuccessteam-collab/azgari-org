import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Problem from "@/components/Problem";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import ValueComparison from "@/components/ValueComparison";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import ValueStack from "@/components/ValueStack";
import Pricing from "@/components/Pricing";
import HomeFAQ from "@/components/HomeFAQ";
import Transparency from "@/components/Transparency";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HOOK — Promise + credibility */}
        <Hero />
        <TrustBanner />

        {/* 2. COST OF INACTION — Quantify what staying stuck costs them */}
        <Problem />

        {/* 3. PROOF IT WORKS — Hard numbers from real clients */}
        <Stats />

        {/* 4. HOW IT WORKS — 8-step framework (simple, clear) */}
        <Process />

        {/* 5. COMPARE ALTERNATIVES — Franchise vs MBA vs DIY vs Azgari */}
        <ValueComparison />

        {/* 6. THE OUTCOME — Financial proof + life transformation */}
        <Transformation />

        {/* 7. SOCIAL PROOF — Real client testimonials */}
        <Testimonials />

        {/* 8. VALUE STACK — Everything included + what it costs separately */}
        <ValueStack />

        {/* 9. PRICING — All tiers with decision tree (after value is built) */}
        <Pricing />

        {/* 10. OBJECTION HANDLING */}
        <HomeFAQ />
        <Transparency />

        {/* 11. FINAL CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
