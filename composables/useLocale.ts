interface LocaleContent {
  nav: {
    home: string
    about: string
    services: string
    experience: string
    blog: String
    contact: string
    bookNow: string
    switchLang: string
    backToTop: string
    logoMark: string
    logoBrand: string
    logoTag: string
  }
  hero: {
    badge: string
    title1: string
    title2: string
    title3: string
    subtitle: string
    cta: string
    ctaSecondary: string
    available: string
    discover: string
    statsLabel: string
  }
  about: {
    badge: string
    title: string
    p1: string
    p2: string
    p3: string
    degree: string
    university: string
    experience: string
  }
  aboutPage: {
    title: string
    seoTitle: string
    seoDescription: string
    tagline: string
    bio: string[]
    educationTitle: string
    professionalTitle: string
    servicesTitle: string
    clinicTitle: string
    verifyTitle: string
    verify: string[]
    ctaSubtitle: string
    externalRefTitle: string
    externalRefIntro: string
    externalRefLink: string
  }
  services: {
    badge: string
    title: string
    subtitle: string
    items: Array<{
      title: string
      desc: string
      icon: string
      slug: string
      slugAr: string
    }>
  }
  stats: {
    items: Array<{
      number: string
      label: string
      icon: string
    }>
  }
  experience: {
    badge: string
    title: string
    subtitle: string
    items: Array<{
      title: string
      desc: string
      icon: string
    }>
  }
  testimonials: {
    badge: string
    title: string
    subtitle: string
    verified: string
    prev: string
    next: string
    items: Array<{
      name: string
      text: string
      rating: number
    }>
  }
  faq: {
    badge: string
    title: string
    subtitle: string
    items: Array<{
      q: string
      a: string
    }>
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    form: {
      name: string
      phone: string
      message: string
      submit: string
      success: string
      error: string
    }
    mapTitle: string
    openMap: string
    waTitle: string
    ctaTitle: string
    ctaSubtitle: string
    info: Array<{
      icon: string
      label: string
      value: string
      link?: string
    }>
    hours: Array<{
      days: string
      time: string
    }>
  }
  footer: {
    desc: string
    rights: string
    builtWith: string
    quickLinks: string
  }
  blog: {
    badge: string
    title: string
    subtitle: string
    readTime: string
    min: string
    relatedTitle: string
    faqTitle: string
    backToBlog: string
    backHome: string
    shareTitle: string
    updatedLabel: string
    authorBy: string
    ctaTitle: string
    ctaSubtitle: string
  }
  seo: {
    title: string
    description: string
    keywords: string
    hoursTitle: string
    bookingTitle: string
  }
}

