import Image from "next/image";
import Link from "next/link";
import { NONPROFIT } from "@/lib/links";

const footerLinks = {
  programs: [
    { label: "Services & Pricing", href: "/services" },
    { label: "Acquisition Advisory", href: "/acquisition" },
    { label: "Scholarships", href: "/scholarships" },
  ],
  resources: [
    { label: "Free Training", href: "/webinar" },
    { label: "Blog", href: "https://azgari.blog" },
    { label: "Courses", href: "/courses" },
    { label: "Free Guides", href: "/guides" },
    { label: "Business Tools", href: "/tools" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="text-white py-12 md:py-16" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:gap-12 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo-white.svg" 
                alt="Azgari" 
                width={28} 
                height={24}
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold">AZGARI FOUNDATION</span>
            </div>
            <p className="text-white/80 text-sm">
              {NONPROFIT.missionShort}
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            {footerLinks.programs.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="block text-white/80 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="block text-white/80 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-amber-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Future: Financials link */}
            {/* Future: Governance link */}
            {/* Future: Impact Reports link */}
          </div>
        </div>

        {/* Nonprofit Compliance */}
        <div className="border-t border-white/10 pt-6 mb-6 text-center">
          <p className="text-xs text-white/50">
            {NONPROFIT.type} · EIN: {NONPROFIT.ein}
          </p>
          <p className="text-xs text-white/40 mt-2 max-w-2xl mx-auto">
            {NONPROFIT.reinvestmentStatement}
          </p>
          <p className="text-xs text-white/30 mt-1 max-w-2xl mx-auto">
            {NONPROFIT.resultsDisclaimer}
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} {NONPROFIT.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
