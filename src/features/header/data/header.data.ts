import { createServerFn } from '@tanstack/react-start'
import { HeaderContent } from '@features/header/types/header.types'

export const getHeaderContent = createServerFn({
  method: 'GET',
}).handler(
  async (): Promise<HeaderContent> => ({
    id: 1,
    titlePrefix: "I'm",
    title: 'Khaled Alshibani',
    description: `Web developer with over three years of experience building and maintaining production web applications. I focus primarily on front-end development while continuing to deepen my backend skills. Strong attention is given to performance, accessibility, and building interfaces that are clear, fast, and maintainable over time.

    Work is shaped by real production constraints such as stability, long-term maintainability, and collaboration within teams. I am comfortable working across the full SDLC, from planning and grooming through delivery and support, and I value short feedback loops, clear communication, and making changes observable after release.

    On the front end, I build scalable interfaces using modern JavaScript frameworks and component-based architectures. Experience includes working with React-based ecosystems, web components, and server-rendered applications, with a strong focus on performance, state management, and long-term scalability. Styling work relies on structured CSS approaches, including utility-first patterns and CSS preprocessors or post-processors.

    UI development is supported by design system thinking and disciplined documentation. I use component documentation tools to define and validate UI states, and I work closely with design workflows to ensure consistency between design and implementation. Experience includes building reusable UI libraries and working within modular monolith architectures.

    Across the stack, I work with REST and GraphQL APIs, backend services, and content platforms. Backend and CMS experience includes PHP-based systems, headless and monolithic CMS setups, and Node.js services, with relational databases such as PostgreSQL and MySQL. Backend knowledge continues to grow through hands-on work with real production systems.

    Quality and reliability are treated as core concerns rather than afterthoughts. I work across unit, integration, end-to-end, and visual testing, using automation to reduce regressions and improve confidence in releases.

    Work is typically done in Agile environments with structured planning and tracking. I place strong value on clean code, clear documentation, and systems that remain understandable as they evolve, while continuing to deepen backend expertise through practical problem-solving in production.`,
    img: {
      src: '/khaled-alshibani.webp',
      alt: 'Khaled Alshibani - Full Stack developer',
      width: 120,
      height: 120,
    },
  }),
)
