/**
 * Dr. Ghadeer Mustafa Al-Hamadi — Website Central Configuration
 * Production single source of truth for SEO, contact data & links.
 * Replace BASE_URL with the real production domain before deploying.
 */
export const SITE = {
  baseUrl: 'https://ghadeers.com',
  doctorName: { ar: 'د. غدير مصطفى الحمادي', en: 'Dr. Ghadeer Mustafa Al-Hamadi' },
  clinicName: { ar: 'مركز الإبتسامة', en: 'Al-Ibtisama Dental Center' },
  specialty: { ar: 'طب أسنان', en: 'Dentistry' },
  address: {
    ar: 'مركز الإبتسامة — شارع الزبيري، صنعاء، اليمن',
    en: "Al-Ibtisama Center — Al-Zubairy St, Sana'a, Yemen",
  },
  streetAddress: { ar: 'شارع الزبيري', en: 'Al-Zubairy Street' },
  addressLocality: { ar: 'صنعاء', en: "Sana'a" },
  education: {
    degree: { ar: 'بكالوريوس طب وجراحة الأسنان', en: 'Bachelor of Dental Surgery (BDS)' },
    university: { ar: 'جامعة العلوم والتكنولوجيا', en: 'University of Science and Technology' },
  },
  /** Dr. Ghadeer's own verified public social profiles (Person entity → sameAs). */
  doctorSocials: [
    'https://www.facebook.com/share/1CE4VHJGCM/',
    'https://www.instagram.com/ghadeer.mustafa_/',
  ] as string[],
  /** Clinic verified public social profiles (Dentist/MedicalBusiness entity → sameAs). */
  clinicSocials: [] as string[],
  /** External corroborating listing (the clinic, not the doctor) in a trusted registry. */
  shibaListing: {
    url: 'https://shibapharma.com/establishment/12',
    directoryName: 'مركز الابتسامة لطب الاسنان',
  },
  phones: {
    doctor: '+967 772 003 502',
    doctorTel: 'tel:+967772003502',
    doctorWa: 'https://wa.me/967772003502',
    clinic: '+967 777 196 777',
    clinicTel: 'tel:+967777196777',
  },
  map: {
    label: 'https://maps.app.goo.gl/nRXewc9d6Q5iJf3z7',
    url: 'https://maps.app.goo.gl/nRXewc9d6Q5iJf3z7',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.2298554986285!2d44.19240848470391!3d15.344638038584243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbacbe4a4eef%3A0x51163f8dbd9f12b2!2z2YXYsdmD2LIg2KfZhNin2KjYqtiz2KfZhdipINmE2LfYqCDYp9mE2KfYs9mG2KfZhg!5e0!3m2!1sar!2s!4v1788887653001!5m2!1sar!2s',
  },
  geo: { latitude: 15.344638, longitude: 44.192408 },
  hours: {
    ar: [
      { days: 'السبت والإثنين', time: '10:00 صباحاً — 6:00 مساءً' },
      { days: 'الثلاثاء والأربعاء والخميس', time: '10:00 صباحاً — 4:00 عصراً' },
      { days: 'الأحد والجمعة', time: 'مغلق' },
    ],
    en: [
      { days: 'Saturday & Monday', time: '10:00 AM — 6:00 PM' },
      { days: 'Tuesday, Wednesday & Thursday', time: '10:00 AM — 4:00 PM' },
      { days: 'Sunday & Friday', time: 'Closed' },
    ],
  },
  /** Opening hours in ISO HH:MM format for Schema.org structured data */
  ldHours: [
    { open: '10:00', close: '18:00', days: ['Saturday', 'Monday'] },
    { open: '10:00', close: '16:00', days: ['Tuesday', 'Wednesday', 'Thursday'] },
  ],
} as const

export type SiteConfig = typeof SITE