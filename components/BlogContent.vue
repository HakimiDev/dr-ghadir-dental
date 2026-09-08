<template>
  <article class="space-y-6 text-navy-800 leading-relaxed">
    <template v-for="(b, i) in blocks" :key="i">
      <!-- Paragraph -->
      <p v-if="b.type === 'p'" class="text-base sm:text-lg text-navy-700 leading-relaxed">
        {{ b.text }}
      </p>

      <!-- Heading -->
      <h2 v-else-if="b.type === 'h2'" class="!mt-10 font-extrabold text-2xl sm:text-[1.7rem] text-navy-950 flex items-center gap-3">
        <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>
        {{ b.text }}
      </h2>

      <!-- Bullet list -->
      <ul v-else-if="b.type === 'ul'" class="space-y-3">
        <li v-for="(item, j) in b.items" :key="j" class="flex items-start gap-3">
          <span class="mt-1.5 w-5 h-5 flex-shrink-0 rounded-full bg-dental-100 text-dental-600 flex items-center justify-center text-xs font-bold">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <!-- Quote -->
      <blockquote v-else-if="b.type === 'quote'" class="relative border-s-4 border-gold-500 bg-gold-50 rounded-2xl p-5 sm:p-6 text-dental-800 font-semibold text-base sm:text-lg">
        “{{ b.text }}”
      </blockquote>

      <!-- Callout -->
      <div v-else-if="b.type === 'callout'" class="rounded-2xl border border-dental-200 bg-dental-50 p-5 sm:p-6">
        <h3 v-if="b.title" class="font-bold text-dental-700 mb-1.5 flex items-center gap-2">
          <span>💡</span>{{ b.title }}
        </h3>
        <p class="text-dental-900/90">{{ b.text }}</p>
      </div>

      <!-- FAQ -->
      <div v-else-if="b.type === 'faq'" class="!mt-10">
        <h2 class="font-extrabold text-2xl sm:text-[1.7rem] text-navy-950 flex items-center gap-3">
          <span class="w-8 h-1.5 rounded-full bg-dental-500 inline-block"></span>
          {{ t.blog.faqTitle }}
        </h2>
        <div class="mt-5 space-y-4">
          <details v-for="(item, j) in b.items" :key="j" class="group bg-white rounded-2xl border border-navy-100 shadow-sm open:shadow-md transition-shadow">
            <summary class="cursor-pointer list-none flex items-center justify-between gap-4 p-4 sm:p-5 font-bold text-navy-900">
              <span>{{ item.q }}</span>
              <span class="text-dental-500 text-sm transition-transform duration-300 group-open:rotate-45">＋</span>
            </summary>
            <p class="px-4 sm:px-5 pb-5 pt-0 text-navy-700 text-sm sm:text-base">{{ item.a }}</p>
          </details>
        </div>
      </div>

      <!-- CTA -->
      <div v-else-if="b.type === 'cta'" class="!mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-dental-900 p-7 sm:p-9 text-center">
        <div class="absolute -top-10 -end-10 w-40 h-40 bg-dental-500/20 rounded-full blur-2xl"></div>
        <div class="absolute -bottom-10 -start-10 w-40 h-40 bg-gold-500/20 rounded-full blur-2xl"></div>
        <div class="relative space-y-4">
          <p class="text-2xl sm:text-3xl font-extrabold text-white">{{ t.blog.ctaTitle }}</p>
          <p class="text-navy-300 max-w-xl mx-auto">{{ t.blog.ctaSubtitle }}</p>
          <a :href="ctaHref" class="inline-flex items-center gap-2 btn-primary">
            {{ t.nav.bookNow }} <span>→</span>
          </a>
        </div>
      </div>
    </template>
  </article>
</template>

<script setup lang="ts">
import type { Block } from '~/content/posts'

const props = defineProps<{ t: any; blocks: Block[]; locale: string }>()
const ctaHref = computed(() => props.locale === 'ar' ? '/#contact' : '/en/#contact')
</script>