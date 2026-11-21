"use client";

/**
 * VERDANTINO — Primary Header / Navigation
 *
 * Designed to seamlessly blend with the primary green hero section.
 * Features:
 * - Sticky navigation with consistent light logo and high-contrast links across all scroll states
 * - Responsive desktop nav + mobile hamburger drawer
 * - Primary CTA button: "Explore Fresh" → /fresh (canvas tone for high contrast)
 * - Zero jumpy tone changes across scroll states
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route-level navigation (anchor clicks)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest/95 backdrop-blur-md border-b border-white/15 shadow-lg shadow-black/10"
          : "bg-forest/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14"
      >
        {/* Logo — tone="light" for pristine readability against forest green */}
        <Logo tone="light" showTagline={true} />

        {/* Desktop navigation */}
        <ul
          className="hidden items-center gap-8 lg:flex"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href="/fresh"
            variant="secondary"
            className="text-sm py-2.5 px-6 font-medium"
          >
            Explore Fresh
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-forest/98 px-6 pb-6 pt-4 lg:hidden animate-fade-in"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-mist"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-white/10 pt-4">
            <Button
              href="/fresh"
              variant="secondary"
              className="w-full justify-center"
              onClick={handleNavClick}
            >
              Explore Fresh
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
