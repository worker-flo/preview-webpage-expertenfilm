'use client'

import * as React from 'react'
import useEmblaCarousel from "embla-carousel-react"
import { Plus } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  mail: string
  mobile: string
  text: string
}

const TEAM: TeamMember[] = [
  {
    name: "Julian Becker",
    role: "Gründer",
    imageUrl:
      "/images/team/julian_no_bg.png",
    mail: "julian.becker@expertenfilm.de",
    mobile: "0171 8702628",
    text:
      "Julian verantwortet die strategische Ausrichtung von EXPERTENFILM und begleitet Projekte von der ersten Idee bis zur finalen Umsetzung.",
  },
  {
    name: "Julius Schmidt",
    role: "Editor & Videograf",
    imageUrl:
    "/images/team/julius_no_bg.png",
    mail: "julius.schmidt@expertenfilm.de",
    mobile: "+49 1523 1059050",
    text:
      "Julius sorgt als Editor und Videograf für einen präzisen Schnitt und visuelle Qualität, die Marken klar und hochwertig positioniert.",
  },
  {
    name: "Pepe Kappitz",
    role: "Cutter & Feel Good Manager",
    imageUrl:
    "/images/team/pepe_no_bg.png",
    mail: "pepe.kappitz@expertenfilm.de",
    mobile: "-",
    text:
      "Pepe verbindet strukturiertes Postproduktions-Handwerk mit einem sicheren Gespür für Storytelling und Teamdynamik am Set.",
  },
  {
    name: "Leon Becker",
    role: "Projektmanager",
    imageUrl:
    "/images/team/leon_no_bg.png",
    mail: "leon.becker@expertenfilm.de",
    mobile: "+49 171 3205301",
    text:
      "Leon steuert Timings, Abstimmungen und Abläufe, damit jedes Kundenprojekt effizient geplant und zuverlässig umgesetzt wird.",
  },
  {
    name: "Steffen Kronberg",
    role: "Social Media Manager",
    imageUrl:
    "/images/team/steffen_no_bg.png",
    mail: "steffen.kronberg@expertenfilm.de",
    mobile: "+49 176 71610747",
    text:
      "Steffen ist unser Kompass in der sich ständig drehenden Social-Media-Welt. Als Social Media Manager hat er nicht nur die Algorithmen im Griff, sondern weiß genau, wie wir aus flüchtigen Trends echte Markenmomente machen.",
  },
]

function vorname(fullName: string) {
  return fullName.split(" ")[0] ?? fullName
}

const GRID_START: Record<number, string> = {
  0: "lg:col-span-2 lg:col-start-1",
  1: "lg:col-span-2 lg:col-start-3",
  2: "lg:col-span-2 lg:col-start-5",
  3: "lg:col-span-2 lg:col-start-2",
  4: "lg:col-span-2 lg:col-start-4",
}

