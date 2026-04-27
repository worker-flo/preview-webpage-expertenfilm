"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoreHorizontal,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type VideoSliderItem = {
  title: string
  videoUrl?: string
  thumbnail?: string
  /**
   * Direkt nutzbar für BunnyStream Embed-URLs, z. B.:
   * https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}
   */
  embedUrl?: string
}

export type VideoSliderProps = {
  slides: VideoSliderItem[]
  slideTopLabel?: string
  previousAriaLabel?: string
  nextAriaLabel?: string
  mutedByDefault?: boolean
  className?: string
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

function SlideVideo({
  slide,
  isActive,
  slideTopLabel,
  mutedByDefault,
}: {
  slide: VideoSliderItem
  isActive: boolean
  slideTopLabel?: string
  mutedByDefault: boolean
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const shellRef = React.useRef<HTMLDivElement>(null)
  const progressTrackRef = React.useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(mutedByDefault)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = mutedByDefault
    setMuted(mutedByDefault)
  }, [mutedByDefault])

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (!isActive) {
      v.pause()
      setPlaying(false)
    }
  }, [isActive])

  const togglePlay = React.useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
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

  const onProgressPointerUp = React.useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }, [])

  const toggleMute = React.useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

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
  const isEmbed = Boolean(slide.embedUrl)

  return (
    <div
      ref={shellRef}
      className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black  ring-1 ring-white/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
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
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30"
        aria-hidden
      />

      <div className="pointer-events-none absolute left-4 top-4 md:left-6 md:top-6">
        {slideTopLabel ? (
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 md:text-xs">
            {slideTopLabel}
          </p>
        ) : null}
        <p className="mt-1 max-w-[min(100%,18rem)] text-2xl font-bold uppercase leading-none tracking-tight text-white md:max-w-none md:text-4xl lg:text-5xl">
          {slide.title}
        </p>
      </div>

      {!isEmbed && (!playing || hovering) && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition hover:bg-white/35 md:h-24 md:w-24"
            aria-label={playing ? "Pause" : "Abspielen"}
          >
            {playing ? (
              <Pause className="h-9 w-9 md:h-10 md:w-10" strokeWidth={1.25} />
            ) : (
              <Play className="ml-1 h-9 w-9 md:h-10 md:w-10" strokeWidth={1.25} />
            )}
          </button>
        </div>
      )}

      {!isEmbed && (
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pb-3 pt-10 md:px-4 md:pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="shrink-0 rounded-md p-1.5 text-white transition hover:bg-white/10"
              aria-label={playing ? "Pause" : "Abspielen"}
            >
              {playing ? (
                <Pause className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Play className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>

            <div
              ref={progressTrackRef}
              role="slider"
              tabIndex={0}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              className="relative h-1.5 min-w-0 flex-1 cursor-pointer rounded-full bg-white/20"
              onPointerDown={onProgressPointerDown}
              onPointerMove={onProgressPointerMove}
              onPointerUp={onProgressPointerUp}
              onPointerCancel={onProgressPointerUp}
              onKeyDown={(e) => {
                const v = videoRef.current
                if (!v || !duration) return
                if (e.key === "ArrowLeft") {
                  e.preventDefault()
                  v.currentTime = Math.max(0, v.currentTime - 5)
                }
                if (e.key === "ArrowRight") {
                  e.preventDefault()
                  v.currentTime = Math.min(duration, v.currentTime + 5)
                }
              }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-red-500"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <span className="shrink-0 tabular-nums text-xs text-white/90 md:text-sm">
              {formatTime(currentTime)}
            </span>

            <button
              type="button"
              onClick={toggleMute}
              className="hidden shrink-0 rounded-md p-1.5 text-white transition hover:bg-white/10 sm:block"
              aria-label={muted ? "Ton einschalten" : "Ton stummschalten"}
            >
              {muted ? (
                <VolumeX className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Volume2 className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>

            <button
              type="button"
              className="hidden shrink-0 rounded-md p-1.5 text-white/80 transition hover:bg-white/10 md:block"
              aria-label="Weitere Optionen"
            >
              <MoreHorizontal className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="shrink-0 rounded-md p-1.5 text-white transition hover:bg-white/10"
              aria-label="Vollbild"
            >
              <Maximize2 className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function VideoSlider({
  slides,
  slideTopLabel,
  previousAriaLabel = "Vorheriges Video",
  nextAriaLabel = "Nächstes Video",
  mutedByDefault = false,
  className,
}: VideoSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
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
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className={cn("w-full", className)}>
      <div className="min-w-0 overflow-hidden px-0 md:px-2" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-0 sm:px-3 md:px-6"
            >
              <SlideVideo
                slide={slide}
                isActive={selected === index}
                slideTopLabel={slideTopLabel}
                mutedByDefault={mutedByDefault}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
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
