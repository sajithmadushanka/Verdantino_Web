/**
 * VERDANTINO — Final CTA Section (Section 07)
 *
 * Minimal, visually strong closing section.
 * Canvas background with centered headline and single CTA → /fresh
 */

import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="final-cta-heading"
      className="scroll-mt-20 bg-primary px-6 py-28 sm:px-10 sm:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <p className="mb-5 text-xs font-semibold tracking-[0.45em] uppercase text-white/60">
          VERDANTINO
        </p>

        {/* Heading */}
        <h2
          id="final-cta-heading"
          className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let&apos;s grow something better.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Whether you&apos;re discovering fresh microgreens or exploring the
          possibilities of growing at home, welcome to VERDANTINO.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            href="/fresh"
            variant="outline"
            className="border-white/50 text-white hover:border-white hover:bg-white/10 hover:text-white px-10 py-3.5 text-sm"
          >
            Explore Verdantino Fresh
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
