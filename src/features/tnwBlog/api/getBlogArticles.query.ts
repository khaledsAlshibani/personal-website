import { useQuery } from '@tanstack/react-query'
import { getTnwArticlesServer } from '@features/tnwBlog/api/getTnwArticles.server'

export function useGetTnwArticlesQuery() {
  return useQuery({
    queryKey: ['tnw-articles', 'Khaled Alshibani'],
    queryFn: () => getTnwArticlesServer(),
    staleTime: 300_000,
    gcTime: 1_800_000,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
