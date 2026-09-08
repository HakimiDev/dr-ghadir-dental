<template>
  <section class="relative py-20 overflow-hidden"
           ref="section">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-dental-600 via-dental-700 to-dental-800"></div>
    <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-dental-400/10 blur-3xl"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-[10%] text-[15rem]">🦷</div>
      <div class="absolute bottom-10 right-[10%] text-[10rem]">✨</div>
    </div>

    <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        <div v-for="stat in statModel" :key="stat.label" class="text-center text-white space-y-2">
          <div class="text-4xl mb-3 drop-shadow-lg">{{ stat.icon }}</div>
          <p class="text-4xl md:text-5xl lg:text-6xl font-extrabold tabular-nums" dir="ltr">
            <span>{{ stat.prefix }}</span>{{ display(stat.target) }}<span>{{ stat.suffix }}</span>
          </p>
          <p class="text-dental-200 font-medium text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ t: any }>()

const section = ref<HTMLElement>()
const started = ref(false)

const statModel = computed(() =>
  props.t.stats.items.map((s: any) => {
    const m = String(s.number).match(/^([^0-9]*)([0-9.]+)(.*)$/)
    return {
      icon: s.icon,
      label: s.label,
      prefix: m ? m[1] : '',
      target: m ? parseFloat(m[2]) : 0,
      suffix: m ? m[3] : '',
    }
  })
)

const current = ref<number[]>(statModel.value.map(() => 0))

function display(v: number) {
  return Math.round(v).toLocaleString('en-US')
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const start = () => {
    if (started.value) return
    started.value = true
    const targets = statModel.value.map((s: any) => s.target)

    if (reduced || typeof requestAnimationFrame === 'undefined') {
      current.value = targets
      return
    }

    const duration = 1800
    const t0 = performance.now()
    const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3)

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      current.value = targets.map((target) => target * easeOutCubic(p))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  if (typeof IntersectionObserver === 'undefined') {
    start()
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        start()
        io.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (section.value) io.observe(section.value)
})
</script>