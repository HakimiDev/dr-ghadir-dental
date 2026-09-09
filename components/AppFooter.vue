<template>
  <footer class="bg-navy-950 text-white">
    <!-- Main footer -->
    <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img :src="avatar" :alt="t.about.title" width="48" height="48" decoding="async" loading="lazy"
                 class="w-12 h-12 rounded-xl object-cover ring-2 ring-dental-400">
            <div>
              <p class="font-bold text-lg leading-tight">{{ t.nav.logoBrand }}</p>
              <p class="text-dental-400 text-sm">{{ t.nav.about }}</p>
            </div>
          </div>
          <p class="text-navy-300 leading-relaxed text-sm">{{ t.footer.desc }}</p>
        </div>

        <!-- Quick Links -->
        <div class="sm:justify-self-center">
          <h4 class="font-bold text-lg mb-4 text-white">{{ t.footer.quickLinks }}</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a :href="link.href" class="text-navy-300 hover:text-dental-400 transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold text-lg mb-4 text-white">{{ t.nav.contact }}</h4>
          <ul class="space-y-3 text-navy-300 text-sm">
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">📍</span>
              <a :href="SITE.map.url" target="_blank" rel="noopener" class="hover:text-dental-400 transition-colors">{{ SITE.address.ar }}</a>
            </li>
            <li class="flex items-center gap-2">
              <span>👩‍⚕️</span>
              <a :href="SITE.phones.doctorTel" class="hover:text-dental-400 transition-colors" dir="ltr">{{ SITE.phones.doctor }}</a>
            </li>
            <li class="flex items-center gap-2">
              <span>🏥</span>
              <a :href="SITE.phones.clinicTel" class="hover:text-dental-400 transition-colors" dir="ltr">{{ SITE.phones.clinic }}</a>
            </li>
            <li class="flex items-center gap-2">
              <span>🕐</span>
              <span>{{ hoursShort }}</span>
            </li>
          </ul>
          <!-- Social -->
          <div class="flex gap-3 mt-6">
            <a :href="SITE.phones.doctorWa" target="_blank" rel="noopener" class="w-10 h-10 rounded-xl bg-navy-800 hover:bg-dental-600 flex items-center justify-center transition-colors text-lg" title="WhatsApp">💬</a>
            <a :href="SITE.map.url" target="_blank" rel="noopener" class="w-10 h-10 rounded-xl bg-navy-800 hover:bg-dental-600 flex items-center justify-center transition-colors text-lg" title="Maps">📍</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-navy-800">
      <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
        <p class="text-navy-400 text-sm">{{ t.footer.rights }}</p>
        <p class="text-navy-500 text-xs">{{ t.footer.builtWith }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SITE } from '~/site.config'
import avatar from '~/assets/avatar.jpg'

const props = defineProps<{ t: any }>()

const route = useRoute()
const root = route.path.startsWith('/en') ? '/en' : ''

const quickLinks = computed(() => [
  { href: root + '#home', label: props.t.nav.home },
  { href: root + '/about', label: props.t.nav.about },
  { href: root + '/services', label: props.t.nav.services },
  { href: root + '#experience', label: props.t.nav.experience },
  { href: root + '/blog', label: props.t.nav.blog },
  { href: root + '#contact', label: props.t.nav.contact },
])

const hoursShort = `${SITE.hours.ar[0].time} | ${SITE.hours.ar[1].time}`
</script>