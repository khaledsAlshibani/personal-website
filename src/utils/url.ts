const FALLBACK_SITE_URL = 'https://khaled.technway.biz'

function normalizeSiteUrl(url: string) {
  return url.trim().replace(/\/+$/, '')
}

export const SITE_URL = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL || FALLBACK_SITE_URL,
)

export const absoluteUrl = (path: string = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
