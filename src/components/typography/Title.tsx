import { cn } from '@/utils/cn'

interface TitleProps {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  className?: string
}

export default function Title({ children, as, className }: TitleProps) {
  const HeadingTag = as
  return (
    <HeadingTag
      className={cn(
        'inline-block',
        as === 'h1' && 'text-4xl font-semibold',
        as === 'h2' && 'text-3xl font-bold',
        as === 'h3' && 'text-xl font-medium',
        as === 'h4' && 'text-lg font-medium',
        as === 'h5' && 'text-lg font-normal',
        as === 'h6' && 'text-base font-normal',
        className,
      )}
    >
      {children}
    </HeadingTag>
  )
}
