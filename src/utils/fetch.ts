export const DEFAULT_FETCH_TIMEOUT_MS = 10_000

export async function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit,
  timeoutMs: number = DEFAULT_FETCH_TIMEOUT_MS,
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

export async function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = DEFAULT_FETCH_TIMEOUT_MS,
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    }),
  ])
}
