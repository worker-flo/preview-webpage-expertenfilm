'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  Pause,
  Play,
  Swords,
  Video,
} from 'lucide-react'

export type KundenergebnisProjektHighlightSlide = {
  title: string
  category: string
  videoUrl: string
  thumbnail: string
  highlights: [string, string, string]
}

const HIGHLIGHT_ICONS = [Mountain, Video, Swords] as const

function ProjektPortraitMedia({
  slide,
  isActive,
}: {
  slide: KundenergebnisProjektHighlightSlide
  isActive: boolean
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(true)
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

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,17.5rem)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg ring-1 ring-black/40 sm:max-w-xs md:mx-0 md:max-w-[280px] lg:max-w-[300px]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={slide.videoUrl}
          poster={slide.thumbnail}
          playsInline
          muted={muted}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25"
          aria-hidden
        />

        {(!playing || hovering) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/35 sm:h-20 sm:w-20"
              aria-label={playing ? 'Pause' : 'Abspielen'}
            >
              {playing ? (
                <Pause className="h-7 w-7" strokeWidth={1} />
              ) : (
                <Play className="ml-0.5 h-7 w-7" strokeWidth={1} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjektHighlightCard({ slide }: { slide: KundenergebnisProjektHighlightSlide }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-inner backdrop-blur-md md:bg-slate-900/50 md:p-10">
      <h3 className="text-left text-2xl font-bold text-white md:text-3xl">
        {slide.title}
      </h3>
      <p className="mt-1 text-left text-base font-normal text-white/70 md:text-lg">
        {slide.category}
      </p>
      <ul className="mt-6 space-y-4 md:mt-8 md:space-y-5">
        {slide.highlights.map((text, i) => {
          const Icon = HIGHLIGHT_ICONS[i] ?? Mountain
          return (
            <li key={i} className="flex items-start gap-3 text-left">
              <Icon
                className="mt-0.5 h-5 w-5 shrink-0 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="text-sm leading-relaxed text-white md:text-base">
                {text}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ProjektHighlightRow({
  slide,
  isActive,
}: {
  slide: KundenergebnisProjektHighlightSlide
  isActive: boolean
}) {
  return (
    <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10">
      <ProjektPortraitMedia slide={slide} isActive={isActive} />
      <ProjektHighlightCard slide={slide} />
    </div>
  )
}

export function KundenergebnisProjektSlider({
  slides,
}: {
  slides: KundenergebnisProjektHighlightSlide[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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
        aria-label="Vorheriger Eintrag"
      >
        <ChevronLeft className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 p-2 text-white/90 transition hover:text-white md:flex md:translate-x-full"
        aria-label="Nächster Eintrag"
      >
        <ChevronRight className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Vorheriger Eintrag"
      >
        <ChevronLeft className="h-10 w-10" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Nächster Eintrag"
      >
        <ChevronRight className="h-10 w-10" strokeWidth={1} />
      </button>

      <div className="min-w-0 overflow-hidden px-0 sm:px-1 md:px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:px-3 md:px-4"
            >
              <ProjektHighlightRow
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
