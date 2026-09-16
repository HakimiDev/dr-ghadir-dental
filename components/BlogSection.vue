<template>
  <section id="blog" class="section-padding bg-gradient-to-b from-white via-dental-50/30 to-white">
    <div class="container-custom mx-auto">
      <div class="text-center mb-16 space-y-4 v-reveal">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-dental-500"></span>
          {{ t.blogSection.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.blogSection.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.blogSection.subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard v-for="post in latest" :key="post.slug" :t="t" :post="post" :locale="locale" />
      </div>

      <div class="mt-12 text-center">
        <NuxtLink :to="blogPath" class="btn-primary inline-flex items-center gap-2">
          {{ t.blogSection.viewAll }}
          <svg v-if="locale === 'en'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { posts } from '~/content/posts'

defineProps<{ t: any }>()

const route = useRoute()
const locale = computed<'ar' | 'en'>(() => (route.path.startsWith('/en') ? 'en' : 'ar'))
const blogPath = computed(() => (locale.value === 'en' ? '/en/blog' : '/blog'))
const latest = computed(() =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3)
)
</script>