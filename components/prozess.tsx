"use client"

import { useRef } from "react"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BarChart3, Bot, Clapperboard, Megaphone, Search, Target, UsersRound } from "lucide-react"

import { KontaktCta, KundenergebnisseCta, PortfolioCta } from "@/components/buttons"

const steps = [
  {
    icon: BarChart3,
    animated: true,
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

function AudienceAnalysisIcon({ iconSizeClass, lensSizeClass }: { iconSizeClass: string; lensSizeClass: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <UsersRound className={`${iconSizeClass} text-[#00ffc4] stroke-[1.9]`} />

      <motion.div
        className="absolute right-1"
        animate={{ x: [0, 10, 0], y: [0, -10, 0]}}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Search className={`${lensSizeClass} text-[#00ffc4] stroke-[3.5]`} />
      </motion.div>
    </div>
  )
}

const iconAnimations = [
  {
    animate: {scale: [1, 1.14, 1]},
    transition: { duration: 1.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
  },
  {
    animate: { rotate: [0, 12, 0], scale: [1, 1.1, 1] },
    transition: { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
  },
  {
    animate: { scale: [1, 1.15, 1], opacity: [1, 0.88, 1] },
    transition: { duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
  },
  {
    animate: { scale: [1, 1.16, 1]},
    transition: { duration: 1.85, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
  },
]

const iconSizeConfig = {
  desktop: {
    container: "h-[4.8rem] w-[4.8rem]",
    icon: "h-[2.4rem] w-[2.4rem]",
    lens: "h-[1.8rem] w-[1.8rem]",
  },
  mobile: {
    container: "h-[4.2rem] w-[4.2rem]",
    icon: "h-[2.1rem] w-[2.1rem]",
    lens: "h-[1.2rem] w-[1.2rem]",
  },
}

export function Prozess() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<Array<HTMLDivElement | null>>([])
  const [lineBounds, setLineBounds] = useState({ top: 10, bottom: 60, left: 28 })

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
      const left = firstRect.left - containerRect.left + firstRect.width / 2

      setLineBounds({
        top: Math.max(0, top),
        bottom: Math.max(0, bottom),
        left: Math.max(0, left),
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
    <section id="prozess" className="section-spotlight section-spotlight--mixed bg-transparent border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
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
                className="hidden md:block absolute w-px bg-white/20"
                style={{ left: `${lineBounds.left}px`, top: `${lineBounds.top}px`, bottom: `${lineBounds.bottom}px` }}
                aria-hidden="true"
              />
              <motion.div
                className="hidden md:block absolute w-px origin-top bg-[#00ffc3]"
                style={{
                  left: `${lineBounds.left}px`,
                  top: `${lineBounds.top}px`,
                  bottom: `${lineBounds.bottom}px`,
                  scaleY: accentLineScaleY,
                }}
                aria-hidden="true"
              />

              {steps.map((step, index) => (
                <article key={index} className="relative md:pl-32">
                  <div
                    ref={(element) => {
                      iconRefs.current[index] = element
                    }}
                    className={`hidden md:flex absolute left-0 top-8 ${iconSizeConfig.desktop.container} items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95`}
                  >
                    {step.animated ? (
                      <AudienceAnalysisIcon
                        iconSizeClass={`${iconSizeConfig.desktop.icon} text-white/75`}
                        lensSizeClass={`${iconSizeConfig.desktop.lens} text-[#00ffc4]`}
                      />
                    ) : (
                      <motion.div
                        animate={iconAnimations[index - 1]?.animate}
                        transition={iconAnimations[index - 1]?.transition}
                      >
                        <step.icon className={`${iconSizeConfig.desktop.icon} text-[#00ffc4] stroke-[1.8]`} />
                      </motion.div>
                    )}
                  </div>

                  <div className="hover-glow-teal h-full rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] smm-card-hover md:p-8">
                    <div
                      className={`md:hidden mb-4 ${iconSizeConfig.mobile.container} flex items-center justify-center rounded-lg border border-white/15 bg-[#050a14]/95`}
                    >
                      {step.animated ? (
                        <AudienceAnalysisIcon
                          iconSizeClass={iconSizeConfig.mobile.icon}
                          lensSizeClass={iconSizeConfig.mobile.lens}
                        />
                      ) : (
                        <motion.div
                          animate={iconAnimations[index - 1]?.animate}
                          transition={iconAnimations[index - 1]?.transition}
                        >
                          <step.icon className={`${iconSizeConfig.mobile.icon} text-[#00ffc4] stroke-[1.8]`} />
                        </motion.div>
                      )}
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
