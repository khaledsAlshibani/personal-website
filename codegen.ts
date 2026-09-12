import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const apiUrl = process.env.TNW_BLOG_API_URL?.trim()

if (!apiUrl) {
  throw new Error('TNW_BLOG_API_URL is required to run GraphQL codegen')
}
const token = process.env.TNW_BLOG_API_TOKEN?.trim()
const clientId = process.env.TNW_BLOG_CLOUDFLARE_ACCESS_CLIENT_ID?.trim()
const clientSecret =
  process.env.TNW_BLOG_CLOUDFLARE_ACCESS_CLIENT_SECRET?.trim()
const headers: Record<string, string> = {}

if (token) headers.Authorization = `Bearer ${token}`
if (clientId && clientSecret) {
  headers['CF-Access-Client-Id'] = clientId
  headers['CF-Access-Client-Secret'] = clientSecret
}

const schema =
  Object.keys(headers).length > 0 ? { [apiUrl]: { headers } } : apiUrl

const config: CodegenConfig = {
  schema,
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast', 'typescript'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
