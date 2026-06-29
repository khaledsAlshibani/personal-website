import {
  DEFAULT_GH_TIMEOUT_MS,
  fetchPage,
  getGHApiBaseUrl,
  getGHApiToken,
} from '@features/projects/utils/github'
import type { GithubRepo } from '@features/projects/types/github.types'
import { logError } from '@/utils/logError'

// prettier-ignore
const allowedReposByOwner: Record<string, Array<string>> = {
  letssummarize: ['*'],
  'SAHIM-Platform': [
    'sahim-api'
  ],
  technway: [
    'graphql-starter',
  ],
  khaledsAlshibani: [
    'php-nextjs-simple-app'
  ],
}

export async function fetchGithubRepos(): Promise<Array<GithubRepo>> {
  const baseUrl = getGHApiBaseUrl()

  try {
    const token = getGHApiToken()

    if (!token) {
      logError('github-repos', new Error('Missing GitHub API token'))
      return []
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

    const allowedReposByOwnerLower: Record<string, Array<string>> = Object.keys(
      allowedReposByOwner,
    ).reduce(
      (acc, owner) => {
        acc[owner.toLowerCase()] = allowedReposByOwner[owner]
        return acc
      },
      {} as Record<string, Array<string>>,
    )

    const filtered = Array.from(unique.values()).filter((repo) => {
      const owner = repo.owner?.login

      if (!owner) {
        return false
      }

      const allowed = allowedReposByOwnerLower[owner.toLowerCase()] ?? []
      const allowAll = allowed.includes('*')

      if (allowed.length === 0 || allowAll) {
        return true
      }

      return allowed.includes(repo.name)
    })

    const ownerOrder = Object.keys(allowedReposByOwnerLower)
    const repoOrderByOwner = ownerOrder.reduce(
      (acc, owner) => {
        const repos = allowedReposByOwnerLower[owner]
        if (!repos.includes('*')) {
          acc[owner] = Object.fromEntries(
            repos.map((name, idx) => [name.toLowerCase(), idx]),
          )
        }
        return acc
      },
      {} as Partial<Record<string, Record<string, number>>>,
    )

    filtered.sort((a, b) => {
      const ownerA = a.owner?.login.toLowerCase() ?? ''
      const ownerB = b.owner?.login.toLowerCase() ?? ''

      const ownerIdxA = ownerOrder.indexOf(ownerA)
      const ownerIdxB = ownerOrder.indexOf(ownerB)
      const normOwnerIdxA = ownerIdxA === -1 ? ownerOrder.length : ownerIdxA
      const normOwnerIdxB = ownerIdxB === -1 ? ownerOrder.length : ownerIdxB
      if (normOwnerIdxA !== normOwnerIdxB) return normOwnerIdxA - normOwnerIdxB

      const repoIdxA = repoOrderByOwner[ownerA]?.[a.name.toLowerCase()]
      const repoIdxB = repoOrderByOwner[ownerB]?.[b.name.toLowerCase()]

      const hasRepoOrderA = repoIdxA !== undefined
      const hasRepoOrderB = repoIdxB !== undefined
      if (hasRepoOrderA && hasRepoOrderB) return repoIdxA - repoIdxB
      if (hasRepoOrderA) return -1
      if (hasRepoOrderB) return 1

      return 0
    })

    return filtered
  } catch (error) {
    logError('github-repos', error, {
      url: baseUrl,
      timeoutMs: DEFAULT_GH_TIMEOUT_MS,
    })
    return []
  }
}
