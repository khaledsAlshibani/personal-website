import { cn } from '@/utils/cn'

interface TextProps {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span'
  keepWhitespace?: boolean
  size?: 'sm' | 'default'
  id?: string
}

export default function Text({
  children,
  className,
  as = 'p',
  keepWhitespace = false,
  size = 'default',
  id,
}: TextProps) {
  const TextTag = as

  return (
    <TextTag
      id={id}
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
