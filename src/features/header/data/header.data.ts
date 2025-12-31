import { createServerFn } from '@tanstack/react-start'
import type { HeaderContent } from '@features/header/types/header.types'

export const getHeaderContent = createServerFn({
  method: 'GET',
}).handler(
  (): HeaderContent => ({
    id: 1,
    titlePrefix: "I'm",
    title: 'Khaled Alshibani',
    description: `A full stack developer with over three years of experience building and maintaining production web applications. I work closely with designers, product owners, and other engineers to turn requirements into well structured, reliable features.

From a technical and architectural perspective, I work with component-based frontend architectures using React and Next.js, and with design systems and component libraries built using StencilJS and documented through Storybook, focusing on reuse, consistency, and maintainability. I mainly work with TypeScript and prefer clear, practical structures over unnecessary abstraction. On the backend, I work with Node.js and NestJS in monolithic and modular monolith architectures, paying attention to domain boundaries, API structure, and database integration. I follow a mix of automated and manual testing practices, including unit, integration, and end-to-end testing, and routinely handle regression testing as part of ongoing development.`,
    img: {
      src: '/khaled-alshibani.webp',
      alt: 'Khaled Alshibani - Full Stack developer',
      width: 120,
      height: 120,
    },
  }),
)
