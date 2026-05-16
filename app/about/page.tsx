import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const metadata = {
  title: "About — Matthias Ong",
  description: "AI and full-stack engineer based in Perth, graduating soon and open to grad roles and freelance work.",
}

const interests = ["Startups", "Badminton", "Volunteering", "Arduino"]

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">

      {/* Header */}
      <div className="mb-10 flex items-center gap-6">
        <Image
          src="/headshot.jpg"
          alt="Matthias Ong"
          width={120}
          height={120}
          className="rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-900"
          style={{ width: 120, height: 120 }}
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Matthias Ong
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Perth, WA · Open to work</p>
          <div className="mt-2 flex gap-3">
            <a
              href="https://github.com/matthias-ong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/matthias-ongse/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-10 space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a CS/IT student, finishing up my degree in Melbourne before moving to Perth. I love building AI-powered tools and web apps along the way.
        </p>
        <p>
          I&apos;m drawn to startups and early-stage products. Genuinely a tech nerd :P I get unreasonably excited about new frameworks, tools, and rabbit holes.
        </p>
        <p>
          Outside of personal projects, I&apos;ve led teams doing technical work for
          real clients at a club in uni.
        </p>
      </div>

      {/* Currently */}
      <div className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Currently
        </h2>
        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <li>- Finishing my IT degree</li>
          <li>- Open to grad roles and freelance work in Perth (and remote)</li>
        </ul>
      </div>

      {/* Interests */}
      <div className="mb-12">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Outside of code
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/projects"
        className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
      >
        See my projects →
      </Link>
    </div>
  )
}
