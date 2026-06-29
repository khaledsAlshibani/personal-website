import { createServerFn } from '@tanstack/react-start'
import { fetchDevToArticles } from '@features/devTo/api/getDevToArticles.server'

export const getDevToArticlesServer = createServerFn({ method: 'GET' }).handler(
  async () => fetchDevToArticles(),
)
