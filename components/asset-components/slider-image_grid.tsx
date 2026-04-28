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
            "group border border-white/15 relative overflow-hidden rounded-2xl transition",
            cardAspectClassName,
          )}
          aria-label={`${img.alt} vergroessern`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={cn(
              "h-full w-full object-cover cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]",
              imageClassName,
            )}
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
  const [selected, setSelected] = React.useState(0)
  const [activeImage, setActiveImage] = React.useState<ImageItem | null>(null)

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

      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          className="smm-btn-icon cursor-pointer inline-flex items-center justify-center rounded-full p-1"
          aria-label={prevAriaLabel}
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
