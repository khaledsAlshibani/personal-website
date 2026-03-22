import type { IconProps } from '@/components/icons/types/icon.types'
import type { ReactElement } from 'react'
import Facebook from '@/components/icons/socialMedia/Facebook'
import Github from '@/components/icons/socialMedia/Github'
import Linkedin from '@/components/icons/socialMedia/Linkedin'
import Codepen from '@/components/icons/socialMedia/Codepen'
import { XPlatform } from '@/components/icons/socialMedia/XPlatform'
import { cn } from '@/utils/cn'
import { trackContactClicked, trackGithubLinkClicked } from '@/utils/posthog'

interface SocialMediaItem {
  name: SocialMediaIcon
  url: string
}
interface SocialMediaListProps {
  items?: Array<SocialMediaItem>
  className?: string
  iconClassName?: string
  iconSize?: number
}

export const socialMediaIcons = {
  facebook: 'Facebook',
  github: 'Github',
  linkedin: 'Linkedin',
  x: 'XPlatform',
  codepen: 'Codepen',
} as const

export type SocialMediaIcon = keyof typeof socialMediaIcons

const iconComponents: Record<
  SocialMediaIcon,
  (props: IconProps) => ReactElement
> = {
  facebook: Facebook,
  github: Github,
  linkedin: Linkedin,
  x: XPlatform,
  codepen: Codepen,
}

const defaultItems: Array<SocialMediaItem> = [
  { name: 'github', url: 'https://github.com/khaledsAlshibani' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/khaledsalshibani/' },
  { name: 'x', url: 'https://x.com/khaleds_saif' },
  { name: 'facebook', url: 'https://facebook.com/khaledsAlshibani' },
  { name: 'codepen', url: 'https://codepen.io/khaledsAlshibani' },
]

export default function SocialMediaList({
  items = defaultItems,
  iconClassName = 'size-5',
  iconSize = 20,
  className,
}: SocialMediaListProps) {
  return (
    <ul className={cn('flex items-center gap-6', className)}>
      {items.map(({ name, url }) => {
        const Icon = iconComponents[name]
        const label = socialMediaIcons[name].replace(/([A-Z])([A-Z])/g, '$1 $2')

        const handleClick = () => {
          if (name === 'github') {
            trackGithubLinkClicked(url)
          } else {
            trackContactClicked(name)
          }
        }

        return (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              onClick={handleClick}
            >
              <Icon className={iconClassName} size={iconSize} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
