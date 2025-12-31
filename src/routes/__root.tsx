import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { useTranslation } from 'react-i18next'

import { getHeaderContent } from '@features/header/data/header.data'
import { queryClient } from '@/utils/queryClient'

import appCss from '@/styles.css?url'

import '@/i18n'

const siteUrl = import.meta.env.VITE_SITE_URL
const defaultTitle = 'Khaled Alshibani - Full Stack Developer'
const defaultDescription =
  'Full stack web developer with strong frontend foundation, production experience, and focus on performance, stability, and maintainable modern applications.'
const ogImage = `${siteUrl}/og.png`

export const Route = createRootRoute({
  loader: async () => await getHeaderContent(),
  head: () => ({
    title: defaultTitle,
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: defaultTitle,
      },
      {
        name: 'description',
        content: defaultDescription,
      },
      {
        property: 'og:title',
        content: defaultTitle,
      },
      {
        property: 'og:description',
        content: defaultDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteUrl,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: defaultTitle,
      },
      {
        name: 'twitter:description',
        content: defaultDescription,
      },
      {
        name: 'twitter:image',
        content: ogImage,
      },
      {
        name: 'twitter:url',
        content: siteUrl,
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: siteUrl,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'en').slice(0, 2)

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <QueryClientProvider client={queryClient}>
            {children}
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
          </QueryClientProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
