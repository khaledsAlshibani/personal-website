import { Image } from '@unpic/react'
import { formatDate } from '@/utils/date'
import Title from '@/components/typography/Title'
import Text from '@/components/typography/Text'
import { buildTnwBlogSlug } from '@/features/tnwBlog/utils/slug'

interface TnwArticleProps {
  title: string
  date: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export default function TnwArticle({
  title,
  date,
  imageSrc,
  imageAlt,
  slug,
}: TnwArticleProps) {
  return (
    <a href={buildTnwBlogSlug(slug)} target="_blank" rel="noopener noreferrer">
      <article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between hover:bg-gray-50/50 p-4 -m-4 rounded-lg transition-colors duration-200">
        <div className="relative w-full sm:w-44 lg:w-52 aspect-16/10 rounded-lg overflow-hidden border border-gray-200 shrink-0">
          <Image
            src={imageSrc}
            alt={`Khaled Alshibani - ${imageAlt || title}`}
            loading="lazy"
            layout="fullWidth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Title as="h3" className="group-hover:underline">
            {title}
          </Title>
          <Text as="p" size="sm" className="mt-2">
            {formatDate(date)}
          </Text>
        </div>
      </article>
    </a>
  )
}
