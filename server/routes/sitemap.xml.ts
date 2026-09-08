import { SITE } from '../../site.config'
import { posts } from '../../content/posts'

export default defineEventHandler(() => {
  const baseUrl = useRuntimeConfig().public.siteUrl || SITE.baseUrl
  const today = new Date().toISOString()

  const urlset = [
    { loc: '/', lastmod: today, priority: '1.0', changefreq: 'weekly', ar: '/', en: '/en/' },
    { loc: '/blog', lastmod: today, priority: '0.9', changefreq: 'weekly', ar: '/blog', en: '/en/blog' },
    ...posts.map((p) => ({
      loc: '/blog/' + p.slugAr,
      lastmod: today,
      priority: '0.8',
      changefreq: 'monthly',
      ar: '/blog/' + p.slugAr,
      en: '/en/blog/' + p.slug,
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlset.map((u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}${u.ar}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${u.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${u.ar}" />
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})