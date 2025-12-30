import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Text from '@/components/typography/Text'

export default function LangSwitcher() {
  const { i18n } = useTranslation()
  const current = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2)
  const nextLang = current === 'ar' ? 'en' : 'ar'

  const handleClick = () => {
    void i18n.changeLanguage(nextLang)
  }

  const label = nextLang === 'ar' ? 'العربية' : 'English'

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Change language to ${nextLang}`}
      className="inline-flex items-center gap-1.5 cursor-pointer"
    >
      <Globe className="size-4" aria-hidden="true" />
      <Text size="sm">{label}</Text>
    </button>
  )
}
