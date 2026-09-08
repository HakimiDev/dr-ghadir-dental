import { SITE } from '../../site.config'

export default defineEventHandler(() => {
  const baseUrl = useRuntimeConfig().public.siteUrl || SITE.baseUrl
  const now = new Date().toISOString()

  const urls = [
    { loc: baseUrl + '/', lastmod: now, priority: '1.0', changefreq: 'weekly' },
    { loc: baseUrl + '/en/', lastmod: now, priority: '1.0', changefreq: 'weekly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})