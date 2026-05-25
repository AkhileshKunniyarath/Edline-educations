import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Colleges from '@/components/Colleges';
import Services from '@/components/Services';
import AdmissionProcess from '@/components/AdmissionProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import RegistrationForm from '@/components/RegistrationForm';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SeoPagesSection from '@/components/SeoPagesSection';
import { courseCategories, faqItems, serviceItems, siteConfig, targetKeywords } from '@/lib/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultSiteUrl;

export const metadata = {
  title: 'Education Consultancy in Kerala for Medical, Nursing, Engineering & More',
  description:
    'Get expert admission guidance for MBBS, BDS, Nursing, Allied Health, Engineering, and Management courses in top South India colleges.',
  keywords: [
    ...targetKeywords,
    'education consultancy in Edappal Kerala',
    'medical admission guidance South India',
    'MBBS BDS nursing admission consultants',
    'NEET and KEAM admission support',
    'free admission counselling Kerala',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Education Consultancy in Kerala for Medical, Nursing, Engineering & More',
    description:
      'Expert admission guidance for medical and professional courses across South India from ED LINE Edu Consultancy.',
    url: siteUrl,
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Education Consultancy in Kerala for Medical, Nursing, Engineering & More',
    description:
      'Expert admission guidance for medical and professional courses across South India from ED LINE Edu Consultancy.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Education Consultancy in Kerala for Medical & Professional Admissions",
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faqpage`,
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#services`,
        name: "Education consultancy services",
        itemListElement: serviceItems.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
            areaServed: "South India",
            serviceType: "Education consultancy",
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#courses`,
        name: "Courses supported by ED LINE Edu Consultancy",
        itemListElement: courseCategories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "DefinedTerm",
            name: category.title,
            description: category.courses.join(", "),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <Courses />
      <Colleges />
      <Services />
      <AdmissionProcess />
      <WhyChooseUs />
      <Testimonials />
      <SeoPagesSection />
      <RegistrationForm />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
