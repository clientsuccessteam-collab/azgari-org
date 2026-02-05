import Link from "next/link";

export default function CTA() {
  return (
    <section 
      className="py-24 text-white text-center"
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something Real?
        </h2>
        <p className="opacity-90 max-w-xl mx-auto mb-8">
          Take the first step toward owning a profitable service business — with expert guidance every step of the way.
        </p>
        
        <Link 
          href="https://go.azgari.org/landing-page-d" 
          className="btn btn-primary text-lg px-10 py-5"
        >
          See If You Qualify →
        </Link>
      </div>
    </section>
  );
}
