import { type Project } from "@/data/projects"
import ImageCarousel from "@/components/ImageCarousel"
import { FaGithub } from "react-icons/fa"
import { HiExternalLink } from "react-icons/hi"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <ImageCarousel images={project.images} alt={project.title} />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-lg font-semibold text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
              {project.title}
              <HiExternalLink size={15} className="opacity-40 transition-opacity group-hover:opacity-100" />
            </a>
          ) : (
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h2>
          )}
          <span className="shrink-0 text-xs text-zinc-400">{project.period}</span>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.github && (
          <div className="pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
