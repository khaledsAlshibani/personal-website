import { createServerFn } from '@tanstack/react-start'
import { fetchTnwArticles } from '@features/tnwBlog/api/getTnwArticles.server'

export const getTnwArticlesServer = createServerFn({ method: 'GET' }).handler(
  async () => fetchTnwArticles(),
)
