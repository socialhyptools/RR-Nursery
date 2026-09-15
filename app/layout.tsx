import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const siteUrl = "https://www.rrnursery.in"; // Update with your real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RR Nursery and Landscaping Thoothukudi | Nursery & Landscaping Services in South Tamil Nadu",
    template: "%s | RR Nursery Thoothukudi",
  },
  description:
    "RR Nursery and Landscaping is Thoothukudi's trusted nursery and landscaping company. We offer plant nursery, landscape design, ornamental plants, and garden services across South Tamil Nadu — Thoothukudi, Tirunelveli, Nagercoil, Kanyakumari & beyond.",
  keywords: [
    "nursery and landscaping services in Thoothukudi",
    "plant nursery near me",
    "landscape design South Tamil Nadu",
    "nursery farm Thoothukudi",
    "garden plants Tirunelveli",
    "RR Nursery Thoothukudi",
    "landscape architects in Thoothukudi",
    "ornamental plants nursery",
    "wholesale nursery plants",
    "plant nursery wholesale",
    "garden landscaping Thoothukudi",
    "plants for landscaping Tamil Nadu",
  ],
  authors: [{ name: "RR Nursery and Landscaping" }],
  creator: "RR Nursery and Landscaping",
  publisher: "RR Nursery and Landscaping",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "RR Nursery and Landscaping",
    title: "RR Nursery Thoothukudi | Nursery & Landscaping Services in South Tamil Nadu",
    description:
      "Thoothukudi's leading nursery and landscaping company. Premium plants, landscape design, ornamental plants & garden services across South Tamil Nadu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RR Nursery Thoothukudi | Nursery & Landscaping",
    description:
      "Premium plants & professional landscape design in South Tamil Nadu. Serving Thoothukudi, Tirunelveli, Nagercoil & beyond.",
  },
  alternates: { canonical: siteUrl },
  verification: {
    google: "", // Add your Google Search Console verification code here
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GardenStore"],
  name: "RR Nursery and Landscaping",
  alternateName: "RR Nursery",
  description:
    "Leading nursery and landscaping company in Thoothukudi, Tamil Nadu. Offering premium plants, landscape design, ornamental plants, and garden services across South Tamil Nadu.",
  url: siteUrl,
  telephone: "+91-8124050535",
  priceRange: "₹₹",
  image: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12/582-6, Madhanager, Davis Puram",
    addressLocality: "Thoothukudi",
    addressRegion: "Tamil Nadu",
    postalCode: "628002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.7642,
    longitude: 78.1348,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Thoothukudi" },
    { "@type": "City", name: "Tirunelveli" },
    { "@type": "City", name: "Nagercoil" },
    { "@type": "City", name: "Kanyakumari" },
    { "@type": "City", name: "Virudhunagar" },
    { "@type": "City", name: "Kovilpatti" },
    { "@type": "AdministrativeArea", name: "South Tamil Nadu" },
  ],
  sameAs: [
    "https://share.google/RtqNLLT7ObGJfD5z8",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nursery & Landscaping Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Designing & Architecture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nursery Plant Shop" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
