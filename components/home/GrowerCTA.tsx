/**
 * VERDANTINO — Become a Microgreens Grower Section (Section 06)
 *
 * Editorial split layout: text left, large image placeholder right.
 * Image placeholder: /images/home/grower.svg
 * Replace ImagePlaceholder with <Image src="/images/home/grower.jpg" ... />
 * when real photography is available.
 *
 * Subject suggestion: hands harvesting microgreens, or small indoor growing setup.
 */

import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { ArrowRight } from "lucide-react";

export default function GrowerCTA() {
  return (
    <section
      id="grower"
      aria-labelledby="grower-heading"
      className="scroll-mt-20 bg-canvas px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text column — left on desktop */}
          <div>
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-semibold tracking-[0.45em] uppercase text-primary">
              Start Your Growing Journey
            </p>

            <h2
              id="grower-heading"
              className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl"
            >
              Your growing journey starts here.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Curious about growing your own microgreens? Discover the basics of
              cultivation, learn about seeds and growing environments, and
              explore the possibilities of growing fresh food at home.
            </p>

            <div className="mt-10">
              {/*
                Link destination: will connect to /education or dedicated growing guide
                when VERDANTINO EDUCATION launches. Using #ecosystem as interim anchor.
              */}
              <Button href="#ecosystem" variant="primary">
                Discover Growing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Image column — right on desktop */}
          {/*
            Image placeholder: grower photography
            Suggested path when ready: /images/home/grower.jpg
            Aspect ratio: 3/4 (portrait) works well for a person with plants
            or use 4/3 (landscape) for a growing setup overview
            Subject: hands harvesting microgreens, or indoor growing setup
          */}
          <div className="relative order-first lg:order-last">
            <ImagePlaceholder
              label="Grower — Harvesting microgreens"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-3 -bottom-3 h-full w-full rounded-2xl border border-sage/40 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
