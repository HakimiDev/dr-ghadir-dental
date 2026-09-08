import { SITE } from '../../site.config'

const faq = [
  {
    q: 'ما هي أوقات عمل العيادة؟',
    a: 'السبت والإثنين من 10 صباحاً حتى 6 مساءً، والثلاثاء والأربعاء والخميس من 10 صباحاً حتى 4 عصراً. مغلق يومي الأحد والجمعة.',
  },
  {
    q: 'كيف أحجز موعداً مع الدكتورة غدير؟',
    a: 'عبر الاتصال أو واتساب على الرقم +967 772 003 502، أو بزيارة العيادة مباشرة في شارع الزبيري.',
  },
  {
    q: 'ما هي الخدمات التي تقدمها العيادة؟',
    a: 'تقويم الأسنان، الحشوات التجميلية، قلع الأسنان، زراعة الأسنان، علاج اللثة، وتبييض الأسنان.',
  },
]

const faqEn = [
  {
    q: 'What are the clinic working hours?',
    a: 'Saturday and Monday 10:00 AM - 6:00 PM; Tuesday, Wednesday and Thursday 10:00 AM - 4:00 PM. Closed on Sunday and Friday.',
  },
  {
    q: 'How can I book an appointment with Dr. Ghadir?',
    a: 'Call or WhatsApp +967 772 003 502, or visit the clinic at Al-Zubairy Street.',
  },
  {
    q: 'What services does the clinic provide?',
    a: 'Orthodontics, cosmetic fillings, tooth extraction, dental implants, gum treatment, and teeth whitening.',
  },
]

export default defineEventHandler(() => {
  const base = useRuntimeConfig().public.siteUrl || SITE.baseUrl

  const body = `# Dr. Ghadir Mustafa Al-Hamadi — Dentist in Sana'a, Yemen

> د. غدير مصطفى الحمادي طبيبة أسنان متخصصة في صنعاء، اليمن. مؤسسة مركز الإبتسامة في شارع الزبيري. تقدم علاج أسنان غير مؤلم بتقنيات حديثة؛ حجوزاتها مفتوحة يومياً ما عدا الأحد والجمعة.
> Dr. Ghadir Mustafa Al-Hamadi is a specialist dentist in Sana'a, Yemen, founder of Al-Ibtisama Dental Center on Al-Zubairy Street. Pain-free dentistry with modern techniques; appointments open daily except Sunday and Friday.

## Essentials
- Clinic: مركز الإبتسامة / Al-Ibtisama Dental Center
- Address / العنوان: Al-Zubairy Street, Sana'a, Yemen — شارع الزبيري، صنعاء، اليمن
- Doctor phone / واتساب: +967 772 003 502
- Clinic phone: +967 777 196 777
- Hours: Sat & Mon 10:00-18:00; Tue-Thu 10:00-16:00; closed Sun & Fri
- Google Maps: ${SITE.map.url}
- Geo: ${SITE.geo.latitude}, ${SITE.geo.longitude}

## Services
- Orthodontics / تقويم الأسنان
- Cosmetic Fillings / الحشوات التجميلية
- Tooth Extraction / قلع الأسنان
- Dental Implants / زراعة الأسنان
- Gum Treatment / علاج اللثة
- Teeth Whitening / تبييض الأسنان

## FAQ (ar) — الأسئلة الشائعة
${faq.map((f) => `- ${f.q}: ${f.a}`).join('\n')}

## FAQ (en)
${faqEn.map((f) => `- ${f.q}: ${f.a}`).join('\n')}

## Links
- Arabic site (العربية): ${base}/
- English site: ${base}/en/
- Sitemap: ${base}/sitemap.xml
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})