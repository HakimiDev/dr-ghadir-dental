import { SITE } from '../../site.config'
import { posts } from '../../content/posts'
import { services } from '../../content/services'

export default defineEventHandler(() => {
  const baseUrl = (useRuntimeConfig().public.siteUrl || SITE.baseUrl).replace(/\/+$/, '')
  const today = new Date().toISOString()

  const pairs = [
    { ar: '/', en: '/en/', priority: '1.0', changefreq: 'weekly' },
    { ar: '/about', en: '/en/about', priority: '0.9', changefreq: 'monthly' },
    { ar: '/services', en: '/en/services', priority: '0.9', changefreq: 'monthly' },
    ...services.map((s) => ({
      ar: '/services/' + s.slugAr,
      en: '/en/services/' + s.slug,
      priority: '0.8',
      changefreq: 'monthly',
    })),
    { ar: '/blog', en: '/en/blog', priority: '0.9', changefreq: 'weekly' },
    ...posts.map((p) => ({
      ar: '/blog/' + p.slugAr,
      en: '/en/blog/' + p.slug,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: p.updated,
    })),
  ]

  const lastmodOf = (u: { lastmod?: string }) => u.lastmod || today

  const entries = pairs
    .flatMap((u) => [
      { loc: u.ar, ...u },
      { loc: u.en, ...u },
    ])
    .map(
      (u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${lastmodOf(u)}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}${u.ar}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${u.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${u.ar}" />
  </url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})