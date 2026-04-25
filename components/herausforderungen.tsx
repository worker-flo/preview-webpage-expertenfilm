"use client"

import { useState } from "react"
import { CornerDownRight, Dices, Swords, RefreshCwOff } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  HerausforderungenSlider,
  challengeToggleBadgeClassName,
  type HerausforderungSlide,
} from "@/components/asset-components/slider-herausforderungen"

const challenges: HerausforderungSlide[] = [
  {
    icon: <Dices className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Kundengewinnung über Online-Kanäle funktioniert nicht planbar.",
    beforeText:
      "Die Neukundengewinnung ist unberechenbar oder funktioniert überhaupt nicht. Es wird viel probiert, aber nichts liefert nachhaltige und planbare Ergebnisse.",
    afterPoints: [
      "[PLACEHOLDER NACH KLICK] Alte Vorgehensweisen werden verworfen.",
      "[PLACEHOLDER NACH KLICK] Ein strukturierter, planbarer Prozess wird eingefuehrt.",
    ],
  },
  {
    icon: <Swords className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Anbieterkampf durch fehlendes Vertrauen",
    beforeText:
      "Ihr Angebot ist exzellent, aber potenzielle Kunden verstehen es nicht oder haben kein Vertrauen. Die Folge sind ewige Preis-Diskussionen und verlorene Deals.",
    afterPoints: [
      "[PLACEHOLDER NACH KLICK] Klare Positionierung macht den Mehrwert sofort sichtbar.",
      "[PLACEHOLDER NACH KLICK] Vertrauensstiftender Content liefert planbar qualifizierte Anfragen.",
    ],
  },
  {
    icon: <RefreshCwOff className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Veraltete Marketing-Strategien verbrennen Zeit und Geld",
    beforeText:
      "Veraltete Marketing-Strategien kosten Sie täglich Zeit und Geld. Das Angebot ist stark, wird aber nicht sichtbar und erreicht nicht die richtigen Menschen.",
    afterPoints: [
      "[PLACEHOLDER NACH KLICK] Moderne, KI-gestuetzte Kampagnen schaffen Sichtbarkeit.",
      "[PLACEHOLDER NACH KLICK] Klare Prozesse sorgen fuer messbar bessere Ergebnisse.",
    ],
  },
]

export function Herausforderungen() {
  const [activeCards, setActiveCards] = useState<boolean[]>(
    challenges.map(() => false),
  )

  const toggleCard = (index: number) => {
    setActiveCards((prev) =>
      prev.map((isActive, currentIndex) =>
        currentIndex === index ? !isActive : isActive,
      ),
    )
  }

  return (
    <section id="herausforderungen" className="bg-transparent py-20 px-4 md:px-8">
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
          <HerausforderungenSlider slides={challenges} />
        </div>

        {/* Challenge Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          {challenges.map((challenge, index) => (
            <div key={index} className="h-full flex-1">
              {/* Content Card */}
              <button
                type="button"
                onClick={() => toggleCard(index)}
                className="group h-full w-full rounded-xl focus:outline-none"
                aria-pressed={activeCards[index]}
                aria-label={`${challenge.title} ${activeCards[index] ? "zurücksetzen" : "aktivieren"}`}
              >
                <div className="relative grid grid-rows-[auto_auto_auto_auto] gap-6 h-full w-full rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-white/25 group-focus-visible:shadow-[0_16px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40 md:p-8">
                  
                  {/* Klick Indikation */}
                  <div className={challengeToggleBadgeClassName}>
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                    </span>
                    Klicken zum Umschalten
                  </div>

                  {/* Icon Box */}
                  <div className="mx-auto">
                    <div className="w-20 h-20 bg-slate-900/60 border border-white/10 rounded-xl flex items-center justify-center">
                      {challenge.icon}
                    </div>
                  </div>

                    <h3 className="text-xl font-semibold text-white pr-8 text-center">
                      {activeCards[index] ? challenge.afterTitle ?? challenge.title : challenge.title}
                    </h3>

                    <div className="space-y-4 self-end">
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
    </section>
  )
}
