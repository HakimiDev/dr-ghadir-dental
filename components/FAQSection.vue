<template>
  <section id="faq" class="section-padding bg-gradient-to-b from-white to-dental-50/60">
    <div class="container-custom mx-auto">
      <div class="text-center mb-12 md:mb-14 space-y-4">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-dental-500"></span>
          {{ t.faq.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.faq.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.faq.subtitle }}</p>
      </div>

      <div class="max-w-3xl mx-auto space-y-3">
        <details v-for="(item, i) in t.faq.items" :key="i" :open="i === 0"
                 class="group rounded-2xl bg-white border border-navy-100 shadow-sm hover:shadow-lg hover:border-dental-200 transition-all duration-300 overflow-hidden">
          <summary class="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 select-none">
            <span class="font-bold text-navy-950 text-sm sm:text-base leading-relaxed">{{ item.q }}</span>
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-dental-50 text-dental-600 flex items-center justify-center group-open:bg-dental-500 group-open:text-white transition-colors">
              <svg class="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </span>
          </summary>
          <div class="px-5 sm:px-6 pb-5 sm:pb-6 text-navy-600 text-sm sm:text-base leading-relaxed border-t border-navy-50 pt-4">
            {{ item.a }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ t: any }>()
</script>