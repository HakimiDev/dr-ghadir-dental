import { posts } from './content/posts'
import { services } from './content/services'

const blogRoutes = posts.flatMap((p) => [`/blog/${p.slugAr}`, `/en/blog/${p.slug}`])
const serviceRoutes = services.flatMap((s) => [`/services/${s.slugAr}`, `/en/services/${s.slug}`])

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
        { rel: 'llms-full', href: '/llms-full.txt' },
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
    '/about': { prerender: true },
    '/en/about': { prerender: true },
    '/services': { prerender: true },
    '/en/services': { prerender: true },
    '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/og/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/favicon.svg': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/**': {
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://wa.me; frame-src https://www.google.com https://maps.google.com; base-uri 'self'; form-action 'self' https://wa.me; frame-ancestors 'self'",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
        'X-XSS-Protection': '0',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/en/', '/about', '/en/about', '/blog', '/en/blog', '/services', '/en/services', '/sitemap.xml', '/robots.txt', '/llms.txt', '/llms-full.txt', ...blogRoutes, ...serviceRoutes],
    },
  },
})
