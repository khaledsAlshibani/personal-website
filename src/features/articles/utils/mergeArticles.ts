import { buildTnwBlogSlug } from '@features/tnwBlog/utils/slug'
import type { ArticleItem } from '@features/articles/types/article.types'
import type { DevToArticle } from '@features/devTo/types/devTo.types'
import type { GetArticlesQuery } from '@/graphql/graphql'

type TnwArticle = NonNullable<GetArticlesQuery['articles'][number]>

function isTnwArticle(
  article: TnwArticle | null | undefined,
): article is TnwArticle & { slug: string } {
  return Boolean(article?.slug)
}

export function mergeArticles(
  tnwArticles: Array<TnwArticle | null | undefined>,
  devToArticles: Array<DevToArticle>,
): Array<ArticleItem> {
  const fromTnw: Array<ArticleItem> = tnwArticles
    .filter(isTnwArticle)
    .map((article) => ({
      id: `tnw-${article.slug}`,
      title: article.title || '',
      date: article.publishedAt || '',
      imageSrc: article.cover?.url || '',
      imageAlt: article.title || '',
      href: buildTnwBlogSlug(article.slug),
    }))

  const fromDevTo: Array<ArticleItem> = devToArticles.map((article) => ({
    id: `devto-${article.id}`,
    title: article.title,
    date: article.published_at,
    imageSrc: article.cover_image || article.social_image,
    imageAlt: article.title,
    href: article.url,
  }))

  return [...fromTnw, ...fromDevTo].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}
