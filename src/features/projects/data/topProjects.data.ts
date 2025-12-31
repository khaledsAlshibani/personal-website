import { createServerFn } from '@tanstack/react-start'

type TopProject = {
  id: number
  title: string
  description: string
  skills?: string
}

export const getTopProjects = createServerFn({
  method: 'GET',
}).handler(
  (): Array<TopProject> => [
    {
      id: 1,
      title: 'CABA - Clinic Appointment Booking App',
      description: `Contributed to the development of the Clinic Appointment Booking Application (CABA), which served as a practical case study for a Master thesis evaluating the impact of a Scrum XP hybrid methodology on quality and productivity in distributed web development teams.

Worked as a full stack developer with primary focus on frontend implementation and UI design. Collaborated closely with the team using Jira for sprint planning, backlog refinement, task tracking, and iterative delivery, applying Scrum and XP practices throughout the development process.

The application and related development data were used in the thesis to assess productivity, usability, and software quality outcomes.`,
      skills:
        'Scrum, Extreme Programming (XP), Jira, Full Stack Development, UI Design, Agile Metrics, Distributed Teams, Web Applications',
    },
    {
      id: 2,
      title: 'Technway Component Library',
      description: `Designed and implemented a large scale component driven frontend application as the primary case study for a Master thesis focused on improving reusability, testability, and long term maintainability in frontend development.

The work involved designing a Web Components based architecture from the ground up, including clear component boundaries, encapsulation strategies, communication patterns, state management, and styling isolation. A structured component library was built to support reuse across multiple views and use cases, with supporting documentation and performance considerations.

The case study, documented in detail in the thesis implementation chapter, provided concrete technical evidence showing how a Web Components architecture improves modularity, test isolation, and long term development efficiency, directly supporting the thesis conclusions.`,
      skills:
        'Web Components, Frontend Architecture, Component-Driven Development, Testability, Documentation, Performance Optimization, Software Lifecycle Management, Scalable Frontend Design',
    },
  ],
)
