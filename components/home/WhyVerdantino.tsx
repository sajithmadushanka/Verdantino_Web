/**
 * VERDANTINO — Why VERDANTINO? Section (Section 05)
 *
 * Three core brand principles with Lucide icons.
 * Clean editorial layout, easy to scan.
 */

import { Leaf, BookOpen, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Principle {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    number: "01",
    icon: Leaf,
    title: "Rooted in Nature",
    description:
      "We value natural growing processes and thoughtful cultivation practices that bring people closer to fresh food.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Driven by Knowledge",
    description:
      "We believe understanding plants, growing environments and cultivation science is the foundation of better growing.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Inspired by Innovation",
    description:
      "We explore practical and intelligent solutions that make growing fresh food more accessible.",
  },
];

export default function WhyVerdantino() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="scroll-mt-20 bg-mist px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="Why VERDANTINO?"
            heading="Growing with purpose. Innovating for tomorrow."
            description="We believe the future of fresh food starts with a better understanding of how things grow."
            headingId="why-heading"
            align="left"
          />
        </div>

        {/* Principles grid */}
        <ul
          className="grid gap-8 md:grid-cols-3"
          role="list"
        >
          {principles.map(({ number, icon: Icon, title, description }) => (
            <li
              key={number}
              className="relative flex flex-col gap-5 border-t border-border pt-8"
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between">
                <span
                  className="text-xs tracking-[0.3em] text-sage"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/25 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
