import { createServerFn } from '@tanstack/react-start'
import { fetchGithubRepos } from '@features/projects/api/getGHRepos.server'

export const getGithubReposServer = createServerFn({ method: 'GET' }).handler(
  async () => fetchGithubRepos(),
)
