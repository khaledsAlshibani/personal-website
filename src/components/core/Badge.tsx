import { cn } from '@/utils/cn'
import Text from '@/components/core/typography/Text'

export default function Badge({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <Text
      as="span"
      className={cn(
        'inline-block text-xs border border-contrast px-2 py-1 rounded-full',
        className,
      )}
    >
      {label}
    </Text>
  )
}
