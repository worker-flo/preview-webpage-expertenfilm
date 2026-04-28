"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, CornerDownRight } from "lucide-react"

import { cn } from "@/lib/utils"

export const challengeToggleBadgeClassName =
  "mb-12 ml-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-[#00ffc3]/20 group-hover:text-slate-300 group-focus-visible:border-[#00ffc3]/20 group-focus-visible:text-slate-300"

export type HerausforderungSlide = {
  icon: React.ReactNode
  title: string
  afterTitle?: string
  beforeText: string
  afterPoints: string[]
}

type HerausforderungenSliderProps = {
  slides: HerausforderungSlide[]
  previousAriaLabel?: string
  nextAriaLabel?: string
}

export function HerausforderungenSlider({
  slides,
  previousAriaLabel = "Vorherige Herausforderung",
  nextAriaLabel = "Naechste Herausforderung",
}: HerausforderungenSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selected, setSelected] = React.useState(0)
  const [activeCards, setActiveCards] = React.useState<boolean[]>(
    slides.map(() => false),
  )

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

  const toggleCard = React.useCallback((index: number) => {
    setActiveCards((prev) =>
      prev.map((isActive, currentIndex) =>
        currentIndex === index ? !isActive : isActive,
      ),
    )
  }, [])

  React.useEffect(() => {
    setActiveCards(slides.map(() => false))
  }, [slides])

  return (
    <div className="w-full">
      <div className="min-w-0 overflow-hidden max-w-2xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {slides.map((challenge, index) => (
            <div
              key={`${challenge.title}-${index}`}
              className="flex min-w-0 shrink-0 grow-0 basis-full justify-center px-4"
            >
              <button
                type="button"
                onClick={() => toggleCard(index)}
                className="group flex h-full w-full max-w-lg rounded-xl focus:outline-none"
                aria-pressed={activeCards[index]}
                aria-label={`${challenge.title} ${activeCards[index] ? "zuruecksetzen" : "aktivieren"}`}
              >
                <div className="h-full w-full flex-1 flex flex-col rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 transition duration-300 group-hover:scale-[1.01] group-hover:border-white/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:scale-[1.01] group-focus-visible:border-white/25 group-focus-visible:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40">
                  <div className={challengeToggleBadgeClassName}>
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                    </span>
                    Klicken zum Umschalten
                  </div>

                  <div className="mb-6 mx-auto">
                    <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95">
                      {challenge.icon}
                    </div>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {activeCards[index]
                      ? challenge.afterTitle ?? challenge.title
                      : challenge.title}
                  </h3>

                  <div className="mt-auto space-y-4">
                    <p className="leading-relaxed text-slate-400">{challenge.beforeText}</p>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        activeCards[index]
                          ? "mt-1 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                      aria-hidden={!activeCards[index]}
                    >
                      <ul className="space-y-2 overflow-hidden">
                        {challenge.afterPoints.map((point, pointIndex) => (
                          <li
                            key={`${challenge.title}-${pointIndex}`}
                            className="flex items-start gap-2.5"
                          >
                            <CornerDownRight
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                            <span className="leading-relaxed text-[#00ffc3]">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
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
