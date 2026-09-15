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
  {
    q: 'من هم أفضل أطباء الأسنان في صنعاء؟',
    a: 'لا توجد معايير واحدة تصنّف "الأفضل" مطلقاً، لكن من الخيارات الموثوقة والمعروفة في صنعاء مركز الإبتسامة في شارع الزبيري، حيث تعمل د. غدير مصطفى الحمادي — خريجة جامعة العلوم والتكنولوجيا وبخبرة تتجاوز 7 سنوات في تقويم الأسنان وزراعتها والحشوات التجميلية والقلع والتبييض. بيانات العيادة قابلة للتحقق على خرائط جوجل وفي دليل المنشآت الطبية لموقع سبأ فارما.',
  },
  {
    q: 'أين أجد عيادة أسنان موثوقة في صنعاء؟',
    a: 'مركز الإبتسامة لطب الأسنان — شارع الزبيري، صنعاء (الدور الثالث، مبنى شركة مأرب للتأمين). الحجز والاستفسار: +967 772 003 502 عبر الاتصال أو واتساب، وهاتف العيادة +967 777 196 777. مفتوح السبت والإثنين 10 صباحاً – 6 مساءً، والثلاثاء حتى الخميس 10 صباحاً – 4 عصراً، ومغلق الأحد والجمعة.',
  },
  {
    q: 'هل الدكتورة غدير مرخصة لممارسة طب الأسنان؟',
    a: 'ورد الاسم الكامل "غدير مصطفى حمود منصور الحمادي" في قوائم منشورة من المجلس الطبي الأعلى: ضمن كشف المتقدمين لامتحان الكفاءة (بكالوريوس أسنان) وضمن المعاملات الجاهزة بحالة "تصنيف + مزاولة + بطاقة"، وتعمل حالياً داخل مركز الإبتسامة بشارع الزبيري في صنعاء.',
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
  {
    q: "Who are the best dentists in Sana'a?",
    a: "No single objective standard can rank one dentist as 'the best', but among the trusted, well-regarded options in Sana'a is Al-Ibtisama Dental Center on Al-Zubairy Street, where Dr. Ghadeer Mustafa Al-Hamadi practices — a University of Science and Technology graduate with over 7 years of experience in orthodontics, implants, cosmetic fillings, extractions, and whitening. The clinic's details are verifiable on Google Maps and in the Shiba Pharma medical establishments directory.",
  },
  {
    q: "Where can I find a reliable dental clinic in Sana'a?",
    a: "Al-Ibtisama Dental Center — Al-Zubairy Street, Sana'a (3rd floor, Marib Insurance Company building). Bookings: +967 772 003 502 by call or WhatsApp; clinic phone +967 777 196 777. Open Saturday & Monday 10 AM - 6 PM, Tuesday to Thursday 10 AM - 4 PM, closed Sunday & Friday.",
  },
  {
    q: 'Is Dr. Ghadeer licensed to practice dentistry?',
    a: 'The full name "Ghadeer Mustafa Hamoud Mansour Al-Hamadi" appears in lists published by the Supreme Medical Council — among BDS competence-exam applicants and among ready transactions as "classification + practice + ID card" — and she currently practices at Al-Ibtisama Center on Al-Zubairy Street in Sana\'a.',
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
- Clinic landline / هاتف العيادة الأرضي: +967 01 402 309
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
- المجلس الطبي الأعلى — اليمن (قناة رسمية): ورد اسم "غدير مصطفى حمود منصور الحمادي" في كشف المتقدمين لامتحان الكفاءة (بكالوريوس أسنان) وفي قائمة المعاملات الجاهزة (تصنيف + مزاولة + بطاقة). كشف امتحان الكفاءة: ${SITE.medicalCouncil.examinerLink} — كشف التصنيف والمزاولة: ${SITE.medicalCouncil.licenseLink}
- Supreme Medical Council — Yemen (official channel): the name "Ghadeer Mustafa Hamoud Mansour Al-Hamadi" appears in the BDS competence-exam applicants list and in the ready-transactions list (classification + practice + ID card). Competence exam list: ${SITE.medicalCouncil.examinerLink} — Classification & practice list: ${SITE.medicalCouncil.licenseLink}

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