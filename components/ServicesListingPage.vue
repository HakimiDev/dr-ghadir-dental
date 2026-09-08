<template>
  <div :dir="dir" :lang="locale" class="font-cairo">
    <AppNav :locale-path="localePath" :t="t" />

    <main class="pt-28 pb-20">
      <!-- Services Hero -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-dental-50 via-white to-gold-100"></div>
        <div class="absolute top-10 -left-20 w-80 h-80 bg-dental-300/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 -right-10 w-64 h-64 bg-gold-200/40 rounded-full blur-3xl"></div>

        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 text-center space-y-5 animate-fade-up">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-md text-dental-700 font-semibold text-xs sm:text-sm">
            <span class="w-2 h-2 rounded-full bg-dental-500 animate-pulse"></span>
            {{ t.services.badge }}
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-navy-950 leading-tight">
            {{ t.services.title }}
          </h1>
          <p class="text-navy-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {{ t.services.subtitle }}
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="container-custom mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard v-for="service in services" :key="service.slug" :t="t" :service="service" :locale="locale" />
        </div>
      </section>
    </main>

    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale, locales } from '~/composables/useLocale'
import { services } from '~/content/services'
import { SITE } from '~/site.config'

const props = defineProps<{ locale: 'ar' | 'en' }>()

const isEn = props.locale === 'en'
const { t } = useLocale(isEn ? '/en/' : '/')
const tOther = isEn ? locales.ar : locales.en
const dir = isEn ? 'ltr' : 'rtl'
const localePath = isEn ? '/en/' : '/'
const url = (useSiteUrl()) + (isEn ? '/en/services' : '/services')
const ogImage = (useSiteUrl()) + '/og/services.png'

useHead({
  title: `${t.services.title} | ${t.seo.title}`,
  htmlAttrs: { lang: isEn ? 'en' : 'ar', dir },
  meta: [
    { name: 'description', content: t.services.subtitle },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:title', content: `${t.services.title} | ${t.seo.title}` },
    { property: 'og:description', content: t.services.subtitle },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: t.services.title },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:locale', content: isEn ? 'en_US' : 'ar_YE' },
    { property: 'og:site_name', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:locale:alternate', content: isEn ? 'ar_YE' : 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${t.services.title} | ${t.seo.title}` },
    { name: 'twitter:description', content: t.services.subtitle },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: url },
    {
      rel: 'alternate',
      hreflang: isEn ? 'ar' : 'en',
      href: (useSiteUrl()) + (isEn ? '/services' : '/en/services'),
    },
    { rel: 'alternate', hreflang: isEn ? 'en' : 'ar', href: url },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t.services.title,
        description: t.services.subtitle,
        url,
        inLanguage: isEn ? 'en' : 'ar',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s[props.locale].title,
          url: url + '/' + (isEn ? s.slug : s.slugAr),
        })),
      }),
    },
  ],
})
</script>