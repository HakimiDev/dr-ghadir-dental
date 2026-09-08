<template>
  <section id="contact" class="section-padding bg-gradient-to-b from-white to-dental-50">
    <div class="container-custom mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 space-y-4 v-reveal">
        <div class="section-badge mx-auto">
          <span class="w-2 h-2 rounded-full bg-dental-500"></span>
          {{ t.contact.badge }}
        </div>
        <h2 class="section-title text-balance">{{ t.contact.title }}</h2>
        <p class="section-subtitle mx-auto">{{ t.contact.subtitle }}</p>
      </div>

      <!-- CTA Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-l from-dental-700 via-dental-600 to-dental-500 shadow-2xl shadow-dental-700/30 mb-8 md:mb-10">
        <div class="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-white/10"></div>
        <div class="absolute -bottom-28 -start-20 w-80 h-80 rounded-full bg-dental-300/20"></div>
        <div class="relative grid gap-6 md:grid-cols-2 items-center px-6 sm:px-10 py-8 sm:py-10">
          <div>
            <p class="text-white text-xl sm:text-2xl font-extrabold leading-snug text-balance">{{ t.contact.ctaTitle }}</p>
            <p class="text-dental-100 text-sm sm:text-base mt-2">{{ t.contact.ctaSubtitle }}</p>
          </div>
          <div class="flex flex-wrap gap-3 justify-start md:justify-end">
            <a :href="doctorTel" class="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-white text-navy-900 shadow-xl shadow-dental-900/25 hover:bg-dental-50 transition-colors">
              <span class="text-2xl flex-shrink-0">👩‍⚕️</span>
              <span class="flex flex-col items-start leading-tight">
                <span class="text-xs font-semibold text-navy-500">{{ t.contact.info[1].label }}</span>
                <span class="font-bold text-base sm:text-lg" dir="ltr">{{ doctorPhone }}</span>
              </span>
            </a>
            <a :href="clinicTel" class="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-colors backdrop-blur">
              <span class="text-2xl flex-shrink-0">🏥</span>
              <span class="flex flex-col items-start leading-tight">
                <span class="text-xs font-semibold text-dental-100">{{ t.contact.info[2].label }}</span>
                <span class="font-bold text-base sm:text-lg" dir="ltr">{{ clinicPhone }}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Map + Info -->
      <div class="grid lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Map card -->
        <div class="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-navy-100 bg-white flex flex-col">
          <iframe
            :src="mapEmbed"
            title="د. غدير مصطفى الحمادي — مركز الإبتسامة، شارع الزبيري، صنعاء"
            class="w-full flex-1 min-h-[300px] lg:min-h-[380px] border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin">
          </iframe>
          <div class="flex items-center justify-between gap-3 p-4 sm:px-5 bg-white border-t border-navy-100">
            <p class="text-navy-700 text-sm font-semibold truncate">📍 {{ t.contact.info[0].value }}</p>
            <a :href="mapUrl" target="_blank" rel="noopener"
               class="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dental-500 text-white text-sm font-semibold shadow-lg shadow-dental-500/30 hover:bg-dental-600 transition-colors">
              {{ t.contact.openMap }}
            </a>
          </div>
        </div>

        <!-- Info column -->
        <div class="lg:col-span-2 space-y-4 md:space-y-6">

          <!-- Booking form -->
          <form @submit.prevent="submitBooking"
                class="p-5 sm:p-6 rounded-2xl bg-white shadow-sm border border-navy-100 hover:shadow-lg hover:shadow-dental-500/10 transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-11 h-11 rounded-xl bg-dental-50 flex items-center justify-center text-2xl">✍️</span>
              <p class="font-bold text-navy-950">{{ t.seo.bookingTitle }}</p>
            </div>
            <div class="space-y-3">
              <input v-model.trim="form.name" type="text" :placeholder="t.contact.form.name + ' *'"
                     class="input-field" :aria-label="t.contact.form.name">
              <input v-model.trim="form.phone" type="tel" inputmode="tel" dir="ltr"
                     :placeholder="t.contact.form.phone + ' *'"
                     class="input-field text-right" :aria-label="t.contact.form.phone">
              <textarea v-model.trim="form.message" rows="3" :placeholder="t.contact.form.message"
                        class="input-field resize-none" :aria-label="t.contact.form.message"></textarea>
              <button type="submit" class="btn-primary w-full justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m0 0l-3-3m3 3l-3 3"/></svg>
                {{ t.contact.form.submit }}
              </button>
              <p v-if="formStatus" class="text-sm font-semibold text-center"
                 :class="formStatus === 'ok' ? 'text-green-600' : 'text-red-500'">
                {{ formStatus === 'ok' ? t.contact.form.success : t.contact.form.error }}
              </p>
            </div>
          </form>

          <!-- Working hours -->
          <div class="p-5 sm:p-6 rounded-2xl border-2 border-dental-200 bg-white shadow-sm hover:shadow-lg hover:shadow-dental-500/10 transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-11 h-11 rounded-xl bg-dental-50 flex items-center justify-center text-2xl">🕐</span>
              <p class="font-bold text-navy-950">{{ t.seo.hoursTitle }}</p>
            </div>
            <ul class="space-y-3">
              <li v-for="(h, i) in t.contact.hours" :key="i"
                  class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 p-3 rounded-xl bg-dental-50/60">
                <span class="font-semibold text-navy-950 text-sm sm:text-base">{{ h.days }}</span>
                <span :class="h.time.includes('مغلق') || h.time.toLowerCase().includes('closed') ? 'text-red-500 font-semibold' : 'text-dental-700 font-semibold'"
                      class="text-xs sm:text-sm">{{ h.time }}</span>
              </li>
            </ul>
          </div>

          <!-- WhatsApp CTA -->
          <a :href="waUrl" target="_blank" rel="noopener"
             class="group flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-l from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all">
            <div class="flex items-center gap-3 sm:gap-4">
              <span class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💬</span>
              <div>
                <p class="font-extrabold">{{ t.contact.waTitle }}</p>
                <p class="text-green-50 text-sm" dir="ltr">{{ doctorPhone }}</p>
              </div>
            </div>
            <span class="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE } from '~/site.config'

defineProps<{ t: any }>()

const doctorPhone = SITE.phones.doctor
const doctorTel = SITE.phones.doctorTel
const clinicPhone = SITE.phones.clinic
const clinicTel = SITE.phones.clinicTel
const mapUrl = SITE.map.url
const mapEmbed = SITE.map.embed
const waUrl = SITE.phones.doctorWa

const form = reactive({ name: '', phone: '', message: '' })
const formStatus = ref<'ok' | 'error' | ''>('')

function submitBooking() {
  if (form.name.length < 2 || form.phone.replace(/\D/g, '').length < 8) {
    formStatus.value = 'error'
    return
  }
  const text = encodeURIComponent(
    `مرحباً د. غدير، أود حجز موعد.\nالاسم: ${form.name}\nالجوال: ${form.phone}\n${form.message ? 'الرسالة: ' + form.message : ''}`
  )
  window.open(`https://wa.me/967772003502?text=${text}`, '_blank', 'noopener')
  formStatus.value = 'ok'
  setTimeout(() => {
    formStatus.value = ''
    form.name = ''
    form.phone = ''
    form.message = ''
  }, 6000)
}
</script>