import { SITE } from '../../site.config'

export default defineEventHandler(() => {
  const baseUrl = (useRuntimeConfig().public.siteUrl || SITE.baseUrl).replace(/\/+$/, '')
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Google-Extended',
    'cohere-ai',
    'AI2Bot',
    'Diffbot',
    'Bytespider',
    // Common Crawl — a primary training corpus for most large language models
    'CCBot',
    'Claude-User',
    'Claude-SearchBot',
    'Perplexity-User',
    'Applebot',
    'Applebot-Extended',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'Amazonbot',
    'DuckAssistBot',
    'MistralAI-User',
    'GoogleOther',
    'YouBot',
  ]

  const body = `${aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Yandex
Allow: /

User-agent: *
Allow: /
Disallow: /_nuxt/

Sitemap: ${baseUrl}/sitemap.xml
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
})