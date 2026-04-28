import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"

import { VideoproduktionServicesBento } from "./videoproduktion-services-bento"
import { ImageGridSlider, ImageGridSlide } from "@/components/asset-components/slider-image_grid"

const impressionenSlides: ImageGridSlide[] = [
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=900&q=80&auto=format&fit=crop",
        alt: "Videoproduktion mit Kamera und Set-Licht",
      },
      {
        src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop",
        alt: "Crew bei Aufnahmen im Studio",
      },
      {
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop",
        alt: "Professionelle Kamera mit Objektiv",
      },
      {
        src: "https://images.unsplash.com/photo-1601506521937-0120a2f92427?w=900&q=80&auto=format&fit=crop",
        alt: "Kameramann am Monitor während eines Drehs",
      },
    ],
  },
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=80&auto=format&fit=crop",
        alt: "Interview-Setup mit professioneller Ausleuchtung",
      },
      {
        src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80&auto=format&fit=crop",
        alt: "Schnitt und Material-Review im Produktionsprozess",
      },
      {
        src: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=900&q=80&auto=format&fit=crop",
        alt: "Regie-Monitor mit laufender Aufnahme",
      },
      {
        src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=900&q=80&auto=format&fit=crop",
        alt: "Produktionsteam am Set in Abstimmung",
      },
    ],
  },
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=900&q=80&auto=format&fit=crop",
        alt: "Filmisches Licht-Setup bei einem Dreh",
      },
      {
        src: "https://images.unsplash.com/photo-1525675454455-17ea15f23b69?w=900&q=80&auto=format&fit=crop",
        alt: "Kameraoperator in Aktion",
      },
      {
        src: "https://images.unsplash.com/photo-1542204637-e67bc7d41e48?w=900&q=80&auto=format&fit=crop",
        alt: "Blick durch den Sucher auf ein Testimonial-Setup",
      },
      {
        src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop",
        alt: "Team am Set beim finalen Feinschliff",
      },
    ],
  },
]

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

      <section className="section-spotlight section-spotlight--mixed relative min-h-[85vh] overflow-hidden border-t border-white/10">
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

      <div className="mt-12 mb-12 pt-10 md:mt-16 md:pt-14">
          <ImageGridSlider
            slides={impressionenSlides}
            title="Impressionen aus der Produktion"
            description={
              <>
                <span className="block">
                  Weitere Einblicke aus unserer Produktion.
                </span>
              </>
            }
            cardAspectClassName="aspect-[16/10]"
            containerClassName="max-w-5xl mx-auto"
            prevAriaLabel="Vorherige Impressionen"
            nextAriaLabel="Nächste Impressionen"
          />
      </div>

      <Kontakt />
      <Footer />
    </main>
  )
}
