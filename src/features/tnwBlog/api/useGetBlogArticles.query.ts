import { useQuery } from '@tanstack/react-query'
import { getTnwArticlesServer } from '@features/tnwBlog/api/getTnwArticles.server'

export function useGetTnwArticlesQuery() {
  return useQuery({
    queryKey: ['tnw-articles', 'Khaled Alshibani'],
    queryFn: () => getTnwArticlesServer(),
  })
}
