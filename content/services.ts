import type { Block } from './posts'

export interface Service {
  slug: string
  slugAr: string
  emoji: string
  gradient: string
  ar: {
    title: string
    tagline: string
    seoTitle: string
    seoDesc: string
    keywords: string
    blocks: Block[]
  }
  en: {
    title: string
    tagline: string
    seoTitle: string
    seoDesc: string
    keywords: string
    blocks: Block[]
  }
}

export const services: Service[] = [
  {
    slug: 'orthodontics',
    slugAr: 'تقويم-الأسنان',
    emoji: '🦷',
    gradient: 'from-dental-400 to-dental-600',
    ar: {
      title: 'تقويم الأسنان',
      tagline: 'ابتسامة متناسقة بتجهيزات حديثة وخطط علاجية مخصصة لكل حالة',
      seoTitle: 'تقويم الأسنان في صنعاء | د. غدير الحمادي',
      seoDesc: 'تقويم أسنان بأحدث الأجهزة العالمية في مركز الإبتسامة صنعاء: معدني، خزفي، شفاف، ولغوي. خطط علاجية مخصصة تشمل التصوير الرقمي مع د. غدير مصطفى الحمادي.',
      keywords: 'تقويم أسنان صنعاء, أخصائية تقويم اليمن, تقويم شفاف, تقويم خزفي, د. غدير الحمادي',
      blocks: [
        { type: 'p', text: 'التقويم الحديث لا يقتصر على المظهر؛ فهو يصحح الإطباق ويمنع تآكل الأسنان ومشاكل الفك المستقبلية. نوفر في عيادتنا كامل خيارات التقويم من المعدني الاقتصادي إلى الشفاف والألغوي المخفي، مع خطة علاجية رقمية تشرح لك خطوة بخطوة كيف ستبدو نتيجتك.' },
        { type: 'h2', text: 'متى تحتاج إلى تقويم؟' },
        { type: 'ul', items: [
          'تزاحم الأسنان أو وجود فراغات واضحة بينها.',
          'عضة معكوسة أو مفتوحة أو عميقة تؤثر على المضغ.',
          'بروز الأسنان الأمامية أو صعوبة في تنظيفها.',
          'أي حالة أوصى فيها طبيب الأسنان بالتقويم بعد الفحص السريري والأشعة.',
        ] },
        { type: 'h2', text: 'خياراتك في مركز الإبتسامة' },
        { type: 'ul', items: [
          'التقويم المعدني: الأكثر فعالية للحالات المعقدة وبأسعار اقتصادية.',
          'التقويم الخزفي: بلون قريب من لون الأسنان لمن يهتمون بالمظهر.',
          'التقويم الشفاف المتحرك: قابل للإزالة ويناسب الحالات البسيطة والمتوسطة.',
          'التقويم اللغوي: مثبّت خلف الأسنان فيختفي تماماً عن الأنظار.',
        ] },
        { type: 'callout', title: 'راحة ووضوح مضمونان', text: 'نبدأ تشخيصك بفحص دقيق وصور رقمية، ونحضر لك خطة علاجية زمنية ومالية شفافة قبل بدء أي إجراء.' },
        { type: 'faq', items: [
          { q: 'كم تستغرق مدة العلاج بالتقويم؟', a: 'بين 12 و24 شهراً حسب حالة كل مريض، يتبعها مرحلة تثبيت ضرورية لمنع عودة الأسنان إلى وضعها الأصلي.' },
          { q: 'هل نتائج التقويم مؤكدة؟', a: 'عند الالتزام بمواعيد الجلسات وقواعد العناية والاستخدام المنتظم لجهاز التثبيت، تكون النتائج مستقرة وطويلة الأمد.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Orthodontics (Braces)',
      tagline: 'Aligned smiles with modern appliances and personalized treatment plans',
      seoTitle: 'Orthodontics in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Braces with the latest world-class appliances at Al-Ibtisama Center Sana\'a: metal, ceramic, clear, and lingual. Custom digital treatment planning with Dr. Ghadir Mustafa Al-Hamadi.',
      keywords: 'orthodontics sanaa, braces yemen, clear aligners, ceramic braces, dr ghadir al-hamadi',
      blocks: [
        { type: 'p', text: 'Modern orthodontics is not just about looks; it corrects your bite and prevents future enamel wear and jaw problems. Our clinic offers every option from economical metal to clear and hidden lingual braces, with a digital treatment plan showing you step by step how your result will look.' },
        { type: 'h2', text: 'When Do You Need Braces?' },
        { type: 'ul', items: [
          'Crowded teeth or visible gaps.',
          'A crossbite, open bite, or deep bite affecting chewing.',
          'Protruding front teeth or difficulty keeping them clean.',
          'Any condition a dentist recommended after a clinical exam and X-rays.',
        ] },
        { type: 'h2', text: 'Your Options at Al-Ibtisama Center' },
        { type: 'ul', items: [
          'Metal braces: the most effective for complex cases, at an affordable cost.',
          'Ceramic braces: tooth-colored for patients who care about appearance.',
          'Clear aligners: removable trays for mild to moderate cases.',
          'Lingual braces: fixed behind the teeth, completely invisible.',
        ] },
        { type: 'callout', title: 'Comfort and clarity guaranteed', text: 'Your diagnosis starts with a precise exam and digital imaging, and you receive a transparent timeline and cost plan before starting anything.' },
        { type: 'faq', items: [
          { q: 'How long does orthodontic treatment take?', a: 'Between 12 and 24 months depending on each case, followed by a mandatory retention phase to prevent relapse.' },
          { q: 'Are braces results permanent?', a: 'With commitment to appointments, hygiene, and consistent retainer wear, results are stable and long-lasting.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
  {
    slug: 'cosmetic-fillings',
    slugAr: 'الحشوات-التجميلية',
    emoji: '✨',
    gradient: 'from-dental-300 to-dental-500',
    ar: {
      title: 'الحشوات التجميلية',
      tagline: 'حشوات بلون سنك الطبيعي تماماً — لا يلحظها أحد',
      seoTitle: 'الحشوات التجميلية في صنعاء | د. غدير الحمادي',
      seoDesc: 'حشوات تجميلية بمادة الكومبوزيت بألوان مطابقة تماماً لسنك الطبيعي في صنعاء. إصلاح تسوس وترميم جمالي بدقة عالية مع د. غدير مصطفى الحمادي.',
      keywords: 'حشوات تجميلية صنعاء, حشوة بلون السن, علاج التسوس, حشوات كومبوزيت اليمن',
      blocks: [
        { type: 'p', text: 'أصبح التسوس اليوم قابلاً للعلاج بطريقة لا ترى فيه الفرق إطلاقاً. نستخدم حشوات الكومبوزيت الحديثة التي نطابق لونها بدقة مع درجة لون سنك الطبيعية، فتعيد الشكل والوظيفة والحماية معاً في جلسة واحدة.' },
        { type: 'h2', text: 'متى تحتاج إلى حشوة تجميلية؟' },
        { type: 'ul', items: [
          'تسوس يستدعي إزالة وتعبئة التجويف في أي سن.',
          'شقوق أو كسور صغيرة في الأسنان الأمامية.',
          'تآكل مينا الأسنان أو حواف حشوات قديمة داكنة.',
          'إصلاح حشوة قديمة مكسورة أو متغيرة اللون.',
        ] },
        { type: 'h2', text: 'كيف نجريها في عيادتنا؟' },
        { type: 'ul', items: [
          'تخدير موضعي كامل لتمر الجلسة بهدوء تام.',
          'إزالة دقيقة للتسوس وتنظيف التجويف.',
          'مطابقة لون الكومبوزيت تحت إضاءة خاصة لضمان تطابق مثالي.',
          'ملء وترميم وتلميع فوري في جلسة واحدة.',
        ] },
        { type: 'callout', title: 'نتيجة فورية', text: 'الحشوة التجميلية تكتمل في جلسة واحدة، وتخرج من العيادة وقد نسيتَ أي سن كان يتعالج.' },
        { type: 'faq', items: [
          { q: 'كم تدوم الحشوة التجميلية؟', a: 'عادة من 5 إلى 10 سنوات مع نظافة جيدة وزيارات منتظمة.' },
          { q: 'هل الحشوة التجميلية مؤلمة؟', a: 'أقل انزعاجاً من الحشوات التقليدية؛ فمع التخدير الموضعي لن تشعر بشيء أثناء الجلسة.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Cosmetic Fillings',
      tagline: 'Tooth-colored fillings perfectly matched to your natural shade',
      seoTitle: 'Cosmetic Fillings in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Cosmetic composite fillings with shades matched precisely to your natural teeth in Sana\'a. Discreet cavity repair and aesthetic restoration with Dr. Ghadir Mustafa Al-Hamadi.',
      keywords: 'cosmetic fillings sanaa, tooth colored filling, cavity treatment, composite filling yemen',
      blocks: [
        { type: 'p', text: 'Today, decay can be treated in a way no one would ever notice. We use modern composite fillings whose shade is precisely matched to your natural tooth color, restoring shape, function, and protection in a single visit.' },
        { type: 'h2', text: 'When Do You Need a Cosmetic Filling?' },
        { type: 'ul', items: [
          'A cavity requiring removal and filling on any tooth.',
          'Small cracks or chips on front teeth.',
          'Enamel wear or dark edges on old fillings.',
          'Repairing an old, broken, or discolored filling.',
        ] },
        { type: 'h2', text: 'How We Do It at Our Clinic' },
        { type: 'ul', items: [
          'Full local anesthesia for a completely calm session.',
          'Precise removal of decay and cleaning of the cavity.',
          'Composite shade matching under special lighting for a perfect result.',
          'Immediate filling, contouring, and polishing in one visit.',
        ] },
        { type: 'callout', title: 'Instant result', text: 'A cosmetic filling is finished in one session — you will leave having almost forgotten which tooth was treated.' },
        { type: 'faq', items: [
          { q: 'How long does a cosmetic filling last?', a: 'Usually 5 to 10 years with good hygiene and regular visits.' },
          { q: 'Is a cosmetic filling painful?', a: 'Less uncomfortable than traditional fillings; with local anesthesia you will feel nothing during the session.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
  {
    slug: 'tooth-extraction',
    slugAr: 'قلع-الأسنان',
    emoji: '🏥',
    gradient: 'from-dental-500 to-dental-700',
    ar: {
      title: 'قلع الأسنان',
      tagline: 'قلع لطيف بأقل انزعاج وتعافٍ سريع — مع خطة تعويض فورية',
      seoTitle: 'قلع الأسنان وأضراس العقل في صنعاء | د. غدير الحمادي',
      seoDesc: 'قلع الأسنان وأضراس العقل (بسيط أو جراحي) بطرق حديثة وتخدير فعال في صنعاء. إزالة بلا ألم مع خطة تعويض فورية في مركز الإبتسامة مع د. غدير الحمادي.',
      keywords: 'قلع أسنان صنعاء, خلع ضرس العقل, جراحة الأسنان, خلع سن اليمن',
      blocks: [
        { type: 'p', text: 'خلع السن خيار نحملّه كملاذ أخير بعد استنفاد كل حلول الحفظ، لكن حين يكون ضرورياً نحرص أن يمر بأقصى راحة. نوفر تخديراً فعالاً وهدوءاً تاماً، وخطة تعويض فورية (زراعة أو جسر) تحفظ الوظيفة والجمال بعد الخلع مباشرة.' },
        { type: 'h2', text: 'متى يكون الخلع ضرورياً؟' },
        { type: 'ul', items: [
          'تسوس مدمر ترك بنية السن غير قابلة للحفظ.',
          'التهاب جذري متقدم لا يستجيب لعلاجات قناة الجذر.',
          'ضرس عقل منطمر أو مائل يضغط على الأسنان المجاورة.',
          'أسنان لبنية متأخرة تمنع بزوغ السن الدائم.',
        ] },
        { type: 'h2', text: 'ماذا نقدم أثناء الخلع؟' },
        { type: 'ul', items: [
          'تخدير موضعي كامل مع متابعة مستمرة لراحتك.',
          'خلع بسيط أو جراحي حسب وضع السن وعظمه.',
          'تعليمات مكتوبة واضحة للعناية بعد العملية.',
          'خطة تعويض فورية إن كان الخلع لسن دائم.',
        ] },
        { type: 'callout', title: 'بعد الجلسة', text: 'تورم بسيط وشد خفيف يزولان خلال أيام بمسكن بسيط وكمادات باردة، مع تعليمات مكتوبة تفصّل العناية المطلوبة.' },
        { type: 'faq', items: [
          { q: 'هل خلع الضرس مؤلم؟', a: 'لا؛ فمع التخدير الموضعي الحديث تمر الجلسة بلا ألم، وأي انزعاج بعدها يُسيطر عليه تماماً بالمسكنات.' },
          { q: 'متى أحتاج خلع ضرس العقل؟', a: 'عندما يسبب وجعاً متكرراً أو ضغطاً على الأسنان المجاورة أو التهابات، أو حين يكتمل تشكل جذوره فيكون الخلع أسهل.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Tooth Extraction',
      tagline: 'Gentle extraction with minimal discomfort and fast recovery',
      seoTitle: 'Tooth Extraction & Wisdom Teeth in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Simple or surgical tooth and wisdom tooth extraction with modern techniques and effective anesthesia in Sana\'a, Yemen, plus an immediate replacement plan at Al-Ibtisama Center.',
      keywords: 'tooth extraction sanaa, wisdom tooth removal, dental surgery yemen, teeth removal',
      blocks: [
        { type: 'p', text: 'Extraction is our last resort after exhausting every saving option — but when it becomes necessary, we make it as comfortable as possible. We provide effective anesthesia, a calm session, and an immediate replacement plan (implant or bridge) that preserves function and beauty right after removal.' },
        { type: 'h2', text: 'When Is Extraction Necessary?' },
        { type: 'ul', items: [
          'Destroyed decay leaving the tooth beyond restoration.',
          'Advanced root infection that does not respond to root canal treatment.',
          'An impacted or tilted wisdom tooth pressing on neighboring teeth.',
          'Overdue baby teeth blocking the permanent tooth from erupting.',
        ] },
        { type: 'h2', text: 'What We Offer During Extraction' },
        { type: 'ul', items: [
          'Full local anesthesia with continuous monitoring of your comfort.',
          'Simple or surgical extraction based on the tooth and bone.',
          'Clear written aftercare instructions.',
          'An immediate replacement plan when a permanent tooth is removed.',
        ] },
        { type: 'callout', title: 'After the session', text: 'Mild swelling and soreness resolve within days with a simple painkiller and cold compresses — your written instructions will cover everything.' },
        { type: 'faq', items: [
          { q: 'Is tooth extraction painful?', a: 'No; with modern local anesthesia the session is painless, and any post-op discomfort is fully manageable with painkillers.' },
          { q: 'When do I need my wisdom tooth removed?', a: 'When it causes repeated pain, pressure on neighboring teeth, or infections — or once its roots are complete and removal is easier.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
  {
    slug: 'dental-implants',
    slugAr: 'زراعة-الأسنان',
    emoji: '💉',
    gradient: 'from-gold-400 to-gold-600',
    ar: {
      title: 'زراعة الأسنان',
      tagline: 'الحل الذهبي لتعويض الأسنان المفقودة بوظيفة ومظهر طبيعي',
      seoTitle: 'زراعة الأسنان في صنعاء | د. غدير الحمادي',
      seoDesc: 'زراعة أسنان بتقنيات حديثة ومواد عالمية في صنعاء: زرعة واحدة أو جسر مدعوم بزرعتين أو تركيبة كاملة. تخطيط رقمي دقيق ونتيجة طبيعية مع د. غدير الحمادي.',
      keywords: 'زراعة أسنان صنعاء, زراعة الأسنان اليمن, تعويض الأسنان, غرسات أسنان',
      blocks: [
        { type: 'p', text: 'فقدان سن معرّض الأسنان المجاورة للهجرة والعظم للانكماش. الزراعة الحديثة تضع غرسة تيتانيوم مستقرة تحفظ العظم وتعيد المضغ والمظهر بشكل يكاد يطابق الطبيعي تماماً.' },
        { type: 'h2', text: 'ماذا تتضمن الزراعة؟' },
        { type: 'ul', items: [
          'فحص وتصوير ثلاثي الأبعاد (CBCT) لتخطيط دقيق.',
          'غرسة واحدة أو زرعتان تدعمان جسراً أو تركيباً كامل الفك.',
          'فترة اندماج عظمي بين 2 و4 أشهر يغطيها تاج مؤقت.',
          'تاج دائم مصنوع بدقة يطابق أسنانك في الجلسة الأخيرة.',
        ] },
        { type: 'h2', text: 'من هم المرشحون الجيدون؟' },
        { type: 'ul', items: [
          'من فقدوا سناً أو أكثر ويريدون حلاً دائماً.',
          'من يتمتعون بنسيج لثة سليم وعظم كافٍ.',
          'المدخنون بعد تقليل التدخين لتحسين نسبة النجاح.',
          'مرضى السكري المضبوطون تحت متابعة الطبيب.',
        ] },
        { type: 'callout', title: 'لماذا الزراعة عندنا؟', text: 'تدقيق تشخيصي بالتصوير الرقمي، وتاج مؤقت طوال فترة الشفاء، وتعليمات تعافٍ مكتوبة، ومتابعة دورية بعد الاكتمال.' },
        { type: 'faq', items: [
          { q: 'كم تدوم زراعة الأسنان؟', a: 'بمعدل 15-25 سنة أو أكثر مع نظافة صارمة وزيارات منتظمة؛ والتاج نفسه يُستبدل عند الحاجة.' },
          { q: 'هل عمل الزراعة مؤلم؟', a: 'يجري تحت تخدير موضعي كامل خلال ساعة تقريباً، ويشبه الإحساس بعد الخلع ويُدار بتسكين بسيط.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Dental Implants',
      tagline: 'The gold standard for replacing missing teeth with natural function and looks',
      seoTitle: 'Dental Implants in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Dental implants with modern techniques and world-class materials in Sana\'a: single implant, implant-supported bridge, or full-arch. Precise digital planning with Dr. Ghadir Al-Hamadi.',
      keywords: 'dental implants sanaa, implants yemen, tooth replacement, implant dentures',
      blocks: [
        { type: 'p', text: 'Losing a tooth exposes neighbors to drift and the bone to shrinkage. Modern implants place a stable titanium anchor that preserves bone and restores chewing and appearance almost identically to a natural tooth.' },
        { type: 'h2', text: 'What Does Implant Treatment Include?' },
        { type: 'ul', items: [
          'Examination and 3D CBCT imaging for precise planning.',
          'One implant or two anchors supporting a bridge or full arch.',
          'An osseointegration period of 2 to 4 months covered by a temporary crown.',
          'A permanent precision crown matched to your teeth at the final visit.',
        ] },
        { type: 'h2', text: 'Who Are Good Candidates?' },
        { type: 'ul', items: [
          'Patients who lost one or more teeth and want a permanent solution.',
          'Those with healthy gum tissue and sufficient bone.',
          'Smokers after reducing smoking to improve success rates.',
          'Controlled diabetics under medical supervision.',
        ] },
        { type: 'callout', title: 'Why choose us for implants?', text: 'Digital imaging diagnostic precision, a temporary crown throughout healing, written recovery guidance, and regular follow-ups after completion.' },
        { type: 'faq', items: [
          { q: 'How long do dental implants last?', a: '15–25 years or more with strict hygiene and regular visits; the crown itself is replaced when needed.' },
          { q: 'Is implant surgery painful?', a: 'It is done under full local anesthesia in about an hour; the feeling resembles after-extraction soreness, managed with simple pain relief.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
  {
    slug: 'gum-treatment',
    slugAr: 'علاج-اللثة',
    emoji: '🩺',
    gradient: 'from-dental-400 to-gold-500',
    ar: {
      title: 'علاج اللثة',
      tagline: 'أوقف نزيف اللثة واحمِ عظم أسنانك قبل فوات الأوان',
      seoTitle: 'علاج اللثة في صنعاء | د. غدير الحمادي',
      seoDesc: 'علاج مشاكل اللثة في صنعاء: تنظيف احترافي، تقشير الجذور، وعلاج الالتهابات. كافح نزيف اللثة وارتدادها قبل تآكل العظم مع د. غدير الحمادي.',
      keywords: 'علاج اللثة صنعاء, نزيف اللثة, تقشير الجذور, تنظيف الجير',
      blocks: [
        { type: 'p', text: 'اللثة هي أساس الابتسامة؛ فإذا نزفت أو احمرّت أو تراجعت فهذا إنذار لا يُجاب عنه بتفريش أقوى، بل بخطة علاجية متخصصة توقف الالتهاب وتحمي العظم الداعم لأسنانك من التآكل الصامت.' },
        { type: 'h2', text: 'متى تحتاج إلى علاج لثة؟' },
        { type: 'ul', items: [
          'نزيف عند التفريش أو استخدام الخيط.',
          'احمرار أو تورم أو انحسار في اللثة.',
          'رائحة فم مستمرة رغم النظافة الجيدة.',
          'تراكم جير ظاهر أو تحت اللثة.',
        ] },
        { type: 'h2', text: 'خطة علاجنا المتدرجة' },
        { type: 'ul', items: [
          'تنظيف احترافي شامل (إزالة جير وتلميع).',
          'تقشير وتنعيم الجذور تحت التخدير للالتهابات المتقدمة.',
          'بروتوكول منزلي مخصص (فرشاة، خيط، غسول متوازن).',
          'متابعة دورية كل 3-6 أشهر حسب استجابتك.',
        ] },
        { type: 'callout', title: 'عالج مبكراً', text: 'مرض اللثة صامت؛ وكل شهر تأخير يعني مزيداً من فقدان العظم الذي لا يعود. العلاج المبكر بسيط وغير مؤلم.' },
        { type: 'faq', items: [
          { q: 'هل نزيف اللثة خطير؟', a: 'هو أول علامات الالتهاب؛ ومعالجته مبكراً تمنع تطوره إلى فقدان العظم والأسنان.' },
          { q: 'كم مرة أنظف عند الطبيب؟', a: 'مرة كل 6 أشهر للوقاية، وكل 3-4 أشهر لمن عانوا التهابات لثوية سابقة.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Gum Treatment',
      tagline: 'Stop bleeding gums and protect the bone before it is too late',
      seoTitle: 'Gum Treatment in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Gum disease treatment in Sana\'a: professional cleaning, root planing, and inflammation care. Fight bleeding and receding gums before bone loss with Dr. Ghadir Al-Hamadi.',
      keywords: 'gum treatment sanaa, bleeding gums, root planing, scaling dental',
      blocks: [
        { type: 'p', text: 'Gums are the foundation of your smile; if they bleed, redden, or recede, that is a warning answered not with harder brushing but with a specialized plan that stops inflammation and protects the bone supporting your teeth from silent loss.' },
        { type: 'h2', text: 'When Do You Need Gum Treatment?' },
        { type: 'ul', items: [
          'Bleeding when brushing or flossing.',
          'Red, swollen, or receding gums.',
          'Persistent bad breath despite good hygiene.',
          'Visible or subgingival tartar buildup.',
        ] },
        { type: 'h2', text: 'Our Stepwise Treatment Plan' },
        { type: 'ul', items: [
          'Full professional cleaning (scaling and polishing).',
          'Root scaling and planing under anesthesia for advanced inflammation.',
          'A custom home protocol (brush, floss, balanced rinse).',
          'Regular recall every 3–6 months based on your response.',
        ] },
        { type: 'callout', title: 'Treat early', text: 'Gum disease is silent; every month of delay means more irreversible bone loss. Early treatment is simple and painless.' },
        { type: 'faq', items: [
          { q: 'Is bleeding gum dangerous?', a: 'It is the first sign of inflammation; treating it early prevents progression to bone and tooth loss.' },
          { q: 'How often should I get professional cleaning?', a: 'Every 6 months for prevention, and every 3–4 months for those with a history of gum disease.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
  {
    slug: 'teeth-whitening',
    slugAr: 'تبييض-الأسنان',
    emoji: '😊',
    gradient: 'from-gold-300 to-dental-400',
    ar: {
      title: 'تبييض الأسنان',
      tagline: 'ابتسامة ناصعة بأمان — في العيادة أو منزلياً تحت إشراف طبي',
      seoTitle: 'تبييض الأسنان في صنعاء | د. غدير الحمادي',
      seoDesc: 'تبييض أسنان آمن في صنعاء: سريري بجلسة واحدة أو منزلي بقوالب مخصصة، مع إدارة كاملة للحساسية. ابتسامة ناصعة بأيدي طبيبة متخصصة.',
      keywords: 'تبييض أسنان صنعاء, تبييض الأسنان اليمن, تبييض سريري, ابتسامة هوليود',
      blocks: [
        { type: 'p', text: 'تبييض الأسنان هو أسرع طريقة لرؤية الفرق في ابتسامتك، لكنه يحتاج طبيباً لتقييم السبب واختيار الطريقة الصحيحة. نوفر التبييض السريري بجلسة واحدة والمنزلي بقوالب مخصصة، مع إدارة كاملة للحساسية قبل العملية وبعدها.' },
        { type: 'h2', text: 'خيارات التبييض المتاحة' },
        { type: 'ul', items: [
          'التبييض السريري في العيادة: نتيجة فورية خلال 45-60 دقيقة.',
          'التبييض المنزلي: قوالب مخصصة ومادة مدروسة تُستخدم أياماً بمراقبة طبية.',
          'التبييض الداخلي: للأسنان متغيرة اللون بعد علاج العصب.',
        ] },
        { type: 'h2', text: 'ماذا نفحص قبل التبييض؟' },
        { type: 'ul', items: [
          'تسوس مفعّل أو لثة ملتهبة — نعالجها أولاً قبل أي تبييض.',
          'حساسية شديدة تُدار ببروتوكول مخصص للمادة المبيضة.',
          'توقعات غير واقعية — نتحاور بصراحة حول النتيجة المتوقعة.',
        ] },
        { type: 'callout', title: 'حماية مينا أسنانك', text: 'نستخدم تركيبات مضادة للحساسية ونضبط مدة التبييض وتركيزه، ونزودك بنظام غذائي مهدئ لمدة 48 ساعة.' },
        { type: 'faq', items: [
          { q: 'كم تدوم نتيجة التبييض؟', a: 'بين 1-3 سنوات بحسب عاداتك (قهوة، شاي، تدخين) ويمكن إنعاشها بجلسات تنشيط بسيطة.' },
          { q: 'هل التبييض يضر المينا؟', a: 'لا — عند استخدام التركيزات الصحيحة وبالوقت المضبوط تحت إشراف طبي؛ الضرر يأتي فقط من مستحضرات السوق غير المسجلة.' },
        ] },
        { type: 'cta' },
      ],
    },
    en: {
      title: 'Teeth Whitening',
      tagline: 'A radiant smile, safely — in-office or supervised at-home whitening',
      seoTitle: 'Teeth Whitening in Sana\'a | Dr. Ghadir Al-Hamadi',
      seoDesc: 'Safe teeth whitening in Sana\'a: one-visit in-office or custom-tray home whitening, with full sensitivity management. Bright professional results with Dr. Ghadir Al-Hamadi.',
      keywords: 'teeth whitening sanaa, whitening yemen, in-office whitening, bright smile',
      blocks: [
        { type: 'p', text: 'Teeth whitening is the fastest visible upgrade to your smile — but it needs a dentist to assess the cause and choose the right method. We offer one-visit in-office whitening and at-home whitening with custom trays, with complete sensitivity management before and after.' },
        { type: 'h2', text: 'Available Whitening Options' },
        { type: 'ul', items: [
          'In-office whitening: an immediate result in 45–60 minutes.',
          'At-home whitening: custom trays and a carefully dosed gel over days, under medical supervision.',
          'Internal whitening: for teeth discolored after root canal treatment.',
        ] },
        { type: 'h2', text: 'What We Check Before Whitening' },
        { type: 'ul', items: [
          'Active decay or inflamed gums — treated first before any whitening.',
          'High sensitivity, managed with a tailored whitening protocol.',
          'Unrealistic expectations — we speak honestly about the expected result.',
        ] },
        { type: 'callout', title: 'Protecting your enamel', text: 'We use desensitizing formulas, control whitening duration and concentration, and give you a soothing diet plan for 48 hours.' },
        { type: 'faq', items: [
          { q: 'How long does whitening last?', a: '1–3 years depending on your habits (coffee, tea, smoking), refreshable with simple touch-up sessions.' },
          { q: 'Does whitening damage enamel?', a: 'No — with correct concentrations and timings under medical supervision; damage comes only from unregistered market products.' },
        ] },
        { type: 'cta' },
      ],
    },
  },
]