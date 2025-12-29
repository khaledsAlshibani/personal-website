import { createServerFn } from '@tanstack/react-start'

type TopProject = {
  id: number
  title: string
  description: string
}

export const getTopProjects = createServerFn({
  method: 'GET',
}).handler(
  async (): Promise<TopProject[]> => [
    {
      id: 1,
      title: 'Technway Component Library',
      description: 'A reusable component library built with Stencil.js.',
    },
    {
      id: 2,
      title: 'CABA - Clinic Appointment Booking App',
      description: 'Web app.',
    },
  ],
)
