export interface TnwBlogPost {
  databaseId: number
  slug?: string | null
  title?: string | null
  excerpt?: string | null
  date?: string | null
  featuredImage?: {
    sourceUrl: string
    altText?: string | null
  } | null
  isPinned?: boolean | null
}

export interface TnwBlogPostsResponse {
  technwayBlogPosts: {
    nodes: Array<TnwBlogPost | null>
  }
}
