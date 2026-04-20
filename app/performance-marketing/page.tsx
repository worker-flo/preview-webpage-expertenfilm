import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"

import { PerformanceServicesBento } from "./performance-services-bento"

export const metadata: Metadata = {
  title: "Performance Marketing | EXPERTENFILM",
  description:
    "Performance Marketing mit datengetriebenen Funnels, automatisierter Leadgenerierung und messbarem ROI.",
}

export default function PerformanceMarketingPage() {
  return (
    <main>
      <div
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(225deg,_#000336_0%,_#000000_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="relative min-h-[85vh] overflow-hidden bg-[linear-gradient(225deg,_#000336_0%,_#000000_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute right-0 top-16 h-[420px] w-[420px] opacity-25 md:h-[520px] md:w-[520px]"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden
          >
            <g stroke="#5b62e5" strokeWidth="2">
              <line x1="300" y1="100" x2="450" y2="200" />
              <line x1="450" y1="200" x2="520" y2="280" />
              <line x1="300" y1="100" x2="250" y2="180" />
              <line x1="250" y1="180" x2="200" y2="250" />
            </g>
            <g fill="#5b62e5">
              <circle cx="300" cy="100" r="8" />
              <circle cx="450" cy="200" r="6" />
              <circle cx="520" cy="280" r="6" />
              <circle cx="250" cy="180" r="6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Performance </span>
              <span className="text-[#00ffc4]">Marketing</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Verwandle Klicks in zahlungskräftige Kunden
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-left text-base leading-relaxed text-white/75 md:text-center md:text-lg">
              Erfolg im Performance Marketing ist kein Zufall, sondern das
              Ergebnis präziser Datenanalyse und psychologisch optimierter
              Funnel. Wir helfen dir dabei, deine Leadgenerierung zu
              automatisieren und deinen Marketing ROI zu maximieren.
              <br />
              <br />
              Ob Meta Ads oder ganzheitliche Skalierung: wir machen deinen
              Erfolg messbar und planbar.
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <KontaktCta
                variant="hero"
                description="Performance-Strategie unverbindlich anfragen"
              />
            </div>
          </div>
        </div>
      </section>

      <PerformanceServicesBento />

      <Kontakt />
      <Footer />
    </main>
  )
}
