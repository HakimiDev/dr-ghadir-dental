<template>
  <section class="section-padding bg-gradient-to-b from-dental-50/50 to-white">
    <div class="container-custom mx-auto">
      <div class="text-center mb-16 space-y-4">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-gold-400"></span>
          {{ t.testimonials.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.testimonials.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.testimonials.subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div v-for="(review, index) in t.testimonials.items" :key="index"
             class="card relative overflow-hidden">
          <!-- Quote mark -->
          <div class="absolute top-4 left-4 text-6xl text-dental-100 font-serif leading-none">"</div>
          <div class="relative z-10 space-y-4">
            <!-- Stars -->
            <div class="flex gap-1">
              <span v-for="s in review.rating" :key="s" class="text-gold-400 text-xl">★</span>
            </div>
            <p class="text-navy-700 leading-relaxed text-lg italic">"{{ review.text }}"</p>
            <div class="flex items-center gap-3 pt-2">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-dental-400 to-dental-600 flex items-center justify-center text-white font-bold text-lg">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <p class="font-bold text-navy-950">{{ review.name }}</p>
                <p class="text-sm text-dental-600">{{ t.testimonials.badge }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ t: any }>()
</script>
