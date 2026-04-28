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
    <main className="relative">
      <div
        className="fixed inset-0 -z-10 h-100svh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="section-spotlight section-spotlight--teal relative -top-8 flex min-h-[calc(100svh-6rem)] items-center overflow-hidden border-t border-white/10">
        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Performance </span>
              <span className="text-[#00ffc4]">Marketing</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Verwandle Klicks in zahlungskräftige Kunden
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-lg">
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
