import { useEffect, useRef } from 'react'
import { useLocation } from '@tanstack/react-router'
import { trackScrollDepth } from '@/utils/posthog'

export const useScrollTracking = () => {
  const location = useLocation()
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    trackedDepths.current = new Set()
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement
      const scrollDepth = Math.round(
        ((scrollTop + clientHeight) / scrollHeight) * 100,
      )

      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (scrollDepth >= milestone && !trackedDepths.current.has(milestone)) {
          trackScrollDepth(milestone)
          trackedDepths.current.add(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
