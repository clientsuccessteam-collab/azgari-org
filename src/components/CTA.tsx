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
          Ready to Build Something That&apos;s Yours?
        </h2>
        <p className="opacity-90 max-w-xl mx-auto mb-8">
          Join 160+ professionals who took the first step toward owning a profitable service business — with expert guidance at every stage.
        </p>

        <Link
          href={GHL_LINKS.qualify}
          className="btn btn-primary text-lg px-10 py-5"
        >
          Book Your Free Discovery Call →
        </Link>
        <p className="text-sm text-white/70 mt-4">
          20 minutes. No credit card. No commitment.
        </p>
      </div>
    </section>
  );
}
