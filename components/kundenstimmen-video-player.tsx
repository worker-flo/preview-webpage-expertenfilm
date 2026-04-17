'use client'

import * as React from 'react'
import { Maximize2, MoreHorizontal, Pause, Play } from 'lucide-react'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

type Props = {
  videoUrl: string
  poster: string
}

export function KundenstimmenVideoPlayer({ videoUrl, poster }: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const shellRef = React.useRef<HTMLDivElement>(null)
  const progressTrackRef = React.useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(true)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [hovering, setHovering] = React.useState(false)

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
      className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/5"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={videoUrl}
        poster={poster}
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"
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
            className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition hover:bg-white/40 sm:h-24 sm:w-24"
            aria-label={playing ? 'Pause' : 'Abspielen'}
          >
            {playing ? (
              <Pause className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.25} />
            ) : (
              <Play className="ml-1 h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.25} />
            )}
          </button>
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-black/90 px-3 py-2 sm:px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="shrink-0 rounded p-1 text-white transition hover:bg-white/10"
            aria-label={playing ? 'Pause' : 'Abspielen'}
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
            className="relative mx-1 min-h-5 min-w-0 flex-1 cursor-pointer py-1.5"
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
            <div className="h-0.5 w-full rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          <span className="shrink-0 tabular-nums text-xs text-white sm:text-sm">
            {formatTime(currentTime)}
          </span>

          <button
            type="button"
            className="shrink-0 rounded p-1 text-white/85 transition hover:bg-white/10"
            aria-label="Weitere Optionen"
          >
            <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="shrink-0 rounded p-1 text-white transition hover:bg-white/10"
            aria-label="Vollbild"
          >
            <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
