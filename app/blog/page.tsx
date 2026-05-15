export const metadata = {
  title: "Blog — Matthias Ong",
  description: "Writing on AI, full-stack development, and building products.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400">
        Coming soon
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <p className="max-w-sm text-zinc-500 dark:text-zinc-400">
        Writing on AI, full-stack development, and building products. Check back soon.
      </p>
    </div>
  )
}
