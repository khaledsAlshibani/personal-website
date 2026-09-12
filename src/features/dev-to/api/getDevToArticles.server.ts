import { ARTICLES_LIMIT } from '@features/articles/utils/constants'
import type { DevToArticle } from '@features/dev-to/types/devTo.types'
import { fetchWithTimeout } from '@/utils/fetch'
import { logError } from '@/utils/logError'

const DEV_TO_USERNAME = 'khaledsalshibani'
const DEV_TO_ARTICLES_URL = 'https://dev.to/api/articles'

export async function fetchDevToArticles(
  limit: number,
): Promise<Array<DevToArticle>> {
  try {
    const url = new URL(DEV_TO_ARTICLES_URL)
    url.searchParams.set('username', DEV_TO_USERNAME)
    url.searchParams.set(
      'per_page',
      String(Math.min(Math.max(limit, 0), ARTICLES_LIMIT)),
    )

    const response = await fetchWithTimeout(url.toString())

    if (!response.ok) {
      logError(
        'devto-articles',
        new Error(`HTTP ${response.status} ${response.statusText}`),
        { url: url.toString(), status: response.status },
      )
      return []
    }

    return response.json()
  } catch (error) {
    logError('devto-articles', error, { username: DEV_TO_USERNAME })
    return []
  }
}
