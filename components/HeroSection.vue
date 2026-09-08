<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-dental-50 via-white to-dental-100"></div>
    <div class="absolute top-20 -left-20 w-96 h-96 bg-dental-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
    <div class="absolute bottom-20 -right-20 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1.5s"></div>

    <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 lg:pt-24">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <!-- Text -->
        <div class="space-y-8 text-center lg:text-start">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-md text-dental-700 font-semibold text-xs sm:text-sm animate-fade-up">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            {{ t.hero.badge }}
          </div>

          <h1 class="text-[2.5rem] leading-[1.25] sm:text-6xl lg:text-7xl font-extrabold animate-fade-up animate-delay-100">
            <span class="block text-navy-950 py-0.5">{{ t.hero.title1 }}</span>
            <span class="block text-dental-600 py-0.5">{{ t.hero.title2 }}</span>
            <span class="block text-gold-500 py-0.5">{{ t.hero.title3 }}</span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-navy-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up animate-delay-200 text-balance">
            {{ t.hero.subtitle }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300 justify-center lg:justify-start">
            <a :href="'#contact'" class="btn-primary justify-center text-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              {{ t.hero.cta }}
            </a>
            <a :href="'#services'" class="btn-secondary justify-center text-center">
              {{ t.hero.ctaSecondary }}
            </a>
          </div>

          <!-- Mini stats -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 pt-4 animate-fade-up animate-delay-400">
            <div class="text-center">
              <p class="text-3xl font-extrabold gradient-text">{{ t.stats.items[0].number }}</p>
              <p class="text-xs sm:text-sm text-navy-500">{{ t.stats.items[0].label }}</p>
            </div>
            <div class="w-px h-12 bg-navy-200 hidden sm:block"></div>
            <div class="flex items-center gap-3">
              <div class="flex -space-x-3">
                <div v-for="i in 4" :key="i" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-br from-dental-300 to-dental-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {{ ['أ', 'ب', 'ج', 'د'][i-1] }}
                </div>
              </div>
              <p class="text-xs sm:text-sm text-navy-500 max-w-[110px] leading-tight ms-2">{{ t.stats.items[1].number }} {{ t.stats.items[1].label }}</p>
            </div>
          </div>
        </div>

        <!-- Visual / Doctor photo -->
        <div class="flex justify-center items-center animate-fade-in">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-dental-400 to-dental-600 opacity-20 blur-2xl scale-110"></div>
            <img :src="avatar" :alt="t.about.title + ' — ' + t.nav.logoTag"
                 class="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white shadow-2xl shadow-dental-500/30">
            <!-- Floating rating card -->
            <div class="absolute -bottom-4 -right-2 sm:-right-6 w-32 sm:w-40 rounded-2xl bg-white shadow-xl p-3 sm:p-4 flex flex-col items-center animate-fade-up animate-delay-300">
              <span class="text-3xl sm:text-4xl mb-1">⭐</span>
              <span class="text-xl sm:text-2xl font-extrabold text-navy-950">5.0</span>
              <span class="text-[10px] sm:text-xs text-navy-500 text-center">{{ t.testimonials.badge }}</span>
            </div>
            <!-- Success card -->
            <div class="absolute -top-4 -left-2 sm:-left-6 w-32 sm:w-36 rounded-2xl bg-white shadow-xl p-3 sm:p-4 flex flex-col items-center animate-fade-up animate-delay-500">
              <span class="text-2xl sm:text-3xl mb-1">🦷</span>
              <span class="text-lg sm:text-xl font-extrabold text-navy-950">{{ t.stats.items[3].number }}</span>
              <span class="text-[10px] sm:text-xs text-navy-500 text-center">{{ t.stats.items[3].label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-[40px] sm:h-[70px] lg:h-auto">
        <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import avatar from '~/assets/avatar.jpg'

defineProps<{ t: any }>()
</script>