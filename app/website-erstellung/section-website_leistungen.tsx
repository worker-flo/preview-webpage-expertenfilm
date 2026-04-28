import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

type WebsiteLeistungItem = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

const LEISTUNGEN: WebsiteLeistungItem[] = [
  {
    title: "Website",
    description:
      "Individuelle Website mit klarer Struktur, schneller Ladezeit und starker Darstellung Ihres Contents.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80&auto=format&fit=cropun",
    imageAlt: "Screenshot einer modernen Business-Website",
  },
  {
    title: "SEO-Tool Integration: MUXOM",
    description:
      "Keyword-Monitoring, Seitenoptimierung und datenbasierte Empfehlungen für bessere Rankings.",
    imageUrl:
      "images/unterseiten/website-erstellung/images/logo-muxom-800x800.webp",
    imageAlt: "Screenshot eines SEO-Dashboards mit Analysen",
  },
]

export function SectionWebsiteLeistungen() {
  return (
    <div
      aria-labelledby="website-leistungen-heading"
      className="relative py-14 md:py-20"
    >
      <div className="mx-auto px-6 lg:px-8 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <div className="max-w-3xl">
          <h2
            id="website-leistungen-heading"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Website + SEO-Tool im All in One Paket
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Wir bieten Ihnen außerdem ein Komplettpaket aus Website und
            {" "}
            <span className="group relative inline-flex cursor-help items-center text-white/90 underline decoration-white/30 decoration-dotted underline-offset-4">
              SEO
              <span className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2 rounded-md border border-white/10 bg-[#0b1028]/95 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-slate-200 opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                Search-Engine-Optimierung
              </span>
            </span>{"-Tool "}
            an. Dadurch verbessern wir die
            Auffindbarkeit ihrer Website.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-5 md:mt-10 md:flex-row md:items-center md:gap-6">
          <article className="group flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900/60">
              <img
                src={LEISTUNGEN[0].imageUrl}
                alt={LEISTUNGEN[0].imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {LEISTUNGEN[0].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {LEISTUNGEN[0].description}
              </p>
            </div>
          </article>

          <div className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#00ffc4] backdrop-blur-md">
            <Plus className="h-5 w-5" strokeWidth={2} aria-hidden />
          </div>

          <article className="group flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900/60">
              <img
                src={LEISTUNGEN[1].imageUrl}
                alt={LEISTUNGEN[1].imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {LEISTUNGEN[1].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                {LEISTUNGEN[1].description}
              </p>

              <div className="mt-auto ">
                <Link href="https://muxom.com" target="_blank" rel="noopener noreferrer">
                  <span className="cursor-pointer mt-10 inline-flex items-center gap-2 text-base font-semibold text-[#a9b8df] transition-colors duration-300 group-hover:text-white">
                    Mehr erfahren
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </span>
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  )
}
