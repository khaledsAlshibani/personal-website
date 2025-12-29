import Text from '@/components/typography/Text'
import Title from '@/components/typography/Title'
import { Star } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  url: string
  starsCount?: string
}

export default function ProjectCard({
  title,
  description,
  url,
}: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <Title as="h4" className="group-hover:underline">
        {title}
      </Title>
      <Text>{description}</Text>
      {/* {starsCount && (
        <Text as="span" className="flex gap-1 items-center" size="sm">
          <Star size={16} />
          {starsCount}
        </Text>
      )} */}
    </a>
  )
}
