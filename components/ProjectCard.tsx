import Link from "next/link"
import Image from "next/image"
import { type Project } from "@/data/projects"
import { FaGithub } from "react-icons/fa"
import { HiExternalLink } from "react-icons/hi"

function ProjectImage({ project }: { project: Project }) {
  if (project.images.length > 0 && !project.images[0].endsWith(".svg")) {
    return (
      <Image
        src={project.images[0]}
        alt={`${project.title} screenshot`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyMyNzI3MmEnLz48L3N2Zz4="
      />
    )
  }
  if (project.video) {
    return (
      <video
        src={project.video}
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    )
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
      <span className="text-2xl font-bold text-zinc-600">{project.title[0]}</span>
    </div>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article className="flex h-[400px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">

        {/* Image */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden bg-zinc-800">
          <ProjectImage project={project} />
          {project.categories.includes("Client Work") && (
            <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-2.5 py-0.5 text-xs font-semibold text-zinc-900">
              Client
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-sm font-semibold leading-snug text-zinc-50 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h2>
            <span className="shrink-0 text-xs text-zinc-500">{project.period}</span>
          </div>

          <p className="line-clamp-3 text-xs leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-950/60 px-2 py-0.5 text-xs font-medium text-blue-400"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 4 && (
              <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
                +{project.skills.length - 4}
              </span>
            )}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-2 flex items-center gap-3">
              {project.github && (
                <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
                  <FaGithub size={12} />
                  GitHub
                </span>
              )}
              {project.demo && (
                <span className="inline-flex items-center gap-1 text-xs text-emerald-500">
                  <HiExternalLink size={13} />
                  Live
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
