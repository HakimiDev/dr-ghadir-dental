<template>
  <div dir="ltr" lang="en" class="font-inter">
    <AppNav locale-path="/en/" :t="t" />
    <main>
      <HeroSection :t="t" />
      <AboutSection :t="t" />
      <ServicesSection :t="t" />
      <StatsSection :t="t" />
      <ExperienceSection :t="t" />
      <TestimonialsSection :t="t" />
      <FAQSection :t="t" />
      <ContactSection :t="t" />
    </main>
    <AppFooter :t="t" />
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'
import { SITE } from '~/site.config'

const { t } = useLocale('/en')

const url = useSiteUrl() + '/en/'
const arUrl = useSiteUrl() + '/'
const ogImage = url + 'og-image.png'

useHead({
  title: t.seo.title,
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  meta: [
    { name: 'description', content: t.seo.description },
    { name: 'keywords', content: t.seo.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { name: 'author', content: SITE.doctorName.en },
    { name: 'theme-color', content: '#0e8fbd' },
    { name: 'geo.region', content: 'YE-SA' },
    { name: 'geo.placename', content: "Sana'a" },
    { name: 'geo.position', content: `${SITE.geo.latitude};${SITE.geo.longitude}` },
    { name: 'ICBM', content: `${SITE.geo.latitude}, ${SITE.geo.longitude}` },
    { property: 'og:title', content: t.seo.title },
    { property: 'og:description', content: t.seo.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: t.seo.title },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: SITE.doctorName.en },
    { property: 'og:alternate:locale', content: 'ar_YE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.seo.title },
    { name: 'twitter:description', content: t.seo.description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:image:alt', content: t.seo.title },
    { name: 'twitter:site', content: '@drghadir_dental' },
  ],
  link: [
    { rel: 'canonical', href: url },
    { rel: 'alternate', hreflang: 'ar', href: arUrl },
    { rel: 'alternate', hreflang: 'en', href: url },
    { rel: 'alternate', hreflang: 'x-default', href: arUrl },
  ],
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['Dentist', 'Physician', 'MedicalBusiness'],
            '@id': url + '#doctor',
            name: SITE.doctorName.en,
            alternateName: SITE.doctorName.ar,
            description: t.seo.description,
            url,
            image: ogImage,
            telephone: SITE.phones.doctor.replace(/\s/g, ''),
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Al-Zubairy Street',
              addressLocality: "Sana'a",
              addressCountry: 'YE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: SITE.geo.latitude,
              longitude: SITE.geo.longitude,
            },
            hasMap: SITE.map.url,
            medicalSpecialty: 'Dentistry',
            openingHoursSpecification: SITE.ldHours.map((h) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: h.days,
              opens: h.open,
              closes: h.close,
            })),
            availableService: [
              { '@type': 'MedicalProcedure', name: 'Orthodontics' },
              { '@type': 'MedicalProcedure', name: 'Cosmetic Fillings' },
              { '@type': 'MedicalProcedure', name: 'Tooth Extraction' },
              { '@type': 'MedicalProcedure', name: 'Dental Implants' },
              { '@type': 'MedicalProcedure', name: 'Gum Treatment' },
              { '@type': 'MedicalProcedure', name: 'Teeth Whitening' },
            ],
            sameAs: [SITE.map.label],
            datePublished: '2026-09-01',
            dateModified: '2026-09-08',
          },
          {
            '@type': 'Person',
            '@id': url + '#person',
            name: SITE.doctorName.en,
            alternateName: SITE.doctorName.ar,
            image: ogImage,
            url,
            jobTitle: 'Dentist',
            worksFor: { '@id': url + '#doctor' },
            telephone: SITE.phones.doctor.replace(/\s/g, ''),
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Science and Technology' },
            knowsAbout: ['Orthodontics', 'Dental Implants', 'Cosmetic Dentistry'],
          },
          {
            '@type': 'WebSite',
            '@id': url + '#website',
            url,
            name: SITE.doctorName.en,
            alternateName: SITE.doctorName.ar,
            inLanguage: ['en', 'ar'],
          },
          {
            '@type': 'BreadcrumbList',
            '@id': url + '#breadcrumb',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: url },
              { '@type': 'ListItem', position: 2, name: SITE.doctorName.en, item: url + '#about' },
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