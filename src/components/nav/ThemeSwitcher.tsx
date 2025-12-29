import { Moon, Sun } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
      <label className="inline-flex cursor-pointer items-center gap-1">
        <Sun className="size-4" aria-hidden="true" />
        <input
          type="checkbox"
          className="peer sr-only"
          aria-label="Toggle theme"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <div
          className={cn(
            'bg-contrast!',
            'relative h-6 w-11 rounded-full',
            'bg-neutral-quaternary transition-colors',
            'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft',
            'after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5',
            "after:rounded-full after:bg-white after:transition-all after:content-['']",
            'peer-checked:bg-brand peer-checked:after:translate-x-full',
            'rtl:peer-checked:after:-translate-x-full',
          )}
        />
        <Moon className="size-4" aria-hidden="true" />
      </label>
    </div>
  )
}