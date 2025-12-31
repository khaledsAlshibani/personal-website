import { createServerFn } from '@tanstack/react-start'
import type { TopProject } from '@features/projects/types/topProjects.types'

export const getTopProjects = createServerFn({
  method: 'GET',
}).handler(
  (): Array<TopProject> => [
    {
      id: 1,
      title: 'CABA - Clinic Appointment Booking App',
      date: '2023',
      description: `I contributed to the development of the Clinic Appointment Booking Application (CABA), which served as a practical case study for a Master thesis evaluating the impact of a Scrum XP hybrid methodology on quality and productivity in distributed web development teams.

I focused primarily on frontend development and UI design, working closely with the team through Jira-based sprint planning, backlog refinement, task tracking, and iterative delivery while applying Scrum and XP practices.

The application supports administrators, doctors, and patients, providing online appointment booking, patient data tracking, doctor notes and follow-ups, and role-based notifications. It includes real-time filtering, searching, and CRUD operations, as well as an admin CMS for theming and content management with bilingual support.

The work followed defined quality requirements and evaluation criteria, covering functional suitability, usability, reliability, performance efficiency, maintainability, and portability. These characteristics were used in the thesis to analyze productivity and software quality outcomes in a distributed agile development context.`,
      skills:
        'Agile, Jira, JavaScript, JQuery, AJAX, PHP, MySQL, PDO, Twig (Template Engine), Custom CMS Development, Internationalization, UI Design',
    },
    {
      id: 2,
      title: 'Technway Component Library',
      date: '2024',
      description: `I contributed to the design and implementation of a large-scale component-driven frontend library, which served as the primary case study for a Master thesis focused on improving reusability, testability, and long-term maintainability in frontend development.

I worked closely with the team on defining a Web Components based architecture from the ground up, including component boundaries, encapsulation strategies, communication patterns, state management approaches, styling isolation, and test isolation. The component library was structured to support consistent reuse across different views and use cases, with attention to documentation, testability, and performance considerations.

The library was integrated into multiple application case studies, including an online store, a blog, and a landing page, to validate its applicability across different product types and content structures.`,
      skills:
        'Web Components, CDD, End-to-end Testing, Unit Testing, Integration Testing, Visual Regression Testing, Accessibility Testing, StencilJS, Storybook, Stencil Store, PostCSS, Next.js, Monorepo, Figma',
    },
  ],
)
