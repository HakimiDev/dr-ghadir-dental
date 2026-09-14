<template>
  <div :dir="dir" :lang="locale" class="font-cairo">
    <AppNav :locale-path="localePath" :t="t" />

    <main class="pt-24 pb-20">
      <article v-if="service" class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="py-6 text-sm text-navy-500 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <NuxtLink :to="homePath" class="hover:text-dental-600 transition-colors">{{ t.nav.home }}</NuxtLink>
          <span class="text-navy-300">›</span>
          <NuxtLink :to="servicesPath" class="hover:text-dental-600 transition-colors">{{ t.nav.services }}</NuxtLink>
          <span class="text-navy-300">›</span>
          <span class="text-navy-700 font-semibold">{{ l.title }}</span>
        </nav>

        <!-- Hero -->
        <header class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-dental-900 p-8 sm:p-12 lg:p-14 text-white animate-fade-up">
          <div class="absolute -top-16 -end-16 w-56 h-56 bg-dental-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-16 -start-16 w-56 h-56 bg-gold-500/15 rounded-full blur-3xl"></div>
          <div class="relative space-y-6">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-5xl sm:text-6xl">{{ service.emoji }}</span>
              <span class="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-semibold">
                {{ t.nav.services }}
              </span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-snug text-balance">
              {{ l.title }}
            </h1>
            <p class="text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl text-balance">
              {{ l.tagline }}
            </p>
          </div>
        </header>

        <!-- Body -->
        <div class="mt-10 lg:mt-12 grid lg:grid-cols-3 gap-10">
          <!-- Service content -->
          <div class="lg:col-span-2">
            <BlogContent :t="t" :blocks="l.blocks" :locale="locale" />

            <!-- Share -->
            <div class="!mt-12 flex items-center gap-4 flex-wrap bg-white rounded-2xl border border-navy-100 shadow-sm p-5">
              <span class="font-bold text-navy-900">{{ t.blog.shareTitle }}</span>
              <a :href="waShare" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 text-green-600 font-semibold text-sm hover:bg-green-500/20 transition-colors">
                <IconWhatsApp class="w-4 h-4" /> WhatsApp
              </a>
              <button @click="copyLink" type="button"
                      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dental-50 text-dental-700 font-semibold text-sm hover:bg-dental-100 transition-colors">
                🔗 {{ copied ? (isEn ? 'Link copied ✓' : 'تم نسخ الرابط ✓') : (isEn ? 'Copy link' : 'نسخ الرابط') }}
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
              <a :href="isEn ? '/en/#contact' : '/#contact'" class="btn-primary justify-center w-full text-sm">
                {{ t.nav.bookNow }}
              </a>
            </div>

            <!-- Other services -->
            <div class="bg-white rounded-3xl border border-navy-100 shadow-sm p-6">
              <h3 class="font-bold text-navy-950 mb-4">{{ isEn ? 'More Services' : 'خدمات أخرى' }}</h3>
              <ul class="space-y-3">
                <li v-for="s in otherServices" :key="s.slug">
                  <NuxtLink :to="pathOf(s)"
                            class="flex items-center gap-3 group rounded-xl px-3 py-2 -mx-3 hover:bg-dental-50 transition-colors">
                    <span class="text-2xl flex-shrink-0">{{ s.emoji }}</span>
                    <span class="font-semibold text-navy-800 group-hover:text-dental-700 transition-colors text-sm leading-snug">
                      {{ s[locale]?.title }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Quick facts -->
            <div class="bg-gradient-to-br from-dental-50 to-gold-100 rounded-3xl border border-dental-100 p-6 space-y-3 text-sm text-navy-700">
              <h3 class="font-bold text-navy-950 text-base">{{ isEn ? 'Easy Booking' : 'حجز سهل' }}</h3>
              <p class="flex items-center gap-2">👩‍⚕️ <span dir="ltr">{{ SITE.phones.doctor }}</span></p>
              <p class="flex items-center gap-2">🏥 <span dir="ltr">{{ SITE.phones.clinic }}</span></p>
              <p class="flex items-center gap-2"><IconMapPin class="w-4 h-4 text-dental-600 flex-shrink-0" /> {{ SITE.address.ar }}</p>
            </div>
          </aside>
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
import { services } from '~/content/services'
import type { Service } from '~/content/services'
import { posts } from '~/content/posts'
import { SITE } from '~/site.config'
import avatar from '~/assets/avatar.jpg'

const props = defineProps<{ slug: string; locale: 'ar' | 'en' }>()

const isEn = props.locale === 'en'
const { t } = useLocale(isEn ? '/en/' : '/')
const tOther = isEn ? locales.ar : locales.en
const dir = isEn ? 'ltr' : 'rtl'
const localePath = isEn ? '/en/' : '/'
const homePath = isEn ? '/en/' : '/'
const servicesPath = isEn ? '/en/services' : '/services'

const service = computed(() => services.find((s) => props.locale === 'ar' ? s.slugAr === props.slug : s.slug === props.slug))
const l = computed(() => service.value ? service.value[props.locale] : null)

const pathOf = (s: Service) => (isEn ? '/en/services/' + s.slug : '/services/' + s.slugAr)

const otherServices = computed(() => {
  if (!service.value) return []
  return services.filter((s) => s.slug !== service.value!.slug)
})

const related = computed(() => {
  return posts.slice(0, 3)
})

const domain = useSiteUrl()
const url = computed(() => domain + (isEn ? '/en/services/' + service.value!.slug : '/services/' + service.value!.slugAr))
const ogImage = computed(() => domain + '/og/services/' + service.value!.slug + '.jpg')

const waShare = computed(() => {
  const text = `${l.value!.title} — ${service.value!.emoji}\n${url.value}`
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

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

useHead({
  title: `${l.value!.title} | ${t.seo.title}`,
  htmlAttrs: { lang: isEn ? 'en' : 'ar', dir },
  meta: [
    { name: 'description', content: l.value!.seoDesc },
    { name: 'keywords', content: l.value!.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:title', content: l.value!.title },
    { property: 'og:description', content: l.value!.seoDesc },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url.value },
    { property: 'og:image', content: ogImage.value },
    { property: 'og:image:alt', content: l.value!.title },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:locale', content: isEn ? 'en_US' : 'ar_YE' },
    { property: 'og:site_name', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:locale:alternate', content: isEn ? 'ar_YE' : 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: l.value!.title },
    { name: 'twitter:description', content: l.value!.seoDesc },
    { name: 'twitter:image', content: ogImage.value },
  ],
  link: [
    { rel: 'canonical', href: url.value },
    {
      rel: 'alternate',
      hreflang: isEn ? 'ar' : 'en',
      href: domain + (isEn ? '/services/' + service.value!.slugAr : '/en/services/' + service.value!.slug),
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
            '@type': 'MedicalProcedure',
            '@id': url.value + '#procedure',
            name: l.value!.title,
            description: l.value!.seoDesc,
            image: ogImage.value,
            url: url.value,
            inLanguage: isEn ? 'en' : 'ar',
            provider: { '@id': domain + '/#clinic' },
          },
          {
            '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
            '@id': domain + '/#clinic',
            name: isEn ? SITE.clinicName.en : SITE.clinicName.ar,
            alternateName: isEn ? SITE.clinicName.ar : SITE.clinicName.en,
            url: domain + '/',
            telephone: SITE.phones.clinic.replace(/\s/g, ''),
            address: {
              '@type': 'PostalAddress',
              streetAddress: isEn ? SITE.streetAddress.en : SITE.streetAddress.ar,
              addressLocality: isEn ? SITE.addressLocality.en : SITE.addressLocality.ar,
              addressCountry: 'YE',
            },
            geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
            hasMap: SITE.map.url,
            medicalSpecialty: 'Dentistry',
            openingHoursSpecification: SITE.ldHours.map((h) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: h.days,
              opens: h.open,
              closes: h.close,
            })),
            sameAs: [SITE.map.url, ...SITE.clinicSocials],
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
              { '@type': 'ListItem', position: 2, name: isEn ? 'Services' : 'خدماتنا', item: domain + (isEn ? '/en/services' : '/services') },
              { '@type': 'ListItem', position: 3, name: l.value!.title, item: url.value },
            ],
          },
        ],
      }),
    },
  ],
})
</script>