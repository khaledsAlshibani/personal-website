import { SkeletonLoader } from './SkeletonLoader'
import { useMemo } from 'react'

interface ImageSkeletonLoaderProps {
  size: 'small' | 'medium' | 'large'
}

export default function ImageSkeletonLoader({
  size,
}: ImageSkeletonLoaderProps) {
  const height = useMemo(() => {
    switch (size) {
      case 'small': {
        return '100px'
      }
      case 'medium': {
        return '200px'
      }
      case 'large': {
        return '300px'
      }
    }
  }, [size])

  return <SkeletonLoader width="100%" height={height} />
}
