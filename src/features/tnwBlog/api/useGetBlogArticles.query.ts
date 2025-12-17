import { useQuery } from '@tanstack/react-query'
import { getTnwArticlesServer } from './getTnwArticles.server'

export function useGetTnwArticlesQuery() {
  return useQuery({
    queryKey: ['tnw-articles', 'Khaled Alshibani'],
    queryFn: () => getTnwArticlesServer(),
  })
}
