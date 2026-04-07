import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScholarshipBanner from "@/components/ScholarshipBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://edlineconsultancy.com";

export const metadata = {
  title: "ED LINE Edu Consultancy | Medical & Professional Admissions",
  description: "Start your Medical & Professional Career with expert guidance. Admissions open for Top Colleges in South India.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", rel: "shortcut icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ED LINE Edu Consultancy | Medical & Professional Admissions",
    description: "Start your Medical & Professional Career with expert guidance. Admissions open for Top Colleges in South India.",
    url: siteUrl,
    siteName: "ED LINE Edu Consultancy",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ED LINE Edu Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ED LINE Edu Consultancy | Medical & Professional Admissions",
    description: "Start your Medical & Professional Career with expert guidance. Admissions open for Top Colleges in South India.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ED LINE Edu Consultancy",
    url: siteUrl,
    logo: `${siteUrl}/brand-logo.png`,
    email: "edlineconsultancy@gmail.com",
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
