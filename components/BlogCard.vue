<template>
  <NuxtLink :to="link" class="group block bg-white rounded-3xl overflow-hidden border border-navy-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <!-- Cover -->
    <div class="relative h-40 sm:h-44 flex items-center justify-center bg-gradient-to-br from-dental-100 via-white to-gold-200">
      <span class="text-6xl group-hover:scale-110 transition-transform duration-300">{{ post.emoji }}</span>
      <span class="absolute top-3 end-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-bold text-dental-700 shadow-sm">
        {{ l.tags[0] }}
      </span>
    </div>

    <!-- Body -->
    <div class="p-5 sm:p-6 space-y-3">
      <div class="flex items-center gap-3 text-xs text-navy-500">
        <time :datetime="post.date">{{ formattedDate }}</time>
        <span class="w-1 h-1 rounded-full bg-navy-300"></span>
        <span>{{ l.readMinutes }} {{ t.blog.min }} 📖</span>
      </div>
      <h3 class="font-bold text-lg leading-snug text-navy-950 group-hover:text-dental-600 transition-colors line-clamp-2">
        {{ l.title }}
      </h3>
      <p class="text-sm text-navy-600 leading-relaxed line-clamp-3">{{ l.excerpt }}</p>
      <span class="inline-flex items-center gap-1 text-dental-600 font-semibold text-sm">
        {{ locale === 'ar' ? 'اقرأ المزيد' : 'Read more' }}
        <svg v-if="locale === 'ar'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/content/posts'

const props = defineProps<{ t: any; post: Post; locale: string }>()
const l = computed(() => props.post[props.locale as 'ar' | 'en'])

const link = computed(() => props.locale === 'ar' ? `/blog/${props.post.slugAr}` : `/en/blog/${props.post.slug}`)

const formattedDate = computed(() => {
  const d = new Date(props.post.date)
  return props.locale === 'ar'
    ? d.toLocaleDateString('ar-YE', { year: 'numeric', month: 'long', day: 'numeric' })
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>