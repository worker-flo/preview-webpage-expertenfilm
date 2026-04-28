"use client"

import { useState } from "react"
import Image from "next/image"

import { KontaktCta, KundenergebnisseCta, PortfolioCta } from "@/components/buttons"
import { LogoSlider } from "@/components/ui/logo-slider"
import { GoogleReviews } from "./google-reviews"

export function Hero() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)
  const partnerLogos = [
    { name: "Bongert Consulting", src: "/images/logos-kunden/bongert_consulting.png", heightClass: "h-14" },
    { name: "EF Logo Hell", src: "/images/logos-kunden/EF_Logo_hell.png", heightClass: "h-16" },
    { name: "Haag", src: "/images/logos-kunden/haag.png", heightClass: "h-30" },
    {
      name: "Kreiskrankenhaus Greiz Ronneburg",
      src: "/images/logos-kunden/Kreiskrankenhaus-Greiz-Ronneburg-2023.png",
      heightClass: "h-14",
    },
    {
      name: "Beamtenfinanzen Weiss",
      src: "/images/logos-kunden/logo-beamtenfinanzen-wei%C3%9F.png",
      heightClass: "h-12",
    },
    { name: "Medaworld", src: "/images/logos-kunden/medaworld-logo.png", heightClass: "h-12" },
    { name: "Rheincare", src: "/images/logos-kunden/Rheincare.png", heightClass: "h-20" },
    { name: "Weimarer Land", src: "/images/logos-kunden/weimarer_land.png", heightClass: "h-20" },
    { name: "wtplus", src: "/images/logos-kunden/wtplus.png", heightClass: "h-20" },
  ]

  return (
    <section
      className="relative overflow-hidden -top-12.5"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const relativeX = (event.clientX - rect.left) / rect.width

        if (relativeX < 0.4) {
          setHoveredSide("left")
          return
        }

        if (relativeX > 0.6) {
          setHoveredSide("right")
          return
        }

        setHoveredSide(null)
      }}
      onMouseLeave={() => setHoveredSide(null)}
    >
      {/* Manual spotlight overlays (local to hero) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div className="lg:hidden absolute -left-24 h-[28rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(0,255,196,0.1)_0%,_rgba(0,255,196,0)_72%)] -z-1" />
        <div className="absolute right-[-10rem] bottom-[30rem] h-[30rem] w-[36rem] rounded-full bg-[radial-gradient(circle,_rgba(91,98,229,0.16)_0%,_rgba(91,98,229,0)_74%)] -z-1" />
      </div>

      {/* Background Network Lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
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
            <line x1="250" y1="180" x2="200" y2="225" />
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
            <circle cx="200" cy="225" r="5" />
          </g>
        </svg>

        <svg
          className="absolute md:top-90  top-72 -left-7 h-[520px] w-[520px] opacity-25"
          viewBox="0 0 600 600"
          fill="none"
        >
          {/* Left network connection lines */}
          <g stroke="#5b62e5" strokeWidth="2">
            <line x1="300" y1="500" x2="220" y2="420" />
            <line x1="220" y1="420" x2="170" y2="450" />
            <line x1="220" y1="420" x2="130" y2="370" />
            <line x1="300" y1="500" x2="360" y2="540" />
            <line x1="360" y1="540" x2="420" y2="550" />
            <line x1="130" y1="370" x2="90" y2="320" />
            <line x1="130" y1="370" x2="70" y2="410" />
          </g>
          {/* Left network nodes */}
          <g fill="#5b62e5">
            <circle cx="300" cy="500" r="8" />
            <circle cx="220" cy="420" r="6" />
            <circle cx="170" cy="450" r="5" />
            <circle cx="130" cy="370" r="6" />
            <circle cx="360" cy="540" r="5" />
            <circle cx="420" cy="550" r="4" />
            <circle cx="90" cy="320" r="5" />
            <circle cx="70" cy="410" r="4" />
          </g>
        </svg>
      </div>

      {/* Camera Image - Left Side */}
      <div className="hidden lg:block pointer-events-none absolute -left-10 top-24 h-[80svh] min-h-[360px] max-h-[680px] w-[50svw]">
        <Image
          src="/images/section-hero/camera_and_rig.webp"
          alt="Camera Rig"
          fill
          className={`object-contain transition-opacity duration-1000 ease-in-out ${
            hoveredSide === "left" ? "opacity-80" : "opacity-40"
          }`}
          style={{
            maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Robot Hand Image - Right Side */}
      <div className="hidden lg:block pointer-events-none absolute -right-[6svw] top-20 z-[1] h-[82svh] min-h-[360px] max-h-[680px] w-[52svw]">
        <Image
          src="/images/section-hero/roboter_hand_extended.webp"
          alt="Robot Hand"
          fill
          className={`object-contain  transition-opacity duration-1000 ease-in-out ${
            hoveredSide === "right" ? "opacity-80" : "opacity-40"
          }`}
          style={{
            maskImage:
              "linear-gradient(to right, black 60%, transparent 100%), radial-gradient(circle at top right, transparent 0%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 60%, transparent 100%), radial-gradient(circle at top right, transparent 0%, black 60%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-6">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mt-8 md:mt-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Das Beste aus Test</span>
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
          <div className="mx-auto flex max-w-md flex-col gap-4 items-center">
            <KontaktCta variant="hero" />
            <KundenergebnisseCta variant="hero" />
          </div>
        </div>
      </div>

      <GoogleReviews />

      <div className="flex items-center justify-center bottom-0 mx-auto mt-10 w-full max-w-6xl">
            <LogoSlider logos={partnerLogos} />
      </div>

    </section>
  )
}
