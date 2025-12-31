import Badge from '@/components/core/Badge'
import { cn } from '@/utils/cn'

interface BadgesProps {
  badges?: string | Array<string>
  className?: string
  badgeClassName?: string
}

export default function Badges({
  badges,
  className,
  badgeClassName,
}: BadgesProps) {
  const list = Array.isArray(badges)
    ? badges
    : badges?.split(',').map((badge) => badge.trim())

  const filtered = list?.filter(Boolean)
  if (!filtered || filtered.length === 0) return null

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {filtered.map((badge, index) => (
        <Badge
          key={`${badge}-${index}`}
          label={badge}
          className={badgeClassName}
        />
      ))}
    </div>
  )
}
