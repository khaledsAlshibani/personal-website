import Terminal from '@/components/icons/Terminal'
import { Route } from '@/routes/__root'
import { Image } from '@unpic/react'

export default function Header() {
  const headerData = Route.useLoaderData()

  return (
    <header className="flex flex-col gap-8">
      {headerData.img.src && (
        <Image
          src={headerData.img.src}
          alt={headerData.img.alt}
          width={headerData.img.width ?? 100}
          height={headerData.img.height ?? 100}
          className="rounded-sm mb-4"
        />
      )}
      {headerData.title && (
        <span>
          {headerData.titlePrefix && (
            <>
              <Terminal className="size-5 text-gray-700 inline-block mr-2 -mt-1" />
              <span className="text-2xl text-gray-700 mr-3">{headerData.titlePrefix}</span>
            </>
          )}
          <h1 className="text-2xl font-semibold inline-block">{headerData.title}</h1>
        </span>
      )}
      {headerData.description && (
        <p className="leading-relaxed whitespace-pre-line">
          {headerData.description}
        </p>
      )}
    </header>
  )
}
