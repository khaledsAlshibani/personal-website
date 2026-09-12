import { Navigate, createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

// Import the generated route tree
import { routeTree } from '@/routeTree.gen'
import { createQueryClient } from '@/utils/queryClient'

// Create a new router instance
export const getRouter = () => {
  const queryClient = createQueryClient()

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    notFoundMode: 'root',
    defaultNotFoundComponent: () => <Navigate to="/404" replace />,
  })

  // Restores prefetched query data on the client so SSR renders real content
  // instead of skeletons, and provides the QueryClientProvider.
  setupRouterSsrQueryIntegration({ router, queryClient })

  return router
}
