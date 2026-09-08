<template>
  <div :dir="dir" :lang="lang" class="font-cairo min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-dental-900 text-white flex items-center justify-center relative overflow-hidden px-4">
    <!-- Decorative blobs -->
    <div class="absolute -top-24 -start-24 w-96 h-96 bg-dental-500/20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 -end-24 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-dental-400/10 rounded-full blur-2xl"></div>

    <main class="relative text-center max-w-xl animate-fade-up space-y-8 py-10">
      <!-- Logo mark -->
      <NuxtLink :to="home" class="inline-flex items-center gap-3 group">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-dental-500 to-dental-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-dental-500/40 group-hover:shadow-dental-500/60 transition-shadow">
          {{ isEn ? 'G' : 'غ' }}
        </div>
        <div class="text-start">
          <p class="font-bold text-lg leading-tight">{{ isEn ? 'Dr. Ghadir Al-Hamadi' : 'د. غدير الحمادي' }}</p>
          <p class="text-xs text-dental-400 font-medium">{{ isEn ? 'Dentistry' : 'طب أسنان' }}</p>
        </div>
      </NuxtLink>

      <div class="space-y-5">
        <span class="text-7xl sm:text-8xl font-extrabold leading-none bg-gradient-to-br from-dental-300 to-gold-400 bg-clip-text text-transparent">
          {{ statusCode }}
        </span>
        <h1 class="text-2xl sm:text-3xl font-extrabold leading-snug">
          {{ heading }}
        </h1>
        <p class="text-navy-200 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          {{ message }}
        </p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button type="button" @click="goHome"
                class="btn-primary w-full sm:w-auto !px-8 !py-3 justify-center">
          🏠 {{ isEn ? 'Back to Home' : 'العودة للرئيسية' }}
        </button>
        <NuxtLink :to="isEn ? '/en/services' : '/services'"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-white font-bold hover:bg-white/20 transition-colors">
          🦷 {{ isEn ? 'Our Services' : 'خدماتنا' }}
        </NuxtLink>
      </div>

      <!-- Quick contact -->
      <div class="flex flex-wrap items-center justify-center gap-2 text-sm text-navy-300 pt-2">
        <a :href="'tel:' + SITE.phones.doctor" dir="ltr" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          👩‍⚕️ {{ SITE.phones.doctor }}
        </a>
        <a :href="SITE.phones.doctorWa" target="_blank" rel="noopener" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          💬 WhatsApp
        </a>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SITE } from '~/site.config'

const error = useError()
const route = useRoute()

const isEn = computed(() => {
  const url = error.value?.url || route.path
  return url.startsWith('/en')
})

const lang = computed(() => (isEn.value ? 'en' : 'ar'))
const dir = computed(() => (isEn.value ? 'ltr' : 'rtl'))
const home = computed(() => (isEn.value ? '/en/' : '/'))

const statusCode = computed(() => error.value?.statusCode || 404)
const is404 = computed(() => statusCode.value === 404)

const heading = computed(() => {
  if (!is404.value) return isEn.value ? 'Something Went Wrong' : 'حدث خطأ ما'
  return isEn.value ? 'Page Not Found' : 'الصفحة غير موجودة'
})

const message = computed(() => {
  if (!is404.value) {
    return isEn.value
      ? 'An unexpected error occurred. Please try again or go back to the home page.'
      : 'حدث خطأ غير متوقع. حاول مجدداً أو عد إلى الصفحة الرئيسية.'
  }
  return isEn.value
    ? error.value?.statusMessage || 'The page you are looking for was moved, removed, or never existed. Let\'s get you back to your smile.'
    : 'الصفحة التي تبحث عنها نُقلت أو حُذفت أو لم تكن موجودة أصلاً. دعنا نعيدك إلى ابتسامتك.'
})

const goHome = () => clearError({ redirect: home.value })
</script>