const ar: LocaleContent = {
  nav: {
    home: 'الرئيسية',
    about: 'عن الدكتورة',
    services: 'خدماتنا',
    experience: 'خبراتنا',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    bookNow: 'احجز الآن',
    switchLang: 'English',
    backToTop: 'العودة للأعلى',
    logoMark: 'غ',
    logoBrand: 'د. غدير الحمادي',
    logoTag: 'طب أسنان',
  },
  blog: {
    badge: 'المدونة الصحية',
    title: 'مقالات صحة الفم والأسنان',
    subtitle: 'معلومات طبية موثوقة من د. غدير لمساعدتك في العناية بأسنانك وابتسامتك بأحدث الأساليب',
    readTime: 'دقيقة قراءة',
    min: 'دقيقة',
    relatedTitle: 'مقالات ذات صلة',
    faqTitle: 'أسئلة شائعة حول هذا الموضوع',
    backToBlog: 'رجوع للمدونة',
    backHome: 'العودة للرئيسية',
    shareTitle: 'شارك المقال',
    updatedLabel: 'آخر تحديث',
    authorBy: 'بقلم د. غدير مصطفى الحمادي',
    ctaTitle: 'تحتاج استشارة طبية؟',
    ctaSubtitle: 'احجز موعدك الآن مع د. غدير في مركز الإبتسامة واحصل على خطة علاجية مخصصة',
  },
  hero: {
    badge: '★ طبيبة أسنان في صنعاء — مركز الإبتسامة',
    title1: 'ابتسامتك',
    title2: 'هي',
    title3: 'أولويتنا',
    subtitle: 'د. غدير مصطفى الحمادي — طبيبة أسنان بخبرة واسعة في التعامل الاحترافي مع المرضى، تقدم في مركز الإبتسامة بشارع الزبيري في صنعاء خدمات تقويم الأسنان والحشوات والقلع والزراعة بأساليب حديثة تركز على راحتك.',
    cta: 'احجز موعدك الآن',
    ctaSecondary: 'خدماتنا',
    available: 'متاح للحجز الآن',
    discover: 'اكتشف المزيد',
    statsLabel: 'سنة خبرة',
  },
  about: {
    badge: 'عن الدكتورة غدير',
    title: 'د. غدير مصطفى الحمادي',
    p1: 'طبيبة أسنان يمنية تتمتع بخبرة واسعة وكبيرة في التعامل مع المرضى بأعلى درجات الاحترافية والرعاية. تؤمن بأن كل مريض يستحق ابتسامة جميلة وخالية من الألم.',
    p2: 'تتميز الدكتورة غدير بأسلوب علاجي رحيم ومراعٍ لحالة المريض النفسية والجسدية، حيث تستخدم تقنيات حديثة وأدوات معتمدة لضمان أفضل النتائج بأقل قدر من الانزعاج.',
    p3: 'تعمل حالياً في مركز الإبتسامة في شارع الزبيري بصنعاء، حيث تقدم مجموعة شاملة من خدمات طب الأسنان الحديثة للعائلات والأطفال والكبار.',
    degree: 'بكالوريوس طب وجراحة الأسنان',
    university: 'جامعة العلوم والتكنولوجيا',
    experience: '+10 سنوات خبرة',
  },
  aboutPage: {
    title: 'عن د. غدير مصطفى الحمادي',
    seoTitle: 'عن د. غدير مصطفى الحمادي | طبيبة أسنان في صنعاء',
    seoDescription: 'الصفحة الرسمية لد. غدير مصطفى الحمادي — طبيبة أسنان في صنعاء. بكالوريوس طب وجراحة الأسنان من جامعة العلوم والتكنولوجيا، وأكثر من 10 سنوات خبرة في مركز الإبتسامة، شارع الزبيري.',
    tagline: 'تعريف رسمي بالدكتورة وشهادتها ومجال عملها في مركز الإبتسامة بصنعاء',
    bio: [
      'د. غدير مصطفى الحمادي طبيبة أسنان يمنية، خريجة جامعة العلوم والتكنولوجيا، حاصلة على بكالوريوس طب وجراحة الأسنان.',
      'على مدى أكثر من عشر سنوات من الممارسة السريرية، تعاملت مع حالات متنوعة لدى الأطفال والكبار في تقويم الأسنان، الحشوات التجميلية، قلع الأسنان، زراعة الأسنان، علاج اللثة، وتبييض الأسنان.',
      'تعمل حالياً في مركز الإبتسامة بشارع الزبيري في صنعاء، وتؤمن بأن ثقة المريض ووضوح خطة العلاج قبل البدء هما أساس نجاح أي علاج.',
    ],
    educationTitle: 'التعليم',
    professionalTitle: 'مجالات العمل',
    servicesTitle: 'الخدمات المقدمة في العيادة',
    clinicTitle: 'مكان العمل',
    verifyTitle: 'بيانات للتحقق',
    verify: [
      'بكالوريوس طب وجراحة الأسنان — جامعة العلوم والتكنولوجيا.',
      'أكثر من 10 سنوات خبرة سريرية في علاج مختلف حالات الأسنان.',
      'العيادة مسجلة على خرائط جوجل، ويمكنك التحقق من موقعها وبياناتها مباشرة من قسم التواصل.',
    ],
    ctaSubtitle: 'احجز موعدك المباشر مع الدكتورة على الرقم أو واتساب',
    externalRefTitle: 'المراجع الخارجية',
    externalRefIntro: 'مركز الابتسامة لطب الأسنان مُدرج في دليل المنشآت الطبية على موقع سبأ فارما (Shiba Pharma)، وهو مصدر خارجي موثوق يؤكد اسم العيادة وموقعها في شارع الزبيري (دور ثالث — مبنى شركة مأرب للتأمين) بصنعاء، ورقم هاتفها 777196777. الإدراج يخص العيادة نفسها وليس بالضرورة د. غدير شخصياً.',
    externalRefLink: 'عرض إدراج مركز الابتسامة في دليل المنشآت الطبية',
  },
  services: {
    badge: 'خدماتنا المتميزة',
    title: 'عناية شاملة لصحة فمك وابتسامتك',
    subtitle: 'نقدم مجموعة متكاملة من خدمات طب الأسنان بأساليب حديثة وبأسعار مناسبة',
    items: [
      { title: 'تقويم الأسنان', desc: 'تقويم أسنان بأجهزة حديثة لابتسامة متناسقة وجميلة، بخطط علاجية مخصصة لكل مريض.', icon: '🦷', slug: 'orthodontics', slugAr: 'تقويم-الأسنان' },
      { title: 'الحشوات التجميلية', desc: 'حشوات تجميلية بأجود المواد التي تطابق لون سنك الطبيعي بعناية فائقة.', icon: '✨', slug: 'cosmetic-fillings', slugAr: 'الحشوات-التجميلية' },
      { title: 'قلع الأسنان', desc: 'قلع أسنان بطرق جراحية لطيفة تراعي حالة المريض الصحية وراحته أثناء الجلسة.', icon: '🏥', slug: 'tooth-extraction', slugAr: 'قلع-الأسنان' },
      { title: 'زراعة الأسنان', desc: 'زراعة أسنان بتقنيات حديثة وتخطيط رقمي دقيق يضمن نتيجة طبيعية ومتينة.', icon: '💉', slug: 'dental-implants', slugAr: 'زراعة-الأسنان' },
      { title: 'علاج اللثة', desc: 'عناية شاملة بصحة اللثة وعلاج جميع مشاكلها بطرق علاجية حديثة.', icon: '🩺', slug: 'gum-treatment', slugAr: 'علاج-اللثة' },
      { title: 'تبييض الأسنان', desc: 'تبييض الأسنان بتقنيات متقدمة للحصول على ابتسامة ناصعة البياض.', icon: '😊', slug: 'teeth-whitening', slugAr: 'تبييض-الأسنان' },
    ],
  },
  stats: {
    items: [
      { number: '+10', label: 'سنة خبرة', icon: '📅' },
      { number: '+1000', label: 'مريض سعيد', icon: '😁' },
      { number: '%98', label: 'نسبة الرضا', icon: '⭐' },
      { number: '+800', label: 'عملية ناجحة', icon: '🏆' },
    ],
  },
  experience: {
    badge: 'خبراتنا ومميزاتنا',
    title: 'لماذا تختار مركز الإبتسامة؟',
    subtitle: 'نجمع بين الخبرة الطويلة والتقنيات الحديثة لنقدم لك أفضل تجربة علاجية',
    items: [
      { title: 'خبرة واسعة', desc: 'أكثر من 10 سنوات في التعامل مع جميع حالات طب الأسنان المعقدة والبسيطة.', icon: '👨‍⚕️' },
      { title: 'تقنيات حديثة', desc: 'نستخدم أجهزة ومواد معتمدة لضمان أفضل النتائج.', icon: '🔬' },
      { title: 'راحة المريض أولاً', desc: 'نضع راحتك في المقام الأول عبر التخدير الموضعي الحديث وأساليب تُقلل من الشعور بالألم مع رعاية لطيفة.', icon: '💚' },
      { title: 'رعاية شاملة', desc: 'نتابع حالتك من البداية للنهاية مع خطة علاجية واضحة ومتابعة دورية.', icon: '📋' },
      { title: 'أسعار مناسبة', desc: 'نقدم خدمات عالية الجودة بأسعار تناسب الجميع دون المساومة على الجودة.', icon: '💰' },
      { title: 'بيئة مريحة', desc: 'عيادة نظيفة ومريحة صُممت لتقليل التوتر وجعل زيارتك ممتعة.', icon: '🏠' },
    ],
  },
  testimonials: {
    badge: 'آراء مرضانا',
    title: 'ماذا يقول مرضانا عنّا',
    subtitle: 'رضاكم هو هدفنا الأول ونجاحنا الحقيقي',
    items: [
      { name: 'أم محمد', text: 'الدكتورة غدير من أفضل طبيبات الأسنان اللي رحت لهم. تعاملها راقي جداً واهتمامها شديد. ابني ما حس بألم أبداً!', rating: 5 },
      { name: 'عبدالرحمن', text: 'سويت تقويم عند الدكتورة غدير والنتيجة كانت ممتازة. اهتمام شديد في التفاصيل والدقة.', rating: 5 },
      { name: 'سحر', text: 'كنت خايفة من القلع بس الدكتورة غدير خلّتني مرتاحة والعملية مرّت بدون أي ألم. أنصح فيها بقوة!', rating: 5 },
      { name: 'أحمد', text: 'مركز الإبتسامة أحسن مركز أسنان في صنعاء. النظافة ممتازة والمعاملة احترافية. شكراً الدكتورة غدير.', rating: 5 },
    ],
    verified: 'موثّق',
    prev: 'السابق',
    next: 'التالي',
  },
  faq: {
    badge: 'أسئلة شائعة',
    title: 'إجابات واضحة على أكثر أسئلتكم تكراراً',
    subtitle: 'نجيب بكل شفافية عن أكثر ما يسأل عنه مرضانا قبل زيارتهم',
    items: [
      { q: 'ما هي أوقات عمل مركز الإبتسامة في صنعاء؟', a: 'نستقبل المرضى كل أيام الأسبوع ما عدا يومي الأحد والجمعة. السبت والاثنين من 10 صباحاً حتى 6 مساءً، والثلاثاء والأربعاء والخميس من 10 صباحاً حتى 4 عصراً.' },
      { q: 'هل علاج الأسنان عند د. غدير الحمادي مؤلم؟', a: 'نحرص على تقليل الشعور بالألم عبر تقنيات التخدير الموضعي الحديثة ورعاية لطيفة تراعي راحة المريض النفسية قبل البدء وبعده.' },
      { q: 'كيف أحجز موعداً مع د. غدير الحمادي في صنعاء؟', a: 'يمكنك الحجز بسهولة عبر الاتصال بالدكتورة على الرقم +967 772 003 502 أو عبر واتساب على نفس الرقم، أو بزيارة العيادة مباشرة في شارع الزبيري.' },
      { q: 'أين توجد عيادة د. غدير الحمادي في صنعاء؟', a: 'مركز الإبتسامة في شارع الزبيري، صنعاء، اليمن. يمكنك فتح الموقع مباشرة على خرائط جوجل من قسم التواصل في الموقع.' },
      { q: 'ما هي خدمات د. غدير مصطفى الحمادي في صنعاء؟', a: 'نقدم تقويم الأسنان، الحشوات التجميلية، قلع الأسنان، زراعة الأسنان، علاج اللثة، وتبييض الأسنان بأساليب حديثة ومواد معتمدة.' },
    ],
  },
  contact: {
    badge: 'تواصل معنا',
    title: 'نحن هنا لمساعدتك',
    subtitle: 'لا تتردد في التواصل معنا لحجز موعد أو الاستفسار عن خدماتنا',
    form: {
      name: 'الاسم الكامل',
      phone: 'رقم الجوال',
      message: 'رسالتك...',
      submit: 'إرسال الرسالة',
      success: 'شكراً لك! سيتم توجيهك إلى واتساب لإتمام الحجز.',
      error: 'الرجاء إدخال الاسم ورقم الجوال أولاً.',
    },
    mapTitle: 'دليل العيادة على الخريطة',
    openMap: 'افتح الخريطة',
    waTitle: 'تواصل عبر واتساب',
    ctaTitle: 'هل لديك استفسار؟ احجز موعدك الآن',
    ctaSubtitle: 'فريقنا جاهز للرد على استفساراتك خلال ساعات العمل',
    info: [
      { icon: '📍', label: 'العنوان', value: 'مركز الإبتسامة — شارع الزبيري، صنعاء، اليمن', link: 'https://maps.app.goo.gl/nRXewc9d6Q5iJf3z7' },
      { icon: '👩‍⚕️', label: 'هاتف الدكتورة', value: '+967 772 003 502', link: 'tel:+967772003502' },
      { icon: '🏥', label: 'هاتف العيادة', value: '+967 777 196 777', link: 'tel:+967777196777' },
      { icon: '💬', label: 'واتساب الدكتورة', value: '+967 772 003 502', link: 'https://wa.me/967772003502' },
    ],
    hours: [
      { days: 'السبت والإثنين', time: '10:00 صباحاً — 6:00 مساءً' },
      { days: 'الثلاثاء والأربعاء والخميس', time: '10:00 صباحاً — 4:00 عصراً' },
      { days: 'الأحد والجمعة', time: 'مغلق' },
    ],
  },
  footer: {
    desc: 'د. غدير مصطفى الحمادي — طبيبة أسنان في مركز الإبتسامة، شارع الزبيري، صنعاء. نقدم خدمات طب أسنان شاملة بأساليب حديثة.',
    rights: '© 2026 د. غدير مصطفى الحمادي. جميع الحقوق محفوظة.',
    builtWith: 'صُنع بشغف لصحة أسنانك',
    quickLinks: 'روابط سريعة',
  },
  seo: {
    title: 'د. غدير مصطفى الحمادي | طبيبة أسنان في صنعاء — مركز الإبتسامة',
    description: 'د. غدير مصطفى الحمادي طبيبة أسنان في صنعاء، اليمن. خبرة واسعة في تقويم الأسنان، الحشوات، القلع، والزراعة بأساليب حديثة تراعي راحة المريض. مركز الإبتسامة، شارع الزبيري.',
    keywords: 'دكتور أسنان صنعاء, طبيب أسنان اليمن, تقويم أسنان صنعاء, زراعة أسنان, حشوات أسنان, قلع أسنان, مركز الابتسامة, شارع الزبيري, د. غدير الحمادي, dentist sanaa, dental clinic yemen',
    hoursTitle: 'مواعيد الدكتورة',
    bookingTitle: 'احجز موعدك',
  },
}

