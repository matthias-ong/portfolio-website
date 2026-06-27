import { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Contact - Matthias Ong",
  description: "Get in touch with Matthias Ong.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-50">
        Get in touch
      </h1>
      <p className="mb-10 text-zinc-500">
        Open to full-time roles, collaborations, and interesting problems.
      </p>

      {/* Email + socials */}
      <div className="mb-10 flex flex-col gap-3">
        <a
          href="mailto:matthiasong6@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-zinc-50"
        >
          <FaEnvelope size={14} className="text-zinc-500" />
          matthiasong6@gmail.com
        </a>
        <a
          href="http://linkedin.com/in/matthias-ongse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-zinc-50"
        >
          <FaLinkedin size={14} className="text-zinc-500" />
          linkedin.com/in/matthias-ongse
        </a>
        <a
          href="https://github.com/matthias-ong"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-zinc-50"
        >
          <FaGithub size={14} className="text-zinc-500" />
          github.com/matthias-ong
        </a>
      </div>

      <div className="mb-8 border-t border-zinc-800" />

      <ContactForm />
    </div>
  )
}
