import { useQuery } from '@tanstack/react-query'
import { getDevToArticlesServer } from '@features/devTo/api/getDevToArticles.server'

export function useGetDevToArticlesQuery() {
  return useQuery({
    queryKey: ['devto-articles', 'khaledsalshibani'],
    queryFn: () => getDevToArticlesServer(),
    staleTime: 300_000,
    gcTime: 1_800_000,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