const en: LocaleContent = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    experience: 'Why Us',
    blog: 'Blog',
    contact: 'Contact',
    bookNow: 'Book Now',
    switchLang: 'عربي',
    backToTop: 'Back to top',
    logoMark: 'G',
    logoBrand: 'Dr. Ghadir Al-Hamadi',
    logoTag: 'Dentistry',
  },
  hero: {
    badge: '★ Dentist in Sana\'a — Al-Ibtisama Center',
    title1: 'Your Smile',
    title2: 'Is Our',
    title3: 'Priority',
    subtitle: 'Dr. Ghadir Mustafa Al-Hamadi — A highly experienced dentist providing orthodontics, fillings, extractions, and dental implants with modern, comfort-focused care at Al-Ibtisama Center, Al-Zubairy Street, Sana\'a.',
    cta: 'Book Your Appointment',
    ctaSecondary: 'Our Services',
    available: 'Available for booking',
    discover: 'Discover More',
    statsLabel: 'Years Experience',
  },
  about: {
    badge: 'About Dr. Ghadir',
    title: 'Dr. Ghadir Mustafa Al-Hamadi',
    p1: 'A Yemeni dentist with extensive experience in providing professional, compassionate dental care. Dr. Ghadir believes every patient deserves a beautiful, pain-free smile.',
    p2: 'Dr. Ghadir combines a gentle, patient-centered approach with modern, certified dental technologies to ensure optimal results with minimal discomfort.',
    p3: 'Currently practicing at Al-Ibtisama Dental Center on Al-Zubairy Street in Sana\'a, offering comprehensive dental services for families, children, and adults.',
    degree: 'Bachelor of Dental Surgery (BDS)',
    university: 'University of Science and Technology',
    experience: '+10 Years Experience',
  },
  aboutPage: {
    title: 'About Dr. Ghadir Mustafa Al-Hamadi',
    seoTitle: "About Dr. Ghadir Al-Hamadi | Dentist in Sana'a",
    seoDescription: "The official profile of Dr. Ghadir Mustafa Al-Hamadi — dentist in Sana'a, Yemen. Bachelor of Dental Surgery from the University of Science and Technology, with 10+ years of experience at Al-Ibtisama Dental Center, Al-Zubairy Street.",
    tagline: 'An official introduction to the doctor, her credentials, and her practice at Al-Ibtisama Center in Sana\'a',
    bio: [
      'Dr. Ghadir Mustafa Al-Hamadi is a Yemeni dentist, a graduate of the University of Science and Technology with a Bachelor of Dental Surgery.',
      'Over more than ten years of clinical practice, she has treated diverse cases in children and adults across orthodontics, cosmetic fillings, tooth extraction, dental implants, gum treatment, and teeth whitening.',
      'She currently practices at Al-Ibtisama Dental Center on Al-Zubairy Street in Sana\'a, and believes that patient trust and a clear treatment plan before starting are the foundation of successful care.',
    ],
    educationTitle: 'Education',
    professionalTitle: 'Areas of Practice',
    servicesTitle: 'Services Provided at the Clinic',
    clinicTitle: 'Place of Work',
    verifyTitle: 'Verifiable Information',
    verify: [
      'Bachelor of Dental Surgery — University of Science and Technology.',
      'More than 10 years of clinical experience treating a wide range of dental cases.',
      'The clinic is registered on Google Maps — verify its location and details directly from the contact section.',
    ],
    ctaSubtitle: 'Book directly with the doctor by phone or WhatsApp',
    externalRefTitle: 'External References',
    externalRefIntro: "Al-Ibtisama Center for Dentistry is listed in the medical establishments directory hosted by Shiba Pharma (Saba Pharma), an external source corroborating the clinic's name, its location on Al-Zubairy Street in Sana'a, and its phone number 777196777. The listing refers to the clinic itself, not necessarily to Dr. Ghadir personally.",
    externalRefLink: 'View the Al-Ibtisama Center listing in the medical establishments directory',
  },
  services: {
    badge: 'Our Services',
    title: 'Comprehensive Oral & Dental Care',
    subtitle: 'Complete dental services using modern techniques at affordable prices',
    items: [
      { title: 'Orthodontics', desc: 'Teeth straightening with modern orthodontic appliances for a beautifully aligned smile, with personalized treatment plans.', icon: '🦷', slug: 'orthodontics', slugAr: 'تقويم-الأسنان' },
      { title: 'Cosmetic Fillings', desc: 'Tooth-colored composite fillings that perfectly match your natural teeth with meticulous precision.', icon: '✨', slug: 'cosmetic-fillings', slugAr: 'الحشوات-التجميلية' },
      { title: 'Tooth Extraction', desc: 'Gentle tooth extractions using modern surgical techniques with patient comfort as a priority.', icon: '🏥', slug: 'tooth-extraction', slugAr: 'قلع-الأسنان' },
      { title: 'Dental Implants', desc: 'Premium dental implants with precise digital planning for natural-looking, long-lasting results.', icon: '💉', slug: 'dental-implants', slugAr: 'زراعة-الأسنان' },
      { title: 'Gum Treatment', desc: 'Comprehensive gum care and treatment for all periodontal conditions using advanced therapies.', icon: '🩺', slug: 'gum-treatment', slugAr: 'علاج-اللثة' },
      { title: 'Teeth Whitening', desc: 'Advanced professional teeth whitening for a brilliantly bright, confident smile.', icon: '😊', slug: 'teeth-whitening', slugAr: 'تبييض-الأسنان' },
    ],
  },
  stats: {
    items: [
      { number: '+10', label: 'Years Experience', icon: '📅' },
      { number: '+1000', label: 'Happy Patients', icon: '😁' },
      { number: '%98', label: 'Satisfaction Rate', icon: '⭐' },
      { number: '+800', label: 'Successful Cases', icon: '🏆' },
    ],
  },
  experience: {
    badge: 'Why Choose Us',
    title: 'Why Choose Al-Ibtisama Center?',
    subtitle: 'We combine years of expertise with modern technology for the best treatment experience',
    items: [
      { title: 'Extensive Experience', desc: 'Over 10 years handling all complex and simple dental cases with confidence and precision.', icon: '👨‍⚕️' },
      { title: 'Modern Technology', desc: 'We use certified equipment and materials for optimal results.', icon: '🔬' },
      { title: 'Comfort-First Care', desc: 'Prioritizing your comfort with modern local anesthesia and techniques that minimize discomfort, alongside gentle, compassionate care.', icon: '💚' },
      { title: 'Comprehensive Care', desc: 'Full treatment follow-up from start to finish with clear treatment plans and regular check-ups.', icon: '📋' },
      { title: 'Affordable Prices', desc: 'High-quality dental services at prices that suit everyone without compromising quality.', icon: '💰' },
      { title: 'Comfortable Environment', desc: 'A clean, welcoming clinic designed to minimize anxiety and make your visit pleasant.', icon: '🏠' },
    ],
  },
  testimonials: {
    badge: 'Patient Reviews',
    title: 'What Our Patients Say',
    subtitle: 'Your satisfaction is our top priority and our true success',
    items: [
      { name: 'Um Mohammed', text: 'Dr. Ghadir is one of the best dentists I have ever visited. She is extremely professional and very gentle. My son felt absolutely no pain!', rating: 5 },
      { name: 'Abdulrahman', text: 'I had orthodontic treatment with Dr. Ghadir and the results were outstanding. She pays incredible attention to detail.', rating: 5 },
      { name: 'Sahar', text: 'I was terrified of the extraction but Dr. Ghadir made me feel completely at ease. The procedure was entirely painless. Highly recommend!', rating: 5 },
      { name: 'Ahmed', text: 'Al-Ibtisama Center is the best dental clinic in Sana\'a. Impeccable hygiene and professional service. Thank you, Dr. Ghadir.', rating: 5 },
    ],
    verified: 'Verified',
    prev: 'Previous',
    next: 'Next',
  },
  faq: {
    badge: 'Frequently Asked Questions',
    title: 'Clear Answers to Your Most Common Questions',
    subtitle: 'Honest answers to what our patients ask most before their visit',
    items: [
      { q: 'What are the working hours of Al-Ibtisama Center in Sana\'a?', a: 'We are open every day except Sunday and Friday. Saturday and Monday from 10:00 AM to 6:00 PM, and Tuesday, Wednesday, and Thursday from 10:00 AM to 4:00 PM.' },
      { q: 'Is dental treatment with Dr. Ghadir Al-Hamadi painful?', a: 'We focus on minimizing discomfort using modern local anesthesia techniques and gentle, compassionate care that prioritizes your comfort before and during treatment.' },
      { q: 'How can I book an appointment with Dr. Ghadir Al-Hamadi in Sana\'a?', a: 'Book easily by calling the doctor at +967 772 003 502, via WhatsApp on the same number, or by visiting the clinic directly on Al-Zubairy Street.' },
      { q: 'Where is Dr. Ghadir Al-Hamadi\'s clinic located in Sana\'a?', a: "Al-Ibtisama Center on Al-Zubairy Street, Sana'a, Yemen. Open the exact location directly on Google Maps from the contact section of this website." },
      { q: 'What services does Dr. Ghadir provide in Sana\'a?', a: 'We provide orthodontics, cosmetic fillings, tooth extraction, dental implants, gum treatment, and teeth whitening using modern, approved techniques and materials.' },
    ],
  },
  contact: {
    badge: 'Contact Us',
    title: 'We Are Here to Help',
    subtitle: 'Don\'t hesitate to reach out for appointments or inquiries',
    form: {
      name: 'Full Name',
      phone: 'Phone Number',
      message: 'Your message...',
      submit: 'Send Message',
      success: 'Thank you! You will be redirected to WhatsApp to complete your booking.',
      error: 'Please enter your name and phone number first.',
    },
    mapTitle: 'Find Us on the Map',
    openMap: 'Open Map',
    waTitle: 'Chat on WhatsApp',
    ctaTitle: 'Have a question? Book your appointment now',
    ctaSubtitle: 'Our team is ready to respond during working hours',
    info: [
      { icon: '📍', label: 'Address', value: "Al-Ibtisama Center — Al-Zubairy St, Sana'a, Yemen", link: 'https://maps.app.goo.gl/nRXewc9d6Q5iJf3z7' },
      { icon: '👩‍⚕️', label: "Doctor's Phone", value: '+967 772 003 502', link: 'tel:+967772003502' },
      { icon: '🏥', label: 'Clinic Phone', value: '+967 777 196 777', link: 'tel:+967777196777' },
      { icon: '💬', label: "Doctor's WhatsApp", value: '+967 772 003 502', link: 'https://wa.me/967772003502' },
    ],
    hours: [
      { days: 'Saturday & Monday', time: '10:00 AM — 6:00 PM' },
      { days: 'Tuesday, Wednesday & Thursday', time: '10:00 AM — 4:00 PM' },
      { days: 'Sunday & Friday', time: 'Closed' },
    ],
  },
  footer: {
    desc: 'Dr. Ghadir Mustafa Al-Hamadi — dentist at Al-Ibtisama Center, Al-Zubairy Street, Sana\'a. Providing comprehensive dental care with modern techniques.',
    rights: '© 2026 Dr. Ghadir Mustafa Al-Hamadi. All rights reserved.',
    builtWith: 'Made with ❤️ for your dental health',
    quickLinks: 'Quick Links',
  },
  blog: {
    badge: 'Health Blog',
    title: 'Oral & Dental Health Articles',
    subtitle: 'Trusted medical insights from Dr. Ghadir to help you care for your teeth and smile with the latest methods',
    readTime: 'min read',
    min: 'min',
    relatedTitle: 'Related Articles',
    faqTitle: 'Frequently Asked Questions',
    backToBlog: 'Back to Blog',
    backHome: 'Back to Home',
    shareTitle: 'Share this Article',
    updatedLabel: 'Last updated',
    authorBy: 'By Dr. Ghadir Mustafa Al-Hamadi',
    ctaTitle: 'Need a Dental Consultation?',
    ctaSubtitle: 'Book your appointment with Dr. Ghadir at Al-Ibtisama Center and get a personalized treatment plan',
  },
  seo: {
    title: 'Dr. Ghadir Mustafa Al-Hamadi | Dentist in Sana\'a — Al-Ibtisama Center',
    description: 'Dr. Ghadir Mustafa Al-Hamadi, dentist in Sana\'a, Yemen. Expert in orthodontics, fillings, extractions, and comfort-focused dental implants. Al-Ibtisama Center, Al-Zubairy Street.',
    keywords: 'dentist sanaa, dentist yemen, dental clinic sanaa, orthodontics yemen, dental implants sanaa, teeth whitening, dr ghadir, al-ibtisama center, Zubairy street',
    hoursTitle: "Doctor's Working Hours",
    bookingTitle: 'Book Your Appointment',
  },
}

export const locales: Record<string, LocaleContent> = { ar, en }

export function useLocale(path: string = '/') {
  const isEn = path.startsWith('/en')
  const locale = isEn ? 'en' : 'ar'
  const t = isEn ? en : ar

  return { locale, t, isEn }
}
