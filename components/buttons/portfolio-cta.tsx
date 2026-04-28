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
  href = "/portfolio",
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
          "smm-btn-surface group relative inline-flex w-fit max-w-full items-center justify-center gap-4 rounded-xl px-6 py-5 text-left transition-all duration-300 hover:bg-[#0b1b1a] hover:ring-[#00ffc4]/45 hover:shadow-[0_0_18px_rgba(0,255,196,0.45),0_0_44px_rgba(0,255,196,0.22)]",
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
          "smm-btn-surface group inline-flex w-fit max-w-full rounded-xl px-5 py-4 text-left transition-all duration-300 hover:bg-[#0b1b1a] hover:ring-[#00ffc4]/45 hover:shadow-[0_0_18px_rgba(0,255,196,0.45),0_0_44px_rgba(0,255,196,0.22)]",
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
        "smm-btn-surface group relative inline-flex w-fit max-w-full rounded-xl px-6 py-5 text-left transition-all duration-300 hover:bg-[#0b1b1a] hover:ring-[#00ffc4]/45 hover:shadow-[0_0_18px_rgba(0,255,196,0.45),0_0_44px_rgba(0,255,196,0.22)]",
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
