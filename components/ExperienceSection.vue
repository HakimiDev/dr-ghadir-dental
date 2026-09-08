<template>
  <section id="experience" class="section-padding bg-white">
    <div class="container-custom mx-auto">
      <div class="text-center mb-16 space-y-4 v-reveal">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-gold-400"></span>
          {{ t.experience.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.experience.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.experience.subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in t.experience.items" :key="index"
             v-reveal="{ delay: (index % 3) * 120 }"
             class="relative p-8 rounded-2xl bg-gradient-to-br from-navy-50 to-white border border-navy-100 hover:border-dental-300 hover:shadow-xl hover:shadow-dental-500/10 hover:-translate-y-1 transition-all duration-300 group">
          <div class="absolute top-6 left-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
            {{ item.icon }}
          </div>
          <div class="relative z-10 space-y-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-dental-500 to-dental-600 flex items-center justify-center text-2xl text-white shadow-lg shadow-dental-500/20 group-hover:scale-110 transition-transform">
              {{ item.icon }}
            </div>
            <h3 class="text-xl font-bold text-navy-950">{{ item.title }}</h3>
            <p class="text-navy-600 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ t: any }>()
</script>
