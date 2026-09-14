<template>
  <div :dir="dir" :lang="lang" class="font-cairo min-h-screen bg-gradient-to-b from-white via-dental-50/40 to-white">
    <AppNav :locale-path="localePath" :t="t" />

    <main class="pt-28 pb-20">
      <!-- Error Hero -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-dental-50 via-white to-gold-100"></div>
        <div class="absolute top-10 -left-20 w-80 h-80 bg-dental-300/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 -right-10 w-64 h-64 bg-gold-200/40 rounded-full blur-3xl"></div>

        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-16 animate-fade-up">
          <!-- Error card -->
          <div class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-dental-900 text-white p-8 sm:p-12 lg:p-14 shadow-2xl shadow-navy-950/20">
            <div class="absolute -top-16 -end-16 w-56 h-56 bg-dental-500/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-16 -start-16 w-56 h-56 bg-gold-500/15 rounded-full blur-3xl"></div>

            <div class="relative space-y-8">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 w-fit">
                <span class="w-2 h-2 rounded-full animate-pulse" :class="is404 ? 'bg-gold-400' : 'bg-red-400'"></span>
                <span class="text-xs sm:text-sm font-semibold text-navy-100">{{ badgeText }}</span>
              </div>

              <!-- Status code -->
              <div class="space-y-4">
                <span class="block text-7xl sm:text-8xl lg:text-[7.5rem] font-extrabold leading-none bg-gradient-to-br from-dental-300 to-gold-400 bg-clip-text text-transparent select-none">
                  {{ statusCode }}
                </span>
                <h1 class="text-3xl sm:text-4xl font-extrabold leading-snug text-balance max-w-2xl">
                  {{ heading }}
                </h1>
                <p class="text-navy-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {{ message }}
                </p>
              </div>

              <!-- Actions -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button type="button" @click="goHome"
                        class="btn-primary w-full sm:w-auto !px-8 !py-3 justify-center">
                  🏠 {{ t.nav.home }}
                </button>
                <NuxtLink :to="servicesPath"
                          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-white font-bold hover:bg-white/20 transition-colors">
                  🦷 {{ t.nav.services }}
                </NuxtLink>
                <NuxtLink :to="blogPath"
                          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-white font-bold hover:bg-white/20 transition-colors">
                  📖 {{ t.nav.blog }}
                </NuxtLink>
              </div>

              <!-- Quick contact -->
              <div class="flex flex-wrap items-center gap-2 text-sm text-navy-300">
                <a :href="'tel:' + SITE.phones.doctor" dir="ltr" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  👩‍⚕️ {{ SITE.phones.doctor }}
                </a>
                <a :href="SITE.phones.doctorWa" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <IconWhatsApp class="w-4 h-4" /> {{ isEn ? 'WhatsApp' : 'واتساب' }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Suggested pages -->
      <section v-if="is404" class="container-custom mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 class="font-extrabold text-2xl sm:text-3xl text-navy-950 flex items-center gap-3 mb-8">
          <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>
          {{ isEn ? 'You might be looking for' : 'قد تكون تبحث عن' }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Services -->
          <NuxtLink :to="servicesPath" class="card group relative overflow-hidden hover:-translate-y-2">
            <div class="relative">
              <div class="card-icon group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">🦷</div>
              <h3 class="text-xl font-bold text-navy-950 mb-3 group-hover:text-dental-600 transition-colors">{{ t.services.title }}</h3>
              <p class="text-navy-600 leading-relaxed">{{ t.services.subtitle }}</p>
            </div>
          </NuxtLink>
          <!-- Blog -->
          <NuxtLink :to="blogPath" class="card group relative overflow-hidden hover:-translate-y-2">
            <div class="relative">
              <div class="card-icon group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">📖</div>
              <h3 class="text-xl font-bold text-navy-950 mb-3 group-hover:text-dental-600 transition-colors">{{ t.blog.title }}</h3>
              <p class="text-navy-600 leading-relaxed">{{ t.blog.subtitle }}</p>
            </div>
          </NuxtLink>
          <!-- Contact -->
          <a :href="contactPath" class="card group relative overflow-hidden hover:-translate-y-2">
            <div class="relative">
              <div class="card-icon group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">📞</div>
              <h3 class="text-xl font-bold text-navy-950 mb-3 group-hover:text-dental-600 transition-colors">{{ t.contact.title }}</h3>
              <p class="text-navy-600 leading-relaxed">{{ t.contact.subtitle }}</p>
            </div>
          </a>
        </div>
      </section>
    </main>

    <AppFooter :t="t" />
    <FloatingUI :t="t" />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { useLocale, locales } from '~/composables/useLocale'
import { SITE } from '~/site.config'

const props = defineProps<{ error?: NuxtError }>()

const err = computed(() => props.error || useError().value)

const pathOf = (url?: string) => {
  if (!url) return ''
  try {
    return new URL(url).pathname
  } catch {
    return url
  }
}

const isEn = computed(() => pathOf(err.value?.url).startsWith('/en') || pathOf(err.value?.url).startsWith('/en/'))
const lang = computed(() => (isEn.value ? 'en' : 'ar'))
const dir = computed(() => (isEn.value ? 'ltr' : 'rtl'))
const localePath = computed(() => (isEn.value ? '/en/' : '/'))
const servicesPath = computed(() => (isEn.value ? '/en/services' : '/services'))
const blogPath = computed(() => (isEn.value ? '/en/blog' : '/blog'))
const contactPath = computed(() => localePath.value + '#contact')

const { t } = useLocale(isEn.value ? '/en/' : '/')

const statusCode = computed(() => err.value?.statusCode || 404)
const is404 = computed(() => statusCode.value === 404)

const badgeText = computed(() => {
  if (is404.value) return isEn.value ? 'Page Not Found' : 'الصفحة غير موجودة'
  return isEn.value ? 'Something Went Wrong' : 'حدث خطأ غير متوقع'
})

const heading = computed(() => {
  if (is404.value) return isEn.value ? 'The page you were looking for is not here' : 'الصفحة التي تبحث عنها غير موجودة'
  return isEn.value ? 'Something went wrong, but your smile is safe' : 'حصل خطأ ما، لكن ابتسامتك بخير'
})

const message = computed(() => {
  if (is404.value) {
    return isEn.value
      ? 'The link might be broken, the page might have moved, or it never existed. Let\'s help you find the right page — your smile is just a click away.'
      : 'قد يكون الرابط معطلاً أو أن الصفحة نُقلت أو لم تكن موجودة أصلاً. دعنا نرشدك إلى المكان الصحيح — ابتسامتك على بُعد نقرة واحدة.'
  }
  return isEn.value
    ? 'An unexpected error occurred while loading this page. Please try again, or head back home and we will take care of the rest.'
    : 'حدث خطأ غير متوقع أثناء تحميل الصفحة. حاول مجدداً، أو عد إلى الرئيسية وسنتكفل بالباقي.'
})

const home = computed(() => localePath.value)
const goHome = () => clearError({ redirect: home.value })

useHead({
  title: `${statusCode.value} | ${isEn.value ? SITE.doctorName.en : SITE.doctorName.ar}`,
  htmlAttrs: { lang: lang.value, dir: dir.value },
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: message.value },
  ],
})
</script>