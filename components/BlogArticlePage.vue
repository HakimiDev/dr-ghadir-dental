<template>
  <div :dir="dir" :lang="locale" class="font-cairo">
    <AppNav :locale-path="localePath" :t="t" />

    <main class="pt-24 pb-20">
      <article v-if="post" class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="py-6 text-sm text-navy-500 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <NuxtLink :to="homePath" class="hover:text-dental-600 transition-colors">{{ t.nav.home }}</NuxtLink>
          <span class="text-navy-300">›</span>
          <NuxtLink :to="blogPath" class="hover:text-dental-600 transition-colors">{{ t.nav.blog }}</NuxtLink>
          <span class="text-navy-300">›</span>
          <span class="text-navy-700 font-semibold">{{ l.title }}</span>
        </nav>

        <!-- Hero -->
        <header class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-dental-900 p-8 sm:p-12 lg:p-14 text-white animate-fade-up">
          <div class="absolute -top-16 -end-16 w-56 h-56 bg-dental-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-16 -start-16 w-56 h-56 bg-gold-500/15 rounded-full blur-3xl"></div>
          <div class="relative space-y-6">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-5xl">{{ post.emoji }}</span>
              <span v-for="tag in l.tags" :key="tag"
                    class="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-semibold">
                {{ tag }}
              </span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-snug text-balance">
              {{ l.title }}
            </h1>
            <p class="text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl text-balance">
              {{ l.excerpt }}
            </p>
            <div class="flex items-center gap-4 flex-wrap text-navy-300 text-sm">
              <span class="flex items-center gap-2">{{ t.blog.readTime }}: {{ l.readMinutes }}</span>
              <span class="w-1 h-1 rounded-full bg-white/30"></span>
              <time :datetime="post.updated">📅 {{ formattedDate }}</time>
            </div>
          </div>
        </header>

        <!-- Body -->
        <div class="mt-10 lg:mt-12 grid lg:grid-cols-3 gap-10">
          <!-- Article content -->
          <div class="lg:col-span-2">
            <BlogContent :t="t" :blocks="l.blocks" :locale="locale" />

            <!-- Share -->
            <div class="!mt-12 flex items-center gap-4 flex-wrap bg-white rounded-2xl border border-navy-100 shadow-sm p-5">
              <span class="font-bold text-navy-900">{{ t.blog.shareTitle }}</span>
              <a :href="waShare" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 text-green-600 font-semibold text-sm hover:bg-green-500/20 transition-colors">
                💬 WhatsApp
              </a>
              <button @click="copyLink" type="button"
                      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dental-50 text-dental-700 font-semibold text-sm hover:bg-dental-100 transition-colors">
                🔗 {{ copied ? (locale === 'ar' ? 'تم نسخ الرابط ✓' : 'Link copied ✓') : (locale === 'ar' ? 'نسخ الرابط' : 'Copy link') }}
              </button>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6">
            <!-- Author card -->
            <div class="bg-white rounded-3xl border border-navy-100 shadow-sm p-6 space-y-4">
              <div class="flex items-center gap-4">
                <img :src="avatar" :alt="t.about.title" width="64" height="64" decoding="async" loading="lazy" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-dental-400">
                <div>
                  <p class="font-bold text-navy-950">{{ t.about.title }}</p>
                  <p class="text-dental-600 text-sm">{{ t.about.degree }}</p>
                </div>
              </div>
              <p class="text-navy-600 text-sm leading-relaxed">{{ t.about.p2 }}</p>
              <a :href="locale === 'ar' ? '/#contact' : '/en/#contact'" class="btn-primary justify-center w-full text-sm">
                {{ t.nav.bookNow }}
              </a>
            </div>

            <!-- Tags -->
            <div class="bg-white rounded-3xl border border-navy-100 shadow-sm p-6">
              <h3 class="font-bold text-navy-950 mb-4">{{ locale === 'ar' ? 'الوسوم' : 'Tags' }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in l.tags" :key="tag"
                      class="px-3 py-1 rounded-lg bg-dental-50 text-dental-700 text-xs font-semibold">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Quick facts -->
            <div class="bg-gradient-to-br from-dental-50 to-gold-100 rounded-3xl border border-dental-100 p-6 space-y-3 text-sm text-navy-700">
              <h3 class="font-bold text-navy-950 text-base">{{ locale === 'ar' ? 'حجز سهل' : 'Easy Booking' }}</h3>
              <p class="flex items-center gap-2">👩‍⚕️ <span dir="ltr">{{ SITE.phones.doctor }}</span></p>
              <p class="flex items-center gap-2">🏥 <span dir="ltr">{{ SITE.phones.clinic }}</span></p>
              <p class="flex items-center gap-2">📍 {{ SITE.address.ar }}</p>
            </div>
          </aside>
        </div>

        <!-- Author signature -->
        <div class="mt-12 flex items-start gap-4 bg-navy-50 rounded-3xl p-6 sm:p-8">
          <img :src="avatar" :alt="t.about.title" width="56" height="56" decoding="async" loading="lazy" class="w-14 h-14 rounded-full object-cover ring-2 ring-dental-400 flex-shrink-0">
          <div>
            <p class="font-bold text-navy-950">{{ t.blog.authorBy }}</p>
            <p class="text-navy-600 text-sm sm:text-base mt-1 leading-relaxed">{{ t.about.p1 }} {{ t.about.p3 }}</p>
          </div>
        </div>

        <!-- Related posts -->
        <section v-if="related.length" class="mt-14">
          <h2 class="font-extrabold text-2xl sm:text-3xl text-navy-950 flex items-center gap-3">
            <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>
            {{ t.blog.relatedTitle }}
          </h2>
          <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard v-for="p in related" :key="p.slug" :t="t" :post="p" :locale="locale" />
          </div>
        </section>
      </article>
    </main>

    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale, locales } from '~/composables/useLocale'
