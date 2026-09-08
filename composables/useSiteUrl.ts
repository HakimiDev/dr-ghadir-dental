import { SITE } from '~/site.config'

/**
 * Resolves the canonical public base URL for the site.
 * Priority: SITE_URL env var (set on Vercel / production) -> site.config.ts baseUrl.
 * Drives og:image, canonical, hreflang, sitemap, robots, llms.txt and JSON-LD.
 */
export function useSiteUrl(): string {
  const cfg = useRuntimeConfig()
  const fromEnv = (cfg.public.siteUrl || '').trim()
  return fromEnv || SITE.baseUrl
}