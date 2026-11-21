/**
 * VERDANTINO — Homepage
 *
 * Sections in order:
 * 01 Header          → components/layout/Header.tsx  (rendered in layout)
 * 02 Hero            → components/home/Hero.tsx
 * 03 Mission         → components/home/Mission.tsx
 * 04 Ecosystem       → components/home/Ecosystem.tsx
 * 05 Why VERDANTINO  → components/home/WhyVerdantino.tsx
 * 06 Grower CTA      → components/home/GrowerCTA.tsx
 * 07 Final CTA       → components/home/FinalCTA.tsx
 * 08 Footer          → components/layout/Footer.tsx  (rendered in layout)
 */

import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Ecosystem from "@/components/home/Ecosystem";
import WhyVerdantino from "@/components/home/WhyVerdantino";
import GrowerCTA from "@/components/home/GrowerCTA";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Ecosystem />
      <WhyVerdantino />
      <GrowerCTA />
      <FinalCTA />
    </main>
  );
}
