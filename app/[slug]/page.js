import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { getLandingPageSchema, getSeoLandingPage } from "@/lib/seo-landing-pages";
import { siteConfig, targetKeywords } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultSiteUrl;

export async function generateStaticParams() {
  const { seoLandingPages } = await import("@/lib/seo-landing-pages");

  return seoLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const page = getSeoLandingPage(awaitedParams.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [...targetKeywords, ...page.keywords],
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      images: ["/og-image.png"],
    },
    twitter: {
      title: page.title,
      description: page.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function SeoLandingRoute({ params }) {
  const awaitedParams = await params;
  const page = getSeoLandingPage(awaitedParams.slug);

  if (!page) {
    notFound();
  }

  const schema = getLandingPageSchema(page, siteUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SeoLandingPage page={page} />
    </>
  );
}
