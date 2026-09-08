<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-dental-600 via-dental-700 to-dental-800"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-[10%] text-[15rem]">🦷</div>
      <div class="absolute bottom-10 right-[10%] text-[10rem]">✨</div>
    </div>

    <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, index) in t.stats.items" :key="index"
             class="text-center text-white space-y-2">
          <div class="text-4xl mb-3">{{ stat.icon }}</div>
          <p class="text-4xl md:text-5xl lg:text-6xl font-extrabold">{{ stat.number }}</p>
          <p class="text-dental-200 font-medium text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ t: any }>()
</script>
