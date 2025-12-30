import { cn } from '@/utils/cn'

type SkeletonLoaderProps = {
  className?: string
  width?: string
  height?: string
  rounded?: string
}

export function SkeletonLoader({
  width = 'w-full',
  height = 'h-8',
  rounded = 'rounded',
  className = '',
}: SkeletonLoaderProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-[var(--color-contrast)]/30',
        rounded,
        width,
        height,
        className,
      )}
      aria-hidden="true"
    />
  )
}
