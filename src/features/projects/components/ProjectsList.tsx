import ProjectCard from '@features/projects/components/ProjectCard'
import { useGHReposQuery } from '@features/projects/api/getGHRepos.query'
import ProjectSkeletonLoader from '@features/projects/components/ProjectSkeletonLoader'
import { ArrowRight } from 'lucide-react'
import type { TopProject } from '@features/projects/types/topProjects.types'
import Title from '@/components/core/typography/Title'
import Text from '@/components/core/typography/Text'
import Button from '@/components/core/Button'

interface ProjectsListProps {
  topProjects?: Array<TopProject>
}

export default function ProjectsList({ topProjects = [] }: ProjectsListProps) {
  const { data: repos = [], isPending, isError } = useGHReposQuery()

  const showError = !isPending && (isError || repos.length === 0)
  const pendingComplete = !isPending && !isError && repos.length > 0

  return (
    <div id="projects" className="flex flex-col gap-9">
      <Title as="h2">Projects & Contributions</Title>

      <div className="flex flex-col gap-8">
        <Title as="h3">Featured Projects</Title>
        {topProjects.length > 0 && (
          <>
            {topProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                title={proj.title}
                description={proj.description}
                skills={proj.skills}
                date={proj.date}
              />
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <Title as="h3" className="border-t border-default pt-8">
          Featured Repositories
        </Title>

        {isPending && (
          <div className="grid gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <ProjectSkeletonLoader key={idx} />
            ))}
          </div>
        )}

        {showError && (
          <div className="flex flex-col gap-4">
            <Text size="sm" className="opacity-70">
              Oh sorry! Repositories couldn&apos;t be loaded here right now :(
              They&apos;re still available on GitHub though... feel free to take
              a look
            </Text>
            <Button
              label="View on GitHub"
              href="https://github.com/khaledsAlshibani?tab=repositories"
              icon={<ArrowRight size={16} />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        )}

        {pendingComplete && (
          <div className="grid gap-8">
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
                  url={repo.html_url}
                  starsCount={repo.stargazers_count.toString()}
                  skills={repo.topics}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
