"use client"

import type { ComponentType, ReactNode } from "react"
import { motion } from "framer-motion"
import { Mail, Route, UserSquare } from "lucide-react"

import { cn } from "@/lib/utils"

const ACCENT = "text-[#00ffc4]"
const CARD =
  "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-7"

function AbstractAiAudienceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-11 shrink-0", ACCENT, className)}
      aria-hidden
    >
      <circle cx="22" cy="26" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="26" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="42" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M26 26 L32 36 M38 26 L32 36"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={0.7}
      />
      <circle cx="48" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M44 14 L38 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 44 Q32 52 50 44"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="3 4"
        opacity={0.55}
      />
    </svg>
  )
}

const SERVICES = [
  {
    key: "analyse",
    title: "Analyse der Zielgruppe mit KI",
    icon: AbstractAiAudienceIcon,
    body: (
      <>
        Wir trainieren maßgeschneiderte KI-Agenten mit Ihren Daten, um Ihre
        Zielgruppe besser zu verstehen als die Konkurrenz.
      </>
    ),
    gridClass:
      "md:col-span-2 md:row-start-1 md:col-start-1",
  },
  {
    key: "content",
    title: "Strategische Content Planung",
    Icon: Route,
    body: (
      <>
        Wir nutzen{" "}
        <strong className="font-semibold text-slate-200">KI-Analysen</strong>,
        um genau die Botschaften zu finden, die Ihre Lead-Kosten senken.
      </>
    ),
    gridClass:
      "md:col-start-3 md:row-span-2 md:row-start-1 md:min-h-[min(22rem,52vh)]",
  },
  {
    key: "smm",
    title: "Social Media Management",
    Icon: UserSquare,
    body: (
      <>
        Wir entwickeln Ihre einzigartige Markenpersönlichkeit, die Sie von der
        Masse abhebt.{" "}
        <strong className="font-semibold text-slate-200">
          Echter Charakter
        </strong>{" "}
        statt Stockfotos und Floskeln.
      </>
    ),
    gridClass: "md:col-start-1 md:row-start-2",
  },
  {
    key: "leads",
    title: "Lead Generierung",
    Icon: Mail,
    body: (
      <>
        Wir verwandeln Aufmerksamkeit in messbare Ergebnisse. Mehr Leads, mehr
        Umsatz, mehr Gewinn.
      </>
    ),
    gridClass: "md:col-span-2 md:col-start-2 md:row-start-2",
  },
]

const TOOLS = [
  "Meta Ads Manager",
  "Google Analytics 4",
  "Looker Studio",
  "ChatGPT / GPT",
  "Claude",
  "HubSpot",
  "Make.com",
  "Zapier",
  "Notion",
  "CapCut",
  "Descript",
  "Semrush",
]

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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(CARD, gridClass)}
    >
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex items-start gap-4">
          {IconEl ? (
            <IconEl />
          ) : IconLucide ? (
            <IconLucide
              className={cn("h-10 w-10 shrink-0 stroke-[1.75]", ACCENT)}
              aria-hidden
            />
          ) : null}
          <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-base leading-relaxed text-slate-400">{body}</p>
      </div>
    </motion.div>
  )
}

export function SocialMediaServicesBento() {
  const marqueeTrack = [...TOOLS, ...TOOLS]

  return (
    <>
      <section
        aria-labelledby="social-media-services-heading"
        className="relative border-t border-white/10 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            id="social-media-services-heading"
            className="mb-10 text-center text-2xl font-bold tracking-tight text-white md:mb-14 md:text-3xl"
          >
            Services im Überblick
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-6">
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

      <section
        aria-labelledby="tools-heading"
        className="relative border-t border-white/10 bg-black/20 py-14 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            id="tools-heading"
            className="text-center text-xl font-bold text-white md:text-2xl"
          >
            Tools, die wir nutzen
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-slate-400 md:text-lg">
            Sehen Sie im Folgenden die konkreten KI-Methoden, mit denen wir Ihre
            Social-Media-Präsenz skalieren.{" "}
            <strong className="font-semibold text-slate-200">
              Dynamisches Creative-Testing
            </strong>{" "}
            bis hin zur{" "}
            <strong className="font-semibold text-slate-200">
              automatisierten Lead-Qualifizierung
            </strong>{" "}
            – wir setzen auf Tools, die Ihre Prozesse beschleunigen und Ihren
            Marketing-ROI messbar steigern.
          </p>

          <div className="relative mt-10 overflow-hidden md:mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#020617] to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#020617] to-transparent md:w-24" />

            <div
              data-smm-marquee
              className="flex w-max gap-4 md:gap-6"
              style={{
                animation: "smm-marquee 42s linear infinite",
              }}
            >
              {marqueeTrack.map((label, i) => (
                <span
                  key={`${label}-${i}`}
                  className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm md:px-6 md:text-base"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
