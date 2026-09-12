import { createServerFn } from '@tanstack/react-start'
import { ARTICLES_LIMIT } from '@features/articles/utils/constants'
import { fetchDevToArticles } from '@features/dev-to/api/getDevToArticles.server'

export const getDevToArticlesServer = createServerFn({ method: 'GET' })
  .validator((limit: number) =>
    Math.min(Math.max(Math.floor(limit), 0), ARTICLES_LIMIT),
  )
  .handler(async ({ data: limit }) => fetchDevToArticles(limit))
