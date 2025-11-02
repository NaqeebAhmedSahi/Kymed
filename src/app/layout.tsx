import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "KyMed - Precision Surgical Instruments",
  description: "Global Excellence in Surgical & Dental Instruments. German stainless steel quality from KyMed.",
  keywords: "surgical instruments, dental instruments, medical devices, KyMed",
  authors: [{ name: "KyMed" }],
  creator: "KyMed",
  publisher: "KyMed",
  
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  
  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    url: "https://kymed.co", // Replace with your actual domain
    title: "KyMed - Precision Surgical Instruments",
    description: "Global Excellence in Surgical & Dental Instruments. German stainless steel quality.",
    siteName: "KyMed",
    images: [
      {
        url: "/android-chrome-512x512.png", // Use your high-res icon for sharing
        width: 512,
        height: 512,
        alt: "KyMed - Surgical Instruments",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "KyMed - Precision Surgical Instruments",
    description: "Global Excellence in Surgical & Dental Instruments",
    images: ["/android-chrome-512x512.png"],
  },
  
  // Use the generated webmanifest
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#008C99",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Android icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#008C99" />
        <meta name="msapplication-TileColor" content="#008C99" />
        
        {/* Open Graph for WhatsApp */}
        <meta property="og:title" content="KyMed - Precision Surgical Instruments" />
        <meta property="og:description" content="Global Excellence in Surgical & Dental Instruments. German stainless steel quality." />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:url" content="https://kymed.co" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KyMed" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KyMed - Precision Surgical Instruments" />
        <meta name="twitter:description" content="Global Excellence in Surgical & Dental Instruments" />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
      </head>
      <body className={satoshi.className}>
        <HolyLoader color="#868686" />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}