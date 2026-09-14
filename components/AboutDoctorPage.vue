<template>
  <div :dir="dir" :lang="locale" class="font-cairo">
    <AppNav :locale-path="localePath" :t="t" />

    <main class="pt-24 pb-20">
      <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="py-6 text-sm text-navy-500 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <NuxtLink :to="homePath" class="hover:text-dental-600 transition-colors">{{ t.nav.home }}</NuxtLink>
          <span class="text-navy-300">›</span>
          <span class="text-navy-700 font-semibold">{{ t.aboutPage.title }}</span>
        </nav>

        <article class="max-w-4xl mx-auto space-y-10">
          <!-- Profile hero -->
          <section class="card p-8 sm:p-10 text-center">
            <img :src="avatar" :alt="t.about.title" width="160" height="160" decoding="async" fetchpriority="high"
                 class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-8 ring-dental-100 shadow-2xl shadow-dental-500/20 mx-auto">
            <h1 class="mt-6 text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-navy-950 text-balance">{{ t.aboutPage.title }}</h1>
            <p class="mt-2 text-dental-600 font-bold text-lg">{{ t.about.degree }}</p>
            <p class="text-navy-500">{{ t.about.university }}</p>
            <p class="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">{{ t.about.experience }}</p>
            <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-navy-600">
              <span>📍 {{ SITE.address[locale] }}</span>
              <span dir="ltr">📞 {{ SITE.phones.doctor }}</span>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a :href="homePath + '#contact'" class="btn-primary justify-center">{{ t.nav.bookNow }}</a>
              <NuxtLink :to="servicesPath" class="btn-secondary justify-center">{{ t.nav.services }}</NuxtLink>
            </div>
          </section>

          <!-- Tagline -->
          <p class="text-center text-navy-600 text-lg leading-relaxed text-balance">{{ t.aboutPage.tagline }}</p>

          <!-- Bio -->
          <section class="card p-8 sm:p-9 space-y-4">
            <h2 class="flex items-center gap-3 text-xl font-extrabold text-navy-950">
              <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>{{ t.nav.about }}
            </h2>
            <p v-for="(p, i) in t.aboutPage.bio" :key="i" class="text-navy-700 leading-relaxed">{{ p }}</p>
          </section>

          <!-- Education + Practice -->
          <section class="grid md:grid-cols-2 gap-6">
            <div class="card p-6 space-y-3">
              <h3 class="font-bold text-navy-950 text-lg">{{ t.aboutPage.educationTitle }}</h3>
              <p class="text-navy-700">{{ t.about.degree }}</p>
              <p class="text-navy-600">{{ t.about.university }}</p>
            </div>
            <div class="card p-6 space-y-3">
              <h3 class="font-bold text-navy-950 text-lg">{{ t.aboutPage.professionalTitle }}</h3>
              <ul class="space-y-2 text-navy-700 text-sm">
                <li v-for="s in services" :key="s.slug" class="flex items-center gap-2">
                  <span class="text-dental-500">✔</span>{{ s[locale].title }}
                </li>
              </ul>
            </div>
          </section>

          <!-- Services links -->
          <section class="card p-8 sm:p-9">
            <h2 class="flex items-center gap-3 text-xl font-extrabold text-navy-950 mb-5">
              <span class="w-8 h-1.5 rounded-full bg-gold-500 inline-block"></span>{{ t.aboutPage.servicesTitle }}
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <NuxtLink v-for="s in services" :key="s.slug" :to="pathOf(s)"
                        class="group flex items-center gap-3 rounded-2xl border border-navy-100 p-4 hover:shadow-lg hover:shadow-dental-500/10 hover:border-dental-300 transition-all duration-300">
                <span class="text-3xl flex-shrink-0">{{ s.emoji }}</span>
                <div>
                  <p class="font-bold text-navy-950 group-hover:text-dental-600 transition-colors text-sm sm:text-base">{{ s[locale].title }}</p>
                  <p class="text-xs text-navy-500 leading-snug mt-0.5">{{ s[locale].tagline }}</p>
                </div>
              </NuxtLink>
            </div>
          </section>

          <!-- Clinic / NAP -->
          <section class="card p-8 sm:p-9">
            <h2 class="flex items-center gap-3 text-xl font-extrabold text-navy-950 mb-5">
              <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>{{ t.aboutPage.clinicTitle }}
            </h2>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="space-y-3 text-navy-700 text-sm">
                <p class="font-bold text-navy-950 text-lg">{{ t.nav.logoBrand }}</p>
                <p class="flex items-start gap-2">📍 <span>{{ SITE.address[locale] }}</span></p>
                <p class="flex items-center gap-2">👩‍⚕️ <span dir="ltr">{{ SITE.phones.doctor }}</span></p>
                <p class="flex items-center gap-2">🏥 <span dir="ltr">{{ SITE.phones.clinic }}</span></p>
              </div>
              <div>
                <p class="font-bold text-navy-900 mb-2 flex items-center gap-2">🕐 {{ t.seo.hoursTitle }}</p>
                <ul class="space-y-1.5 text-sm text-navy-600">
                  <li v-for="h in t.contact.hours" :key="h.days">{{ h.days }}: {{ h.time }}</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-3">
                  <a :href="SITE.map.url" target="_blank" rel="noopener" class="btn-secondary justify-center text-sm">{{ t.contact.openMap }}</a>
                  <a :href="SITE.phones.doctorWa" target="_blank" rel="noopener" class="btn-primary justify-center text-sm">💬 {{ t.contact.waTitle }}</a>
                </div>
                <div class="mt-4 flex flex-wrap items-center gap-3">
                  <span class="text-sm font-semibold text-navy-900">{{ isEn ? 'Follow Dr. Ghadeer' : 'تابع د. غدير' }}</span>
                  <a v-for="s in doctorSocialLinks" :key="s.href" :href="s.href" target="_blank" rel="noopener noreferrer"
                     class="w-10 h-10 rounded-xl bg-navy-50 border border-navy-100 hover:bg-dental-600 hover:text-white flex items-center justify-center transition-colors text-lg" :title="s.label">{{ s.icon }}</a>
                </div>
              </div>
            </div>
          </section>

          <!-- External reference -->
          <section class="card p-8 sm:p-9 border-dashed border-gold-300">
            <h2 class="flex items-center gap-3 text-xl font-extrabold text-navy-950 mb-4">
              <span class="w-8 h-1.5 rounded-full bg-gold-500 inline-block"></span>{{ t.aboutPage.externalRefTitle }}
            </h2>
            <p class="text-navy-700 leading-relaxed">{{ t.aboutPage.externalRefIntro }}</p>
            <a :href="SITE.shibaListing.url" target="_blank" rel="noopener noreferrer"
               class="mt-4 inline-flex items-center gap-2 text-dental-600 font-bold hover:text-dental-700 hover:underline transition-colors">
              <span class="text-lg" aria-hidden="true">↗</span>{{ t.aboutPage.externalRefLink }}
            </a>
          </section>

          <!-- Verification -->
          <section class="bg-gradient-to-br from-dental-50 to-gold-100 rounded-3xl border border-dental-100 p-8">
            <h2 class="flex items-center gap-3 text-lg font-extrabold text-navy-950 mb-4">
              <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>{{ t.aboutPage.verifyTitle }}
            </h2>
            <ul class="space-y-2 text-navy-700 text-sm sm:text-base">
              <li v-for="(v, i) in t.aboutPage.verify" :key="i" class="flex items-start gap-2">
                <span class="text-dental-600 flex-shrink-0">✔</span>{{ v }}
              </li>
            </ul>
          </section>

          <!-- CTA -->
          <section class="text-center rounded-3xl bg-navy-950 text-white p-8 sm:p-10">
            <h2 class="text-2xl sm:text-3xl font-extrabold">{{ t.contact.ctaTitle }}</h2>
            <p class="mt-2 text-navy-300">{{ t.aboutPage.ctaSubtitle }}</p>
            <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a :href="homePath + '#contact'" class="btn-primary justify-center">{{ t.nav.bookNow }}</a>
              <a :href="SITE.phones.doctorTel" class="btn-secondary justify-center" dir="ltr">📞 {{ SITE.phones.doctor }}</a>
            </div>
          </section>
        </article>
      </div>
    </main>

    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
