import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdantino.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VERDANTINO — Eco Innovations | Grow Fresh. Live Greener.",
  description:
    "VERDANTINO Eco Innovations is cultivating a new way to grow. Discover the future of indoor gardening, fresh food and sustainable living. Coming soon.",
  keywords: [
    "VERDANTINO",
    "eco innovations",
    "indoor gardening",
    "microgreens",
    "sustainable growing",
    "indoor growing",
    "growing technology",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "VERDANTINO — Eco Innovations | Grow Fresh. Live Greener.",
    description:
      "Making indoor growing accessible through science, innovation and sustainable solutions. Coming soon.",
    siteName: "VERDANTINO Eco Innovations",
    type: "website",
    images: [
      {
        url: "/images/brand.png",
        width: 1200,
        height: 400,
        alt: "VERDANTINO Eco Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERDANTINO — Eco Innovations | Grow Fresh. Live Greener.",
    description: "Something fresh is growing. Coming soon.",
    images: ["/images/brand.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#203D2B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
