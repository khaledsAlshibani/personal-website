import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.VITE_TNW_BLOG_API_URL,
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
