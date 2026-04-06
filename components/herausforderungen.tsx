import { Power } from "lucide-react"

const challenges = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-10 w-10 text-[#6B9FFF]"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="16" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="16" r="1.5" fill="currentColor" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Kundengewinnung über Online-Kanäle funktioniert nicht planbar.",
    description:
      "Die Online-Neukundengewinnung ist unberechenbar oder funktioniert überhaupt nicht. Es wird viel probiert, aber nichts liefert nachhaltige und planbare Ergebnisse. Sie haben schon oft von verschiedenen Werbe- und Social-Media-Strategien gehört, aber schaffen es nicht, diese gewinnbringend umzusetzen.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-10 w-10 text-[#6B9FFF]"
      >
        <circle cx="7" cy="12" r="3" />
        <circle cx="7" cy="12" r="1" fill="currentColor" />
        <path d="M10 12h4" />
        <path d="M14 9l3-3" />
        <path d="M14 12h3" />
        <path d="M14 15l3 3" />
        <circle cx="19" cy="6" r="1.5" fill="currentColor" />
        <circle cx="19" cy="12" r="1.5" fill="currentColor" />
        <circle cx="19" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Anbieterkampf durch fehlendes Vertrauen",
    description:
      "Ihr Angebot ist exzellent, aber potenzielle Kunden verstehen es nicht oder haben kein Vertrauen. Die Folge sind ewige Preis-Diskussionen, verlorene Deals und schwache Umsatzentwicklung. Ihre Konkurrenz startet online bereits durch und generiert über Ads und Social-Media Kunden, die Ihnen täglich entgehen.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-10 w-10 text-[#6B9FFF]"
      >
        <path d="M3 12h4l2-8 4 16 2-8h6" />
        <path d="M18 8l3-3" />
        <path d="M18 8l3 3" />
      </svg>
    ),
    title: "Veraltete Marketing-Strategien verbrennen Zeit und Geld",
    description:
      "Unsere meisten Kunden verfügten bereits vor der Zusammenarbeit über ein exzellentes Angebot. Das beste Angebot ist aber wertlos, wenn keiner weiß, was Sie anzubieten haben. Veraltete Marketing-Strategien kosten Sie täglich viel Zeit und Geld. Sie nutzen Strategien, die vor 10 Jahren zuletzt funktionieren und wissen nicht, wie modernes, KI-gestütztes Social-Media und Performance-Marketing funktioniert.",
  },
]

export function Herausforderungen() {
  return (
    <section className="bg-transparent py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ihre Herausforderungen
          </h2>
          <p className="text-slate-400 text-lg">
            Die folgenden Probleme sind für Sie bald Geschichte
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="flex flex-col gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 w-24 h-24 bg-slate-900/80 border border-slate-700/50 rounded-xl flex items-center justify-center">
                {challenge.icon}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 md:p-8 relative max-w-xl md:ml-auto">
                {/* Power Icon */}
                <div className="absolute top-6 right-6">
                  <Power className="h-5 w-5 text-slate-500" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 pr-8">
                  {challenge.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
