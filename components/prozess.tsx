"use client"

import { useRef } from "react"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BarChart3, Bot, Clapperboard, Megaphone, Target } from "lucide-react"

import { KontaktCta, KundenergebnisseCta, PortfolioCta } from "@/components/buttons"

const steps = [
  {
    icon: BarChart3,
    title: "1. Zielgruppenanalyse",
    description:
      "Bevor es losgeht, definieren wir Ihre Zielgruppe glasklar. So entstehen Inhalte, die echte Aufmerksamkeit erzeugen und Vertrauen aufbauen.",
  },
  {
    icon: Clapperboard,
    title: "2. Ein Drehtag - alles abgedeckt",
    description:
      "An einem Tag produzieren wir den gesamten Content für mehrere Wochen. Effizient geplant, hochwertig umgesetzt und perfekt auf Ihre Marke abgestimmt.",
  },
  {
    icon: Bot,
    title: "3. Produktion mit KI-Boost",
    description:
      "Das Material wird zu starken Clips, Reels und Werbeanzeigen veredelt. KI-Workflows beschleunigen den Prozess und erhöhen die Qualität.",
  },
  {
    icon: Megaphone,
    title: "4. Performance Marketing für schnelle Ergebnisse",
    description:
      "Mit zielgerichteten Kampagnen bringen wir Ihre Inhalte in die Sichtbarkeit. Der Fokus liegt auf messbarer Reichweite und qualifizierten Leads.",
  },
  {
    icon: Target,
    title: "5. Skalierung - gewinnen & wachsen",
    description:
      "Was funktioniert, wird systematisch skaliert. So entsteht ein planbarer Prozess für nachhaltige Anfragen und stabiles Wachstum.",
  },
]

export function Prozess() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<Array<HTMLDivElement | null>>([])
  const [lineBounds, setLineBounds] = useState({ top: 10, bottom: 60 })

  useEffect(() => {
    const updateLineBounds = () => {
      const container = stepsRef.current
      const firstIcon = iconRefs.current[0]
      const lastIcon = iconRefs.current[steps.length - 1]

      if (!container || !firstIcon || !lastIcon) return

      const containerRect = container.getBoundingClientRect()
      const firstRect = firstIcon.getBoundingClientRect()
      const lastRect = lastIcon.getBoundingClientRect()

      const top = firstRect.top - containerRect.top + firstRect.height / 2
      const bottom = containerRect.bottom - (lastRect.top + lastRect.height / 2)

      setLineBounds({
        top: Math.max(0, top),
        bottom: Math.max(0, bottom),
      })
    }

    updateLineBounds()

    const resizeObserver = new ResizeObserver(() => updateLineBounds())
    if (stepsRef.current) {
      resizeObserver.observe(stepsRef.current)
    }
    window.addEventListener("resize", updateLineBounds)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateLineBounds)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 75%", "end 35%"],
  })
  const accentLineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  return (
    <section id="prozess" className="bg-transparent py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          <div className="lg:sticky lg:top-[30%] text-center h-fit">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Mit <span className="text-[#00ffc4]">5 Schritten</span>
              <br />
              in <span className="text-[#00ffc4]">5 Wochen</span>
              <br />
              zu ersten Ergebnissen
            </h2>
          </div>

          <div className="relative">
            <div ref={stepsRef} className="relative space-y-8">
              <div
                className="hidden md:block absolute left-7 w-px bg-white/20"
                style={{ top: `${lineBounds.top}px`, bottom: `${lineBounds.bottom}px` }}
                aria-hidden="true"
              />
              <motion.div
                className="hidden md:block absolute left-7 w-px origin-top bg-[#00ffc3]"
                style={{
                  top: `${lineBounds.top}px`,
                  bottom: `${lineBounds.bottom}px`,
                  scaleY: accentLineScaleY,
                }}
                aria-hidden="true"
              />

              {steps.map((step, index) => (
                <article key={index} className="relative md:pl-20">
                  <div
                    ref={(element) => {
                      iconRefs.current[index] = element
                    }}
                    className="hidden md:flex absolute left-0 top-8 w-14 h-14 rounded-xl border border-white/15 bg-[#0a0d3a]/75 backdrop-blur-md items-center justify-center"
                  >
                    <step.icon className="w-7 h-7 text-[#00ffc4] stroke-[1.8]" />
                  </div>

                  <div className="h-full rounded-2xl border border-white/10 bg-[#121739]/60 backdrop-blur-md p-6 md:p-8">
                    <div className="md:hidden mb-4 w-12 h-12 rounded-lg border border-white/15 bg-[#0a0d3a]/70 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#00ffc4] stroke-[1.8]" />
                    </div>

                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <KontaktCta variant="prozess" />
              <PortfolioCta variant="prozess" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
