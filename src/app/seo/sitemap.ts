import { MetadataRoute } from "next"
import { siteConfig } from "@/shared/config/site"
import { routing } from "@/shared/lib/i18n/routing"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = routing.locales.flatMap((locale) => [
    {
      url: `${siteConfig.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ])

  return routes
}