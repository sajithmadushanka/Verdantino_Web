/**
 * VERDANTINO Ecosystem Categories
 * Single source of truth for all category data.
 *
 * To activate a coming-soon category:
 *   1. Set status: "available"
 *   2. Set href: "/category-slug"
 *   3. Replace the placeholder image path with the real photograph path.
 */

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "fresh",
    number: "01",
    name: "VERDANTINO FRESH",
    shortName: "Fresh",
    tagline: "Freshness from seed to table.",
    description:
      "Fresh microgreens cultivated with care, bringing vibrant flavours and fresh possibilities to everyday meals.",
    status: "available",
    href: "/fresh",
    // Replace with real photography: /images/home/fresh.jpg or similar
    imagePath: "/images/home/fresh.svg",
    imageAlt: "Fresh VERDANTINO microgreens ready for harvest",
  },
  {
    id: "grow",
    number: "02",
    name: "VERDANTINO GROW",
    shortName: "Grow",
    tagline: "Practical growing, simplified.",
    description:
      "Practical growing systems and cultivation solutions designed to make growing fresh food at home easier.",
    status: "coming-soon",
    href: null,
    // Replace with real photography: /images/home/grow.jpg or similar
    imagePath: "/images/home/grow.svg",
    imageAlt: "VERDANTINO GROW cultivation systems",
  },
  {
    id: "smart",
    number: "03",
    name: "VERDANTINO SMART",
    shortName: "Smart",
    tagline: "Intelligent growing, elevated.",
    description:
      "Smart growing technologies, intelligent monitoring, automation and innovative cultivation solutions for the modern grower.",
    status: "coming-soon",
    href: null,
    // Replace with real photography: /images/home/smart.jpg or similar
    imagePath: "/images/home/smart.svg",
    imageAlt: "VERDANTINO SMART intelligent growing technology",
  },
  {
    id: "education",
    number: "04",
    name: "VERDANTINO EDUCATION",
    shortName: "Education",
    tagline: "Knowledge rooted in practice.",
    description:
      "Learn the science and practice of growing through educational resources, practical guides and cultivation knowledge.",
    status: "coming-soon",
    href: null,
    // Replace with real photography: /images/home/education.jpg or similar
    imagePath: "/images/home/education.svg",
    imageAlt: "VERDANTINO EDUCATION growing knowledge resources",
  },
];
