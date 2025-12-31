import TypographySkeletonLoader from '@/components/loaders/TypographySkeletonLoader'
import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'
import BadgeSkeletonLoader from '@/components/loaders/BadgeSkeletonLoader'

export default function ProjectSkeletonLoader() {
  return (
    <div className="flex flex-col gap-2">
      <TypographySkeletonLoader kind="title" className="w-48" />
      <SkeletonLoader width="w-full" height="h-4" rounded="rounded" />
      <SkeletonLoader width="w-3/4" height="h-4" rounded="rounded" />
      <BadgeSkeletonLoader count={3} className="mt-2" />
    </div>
  )
}
