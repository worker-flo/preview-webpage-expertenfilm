'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ArrowUp,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoreHorizontal,
  Pause,
  Play,
  Shield,
} from 'lucide-react'

export type KundenergebnisSlide = {
  clientName: string
  videoUrl: string
  thumbnail: string
  /** Optional caption overlay on the video (e.g. Kundenerfahrung …) */
  videoCaption?: string
  herausforderung: string
  loesungen: string
  ergebnisse: string[]
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function ClientMark() {
  return (
    <div
      className="relative flex h-11 w-11 shrink-0 items-center justify-center"
      aria-hidden
    >
      <Shield className="absolute h-11 w-11 fill-blue-600 text-blue-600" />
      <Check
        className="relative z-10 h-5 w-5 text-yellow-400"
        strokeWidth={3}
      />
    </div>
  )
}

function FallstudieVideo({
  slide,
  isActive,
}: {
  slide: KundenergebnisSlide
  isActive: boolean
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const shellRef = React.useRef<HTMLDivElement>(null)
  const progressTrackRef = React.useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(true)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (!isActive) {
      v.pause()
      setPlaying(false)
      v.muted = true
      setMuted(true)
    }
  }, [isActive])

  const togglePlay = React.useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.muted = false
      setMuted(false)
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const seekFromClientX = React.useCallback(
    (clientX: number) => {
      const track = progressTrackRef.current
      const v = videoRef.current
      if (!track || !v || !duration) return
      const rect = track.getBoundingClientRect()
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
      v.currentTime = ratio * duration
    },
    [duration],
  )

  const onProgressPointerDown = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId)
      seekFromClientX(e.clientX)
    },
    [seekFromClientX],
  )

  const onProgressPointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
      seekFromClientX(e.clientX)
    },
    [seekFromClientX],
  )

  const onProgressPointerUp = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId)
      }
    },
    [],
  )

  const toggleFullscreen = React.useCallback(() => {
    const el = shellRef.current
    if (!el) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void el.requestFullscreen().catch(() => {})
    }
  }, [])

  const progress = duration > 0 ? currentTime / duration : 0

  return (
    <div
      ref={shellRef}
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={slide.videoUrl}
        poster={slide.thumbnail}
        playsInline
        muted={muted}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={togglePlay}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
        aria-hidden
      />

      {slide.videoCaption ? (
        <p className="pointer-events-none absolute left-3 top-3 max-w-[min(100%,20rem)] text-xs font-medium text-white/95 drop-shadow-md sm:left-4 sm:top-4 sm:text-sm md:text-base">
          {slide.videoCaption}
        </p>
      ) : null}

      {(!playing || hovering) && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-20 sm:w-20 md:h-24 md:w-24"
            aria-label={playing ? 'Pause' : 'Abspielen'}
          >
            {playing ? (
              <Pause className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.25} />
            ) : (
              <Play className="ml-1 h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.25} />
            )}
          </button>
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent px-3 pb-2.5 pt-8 sm:px-4 sm:pb-3 sm:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="shrink-0 rounded-md p-1 text-white transition hover:bg-white/10"
            aria-label={playing ? 'Pause' : 'Abspielen'}
          >
            {playing ? (
              <Pause className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
            ) : (
              <Play className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
            )}
          </button>

          <div
            ref={progressTrackRef}
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            className="relative flex min-h-4 min-w-0 flex-1 cursor-pointer items-center py-2"
            onPointerDown={onProgressPointerDown}
            onPointerMove={onProgressPointerMove}
            onPointerUp={onProgressPointerUp}
            onPointerCancel={onProgressPointerUp}
            onKeyDown={(e) => {
              const v = videoRef.current
              if (!v || !duration) return
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                v.currentTime = Math.max(0, v.currentTime - 5)
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                v.currentTime = Math.min(duration, v.currentTime + 5)
              }
            }}
          >
            <div className="relative h-1 w-full rounded-full bg-white/25">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-white"
                style={{ width: `${progress * 100}%` }}
              />
              <div
                className="absolute top-1/2 h-3 w-3 rounded-full border border-white/40 bg-white shadow-sm"
                style={{
                  left: `${progress * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>

          <span className="shrink-0 tabular-nums text-xs text-white sm:text-sm">
            {formatTime(currentTime)}
          </span>

          <button
            type="button"
            className="shrink-0 rounded-md p-1 text-white/85 transition hover:bg-white/10"
            aria-label="Weitere Optionen"
          >
            <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="shrink-0 rounded-md p-1 text-white transition hover:bg-white/10"
            aria-label="Vollbild"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

function FallstudieCard({
  slide,
  isActive,
}: {
  slide: KundenergebnisSlide
  isActive: boolean
}) {
  return (
    <article
      className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800/70 via-slate-900/75 to-[#050505]/95 p-5 shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8 md:p-10 lg:p-12"
    >
      <header className="mb-6 flex items-center gap-3 md:mb-8">
        <ClientMark />
        <h3 className="text-lg font-bold text-white md:text-xl">
          {slide.clientName}
        </h3>
      </header>

      <FallstudieVideo slide={slide} isActive={isActive} />

      <div className="mt-8 grid gap-8 text-white md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-12">
        <div>
          <h4 className="mb-3 text-base font-bold md:text-lg">Herausforderung</h4>
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            {slide.herausforderung}
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold md:text-lg">Lösungen</h4>
          <p className="text-sm leading-relaxed text-white/90 md:text-base">
            {slide.loesungen}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-8 md:mt-10 md:pt-10">
        <h4 className="mb-4 text-base font-bold text-white md:text-lg">
          Ergebnisse
        </h4>
        <ul className="space-y-3 md:space-y-4">
          {slide.ergebnisse.map((line, i) => (
            <li key={i} className="flex gap-3 text-sm text-white md:text-base">
              <ArrowUp
                className="mt-0.5 h-4 w-4 shrink-0 text-white"
                strokeWidth={2}
                aria-hidden
              />
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function KundenergebnisseCarousel({
  slides,
}: {
  slides: KundenergebnisSlide[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 p-2 text-white/90 transition hover:text-white md:flex md:-translate-x-full"
        aria-label="Vorherige Fallstudie"
      >
        <ChevronLeft className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 p-2 text-white/90 transition hover:text-white md:flex md:translate-x-full"
        aria-label="Nächste Fallstudie"
      >
        <ChevronRight className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Vorherige Fallstudie"
      >
        <ChevronLeft className="h-10 w-10" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Nächste Fallstudie"
      >
        <ChevronRight className="h-10 w-10" strokeWidth={1} />
      </button>

      <div className="min-w-0 overflow-hidden px-0 sm:px-1 md:px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={`${slide.clientName}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-0 sm:px-2 md:px-3"
            >
              <FallstudieCard
                slide={slide}
                isActive={selected === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
