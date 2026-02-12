import Link from "next/link";

interface ScholarshipCalloutProps {
  variant?: "card" | "banner";
}

export default function ScholarshipCallout({ variant = "card" }: ScholarshipCalloutProps) {
  if (variant === "banner") {
    return (
      <div className="py-3 px-6 text-center rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
        <p className="text-sm text-gray-600">
          Scholarships available for veterans, foster youth, single parents &amp; first-generation entrepreneurs.{" "}
          <Link href="/scholarships" className="font-medium underline" style={{ color: 'var(--color-accent)' }}>
            Learn more
          </Link>
        </p>
      </div>
    );
  }

  // Default: card variant
  return (
    <div className="rounded-2xl p-6 sm:p-8 text-center border-2 border-dashed border-gray-200">
      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
        SCHOLARSHIPS AVAILABLE
      </p>
      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
        Business Training for Those Who Need It Most
      </h3>
      <p className="text-sm text-gray-600 mb-2 max-w-lg mx-auto">
        We fund scholarships for foster youth, veterans, single parents, and first-generation entrepreneurs.
        10% of every paid enrollment goes directly to scholarship funding.
      </p>
      <Link href="/scholarships" className="btn btn-secondary mt-4 inline-block">
        Learn About Scholarships →
      </Link>
    </div>
  );
}
