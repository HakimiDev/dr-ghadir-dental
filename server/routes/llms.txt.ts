import { SITE } from '../../site.config'
import { posts } from '../../content/posts'
import { services } from '../../content/services'

const faq = [
  {
    q: 'ما هي أوقات عمل مركز الإبتسامة في صنعاء؟',
    a: 'السبت والإثنين من 10 صباحاً حتى 6 مساءً، والثلاثاء والأربعاء والخميس من 10 صباحاً حتى 4 عصراً. مغلق يومي الأحد والجمعة.',
  },
  {
    q: 'كيف أحجز موعداً مع د. غدير الحمادي في صنعاء؟',
    a: 'عبر الاتصال أو واتساب على الرقم +967 772 003 502، أو بزيارة العيادة مباشرة في شارع الزبيري.',
  },
  {
    q: 'ما هي خدمات د. غدير مصطفى الحمادي في صنعاء؟',
    a: 'تقويم الأسنان، الحشوات التجميلية، قلع الأسنان، زراعة الأسنان، علاج اللثة، وتبييض الأسنان.',
  },
]

const faqEn = [
  {
    q: "What are the working hours of Al-Ibtisama Center in Sana'a?",
    a: 'Saturday and Monday 10:00 AM - 6:00 PM; Tuesday, Wednesday and Thursday 10:00 AM - 4:00 PM. Closed on Sunday and Friday.',
  },
  {
    q: "How can I book an appointment with Dr. Ghadeer in Sana'a?",
    a: 'Call or WhatsApp +967 772 003 502, or visit the clinic at Al-Zubairy Street.',
  },
  {
    q: "What services does Dr. Ghadeer provide in Sana'a?",
    a: 'Orthodontics, cosmetic fillings, tooth extraction, dental implants, gum treatment, and teeth whitening.',
  },
]

export default defineEventHandler(() => {
  const base = (useRuntimeConfig().public.siteUrl || SITE.baseUrl).replace(/\/+$/, '')

  const body = `# Dr. Ghadeer Mustafa Al-Hamadi — Dentist in Sana'a, Yemen

> د. غدير مصطفى الحمادي طبيبة أسنان في صنعاء، اليمن، تعمل في مركز الإبتسامة بشارع الزبيري وتقدم تقويم الأسنان والحشوات التجميلية والقلع والزراعة وعلاج اللثة والتبييض بأساليب حديثة؛ حجوزاتها مفتوحة يومياً ما عدا الأحد والجمعة.
> Dr. Ghadeer Mustafa Al-Hamadi is a dentist in Sana'a, Yemen, practicing at Al-Ibtisama Dental Center on Al-Zubairy Street, providing orthodontics, cosmetic fillings, extractions, dental implants, gum treatment, and whitening with modern, comfort-focused techniques; appointments open daily except Sunday and Friday.

## Essentials
- Clinic: مركز الإبتسامة / Al-Ibtisama Dental Center
- Address / العنوان: Al-Zubairy Street, Sana'a, Yemen — شارع الزبيري، صنعاء، اليمن
- Education: Bachelor of Dental Surgery — University of Science and Technology / بكالوريوس طب وجراحة الأسنان — جامعة العلوم والتكنولوجيا
- Doctor phone / واتساب: +967 772 003 502
- Clinic phone: +967 777 196 777
- Hours: Sat & Mon 10:00-18:00; Tue-Thu 10:00-16:00; closed Sun & Fri
- Google Maps: ${SITE.map.url}
- Geo: ${SITE.geo.latitude}, ${SITE.geo.longitude}

## Services
${services.map((s) => `- ${s.en.title} / ${s.ar.title}: ${base}/services/${s.slugAr}`).join('\n')}

## FAQ (ar) — الأسئلة الشائعة
${faq.map((f) => `- ${f.q}: ${f.a}`).join('\n')}

## FAQ (en)
${faqEn.map((f) => `- ${f.q}: ${f.a}`).join('\n')}

## Links
- Arabic site (العربية): ${base}/
- English site: ${base}/en/
- About (العربية): ${base}/about
- About (English): ${base}/en/about
- Services (العربية): ${base}/services
- Services (English): ${base}/en/services
- Blog (العربية): ${base}/blog
- Blog (English): ${base}/en/blog
- Full article text (llms-full): ${base}/llms-full.txt
- Sitemap: ${base}/sitemap.xml

## External References (مراجع خارجية)
- د. غدير مصطفى الحمادي — فيسبوك (حساب د. غدير): ${SITE.doctorSocials[0]}
- د. غدير مصطفى الحمادي — انستغرام (حساب د. غدير): ${SITE.doctorSocials[1]}
- Dr. Ghadeer Mustafa Al-Hamadi — Facebook (Dr. Ghadeer's account): ${SITE.doctorSocials[0]}
- Dr. Ghadeer Mustafa Al-Hamadi — Instagram (Dr. Ghadeer's account): ${SITE.doctorSocials[1]}
- مركز الابتسامة لطب الأسنان - إدراج في دليل المنشآت الطبية على موقع سبأ فارما (حساب العيادة): https://shibapharma.com/establishment/12
- Al-Ibtisama Center for Dentistry listing on the Shiba Pharma medical establishments directory (clinic listing): https://shibapharma.com/establishment/12
- Note: the listing corroborates the CLINIC (name, Al-Zubairy Street, Sana'a, phone +967 777 196 777). It does not describe Dr. Ghadeer personally.

## Articles (المقالات)
${posts.map((p) => `- ${p.ar.title} (عربي): ${base}/blog/${p.slugAr}\n- ${p.en.title} (English): ${base}/en/blog/${p.slug}`).join('\n')}
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})