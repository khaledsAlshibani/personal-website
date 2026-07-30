import { createServerFn } from '@tanstack/react-start'
import { fetchDevToArticles } from '@features/dev-to/api/getDevToArticles.server'

export const getDevToArticlesServer = createServerFn({ method: 'GET' }).handler(
  async () => fetchDevToArticles(),
)
