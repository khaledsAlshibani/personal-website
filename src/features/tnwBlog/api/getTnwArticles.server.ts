import request from 'graphql-request'
import { ARTICLES_LIMIT } from '@features/articles/utils/constants'
import type {
  TnwBlogPost,
  TnwBlogPostsResponse,
} from '@/features/tnwBlog/types/blog.types'
import {
  TNW_BLOG_AUTHOR_SLUG,
  TNW_BLOG_LANGUAGE,
} from '@/features/tnwBlog/utils/constants'
import {
  getTnwBlogApiHeaders,
  getTnwBlogApiPublicUrl,
} from '@/features/tnwBlog/utils/api'
import { DEFAULT_FETCH_TIMEOUT_MS, withTimeout } from '@/utils/fetch'
import { logError } from '@/utils/logError'

const emptyTnwArticles: Array<TnwBlogPost> = []

const TnwArticlesQuery = `
  query KhaledBlogPosts(
    $language: String!
    $first: Int!
    $authorSlug: String!
  ) {
    technwayBlogPosts(
      language: $language
      first: $first
      offset: 0
      authorSlug: $authorSlug
    ) {
      nodes {
        databaseId
        slug
        title
        excerpt
        date
        featuredImage { sourceUrl altText }
        isPinned
      }
    }
  }
`

export async function fetchTnwArticles(): Promise<Array<TnwBlogPost>> {
  const apiUrl = getTnwBlogApiPublicUrl()

  if (!apiUrl) {
    logError('tnw-articles', new Error('Missing TNW_BLOG_API_URL'))
    return emptyTnwArticles
  }

  try {
    const response = await withTimeout(
      request<TnwBlogPostsResponse>(
        apiUrl,
        TnwArticlesQuery,
        {
          language: TNW_BLOG_LANGUAGE,
          first: ARTICLES_LIMIT,
          authorSlug: TNW_BLOG_AUTHOR_SLUG,
        },
        getTnwBlogApiHeaders(),
      ),
      DEFAULT_FETCH_TIMEOUT_MS,
    )

    return response.technwayBlogPosts.nodes.filter(
      (article): article is TnwBlogPost => article !== null,
    )
  } catch (error) {
    logError('tnw-articles', error, {
      url: apiUrl,
      timeoutMs: DEFAULT_FETCH_TIMEOUT_MS,
    })
    return emptyTnwArticles
  }
}
