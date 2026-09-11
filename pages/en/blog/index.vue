<template>
  <div dir="ltr" lang="en" class="font-cairo">
    <AppNav locale-path="/en/" :t="t" />

    <main class="pt-28 pb-20">
      <!-- Blog Hero -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-dental-50 via-white to-gold-100"></div>
        <div class="absolute top-10 -left-20 w-80 h-80 bg-dental-300/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 -right-10 w-64 h-64 bg-gold-200/40 rounded-full blur-3xl"></div>

        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 text-center space-y-5 animate-fade-up">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-md text-dental-700 font-semibold text-xs sm:text-sm">
            <span class="w-2 h-2 rounded-full bg-dental-500 animate-pulse"></span>
            {{ t.blog.badge }}
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-navy-950 leading-tight">
            {{ t.blog.title }}
          </h1>
          <p class="text-navy-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {{ t.blog.subtitle }}
          </p>
        </div>
      </section>

      <!-- Posts Grid -->
      <section class="container-custom mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <BlogCard v-for="p in items" :key="p.post.slug" :t="t" :post="p.post" locale="en"
                    class="first:sm:col-span-2 first:lg:col-span-3" />
        </div>
      </section>
    </main>

    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale, locales } from '~/composables/useLocale'
import { getPosts, posts } from '~/content/posts'
import { SITE } from '~/site.config'

const { t, isEn } = useLocale('/en/')
const items = getPosts('en')
const tAr = locales.ar

const domain = useSiteUrl()
const url = domain + '/en/blog/'
const arUrl = domain + '/blog/'
const ogImage = domain + '/og/blog.jpg'

useHead({
  title: `Blog | ${t.seo.title}`,
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  meta: [
    { name: 'description', content: t.blog.subtitle },
    { name: 'keywords', content: 'dental blog, oral health, orthodontics, dentist sanaa, dental tips' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: SITE.doctorName.en },
    { property: 'og:title', content: `Blog | ${t.seo.title}` },
    { property: 'og:description', content: t.blog.subtitle },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:alt', content: t.blog.title },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: SITE.doctorName.en },
    { property: 'og:locale:alternate', content: 'ar_YE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Blog | ${t.seo.title}` },
    { name: 'twitter:description', content: t.blog.subtitle },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [
    { rel: 'canonical', href: url },
    { rel: 'alternate', hreflang: 'en', href: url },
    { rel: 'alternate', hreflang: 'ar', href: arUrl },
    { rel: 'alternate', hreflang: 'x-default', href: arUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': url + '#blog',
        name: t.blog.title,
        description: t.blog.subtitle,
        url,
        inLanguage: 'en',
        publisher: {
          '@type': 'MedicalOrganization',
          name: SITE.doctorName.en,
          url: domain + '/en/',
        },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.en.title,
          description: p.en.excerpt,
          url: url + p.slug,
          datePublished: p.date,
          dateModified: p.updated,
          inLanguage: 'en',
          author: {
            '@type': 'Person',
            name: SITE.doctorName.en,
          },
        })),
      }),
    },
  ],
})
</script>