import { Film, Bot, Handshake } from "lucide-react"

import {
  VideoSlider,
  type VideoSliderItem,
} from "@/components/asset-components/slider-video"

const arbeitsweiseVideos: VideoSliderItem[] = [
  {
    title: "Live am Set",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/5bc0261f-4989-46b7-870c-4ec25999bb3f?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/5bc0261f-4989-46b7-870c-4ec25999bb3f/thumbnail_2551535b.jpg",
  },
  {
    title: "Gym",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/703ea5ab-6eec-443c-a94a-f41287bd999b?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1280&q=80&auto=format&fit=crop",
  },
  {
    title: "Testo Bäckerei",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/a99ee103-7608-4811-a0dd-570c08dd0ef5?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1280&q=80&auto=format&fit=crop",
  },
]

const leistungen = [
  {
    icon: Film,
    title: "Personalisierte Lösungen",
    description:
      "Maßgeschneiderte Videomarketing-Strategien für Ihre Marke. Wir heben Sie klar vom Wettbewerb ab, ganz ohne Standardfloskeln oder 08/15-Stockfotos.",
  },
  {
    icon: Bot,
    title: "Videoproduktion mit KI-Boost",
    description:
      "High-End Produktion trifft auf modernste KI-Workflows. Wir kombinieren erstklassiges Equipment mit smartem Editing für maximale visuelle Wirkung.",
  },
  {
    icon: Handshake,
    title: "Persönliche Betreuung",
    description:
      "Wir begleiten Sie als strategischer Partner bei jedem Schritt. Gemeinsam bauen wir eine authentische Marke auf, die echtes Vertrauen schafft.",
  },
]

export function Arbeitsweise() {
  return (
    <section id="leistungen" className="bg-transparent py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">
            Unsere Arbeitsweise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leistungen.map((item, index) => (
            <article
              key={index}
              className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:p-8"
            >
              

              <div className="mb-7 mx-auto">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 shadow-[0_0_24px_rgba(0,0,0,0.4)]">
                  <item.icon className="h-10 w-10 text-[var(--color-accent-teal)] stroke-[1.6]" />
                </div>
              </div>

              <h3 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                {item.title}
              </h3>

              <p className="mx-auto mt-auto max-w-xs text-base leading-relaxed text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mb-20 md:mb-28">
          <div className="rounded-3xl  py-14 text-center font-sans text-white md:py-20">
            <div className="px-4 sm:px-6 md:px-10 lg:px-16">
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Wie wir arbeiten:
              </h3>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white md:text-lg">
                Wir haben die Kamera ausnahmsweise einmal auf uns gerichtet und
                zeigen Ihnen hier, wie ein typischer Produktionstag aussehen
                kann:
              </p>
            </div>
            <div className="mx-auto mt-10 w-full max-w-6xl md:mt-14 md:px-6 lg:px-10">
              <VideoSlider
                slides={arbeitsweiseVideos}
                slideTopLabel="Wie ein Dreh abläuft:"
                previousAriaLabel="Vorheriges Video"
                nextAriaLabel="Nächstes Video"
                mutedByDefault={false}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
