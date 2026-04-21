"use client"

import { useState } from "react"
import { Dices, Swords, RefreshCwOff } from "lucide-react"

type Challenge = {
  icon: React.ReactNode
  title: string
  afterTitle?: string
  beforeText: string
  afterText: string
}

const challenges: Challenge[] = [
  {
    icon: <Dices className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Kundengewinnung über Online-Kanäle funktioniert nicht planbar.",
    beforeText:
      "Die Neukundengewinnung ist unberechenbar oder funktioniert überhaupt nicht. Es wird viel probiert, aber nichts liefert nachhaltige und planbare Ergebnisse.",
    afterText:
      "[PLACEHOLDER NACH KLICK] Hier kannst du den Text für den Folgezustand konfigurieren. Beispiel: Alte Vorgehensweisen werden verworfen und durch einen strukturierten, planbaren Prozess ersetzt.",
  },
  {
    icon: <Swords className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Anbieterkampf durch fehlendes Vertrauen",
    beforeText:
      "Ihr Angebot ist exzellent, aber potenzielle Kunden verstehen es nicht oder haben kein Vertrauen. Die Folge sind ewige Preis-Diskussionen und verlorene Deals.",
    afterText:
      "[PLACEHOLDER NACH KLICK] Hier kannst du den Text für den Folgezustand konfigurieren. Beispiel: Durch klare Positionierung und vertrauensstiftenden Content gewinnen Sie planbar qualifizierte Anfragen.",
  },
  {
    icon: <RefreshCwOff className="h-10 w-10 text-[#6B9FFF]" strokeWidth={1.75} />,
    title: "Veraltete Marketing-Strategien verbrennen Zeit und Geld",
    beforeText:
      "Veraltete Marketing-Strategien kosten Sie täglich Zeit und Geld. Das Angebot ist stark, wird aber nicht sichtbar und erreicht nicht die richtigen Menschen.",
    afterText:
      "[PLACEHOLDER NACH KLICK] Hier kannst du den Text für den Folgezustand konfigurieren. Beispiel: Moderne, KI-gestützte Kampagnen sorgen für Sichtbarkeit, klare Prozesse und bessere Ergebnisse.",
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

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="h-full">
              {/* Content Card */}
              <button
                type="button"
                onClick={() => toggleCard(index)}
                className="group h-full w-full rounded-xl focus:outline-none"
                aria-pressed={activeCards[index]}
                aria-label={`${challenge.title} ${activeCards[index] ? "zurücksetzen" : "aktivieren"}`}
              >
                <div className="h-full flex flex-col bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 relative transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] group-focus-visible:-translate-y-0.5 group-focus-visible:border-white/25 group-focus-visible:shadow-[0_16px_40px_rgba(0,0,0,0.35)] group-focus-visible:ring-2 group-focus-visible:ring-[#00ffc3]/40">
                
                {/* Klick Indikation */}
                <div className="mb-12 ml-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-[#00ffc3]/20 group-hover:text-slate-300 group-focus-visible:border-[#00ffc3]/20 group-focus-visible:text-slate-300">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffc3]/30 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffc3]/70" />
                  </span>
                  Klicken zum Umschalten
                </div>

                {/* Icon Box */}
                <div className="mb-6 mx-auto">
                  <div className="w-20 h-20 bg-slate-900/60 border border-white/10 rounded-xl flex items-center justify-center">
                    {challenge.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 pr-8">
                  {activeCards[index] ? challenge.afterTitle ?? challenge.title : challenge.title}
                </h3>
                <p
                  className={
                    activeCards[index]
                      ? "leading-relaxed mt-auto text-[#00ffc3]"
                      : "leading-relaxed mt-auto text-slate-400"
                  }
                >
                  {activeCards[index]
                    ? challenge.afterText
                    : challenge.beforeText}
                </p>
              </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
