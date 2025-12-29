import { createServerFn } from '@tanstack/react-start'
import {
  DEFAULT_GH_TIMEOUT_MS,
  fetchPage,
} from '@features/projects/utils/github'
import type { GithubRepo } from '@features/projects/types/github.types'
import { getGHApiBaseUrl, getGHApiToken } from '@features/projects/utils/github'

// prettier-ignore
const allowedReposByOwner: Record<string, string[]> = {
  khaledsAlshibani: [
    'php-nextjs-simple-app'
  ],
  technway: [
    'graphql-starter',
  ],
  letssummarize: ['*'],
  'SAHIM-Platform': [
    'sahim-api'
  ],
}

export const getGithubReposServer = createServerFn({ method: 'GET' }).handler(
  async (): Promise<GithubRepo[]> => {
    const baseUrl = getGHApiBaseUrl()
    const token = getGHApiToken()

    if (!token) {
      throw new Error('Missing GitHub API token')
    }

    // reference:
    // https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28#making-a-request
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${token}`,
    }

    // reference:
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user
    const url = new URL('/user/repos', baseUrl)
    url.searchParams.set('visibility', 'public')
    url.searchParams.set('affiliation', 'owner,organization_member')
    url.searchParams.set('sort', 'updated')
    url.searchParams.set('per_page', '100')

    const merged = await fetchPage<GithubRepo>(
      url.toString(),
      headers,
      DEFAULT_GH_TIMEOUT_MS,
    )

    const unique = new Map<number, GithubRepo>()
    merged.forEach((repo) => unique.set(repo.id, repo))

    const allowedReposByOwnerLower: Record<string, string[]> = Object.keys(
      allowedReposByOwner,
    ).reduce(
      (acc, owner) => {
        acc[owner.toLowerCase()] = allowedReposByOwner[owner]
        return acc
      },
      {} as Record<string, string[]>,
    )

    const filtered = Array.from(unique.values()).filter((repo) => {
      const owner = repo.owner?.login

      if (!owner) {
        return false
      }

      const allowed = allowedReposByOwnerLower[owner.toLowerCase()]
      const allowAll = allowed?.includes('*')

      if (!allowed || allowed.length === 0 || allowAll) {
        return true
      }

      return allowed.includes(repo.name)
    })

    // sort by stargazers_count desc
    filtered.sort((a, b) => b.stargazers_count - a.stargazers_count)

    return filtered
  },
)
