"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Azgari Foundation (501(c)(3) nonprofit) navigation. Links point only to
// charitable / educational surfaces on azgari.org. Any paid-program or
// strategy-session flows live on the for-profit sister site at azgari.com
// and are reached via 301 redirects from the old commercial routes.
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/guides", label: "Free Resources" },
  { href: "/tools", label: "Free Tools" },
  { href: "/case-studies", label: "Participant Stories" },
  { href: "/faq", label: "FAQ" },
  { href: "https://azgari.blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-white.svg"
            alt="Azgari Foundation Logo"
            width={32}
            height={28}
            className="h-8 w-auto"
          />
          <span className="text-base sm:text-xl font-bold text-white tracking-wide">
            AZGARI FOUNDATION
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-medium text-white/90 hover:text-amber-400 transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/scholarships"
          className="hidden lg:block btn btn-primary"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.8125rem" }}
        >
          Apply for a Scholarship
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 py-4 border-t border-white/10"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white/90 hover:text-amber-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/scholarships"
                className="btn btn-primary text-center mt-2 block"
                style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
                onClick={() => setMobileOpen(false)}
              >
                Apply for a Scholarship
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
