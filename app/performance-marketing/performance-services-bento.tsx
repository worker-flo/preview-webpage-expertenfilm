"use client"

import type { ComponentType, ReactNode } from "react"
import { Bot, ChartNoAxesCombined, CircleCheckBig, Clapperboard } from "lucide-react"

import { cn } from "@/lib/utils"

const ACCENT = "text-[#00ffc4]"
const CARD =
  "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-7"

function AbstractCampaignAiIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-11 shrink-0", ACCENT, className)}
      aria-hidden
    >
      <rect x="8" y="12" width="26" height="30" rx="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M14 36V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 36V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 36V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="47" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M52.5 25.5L57 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M39 46C43 42.5 49.5 42.5 54 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity={0.7}
      />
    </svg>
  )
}

const SERVICES = [
  {
    key: "campaigns",
    title: "Datengetriebene Kampagnen",
    icon: AbstractCampaignAiIcon,
    body: (
      <>
        Schaltung von hochkonvertierenden Ads auf den relevanten Kanälen Ihrer
        Zielgruppe, gestützt durch{" "}
        <strong className="font-semibold text-slate-200">
          datenbasierte Entscheidungen
        </strong>
        .
      </>
    ),
    gridClass: "md:col-span-2 md:row-start-1 md:col-start-1",
  },
  {
    key: "creative-optimization",
    title: "Creative Optimierung",
    Icon: ChartNoAxesCombined,
    body: (
      <>
        Wir nutzen KI-Analysen, um die Botschaften zu finden, die Ihre
        Lead-Kosten senken und die Conversion-Rate skalierbar verbessern.
      </>
    ),
    gridClass:
      "md:col-start-3 md:row-span-1 md:row-start-1 md:min-h-[min(22rem,52vh)]",
  },
  {
    key: "lead-qualification",
    title: "Lead Qualifikation",
    Icon: CircleCheckBig,
    body: (
      <>
        Unsere Qualifikations-Logik identifiziert kaufbereite Entscheider und
        sortiert unpassende Anfragen bereits im Funnel aus.
      </>
    ),
    gridClass: "md:col-start-1 md:row-start-2",
  },
  {
    key: "hybrid-creatives",
    title: "Hybride Creatives",
    Icon: Clapperboard,
    body: (
      <>
        Die Basis starker Ads sind hochwertige Videoproduktionen in Kombination
        mit KI-Varianten, damit vor dem Klick schon Vertrauen entsteht.
      </>
    ),
    gridClass: "md:col-span-2 md:col-start-2 md:row-start-2",
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
    <article className={cn(CARD, gridClass)}>
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

export function PerformanceServicesBento() {
  return (
    <>
      <section
        aria-labelledby="performance-services-heading"
        className="relative border-t border-white/10 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            id="performance-services-heading"
            className="mb-10 text-center text-2xl font-bold tracking-tight text-white md:mb-14 md:text-3xl"
          >
            Services im Überblick
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
            {SERVICES.map((item) => (
              <ServiceCard
                key={item.key}
                title={item.title}
                body={item.body}
                icon={"icon" in item ? item.icon : undefined}
                IconLucide={"Icon" in item ? item.Icon : undefined}
                gridClass={item.gridClass}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
