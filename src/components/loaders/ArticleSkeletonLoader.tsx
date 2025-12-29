import ImageSkeletonLoader from '@/components/loaders/imageSkeletonLoader'
import TypographySkeletonLoader from '@/components/loaders/TypographySkeletonLoader'

export default function ArticleSkeletonLoader() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between w-full">
      <ImageSkeletonLoader size="medium" />
      <div className="flex-1 min-w-0">
        <TypographySkeletonLoader kind="title" fullWidth />
        <TypographySkeletonLoader kind="subtitle" className="mt-2" />
      </div>
    </div>
  )
}
