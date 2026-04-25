"use client"

import Link from "next/link"
import {
  ChevronsDown,
  ClipboardList,
  FileText,
  MessageSquare,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type KontaktCtaVariant =
  | "hero"
  | "footer"
  | "prozess"
  | "highlight"
  | "einladung"

const COPY = {
  titleDefault: "Zum Kontaktformular",
  titleEinladung: "Kennenlernen buchen",
  description: {
    hero: "und KI-Marketing-Beratung sichern",
    footer: "unverbindliche KI-Marketing-Beratung sichern",
    prozess: "und unverbindliche Beratung sichern",
    highlight: "unverbindliche KI-Marketing-Beratung sichern",
    einladung:
      "unverbindlich und ohne Verkaufsdruck oder Vertriebs-Gerede",
  },
} as const

export type KontaktCtaProps = {
  variant?: KontaktCtaVariant
  href?: string
  title?: string
  description?: string
  className?: string
}

export function KontaktCta({
  variant = "hero",
  href = "/#kontakt",
  title,
  description,
  className,
}: KontaktCtaProps) {
  const resolvedTitle =
    title ??
    (variant === "einladung" ? COPY.titleEinladung : COPY.titleDefault)
  const resolvedDescription =
    description ?? COPY.description[variant]

  if (variant === "footer") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative inline-flex gap-4 w-fit max-w-full items-center justify-center rounded-xl border border-[#5b62e5]/50 bg-[#0a0d3a]/60 px-6 py-5 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#00ffc4]/50 hover:bg-[#0a0d3a]/80",
          className,
        )}
      >
        <div className="min-w-0 text-left">
          <p className="font-bold text-white">{resolvedTitle}</p>
          <p className="mt-0.5 text-xs text-slate-400">
            {resolvedDescription}
          </p>
        </div>
        <MessageSquare
          className="h-7 w-7 shrink-0 text-[#00ffc4]"
          strokeWidth={1.5}
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
          "group inline-flex w-fit max-w-full border border-[#5b62e5]/50 bg-[#0a0d3a]/65 rounded-xl px-5 py-4 text-left transition-all duration-300 hover:border-[#00ffc4]/60",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">{resolvedTitle}</p>
            <p className="text-sm text-white/60">{resolvedDescription}</p>
          </div>
          <FileText
            className="h-5 w-5 shrink-0 text-[#00ffc4]"
            aria-hidden
          />
        </div>
      </Link>
    )
  }

  if (variant === "highlight") {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex w-fit max-w-full items-center justify-between gap-4 rounded-2xl border border-slate-700/60 bg-[#0b1220]/90 px-5 py-4 transition-colors hover:border-teal-400/40 hover:bg-[#0f172a]/95",
          className,
        )}
      >
        <div className="min-w-0 text-left">
          <p className="text-base font-bold text-white md:text-lg">
            {resolvedTitle}
          </p>
          <p className="mt-1 text-sm font-normal text-white/90 md:text-base">
            {resolvedDescription}
          </p>
        </div>
        <ClipboardList
          className="h-10 w-10 shrink-0 text-teal-400 md:h-11 md:w-11"
          strokeWidth={1.5}
          aria-hidden
        />
      </Link>
    )
  }

  if (variant === "einladung") {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex w-fit max-w-[36rem] flex-col rounded-xl border border-slate-700/80 bg-[#0a1024] px-5 py-4 transition-colors hover:border-teal-500/30 hover:bg-[#0d1530]",
          className,
        )}
      >
        <span className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-white">
            {resolvedTitle}
          </span>
          <ChevronsDown
            className="h-6 w-6 shrink-0 text-teal-400 motion-reduce:group-hover:animate-none group-hover:animate-bounce"
            strokeWidth={2.25}
            aria-hidden
          />
        </span>
        <span className="mt-2 block text-sm text-slate-400">
          {resolvedDescription}
        </span>
      </Link>
    )
  }

  /* hero */
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex w-fit max-w-full items-center justify-center rounded-xl border border-[#5b62e5]/50 bg-[#0a0d3a]/60 px-6 py-5 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#00ffc4]/50 hover:bg-[#0a0d3a]/80",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-lg font-semibold text-white">
              {resolvedTitle}
            </span>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00ffc4]/10">
              <FileText className="h-5 w-5 text-[#00ffc4]" aria-hidden />
            </div>
          </div>
          <p className="mt-1 text-sm text-white/60">{resolvedDescription}</p>
        </div>
      </div>
    </Link>
  )
}
