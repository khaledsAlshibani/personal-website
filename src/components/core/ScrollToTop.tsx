import { useCallback, useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import Button from '@/components/core/Button'
import { cn } from '@/utils/cn'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 200)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'bg-contrast text-white',
        'mt-0 fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300',
        show
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      aria-label="Scroll to top"
      icon={<ChevronUp size={22} />}
    />
  )
}
