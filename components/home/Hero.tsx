/**
 * VERDANTINO — Hero Section (Section 02)
 *
 * Primary Brand Green (#527D43) background for immediate brand immersion.
 * Uses the existing hero.jpg from public/images/hero.jpg as the feature image.
 *
 * Layout: Full-height split — text left, image panel right on desktop.
 *         Stacked on mobile.
 */

import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-screen bg-forest text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Ambient botanical background lighting aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 right-[-10%] h-[550px] w-[550px] rounded-full bg-botanical/25 blur-[140px]" />
        <div className="absolute top-1/2 left-[-15%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-sage/20 blur-[150px]" />
        <div className="absolute -bottom-32 right-[20%] h-[400px] w-[400px] rounded-full bg-botanical/20 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/95 to-forest" />
      </div>

      {/* Inner container: two-column on desktop */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-14">

        {/* ── Text column ── */}
        <div className="relative z-10 py-6 lg:py-12">
          {/* Eyebrow badge */}
          <div
            className="mb-8 inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span
              className="h-2 w-2 rounded-full bg-sage animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-mist">
              Grow Fresh. Live Better.
            </span>
          </div>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="font-serif text-5xl font-medium leading-[1.08] text-white animate-fade-up sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Fresh beginnings.
            <br />
            <span className="italic text-mist">Smarter growing.</span>
          </h1>

          {/* Description */}
          <p
            className="mt-7 max-w-lg text-base leading-relaxed text-white/85 animate-fade-up sm:text-lg"
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
            <Button href="/fresh" variant="secondary">
              Explore Verdantino Fresh
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#mission" variant="outline-light">
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
          className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[560px] lg:rounded-3xl shadow-2xl shadow-black/25 ring-1 ring-white/20 animate-fade-in"
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
          {/* Subtle gradient vignette for depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent"
          />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 lg:flex"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-mist/60">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-mist/50 to-transparent" />
      </div>
    </section>
  );
}
