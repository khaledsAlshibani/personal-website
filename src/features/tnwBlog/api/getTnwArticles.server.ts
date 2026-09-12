import request from 'graphql-request'
import type {
  TnwBlogPost,
  TnwBlogPostsResponse,
} from '@/features/tnwBlog/types/blog.types'
import { TNW_BLOG_AUTHOR_SLUG } from '@/features/tnwBlog/utils/constants'
import {
  getTnwBlogApiHeaders,
  getTnwBlogApiPublicUrl,
} from '@/features/tnwBlog/utils/api'
import { DEFAULT_FETCH_TIMEOUT_MS, withTimeout } from '@/utils/fetch'
import { logError } from '@/utils/logError'

const emptyTnwArticles: Array<TnwBlogPost> = []

const TnwArticlesQuery = `
  query KhaledBlogPosts($first: Int!, $authorName: String!) {
    posts(
      first: $first
      where: { authorName: $authorName }
    ) {
      nodes {
        databaseId
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
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
          first: 4,
          authorName: TNW_BLOG_AUTHOR_SLUG,
        },
        getTnwBlogApiHeaders(),
      ),
      DEFAULT_FETCH_TIMEOUT_MS,
    )

    return response.posts.nodes.filter(
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
