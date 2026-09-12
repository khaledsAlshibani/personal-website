export interface TnwBlogPost {
  databaseId: number
  slug?: string | null
  title?: string | null
  excerpt?: string | null
  date?: string | null
  featuredImage?: {
    node?: {
      sourceUrl: string
      altText?: string | null
    } | null
  } | null
}

export interface TnwBlogPostsResponse {
  posts: {
    nodes: Array<TnwBlogPost | null>
  }
}
