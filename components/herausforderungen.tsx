"use client"

import { useState } from "react"
import { CornerDownRight, Dices, Swords, RefreshCwOff } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  HerausforderungenSlider,
  challengeToggleBadgeClassName,
  type HerausforderungSlide,
} from "@/components/asset-components/slider-herausforderungen"

const challengeOne: HerausforderungSlide = {
  icon: <Dices className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
  title: "Kundengewinnung über Online-Kanäle funktioniert nicht planbar.",
  beforeText:
    "Die Neukundengewinnung ist unberechenbar oder funktioniert überhaupt nicht. Nachhaltige und planbare Ergebnisse bleiben aus.",
  afterPoints: [
    "[PLACEHOLDER NACH KLICK] Alte Vorgehensweisen werden verworfen.",
    "[PLACEHOLDER NACH KLICK] Ein strukturierter, planbarer Prozess wird eingefuehrt.",
  ],
}

const challengeTwo: HerausforderungSlide = {
  icon: <Swords className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
  title: "Anbieterkampf durch fehlendes Vertrauen in ihr Angebot",
  beforeText:
    "Ihr Angebot ist exzellent, aber potenzielle Kunden verstehen es nicht oder haben kein Vertrauen. Die Folge sind ewige Preis-Diskussionen und verlorene Deals.",
  afterPoints: [
    "[PLACEHOLDER NACH KLICK] Klare Positionierung macht den Mehrwert sofort sichtbar.",
    "[PLACEHOLDER NACH KLICK] Vertrauensstiftender Content liefert planbar qualifizierte Anfragen.",
  ],
}

const challengeThree: HerausforderungSlide = {
  icon: <RefreshCwOff className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
  title: "Veraltete Marketing-Strategien verbrennen Zeit und Geld",
  beforeText:
    "Veraltete Marketing-Strategien kosten Sie täglich Zeit und Geld. Das Angebot ist stark, wird aber nicht sichtbar und erreicht nicht die richtigen Menschen.",
  afterPoints: [
    "[PLACEHOLDER NACH KLICK] Moderne, KI-gestuetzte Kampagnen schaffen Sichtbarkeit.",
    "[PLACEHOLDER NACH KLICK] Klare Prozesse sorgen fuer messbar bessere Ergebnisse.",
  ],
}

const challengeSlides: HerausforderungSlide[] = [
  challengeOne,
  challengeTwo,
  challengeThree,
]

export function Herausforderungen() {
  const [isFirstActive, setIsFirstActive] = useState(false)
  const [isSecondActive, setIsSecondActive] = useState(false)
  const [isThirdActive, setIsThirdActive] = useState(false)

  return (
    <section id="herausforderungen" className="bg-transparent px-5 py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ihre Herausforderungen
          </h2>
          <p className="text-slate-400 text-lg">
            Die folgenden Probleme sind für Sie bald Geschichte
          </p>
        </div>

        <div className="lg:hidden">
          <HerausforderungenSlider slides={challengeSlides} />
        </div>

        {/* Challenge Cards */}
        <div className="hidden lg:flex gap-8 items-start">
          <div className="flex flex-1">
            <button
              type="button"
              onClick={() => setIsFirstActive((prev) => !prev)}
              className="group h-full w-full rounded-xl focus:outline-none"
              aria-pressed={isFirstActive}
              aria-label={`${challengeOne.title} ${isFirstActive ? "zurücksetzen" : "aktivieren"}`}
            >
              <div className="relative grid h-full w-full grid-rows-[auto_auto_auto_auto] gap-6 rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-white/25 group-focus-visible:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40 md:p-8">
                <div className={challengeToggleBadgeClassName}>
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                  </span>
                  Klicken zum Umschalten
                </div>

                <div className="mx-auto">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95">
                    {challengeOne.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white pr-8 text-center">
                  {isFirstActive ? challengeOne.afterTitle ?? challengeOne.title : challengeOne.title}
                </h3>

                <div className="space-y-4 self-end">
                  <p className="leading-relaxed text-slate-400">{challengeOne.beforeText}</p>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      isFirstActive ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                    aria-hidden={!isFirstActive}
                  >
                    <ul className="space-y-2 overflow-hidden">
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeOne.afterPoints[0]}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeOne.afterPoints[1]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-1">
            <button
              type="button"
              onClick={() => setIsSecondActive((prev) => !prev)}
              className="group h-full w-full rounded-xl focus:outline-none"
              aria-pressed={isSecondActive}
              aria-label={`${challengeTwo.title} ${isSecondActive ? "zurücksetzen" : "aktivieren"}`}
            >
              <div className="relative grid h-full w-full grid-rows-[auto_auto_auto_auto] gap-6 rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-white/25 group-focus-visible:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40 md:p-8">
                <div className={challengeToggleBadgeClassName}>
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                  </span>
                  Klicken zum Umschalten
                </div>

                <div className="mx-auto">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95">
                    {challengeTwo.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white pr-8 text-center">
                  {isSecondActive ? challengeTwo.afterTitle ?? challengeTwo.title : challengeTwo.title}
                </h3>

                <div className="space-y-4 self-end">
                  <p className="leading-relaxed text-slate-400">{challengeTwo.beforeText}</p>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      isSecondActive ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                    aria-hidden={!isSecondActive}
                  >
                    <ul className="space-y-2 overflow-hidden">
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeTwo.afterPoints[0]}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeTwo.afterPoints[1]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-1">
            <button
              type="button"
              onClick={() => setIsThirdActive((prev) => !prev)}
              className="group h-full w-full rounded-xl focus:outline-none"
              aria-pressed={isThirdActive}
              aria-label={`${challengeThree.title} ${isThirdActive ? "zurücksetzen" : "aktivieren"}`}
            >
              <div className="relative grid h-full w-full grid-rows-[auto_auto_auto_auto] gap-6 rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-white/25 group-focus-visible:shadow-[0_20px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40 md:p-8">
                <div className={challengeToggleBadgeClassName}>
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                  </span>
                  Klicken zum Umschalten
                </div>

                <div className="mx-auto">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95">
                    {challengeThree.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white pr-8 text-center">
                  {isThirdActive ? challengeThree.afterTitle ?? challengeThree.title : challengeThree.title}
                </h3>

                <div className="space-y-4 self-end">
                  <p className="leading-relaxed text-slate-400">{challengeThree.beforeText}</p>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      isThirdActive ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                    aria-hidden={!isThirdActive}
                  >
                    <ul className="space-y-2 overflow-hidden">
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeThree.afterPoints[0]}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CornerDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffc3]" strokeWidth={1.75} aria-hidden />
                        <span className="leading-relaxed text-[#00ffc3]">{challengeThree.afterPoints[1]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
