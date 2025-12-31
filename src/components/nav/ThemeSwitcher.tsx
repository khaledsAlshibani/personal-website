import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = resolvedTheme ?? theme
  const isDark = current === 'dark'

  if (!mounted) {
    return (
      <div className={cn('inline-grid place-content-center', className)}>
        <div className="inline-flex items-center gap-1">
          <Sun className="size-4 opacity-0" aria-hidden="true" />
          <div className="h-6 w-11" />
          <Moon className="size-4 opacity-0" aria-hidden="true" />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('inline-grid place-content-center', className)}>
      <button
        type="button"
        className="inline-flex items-center gap-1 cursor-pointer"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
      >
        <Sun className="size-4" aria-hidden="true" />
        <span
          className={cn(
            'bg-contrast!',
            'relative h-6 w-11 rounded-full',
            'bg-neutral-quaternary transition-colors',
            'focus-visible:ring-4 focus-visible:ring-brand-soft',
            'after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5',
            "after:rounded-full after:bg-white after:transition-all after:content-['']",
            isDark ? 'bg-brand after:translate-x-full rtl:after:-translate-x-full' : '',
          )}
          aria-hidden="true"
        />
        <Moon className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
