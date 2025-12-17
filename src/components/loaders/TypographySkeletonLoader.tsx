import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'
import { useMemo } from 'react'

interface TypographySkeletonLoaderProps {
  kind: 'title' | 'subtitle' | 'description'
  fullWidth?: boolean
}

export default function TypographySkeletonLoader({
  kind,
  fullWidth = false,
}: TypographySkeletonLoaderProps) {
  const width = useMemo(() => {
    if (fullWidth) return '100%'
    switch (kind) {
      case 'title': {
        return '300px'
      }
      case 'subtitle': {
        return '200px'
      }
      case 'description': {
        return '150px'
      }
    }
  }, [kind])

  const height = useMemo(() => {
    switch (kind) {
      case 'title': {
        return '20px'
      }
      case 'subtitle': {
        return '15px'
      }
      case 'description': {
        return '20px'
      }
    }
  }, [kind])

  return <SkeletonLoader width={width} height={height} />
}
