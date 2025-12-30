import { Image } from '@unpic/react'
import { useState } from 'react'
import Terminal from '@/components/icons/Terminal'
import Title from '@/components/typography/Title'
import Text from '@/components/typography/Text'
import { Route } from '@/routes/__root'
import SocialMediaList from '@/components/icons/socialMedia/socialMediaList'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Header() {
  const headerData = Route.useLoaderData()
  const [isExpanded, setIsExpanded] = useState(false)

  const { description, title, img } = headerData

  const maxDescriptionLength = 700
  const hasOverflow = description.length > maxDescriptionLength
  const previewText =
    isExpanded || !hasOverflow
      ? description
      : `${description.slice(0, maxDescriptionLength)}…`

  const ArrowIconTag = isExpanded ? ChevronUp : ChevronDown

  return (
    <header id="about" className="flex flex-col gap-8">
      {img.src && (
        <Image
          src={headerData.img.src}
          alt={headerData.img.alt}
          width={headerData.img.width || 100}
          height={headerData.img.height || 100}
          className="rounded-sm mb-4"
        />
      )}
      {title && (
        <span>
          {headerData.titlePrefix && (
            <>
              <Terminal className="size-5 opacity-75 inline-block mr-2 -mt-1" />
              <span className="text-2xl opacity-75 mr-2">
                {headerData.titlePrefix}
              </span>
            </>
          )}
          <Title as="h1" className="text-2xl font-semibold inline-block">
            {headerData.title}
          </Title>
        </span>
      )}

      <SocialMediaList />

      {description && (
        <div className="relative">
          <Text as="p" keepWhitespace>
            {previewText}
          </Text>

          {hasOverflow && (
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 font-semibold underline text-[var(--color-contrast)] cursor-pointer"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <ArrowIconTag size={18} />
            </button>
          )}
        </div>
      )}
    </header>
  )
}
