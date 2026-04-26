"use client"

import { cn } from "@/lib/utils"

type LogoItem = {
  name: string
  src?: string
  href?: string
  heightClass?: string
}

type LogoSliderProps = {
  logos: LogoItem[]
  speedSeconds?: number
  className?: string
}

export function LogoSlider({
  logos,
  speedSeconds = 30,
  className,
}: LogoSliderProps) {
  if (logos.length === 0) return null

  const loopLogos = [...logos, ...logos]

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max items-center gap-[200px] py-2"
        style={{
          animation: `logo-slider-scroll ${speedSeconds}s linear infinite`,
        }}
      >
        {loopLogos.map((logo, index) => {
          const content = logo.src ? (
            <img
              src={logo.src}
              alt={logo.name}
              className={cn(
                "block w-auto object-contain opacity-80 transition-opacity hover:opacity-100",
                logo.heightClass ?? "h-12",
              )}
              loading="lazy"
            />
          ) : (
            <span className="text-sm font-medium text-white/70">{logo.name}</span>
          )

          return logo.href ? (
            <a
              key={`${logo.name}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-20 shrink-0 items-center"
              aria-label={logo.name}
            >
              {content}
            </a>
          ) : (
            <div key={`${logo.name}-${index}`} className="flex h-20 shrink-0 items-center">
              {content}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes logo-slider-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
