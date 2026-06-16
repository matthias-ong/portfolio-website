"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { type Project, type Category, CATEGORIES } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
}

function getEndDate(period: string): number {
  const end = period.split("–").pop()?.trim() ?? ""
  if (end === "present") return Infinity
  const parts = end.split(" ")
  const month = MONTHS[parts[0]] ?? 0
  const year = parseInt(parts[1] ?? parts[0])
  return year * 100 + month
}

function sortProjects(list: Project[]) {
  return [...list].sort((a, b) => getEndDate(b.period) - getEndDate(a.period))
}

const VALID: (Category | "All")[] = ["All", ...CATEGORIES]

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const raw = searchParams.get("category") ?? "All"
  const active = (VALID.includes(raw as Category | "All") ? raw : "All") as Category | "All"

  function setActive(cat: Category | "All") {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === "All") {
      params.delete("category")
    } else {
      params.set("category", cat)
    }
    router.replace(`/projects?${params.toString()}`, { scroll: false })
  }

  const filtered = sortProjects(
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active))
  )

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-blue-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-500">No projects in this category yet.</p>
      )}
    </>
  )
}
