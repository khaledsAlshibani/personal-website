import { useGetTnwArticlesQuery } from '@features/tnwBlog/api/useGetBlogArticles.query'
import ArticleSkeletonLoader from '@/components/loaders/ArticleSkeletonLoader'
import TnwArticle from './TnwArticle'
import Title from '@/components/typography/Title'

export default function TnwArticleList() {
  const { data, isPending, isError, error } = useGetTnwArticlesQuery()

  if (isPending) return <ArticleSkeletonLoader />

  if (isError || !data) return null

  return (
    <div className="flex flex-col gap-8 sm:gap-4">
      <Title as="h2" className="text-2xl font-semibold inline-block">
        Latest Blogs
      </Title>

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
