import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'
import { useMemo } from 'react'

interface TypographySkeletonLoaderProps {
  kind: 'title' | 'subtitle' | 'description'
  fullWidth?: boolean
  className?: string
}

export default function TypographySkeletonLoader({
  kind,
  fullWidth = false,
  className,
}: TypographySkeletonLoaderProps) {
  const width = useMemo(() => {
    if (fullWidth) return 'w-full'
    switch (kind) {
      case 'title':
        return 'w-44'
      case 'subtitle':
        return 'w-30'
      case 'description':
        return 'w-full'
    }
  }, [fullWidth, kind])

  const height = useMemo(() => {
    switch (kind) {
      case 'title':
        return 'h-6'
      case 'subtitle':
        return 'h-6'
      case 'description':
        return 'h-4'
    }
  }, [kind])

  return <SkeletonLoader width={width} height={height} className={className} />
}
