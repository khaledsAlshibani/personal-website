import { useGetTnwArticlesQuery } from '@features/tnwBlog/api/useGetBlogArticles.query'
import TnwArticle from './TnwArticle'
import ArticleSkeletonLoader from '@/components/loaders/ArticleSkeletonLoader'
import Title from '@/components/typography/Title'

export default function TnwArticleList() {
  const { data, isPending, isError } = useGetTnwArticlesQuery()

  if (isPending) {
    return (
      <div className="flex flex-col gap-8 sm:gap-4">
        <Title as="h2">Latest Blogs</Title>
        <div className="flex flex-col gap-4 sm:gap-6">
          {Array.from({ length: 3 }).map((_, idx) => (
            <ArticleSkeletonLoader key={idx} />
          ))}
        </div>
      </div>
    )
  }

  if (isError || data.articles.length === 0) return null

  return (
    <div className="flex flex-col gap-8 sm:gap-4">
      <Title as="h2">Latest Blogs</Title>

      {data.articles.map(
        (article) =>
          article && (
            <TnwArticle
              key={article.slug || ''}
              slug={article.slug || ''}
              title={article.title || ''}
              date={article.publishedAt || ''}
              imageSrc={article.cover?.url || ''}
              imageAlt={article.title || ''}
            />
          ),
      )}
    </div>
  )
}
