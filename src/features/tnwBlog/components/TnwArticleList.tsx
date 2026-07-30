import TnwArticle from '@features/tnwBlog/components/TnwArticle'
import { ArrowRight } from 'lucide-react'
import { useGetDevToArticlesQuery } from '@features/dev-to/api/getDevToArticles.query'
import { mergeArticles } from '@features/articles/utils/mergeArticles'
import { useGetTnwArticlesQuery } from '@/features/tnwBlog/api/getBlogArticles.query'
import ArticleSkeletonLoader from '@/components/loaders/ArticleSkeletonLoader'
import Title from '@/components/core/typography/Title'
import Button from '@/components/core/Button'
import ButtonSkeletonLoader from '@/components/loaders/ButtonSkeletonLoader'

export default function TnwArticleList() {
  const { data: tnwData, isPending: tnwPending } = useGetTnwArticlesQuery()
  const { data: devToData, isPending: devToPending } =
    useGetDevToArticlesQuery()

  const articles = mergeArticles(tnwData?.articles ?? [], devToData ?? [])
  const isPending = articles.length === 0 && (tnwPending || devToPending)

  if (isPending) {
    return (
      <div className="flex flex-col gap-8 sm:gap-4">
        <Title as="h2">Latest Blogs</Title>
        <div className="flex flex-col gap-4 sm:gap-6">
          {Array.from({ length: 3 }).map((_, idx) => (
            <ArticleSkeletonLoader key={idx} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
          <ButtonSkeletonLoader />
          <ButtonSkeletonLoader />
        </div>
      </div>
    )
  }

  if (articles.length === 0) return null

  return (
    <div id="blogs" className="flex flex-col gap-8 sm:gap-4">
      <Title as="h2">Latest Blogs</Title>

      {articles.map((article) => (
        <TnwArticle
          key={article.id}
          href={article.href}
          title={article.title}
          date={article.date}
          imageSrc={article.imageSrc}
          imageAlt={article.imageAlt}
        />
      ))}

      <div className="flex flex-wrap gap-6 mt-6">
        <Button
          label="Technway Blog"
          href="http://blog.technway.biz/"
          icon={<ArrowRight size={16} />}
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          label="DEV Community"
          href="https://dev.to/khaledsalshibani"
          icon={<ArrowRight size={16} />}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  )
}
