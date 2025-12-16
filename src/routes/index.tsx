import { createFileRoute } from '@tanstack/react-router'
import Header from '@features/header/components/Header'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto py-24">
      <Header />
    </div>
  )
}
