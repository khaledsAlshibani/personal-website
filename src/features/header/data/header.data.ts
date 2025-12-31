import { createServerFn } from '@tanstack/react-start'
import type { HeaderContent } from '@features/header/types/header.types'

export const getHeaderContent = createServerFn({
  method: 'GET',
}).handler(
  (): HeaderContent => ({
    id: 1,
    titlePrefix: "I'm",
    title: 'Khaled Alshibani',
    summary:
      'Full stack web developer focused on performant, accessible interfaces and steady delivery in production environments.',
    description: `I am a web developer with over three years of experience building and maintaining production web applications. My work focuses primarily on front-end development, with continued growth on the backend. I place strong emphasis on performance, accessibility, and building interfaces that remain clear, fast, and maintainable over time.

I work closely with designers, product owners, and other engineers to turn requirements into well structured, reliable features. I make pragmatic technical decisions that support steady delivery and effective collaboration within the team.

From a technical and architectural perspective, I work with component based front-end architectures that support reuse, consistency, and clarity across the interface. On the backend, I primarily build APIs using Node.js and NestJS, focusing on clear domain boundaries, well defined API contracts, and reliable integration with databases.`,
    img: {
      src: '/khaled-alshibani.webp',
      alt: 'Khaled Alshibani - Full Stack developer',
      width: 120,
      height: 120,
    },
  }),
)
