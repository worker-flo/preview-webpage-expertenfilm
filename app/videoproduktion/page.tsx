import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"

import { VideoproduktionServicesBento } from "./videoproduktion-services-bento"

export const metadata: Metadata = {
  title: "High-End Videoproduktion | EXPERTENFILM",
  description:
    "High-End Imagefilme und Testimonials mit Kinoqualität und Verkaufspsychologie für nachhaltige Sichtbarkeit und automatisierte Akquise.",
}

export default function VideoproduktionPage() {
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
              <span className="text-white">High-End </span>
              <span className="text-[#00ffc4]">Videoproduktion</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Deine Expertise als unangefochtene Marke
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-left text-base leading-relaxed text-white/75 md:text-center md:text-lg">
              Setzen Sie neue Standards mit einer Videoproduktion, die Ihre
              Expertise unterstreicht. Wir produzieren High-End Imagefilme und
              authentische Testimonials, die Einwände entkräften und Ihre Marke
              als Marktführer positionieren. Durch die Verbindung von
              Kinoqualität und Verkaufspsychologie schaffen wir Content, der
              nachhaltig beeindruckt und Ihre Akquise automatisiert.
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <KontaktCta
                variant="hero"
                description="High-End Videoproduktion unverbindlich anfragen"
              />
            </div>
          </div>
        </div>
      </section>

      <VideoproduktionServicesBento />

      <Kontakt />
      <Footer />
    </main>
  )
}
