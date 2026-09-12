import request from 'graphql-request'
import {
  DEFAULT_GH_TIMEOUT_MS,
  getGHApiBaseUrl,
  getGHApiToken,
} from '@features/projects/utils/github'
import type { GithubRepo } from '@features/projects/types/github.types'
import { withTimeout } from '@/utils/fetch'
import { logError } from '@/utils/logError'

const pinnedRepositoriesQuery = `
  query PinnedRepositories($first: Int!) {
    viewer {
      pinnedItems(first: $first, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            databaseId
            name
            description
            url
            homepageUrl
            isPrivate
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            owner {
              login
            }
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

interface PinnedRepository {
  databaseId: number
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  isPrivate: boolean
  stargazerCount: number
  forkCount: number
  primaryLanguage: { name: string } | null
  owner: { login: string }
  repositoryTopics: {
    nodes: Array<{ topic: { name: string } | null }>
  }
}

interface PinnedRepositoriesResponse {
  viewer: {
    pinnedItems: {
      nodes: Array<PinnedRepository | null>
    }
  }
}

function mapPinnedRepository(repo: PinnedRepository): GithubRepo {
  return {
    id: repo.databaseId,
    name: repo.name,
    description: repo.description,
    html_url: repo.url,
    homepage: repo.homepageUrl,
    stargazers_count: repo.stargazerCount,
    forks_count: repo.forkCount,
    language: repo.primaryLanguage?.name ?? null,
    topics: repo.repositoryTopics.nodes
      .map(({ topic }) => topic?.name)
      .filter((name): name is string => Boolean(name)),
    owner: repo.owner,
  }
}

export async function fetchGithubRepos(): Promise<Array<GithubRepo>> {
  const baseUrl = getGHApiBaseUrl()

  try {
    const token = getGHApiToken()

    if (!token) {
      logError('github-repos', new Error('Missing GitHub API token'))
      return []
    }

    const url = new URL('/graphql', baseUrl).toString()
    const response = await withTimeout(
      request<PinnedRepositoriesResponse>(
        url,
        pinnedRepositoriesQuery,
        { first: 6 },
        { Authorization: `Bearer ${token}` },
      ),
      DEFAULT_GH_TIMEOUT_MS,
    )

    return response.viewer.pinnedItems.nodes
      .filter(
        (repo): repo is PinnedRepository => repo !== null && !repo.isPrivate,
      )
      .map(mapPinnedRepository)
  } catch (error) {
    logError('github-repos', error, {
      url: baseUrl,
      timeoutMs: DEFAULT_GH_TIMEOUT_MS,
    })
    return []
  }
}
