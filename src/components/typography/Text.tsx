import { cn } from '@/utils/cn'

interface TextProps {
  children: React.ReactNode
  className?: string
  as: 'p' | 'span'
  keepWhitespace?: boolean
  size?: 'sm' | 'default'
}

export default function Text({
  children,
  className,
  as,
  keepWhitespace = false,
  size = 'default',
}: TextProps) {
  const TextTag = as

  return (
    <TextTag
      className={cn(
        'leading-relaxed',
        keepWhitespace && 'whitespace-pre-line',
        size === 'sm' && 'text-sm font-normal',
        className,
      )}
    >
      {children}
    </TextTag>
  )
}
