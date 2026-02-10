"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GHL_LINKS } from "@/lib/links";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-white.svg" 
            alt="Azgari Logo" 
            width={32} 
            height={28}
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-white tracking-wide">AZGARI FOUNDATION</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="#process" className="font-medium text-white/90 hover:text-amber-400 transition-colors">How It Works</Link></li>
          <li><Link href="#pricing" className="font-medium text-white/90 hover:text-amber-400 transition-colors">Pricing</Link></li>
          <li><Link href="/case-studies" className="font-medium text-white/90 hover:text-amber-400 transition-colors">Case Studies</Link></li>
          <li><Link href="/about" className="font-medium text-white/90 hover:text-amber-400 transition-colors">About</Link></li>
          <li><Link href="https://azgari.blog" className="font-medium text-white/90 hover:text-amber-400 transition-colors">Blog</Link></li>
          <li><Link href="/contact" className="font-medium text-white/90 hover:text-amber-400 transition-colors">Contact</Link></li>
        </ul>

        <Link href={GHL_LINKS.qualify} className="hidden md:block btn btn-primary">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 border-t border-white/10" style={{ backgroundColor: 'var(--color-primary)' }}>
          <ul className="flex flex-col gap-4">
            <li><Link href="#process" className="block text-white/90 hover:text-amber-400" onClick={() => setMobileOpen(false)}>How It Works</Link></li>
            <li><Link href="#pricing" className="block text-white/90 hover:text-amber-400" onClick={() => setMobileOpen(false)}>Pricing</Link></li>
            <li><Link href="/case-studies" className="block text-white/90 hover:text-amber-400">Case Studies</Link></li>
            <li><Link href="/about" className="block text-white/90 hover:text-amber-400">About</Link></li>
            <li><Link href="https://azgari.blog" className="block text-white/90 hover:text-amber-400">Blog</Link></li>
            <li><Link href="/contact" className="block text-white/90 hover:text-amber-400">Contact</Link></li>
            <li><Link href={GHL_LINKS.qualify} className="btn btn-primary text-center mt-2">Get Started</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
