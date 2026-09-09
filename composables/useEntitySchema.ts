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
    name: SITE.doctorName[lang],
    alternateName: SITE.doctorName[other],
    ...(doctorDescription ? { description: doctorDescription } : {}),
    url: base + (isEn ? '/en/' : '/'),
    image: base + '/og-image.png',
    jobTitle: isEn ? 'Dentist' : 'طبيبة أسنان',
    worksFor: { '@id': base + '/#clinic' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: SITE.education.university[lang] },
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
    sameAs: [...SITE.socials],
  }

  const clinic = {
    '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
    '@id': base + '/#clinic',
    name: SITE.clinicName[lang],
    alternateName: [SITE.clinicName[other], SITE.shibaListing.directoryName],
    url: base + '/',
    image: base + '/og-image.png',
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
    ],
    sameAs: [SITE.map.url, SITE.shibaListing.url, ...SITE.socials],
  }

  const website = {
    '@type': 'WebSite',
    '@id': base + '/#website',
    url: base + '/',
    name: SITE.doctorName[lang],
    alternateName: SITE.doctorName[other],
    inLanguage: isEn ? ['en', 'ar'] : ['ar', 'en'],
  }

  return { doctor, clinic, website, base, lang }
}