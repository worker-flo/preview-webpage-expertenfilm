"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  ChevronsDown,
  ChevronsUp,
  Trophy,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type KundenergebnisseCtaVariant =
  | "hero"
  | "footer"
  | "prozess"
  | "kontakt"

const COPY = {
  title: {
    hero: "Zu den Kundenergebnissen",
    footer: "Zu den Kundenergebnissen",
    prozess: "Zu den Kundenergebnissen",
    kontakt: "Zurück zu Kundenergebnissen",
  },
  description: {
    hero: "Fallstudien, Referenzen & Video-Highlights",
    footer: "Fallstudien & Testimonials",
    prozess: "unsere Cases & Stimmen ansehen",
    kontakt: "Kundenergebnisse & Testimonials",
  },
} as const

export type KundenergebnisseCtaProps = {
  variant?: KundenergebnisseCtaVariant
  href?: string
  title?: string
  description?: string
  className?: string
}

export function KundenergebnisseCta({
  variant = "hero",
  href = "/#kundenergebnisse",
  title,
  description,
  className,
}: KundenergebnisseCtaProps) {
  const resolvedTitle = title ?? COPY.title[variant]
  const resolvedDescription = description ?? COPY.description[variant]

  if (variant === "kontakt") {
    return (
      <Link
        href={href}
        className={cn(
          "group mt-10 flex w-full items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#050b18]/80 px-5 py-4 transition-colors hover:border-teal-500/25 hover:bg-[#0a1228]/90 lg:mt-auto",
          className,
        )}
      >
        <div className="min-w-0 text-left">
          <p className="font-bold text-white">{resolvedTitle}</p>
          <p className="mt-1 text-sm text-slate-400">{resolvedDescription}</p>
        </div>
        <ArrowUpRight
          className="h-8 w-8 shrink-0 text-teal-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
          aria-hidden
        />
      </Link>
    )
  }

  if (variant === "footer") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#050b14]/80 px-4 py-3 transition-colors hover:border-slate-600 hover:bg-[#0a1420]/90",
          className,
        )}
      >
        <div className="min-w-0 text-left">
          <p className="font-bold text-white">{resolvedTitle}</p>
          <p className="mt-0.5 text-xs text-slate-400">
            {resolvedDescription}
          </p>
        </div>
        <ChevronsUp
          className="h-7 w-7 shrink-0 text-cyan-400"
          strokeWidth={1.75}
          aria-hidden
        />
      </Link>
    )
  }

  if (variant === "prozess") {
    return (
      <Link
        href={href}
        className={cn(
          "group border border-[#5b62e5]/50 bg-[#0a0d3a]/65 rounded-xl px-5 py-4 text-left transition-all duration-300 hover:border-[#00ffc4]/60",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">{resolvedTitle}</p>
            <p className="text-sm text-white/60">{resolvedDescription}</p>
          </div>
          <Trophy
            className="h-5 w-5 shrink-0 text-[#00ffc4]"
            aria-hidden
          />
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-xl border border-[#5b62e5]/50 bg-[#0a0d3a]/60 px-6 py-5 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#00ffc4]/50 hover:bg-[#0a0d3a]/80",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-white">
              {resolvedTitle}
            </span>
            <ChevronsDown
              className="h-6 w-6 shrink-0 text-[#00ffc4]"
              aria-hidden
            />
          </div>
          <p className="mt-1 text-sm text-white/60">{resolvedDescription}</p>
        </div>
      </div>
    </Link>
  )
}
