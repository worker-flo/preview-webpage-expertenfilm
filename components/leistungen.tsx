import { Film, Bot, Handshake } from "lucide-react"

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

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-transparent py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">
          Unsere Leistungen
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
      </div>
    </section>
  )
}

