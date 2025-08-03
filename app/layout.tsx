import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import '@/public/styles/fonts.css';

config.autoAddCss = false;

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "In.Design | Modern Furniture & Interior Solutions",
  description: "Discover modern furniture, interior design inspiration, and premium home decor at In.Design. Shop our curated catalog for chairs, tables, sofas, and more. Transform your space with quality, style, and expert advice.",
  keywords: [
    "modern furniture",
    "interior design",
    "home decor",
    "chairs",
    "tables",
    "sofas",
    "catalog",
    "living room",
    "bedroom",
    "office furniture",
    "contemporary design",
    "premium furniture",
    "In.Design"
  ],
  openGraph: {
    title: "In.Design | Modern Furniture & Interior Solutions",
    description: "Discover modern furniture, interior design inspiration, and premium home decor at In.Design. Shop our curated catalog for chairs, tables, sofas, and more. Transform your space with quality, style, and expert advice.",
    url: "https://in.design/",
    siteName: "In.Design",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "In.Design - Modern Furniture & Interior Solutions"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "In.Design | Modern Furniture & Interior Solutions",
    description: "Discover modern furniture, interior design inspiration, and premium home decor at In.Design.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      noarchive: false,
      nosnippet: false,
    
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-mymid"
      >
        {children}
      </body>
    </html>
  );
}
