import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

export const metadata = {
  title: "Projects — Matthias Ong",
  description: "Client work and personal projects by Matthias Ong.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h1>
      <p className="mb-12 text-zinc-500 dark:text-zinc-400">
        Client work and things I&apos;ve built.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
