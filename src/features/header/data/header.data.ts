import { createServerFn } from '@tanstack/react-start'
import { HeaderContent } from '@features/header/types/header.types'

export const getHeaderContent = createServerFn({
  method: 'GET',
}).handler(
  async (): Promise<HeaderContent> => ({
    id: 1,
    titlePrefix: "I'm",
    title: 'Khaled Alshibani',
    description: `I am a web developer with a strong front end foundation and solid full stack experience, working on real production web applications. I have experience maintaining existing systems as well as building and extending modern web applications, dealing with real constraints such as performance, stability, and long-term maintainability.
      
      On the front end, I focus on building scalable user interfaces, performance optimization, and accessibility. I have worked extensively with component-based architectures, design systems, and reusable UI libraries, including web components. I have experience documenting and developing components using tools like Storybook, and collaborating on UI and design systems created in Figma. I also have practical knowledge of UX fundamentals, which helps me translate designs into usable and consistent interfaces.
      
      Across the stack, I work with APIs, application logic, and databases, and I have experience building and supporting Progressive Web Apps (PWAs). I am comfortable working with different testing levels, including unit, integration, end-to-end, and visual regression testing, and I value testing as part of building reliable applications rather than as an afterthought.
      
      I also have hands-on experience with deployment, infrastructure, and delivery workflows. I have worked with AWS services such as Lightsail, Amplify, CloudFront, and S3, as well as VPS environments and Cloudflare for DNS, caching, and performance improvements. I have experience working with CI/CD pipelines and understand how code moves from development to production in real-world setups.
      
      I care about clean, readable code, clear documentation, and building systems that are understandable and maintainable over time. I continue to deepen my full stack skills by working on production systems, improving existing applications, and learning through practical problem-solving.`,
    img: {
      src: '/khaled-alshibani.webp',
      alt: 'Khaled Alshibani - Full Stack developer',
      width: 120,
      height: 120,
    },
  }),
)
