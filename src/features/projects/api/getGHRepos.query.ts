import { useQuery } from '@tanstack/react-query'
import { getGithubReposServer } from '@features/projects/api/getGHRepos.server'
import type { GithubRepo } from '@features/projects/types/github.types'

export function useGHReposQuery() {
  return useQuery<Array<GithubRepo>, Error>({
    queryKey: ['github-repos'],
    queryFn: () => getGithubReposServer(),
    staleTime: 300_000,
  })
}
