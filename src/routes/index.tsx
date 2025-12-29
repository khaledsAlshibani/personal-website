import { createFileRoute } from '@tanstack/react-router'
import Header from '@features/header/components/Header'
import TnwArticleList from '@features/tnwBlog/components/TnwArticleList'
import ProjectsList from '@/features/projects/components/ProjectsList'
import { getTopProjects } from '@/features/projects/data/topProjects.data'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'

export const Route = createFileRoute('/')({
  loader: () => getTopProjects(),
  component: App,
})

function App() {
  const topProjects = Route.useLoaderData()

  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto px-8 flex flex-col gap-20">
      <Navbar />
      <Header />
      <TnwArticleList />
      <ProjectsList topProjects={topProjects} />
      <Footer />
    </main>
  )
}
