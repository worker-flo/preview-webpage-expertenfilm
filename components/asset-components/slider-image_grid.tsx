"use client"

import type { ReactNode } from "react"
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { AnimatePresence, motion } from "framer-motion"
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
  onImageClick,
}: {
  images: ImageItem[]
  columns: 2 | 3 | 4
  cardAspectClassName: string
  imageClassName?: string
  onImageClick: (image: ImageItem) => void
}) {
  return (
    <div className={cn("grid gap-2 sm:gap-4 md:gap-6", getGridColsClass(columns))}>
      {images.map((img) => (
        <button
          type="button"
          key={`${img.src}-${img.alt}`}
          onClick={() => onImageClick(img)}
          className={cn(
            "relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
            cardAspectClassName,
          )}
          aria-label={`${img.alt} vergroessern`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={cn("h-full w-full object-cover cursor-pointer", imageClassName)}
            loading="lazy"
          />
        </button>
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
  const [activeImage, setActiveImage] = React.useState<ImageItem | null>(null)

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
                  onImageClick={setActiveImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={scrollPrev}
          className="rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label={prevAriaLabel}
        >
          <ChevronLeft className="h-9 w-9" strokeWidth={1} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
          aria-label={nextAriaLabel}
        >
          <ChevronRight className="h-9 w-9" strokeWidth={1} />
        </button>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Bild vergroessert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <motion.button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-sm text-white transition hover:bg-black/80"
              onClick={() => setActiveImage(null)}
              aria-label="Bild schliessen"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Schliessen
            </motion.button>
            <motion.img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl object-contain ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
