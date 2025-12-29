export const DEFAULT_GH_TIMEOUT_MS = 10_000

export async function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit,
  timeoutMs: number = DEFAULT_GH_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)
  try {
    return await fetch(input, {
      ...init,
      signal: controller.signal,
    })
  } finally {
    clearTimeout(id)
  }
}

export async function fetchPage<T = any>(
  url: string,
  headers: Record<string, string>,
  timeoutMs: number = DEFAULT_GH_TIMEOUT_MS,
): Promise<T[]> {
  const res = await fetchWithTimeout(url, { headers }, timeoutMs)
  if (!res.ok) {
    throw new Error(`GitHub API request failed (${res.status}) for ${url}`)
  }

  return (await res.json()) as T[]
}

export function getGHApiBaseUrl(): string {
  return import.meta.env.VITE_GITHUB_API_BASE_URL || 'https://api.github.com'
}

export function getGHApiToken(): string {
  return import.meta.env.VITE_GITHUB_API_TOKEN
}
