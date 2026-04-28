import { Film, Bot, Handshake } from "lucide-react"

import {
  VideoSlider,
  type VideoSliderItem,
} from "@/components/asset-components/slider-video"

const arbeitsweiseVideos: VideoSliderItem[] = [
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
    <section id="arbeitsweise" className="section-spotlight section-spotlight--teal bg-transparent border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-6cl px-5 md:px-8">
        <div className="flex min-h-[100svh] flex-col justify-center">
          <h2 className="mb-14 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Unsere Arbeitsweise
          </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {leistungen.map((item, index) => (
              <article
                key={index}
                className="mx-auto group smm-card-hover relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 text-center transition duration-300 hover:border-white/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:p-8"
              >
                <div className="mb-7 mx-auto">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/15 bg-[#050a14]/95 shadow-[0_0_24px_rgba(0,0,0,0.4)]">
                    <item.icon className="h-10 w-10 text-[var(--color-accent-teal)] stroke-[1.6]" />
                  </div>
                </div>

                <h3 className="mb-4 min-w-0 break-words text-1xl font-semibold leading-tight text-white [overflow-wrap:anywhere] [hyphens:auto] md:text-xl">
                  {item.title}
                </h3>

                <p className="mx-auto mt-auto min-w-0 max-w-xs break-words text-base leading-relaxed text-slate-400 [overflow-wrap:anywhere] [hyphens:auto]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-3xl  py-14 text-center font-sans text-white md:py-20">
            <div className="px-5 sm:px-6 md:px-10 lg:px-16">
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                So sieht ein typischer Arbeitstag aus:
              </h3>
            </div>

            <div className="mx-auto mt-5 grid w-full max-w-6xl grid-cols-1 gap-8 px-5 text-left md:mt-14 md:items-start md:gap-10 md:px-6 lg:px-10">
              <div>
                <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white md:text-lg">
                  Wir haben die Kamera ausnahmsweise einmal auf uns gerichtet und
                  zeigen Ihnen hier, wie ein typischer Produktionstag aussehen
                  kann:
                </p>
              </div>

              <div className="md:hidden">
                <VideoSlider
                  slides={arbeitsweiseVideos}
                  slideTopLabel="Wie ein Dreh abläuft:"
                  previousAriaLabel="Vorheriges Video"
                  nextAriaLabel="Nächstes Video"
                  mutedByDefault={false}
                />
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 w-full">
                {arbeitsweiseVideos.map((video, index) => (
                  <article
                    key={`${video.title}-${index}`}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#050a14]/95 shadow-[0_20px_40px_rgba(0,0,0,0.35)] smm-card-hover"
                  >
                    <div className="pointer-events-none absolute left-4 top-4 z-10">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                        Wie ein Dreh abläuft:
                      </p>
                      <p className="mt-1 text-xl font-bold uppercase leading-none tracking-tight text-white">
                        {video.title}
                      </p>
                    </div>

                    <div className="relative aspect-video w-full">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={video.embedUrl}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25"
                        aria-hidden
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
