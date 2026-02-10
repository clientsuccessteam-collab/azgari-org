import Link from "next/link";

interface CardProps {
  /** Card title */
  title: string;
  /** Optional price displayed top-right */
  price?: string;
  /** Optional subtitle/tagline below title */
  subtitle?: string;
  /** Main description text */
  description?: string;
  /** Feature list items */
  features?: string[];
  /** Optional "Perfect for:" text */
  perfectFor?: string;
  /** CTA button text */
  ctaText: string;
  /** CTA link href */
  ctaHref: string;
  /** Opens in new tab */
  external?: boolean;
  /** Featured card styling */
  featured?: boolean;
  /** Tag displayed above card */
  tag?: string | null;
  /** Icon (emoji or component) */
  icon?: string;
  /** Primary or secondary button style */
  ctaVariant?: "primary" | "secondary";
  /** Optional note below price */
  priceNote?: string;
}

export default function Card({
  title,
  price,
  subtitle,
  description,
  features,
  perfectFor,
  ctaText,
  ctaHref,
  external = false,
  featured = false,
  tag,
  icon,
  ctaVariant = "primary",
  priceNote,
}: CardProps) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-xl`}
      style={{
        border: featured ? "2px solid var(--color-accent)" : "2px solid #e5e7eb",
        boxShadow: featured ? "0 8px 30px rgba(212, 160, 41, 0.2)" : undefined,
      }}
    >
      {/* Tag */}
      {tag && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
          style={{
            backgroundColor: featured ? "var(--color-accent)" : "var(--color-primary)",
            color: featured ? "var(--color-primary-dark)" : "white",
          }}
        >
          {tag}
        </span>
      )}

      {/* Header: Icon + Title + Price */}
      <div className="mb-4">
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        
        <div className="flex justify-between items-start gap-3">
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            {title}
          </h3>
          {price && (
            <span
              className="text-xl font-bold whitespace-nowrap flex-shrink-0"
              style={{ color: "var(--color-accent)" }}
            >
              {price}
            </span>
          )}
        </div>
        
        {priceNote && (
          <p className="text-sm text-gray-500 mt-1">{priceNote}</p>
        )}
        
        {subtitle && (
          <p className="text-gray-600 italic mt-2">&quot;{subtitle}&quot;</p>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}

      {/* Features List - grows to fill space */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span style={{ color: "var(--color-accent)" }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Perfect For */}
      {perfectFor && (
        <div
          className="text-sm p-3 rounded-lg mb-4"
          style={{ backgroundColor: "var(--color-cream)" }}
        >
          <span className="font-semibold">Perfect for: </span>
          {perfectFor}
        </div>
      )}

      {/* CTA - always at bottom */}
      <Link
        href={ctaHref}
        className={`btn w-full text-center mt-auto ${
          ctaVariant === "primary" ? "btn-primary" : "btn-secondary"
        }`}
        {...linkProps}
      >
        {ctaText}
      </Link>
    </div>
  );
}
