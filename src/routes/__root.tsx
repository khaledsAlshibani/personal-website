import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { useTranslation } from 'react-i18next'

import { getHeaderContent } from '@features/header/data/header.data'
import { queryClient } from '@/utils/queryClient'

import appCss from '@/styles.css?url'

import '@/i18n';

export const Route = createRootRoute({
  loader: async () => await getHeaderContent(),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Khaled Alshibani - Full Stack developer',
        description:
          'I am a web developer with a strong front end foundation and solid full stack experience, working on real production web applications. I have experience maintaining existing systems as well as building and extending modern web applications, dealing with real constraints such as performance, stability, and long-term maintainability.',
        author: 'Khaled Alshibani',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'en').slice(0, 2)

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          defaultTheme="light"
          enableSystem={false}
        >
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
