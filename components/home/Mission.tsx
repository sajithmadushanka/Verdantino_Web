/**
 * VERDANTINO — Our Mission Section (Section 03)
 *
 * Editorial split layout: text on the left, image placeholder on the right.
 * Image placeholder: /images/home/mission.svg
 * Replace ImagePlaceholder with <Image src="/images/home/mission.jpg" ... />
 * when real photography is available.
 */

import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="scroll-mt-20 bg-mist px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              heading="Growing a greener future, one seed at a time."
              headingId="mission-heading"
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                At VERDANTINO, we believe growing fresh food should be simple,
                accessible and rewarding.
              </p>
              <p>
                Our journey begins with fresh microgreens, while our vision
                extends towards helping people cultivate their own food through
                knowledge, sustainable growing practices and accessible
                technology.
              </p>
            </div>

            {/* Brand image — full wordmark for brand presence */}
            <div className="mt-10">
              {/* Decorative rule with text */}
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70">
                  ECO INNOVATIONS
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>

          {/* Image column */}
          {/*
            Image placeholder: mission photography
            Suggested path when ready: /images/home/mission.jpg
            Aspect ratio: 4/3 (landscape)
            Subject: fresh plants, microgreens, or indoor cultivation environment
          */}
          <div className="relative">
            <ImagePlaceholder
              label="Mission — Indoor cultivation"
              aspectRatio="4/3"
              className="rounded-2xl"
            />
            {/* Subtle accent element */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border border-sage/40 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
