import { useQuery } from '@tanstack/react-query'
import { getDevToArticlesServer } from '@features/dev-to/api/getDevToArticles.functions'

interface DevToArticlesQueryOptions {
  enabled: boolean
  limit: number
}

export function useGetDevToArticlesQuery({
  enabled,
  limit,
}: DevToArticlesQueryOptions) {
  return useQuery({
    queryKey: ['devto-articles', 'khaledsalshibani', limit],
    queryFn: () => getDevToArticlesServer({ data: limit }),
    enabled,
    staleTime: 300_000,
    gcTime: 1_800_000,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
