import { env } from 'node:process'

export function getTnwBlogApiPublicUrl() {
  return env.TNW_BLOG_API_URL?.trim() || ''
}

export function getTnwBlogApiHeaders(): Record<string, string> {
  const token = env.TNW_BLOG_API_TOKEN?.trim()
  const clientId = env.TNW_BLOG_CLOUDFLARE_ACCESS_CLIENT_ID?.trim()
  const clientSecret = env.TNW_BLOG_CLOUDFLARE_ACCESS_CLIENT_SECRET?.trim()
  const headers: Record<string, string> = {}

  if (token) headers.Authorization = `Bearer ${token}`

  if (clientId && clientSecret) {
    headers['CF-Access-Client-Id'] = clientId
    headers['CF-Access-Client-Secret'] = clientSecret
  }

  return headers
}
