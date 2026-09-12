import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { getHeaderContent } from '@features/header/data/header.data'
import { ThemeProvider } from 'next-themes'
import type { QueryClient } from '@tanstack/react-query'
import { PostHogProvider } from '@/components/providers/PostHogProvider'
import {
  CANONICAL_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  PERSON_NAME,
  SITE_NAME,
  buildPersonJsonLd,
  buildWebSiteJsonLd,
} from '@/utils/seo'

import appCss from '@/styles.css?url'

// import '@/i18n'

export interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  loader: async () => await getHeaderContent(),
  head: () => ({
    title: DEFAULT_TITLE,
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: DEFAULT_TITLE,
      },
      {
        name: 'description',
        content: DEFAULT_DESCRIPTION,
      },
      {
        name: 'author',
        content: PERSON_NAME,
      },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'theme-color',
        content: '#faf8f5',
      },
      {
        property: 'og:site_name',
        content: SITE_NAME,
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:title',
        content: DEFAULT_TITLE,
      },
      {
        property: 'og:description',
        content: DEFAULT_DESCRIPTION,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: CANONICAL_URL,
      },
      {
        property: 'og:image',
        content: OG_IMAGE,
      },
      {
        property: 'og:image:width',
        content: OG_IMAGE_WIDTH,
      },
      {
        property: 'og:image:height',
        content: OG_IMAGE_HEIGHT,
      },
      {
        property: 'og:image:alt',
        content: DEFAULT_TITLE,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@khaleds_saif',
      },
      {
        name: 'twitter:creator',
        content: '@khaleds_saif',
      },
      {
        name: 'twitter:title',
        content: DEFAULT_TITLE,
      },
      {
        name: 'twitter:description',
        content: DEFAULT_DESCRIPTION,
      },
      {
        name: 'twitter:image',
        content: OG_IMAGE,
      },
      {
        name: 'twitter:image:alt',
        content: DEFAULT_TITLE,
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: CANONICAL_URL,
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: 'any',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://cms.technway.biz',
      },
      {
        rel: 'preconnect',
        href: 'https://media2.dev.to',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildPersonJsonLd()),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildWebSiteJsonLd()),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // const { i18n } = useTranslation()
  // const lang = (i18n.language || 'en').slice(0, 2)
  const lang = 'en'

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <PostHogProvider>
            {children}
            {import.meta.env.DEV && (
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
            )}
          </PostHogProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
