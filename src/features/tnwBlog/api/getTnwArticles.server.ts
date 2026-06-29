import { createServerFn } from '@tanstack/react-start'
import request from 'graphql-request'
import type { GetArticlesQuery } from '@/graphql/graphql'
import { graphql } from '@/graphql'
import {
  getTnwBlogApiPublicUrl,
  getTnwBlogApiToken,
} from '@/features/tnwBlog/utils/api'
import { DEFAULT_FETCH_TIMEOUT_MS, withTimeout } from '@/utils/fetch'
import { logError } from '@/utils/logError'

const emptyTnwArticles: GetArticlesQuery = { articles: [] }

const TnwArticlesQueryDocument = graphql(`
  query GetArticles(
    $pagination: PaginationArg = {}
    $sort: [String] = []
    $status: PublicationStatus = PUBLISHED
    $filters: ArticleFiltersInput
  ) {
    articles(
      pagination: $pagination
      sort: $sort
      status: $status
      filters: $filters
    ) {
      title
      description
      excerpt
      slug
      publishedAt
      cover {
        url
      }
      category {
        name
        slug
      }
    }
  }
`)

export const getTnwArticlesServer = createServerFn({ method: 'GET' }).handler(
  async (): Promise<GetArticlesQuery> => {
    try {
      return await withTimeout(
        request<GetArticlesQuery>(
          getTnwBlogApiPublicUrl(),
          TnwArticlesQueryDocument.toString(),
          {
            pagination: { limit: 4 },
            sort: ['publishedAt:desc'],
            status: 'PUBLISHED',
            filters: {
              author: {
                name: {
                  eq: 'Khaled Alshibani',
                },
              },
            },
          },
          {
            Authorization: `Bearer ${getTnwBlogApiToken()}`,
          },
        ),
        DEFAULT_FETCH_TIMEOUT_MS,
      )
    } catch (error) {
      logError('tnw-articles', error, {
        url: getTnwBlogApiPublicUrl(),
        timeoutMs: DEFAULT_FETCH_TIMEOUT_MS,
      })
      return emptyTnwArticles
    }
  },
)
