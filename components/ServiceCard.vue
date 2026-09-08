<template>
  <NuxtLink :to="link" class="group block bg-white rounded-3xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <!-- Cover -->
    <div class="relative h-40 sm:h-44 flex items-center justify-center bg-gradient-to-br" :class="service.gradient">
      <span class="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{{ service.emoji }}</span>
      <span class="absolute top-3 end-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-bold text-dental-700 shadow-sm">
        {{ t.nav.services }}
      </span>
    </div>

    <!-- Body -->
    <div class="p-5 sm:p-6 space-y-3">
      <h3 class="font-bold text-lg leading-snug text-navy-950 group-hover:text-dental-600 transition-colors line-clamp-2">
        {{ l.title }}
      </h3>
      <p class="text-sm text-navy-600 leading-relaxed line-clamp-2">{{ l.tagline }}</p>
      <span class="inline-flex items-center gap-1 text-dental-600 font-semibold text-sm">
        {{ locale === 'ar' ? 'اعرف المزيد' : 'Learn more' }}
        <svg v-if="locale === 'ar'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Service } from '~/content/services'

const props = defineProps<{ t: any; service: Service; locale: 'ar' | 'en' }>()
const l = computed(() => props.service[props.locale])

const link = computed(() => props.locale === 'ar' ? `/services/${props.service.slugAr}` : `/en/services/${props.service.slug}`)
</script>