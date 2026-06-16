"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

const N = 100          // moving stars during hyperspace
const N_STATIC = 300  // static stars after landing
const HYPER_MS = 1500
const DECEL_MS = 700
const TOTAL_MS = HYPER_MS + DECEL_MS
const MAX_SPEED = 22

interface MovingStar {
  x: number
  y: number
  px: number
  py: number
  angle: number
  speed: number
  size: number
  brightness: number
  bornAt: number
  accelMs: number
}

interface StaticStar {
  x: number
  y: number
  size: number
  brightness: number
  twinkleOffset: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const start = performance.now()

    const moving: MovingStar[] = Array.from({ length: N }, () => {
      const angle = Math.random() * Math.PI * 2
      const r = Math.random() * 20
      return {
        x: W / 2 + Math.cos(angle) * r,
        y: H / 2 + Math.sin(angle) * r,
        px: W / 2 + Math.cos(angle) * r,
        py: H / 2 + Math.sin(angle) * r,
        angle,
        speed: 0,
        size: Math.random() * 1.5 + 0.3,
        brightness: Math.random() * 0.45 + 0.55,
        bornAt: start + Math.random() * HYPER_MS * 0.55,
        accelMs: 400 + Math.random() * 500,
      }
    })

    // Static field is prepared at the start of decel and fades in over DECEL_MS
    let staticStars: StaticStar[] = []
    let staticReady = false

    let raf: number

    function respawn(s: MovingStar, now: number) {
      const angle = Math.random() * Math.PI * 2
      const r = Math.random() * 20
      s.x = W / 2 + Math.cos(angle) * r
      s.y = H / 2 + Math.sin(angle) * r
      s.px = s.x
      s.py = s.y
      s.angle = angle
      s.speed = 0
      s.bornAt = now
      s.accelMs = 400 + Math.random() * 500
    }

    function tick(now: number) {
      const dt = now - start
      ctx.clearRect(0, 0, W, H)

      // Blue tint at peak speed
      if (dt < HYPER_MS) {
        const glow = Math.sin((dt / HYPER_MS) * Math.PI) * 0.07
        if (glow > 0) {
          ctx.fillStyle = `rgba(100,160,255,${glow})`
          ctx.fillRect(0, 0, W, H)
        }
      }

      // Prepare static stars once at the start of decel
      if (dt >= HYPER_MS && !staticReady) {
        staticReady = true
        staticStars = Array.from({ length: N_STATIC }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          size: Math.random() * 1.3 + 0.3,
          brightness: Math.random() * 0.45 + 0.55,
          twinkleOffset: Math.random() * Math.PI * 2,
        }))
      }

      // Draw static field — fades in during decel, full opacity after
      if (staticReady) {
        const alpha = dt >= TOTAL_MS ? 1 : (dt - HYPER_MS) / DECEL_MS
        ctx.globalAlpha = alpha
        for (const s of staticStars) {
          const twinkle = 0.55 + 0.45 * Math.sin(now * 0.0008 + s.twinkleOffset)
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,255,255,${s.brightness * twinkle})`
          ctx.fill()
        }
        ctx.globalAlpha = 1
      }

      // After full decel: static field is all we need
      if (dt >= TOTAL_MS) {
        raf = requestAnimationFrame(tick)
        return
      }

      // Moving stars (hyper + decel)
      for (const s of moving) {
        if (now < s.bornAt) continue

        s.px = s.x
        s.py = s.y

        if (dt < HYPER_MS) {
          const age = now - s.bornAt
          const ageT = Math.min(age / s.accelMs, 1)
          s.speed = 0.5 + (MAX_SPEED - 0.5) * ageT * ageT

          s.x += Math.cos(s.angle) * s.speed
          s.y += Math.sin(s.angle) * s.speed

          if (s.x < -20 || s.x > W + 20 || s.y < -20 || s.y > H + 20) {
            respawn(s, now)
            continue
          }
        } else {
          // Exponential decel — no recycling
          s.speed *= 0.90
          s.x += Math.cos(s.angle) * s.speed
          s.y += Math.sin(s.angle) * s.speed
        }

        if (s.speed > 1.5) {
          const g = ctx.createLinearGradient(s.px, s.py, s.x, s.y)
          g.addColorStop(0, "rgba(160,200,255,0)")
          g.addColorStop(1, `rgba(255,255,255,${s.brightness})`)
          ctx.beginPath()
          ctx.moveTo(s.px, s.py)
          ctx.lineTo(s.x, s.y)
          ctx.strokeStyle = g
          ctx.lineWidth = s.size
          ctx.lineCap = "round"
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [pathname])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" />
}
