import { SITE } from '~/site.config'
import { services } from '~/content/services'

type Lang = 'ar' | 'en'

/**
 * Single source of truth for Schema.org entity graphs (doctor + clinic + website).
 * The clinic is the LocalBusiness (Dentist/MedicalClinic) with NAP + hours + services;
 * the doctor is the Person who worksFor the clinic. Same @id across ar/en for one entity.
 */
export function useEntitySchema(isEn: boolean, doctorDescription = '') {
  const base = useSiteUrl()
  const lang: Lang = isEn ? 'en' : 'ar'
  const other: Lang = isEn ? 'ar' : 'en'

  const doctor = {
    '@type': 'Person',
    '@id': base + '/#doctor',
    name: SITE.doctorLegalName[lang],
    alternateName: [
      ...SITE.doctorAlternateNames[lang],
      SITE.doctorName[lang],
      SITE.doctorName[other],
      SITE.doctorLegalName[other],
    ],
    honorificPrefix: isEn ? 'Dr.' : 'د.',
    givenName: isEn ? 'Ghadeer' : 'غدير',
    familyName: 'الحمادي',
    gender: 'female',
    nationality: isEn ? 'Yemeni' : 'يمني',
    ...(doctorDescription ? { description: doctorDescription } : {}),
    url: base + (isEn ? '/en/' : '/'),
    image: base + '/og-image.jpg',
    jobTitle: isEn ? 'Dentist' : 'طبيبة أسنان',
    hasOccupation: {
      '@type': 'Occupation',
      name: isEn ? 'Dentist' : 'طبيبة أسنان',
      occupationalCategory: '22-1021.00',
      occupationLocation: [
        { '@type': 'City', name: SITE.addressLocality[lang] },
        { '@type': 'Country', name: isEn ? 'Yemen' : 'اليمن' },
      ],
    },
    knowsLanguage: ['ar', 'en'],
    homeLocation: { '@type': 'Country', name: isEn ? 'Yemen' : 'اليمن' },
    worksFor: { '@id': base + '/#clinic' },
    workLocation: { '@id': base + '/#clinic' },
    mainEntityOfPage: base + (isEn ? '/en/about' : '/about'),
    alumniOf: { '@type': 'CollegeOrUniversity', name: SITE.education.university[lang] },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: isEn ? 'Dental Surgery Competence Examination (BDS)' : 'امتحان الكفاءة — بكالوريوس طب وجراحة الأسنان',
        url: SITE.medicalCouncil.examinerLink,
        recognizedBy: { '@type': 'Organization', name: 'Supreme Medical Council — Yemen', alternateName: 'المجلس الطبي الأعلى — اليمن' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: isEn ? 'Classification + Practice License + Professional ID Card' : 'تصنيف + مزاولة مهنة + بطاقة مزاولة',
        url: SITE.medicalCouncil.licenseLink,
        recognizedBy: { '@type': 'Organization', name: 'Supreme Medical Council — Yemen', alternateName: 'المجلس الطبي الأعلى — اليمن' },
      },
    ],
    telephone: SITE.phones.doctor.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress[lang],
      addressLocality: SITE.addressLocality[lang],
      addressCountry: 'YE',
    },
    knowsAbout: isEn
      ? ['Orthodontics', 'Cosmetic Dentistry', 'Tooth Extraction', 'Dental Implants', 'Gum Treatment', 'Teeth Whitening']
      : ['تقويم الأسنان', 'طب الأسنان التجميلي', 'قلع الأسنان', 'زراعة الأسنان', 'علاج اللثة', 'تبييض الأسنان'],
    sameAs: [...SITE.doctorSocials, SITE.googleBusiness.url],
  }

  const clinic = {
    '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
    '@id': base + '/#clinic',
    name: SITE.clinicName[lang],
    alternateName: [SITE.clinicName[other], SITE.shibaListing.directoryName],
    url: base + '/',
    image: base + '/og-image.jpg',
    telephone: SITE.phones.clinic.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress[lang],
      addressLocality: SITE.addressLocality[lang],
      addressCountry: 'YE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    hasMap: SITE.map.url,
    medicalSpecialty: 'Dentistry',
    isAcceptingNewPatients: true,
    employee: { '@id': base + '/#doctor' },
    areaServed: [
      { '@type': 'City', name: SITE.addressLocality[lang] },
      { '@type': 'Country', name: isEn ? 'Yemen' : 'اليمن' },
    ],
    knowsLanguage: ['ar', 'en'],
    openingHoursSpecification: SITE.ldHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    availableService: services.map((s) => ({ '@type': 'MedicalProcedure', name: s[lang].title })),
    contactPoint: [
      { '@type': 'ContactPoint', telephone: SITE.phones.doctor.replace(/\s/g, ''), contactType: 'physician' },
      { '@type': 'ContactPoint', telephone: SITE.phones.clinic.replace(/\s/g, ''), contactType: 'customer service' },
      { '@type': 'ContactPoint', telephone: SITE.phones.landlineTel.replace('tel:', ''), contactType: 'reservations' },
    ],
    sameAs: [SITE.map.url, SITE.shibaListing.url, ...SITE.clinicSocials],
  }

  const website = {
    '@type': 'WebSite',
    '@id': base + '/#website',
    url: base + '/',
    name: SITE.doctorName[lang],
    alternateName: SITE.doctorName[other],
    inLanguage: isEn ? ['en', 'ar'] : ['ar', 'en'],
    about: { '@id': base + '/#doctor' },
    publisher: { '@id': base + '/#clinic' },
  }

  return { doctor, clinic, website, base, lang }
}