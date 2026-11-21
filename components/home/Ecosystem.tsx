/**
 * VERDANTINO — Ecosystem Section (Section 04)
 *
 * Renders all four ecosystem category cards in a responsive grid:
 * - 1 column on mobile
 * - 2 columns on tablet (sm/md)
 * - 4 columns on large desktop (xl+)
 */

import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/home/CategoryCard";
import { categories } from "@/data/categories";

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="scroll-mt-20 bg-canvas px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Our Ecosystem"
            heading="Explore the VERDANTINO Ecosystem."
            description="A growing ecosystem designed to bring fresh food cultivation closer to everyday life."
            headingId="ecosystem-heading"
            align="left"
          />
        </div>

        {/* Category grid */}
        <ul
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          role="list"
          aria-label="VERDANTINO ecosystem categories"
        >
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
