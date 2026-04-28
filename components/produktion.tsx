 "use client"

import { Camera, ClipboardCheck, Handshake } from "lucide-react"

import { KontaktCta } from "@/components/buttons"
import { BentoGridImages } from "@/components/asset-components/bento_grid-images"
import { ImageGridSlider, type ImageGridSlide } from "@/components/asset-components/slider-image_grid"

const BENTO_IMAGES = [
  {
    src: "/images/produktion/hoodie/hoodie-girl.webp",
    alt: "Kameraausrüstung unterwegs am Set",
  },
  {
    src: "/images/produktion/hoodie/hoodie-kamera-close_up_2.webp",
    alt: "Monitor und Kamera-Rig im Detail",
  },

  {
    src: "/images/produktion/medaworld/medaworld-julian_denkt.webp",
    alt: "Kameramann mit Blick auf den Monitor",
  },
  {
    src: "/images/produktion/weitere/kamera-close_up_2.webp",
    alt: "Zwei Personen am Set beim Blick aufs Display",
  },
  {
    src: "/images/produktion/weitere/julian_mit_kunde.webp",
    alt: "Zwei Personen am Set beim Blick aufs Display",
  },
] as const

const MERKMALE = [
  {
    Icon: ClipboardCheck,
    text: "Planung und Logistik entlang eines klaren Ablaufplans – vom Call Sheet bis zum letzten Export.",
  },
  {
    Icon: Camera,
    text: "Professionelles Equipment und Licht-Setups, damit jede Szene sitzt – ohne Überraschungen am Set.",
  },
  {
    Icon: Handshake,
    text: "Gemeinsam als Ihr Partner: transparent kommunizieren und eng mit Ihrem Team abgestimmt arbeiten.",
  },
] as const

const impressionenSlides: ImageGridSlide[] = [
  {
    images: [
      {
        src: "/images/produktion/testo_gym/testo_gym-essen.webp",
        alt: "Videoproduktion mit Kamera und Set-Licht",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-julian.webp",
        alt: "Crew bei Aufnahmen im Studio",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-studio.webp",
        alt: "Professionelle Kamera mit Objektiv",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-bodybuilder.webp",
        alt: "Kameramann am Monitor während eines Drehs",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/produktion/medaworld/medaworld-julian_beraet.webp",
        alt: "Interview-Setup mit professioneller Ausleuchtung",
      },
      {
        src: "/images/produktion/medaworld/medaworld-julian_filmt.webp",
        alt: "Schnitt und Material-Review im Produktionsprozess",
      },
      {
        src: "/images/produktion/medaworld/medaworld-julian_bizeps.webp",
        alt: "Regie-Monitor mit laufender Aufnahme",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/produktion/testo_gym/testo_gym-julian_filmt_2.webp",
        alt: "Kameraoperator in Aktion",
      },
      {
        src: "/images/produktion/weitere/kamera-close_up_1.webp",
        alt: "Blick durch den Sucher auf ein Testimonial-Setup",
      },
      {
        src: "/images/produktion/weitere/empchair-kunden.webp",
        alt: "Filmisches Licht-Setup bei einem Dreh",
      },
    ],
  },
]

export function Produktion() {
  return (
    <section
      id="einblicke"
      className="section-spotlight section-spotlight--mixed border-t border-white/10 py-10 font-sans text-white "
    >
      <div className="mx-auto pl-5 md:pl-8 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl ">
        <div className="grid min-h-[100svh] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="min-w-0 max-w-[65ch]">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
              Einblicke in unsere Produktionstage:
            </h2>

            <p className="mt-6 text-lg font-bold text-white lg:text-xl">
              Maximale Ausbeute, minimaler Aufwand: Ihr Produktionstag.
            </p>

            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-300 lg:text-lg">
              Bevor die Kamera läuft, klären wir Ziele, Locations, Rollen und
              Zeitfenster – so bleibt Ihr Dreh fokussiert, effizient und
              entspannt. Sie erhalten einen durchdachten Ablauf, der Ihr Budget
              schont und trotzdem Raum für kreative Momente lässt.
            </p>

            <ul className="mt-8 space-y-6 lg:mt-10">
              {MERKMALE.map(({ Icon, text }) => (
                <li key={text} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white ring-1 ring-white/10">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="max-w-[65ch] pt-1.5 text-base font-medium leading-relaxed text-white">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <KontaktCta
              variant="einladung"
              className="mt-10 lg:mt-12"
            />
          </div>

          <BentoGridImages images={BENTO_IMAGES} />
        </div>

        <div className="mt-12 pt-10 md:mt-16 md:pt-14">
          <ImageGridSlider
            slides={impressionenSlides}
            title="Weitere Einblicke in unsere Produktion"
            description={
              <>
                <span className="block">
                  Einige Bilder die während unserer Arbeit geschossen wurden:
                </span>
              </>
            }
            cardAspectClassName="aspect-[16/10]"
            containerClassName="max-w-5xl mx-auto"
            prevAriaLabel="Vorherige Impressionen"
            nextAriaLabel="Nächste Impressionen"
          />
        </div>
      </div>
    </section>
  )
}
