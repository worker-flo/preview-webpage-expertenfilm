"use client"

import * as React from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type ServiceFeature = {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export type ServiceSlide = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  href: string
  features: ServiceFeature[]
}

type ServicesSliderProps = {
  slides: ServiceSlide[]
  previousAriaLabel?: string
  nextAriaLabel?: string
}

export function ServicesSlider({
  slides,
  previousAriaLabel = "Vorheriger Service",
  nextAriaLabel = "Naechster Service",
}: ServicesSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="w-full">
      <div className="min-w-0" ref={emblaRef}>
        <div className="flex flex-row gap-4">
          {slides.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full px-1"
            >
              <article className="group relative flex h-full flex-col items-center rounded-2xl border border-[#2a2d4a] bg-[#1a1d3a]/80 p-8 text-center transition duration-300 hover:scale-[1.02] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] focus-within:scale-[1.02] focus-within:shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-[#5b8def] stroke-[1.5]" />
                </div>

                <h3 className="mb-6 text-lg font-bold leading-tight text-white md:text-xl">
                  {service.title}
                </h3>

                <div className="flex flex-1 flex-col gap-4 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <feature.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/60" />
                      <span className="text-sm leading-relaxed text-white/70">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={service.href}
                    className="text-sm font-medium text-white/75 transition-colors group-hover:text-[#8daeff] group-focus-within:text-[#8daeff] focus-visible:text-[#8daeff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8daeff]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1d3a] after:absolute after:inset-0 after:content-['']"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          className="inline-flex items-center justify-center rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={previousAriaLabel}
        >
          <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="inline-flex items-center justify-center rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={nextAriaLabel}
        >
          <ChevronRight className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
        </button>
      </div>
    </div>
  )
}
