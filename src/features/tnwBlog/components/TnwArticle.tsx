import { Image } from '@unpic/react'
import { Clock } from 'lucide-react'
import { formatDate } from '@/utils/date'
import Title from '@/components/core/typography/Title'
import Text from '@/components/core/typography/Text'
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
      <article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-32 lg:w-40 aspect-16/10 rounded overflow-hidden border border-default shrink-0">
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
          <Text as="p" className="mt-2 flex items-center gap-1 text-xs">
            <Clock size={12} />
            {formatDate(date)}
          </Text>
        </div>
      </article>
    </a>
  )
}
