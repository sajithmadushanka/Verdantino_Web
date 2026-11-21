/**
 * VERDANTINO FRESH — Placeholder Page
 *
 * This is a minimal holding page for the /fresh route.
 * The full VERDANTINO FRESH microgreens page will be built separately.
 *
 * To build the full page:
 *   1. Replace this file contents with the full implementation.
 *   2. Add product components under components/fresh/
 *   3. Add fresh-specific data under data/fresh.ts
 */

import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "VERDANTINO FRESH | Fresh Microgreens — Coming Soon",
  description:
    "VERDANTINO FRESH brings you fresh, carefully cultivated microgreens. Full experience coming soon.",
};

export default function FreshPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-6">
      <div className="mx-auto max-w-xl text-center">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Logo tone="dark" showTagline={true} />
        </div>

        {/* Category label */}
        <p className="mb-4 text-xs font-semibold tracking-[0.45em] uppercase text-primary">
          VERDANTINO FRESH
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Fresh microgreens.
          <br />
          <span className="italic text-primary">Coming soon.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base leading-relaxed text-muted">
          We&apos;re preparing something fresh. The full VERDANTINO FRESH
          experience — including our microgreens collection — will be available
          here shortly.
        </p>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs tracking-[0.3em] uppercase text-sage">
            ECO INNOVATIONS
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
