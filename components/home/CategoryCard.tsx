/**
 * VERDANTINO — Category Card Component
 *
 * Renders a single ecosystem category card.
 * Active (available) categories: show CTA button, full color treatment.
 * Coming-soon categories: show status badge, muted, no link interaction.
 *
 * Image placeholder comments indicate the expected final image path.
 * Replace ImagePlaceholder with <Image ... /> when photography is ready.
 */

import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const isAvailable = category.status === "available";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        isAvailable
          ? "border-sage/40 bg-mist hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8"
          : "border-border/60 bg-mist/50"
      }`}
      aria-label={`${category.name} — ${isAvailable ? "Available now" : "Coming soon"}`}
    >
      {/* Category image */}
      {/*
        Image: category photography placeholder
        Replace ImagePlaceholder with:
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={category.imagePath}  ← update this path in data/categories.ts
              alt={category.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
            />
          </div>
        Suggested image dimensions: 800×600px minimum
      */}
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          label={`${category.shortName} — Photography`}
          aspectRatio="4/3"
          className={`transition-opacity duration-300 ${
            isAvailable ? "opacity-100" : "opacity-60"
          }`}
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-white">
              <span
                className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"
                aria-hidden="true"
              />
              Available
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-ink/60 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-white/80 backdrop-blur-sm">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Number */}
        <p
          className="mb-2 text-xs tracking-[0.3em] text-sage"
          aria-hidden="true"
        >
          {category.number}
        </p>

        {/* Name */}
        <h3
          className={`font-serif text-xl font-medium leading-tight ${
            isAvailable ? "text-ink" : "text-ink/50"
          }`}
        >
          {category.name}
        </h3>

        {/* Tagline */}
        <p
          className={`mt-1 text-xs font-medium tracking-wide ${
            isAvailable ? "text-primary" : "text-muted/40"
          }`}
        >
          {category.tagline}
        </p>

        {/* Description */}
        <p
          className={`mt-3 flex-1 text-sm leading-relaxed ${
            isAvailable ? "text-muted" : "text-muted/50"
          }`}
        >
          {category.description}
        </p>

        {/* CTA or placeholder */}
        <div className="mt-5">
          {isAvailable && category.href ? (
            <Link
              href={category.href}
              className="group/cta inline-flex items-center gap-2 text-sm font-medium text-primary transition-gap duration-200 hover:gap-3"
              aria-label={`Explore ${category.name}`}
            >
              Explore Fresh
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted/35">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
