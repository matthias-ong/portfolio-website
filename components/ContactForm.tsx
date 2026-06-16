"use client"

import { useState } from "react"

type Status = "idle" | "sending" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/matthiasong6@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400">Message sent. I'll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Try emailing directly instead.</p>
      )}
    </form>
  )
}
