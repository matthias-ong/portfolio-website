"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  t: number
}

const TRAIL_MS = 280
const GLOW_RADIUS = 220
const GLOW_ALPHA = 0.18

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trail = useRef<Point[]>([])
  const glow = useRef({ x: -400, y: -400 })
  const cursor = useRef({ x: -400, y: -400 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY }
      trail.current.push({ x: e.clientX, y: e.clientY, t: performance.now() })
    }
    window.addEventListener("mousemove", onMove)

    const render = () => {
      const ctx = canvas.getContext("2d")!
      const now = performance.now()

      // Slowly lerp glow toward cursor
      glow.current.x += (cursor.current.x - glow.current.x) * 0.06
      glow.current.y += (cursor.current.y - glow.current.y) * 0.06

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Glow orb
      const g = ctx.createRadialGradient(
        glow.current.x, glow.current.y, 0,
        glow.current.x, glow.current.y, GLOW_RADIUS
      )
      g.addColorStop(0, `rgba(59,130,246,${GLOW_ALPHA})`)
      g.addColorStop(1, `rgba(59,130,246,0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(glow.current.x, glow.current.y, GLOW_RADIUS, 0, Math.PI * 2)
      ctx.fill()

      // Remove expired points
      trail.current = trail.current.filter(p => now - p.t < TRAIL_MS)

      const t = trail.current
      if (t.length < 2) {
        raf.current = requestAnimationFrame(render)
        return
      }

      // Build one continuous smooth path through all points
      ctx.beginPath()
      ctx.moveTo(t[0].x, t[0].y)
      for (let i = 1; i < t.length - 1; i++) {
        const b = t[i]
        const c = t[i + 1]
        ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2)
      }
      ctx.lineTo(t[t.length - 1].x, t[t.length - 1].y)

      // Gradient fades from transparent (oldest) to white (newest)
      const head = t[t.length - 1]
      const tail = t[0]
      const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y)
      grad.addColorStop(0, "rgba(255,255,255,0)")
      grad.addColorStop(1, "rgba(255,255,255,0.85)")
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.5
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.stroke()

      raf.current = requestAnimationFrame(render)
    }

    raf.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf.current!)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 hidden sm:block"
    />
  )
}
