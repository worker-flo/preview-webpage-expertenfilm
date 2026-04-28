import Link from "next/link"
import {PanelsTopLeft} from "lucide-react"

type WebsitePortfolioItem = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  href: string
}

const WEBSITE_PORTFOLIO_ITEMS: WebsitePortfolioItem[] = [
  {
    title: "Kreativer Blog",
    description:
      "Moderne Onepage mit klarer Positionierung, Video-Integration und fokussierter Lead-Strecke für Anfragen.",
    imageUrl:
      "images/unterseiten/website-erstellung/images/screen-blog_seite.png",
    imageAlt: "Screenshot einer modernen Coaching-Website auf einem Desktop",
    href: "/website-erstellung/portfolio-seite-coaching",
  },
  {
    title: "Website für KMU",
    description:
      "Visuelles Portfolio-Layout für Video-Content mit sauberer Navigation und mobiler Performance-Optimierung.",
    imageUrl:
      "images/unterseiten/website-erstellung/images/screen-kmu_seite.png",
    imageAlt: "Screenshot einer Portfolio-Website mit Video-Inhalten",
    href: "/website-erstellung/portfolio-seite-content-hub",
  },
  {
    title: "Gastronomie-Website",
    description:
      "Conversion-optimierter Webauftritt mit strukturierten Leistungsblöcken, Vertrauenselementen und starkem CTA.",
    imageUrl:
      "images/unterseiten/website-erstellung/images/screen-gastronomie_seite.png",
    imageAlt: "Screenshot einer professionellen Dienstleistungs-Website",
    href: "/website-erstellung/portfolio-seite-dienstleistungen",
  },
]

export function SectionWebsitePortfolio() {
  return (
    <div
      aria-labelledby="website-portfolio-heading"
      className="relative py-10 md:py-14 max-w-lg sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-row ">
          <div>
            <h2
              id="website-portfolio-heading"
              className="text-2xl font-semibold tracking-tight text-white md:text-3xl "
            >
              So könnte Ihre Website aussehen:
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/75 md:text-lg">
              Unsere eigene Website wurde von unserem Partner erstellt und ist
              ein Beispiel, wie auch Ihre Website aussehen könnte. Weitere
              Beispielseiten finden Sie hier:
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:gap-6">
          {WEBSITE_PORTFOLIO_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] focus-within:-translate-y-0.5 focus-within:border-white/25 focus-within:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900/60">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
