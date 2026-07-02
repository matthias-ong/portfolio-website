"use client"

import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const FULL_NAME = "Matthias Ong"

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(FULL_NAME.slice(0, i + 1))
      i++
      if (i === FULL_NAME.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp}>
          <Image
            src="/headshot.jpg"
            alt="Matthias Ong"
            width={112}
            height={112}
            className="mx-auto mb-6 rounded-full object-cover ring-2 ring-blue-900"
            style={{ width: 112, height: 112 }}
            priority
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500"
        >
          Software Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl"
        >
          {displayed}
          {!done && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="ml-1 inline-block text-blue-500"
            >
              |
            </motion.span>
          )}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-10 text-lg leading-relaxed text-zinc-400"
        >
          I build full-stack apps and AI-powered tools for myself and clients. Final year IT student, based in Perth. Currently looking for work.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/projects"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            See my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/matthias-ong"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="http://linkedin.com/in/matthias-ongse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
