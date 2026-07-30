import React, { useEffect, useState } from 'react'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { hasAnalyticsConsent } from '@features/cookie-consent/utils/cookieConsent'
import CookieConsentBanner from '@features/cookie-consent/components/CookieConsentBanner'
import { IS_TRACKING_ENABLED } from '@/utils/posthog'
import { useScrollTracking } from '@/hooks/useScrollTracking'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
} as const

interface PostHogProviderProps {
  children: React.ReactNode
}

export const PostHogProvider: React.FC<PostHogProviderProps> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    setMounted(true)
    setConsentGiven(hasAnalyticsConsent())
  }, [])

  useScrollTracking()

  const shouldTrack = IS_TRACKING_ENABLED && consentGiven

  return (
    <>
      {shouldTrack ? (
        <PHProvider
          apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
          options={options}
        >
          {children}
        </PHProvider>
      ) : (
        children
      )}

      {mounted && (
        <CookieConsentBanner
          onAccept={() => setConsentGiven(true)}
          onDecline={() => setConsentGiven(false)}
        />
      )}
    </>
  )
}
