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
          Ready to Learn More About the Flagship Program?
        </h2>
        <p className="opacity-90 max-w-xl mx-auto mb-4">
          The next step is a 20-minute strategy session with a program advisor to review your situation and discuss whether the flagship entrepreneurship program is the right educational fit.
        </p>

        <Link
          href={GHL_LINKS.qualify}
          className="btn btn-primary text-lg px-10 py-5"
        >
          Apply for a Strategy Session →
        </Link>
        <p className="text-sm text-white/70 mt-4">
          20 minutes. No credit card required.
        </p>
      </div>
    </section>
  );
}
