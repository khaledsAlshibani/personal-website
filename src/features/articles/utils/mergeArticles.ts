import { buildTnwBlogSlug } from '@features/tnwBlog/utils/slug'
import type { TnwBlogPost } from '@features/tnwBlog/types/blog.types'
import type { ArticleItem } from '@features/articles/types/article.types'
import type { DevToArticle } from '@features/dev-to/types/devTo.types'

function isTnwArticle(
  article: TnwBlogPost | null | undefined,
): article is TnwBlogPost & { slug: string } {
  return Boolean(article?.slug)
}

function getTitleKey(title: string) {
  return title.trim().toLowerCase().replace(/\s+/g, ' ')
}

function removeDuplicateArticles(articles: Array<ArticleItem>) {
  const seenTitles = new Set<string>()

  return articles.filter((article) => {
    const titleKey = getTitleKey(article.title)

    if (!titleKey) return true
    if (seenTitles.has(titleKey)) return false

    seenTitles.add(titleKey)
    return true
  })
}

export function mergeArticles(
  tnwArticles: Array<TnwBlogPost | null | undefined>,
  devToArticles: Array<DevToArticle>,
): Array<ArticleItem> {
  const fromTnw: Array<ArticleItem> = tnwArticles
    .filter(isTnwArticle)
    .sort(
      (currentArticle, otherArticle) =>
        Number(Boolean(otherArticle.isPinned)) -
        Number(Boolean(currentArticle.isPinned)),
    )
    .map((article) => ({
      id: `tnw-${article.slug}`,
      title: article.title || '',
      date: article.date || '',
      imageSrc: article.featuredImage?.sourceUrl || '',
      imageAlt: article.featuredImage?.altText || article.title || '',
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

  return removeDuplicateArticles([...fromTnw, ...fromDevTo])
}
