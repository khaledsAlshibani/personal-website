import { Image } from '@unpic/react'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Terminal from '@/components/icons/Terminal'
import Title from '@/components/core/typography/Title'
import Text from '@/components/core/typography/Text'
import { Route } from '@/routes/__root'
import SocialMediaList from '@/components/icons/socialMedia/socialMediaList'
import Button from '@/components/core/Button'

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
            <Button
              label={isExpanded ? 'Show less' : 'Read more'}
              onClick={() => setIsExpanded(!isExpanded)}
              icon={<ArrowIconTag size={16} />}
              aria-expanded={isExpanded}
            />
          )}
        </div>
      )}
    </header>
  )
}
