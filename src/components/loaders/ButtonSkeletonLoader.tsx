import { SkeletonLoader } from '@/components/loaders/SkeletonLoader'

export default function ButtonSkeletonLoader({
  className,
}: {
  className?: string
}) {
  return <SkeletonLoader className={className} width="w-12" height="h-6" />
}
