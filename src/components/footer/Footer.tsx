import Button from '@/components/core/Button'
import SocialMediaList from '@/components/icons/socialMedia/socialMediaList'
import Text from '@/components/core/typography/Text'
import ScrollToTop from '@/components/core/ScrollToTop'
import { cn } from '@/utils/cn'

export default function Footer() {
  return (
    <>
      <footer
        className={cn(
          'w-full mb-8 flex gap-4 sm:justify-between sm:items-center',
          'max-sm:flex-col',
        )}
      >
        <Text as="span" size="sm" className="opacity-70">
          &copy; {new Date().getFullYear()}&nbsp; Khaled Alshibani @
          <Button
            label=" Technway.biz"
            href="https://technway.biz/"
            target="_blank"
            rel="noopener noreferrer"
          />
          . All rights reserved.
        </Text>

        <SocialMediaList />
      </footer>

      <ScrollToTop />
    </>
  )
}
