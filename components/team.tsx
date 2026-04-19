'use client'

import * as React from 'react'
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

type TeamMember = {
  name: string
  role: string
  imageUrl: string
}

const TEAM: TeamMember[] = [
  {
    name: "Julian Becker",
    role: "Gründer",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=640&q=80&auto=format&fit=crop",
  },
  {
    name: "Julius Schmidt",
    role: "Editor & Videograf",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&q=80&auto=format&fit=crop",
  },
  {
    name: "Pepe Kappitz",
    role: "Cutter & Feel Good Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7c76b?w=640&q=80&auto=format&fit=crop",
  },
  {
    name: "Leon Becker",
    role: "Projektmanager",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80&auto=format&fit=crop",
  },
  {
    name: "Steffen Kronberg",
    role: "Social Media Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&q=80&auto=format&fit=crop",
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
  const panelId = `team-dd-${index}`

  return (
    <article
      className={cn(
        "flex w-full max-w-sm flex-col sm:max-w-none",
        isLastSingleRow &&
          "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[320px]",
        GRID_START[index],
      )}
    >
      <div className="relative isolate mx-auto w-full max-w-[280px] sm:max-w-[300px]">
        {/* Glas-Ebenen (hinten, versetzt) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-2 top-2 z-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-5 top-5 z-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
        />

        {/* Porträt + Overlay */}
        <div className="relative z-10 mt-2 ml-1 overflow-hidden rounded-2xl border border-white/20 bg-slate-900/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
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

      <div className="mt-4 w-full max-w-[280px] sm:max-w-[300px] lg:mx-auto">
        <button
          type="button"
          id={`${panelId}-trigger`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-3 rounded-lg border border-white/20 bg-[#050a14] px-4 py-3 text-left text-white transition-colors duration-200 ease-in-out hover:border-cyan-400/30 hover:bg-[#0a1424]"
        >
          <span className="text-sm font-medium">
            Über {vorname(member.name)}
          </span>
          <Plus
            className={cn(
              "h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-200 ease-in-out group-hover:scale-110",
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
          <div className="rounded-lg border border-white/15 bg-[#050a14]/95 px-4 py-3 text-left text-sm leading-relaxed text-slate-300">
            <p>
              Platzhalter: Hier erscheint später ein kurzer Steckbrief zu{' '}
              {vorname(member.name)} – Schwerpunkte, Erfahrung und was Sie in
              der Zusammenarbeit erwartet.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-white/10 bg-[#020617] bg-[radial-gradient(ellipse_at_50%_0%,rgba(30,58,138,0.15)_0%,transparent_55%)] py-20 font-sans text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          Das Expertenfilm-Team
        </h2>

        <div className="mt-14 grid grid-cols-1 justify-items-center gap-x-8 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:justify-items-stretch lg:mt-20 lg:grid-cols-6 lg:justify-items-stretch lg:gap-x-10 lg:gap-y-16">
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
