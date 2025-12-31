import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = {
  label?: string
  children?: ReactNode
  icon?: ReactElement
  className?: string
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({
  label,
  children,
  icon,
  className,
  href,
  target,
  rel,
  type,
  ...restAttrs
}: ButtonProps) {
  const Tag = href ? 'a' : 'button'
  const computedType = Tag === 'button' ? (type ?? 'button') : undefined

  return (
    <Tag
      type={computedType as any}
      className={cn(
        'inline-flex items-center gap-2 font-semibold underline! text-[var(--color-contrast)] cursor-pointer',
        className,
      )}
      href={href}
      target={target}
      rel={rel}
      {...restAttrs}
    >
      {children ? (
        children
      ) : (
        <>
          {label}
          {icon}
        </>
      )}
    </Tag>
  )
}
