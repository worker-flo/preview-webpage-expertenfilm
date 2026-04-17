import { Film, Bot, Handshake } from "lucide-react"

import {
  ArbeitsweiseVideoSlider,
  type ArbeitsweiseVideoSlide,
} from "@/components/arbeitsweise-video-slider"

const arbeitsweiseVideos: ArbeitsweiseVideoSlide[] = [
  {
    title: "Live am Set",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1280&q=80&auto=format&fit=crop",
  },
  {
    title: "Dreh & Licht",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1280&q=80&auto=format&fit=crop",
  },
  {
    title: "Postproduktion",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
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
              className="relative rounded-3xl bg-[#050724]/90 border border-white/8 backdrop-blur-md px-8 py-10 flex flex-col items-center text-center"
            >
              <div className="mb-8 w-full flex items-center justify-center">
                <div className="h-40 w-full max-w-[260px] rounded-2xl bg-gradient-to-br from-[#1f2248] via-[#11152f] to-[#050724] flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.55)]">
                  <item.icon className="w-16 h-16 text-[#00ffc4] stroke-[1.6]" />
                </div>
              </div>

              <h3 className="text-white text-xl font-semibold mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mb-20 md:mb-28">
          <div className="rounded-3xl bg-[#020617] bg-[radial-gradient(ellipse_at_50%_20%,rgba(30,58,138,0.22)_0%,transparent_55%)] py-14 text-center font-sans text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:py-20">
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
              <ArbeitsweiseVideoSlider slides={arbeitsweiseVideos} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
