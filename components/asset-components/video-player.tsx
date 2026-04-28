"use client"

import type { ReactNode } from "react"
import * as React from "react"
import { Maximize2, MoreHorizontal, Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export type VideoSource = {
  src: string
  type?: string
}

export type VideoPlayerProps = {
  videoUrl?: string
  sources?: VideoSource[]
  /**
   * Für eingebettete Player (z. B. BunnyStream iframe):
   * https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}
   */
  embedUrl?: string
  poster?: string
  title?: string
  description?: ReactNode

  autoPlay?: boolean
  loop?: boolean
  mutedByDefault?: boolean
  showControlsBar?: boolean
  showOverlayPlayButton?: boolean
  showHeader?: boolean

  className?: string
  videoClassName?: string
  controlsClassName?: string

  playAriaLabel?: string
  pauseAriaLabel?: string
  fullscreenAriaLabel?: string
  optionsAriaLabel?: string
}

export function VideoPlayer({
  videoUrl,
  sources,
  embedUrl,
  poster,
  title,
  description,
  autoPlay = false,
  loop = false,
  mutedByDefault = true,
  showControlsBar = true,
  showOverlayPlayButton = true,
  showHeader = false,
  className,
  videoClassName,
  controlsClassName,
  playAriaLabel = "Abspielen",
  pauseAriaLabel = "Pause",
  fullscreenAriaLabel = "Vollbild",
  optionsAriaLabel = "Weitere Optionen",
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const shellRef = React.useRef<HTMLDivElement>(null)
  const progressTrackRef = React.useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(mutedByDefault)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    setMuted(mutedByDefault)
  }, [mutedByDefault])

  const resolvedSources = React.useMemo<VideoSource[]>(
    () => (sources && sources.length > 0 ? sources : videoUrl ? [{ src: videoUrl }] : []),
    [sources, videoUrl],
  )

  const hasVideoSource = resolvedSources.length > 0
  const isEmbed = Boolean(embedUrl)

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
      if (!track || !v || !duration || duration <= 0) return
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
  const showOverlay = showOverlayPlayButton && (!playing || hovering)
  const shouldRenderHeader = showHeader && (title || description)

  return (
    <div className="relative w-full">
      {shouldRenderHeader ? (
        <div className="mx-auto mb-6 max-w-4xl text-center md:mb-8">
          {title ? (
            <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
          ) : null}
          {description ? (
            <div className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
              {description}
            </div>
          ) : null}
        </div>
      ) : null}

      <div
        ref={shellRef}
        className={cn(
          "relative mx-auto border border-white/15 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/5",
          className,
        )}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {isEmbed ? (
          <iframe
            className={cn("absolute inset-0 h-full w-full", videoClassName)}
            src={embedUrl}
            title={title ?? "Eingebettetes Video"}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        ) : hasVideoSource ? (
          <video
            ref={videoRef}
            className={cn("absolute inset-0 h-full w-full object-cover", videoClassName)}
            poster={poster}
            playsInline
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            preload="metadata"
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onClick={togglePlay}
          >
            {resolvedSources.map((source) => (
              <source key={`${source.src}-${source.type ?? "video"}`} src={source.src} type={source.type} />
            ))}
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-6 text-center">
            <p className="text-base text-white/80 md:text-lg">
              Kein Video verfügbar. Bitte `embedUrl`, `videoUrl` oder `sources` übergeben.
            </p>
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"
          aria-hidden
        />

        {showOverlay && hasVideoSource && !isEmbed ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-24 sm:w-24"
              aria-label={playing ? pauseAriaLabel : playAriaLabel}
            >
              {playing ? (
                <Pause className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.25} />
              ) : (
                <Play className="ml-1 h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.25} />
              )}
            </button>
          </div>
        ) : null}

        {showControlsBar && !isEmbed ? (
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 border-t border-white/5 bg-black/90 px-3 py-2 sm:px-4",
              controlsClassName,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="shrink-0 rounded p-1 text-white transition hover:bg-white/10"
                aria-label={playing ? pauseAriaLabel : playAriaLabel}
                disabled={!hasVideoSource}
              >
                {playing ? (
                  <Pause className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                  <Play className="h-4 w-4" strokeWidth={1.75} />
                )}
              </button>

              <div
                ref={progressTrackRef}
                role="slider"
                tabIndex={0}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                className={cn(
                  "relative mx-1 min-h-5 min-w-0 flex-1 cursor-pointer py-1.5",
                  !hasVideoSource && "cursor-not-allowed opacity-60",
                )}
                onPointerDown={onProgressPointerDown}
                onPointerMove={onProgressPointerMove}
                onPointerUp={onProgressPointerUp}
                onPointerCancel={onProgressPointerUp}
                onKeyDown={(e) => {
                  const v = videoRef.current
                  if (!v || !duration || duration <= 0) return
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
                <div className="h-0.5 w-full rounded-full bg-white/25">
                  <div className="h-full rounded-full bg-white" style={{ width: `${progress * 100}%` }} />
                </div>
              </div>

              <span className="shrink-0 tabular-nums text-xs text-white sm:text-sm">
                {formatTime(currentTime)}
              </span>

              <button
                type="button"
                className="shrink-0 rounded p-1 text-white/85 transition hover:bg-white/10"
                aria-label={optionsAriaLabel}
              >
                <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="shrink-0 rounded p-1 text-white transition hover:bg-white/10"
                aria-label={fullscreenAriaLabel}
              >
                <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
