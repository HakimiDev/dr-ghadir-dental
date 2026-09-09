<template>
  <section class="section-padding bg-gradient-to-b from-dental-50/50 to-white overflow-hidden">
    <div class="container-custom mx-auto">
      <div class="text-center mb-12 md:mb-16 space-y-4 v-reveal">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-gold-400"></span>
          {{ t.testimonials.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.testimonials.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.testimonials.subtitle }}</p>
      </div>

      <div class="relative max-w-4xl mx-auto"
           v-reveal
           @focusin="paused = true"
           @focusout="paused = false"
           @touchstart.passive="onTouchStart"
           @touchend.passive="onTouchEnd">

        <!-- Track -->
        <div class="overflow-hidden rounded-3xl">
          <div class="flex transition-transform duration-500 ease-out" :style="{ transform: `translateX(${trackOffset}%)` }">
            <div v-for="(review, index) in t.testimonials.items" :key="index"
                 class="w-full flex-shrink-0 px-0.5 py-1">
              <figure class="card h-full flex flex-col !p-6 sm:!p-8 md:!p-10 relative">
                <div class="absolute -top-4 -end-4 text-6xl sm:text-[7rem] text-dental-100 font-serif leading-none pointer-events-none select-none hidden sm:block">"</div>
                <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-dental-400 via-gold-400 to-dental-400"></div>
                <div class="relative z-10 flex-1 flex flex-col gap-4 sm:gap-5">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex gap-1">
                      <span v-for="s in review.rating" :key="s" class="text-gold-400 text-lg sm:text-xl drop-shadow-sm">★</span>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full px-2.5 sm:px-3 py-1 whitespace-nowrap">
                      <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                      {{ t.testimonials.verified }}
                    </span>
                  </div>
                  <blockquote class="text-navy-700 leading-relaxed text-base sm:text-lg md:text-xl break-words hyphens-auto">"{{ review.text }}"</blockquote>
                  <figcaption class="flex items-center gap-3 mt-auto pt-2">
                    <div class="relative flex-shrink-0">
                      <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-dental-400 to-dental-600 flex items-center justify-center text-white font-bold text-lg">
                        {{ review.name.charAt(0) }}
                      </div>
                      <span class="absolute -bottom-0.5 -end-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-green-400 border-2 border-white"></span>
                    </div>
                    <div class="min-w-0">
                      <p class="font-bold text-navy-950 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">{{ review.name }}</p>
                      <p class="text-xs sm:text-sm text-dental-600">{{ t.testimonials.badge }}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <!-- Arrows (desktop only; mobile uses swipe + dots) -->
        <button @click="prev" :aria-label="t.testimonials.prev"
                class="hidden md:flex absolute top-1/2 -translate-y-1/2 start-0 lg:-start-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-xl shadow-navy-950/10 text-navy-900 hover:bg-dental-500 hover:text-white border border-navy-100 hover:border-dental-500 items-center justify-center transition-all duration-300 z-20">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" :d="prevIcon"/></svg>
        </button>
        <button @click="next" :aria-label="t.testimonials.next"
                class="hidden md:flex absolute top-1/2 -translate-y-1/2 end-0 lg:-end-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-xl shadow-navy-950/10 text-navy-900 hover:bg-dental-500 hover:text-white border border-navy-100 hover:border-dental-500 items-center justify-center transition-all duration-300 z-20">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" :d="nextIcon"/></svg>
        </button>

        <!-- Dots -->
        <div class="flex items-center justify-center gap-2 mt-8">
          <button v-for="(_, index) in t.testimonials.items" :key="index"
                  @click="goTo(index)"
                  :aria-label="'slide ' + (index + 1)"
                  class="h-2.5 rounded-full transition-all duration-300"
                  :class="active === index ? 'w-8 bg-dental-600' : 'w-2.5 bg-navy-200 hover:bg-dental-300'"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ t: any }>()

const count = computed(() => props.t.testimonials.items.length)
const active = ref(0)
const paused = ref(false)
const isRtl = ref(false)

const trackOffset = computed(() => (isRtl.value ? active.value : -active.value) * 100)

const chevronLeft = 'M15 19l-7-7 7-7'
const chevronRight = 'M9 5l7 7-7 7'
const nextIcon = computed(() => (isRtl.value ? chevronLeft : chevronRight))
const prevIcon = computed(() => (isRtl.value ? chevronRight : chevronLeft))

let timer: ReturnType<typeof setInterval> | null = null
let startX = 0

function goTo(i: number) {
  if (count.value === 0) return
  active.value = (i + count.value) % count.value
  restartAutoplay()
}

function next() {
  goTo(active.value + 1)
}

function prev() {
  goTo(active.value - 1)
}

function onTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - startX
  if (Math.abs(dx) > 40) {
    if (isRtl.value) {
      dx > 0 ? next() : prev()
    } else {
      dx < 0 ? next() : prev()
    }
  }
}

function startAutoplay() {
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 6000)
}

function restartAutoplay() {
  if (timer) clearInterval(timer)
  timer = null
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced && count.value > 1 && !paused.value) startAutoplay()
}

onMounted(() => {
  isRtl.value = document.documentElement.dir === 'rtl'
  restartAutoplay()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>