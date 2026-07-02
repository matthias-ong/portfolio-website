"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-50">
          Matthias Ong
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 sm:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-zinc-300" />
          <span className="h-0.5 w-6 bg-zinc-300" />
          <span className="h-0.5 w-6 bg-zinc-300" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="flex flex-col border-t border-zinc-800 px-6 py-4 sm:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
