import { Image } from '@unpic/react'
import Terminal from '@/components/icons/Terminal'
import Title from '@/components/core/typography/Title'
import Text from '@/components/core/typography/Text'
import { Route } from '@/routes/__root'
import SocialMediaList from '@/components/icons/socialMedia/socialMediaList'

export default function Header() {
  const headerData = Route.useLoaderData()

  const { description, title, img } = headerData

  return (
    <header id="about" className="flex flex-col gap-8">
      {img.src && (
        <Image
          src={headerData.img.src}
          alt={headerData.img.alt}
          width={headerData.img.width || 100}
          height={headerData.img.height || 100}
          className="rounded-sm mb-4"
          fetchPriority="high"
        />
      )}
      {title && (
        <div>
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
        </div>
      )}

      <SocialMediaList />

      {description && (
        <Text as="p" keepWhitespace>
          {description}
        </Text>
      )}
    </header>
  )
}
