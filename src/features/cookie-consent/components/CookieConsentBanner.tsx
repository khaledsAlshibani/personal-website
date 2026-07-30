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
        'pointer-events-none fixed inset-x-0 bottom-8 z-50 mx-auto w-full max-w-3xl px-6',
        'sm:bottom-10',
      )}
    >
      <CookieConsent
        location="none"
        cookieName={COOKIE_CONSENT_NAME}
        cookieValue={COOKIE_CONSENT_ACCEPTED}
        declineCookieValue={COOKIE_CONSENT_DECLINED}
        expires={365}
        enableDeclineButton
        flipButtons
        buttonText="Allow analytics"
        declineButtonText="Decline"
        ariaAcceptLabel="Allow analytics"
        ariaDeclineLabel="Decline analytics"
        disableStyles
        containerClasses={cn(
          'pointer-events-auto flex w-full flex-col items-center gap-4',
          'rounded bg-[#756244] p-5 text-center',
          'shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.1)]',
          'sm:p-6',
        )}
        contentClasses="w-full text-[#faf8f5]"
        buttonWrapperClasses="flex w-full shrink-0 items-center justify-center gap-2"
        buttonClasses={cn(
          'cursor-pointer rounded-full bg-[#faf8f5] px-4 py-2',
          'text-sm font-semibold text-[#756244] transition-opacity hover:opacity-90',
        )}
        declineButtonClasses={cn(
          'cursor-pointer rounded-full px-4 py-2 text-sm font-medium',
          'text-[#faf8f5]/70 transition-opacity hover:opacity-100 hover:text-[#faf8f5]',
        )}
        onAccept={() => onAccept?.()}
        onDecline={() => onDecline?.()}
      >
        <span className="flex w-full flex-col items-center gap-3">
          <Cookie size={32} className="text-[#faf8f5]" aria-hidden="true" />
          <span className="flex w-full flex-col items-center gap-2">
            <Title as="h3" className="text-[#faf8f5]">
              Analytics preferences
            </Title>
            <Text className="opacity-80 text-[#faf8f5]">
              This site uses optional analytics to understand how visitors
              interact with its content and improve the overall experience. No
              advertising or cross-site tracking is used.
            </Text>
          </span>
        </span>
      </CookieConsent>
    </div>
  )
}
