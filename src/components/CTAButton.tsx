import Link from "next/link";
import { DEFAULT_CTA } from "@/lib/links";

interface CTAButtonProps {
  /** Button text (defaults to "See If You Qualify →") */
  text?: string;
  /** Link URL (defaults to main GHL qualify page) */
  href?: string;
  /** Button variant */
  variant?: "primary" | "secondary";
  /** Additional CSS classes */
  className?: string;
  /** Full width button */
  fullWidth?: boolean;
  /** Large size */
  large?: boolean;
}

export default function CTAButton({
  text = DEFAULT_CTA.text,
  href = DEFAULT_CTA.href,
  variant = "primary",
  className = "",
  fullWidth = false,
  large = false,
}: CTAButtonProps) {
  const baseStyles = "btn";
  const variantStyles = variant === "primary" ? "btn-primary" : "btn-secondary";
  const widthStyles = fullWidth ? "w-full" : "";
  const sizeStyles = large ? "text-lg px-10 py-5" : "";
  
  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variantStyles} ${widthStyles} ${sizeStyles} ${className}`.trim()}
    >
      {text}
    </Link>
  );
}

// Pre-configured CTA variants for common use cases
export function QualifyCTA({ className = "", large = false }: { className?: string; large?: boolean }) {
  return <CTAButton text="See If You Qualify →" large={large} className={className} />;
}

export function GetStartedCTA({ className = "" }: { className?: string }) {
  return <CTAButton text="Get Started" className={className} />;
}

export function LearnMoreCTA({ href, className = "" }: { href: string; className?: string }) {
  return <CTAButton text="Learn More →" href={href} variant="secondary" className={className} />;
}

export function ContactCTA({ className = "" }: { className?: string }) {
  return <CTAButton text="Let's Talk →" href="/contact" variant="secondary" className={className} />;
}
