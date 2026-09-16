<template>
  <div dir="rtl" lang="ar" class="font-cairo">
    <AppNav locale-path="/" :t="t" />
    <main>
      <HeroSection :t="t" />
      <AboutSection :t="t" />
      <ServicesSection :t="t" />
      <StatsSection :t="t" />
      <ExperienceSection :t="t" />
      <TestimonialsSection :t="t" />
      <FAQSection :t="t" />
      <BlogSection :t="t" />
      <ContactSection :t="t" />
    </main>
    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
import { SITE } from '~/site.config'

const { t } = useLocale('/')

const url = useSiteUrl() + '/'
const ogImage = url + 'og-image.jpg'

const schema = useEntitySchema(false, t.seo.description)

useHead({
  title: t.seo.title,
  htmlAttrs: { lang: 'ar', dir: 'rtl' },
  meta: [
    { name: 'description', content: t.seo.description },
    { name: 'keywords', content: t.seo.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: SITE.doctorName.ar },
    { name: 'theme-color', content: '#0e8fbd' },
    { name: 'geo.region', content: 'YE-SA' },
    { name: 'geo.placename', content: 'Sana\'a' },
    { name: 'geo.position', content: `${SITE.geo.latitude};${SITE.geo.longitude}` },
    { name: 'ICBM', content: `${SITE.geo.latitude}, ${SITE.geo.longitude}` },

    // Open Graph
    { property: 'og:title', content: t.seo.title },
    { property: 'og:description', content: t.seo.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:alt', content: t.seo.title },
    { property: 'og:locale', content: 'ar_YE' },
    { property: 'og:site_name', content: SITE.doctorName.ar },
    { property: 'og:locale:alternate', content: 'en_US' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.seo.title },
    { name: 'twitter:description', content: t.seo.description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: t.seo.title },
  ],
  link: [
    { rel: 'canonical', href: url },
    { rel: 'alternate', hreflang: 'ar', href: url },
    { rel: 'alternate', hreflang: 'en', href: url + 'en/' },
    { rel: 'alternate', hreflang: 'x-default', href: url },
  ],
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          schema.doctor,
          schema.clinic,
          schema.website,
          {
            '@type': 'BreadcrumbList',
            '@id': url + '#breadcrumb',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: url },
              { '@type': 'ListItem', position: 2, name: SITE.doctorName.ar, item: url + '#about' },
            ],
          },
          {
            '@type': 'FAQPage',
            '@id': url + '#faq',
            mainEntity: t.faq.items.map((i) => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a },
            })),
          },
        ],
      }),
    },
  ],
})
</script>