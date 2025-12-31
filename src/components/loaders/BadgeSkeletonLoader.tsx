import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'

export default function BadgeSkeletonLoader({
  count = 3,
  className,
}: {
  count?: number
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonLoader
          key={index}
          width="w-10"
          height="h-5"
          rounded="rounded-full"
        />
      ))}
    </div>
  )
}