import { services } from '~/content/services'
import { SITE } from '~/site.config'
import avatar from '~/assets/avatar.jpg'

const props = defineProps<{ locale: 'ar' | 'en' }>()

const isEn = props.locale === 'en'
const { t } = useLocale(isEn ? '/en/' : '/')
const dir = isEn ? 'ltr' : 'rtl'
const localePath = isEn ? '/en/' : '/'
const homePath = isEn ? '/en/' : '/'
const servicesPath = isEn ? '/en/services' : '/services'

const pathOf = (s: { slug: string; slugAr: string }) =>
  (isEn ? '/en/services/' : '/services/') + (isEn ? s.slug : s.slugAr)

const doctorSocialLinks = [
  { href: SITE.doctorSocials[0], label: 'Facebook', icon: '📘' },
  { href: SITE.doctorSocials[1], label: 'Instagram', icon: '📷' },
]

const domain = useSiteUrl()
const url = computed(() => domain + (isEn ? '/en/about' : '/about'))

const schema = useEntitySchema(isEn, t.aboutPage.seoDescription)

useHead({
  title: t.aboutPage.seoTitle,
  htmlAttrs: { lang: isEn ? 'en' : 'ar', dir },
  meta: [
    { name: 'description', content: t.aboutPage.seoDescription },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:title', content: t.aboutPage.seoTitle },
    { property: 'og:description', content: t.aboutPage.seoDescription },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: url.value },
    { property: 'og:image', content: domain + '/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:locale', content: isEn ? 'en_US' : 'ar_YE' },
    { property: 'og:site_name', content: isEn ? SITE.doctorName.en : SITE.doctorName.ar },
    { property: 'og:locale:alternate', content: isEn ? 'ar_YE' : 'en_US' },
    { property: 'profile:first_name', content: 'غدير' },
    { property: 'profile:last_name', content: 'الحمادي' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.aboutPage.seoTitle },
    { name: 'twitter:description', content: t.aboutPage.seoDescription },
    { name: 'twitter:image', content: domain + '/og-image.jpg' },
  ],
  link: [
    { rel: 'canonical', href: url.value },
    {
      rel: 'alternate',
      hreflang: isEn ? 'ar' : 'en',
      href: domain + (isEn ? '/about' : '/en/about'),
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
            '@type': ['ProfilePage', 'WebPage'],
            '@id': url.value + '#page',
            url: url.value,
            name: t.aboutPage.seoTitle,
            description: t.aboutPage.seoDescription,
            inLanguage: isEn ? 'en' : 'ar',
            isPartOf: { '@id': domain + '/#website' },
            mainEntity: { '@id': domain + '/#doctor' },
          },
          schema.doctor,
          schema.clinic,
          schema.website,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'الرئيسية', item: domain + (isEn ? '/en/' : '/') },
              { '@type': 'ListItem', position: 2, name: isEn ? SITE.doctorName.en : SITE.doctorName.ar, item: url.value },
            ],
          },
        ],
      }),
    },
  ],
})
</script>