import { Globe } from 'lucide-react'
import Text from '@/components/typography/Text'

interface LangSwitcherProps {
  lang: string
}

export default function LangSwitcher({ lang }: LangSwitcherProps) {
  return (
    <button className="inline-flex items-center gap-1.5 cursor-pointer">
      <Globe className="size-4" aria-hidden="true" />
      <Text size="sm">{lang}</Text>
    </button>
  )
}
