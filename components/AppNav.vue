<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
       :class="scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-navy-950/5' : 'bg-transparent'">
    <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 transition-all duration-300"
           :class="{ 'lg:h-16 h-16': scrolled }">
        <!-- Logo -->
        <NuxtLink :to="localePath" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-dental-500 to-dental-700 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-dental-500/30 group-hover:shadow-dental-500/50 transition-shadow">
            {{ t.nav.logoMark }}
          </div>
          <div class="hidden sm:block">
            <p class="font-bold text-navy-950 text-lg leading-tight">{{ t.nav.logoBrand }}</p>
            <p class="text-xs text-dental-600 font-medium">{{ t.nav.logoTag }}</p>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-8">
          <a v-for="item in navItems" :key="item.href" :href="item.href"
             class="relative group font-medium transition-colors py-2"
             :class="activeSection === item.id ? 'text-dental-600' : 'text-navy-700 hover:text-dental-600'">
            {{ item.label }}
            <span class="absolute -bottom-0.5 inset-x-0 h-0.5 rounded-full bg-dental-500 transition-all duration-300 origin-center"
                  :class="activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"></span>
          </a>
          <a :href="localePath + '#contact'" class="btn-primary text-base px-6 py-3">
            {{ t.nav.bookNow }}
          </a>
          <NuxtLink :to="isEn ? '/' : '/en/'" class="px-4 py-2 rounded-lg bg-navy-100 text-navy-700 hover:bg-navy-200 font-semibold transition-colors text-sm">
            {{ t.nav.switchLang }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-2 rounded-lg hover:bg-navy-100 transition-colors">
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="mobileOpen" class="lg:hidden pb-6 border-t border-navy-100">
          <div class="flex flex-col gap-2 pt-4">
            <a v-for="item in navItems" :key="item.href" :href="item.href"
               @click="mobileOpen = false"
               class="px-4 py-3 rounded-xl text-navy-700 hover:bg-dental-50 hover:text-dental-700 font-medium transition-colors">
              {{ item.label }}
            </a>
            <a :href="localePath + '#contact'" @click="mobileOpen = false" class="btn-primary text-center mt-2">
              {{ t.nav.bookNow }}
            </a>
            <NuxtLink :to="isEn ? '/' : '/en/'" @click="mobileOpen = false"
                      class="px-4 py-3 rounded-xl bg-navy-100 text-navy-700 hover:bg-navy-200 font-semibold transition-colors text-center">
              {{ t.nav.switchLang }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  localePath: string
  t: any
}>()

const isEn = computed(() => props.localePath.startsWith('/en'))
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const navItems = computed(() => [
  { href: props.localePath + '#home', id: 'home', label: props.t.nav.home },
  { href: props.localePath + '#about', id: 'about', label: props.t.nav.about },
  { href: props.localePath + '#services', id: 'services', label: props.t.nav.services },
  { href: props.localePath + '#experience', id: 'experience', label: props.t.nav.experience },
  { href: props.localePath + '#contact', id: 'contact', label: props.t.nav.contact },
])

const onScroll = () => {
  scrolled.value = window.scrollY > 40

  let current = ''
  for (const item of navItems.value) {
    const hash = item.href.split('#')[1]
    const el = hash ? document.getElementById(hash) : null
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top <= 140) current = item.id
  }
  activeSection.value = current
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
