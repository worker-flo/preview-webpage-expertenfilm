import { Camera, ClipboardCheck, Handshake } from "lucide-react"

import { KontaktCta } from "@/components/buttons"
import { ImageGridSlider, type ImageGridSlide } from "@/components/image-grid-slider"

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
          <ImageGridSlider
            slides={impressionenSlides}
            title="Impressionen aus der Produktion"
            description={
              <>
                <span className="block">
                  Placeholder-Einblicke aus einer Videoproduktion.
                </span>
                <span className="mt-2 block">
                  Ersetzen Sie die Bilder jederzeit mit eigenen Projektreferenzen.
                </span>
              </>
            }
            prevAriaLabel="Vorherige Impressionen"
            nextAriaLabel="Nächste Impressionen"
          />
        </div>
      </div>
    </section>
  )
}