function TeamMemberCard({
  member,
  index,
  isLastSingleRow,
}: {
  member: TeamMember
  index: number
  isLastSingleRow: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [isResetting, setIsResetting] = React.useState(false)
  const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 })
  const panelId = `team-dd-${index}`
  const cardRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsResetting(false)
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const normalizedX = (x - centerX) / centerX
    const normalizedY = (y - centerY) / centerY

    setTilt({
      rotateX: normalizedY * -6,
      rotateY: normalizedX * 8,
      x: normalizedX * 8,
      y: normalizedY * 6,
    })
  }

  const handleMouseLeave = () => {
    setIsResetting(true)
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 })
  }

  return (
    <article
      className={cn(
        "mx-auto flex w-full max-w-sm flex-col",
        isLastSingleRow &&
          "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[320px]",
        GRID_START[index],
      )}
    >
      <div
        ref={cardRef}
        className="relative isolate mx-auto w-full max-w-[280px] sm:max-w-[300px]"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hintere Glass-Ebene*/}
        <div
          aria-hidden
          className="pointer-events-none absolute left-5 top-5 z-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-2xl border border-white/15 bg-[#050a14]/95 transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${tilt.x * 1.2 * -0.6}px, ${tilt.y * 1.2 * -0.6}px, 0)`,
            transitionDuration: isResetting ? "5000ms" : "200ms",
          }}
        />

        {/* Porträt + Overlay */}
        <div
          className="relative z-10 mt-2 ml-0 overflow-hidden rounded-2xl border border-white/15 bg-[#050a14]/95 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out sm:ml-1"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(${tilt.x * 1.2 * 0.35}px, ${tilt.y * 1.2  * 0.35}px, 0)`,
            transformStyle: "preserve-3d",
            transitionDuration: isResetting ? "5000ms" : "200ms",
          }}
        >
          <div className="relative aspect-[3/4] w-full">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/75 px-4 py-3 backdrop-blur-md">
              <p className="text-lg font-bold leading-tight text-white">
                {member.name}
              </p>
              <p className="mt-1 text-sm font-normal text-white/85">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-[280px] sm:max-w-[300px] lg:mx-auto">
        <button
          type="button"
          id={`${panelId}-trigger`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-[#050a14]/95 px-4 py-3 text-left text-white transition-colors duration-200 ease-in-out hover:border-[#00ffc4]/40 hover:bg-[#0a1424]"
        >
          <span className="text-sm font-medium">
            Über {vorname(member.name)}
          </span>
          <Plus
            className={cn(
              "h-5 w-5 shrink-0 text-[var(--color-accent-teal)] transition-transform duration-200 ease-in-out group-hover:scale-110",
              open && "rotate-45",
            )}
            strokeWidth={2.25}
            aria-hidden
          />
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={`${panelId}-trigger`}
          className={cn(
            "overflow-hidden transition-[max-height,opacity,margin-top] duration-200 ease-in-out",
            open
              ? "mt-3 max-h-80 opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="rounded-lg border border-white/15 bg-[#050a14]/95 px-4 py-3 text-left text-sm leading-relaxed text-slate-300 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">Mail:</span>{" "}
                <a
                  href={`mailto:${member.mail}`}
                  className="text-slate-200 underline decoration-white/25 underline-offset-4 transition-colors hover:text-[var(--color-accent-teal)]"
                >
                  {member.mail}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Mobil:</span>{" "}
                <a
                  href={`tel:${member.mobile.replace(/\s+/g, "")}`}
                  className="text-slate-200 underline decoration-white/25 underline-offset-4 transition-colors hover:text-[var(--color-accent-teal)]"
                >
                  {member.mobile}
                </a>
              </p>
              <p>{member.text}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Team() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selected, setSelected] = React.useState(0)

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

  return (
    <section
      id="team"
      className="section-spotlight section-spotlight--violet border-t border-white/10 py-20 font-sans text-white md:py-24"
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-8 sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          Das Expertenfilm-Team
        </h2>

        <div className="mt-12 md:hidden">
          <div className="min-w-0 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TEAM.map((member, index) => (
                <div
                  key={`${member.name}-mobile-${index}`}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <TeamMemberCard
                    member={member}
                    index={index}
                    isLastSingleRow={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="smm-btn-icon inline-flex items-center justify-center rounded-full p-1"
              aria-label="Vorheriges Teammitglied"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="smm-btn-icon inline-flex items-center justify-center rounded-full p-1"
              aria-label="Naechstes Teammitglied"
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="mt-14 hidden grid-cols-1 justify-items-center gap-x-8 gap-y-14 sm:mt-16 md:grid md:grid-cols-2 md:justify-items-stretch lg:mt-20 lg:grid-cols-6 lg:justify-items-stretch lg:gap-x-10 lg:gap-y-16">
          {TEAM.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              isLastSingleRow={
                index === TEAM.length - 1 && TEAM.length % 2 === 1
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
