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
      description: `Developed the Clinic Appointment Booking Application (CABA) as a practical case study used in a Master thesis evaluating the impact of a Scrum-XP hybrid methodology on quality and productivity in web application development with distributed teams.

Worked as a full stack developer focusing on frontend implementation and UI design. Collaborated closely with the team using Jira for sprint planning, backlog refinement, task tracking, and iterative delivery. Applied Scrum and XP practices to support continuous improvement, code quality, and predictable delivery cycles.

The application and development process data were used in the thesis to assess productivity, usability, and software quality outcomes.`,
      skills:
        'Scrum, Extreme Programming (XP), Jira, Full Stack Development, UI Design, Agile Metrics, Distributed Teams, Web Applications',
    },
    {
      id: 2,
      title: 'Technway Component Library',
      description: `Designed, implemented, and evolved a large scale component-driven frontend web application as the primary case study for a Master thesis focused on improving reusability, testability, and long-term maintainability in frontend web applications.

The work, documented in detail in Chapter 4 of the thesis, involved designing a full Web Components based architecture from the ground up. This included defining component boundaries, encapsulation strategies, communication patterns, state management approaches, styling isolation, and reuse across multiple views and use cases.

Implemented a structured component library with clear documentation, testability considerations, and performance optimization strategies. Development followed planned iterations and release cycles, covering initial architecture planning, implementation, refinement, testing strategy definition, and continuous maintenance. Strong emphasis was placed on lifecycle management, scalability, and minimizing technical debt over time.

The case study provided in-depth technical evidence demonstrating how a Web Components architecture improves modularity, test isolation, maintainability, and long-term development efficiency, directly supporting the thesis conclusions.`,
      skills:
        'Web Components, Frontend Architecture, Component-Driven Development, Testability, Documentation, Performance Optimization, Software Lifecycle Management, Scalable Frontend Design',
    },
  ],
)
