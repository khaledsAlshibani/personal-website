import { createFileRoute } from '@tanstack/react-router'
import Header from '@features/header/components/Header'
import TnwArticleList from '@features/tnwBlog/components/TnwArticleList'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto py-20 sm:py-30 px-8 flex flex-col gap-20">
      <Header />
      <TnwArticleList />
    </main>
  )
}
