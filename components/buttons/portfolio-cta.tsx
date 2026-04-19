"use client"

import Link from "next/link"
import { ChevronsDown, ChevronsUp, MonitorPlay } from "lucide-react"

import { cn } from "@/lib/utils"

export type PortfolioCtaVariant = "hero" | "footer" | "prozess"

const COPY = {
  title: "Zum Portfolio",
  description: {
    hero: "sehen Sie sich unser Portfolio an",
    footer: "sehen Sie sich unser Portfolio an",
    prozess: "sehen Sie sich unsere Cases an",
  },
} as const

export type PortfolioCtaProps = {
  variant?: PortfolioCtaVariant
  href?: string
  title?: string
  description?: string
  className?: string
}

export function PortfolioCta({
  variant = "hero",
  href = "#portfolio",
  title,
  description,
  className,
}: PortfolioCtaProps) {
  const resolvedTitle = title ?? COPY.title
  const resolvedDescription =
    description ?? COPY.description[variant]

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
          <MonitorPlay
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
