"use client";

/**
 * VERDANTINO — Primary Header / Navigation
 *
 * Features:
 * - Sticky positioning with a subtle background that appears on scroll
 * - Responsive desktop nav + mobile hamburger drawer
 * - CTA button: "Explore Fresh" → /fresh
 * - Logo tone stays consistent (dark on canvas background)
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
          ? "bg-canvas/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-canvas/80 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14"
      >
        {/* Logo */}
        <Logo tone="dark" showTagline={true} />

        {/* Desktop navigation */}
        <ul
          className="hidden items-center gap-8 lg:flex"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/fresh" variant="primary" className="text-sm py-2.5 px-6">
            Explore Fresh
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-sage/20 lg:hidden"
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
          className="border-t border-border/40 bg-canvas px-6 pb-6 pt-4 lg:hidden animate-fade-in"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-sage/20 hover:text-primary"
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-border/40 pt-4">
            <Button
              href="/fresh"
              variant="primary"
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
