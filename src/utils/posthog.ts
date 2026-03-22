import posthog from 'posthog-js'
import { SITE_URL } from './url'

export const IS_DEV = import.meta.env.DEV
export const IS_DEBUG = import.meta.env.VITE_PUBLIC_POSTHOG_DEBUG === 'true'
export const IS_TRACKING_ENABLED = import.meta.env.PROD

export const logEvent = (
  eventName: string,
  properties: Record<string, any>,
) => {
  console.log(`[Event Tracking]: ${eventName}`)
  console.table(properties)
}

const trackEvent = (eventName: string, properties: Record<string, any>) => {
  if (IS_DEV) {
    logEvent(eventName, properties)
    return
  }

  posthog.capture(eventName, properties)

  if (IS_DEBUG) {
    logEvent(eventName, properties)
  }
}

export const trackProjectClicked = (projectName: string) => {
  trackEvent('project_clicked', {
    project_name: projectName,
    site_url: SITE_URL,
  })
}

export const trackContactClicked = (contactPlatform: string) => {
  trackEvent('contact_clicked', {
    contact_platform: contactPlatform,
    site_url: SITE_URL,
  })
}

export const trackGithubLinkClicked = (url: string) => {
  trackEvent('github_link_clicked', {
    url: url,
    site_url: SITE_URL,
  })
}

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    site_url: SITE_URL,
  })
}

export default posthog
