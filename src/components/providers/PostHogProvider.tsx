import React from 'react'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
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
  useScrollTracking()

  if (IS_TRACKING_ENABLED) {
    return (
      <PHProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        {children}
      </PHProvider>
    )
  }

  return <>{children}</>
}
