'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ProduktionImpressionBild = {
  src: string
  alt: string
}

export type ProduktionImpressionSlide = {
  /** Genau vier Bilder für das 2×2-Raster */
  images: [ProduktionImpressionBild, ProduktionImpressionBild, ProduktionImpressionBild, ProduktionImpressionBild]
}

function ImpressionSlideGrid({ slide }: { slide: ProduktionImpressionSlide }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
      {slide.images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export function ProduktionImpressionenSlider({
  slides,
}: {
  slides: ProduktionImpressionSlide[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full">
      <h3 className="text-center text-3xl font-bold text-white md:text-4xl">
        Impressionen aus der Produktion
      </h3>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base font-normal leading-relaxed text-white md:mt-5 md:text-lg">
        <span className="block">
          Weitere Bilder die während unserer Arbeit geschossen wurden.
        </span>
        <span className="mt-2 block">
          Verschaffen Sie sich einen ersten Eindruck über unsere Arbeitsweise
          und unser Equipment.
        </span>
      </p>

      <div className="relative mx-auto mt-10 max-w-5xl md:mt-14">
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 p-2 text-white/90 transition hover:text-white lg:flex lg:-translate-x-full"
          aria-label="Vorherige Impressionen"
        >
          <ChevronLeft className="h-11 w-11 md:h-12 md:w-12" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 p-2 text-white/90 transition hover:text-white lg:flex lg:translate-x-full"
          aria-label="Nächste Impressionen"
        >
          <ChevronRight className="h-11 w-11 md:h-12 md:w-12" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm lg:hidden"
          aria-label="Vorherige Impressionen"
        >
          <ChevronLeft className="h-9 w-9" strokeWidth={1} />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm lg:hidden"
          aria-label="Nächste Impressionen"
        >
          <ChevronRight className="h-9 w-9" strokeWidth={1} />
        </button>

        <div className="min-w-0 overflow-hidden px-1 sm:px-2" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full px-1 sm:px-2 md:px-3"
              >
                <ImpressionSlideGrid slide={slide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
