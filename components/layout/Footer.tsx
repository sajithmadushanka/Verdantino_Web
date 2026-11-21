/**
 * VERDANTINO — Site Footer
 *
 * Sections:
 * - Brand logo + tagline
 * - Explore links (all four categories)
 * - Company links (Mission, Ecosystem, Knowledge)
 * - Connect (social placeholders, contact placeholder, copyright)
 */

import Link from "next/link";
import Logo from "@/components/Logo";
import { categories } from "@/data/categories";
import { Facebook } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

// Social links — update hrefs when official accounts are confirmed
const socials = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/verdantino/",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@verdantino.com",
    icon: TikTokIcon,
  },
];

const companyLinks = [
  { label: "Our Mission", href: "#mission" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "Knowledge", href: "#grower" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-ink text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" showTagline={true} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Growing a greener future through fresh food, knowledge and innovation.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
              Explore
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  {cat.href ? (
                    <Link
                      href={cat.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {cat.name}
                    </Link>
                  ) : (
                    <span className="text-sm text-white/35 cursor-default">
                      {cat.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
              Company
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
              Connect
            </p>
            <ul className="flex gap-3 mb-6" role="list">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`VERDANTINO on ${label}`}
                    title={`Follow VERDANTINO on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition duration-200 hover:border-white/50 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            {/* Contact placeholder — update when contact details are confirmed */}
            <p className="text-sm text-white/40 italic">
              Contact details coming soon.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} VERDANTINO ECO INNOVATIONS. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Fresh food growing &bull; Knowledge &bull; Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