import { posts } from '~/content/posts'
import { SITE } from '~/site.config'
import avatar from '~/assets/avatar.jpg'
import type { Block } from '~/content/posts'

const props = defineProps<{ slug: string; locale: 'ar' | 'en' }>()

const isEn = props.locale === 'en'
const { t } = useLocale(isEn ? '/en/' : '/')
const tOther = isEn ? locales.ar : locales.en
const dir = isEn ? 'ltr' : 'rtl'
const localePath = isEn ? '/en/' : '/'
const homePath = isEn ? '/en/' : '/'
const blogPath = isEn ? '/en/blog' : '/blog'

const post = computed(() => posts.find((p) => props.locale === 'ar' ? p.slugAr === props.slug : p.slug === props.slug))
const l = computed(() => post.value ? post.value[props.locale] : null)

const related = computed(() => {
  if (!post.value) return []
  return posts.filter((p) => p.slug !== post.value!.slug).slice(0, 3)
})

const domain = useSiteUrl()
const url = computed(() => domain + (isEn ? '/en/blog/' + post.value!.slug : '/blog/' + post.value!.slugAr))
const ogImage = computed(() => domain + '/og/blog/' + post.value!.slug + '.png')

const formattedDate = computed(() => {
  if (!post.value) return ''
  const d = new Date(post.value.updated)
  return isEn
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : d.toLocaleDateString('ar-YE', { year: 'numeric', month: 'long', day: 'numeric' })
})

const waShare = computed(() => {
  const text = `${l.value!.title} — ${post.value!.emoji}\n${url.value}`
  return 'https://wa.me/?text=' + encodeURIComponent(text)
})

const copied = ref(false)
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(url.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch {
    /* clipboard unavailable */
  }
}

const faqBlocks = computed<Array<{ q: string; a: string }>>(() =>
  l.value?.blocks.filter((b) => b.type === 'faq').flatMap((b) => (b.type === 'faq' ? b.items : [])) ?? []
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useHead({
  title: `${l.value!.title} | ${t.seo.title}`,
  htmlAttrs: { lang: isEn ? 'en' : 'ar', dir },
  meta: [
    { name: 'description', content: l.value!.seoDesc },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:title', content: l.value!.title },
    { property: 'og:description', content: l.value!.excerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: url.value },
    { property: 'og:image', content: ogImage.value },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:alt', content: l.value!.title },
    { property: 'og:locale', content: isEn ? 'en_US' : 'ar_YE' },
    { property: 'og:site_name', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:locale:alternate', content: isEn ? 'ar_YE' : 'en_US' },
    { property: 'article:published_time', content: post.value!.date },
    { property: 'article:modified_time', content: post.value!.updated },
    { property: 'article:author', content: domain + '/#doctor' },
    { property: 'article:section', content: l.value!.tags[0] },
    ...l.value!.tags.map((tag) => ({ property: 'article:tag', content: tag })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: l.value!.title },
    { name: 'twitter:description', content: l.value!.excerpt },
    { name: 'twitter:image', content: ogImage.value },
  ],
  link: [
    { rel: 'canonical', href: url.value },
    {
      rel: 'alternate',
      hreflang: isEn ? 'ar' : 'en',
      href: domain + (isEn ? '/blog/' + post.value!.slugAr : '/en/blog/' + post.value!.slug),
    },
    { rel: 'alternate', hreflang: isEn ? 'en' : 'ar', href: url.value },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': url.value + '#article',
            headline: l.value!.title,
            description: l.value!.excerpt,
            image: ogImage.value,
            url: url.value,
            datePublished: post.value!.date,
            dateModified: post.value!.updated,
            inLanguage: isEn ? 'en' : 'ar',
            mainEntityOfPage: { '@type': 'WebPage', '@id': url.value },
            author: { '@type': 'Person', '@id': domain + '/#doctor', name: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
            publisher: { '@type': 'MedicalOrganization', name: isEn ? SITE.clinicName.en : SITE.clinicName.ar, url: domain + '/' },
          },
          ...(faqBlocks.value.length
            ? [{
                '@type': 'FAQPage',
                '@id': url.value + '#faq',
                mainEntity: faqBlocks.value.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              }]
            : []),
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'الرئيسية', item: domain + (isEn ? '/en/' : '/') },
              { '@type': 'ListItem', position: 2, name: isEn ? 'Blog' : 'المدونة', item: domain + (isEn ? '/en/blog' : '/blog') },
              { '@type': 'ListItem', position: 3, name: l.value!.title, item: url.value },
            ],
          },
        ],
      }),
    },
  ],
})
</script>