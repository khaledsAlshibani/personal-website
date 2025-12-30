import { cn } from '@/utils/cn'
import SocialMediaList from '../icons/socialMedia/socialMediaList'
import Text from '@/components/typography/Text'

export default function Footer() {
  return (
    <footer className={cn(
      "w-full mb-8 flex gap-4 justify-between items-center",
      "max-sm:flex-col"
    )}>
      <Text as="span" size="sm" className='opacity-70'>
        &copy; {new Date().getFullYear()} Khaled Alshibani. All rights reserved.
      </Text>

      <SocialMediaList />
    </footer>
  )
}
