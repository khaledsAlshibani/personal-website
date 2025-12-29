import { Moon, Sun } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  return (
    <div className={cn('inline-grid place-content-center', className)}>
      <label className="inline-flex cursor-pointer items-center gap-1">
        <Sun className="size-4" aria-hidden="true" />
        <input
          type="checkbox"
          className="peer sr-only"
          aria-label="Toggle theme"
        />
        <div
          className={cn(
            'bg-contrast!',
            'relative h-6 w-11 rounded-full',
            'bg-neutral-quaternary transition-colors',
            'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft',
            'after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5',
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
