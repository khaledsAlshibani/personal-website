import { ARTICLES_LIMIT } from '@features/articles/utils/constants'

/**
 * Splits the articles between Technway and DEV posts
 */
export function resolveArticleCounts(tnwArticleCount: number) {
  const tnwCount = Math.min(tnwArticleCount, ARTICLES_LIMIT)

  return {
    tnwCount,
    devToLimit: ARTICLES_LIMIT - tnwCount,
  }
}
