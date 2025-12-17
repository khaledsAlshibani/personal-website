import { createServerFn } from '@tanstack/react-start'
import { graphql } from '@/graphql'
import type { GetArticlesQuery } from '@/graphql/graphql'
import request from 'graphql-request'
import {
  getTnwBlogApiPublicUrl,
  getTnwBlogApiToken,
} from '@/features/tnwBlog/utils/api'

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
  async () => {
    return request<GetArticlesQuery>(
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
    )
  },
)
