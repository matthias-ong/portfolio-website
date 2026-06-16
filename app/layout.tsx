import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import CursorGlow from "@/components/CursorGlow"
import StarField from "@/components/StarField"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Matthias Ong — AI & Full-Stack Engineer",
  description: "Portfolio of Matthias Ong. Building AI-powered products and full-stack applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-50">
        <StarField />
        <CursorGlow />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Matthias Ong
        </footer>
      </body>
    </html>
  )
}
