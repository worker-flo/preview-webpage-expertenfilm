"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"

export type VertVideoSlide = {
  id?: string
  title?: string
  videoUrl?: string
  embedUrl?: string
  thumbnail: string
  overlayLabel?: string
}

export type VertVideoSliderProps = {
  slides: VertVideoSlide[]
  previousAriaLabel?: string
  nextAriaLabel?: string
  mediaAspectClassName?: string
  mediaContainerClassName?: string
  mutedByDefault?: boolean
  className?: string
}

function SlideMedia({
  slide,
  isActive,
  mutedByDefault,
  mediaAspectClassName,
  mediaContainerClassName,
}: {
  slide: VertVideoSlide
  isActive: boolean
  mutedByDefault: boolean
  mediaAspectClassName: string
  mediaContainerClassName?: string
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const resolvedEmbedUrl =
    slide.embedUrl ??
    (slide.videoUrl?.includes("player.mediadelivery.net/embed/") ? slide.videoUrl : undefined)
  const isEmbed = Boolean(resolvedEmbedUrl)
  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(mutedByDefault)
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

  React.useEffect(() => {
    setMuted(mutedByDefault)
    if (videoRef.current) videoRef.current.muted = mutedByDefault
  }, [mutedByDefault])

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
      className={cn(
        "relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-[0_0_40px_rgba(0,0,0,0.45)] ring-1 ring-white/5",
        mediaContainerClassName,
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={cn("relative w-full", mediaAspectClassName)}>
        {isEmbed ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={resolvedEmbedUrl}
            title={slide.title ?? slide.overlayLabel ?? "Vertikales Video"}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        ) : (
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
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40"
          aria-hidden
        />

        {slide.overlayLabel ? (
          <p className="pointer-events-none absolute left-4 top-4 text-xs font-medium text-white/90 sm:text-sm">
            {slide.overlayLabel}
          </p>
        ) : null}

        {!isEmbed && (!playing || hovering) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-20 sm:w-20"
              aria-label={playing ? "Pause" : "Abspielen"}
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

export function VertVideoSlider({
  slides,
  previousAriaLabel = "Vorheriges Video",
  nextAriaLabel = "Nächstes Video",
  mediaAspectClassName = "aspect-[9/16]",
  mediaContainerClassName = "md:max-w-[22rem]",
  mutedByDefault = true,
  className,
}: VertVideoSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selected, setSelected] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className={cn("relative w-full", className)}>
      <div className="min-w-0 overflow-hidden px-1 md:px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id ?? `${slide.embedUrl ?? slide.videoUrl ?? "slide"}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:px-3 md:px-4"
            >
              <SlideMedia
                slide={slide}
                isActive={selected === index}
                mutedByDefault={mutedByDefault}
                mediaAspectClassName={mediaAspectClassName}
                mediaContainerClassName={mediaContainerClassName}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          className="smm-btn-icon cursor-pointer inline-flex items-center justify-center rounded-full p-1"
          aria-label={previousAriaLabel}
        >
          <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="smm-btn-icon cursor-pointer inline-flex items-center justify-center rounded-full p-1"
          aria-label={nextAriaLabel}
        >
          <ChevronRight className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1} />
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-white/55">
        {Math.min(selected + 1, slides.length)} / {slides.length}
      </p>
    </div>
  )
}
