import ImageSkeletonLoader from '@/components/loaders/imageSkeletonLoader'
import TypographySkeletonLoader from '@/components/loaders/TypographySkeletonLoader'

export default function ArticleSkeletonLoader() {
  return (
    <div className="flex gap-8 justify-between">
      <div>
        <TypographySkeletonLoader kind="title" fullWidth />
        <TypographySkeletonLoader kind="subtitle" fullWidth />
      </div>
      <ImageSkeletonLoader size="medium" />
    </div>
  )
}
