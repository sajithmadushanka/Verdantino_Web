import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { colors } from "@/lib/colors";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: "VERDANTINO | Fresh Food Growing, Knowledge & Innovation",
  description:
    "Discover VERDANTINO, a growing ecosystem bringing together fresh microgreens, sustainable cultivation, growing knowledge and innovative solutions.",
  keywords: [
    "VERDANTINO",
    "eco innovations",
    "indoor gardening",
    "microgreens",
    "sustainable growing",
    "indoor growing",
    "growing technology",
    "fresh food",
    "cultivation",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "VERDANTINO | Fresh Food Growing, Knowledge & Innovation",
    description:
      "Discover VERDANTINO, a growing ecosystem bringing together fresh microgreens, sustainable cultivation, growing knowledge and innovative solutions.",
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
    title: "VERDANTINO | Fresh Food Growing, Knowledge & Innovation",
    description:
      "Discover VERDANTINO, a growing ecosystem bringing together fresh microgreens, sustainable cultivation, growing knowledge and innovative solutions.",
    images: ["/images/brand.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: colors.primary,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
