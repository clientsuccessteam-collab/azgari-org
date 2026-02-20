import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function CTA() {
  return (
    <section
      className="py-16 md:py-24 text-white text-center"
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Own Your Path?
        </h2>
        <p className="opacity-90 max-w-xl mx-auto mb-4">
          160+ professionals already made the decision. The ones who succeeded had three things in common: capital, commitment, and urgency.
        </p>
        <p className="opacity-70 max-w-lg mx-auto mb-8 text-sm">
          If that&apos;s you, the next step is a 20-minute strategy call to evaluate your market fit and build your launch timeline. If it&apos;s not a fit, we&apos;ll tell you honestly.
        </p>

        <Link
          href={GHL_LINKS.qualify}
          className="btn btn-primary text-lg px-10 py-5"
        >
          Apply for a Strategy Call →
        </Link>
        <p className="text-sm text-white/70 mt-4">
          20 minutes. No credit card. Honest evaluation.
        </p>
      </div>
    </section>
  );
}
