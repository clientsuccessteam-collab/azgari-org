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
import MissionWrapper from "@/components/MissionWrapper";
import ImpactModule from "@/components/ImpactModule";
import ScholarshipCallout from "@/components/ScholarshipCallout";
import Qualification from "@/components/Qualification";
import CallPreview from "@/components/CallPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HOOK — Promise + qualification-first hero */}
        <Hero />
        <MissionWrapper variant="hero" />
        <TrustBanner />

        {/* 2. PROBLEM — Cost of inaction (why now) */}
        <Problem />

        {/* 3. MECHANISM — How it works (process certainty before proof) */}
        <Process />

        {/* 4. COMPARE ALTERNATIVES — Franchise vs MBA vs DIY vs Azgari */}
        <ValueComparison />

        {/* 5. PROOF — Numbers that back the mechanism */}
        <Stats />

        {/* 6. OUTCOMES — Financial + life transformation */}
        <Transformation />

        {/* 7. SOCIAL PROOF — Real client testimonials */}
        <Testimonials />

        {/* 8. QUALIFICATION — Who this is for / not for (filter before pricing) */}
        <Qualification />

        {/* 9. IMPACT — Mission bridge into value/pricing */}
        <ImpactModule />

        {/* 10. VALUE STACK — Everything included + what it costs separately */}
        <ValueStack />

        {/* 11. PRICING — All tiers with decision tree */}
        <Pricing />

        {/* 11.5. SCHOLARSHIPS — Compliance visibility */}
        <div className="max-w-4xl mx-auto px-6 pt-2 pb-8">
          <ScholarshipCallout variant="banner" />
        </div>

        {/* 12. OBJECTION HANDLING */}
        <HomeFAQ />
        <Transparency />

        {/* 13. CALL PREVIEW — What happens on the call (reduce uncertainty) */}
        <CallPreview />

        {/* 14. FINAL CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
