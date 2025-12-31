import Text from '@/components/core/typography/Text'
import Title from '@/components/core/typography/Title'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/404')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-center">
      <Title as="h1">Page not found</Title>
      <Text className="opacity-70" size="sm">
        The page you are looking for does not exist or may have been moved.
      </Text>
      <Link to="/" className="font-medium underline! flex items-center gap-2">
        <ArrowLeft size={18} />
        Go back home
      </Link>
    </main>
  )
}
