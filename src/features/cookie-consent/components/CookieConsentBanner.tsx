import CookieConsent from 'react-cookie-consent'
import { Cookie } from 'lucide-react'
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_DECLINED,
  COOKIE_CONSENT_NAME,
} from '@features/cookie-consent/utils/cookieConsent'
import Title from '@/components/core/typography/Title'
import Text from '@/components/core/typography/Text'
import { cn } from '@/utils/cn'

interface CookieConsentBannerProps {
  onAccept?: () => void
  onDecline?: () => void
}

export default function CookieConsentBanner({
  onAccept,
  onDecline,
}: CookieConsentBannerProps) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-2 z-50 mx-auto w-full max-w-3xl px-6',
        'sm:bottom-4',
      )}
    >
      <CookieConsent
        location="none"
        cookieName={COOKIE_CONSENT_NAME}
        cookieValue={COOKIE_CONSENT_ACCEPTED}
        declineCookieValue={COOKIE_CONSENT_DECLINED}
        expires={365}
        enableDeclineButton
        buttonText="Allow analytics"
        declineButtonText="Decline"
        ariaAcceptLabel="Allow analytics"
        ariaDeclineLabel="Decline analytics"
        disableStyles
        containerClasses={cn(
          'pointer-events-auto flex max-h-[45dvh] w-full flex-col items-center gap-3 overflow-y-auto',
          'rounded bg-[#756244] p-4 text-center',
          'shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.1)]',
          'md:max-h-none md:flex-row md:items-center md:justify-between md:gap-6 md:overflow-visible md:p-5 md:text-left',
        )}
        contentClasses="w-full min-w-0 text-[#faf8f5] md:flex-1"
        buttonWrapperClasses={cn(
          'flex w-full shrink-0 flex-col-reverse items-stretch gap-2',
          'md:w-auto md:flex-row md:items-center',
        )}
        buttonClasses={cn(
          'cursor-pointer rounded-full bg-[#faf8f5] px-4 py-2',
          'text-sm font-semibold text-[#756244] transition-opacity hover:opacity-90',
          'w-full md:w-auto',
        )}
        declineButtonClasses={cn(
          'cursor-pointer rounded-full px-4 py-2 text-sm font-medium',
          'text-[#faf8f5]/70 transition-opacity hover:opacity-100 hover:text-[#faf8f5]',
          'w-full md:w-auto',
        )}
        onAccept={() => onAccept?.()}
        onDecline={() => onDecline?.()}
      >
        <span className="flex w-full flex-col gap-1.5 md:gap-2">
          <span className="flex items-center justify-center gap-2 md:justify-start">
            <Cookie
              size={22}
              className="shrink-0 text-[#faf8f5]"
              aria-hidden="true"
            />
            <Title as="h3" className="text-base text-[#faf8f5] md:text-lg">
              Analytics preferences
            </Title>
          </span>
          <Text size="sm" className="opacity-80 text-[#faf8f5]">
            This site uses optional analytics to understand how visitors
            interact with its content and improve the overall experience. No
            advertising or cross-site tracking is used.
          </Text>
        </span>
      </CookieConsent>
    </div>
  )
}
