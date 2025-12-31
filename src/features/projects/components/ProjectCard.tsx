import Text from '@/components/core/typography/Text'
import Title from '@/components/core/typography/Title'
import Badges from '@/components/listings/Badges'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  title: string
  description: string
  url?: string
  starsCount?: string
  skills?: string | Array<string>
  date?: string
}

export default function ProjectCard({
  title,
  description,
  url,
  skills,
  date,
}: ProjectCardProps) {
  const Tag = url ? 'a' : 'div'

  return (
    <Tag
      href={url}
      target={url ? '_blank' : undefined}
      rel={url ? 'noopener noreferrer' : undefined}
      className={cn(url && 'group')}
      aria-disabled={!url}
    >
      <div className="flex items-center gap-2">
        <Title as="h4" className={cn(url && 'group-hover:underline')}>
          {title}
        </Title>
        {date && <Text>({date})</Text>}
      </div>
      <Text className="mt-2 opacity-80" keepWhitespace>
        {description}
      </Text>
      {skills && <Badges badges={skills} className="mt-4" />}
    </Tag>
  )
}
