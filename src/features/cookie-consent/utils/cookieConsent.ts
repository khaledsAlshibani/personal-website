export const COOKIE_CONSENT_NAME = 'analytics-consent'
export const COOKIE_CONSENT_ACCEPTED = 'true'
export const COOKIE_CONSENT_DECLINED = 'false'

function readCookie(name: string) {
  if (typeof document === 'undefined') return undefined

  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

export function getCookieConsentValue(name = COOKIE_CONSENT_NAME) {
  return readCookie(name) ?? readCookie(`${name}-legacy`)
}

export function hasAnalyticsConsent() {
  return getCookieConsentValue() === COOKIE_CONSENT_ACCEPTED
}
