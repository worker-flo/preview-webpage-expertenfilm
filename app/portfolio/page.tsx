import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"
import { SectionContentPortfolio } from "./section-content-portfolio"

export const metadata: Metadata = {
  title: "Portfolio | EXPERTENFILM",
  description:
    "Sehen Sie sich ausgewählte Beispiele unserer Videoproduktion und Marketing-Arbeit an.",
}

export default function PortfolioPage() {
  return (
    <main>
      <div
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="section-spotlight section-spotlight--mixed relative min-h-[65vh] overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Portfolio</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Sehen Sie sich Beispiele unserer Arbeit an
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-left text-base leading-relaxed text-white/75 md:text-center md:text-lg">
              Natürlich werden Videos je nach Kundenprojekt individuell
              konzipiert und gestaltet. Diese Videos sollen Ihnen lediglich
              einen Einblick bieten.
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <KontaktCta
                variant="hero"
                description="Projekt unverbindlich anfragen"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionContentPortfolio />

      <Footer />
    </main>
  )
}
