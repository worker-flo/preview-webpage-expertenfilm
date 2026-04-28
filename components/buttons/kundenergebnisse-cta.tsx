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
          "smm-btn-surface group mt-10 inline-flex w-fit max-w-full items-center justify-between gap-4 rounded-xl px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:mt-auto",
          className,
        )}
      >
        <div className="min-w-0 text-left">
          <p className="font-bold text-white">{resolvedTitle}</p>
          <p className="mt-1 text-sm text-slate-400">{resolvedDescription}</p>
        </div>
        <ArrowUpRight
          className="h-8 w-8 shrink-0 text-[#00ffc4] transition-transform"
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
          "smm-btn-surface group relative inline-flex w-fit max-w-full items-center justify-center gap-4 rounded-xl px-6 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
          className="h-7 w-7 shrink-0 text-[#00ffc4]"
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
          "smm-btn-surface group inline-flex w-fit max-w-full rounded-xl px-5 py-4 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
        "smm-btn-surface group relative inline-flex w-fit max-w-full rounded-xl px-6 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
