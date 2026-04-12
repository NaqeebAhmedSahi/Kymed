import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL 
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL) 
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "KyMed - Precision Surgical Instruments",
  description:
    "Global Excellence in Surgical & Dental Instruments. German stainless steel quality from KyMed.",
  keywords: "surgical instruments, dental instruments, medical devices, KyMed",
  authors: [{ name: "KyMed" }],
  creator: "KyMed",
  publisher: "KyMed",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "KyMed - Precision Surgical Instruments",
    description:
      "Global Excellence in Surgical & Dental Instruments. German stainless steel quality.",
    siteName: "KyMed",
    images: [
      {
        url: "/images/logo.png",
        width: 160,
        height: 44,
        alt: "KyMed - Surgical Instruments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KyMed - Precision Surgical Instruments",
    description: "Global Excellence in Surgical & Dental Instruments",
    images: ["/images/logo.png"],
  },

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
      <body className={satoshi.className}>
        <OrganizationJsonLd />
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
