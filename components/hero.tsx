"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

import { KontaktCta, KundenergebnisseCta, PortfolioCta } from "@/components/buttons"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden -top-16">
      {/* Background Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-20 right-0 w-[600px] h-[600px] opacity-30"
          viewBox="0 0 600 600"
          fill="none"
        >
          {/* Network connection lines */}
          <g stroke="#5b62e5" strokeWidth="2">
            <line x1="300" y1="100" x2="450" y2="200" />
            <line x1="450" y1="200" x2="500" y2="150" />
            <line x1="450" y1="200" x2="520" y2="280" />
            <line x1="300" y1="100" x2="350" y2="50" />
            <line x1="350" y1="50" x2="420" y2="80" />
            <line x1="520" y1="280" x2="550" y2="350" />
            <line x1="520" y1="280" x2="580" y2="250" />
            <line x1="300" y1="100" x2="250" y2="180" />
            <line x1="250" y1="180" x2="200" y2="250" />
            <line x1="250" y1="180" x2="280" y2="280" />
          </g>
          {/* Network nodes */}
          <g fill="#5b62e5">
            <circle cx="300" cy="100" r="8" />
            <circle cx="450" cy="200" r="6" />
            <circle cx="500" cy="150" r="5" />
            <circle cx="520" cy="280" r="6" />
            <circle cx="350" cy="50" r="5" />
            <circle cx="420" cy="80" r="4" />
            <circle cx="550" cy="350" r="5" />
            <circle cx="580" cy="250" r="4" />
            <circle cx="250" cy="180" r="6" />
            <circle cx="200" cy="250" r="5" />
            <circle cx="280" cy="280" r="4" />
          </g>
        </svg>
      </div>

      {/* Camera Image - Left Side */}
      <div className="absolute left-0 bottom-0 w-[45%] h-[85%] pointer-events-none overflow-hidden">
        <Image
          src="/images/section-hero/camera_and_rig.webp"
          alt="Camera Rig"
          fill
          className="object-cover opacity-90"
          style={{
            maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Robot Hand Image - Right Side */}
      <div className="absolute right-0 bottom-0 w-[45%] h-[85%] pointer-events-none overflow-hidden">
        <Image
          src="/images/section-hero/roboter_hand_black_eigenes_logo.webp"
          alt="Robot Hand"
          fill
          className="object-cover opacity-90"
          style={{
            maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Das Beste aus</span>
            <br />
            <span className="text-[#00ffc4]">Videoproduktion und KI</span>
            <br />
            <span className="text-white">für Ihr KMU-Marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Mit 5 Schritten in 5 Wochen zu mehr Sichtbarkeit
            <br />
            und Kunden - nur mit unserem Prozess.
          </p>

          {/* CTA Buttons */}
          <div className="mx-auto flex max-w-md flex-col gap-4">
            <KontaktCta variant="hero" />
            <KundenergebnisseCta variant="hero" />
          </div>
        </div>
      </div>

    </section>
  )
}
