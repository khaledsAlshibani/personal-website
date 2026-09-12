import { createFileRoute } from '@tanstack/react-router'
import Header from '@features/header/components/Header'
import TnwArticleList from '@features/tnwBlog/components/TnwArticleList'
import { tnwArticlesQueryOptions } from '@features/tnwBlog/api/getBlogArticles.query'
import { devToArticlesQueryOptions } from '@features/dev-to/api/getDevToArticles.query'
import { ghReposQueryOptions } from '@features/projects/api/getGHRepos.query'
import { resolveArticleCounts } from '@features/articles/utils/articleCounts'
import ProjectsList from '@/features/projects/components/ProjectsList'
import { getTopProjects } from '@/features/projects/data/topProjects.data'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'

export const Route = createFileRoute('/')({
  loader: async ({ context: { queryClient } }) => {
    const [topProjects, tnwArticles] = await Promise.all([
      getTopProjects(),
      queryClient.ensureQueryData(tnwArticlesQueryOptions()),
      queryClient.ensureQueryData(ghReposQueryOptions()),
    ])

    const { devToLimit } = resolveArticleCounts(tnwArticles.length)

    if (devToLimit > 0) {
      await queryClient.ensureQueryData(devToArticlesQueryOptions(devToLimit))
    }

    return topProjects
  },
  component: App,
})

function App() {
  const topProjects = Route.useLoaderData()

  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto px-6 flex flex-col gap-20">
      <Navbar />
      <Header />
      <TnwArticleList />
      <ProjectsList topProjects={topProjects} />
      <Footer />
    </main>
  )
}
