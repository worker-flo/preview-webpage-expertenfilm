"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export type BentoGridImage = {
  src: string
  alt: string
}

type BentoGridImagesProps = {
  images: readonly BentoGridImage[]
  /** Optional — das Lightbox-Verhalten ist eingebaut (z. B. für Analytics). */
  onImageClick?: (image: BentoGridImage) => void
}

export function BentoGridImages({ images, onImageClick }: BentoGridImagesProps) {
  const [activeImage, setActiveImage] = React.useState<BentoGridImage | null>(null)

  const openLightbox = React.useCallback(
    (image: BentoGridImage) => {
      setActiveImage(image)
      onImageClick?.(image)
    },
    [onImageClick],
  )

  return (
    <div className="min-h-0 min-w-0 h-[100svh] w-full mx-auto">
      <div className="grid h-full grid-cols-2 grid-rows-6 gap-3 sm:gap-4 md:gap-5">
        <button
          type="button"
          onClick={() => openLightbox(images[0])}
          className="group cursor-pointer relative col-start-1 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[0].alt} vergroessern`}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => openLightbox(images[1])}
          className="group cursor-pointer relative col-start-2 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[1].alt} vergroessern`}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => openLightbox(images[2])}
          className="group cursor-pointer relative col-span-2 row-span-2 row-start-3 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[2].alt} vergroessern`}
        >
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => openLightbox(images[3])}
          className="group cursor-pointer relative col-start-1 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[3].alt} vergroessern`}
        >
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => openLightbox(images[4])}
          className="group cursor-pointer relative col-start-2 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[4].alt} vergroessern`}
        >
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
            loading="lazy"
          />
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
