"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function ImageCarousel({ images, alt, captions }: { images: string[]; alt: string; captions?: string[] }) {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false)
      if (e.key === "ArrowLeft") setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
      if (e.key === "ArrowRight") setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [expanded, images.length])

  const caption = captions?.[current]

  return (
    <>
      {/* Card thumbnail */}
      <div
        className="relative aspect-video w-full cursor-zoom-in overflow-hidden bg-zinc-950"
        onClick={() => setExpanded(true)}
      >
        <Image
          key={current}
          src={images[current]}
          alt={`${alt} screenshot ${current + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={current === 0}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-lg text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-lg text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-3 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white/70 backdrop-blur-sm">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Caption bar */}
      {caption && (
        <div className="flex items-center justify-between bg-zinc-900 px-4 py-2">
          <span className="text-xs text-zinc-400">{caption}</span>
        </div>
      )}

      {/* Lightbox */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative h-[90vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`${alt} screenshot ${current + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white transition hover:bg-white/25"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white transition hover:bg-white/25"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <button
            onClick={() => setExpanded(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/25"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
