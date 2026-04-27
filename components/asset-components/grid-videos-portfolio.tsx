'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoreHorizontal,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react'

export type VideobeispielKundeItem = {
  title: string
  category: string
  videoUrl?: string
  poster?: string
  /**
   * BunnyStream Embed-URL, z. B.:
   * https://player.mediadelivery.net/embed/{libraryId}/{videoId}
   */
  embedUrl?: string
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function VideobeispielKartePlayer({
  videoUrl,
  poster,
  embedUrl,
}: Pick<VideobeispielKundeItem, 'videoUrl' | 'poster' | 'embedUrl'>) {
  const volumeInputId = React.useId()
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const shellRef = React.useRef<HTMLDivElement>(null)
  const progressTrackRef = React.useRef<HTMLDivElement>(null)
  const isEmbed = Boolean(embedUrl)

  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(true)
  const [volume, setVolume] = React.useState(0.85)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.volume = volume
  }, [volume])

  const togglePlay = React.useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      if (v.volume === 0) {
        v.volume = volume > 0 ? volume : 0.85
        if (volume === 0) setVolume(v.volume)
      }
      v.muted = false
      setMuted(false)
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [volume])

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

  const toggleMute = React.useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.muted) {
      v.muted = false
      setMuted(false)
      if (volume === 0) {
        const next = 0.75
        setVolume(next)
        v.volume = next
      }
    } else {
      v.muted = true
      setMuted(true)
    }
  }, [volume])

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
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-[#050a14]/95 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {isEmbed ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title="Eingebettetes Portfolio-Video"
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      ) : (
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
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          onClick={togglePlay}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"
        aria-hidden
      />

      <p className="pointer-events-none absolute right-2 top-2 z-10 text-[10px] font-bold uppercase tracking-[0.18em] text-white drop-shadow-md sm:right-3 sm:top-3 sm:text-xs">
        EXPERTENFILM
      </p>

      {!isEmbed && (!playing || hovering) && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="smm-btn-surface pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
            aria-label={playing ? 'Pause' : 'Abspielen'}
          >
            {playing ? (
              <Pause className="h-7 w-7" strokeWidth={1.25} />
            ) : (
              <Play className="ml-0.5 h-7 w-7" strokeWidth={1.25} />
            )}
          </button>
        </div>
      )}

      {!isEmbed && (
        <div
          className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#050a14]/95 px-2 py-1.5 sm:px-3 sm:py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="shrink-0 rounded p-0.5 text-white transition hover:bg-[#0a1424] sm:p-1"
              aria-label={playing ? 'Pause' : 'Abspielen'}
            >
              {playing ? (
                <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
              ) : (
                <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
              )}
            </button>

            <div
              ref={progressTrackRef}
              role="slider"
              tabIndex={0}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              className="relative min-h-4 min-w-0 flex-1 cursor-pointer py-1"
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

            <span className="shrink-0 tabular-nums text-[10px] text-white sm:text-xs">
              {formatTime(currentTime)}
            </span>

            <label className="sr-only" htmlFor={volumeInputId}>
              Lautstärke
            </label>
            <input
              id={volumeInputId}
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={(e) => {
                const v = videoRef.current
                if (!v) return
                const next = parseFloat(e.target.value)
                setVolume(next)
                v.volume = next
                const m = next === 0
                v.muted = m
                setMuted(m)
              }}
              className="h-1 w-10 shrink-0 cursor-pointer appearance-none rounded-full bg-white/30 accent-[#00ffc4] sm:w-14"
              aria-label="Lautstärke"
            />

            <button
              type="button"
              onClick={toggleMute}
              className="shrink-0 rounded p-0.5 text-white transition hover:bg-[#0a1424] sm:p-1"
              aria-label={muted ? 'Ton einschalten' : 'Ton stummschalten'}
            >
              {muted ? (
                <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
              ) : (
                <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} />
              )}
            </button>

            <button
              type="button"
              className="shrink-0 rounded p-0.5 text-white/85 transition hover:bg-[#0a1424] sm:p-1"
              aria-label="Weitere Optionen"
            >
              <MoreHorizontal
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                strokeWidth={1.5}
              />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="shrink-0 rounded p-0.5 text-white transition hover:bg-[#0a1424] sm:p-1"
              aria-label="Vollbild"
            >
              <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function VideobeispieleKundenprojekteGrid({
  items,
}: {
  items: VideobeispielKundeItem[]
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
    <div>
      <div className="md:hidden">
        <div className="min-w-0 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item) => (
              <div key={item.title} className="min-w-0 shrink-0 grow-0 basis-full">
                <article className="rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <VideobeispielKartePlayer
                    videoUrl={item.videoUrl}
                    poster={item.poster}
                    embedUrl={item.embedUrl}
                  />
                  <h4 className="mt-4 text-left text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-left text-sm text-white/65">
                    {item.category}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            className="smm-btn-icon cursor-pointer inline-flex items-center justify-center rounded-full p-1"
            aria-label="Vorheriges Videobeispiel"
          >
            <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="smm-btn-icon cursor-pointer inline-flex items-center justify-center rounded-full p-1"
            aria-label="Naechstes Videobeispiel"
          >
            <ChevronRight className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1} />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-white/55">
          {Math.min(selected + 1, items.length)} / {items.length}
        </p>
      </div>

      <div className="hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 md:gap-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:p-8"
          >
            <VideobeispielKartePlayer
              videoUrl={item.videoUrl}
              poster={item.poster}
              embedUrl={item.embedUrl}
            />
            <h4 className="mt-4 text-left text-lg font-bold text-white md:mt-5 md:text-xl">
              {item.title}
            </h4>
            <p className="mt-1 text-left text-sm text-white/65 md:text-base">
              {item.category}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
