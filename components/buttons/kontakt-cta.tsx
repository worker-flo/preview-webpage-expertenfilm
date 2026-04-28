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
          "smm-btn-surface group inline-flex w-fit max-w-full rounded-xl px-5 py-4 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
          "smm-btn-surface inline-flex w-fit max-w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
          "smm-btn-surface group inline-flex w-fit max-w-[36rem] flex-col rounded-xl px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          className,
        )}
      >
        <span className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-white">
            {resolvedTitle}
          </span>
          <ChevronsDown
            className="h-6 w-6 shrink-0 text-teal-400"
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
        "smm-btn-surface group relative inline-flex w-fit max-w-full items-center justify-center rounded-xl px-6 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
