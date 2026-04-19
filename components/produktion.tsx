import { Camera, ClipboardCheck, Handshake } from "lucide-react"

import { KontaktCta } from "@/components/kontakt-cta"
import {
  ProduktionImpressionenSlider,
  type ProduktionImpressionSlide,
} from "@/components/produktion-impressionen-slider"

const BENTO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80&auto=format&fit=crop",
    alt: "Kameraausrüstung unterwegs am Set",
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&auto=format&fit=crop",
    alt: "Monitor und Kamera-Rig im Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80&auto=format&fit=crop",
    alt: "Interview-Situation im Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1601506521937-0120a2f92427?w=600&q=80&auto=format&fit=crop",
    alt: "Kameramann mit Blick auf den Monitor",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80&auto=format&fit=crop",
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

const impressionenSlides: ProduktionImpressionSlide[] = [
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop",
        alt: "Dreh in einer professionellen Küche",
      },
      {
        src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&auto=format&fit=crop",
        alt: "Team beim Food-Styling am Set",
      },
      {
        src: "https://images.unsplash.com/photo-1551218808-9469ec447314?w=800&q=80&auto=format&fit=crop",
        alt: "Kamera auf Stativ in der Produktionsküche",
      },
      {
        src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop",
        alt: "Licht und Kamera im Einsatz",
      },
    ],
  },
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80&auto=format&fit=crop",
        alt: "Kameraequipment auf dem Weg zum Drehort",
      },
      {
        src: "https://images.unsplash.com/photo-1601506521937-0120a2f92427?w=800&q=80&auto=format&fit=crop",
        alt: "Kameramann mit Monitor",
      },
      {
        src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop",
        alt: "Interview-Setup mit Licht",
      },
      {
        src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&auto=format&fit=crop",
        alt: "Schnitt und Review am Laptop",
      },
    ],
  },
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80&auto=format&fit=crop",
        alt: "Detailaufnahme Kamera und Objektiv",
      },
      {
        src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80&auto=format&fit=crop",
        alt: "Filmplakatwand im Studio",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
        alt: "Teambesprechung am Set",
      },
      {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
        alt: "Besprechung am Konferenztisch mit Storyboard",
      },
    ],
  },
]

export function Produktion() {
  return (
    <section
      id="einblicke"
      className="border-y border-white/10 bg-[#020617] py-20 font-sans text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
              Mehr Einblicke in unsere Produktionstage:
            </h2>

            <p className="mt-6 text-lg font-bold text-white lg:text-xl">
              Maximale Ausbeute, minimaler Aufwand: Ihr Produktionstag.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-300 lg:text-lg">
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
                  <span className="pt-1.5 text-base font-medium leading-relaxed text-white">
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

          <div className="min-h-0 min-w-0">
            <div className="grid h-[min(520px,70vh)] grid-cols-2 grid-rows-6 gap-3 sm:h-[min(580px,72vh)] sm:gap-4 md:h-[min(640px,75vh)] md:gap-5">
              <div className="relative col-start-1 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 md:rounded-3xl">
                <img
                  src={BENTO_IMAGES[0].src}
                  alt={BENTO_IMAGES[0].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative col-start-2 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 md:rounded-3xl">
                <img
                  src={BENTO_IMAGES[1].src}
                  alt={BENTO_IMAGES[1].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative col-span-2 row-span-2 row-start-3 overflow-hidden rounded-2xl ring-1 ring-white/10 md:rounded-3xl">
                <img
                  src={BENTO_IMAGES[2].src}
                  alt={BENTO_IMAGES[2].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative col-start-1 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 md:rounded-3xl">
                <img
                  src={BENTO_IMAGES[3].src}
                  alt={BENTO_IMAGES[3].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative col-start-2 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 md:rounded-3xl">
                <img
                  src={BENTO_IMAGES[4].src}
                  alt={BENTO_IMAGES[4].alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-20 md:mt-24 md:pt-24">
          <ProduktionImpressionenSlider slides={impressionenSlides} />
        </div>
      </div>
    </section>
  )
}
