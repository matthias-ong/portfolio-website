import { Suspense } from "react"
import { projects } from "@/data/projects"
import ProjectsClient from "@/components/ProjectsClient"

export const metadata = {
  title: "Projects — Matthias Ong",
  description: "Client work and personal projects by Matthias Ong.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-50">
        Projects
      </h1>
      <p className="mb-10 text-zinc-500">
        Client work and things I&apos;ve built.
      </p>

      <Suspense>
        <ProjectsClient projects={projects} />
      </Suspense>
    </div>
  )
}
