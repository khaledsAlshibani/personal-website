import ProjectCard from '@features/projects/components/ProjectCard'
import { useGHReposQuery } from '@features/projects/api/getGHRepos.query'
import ProjectSkeletonLoader from '@features/projects/components/ProjectSkeletonLoader'
import Title from '@/components/typography/Title'

type Props = {
  topProjects?: Array<{ id: number; title: string; description: string }>
}

export default function ProjectsList({ topProjects = [] }: Props) {
  const { data: repos, isPending, isError } = useGHReposQuery()

  if (isPending) {
    return (
      <div className="flex flex-col gap-8">
        <Title as="h2">Projects & Contributions</Title>

        <div>
          <Title as="h3">Featured Projects</Title>
          <div className="grid gap-4 mt-2">
            {Array.from({ length: Math.max(topProjects.length || 0, 3) }).map(
              (_, idx) => (
                <ProjectSkeletonLoader key={idx} />
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Title as="h3" className="border-t border-default pt-8 sm:pt-8">
            Featured Repositories
          </Title>
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <ProjectSkeletonLoader key={idx} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (isError || repos.length === 0) return null

  return (
    <div id='projects' className="flex flex-col gap-8">
      <Title as="h2">Projects & Contributions</Title>

      <div className="flex flex-col gap-6">
        <Title as="h3">Featured Projects</Title>
        {topProjects.length > 0 && (
          <>
            {topProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                title={proj.title}
                description={proj.description}
              />
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <Title as="h3" className="border-t border-default pt-8">
          Featured Repositories
        </Title>

        {repos.map((repo) => {
          const title =
            repo.owner?.login && repo.owner.login !== 'khaledsAlshibani'
              ? `${repo.owner.login}/${repo.name}`
              : repo.name

          return (
            <ProjectCard
              key={repo.id}
              title={title}
              description={repo.description || ''}
              url={repo.homepage || repo.html_url}
              starsCount={repo.stargazers_count.toString()}
            />
          )
        })}
      </div>
    </div>
  )
}
