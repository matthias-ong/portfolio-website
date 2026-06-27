import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/data/projects"
import ImageCarousel from "@/components/ImageCarousel"
import { FaGithub } from "react-icons/fa"
import { HiExternalLink } from "react-icons/hi"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} - Matthias Ong`,
    description: project.description.slice(0, 160),
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">

      {/* Back */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        ← Projects
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-1 flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span key={cat} className="rounded-full bg-blue-950/60 px-2.5 py-0.5 text-xs font-medium text-blue-400">
              {cat}
            </span>
          ))}
        </div>
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-50">
          {project.title}
        </h1>
        <p className="text-sm text-zinc-500">
          {project.role}
          {project.client && ` · ${project.client}`}
          {" · "}
          {project.period}
        </p>
      </div>

      {/* Media */}
      {project.images.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-2xl">
          <ImageCarousel images={project.images} alt={project.title} captions={project.captions} />
        </div>
      )}

      {project.video && (
        <div className="mb-8 overflow-hidden rounded-2xl bg-zinc-900">
          <video
            src={project.video}
            controls
            className="w-full"
            preload="metadata"
          />
        </div>
      )}

      {/* Description */}
      <div className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          About
        </h2>
        <p className="leading-relaxed text-zinc-400">{project.description}</p>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Skills &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-950/60 px-3 py-1 text-sm font-medium text-blue-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {(project.github || project.demo) && (
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <HiExternalLink size={16} />
              View Live
            </a>
          )}
        </div>
      )}
    </div>
  )
}
