<template>
  <section id="services" class="section-padding bg-gradient-to-b from-white via-dental-50/30 to-white">
    <div class="container-custom mx-auto">
      <div class="text-center mb-16 space-y-4">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-dental-500"></span>
          {{ t.services.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.services.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.services.subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in t.services.items" :key="index"
             class="card group cursor-default">
          <div class="card-icon group-hover:scale-110 transition-transform duration-300">
            {{ service.icon }}
          </div>
          <h3 class="text-xl font-bold text-navy-950 mb-3">{{ service.title }}</h3>
          <p class="text-navy-600 leading-relaxed">{{ service.desc }}</p>
          <div class="mt-6 pt-4 border-t border-navy-100">
            <a href="#contact" class="inline-flex items-center gap-2 text-dental-600 font-semibold hover:text-dental-700 transition-colors">
              {{ t.nav.bookNow }}
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ t: any }>()
</script>
