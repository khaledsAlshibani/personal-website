import { socialMediaLinks } from '@/components/icons/socialMedia/socialMediaList'
import { SITE_URL, absoluteUrl } from '@/utils/url'

export const SITE_NAME = 'Khaled Alshibani'
export const PERSON_NAME = 'Khaled Alshibani'
export const JOB_TITLE = 'Full Stack Developer'

export const DEFAULT_TITLE = `${PERSON_NAME} - ${JOB_TITLE}`
export const DEFAULT_DESCRIPTION =
  'Full stack web developer with strong frontend foundation, production experience, and focus on performance, stability, and maintainable modern applications.'

export const OG_IMAGE = absoluteUrl('/og.png')
export const OG_IMAGE_WIDTH = '1200'
export const OG_IMAGE_HEIGHT = '630'
export const PROFILE_IMAGE = absoluteUrl('/khaled-alshibani.webp')
export const CANONICAL_URL = absoluteUrl('/')

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: CANONICAL_URL,
    image: PROFILE_IMAGE,
    jobTitle: JOB_TITLE,
    description: DEFAULT_DESCRIPTION,
    sameAs: socialMediaLinks.map(({ url }) => url),
    knowsAbout: [
      'Web Development',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Design Systems',
      'Web Components',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Technway',
      url: 'https://technway.biz/',
    },
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: DEFAULT_TITLE,
    url: CANONICAL_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#person` },
  }
}
