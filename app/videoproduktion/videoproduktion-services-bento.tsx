"use client"

import type { ComponentType, ReactNode } from "react"
import {
  BadgeCheck,
  Clapperboard,
  MessagesSquare,
  Workflow,
} from "lucide-react"

import { cn } from "@/lib/utils"

const ACCENT = "text-[#00ffc4]"
const CARD =
  "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-7"

const SERVICES = [
  {
    key: "testimonials",
    title: "Authentische Testimonials",
    Icon: MessagesSquare,
    body: (
      <>
        Wir fangen echte Stimmen ein, die Vertrauen aufbauen und Einwände Ihrer
        Zielgruppe gezielt entkräften.{" "}
        <strong className="font-semibold text-slate-200">
          Authentische Testimonials
        </strong>{" "}
        wirken stärker als jedes Werbeversprechen.
      </>
    ),
    gridClass: "md:col-span-1 md:row-start-1 md:col-start-1 hover-scale-1_02 hover-glow-teal",
  },
  {
    key: "storytelling",
    title: "Strategisches Storytelling",
    Icon: Workflow,
    body: (
      <>
        Basierend auf einer tiefen Situationsanalyse entwickeln wir Skripte,
        die präzise auf Ihre Verkaufsziele einzahlen und Ihre Positionierung
        klar transportieren.
      </>
    ),
    gridClass:
      "md:col-start-2 md:row-span-1 md:row-start-1 md:min-h-[min(22rem,52vh)] hover-scale-1_02 hover-glow-teal",
  },
  {
    key: "synergy",
    title: "Synergie-Effekt",
    Icon: BadgeCheck,
    body: (
      <>
        Einmal drehen, überall nutzen: Ihre Videos werden zum Herzstück für
        Social Media, Landingpages und Ads - konsistent, effizient und
        skalierbar.
      </>
    ),
    gridClass: "md:col-start-1 md:row-start-2 hover-scale-1_02 hover-glow-teal",
  },
  {
    key: "cinema-meets-marketing",
    title: "Kinoqualität trifft Marketing",
    Icon: Clapperboard,
    body: (
      <>
        High-End Equipment trifft auf Performance-Mindset. Wir produzieren
        Ästhetik mit Fokus auf maximale Effektivität, damit jedes Video nicht
        nur gut aussieht, sondern auch messbar verkauft.
      </>
    ),
    gridClass: "md:col-span-1 md:col-start-2 md:row-start-2 hover-scale-1_02 hover-glow-teal",
  },
] as const

function ServiceCard({
  title,
  body,
  icon: IconEl,
  IconLucide,
  gridClass,
}: {
  title: string
  body: ReactNode
  icon?: ComponentType<{ className?: string }>
  IconLucide?: ComponentType<{ className?: string }>
  gridClass: string
}) {
  return (
    <article
      className={cn(
        CARD,
        "transition-transform duration-300",
        gridClass,
      )}
    >
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex items-start gap-4">
          {IconEl ? (
            <IconEl />
          ) : IconLucide ? (
            <IconLucide
              className={cn("h-10 w-10 shrink-0 stroke-[1.8]", ACCENT)}
              aria-hidden
            />
          ) : null}
          <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-base leading-relaxed text-slate-400">{body}</p>
      </div>
    </article>
  )
}

export function VideoproduktionServicesBento() {
  return (
    <section
      aria-labelledby="videoproduktion-services-heading"
      className="relative border-t border-white/10 py-16 md:py-24"
    >
      <div className="px-6 lg:px-8 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        <h2
          id="videoproduktion-services-heading"
          className="mb-10 text-center text-2xl font-bold tracking-tight text-white md:mb-14 md:text-3xl"
        >
          Services im Überblick
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2">
          {SERVICES.map((item) => (
            <ServiceCard
              key={item.key}
              title={item.title}
              body={item.body}
              IconLucide={"Icon" in item ? item.Icon : undefined}
              gridClass={item.gridClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
