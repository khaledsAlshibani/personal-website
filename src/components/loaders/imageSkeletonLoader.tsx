import { useMemo } from 'react'
import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'
import { cn } from '@/utils/cn'

interface ImageSkeletonLoaderProps {
  size: 'small' | 'medium' | 'large'
}

export default function ImageSkeletonLoader({
  size,
}: ImageSkeletonLoaderProps) {
  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'small':
        return 'w-24 sm:w-28'
      case 'medium':
        return 'w-full sm:w-32 lg:w-40'
      case 'large':
        return 'w-full sm:w-48 lg:w-56'
    }
  }, [size])

  return (
    <div
      className={cn(
        'relative aspect-16/10 rounded overflow-hidden border border-default shrink-0',
        sizeClassName,
      )}
    >
      <SkeletonLoader
        width="w-full"
        height="h-full"
        className="h-full w-full"
      />
    </div>
  )
}
