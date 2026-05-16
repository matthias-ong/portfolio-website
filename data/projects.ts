export type Project = {
  slug: string
  title: string
  client: string
  period: string
  role: string
  description: string
  tags: string[]
  images: string[]
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "alignr",
    title: "Alignr",
    client: "Personal project",
    period: "Mar – Apr 2026",
    role: "Solo developer",
    description:
      "Built to automate my own internship and job application workflow. Alignr reduces resume tailoring time by ~70% through AI-assisted company research, role-fit scoring (0–100), a STAR story bank, application tracking, and AI-generated resume and cover letter drafts.",
    tags: ["Next.js", "Supabase", "Groq AI", "Tailwind CSS"],
    images: [
      "/images/alignr/dashboard.png",
      "/images/alignr/application.png",
      "/images/alignr/application_tracker.png",
      "/images/alignr/storybank.png",
      "/images/alignr/resume_builder.png",
    ],
    featured: true,
    github: "https://github.com/matthias-ong/Alignr",
  },
  {
    slug: "studypulse",
    title: "StudyPulse",
    client: "StudyPulse (edtech startup)",
    period: "Aug – Oct 2025",
    role: "Team Lead",
    demo: "https://studypulse.education/",
    description:
      "Led a 5-member team contracted to deliver key technical components for an edtech startup serving 6,000+ students. Personally built a FastAPI analytics dashboard with an idempotent data pipeline integrating the Wonde API with PostgreSQL across 1,000+ student and school records. The team also delivered a companion React Native mobile app prototype.",
    tags: ["React", "FastAPI", "PostgreSQL", "Wonde API", "LLM", "React Native"],
    images: [
      "/images/studypulse/StudyPulse_Logo.png",
      "/images/studypulse/StudyPulse_Main.png",
      "/images/studypulse/StudyPulse_Wonde_Integration.png",
      "/images/studypulse/StudyPulse_Mobile_1.png",
      "/images/studypulse/StudyPulse_Mobile_2.png",
      "/images/studypulse/StudyPulse_Mobile_3.png",
    ],
    featured: true,
  },
]
