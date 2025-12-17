import { cn } from '@/utils/cn'
import React from 'react'

type SkeletonLoaderProps = {
  className?: string

  // tailwind width, height, rounded
  width?: number | string
  height?: number | string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function SkeletonLoader({
  width = '100%',
  height = '20px',
  rounded = 'md',
  className = '',
}: SkeletonLoaderProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200',
        rounded && `rounded-${rounded}`,
        width && `w-${width}`,
        height && `h-${height}`,
        className,
      )}
      aria-hidden="true"
    />
  )
}
