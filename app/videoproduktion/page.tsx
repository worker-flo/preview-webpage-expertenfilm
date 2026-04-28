import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"
import { Produktion } from "@/components/produktion"

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
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="section-spotlight section-spotlight--mixed relative min-h-[85vh] overflow-hidden">
        <div className="relative z-10 container px-6 pb-16 pt-32 md:pb-24 md:pt-36 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Professionelle </span>
              <span className="text-[#00ffc4]">Videoproduktion</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Deine Expertise als unangefochtene Marke
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-center md:text-lg">
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

      <Produktion />

      <Footer />
    </main>
  )
}
