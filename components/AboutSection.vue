<template>
  <section id="about" class="section-padding bg-white overflow-hidden">
    <div class="container-custom mx-auto">
      <div class="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <!-- Image / Visual -->
        <div class="relative mx-auto lg:mx-0 max-w-md w-full v-reveal">
          <div class="absolute -inset-6 rounded-[2rem] border-2 border-dashed border-dental-200/80 animate-spin-slow"></div>
          <div class="absolute -top-10 -start-10 w-40 h-40 rounded-full bg-gold-200/30 blur-3xl animate-float-slow"></div>
          <div class="absolute bottom-0 -end-10 w-40 h-40 rounded-full bg-dental-200/40 blur-3xl animate-float-delayed"></div>

          <div class="relative z-10 w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-dental-100 to-dental-200 shadow-2xl flex items-center justify-center overflow-hidden p-6">
            <img :src="avatar" :alt="t.about.title" class="w-full h-full object-cover rounded-2xl shadow-inner">
            <div class="absolute bottom-8 inset-x-6">
              <div class="bg-white/85 backdrop-blur rounded-2xl p-4 sm:p-6 shadow-lg text-center">
                <h3 class="text-lg sm:text-xl font-extrabold text-navy-950">{{ t.about.title }}</h3>
                <p class="text-sm text-dental-600 font-semibold mt-1">{{ t.about.degree }}</p>
              </div>
            </div>
          </div>
          <!-- Floating card -->
          <div class="absolute -bottom-10 sm:-bottom-14 left-2 sm:-left-8 right-2 sm:right-auto bg-white rounded-2xl shadow-xl shadow-navy-950/10 p-4 sm:p-6 z-20 flex items-center gap-3 sm:gap-4 animate-float">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold-100 flex items-center justify-center text-3xl flex-shrink-0">🎓</div>
            <div>
              <p class="font-bold text-navy-950 text-sm sm:text-base">{{ t.about.university }}</p>
              <p class="text-xs sm:text-sm text-navy-500">{{ t.about.experience }}</p>
            </div>
          </div>
        </div>

        <!-- Text content -->
        <div class="space-y-5 sm:space-y-6">
          <div class="section-badge v-reveal">
            <span class="w-2 h-2 rounded-full bg-dental-500"></span>
            {{ t.about.badge }}
          </div>
          <h2 class="section-title text-balance v-reveal">{{ t.about.title }}</h2>
          <p class="text-base sm:text-lg text-navy-600 leading-relaxed v-reveal">{{ t.about.p1 }}</p>
          <p class="text-base sm:text-lg text-navy-600 leading-relaxed v-reveal">{{ t.about.p2 }}</p>
          <p class="text-base sm:text-lg text-navy-600 leading-relaxed v-reveal">{{ t.about.p3 }}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 v-reveal">
            <div class="flex items-center gap-3 p-4 rounded-xl bg-dental-50 group hover:shadow-lg hover:shadow-dental-500/10 transition-all duration-300">
              <span class="text-2xl flex-shrink-0">🎓</span>
              <div>
                <p class="font-bold text-navy-950 text-sm">{{ t.about.degree }}</p>
                <p class="text-xs text-navy-500">{{ t.about.university }}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 rounded-xl bg-gold-50 group hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300">
              <span class="text-2xl flex-shrink-0">⏳</span>
              <div>
                <p class="font-bold text-navy-950 text-sm">{{ t.about.experience }}</p>
                <p class="text-xs text-navy-500">{{ t.contact.info[1].label }}: <span dir="ltr">{{ t.contact.info[1].value }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import avatar from '~/assets/avatar.jpg'

defineProps<{ t: any }>()
</script>