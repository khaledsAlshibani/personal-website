import { buildTnwBlogSlug } from '@features/tnwBlog/utils/slug'
import type { TnwBlogPost } from '@features/tnwBlog/types/blog.types'
import type { ArticleItem } from '@features/articles/types/article.types'
import type { DevToArticle } from '@features/dev-to/types/devTo.types'

function isTnwArticle(
  article: TnwBlogPost | null | undefined,
): article is TnwBlogPost & { slug: string } {
  return Boolean(article?.slug)
}

export function mergeArticles(
  tnwArticles: Array<TnwBlogPost | null | undefined>,
  devToArticles: Array<DevToArticle>,
): Array<ArticleItem> {
  const fromTnw: Array<ArticleItem> = tnwArticles
    .filter(isTnwArticle)
    .map((article) => ({
      id: `tnw-${article.slug}`,
      title: article.title || '',
      date: article.date || '',
      imageSrc: article.featuredImage?.node?.sourceUrl || '',
      imageAlt: article.featuredImage?.node?.altText || article.title || '',
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
