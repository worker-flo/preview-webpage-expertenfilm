'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Smile,
  SquareArrowRight,
  Star,
} from 'lucide-react'

export type WeitereTestimonialSlide = {
  /** Zwei Zeilen für das Wordmark oben links (z. B. ["LIFT","ADDICTS"]) */
  brandMarkLines: [string, string]
  overlayLabel: string
  videoUrl: string
  thumbnail: string
  title: string
  category: string
  highlights: [string, string, string]
}

const BULLET_ICONS = [Smile, SquareArrowRight, Star] as const

function TestimonialMedia({
  slide,
  isActive,
}: {
  slide: WeitereTestimonialSlide
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
      className="relative w-full shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-[0_0_40px_rgba(0,0,0,0.45)] ring-1 ring-white/5 md:w-80 lg:w-[22rem]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-[3/4]">
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
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40"
          aria-hidden
        />

        <div className="pointer-events-none absolute left-4 top-4 md:left-5 md:top-5">
          <p className="font-black italic leading-none tracking-tight text-white drop-shadow-md">
            <span className="block text-2xl sm:text-3xl">
              {slide.brandMarkLines[0]}
            </span>
            <span className="block text-2xl sm:text-3xl">
              {slide.brandMarkLines[1]}
            </span>
          </p>
          <p className="mt-2 text-xs font-medium text-white/90 sm:text-sm">
            {slide.overlayLabel}
          </p>
        </div>

        {(!playing || hovering) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-20 sm:w-20"
              aria-label={playing ? 'Pause' : 'Abspielen'}
            >
              {playing ? (
                <Pause className="h-8 w-8" strokeWidth={1.25} />
              ) : (
                <Play className="ml-0.5 h-8 w-8" strokeWidth={1.25} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function TestimonialInfoCard({ slide }: { slide: WeitereTestimonialSlide }) {
  return (
    <div className="flex w-full flex-1 flex-col justify-center rounded-2xl border border-white/15 bg-white/10 p-8 shadow-inner backdrop-blur-md md:min-h-0 md:max-w-xl md:self-center md:p-10 lg:max-w-none">
      <h4 className="text-2xl font-bold text-white md:text-3xl">{slide.title}</h4>
      <p className="mt-1 text-sm text-white/65 md:text-base">{slide.category}</p>
      <ul className="mt-6 space-y-4 md:mt-8 md:space-y-5">
        {slide.highlights.map((text, i) => {
          const Icon = BULLET_ICONS[i] ?? Star
          const iconClass =
            Icon === Star
              ? 'mt-0.5 h-5 w-5 shrink-0 fill-none text-white'
              : 'mt-0.5 h-5 w-5 shrink-0 text-white'
          return (
            <li key={i} className="flex gap-3 text-left text-sm text-white md:text-base">
              <Icon
                className={iconClass}
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="leading-relaxed">{text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function TestimonialSlideRow({
  slide,
  isActive,
}: {
  slide: WeitereTestimonialSlide
  isActive: boolean
}) {
  return (
    <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10">
      <TestimonialMedia slide={slide} isActive={isActive} />
      <TestimonialInfoCard slide={slide} />
    </div>
  )
}

export function WeitereTestimonialsSlider({
  slides,
}: {
  slides: WeitereTestimonialSlide[]
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
        aria-label="Vorheriges Testimonial"
      >
        <ChevronLeft className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 p-2 text-white/90 transition hover:text-white md:flex md:translate-x-full"
        aria-label="Nächstes Testimonial"
      >
        <ChevronRight className="h-12 w-12 md:h-14 md:w-14" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Vorheriges Testimonial"
      >
        <ChevronLeft className="h-10 w-10" strokeWidth={1} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm md:hidden"
        aria-label="Nächstes Testimonial"
      >
        <ChevronRight className="h-10 w-10" strokeWidth={1} />
      </button>

      <div className="min-w-0 overflow-hidden px-1 md:px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:px-3 md:px-4"
            >
              <TestimonialSlideRow
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
