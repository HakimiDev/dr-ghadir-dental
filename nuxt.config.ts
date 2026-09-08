import { posts } from './content/posts'

const blogRoutes = posts.flatMap((p) => [`/blog/${p.slugAr}`, `/en/blog/${p.slug}`])

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || process.env.SITE_URL || '',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Cairo': [400, 500, 600, 700, 800],
      'Inter': [400, 500, 600, 700],
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ar', dir: 'rtl' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'llms', href: '/llms.txt' },
        { rel: 'alternate', hreflang: 'ar', href: '/' },
        { rel: 'alternate', hreflang: 'en', href: '/en/' },
        { rel: 'alternate', hreflang: 'x-default', href: '/' },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/en/': { prerender: true },
    '/blog': { prerender: true },
    '/en/blog': { prerender: true },
  },
  nitro: {
    prerender: {
      routes: ['/', '/en/', '/blog', '/en/blog', '/sitemap.xml', '/robots.txt', '/llms.txt', ...blogRoutes],
    },
  },
})
