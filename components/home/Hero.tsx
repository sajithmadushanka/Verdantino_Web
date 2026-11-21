/**
 * VERDANTINO — Hero Section (Section 02)
 *
 * Uses the existing hero.jpg from public/images/hero.jpg as the background image.
 * When you have a new hero photograph, replace the src prop on the <Image> component.
 *
 * Layout: Full-height split — text left, image panel right on desktop.
 *         Stacked (image below text) on mobile.
 */

import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-screen bg-canvas pt-20 overflow-hidden"
    >
      {/* Inner container: two-column on desktop */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 px-6 pb-16 pt-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:pb-0 lg:pt-24 xl:pt-28">

        {/* ── Text column ── */}
        <div className="relative z-10 py-8 lg:py-20">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold tracking-[0.45em] uppercase text-primary animate-fade-up">
            Grow Fresh. Live Better.
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="font-serif text-5xl font-medium leading-[1.08] text-ink animate-fade-up sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Fresh beginnings.
            <br />
            <span className="italic text-primary">Smarter growing.</span>
          </h1>

          {/* Description */}
          <p
            className="mt-7 max-w-lg text-base leading-relaxed text-muted animate-fade-up sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Discover a better way to grow fresh food. VERDANTINO brings together
            fresh microgreens, practical growing knowledge and innovative
            solutions to make growing at home more accessible.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <Button href="/fresh" variant="primary">
              Explore Verdantino Fresh
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#mission" variant="outline">
              Discover Our Mission
            </Button>
          </div>
        </div>

        {/* ── Image column ── */}
        {/*
          Image: existing hero.jpg — indoor growing / botanical scene
          Replace src with a new photograph path when available.
          Suggested future path: /images/home/hero.jpg
        */}
        <div
          className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[600px] lg:rounded-3xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Fresh VERDANTINO microgreens growing in a modern indoor environment"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Subtle overlay for depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8 lg:rounded-3xl"
          />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-muted/60">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-muted/40 to-transparent" />
      </div>
    </section>
  );
}
