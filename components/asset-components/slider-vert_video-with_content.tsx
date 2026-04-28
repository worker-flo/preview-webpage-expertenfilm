"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react"

import { cn } from "@/lib/utils"

export type VideoContentSlide = {
  id?: string
  title: string
  category?: string
  videoUrl?: string
  thumbnail?: string
  /**
   * BunnyStream Embed-URL, z. B.:
   * https://player.mediadelivery.net/embed/{libraryId}/{videoId}
   */
  embedUrl?: string
  points: string[]
  overlayLabel?: string
  brandMarkLines?: [string, string]
}

export type VideoContentSliderProps = {
  slides: VideoContentSlide[]
  previousAriaLabel?: string
  nextAriaLabel?: string
  mediaAspectClassName?: string
  mediaContainerClassName?: string
  cardClassName?: string
  titleClassName?: string
  categoryClassName?: string
  pointsListClassName?: string
  pointItemClassName?: string
  mutedByDefault?: boolean
  renderPointIcon?: (
    index: number,
    text: string,
    slide: VideoContentSlide,
  ) => React.ReactNode
}

function SlideMedia({
  slide,
  isActive,
  mutedByDefault,
  mediaAspectClassName,
  mediaContainerClassName,
}: {
  slide: VideoContentSlide
  isActive: boolean
  mutedByDefault: boolean
  mediaAspectClassName: string
  mediaContainerClassName?: string
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const isEmbed = Boolean(slide.embedUrl)
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
        "relative w-full shrink-0 overflow-hidden rounded-3xl",
        mediaContainerClassName,
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={cn("relative w-full", mediaAspectClassName)}>
        {isEmbed ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={slide.embedUrl}
            title={slide.title}
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
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/40 border border-white/15 overflow-hidden rounded-3xl"
          aria-hidden
        />

        {(slide.brandMarkLines || slide.overlayLabel) && (
          <div className="pointer-events-none absolute left-4 top-4 md:left-5 md:top-5">
            {slide.brandMarkLines ? (
              <p className="font-black italic leading-none tracking-tight text-white drop-shadow-md">
                <span className="block text-2xl sm:text-3xl">
                  {slide.brandMarkLines[0]}
                </span>
                <span className="block text-2xl sm:text-3xl">
                  {slide.brandMarkLines[1]}
                </span>
              </p>
            ) : null}
            {slide.overlayLabel ? (
              <p className="mt-2 text-xs font-medium text-white/90 sm:text-sm">
                {slide.overlayLabel}
              </p>
            ) : null}
          </div>
        )}

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

function SlideCard({
  slide,
  cardClassName,
  titleClassName,
  categoryClassName,
  pointsListClassName,
  pointItemClassName,
  renderPointIcon,
}: {
  slide: VideoContentSlide
  cardClassName?: string
  titleClassName?: string
  categoryClassName?: string
  pointsListClassName?: string
  pointItemClassName?: string
  renderPointIcon?: (
    index: number,
    text: string,
    slide: VideoContentSlide,
  ) => React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col justify-center rounded-2xl border border-white/15 bg-[#050a14]/95 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)] smm-card-hover md:min-h-0 md:self-center md:p-10",
        cardClassName,
      )}
    >
      <h4 className={cn("text-2xl font-bold text-white md:text-3xl", titleClassName)}>
        {slide.title}
      </h4>
      {slide.category ? (
        <p className={cn("mt-1 text-sm text-white/65 md:text-base", categoryClassName)}>
          {slide.category}
        </p>
      ) : null}

      <ul className={cn("mt-6 space-y-4 md:mt-8 md:space-y-5", pointsListClassName)}>
        {slide.points.map((text, i) => (
          <li
            key={`${slide.id ?? slide.title}-${i}`}
            className={cn(
              "flex gap-3 text-left text-sm text-white md:text-base",
              pointItemClassName,
            )}
          >
            {renderPointIcon ? (
              renderPointIcon(i, text, slide)
            ) : (
              <Star
                className="mt-0.5 h-5 w-5 shrink-0 text-white"
                strokeWidth={1.75}
                aria-hidden
              />
            )}
            <span className="leading-relaxed">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function VideoContentSlider({
  slides,
  previousAriaLabel = "Vorheriger Eintrag",
  nextAriaLabel = "Nächster Eintrag",
  mediaAspectClassName = "aspect-[3/4]",
  mediaContainerClassName = "md:w-80 lg:w-[22rem]",
  cardClassName,
  titleClassName,
  categoryClassName,
  pointsListClassName,
  pointItemClassName,
  mutedByDefault = true,
  renderPointIcon,
}: VideoContentSliderProps) {
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
    <div className="relative w-full">
      <div className="min-w-0 overflow-hidden px-1 md:px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id ?? `${slide.title}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:px-3 md:px-4"
            >
              <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10">
                <SlideMedia
                  slide={slide}
                  isActive={selected === index}
                  mutedByDefault={mutedByDefault}
                  mediaAspectClassName={mediaAspectClassName}
                  mediaContainerClassName={mediaContainerClassName}
                />
                <SlideCard
                  slide={slide}
                  cardClassName={cardClassName}
                  titleClassName={titleClassName}
                  categoryClassName={categoryClassName}
                  pointsListClassName={pointsListClassName}
                  pointItemClassName={pointItemClassName}
                  renderPointIcon={renderPointIcon}
                />
              </div>
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
