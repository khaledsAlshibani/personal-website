import ProjectCard from '@features/projects/components/ProjectCard'
import { useGHReposQuery } from '@features/projects/api/getGHRepos.query'
import ArticleSkeletonLoader from '@/components/loaders/ArticleSkeletonLoader'
import Title from '@/components/typography/Title'
import Text from '@/components/typography/Text'

type Props = {
  topProjects?: { id: number; title: string; description: string }[]
}

export default function ProjectsList({ topProjects = [] }: Props) {
  const { data: repos, isPending, isError } = useGHReposQuery()

  if (isPending) return <ArticleSkeletonLoader />

  if (isError || !repos) return null

  return (
    <div className="flex flex-col gap-8 sm:gap-4">
      <Title as="h2">Projects & Contributions</Title>

      <Title as="h3">Featured Projects</Title>
      {topProjects.length > 0 && (
        <div className="grid gap-4">
          {topProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              url="#"
            />
          ))}
        </div>
      )}

      <Title as="h3">Featured Repositories</Title>

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
            starsCount={repo.stargazers_count?.toString()}
          />
        )
      })}
    </div>
  )
}
