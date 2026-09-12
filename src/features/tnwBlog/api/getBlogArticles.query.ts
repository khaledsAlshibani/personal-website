import { useQuery } from '@tanstack/react-query'
import { getTnwArticlesServer } from '@features/tnwBlog/api/getTnwArticles.functions'
import { TNW_BLOG_AUTHOR_SLUG } from '@features/tnwBlog/utils/constants'

export function useGetTnwArticlesQuery() {
  return useQuery({
    queryKey: ['tnw-articles', TNW_BLOG_AUTHOR_SLUG],
    queryFn: () => getTnwArticlesServer(),
    staleTime: 300_000,
    gcTime: 1_800_000,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
