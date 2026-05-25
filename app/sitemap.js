import { siteConfig } from "@/lib/site";
import { seoLandingPages } from "@/lib/seo-landing-pages";

export const dynamic = "force-static";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultSiteUrl;
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...seoLandingPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];
}
