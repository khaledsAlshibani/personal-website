function formatDetails(details?: Record<string, unknown>) {
  if (!details) return ''

  const parts = Object.entries(details)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${String(value)}`)

  return parts.length > 0 ? ` (${parts.join(', ')})` : ''
}

export function logError(
  scope: string,
  error: unknown,
  details?: Record<string, unknown>,
) {
  if (typeof window !== 'undefined') return

  const message = error instanceof Error ? error.message : String(error)
  console.error(`[${scope}] ${message}${formatDetails(details)}`)
}
