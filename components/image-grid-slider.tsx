"use client"

import type { ReactNode } from "react"
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type ImageItem = {
  src: string
  alt: string
}

export type ImageGridSlide = {
  images: ImageItem[]
}

export type ImageGridSliderProps = {
  slides: ImageGridSlide[]
  title?: string
  description?: ReactNode
  columns?: 2 | 3 | 4
  cardAspectClassName?: string
  containerClassName?: string
  slideClassName?: string
  imageClassName?: string
  showHeader?: boolean
  prevAriaLabel?: string
  nextAriaLabel?: string
}

function getGridColsClass(columns: 2 | 3 | 4) {
  if (columns === 3) return "grid-cols-3"
  if (columns === 4) return "grid-cols-4"
  return "grid-cols-2"
}

function SlideGrid({
  images,
  columns,
  cardAspectClassName,
  imageClassName,
}: {
  images: ImageItem[]
  columns: 2 | 3 | 4
  cardAspectClassName: string
  imageClassName?: string
}) {
  return (
    <div className={cn("grid gap-2 sm:gap-4 md:gap-6", getGridColsClass(columns))}>
      {images.map((img) => (
        <div
          key={`${img.src}-${img.alt}`}
          className={cn(
            "relative overflow-hidden rounded-2xl ring-1 ring-white/10",
            cardAspectClassName,
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={cn("h-full w-full object-cover", imageClassName)}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export function ImageGridSlider({
  slides,
  title,
  description,
  columns = 2,
  cardAspectClassName = "aspect-[4/3]",
  containerClassName,
  slideClassName,
  imageClassName,
  showHeader = true,
  prevAriaLabel = "Vorherige Bilder",
  nextAriaLabel = "Nächste Bilder",
}: ImageGridSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const shouldRenderHeader = showHeader && (title || description)

  return (
    <div className={cn("relative w-full", containerClassName)}>
      {shouldRenderHeader ? (
        <div>
          {title ? (
            <h3 className="text-center text-3xl font-bold text-white md:text-4xl">
              {title}
            </h3>
          ) : null}
          {description ? (
            <div className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white md:mt-5 md:text-lg">
              {description}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={cn("relative mx-auto max-w-5xl", shouldRenderHeader ? "mt-10 md:mt-14" : "")}>
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 p-2 text-white/90 transition hover:text-white lg:flex lg:-translate-x-full"
          aria-label={prevAriaLabel}
        >
          <ChevronLeft className="h-11 w-11 md:h-12 md:w-12" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 p-2 text-white/90 transition hover:text-white lg:flex lg:translate-x-full"
          aria-label={nextAriaLabel}
        >
          <ChevronRight className="h-11 w-11 md:h-12 md:w-12" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm lg:hidden"
          aria-label={prevAriaLabel}
        >
          <ChevronLeft className="h-9 w-9" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm lg:hidden"
          aria-label={nextAriaLabel}
        >
          <ChevronRight className="h-9 w-9" strokeWidth={1} />
        </button>

        <div className="min-w-0 overflow-hidden px-1 sm:px-2" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "min-w-0 shrink-0 grow-0 basis-full px-1 sm:px-2 md:px-3",
                  slideClassName,
                )}
              >
                <SlideGrid
                  images={slide.images}
                  columns={columns}
                  cardAspectClassName={cardAspectClassName}
                  imageClassName={imageClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
