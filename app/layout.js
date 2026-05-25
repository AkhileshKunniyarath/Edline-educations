import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScholarshipBanner from "@/components/ScholarshipBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig, targetKeywords } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultSiteUrl;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ED LINE Edu Consultancy | Education Consultancy for Medical & Professional Admissions",
    template: "%s | ED LINE Edu Consultancy",
  },
  description: siteConfig.description,
  keywords: targetKeywords,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", rel: "shortcut icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ED LINE Edu Consultancy | Education Consultancy for Medical & Professional Admissions",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} admissions guidance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ED LINE Edu Consultancy | Education Consultancy for Medical & Professional Admissions",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  other: {
    keywords: targetKeywords.join(", "),
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        logo: `${siteUrl}/brand-logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        priceRange: siteConfig.priceRange,
        areaServed: siteConfig.areaServed.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: siteConfig.openingHours.days,
          opens: siteConfig.openingHours.opens,
          closes: siteConfig.openingHours.closes,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: siteConfig.phoneE164,
            email: siteConfig.email,
            areaServed: "IN",
            availableLanguage: ["English", "Malayalam"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col relative overflow-x-hidden`}>
        <div className="sticky top-0 z-[60] w-full flex flex-col">
          <ScholarshipBanner />
          <Navbar />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
