import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "KyMed - ISO 13485 Certified Surgical & Dental Instruments Manufacturer | Pakistan",
    template: "%s | KyMed"
  },
  description: "KyMed: Leading surgical and dental instruments manufacturer in Sialkot, Pakistan. ISO 13485 certified. OEM, private-label & custom manufacturing. Shipping to USA, UK, UAE, Europe. Premium stainless steel instruments for hospitals, clinics & distributors worldwide.",
  keywords: [
    "surgical instruments manufacturer Pakistan",
    "dental instruments Sialkot",
    "ISO 13485 certified manufacturer",
    "OEM surgical instruments",
    "private label medical instruments",
    "stainless steel surgical tools",
    "medical device manufacturer",
    "surgical instruments supplier",
    "dental instruments exporter",
    "KyMed surgical instruments",
    "electrosurgical instruments",
    "diagnostic instruments",
    "ophthalmic instruments",
    "general surgery instruments",
    "medical instruments wholesale",
    "hospital surgical equipment",
    "CE certified instruments",
    "FDA compliant surgical tools"
  ],
  authors: [{ name: "KyMed", url: "https://kymed.co" }],
  creator: "KyMed",
  publisher: "KyMed",
  applicationName: "KyMed",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Medical Devices",
  classification: "Business",
  
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
    locale: "en_US",
    url: "https://kymed.co",
    title: "KyMed - ISO 13485 Certified Surgical & Dental Instruments Manufacturer",
    description: "Leading surgical and dental instruments manufacturer in Pakistan. ISO 13485 certified. OEM & private-label manufacturing. Global shipping to USA, UK, UAE, Europe.",
    siteName: "KyMed",
    images: [
      {
        url: "https://kymed.co/images/logo.png",
        width: 1200,
        height: 630,
        alt: "KyMed - Surgical & Dental Instruments Manufacturer",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "KyMed Logo",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@KyMed",
    creator: "@KyMed",
    title: "KyMed - ISO 13485 Certified Surgical Instruments Manufacturer",
    description: "Leading manufacturer of surgical & dental instruments in Pakistan. ISO 13485 certified. Global shipping.",
    images: ["https://kymed.co/images/logo.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "https://kymed.co",
  },
  
  // Use the generated webmanifest
  manifest: "/site.webmanifest",
  
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
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
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://kymed.co",
              "name": "KyMed",
              "legalName": "KyMed Surgical Instruments",
              "url": "https://kymed.co",
              "logo": "https://kymed.co/images/logo.png",
              "description": "ISO 13485 certified manufacturer of surgical and dental instruments in Pakistan. OEM and private-label manufacturing for global markets.",
              "foundingDate": "2000",
              "slogan": "Precision, Quality, Trust",
              "email": "info@kymed.co",
              "telephone": "+92-329-9958000",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Sialkot",
                  "addressLocality": "Sialkot",
                  "addressRegion": "Punjab",
                  "postalCode": "51310",
                  "addressCountry": "PK"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "24 The New Broadway, Tarring Road",
                  "addressLocality": "West Worthing",
                  "addressRegion": "Sussex",
                  "postalCode": "BN11 4HP",
                  "addressCountry": "GB"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.4945",
                "longitude": "74.5229"
              },
              "areaServed": ["US", "GB", "AE", "DE", "AU", "CA", "FR", "IT", "ES", "NL", "SE", "SA", "KW", "QA", "OM", "BH"],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Surgical Instruments",
                    "description": "ISO 13485 certified surgical instruments"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Dental Instruments",
                    "description": "Premium dental surgery instruments"
                  }
                }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certificate",
                  "name": "ISO 13485 Certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certificate",
                  "name": "CE Marking"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/kymed"
              ]
            })
          }}
        />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KyMed - Surgical Instruments Manufacturer",
              "image": "https://kymed.co/images/logo.png",
              "telephone": "+92-329-9958000",
              "email": "info@kymed.co",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sialkot",
                "addressLocality": "Sialkot",
                "addressRegion": "Punjab",
                "postalCode": "51310",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.4945",
                "longitude": "74.5229"
              },
              "url": "https://kymed.co",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "KyMed",
              "url": "https://kymed.co",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kymed.co/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://kymed.co"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://kymed.co/shop"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Categories",
                  "item": "https://kymed.co/categories"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "About",
                  "item": "https://kymed.co/about"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://kymed.co/contact"
                }
              ]
            })
          }}
        />
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