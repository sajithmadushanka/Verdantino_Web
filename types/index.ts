/**
 * VERDANTINO — Shared TypeScript Types
 */

export type CategoryStatus = "available" | "coming-soon";

export interface Category {
  id: string;
  number: string; 
  name: string; // e.g. "VERDANTINO FRESH"
  shortName: string; // e.g. "Fresh"
  tagline: string;
  description: string;
  status: CategoryStatus;
  href: string | null; // null for coming-soon categories
  imagePath: string; // path under /images/home/
  imageAlt: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
