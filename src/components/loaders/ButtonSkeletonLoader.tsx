import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'

export default function ButtonSkeletonLoader({
  className,
}: {
  className?: string
}) {
  return <SkeletonLoader className={className} width="w-28" height="h-10" />
}
