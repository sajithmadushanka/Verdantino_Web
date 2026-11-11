import { Facebook } from "lucide-react";
import Logo from "./Logo";

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

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-8 bg-forest px-6 py-16 text-white sm:px-10 lg:px-14"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo tone="light" />
          <p className="mt-4 font-serif text-xl italic text-mist">
            Grow Fresh. Live Greener.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-mist/70">
            Follow Us
          </p>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`VERDANTINO on ${label}`}
                  title={`Follow VERDANTINO on ${label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-300 hover:border-white hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} VERDANTINO ECO INNOVATIONS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
