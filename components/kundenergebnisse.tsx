import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { KontaktCta } from "@/components/buttons"

import {
  KundenergebnisseCarousel,
  type KundenergebnisSlide,
} from "@/components/asset-components/kundenergebnisse-carousel"
import { VideoPlayer } from "@/components/asset-components/video-player"
import {
  VideoContentSlider,
  type VideoContentSlide,
} from "@/components/asset-components/slider-vert_video-with_content"
import {
  VideobeispieleKundenprojekteGrid,
  type VideobeispielKundeItem,
} from "@/components/asset-components/grid-videos-portfolio"

const fallstudienSlides: KundenergebnisSlide[] = [
  {
    clientName: "Beamtenfinanzen2go",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/82237e3f-b23a-4535-a312-d06f479c9f59?autoplay=false&loop=false&muted=false&preload=false&responsive=true4",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/82237e3f-b23a-4535-a312-d06f479c9f59/thumbnail_0c2c50d7.jpg",
    videoCaption: "",
    herausforderung:
      "Als Experte für Beamtenfinanzen lag der Fokus von Geschäftsführer Clemens voll auf der Kundenberatung. Die Aufgabe war es, eine Lösung zu finden, die maximal entlastet und gleichzeitig eine verlässliche Quelle für neue Kunden erschließt.",
    loesungen:
      "Wir haben die strategische Planung übernommen, verkaufsstarke Skripte entwickelt und alles an einem Produktionstag untergebracht. Durch die anschließende Kampagnenausspielung generierten wir 110 Leads in unter zwei Monaten. Diese waren fast durchwegs qualifziert und kaufbereit.",
    ergebnisse: [
      "110 Neukundenanfragen in unter 2 Monaten",
      "Enorme Zeitersparnis",
      "Automatisiertes & wieder verwendbares Werbe-Framework",
    ],
  },
  {
    clientName: "Medaworld",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/4e02229f-ae65-45fd-97dc-85541cb0957b?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/4e02229f-ae65-45fd-97dc-85541cb0957b/thumbnail_f6d4ee4b.jpg",
    videoCaption: "",
    herausforderung:
      "Lokale Sichtbarkeit war gut, digitale Leadqualität schwankte stark. Es fehlte ein roter Faden von erstem Kontakt bis Terminbuchung.",
    loesungen:
      "Fokus auf eine durchgängige Story, Social Proof und ein vereinfachtes Buchungserlebnis. Parallel: laufende Optimierung der Creatives anhand klarer KPIs.",
    ergebnisse: [
      "Konstanter Zufluss qualifizierter Termine",
      "Kürzere Sales-Zyklen durch bessere Vorqualifizierung",
      "Wiederverwendbare Videovarianten für mehrere Kanäle",
    ],
  },
]

const kundenstimmenVideo = {
  embedUrl:
    "https://player.mediadelivery.net/embed/614528/c4143c81-d2a0-4a7f-be23-bdf6e39974c2?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
  poster:
    "https://vz-617e21d0-8be.b-cdn.net/c4143c81-d2a0-4a7f-be23-bdf6e39974c2/thumbnail_dd9a6d13.jpg",
}

const weitereTestimonialsSlides: VideoContentSlide[] = [
  {
    id: "testimonial-lift-addicts",
    brandMarkLines: ["LIFT", "ADDICTS"],
    overlayLabel: "Kundenerfahrung",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/628304f6-eeac-465f-b636-2c395929fe4d?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/628304f6-eeac-465f-b636-2c395929fe4d/thumbnail_5eeb0210.jpg",
    title: "Lift Addicts",
    category: "Sportswear Brand",
    points: [
      "Aufbau eines zeitgemäßen Brandings durch moderne Produktvideos",
      "Strategische Neuausrichtung der kompletten Brand",
      "Stark veränderte Wahrnehmung der Marke",
    ],
  },
  {
    id: "testimonial-lb_coaching",
    brandMarkLines: ["LB", "COACHING"],
    overlayLabel: "Kundenerfahrung",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/3e99a3d9-08c1-426a-a1ba-8cd3d2fbe31c?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/3e99a3d9-08c1-426a-a1ba-8cd3d2fbe31c/thumbnail_ddd02802.jpg",
    title: "LB Coaching",
    category: "Life Coaching",
    points: [
      "Durch unsere Videos erreicht Lambert Menschen, die auf der Suche nach einem Mentor sind",
      "Wir spielen die Videos an Lamberts Zielgruppe aus, dafür nutzen wir unseren hauseigenen Prozess",
      "Dadurch konnten wir Menschen mit Lambert in Konakt bringen, deren Leben er nun verändern kann",
    ],
  },
]

const videobeispieleKundenItems: VideobeispielKundeItem[] = [
  {
    title: "Spa & GolfResort Weimarer Land",
    category: "Hotellerie- und Tourismusbranche",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/f912c2a4-e5a7-4e8e-9d8e-1a00333a4008?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    poster:
      "https://images.unsplash.com/photo-1542317851-edeaba95315d?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Rheincare GmbH",
    category: "Ambulanter Pflegedienst",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/34068b70-8d16-411d-a383-d0c2498157e2?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    poster:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Personal Coach Rene Fischer",
    category: "Fitness- und Sport-Coaching",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/3f9cd5aa-25d4-4208-94f4-a03f27c375b9?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    poster:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Günter Haag – Transporte & Montagen OHG",
    category: "Bautransportunternehmen",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/a314f22f-6072-4ed6-8b66-bee674b17783?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    poster:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=960&q=80&auto=format&fit=crop",
  },
]

const projektHighlightSlides: VideoContentSlide[] = [
  {
    id: "projekt-wt-plus-weimar",
    title: "WT Plus Weimar GmbH",
    category: "Kampfsportsschule",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/356df19f-43e3-40cf-aabd-316344f9f4f4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1555597673-b21d5c935866?w=800&q=80&auto=format&fit=crop",
    points: [
      "Kampfsport ist oft noch behaftet von Vorurteilen oder Angst davor",
      "Wir haben Videos produziert, die in unseren Meta-Kampagnen einschlugen und Vertrauen generierten",
      "Dadurch konnten wir zahlreiche Neukundenanfragen für die Schule akquirieren, was zu einem ROI von 1:4 führte",
    ],
  },
  {
    id: "projekt-beamtenfinanzen2go",
    title: "Beamtenfinanzen2go",
    category: "Finanzberatung",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/76e2671a-1ce2-4e9d-91e0-a7b06fa15dab?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/76e2671a-1ce2-4e9d-91e0-a7b06fa15dab/thumbnail_11773693.jpg",
    points: [
      "Sichtbarkeit in der lokalen Zielgruppe war zersplittert und schwer erklärbar",
      "Mit stimmigen Kurzvideos und klaren Hooks haben wir Aufmerksamkeit und Buchungen gesteigert",
      "Die Kampagnen liefern seitdem planbare Anfragen mit nachvollziehbarem Werbebudget",
    ],
  },
  {
    id: "projekt-built_different",
    title: "Built Different",
    category: "Fitnesscoaching",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/af2aebdb-50e0-4bac-8098-01d278b712ae?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80&auto=format&fit=crop",
    points: [
      "Sichtbarkeit in der lokalen Zielgruppe war zersplittert und schwer erklärbar",
      "Mit stimmigen Kurzvideos und klaren Hooks haben wir Aufmerksamkeit und Buchungen gesteigert",
      "Die Kampagnen liefern seitdem planbare Anfragen mit nachvollziehbarem Werbebudget",
    ],
  },
  {
    id: "projekt-rheincare",
    title: "Rheincare GmbH",
    category: "Pfelgedienst",
    embedUrl:
      "https://player.mediadelivery.net/embed/614528/4242506e-63fb-44d4-be4f-20bffac3f0cc?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/4242506e-63fb-44d4-be4f-20bffac3f0cc/thumbnail.jpg",
    points: [
      "Placeholder",
      "Placeholder",
      "Placeholder",
    ],
  },
]

export function Kundenergebnisse() {
  return (
    <section
      id="kundenergebnisse"
      className="section-spotlight section-spotlight--violet border-t border-white/10 py-16 font-sans text-white md:py-24"
    >
      {/* Div: Ergebnisse, Projekte & Fallstudien */}
      <div className="mx-auto px-5 md:px-8 max-w-lg sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
        {/* Div: Header */}
        <div className="flex min-h-[100svh] flex-col justify-center">
          <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            <span className="block">Ergebnisse, Projekte & Fallstudien</span>
            <span className="mt-1 block md:mt-2">
              Sehen Sie sich Beispiele unserer Arbeit an
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal leading-relaxed text-white md:mt-8 md:text-lg">
            Über die letzten Jahre konnten wir das Marketing von vielen
            Unternehmern verbessern. Ob als langfristiger Partner über einen
            längeren Zeitraum oder für kürzere Projekte. Je nach Ihren Zielen und
            Anforderungen finden wir für Sie die passende Lösung.
          </p>

          {/* Div: Case Studies */} 
          <div className="mx-auto mt-12 flex max-w-4xl justify-center md:mt-16 lg:mt-20">
            <KundenergebnisseCarousel slides={fallstudienSlides} />
          </div>

          {/* Div: Video Kundenstimmen aus 3 Jahren */}
          <div className="mx-auto max-w-4xl mt-4">
            <div
              className="overflow-hidden rounded-2xl border border-white/15 bg-[#050a14]/95 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:p-7 md:p-8"
              role="region"
              aria-labelledby="kundenstimmen-schnitt-heading"
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                <div className="text-left">
                  <h3
                    id="kundenstimmen-schnitt-heading"
                    className="mb-4 text-2xl font-bold text-white"
                  >
                    Ungefilterte Kundenstimmen aus 3 Jahren Arbeit
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-white/90 md:text-lg md:mb-0">
                    Ein Zusammenschnitt weiterer Kundenstimmen in einem Video
                  </p>
                </div>

                <div className="mx-0 min-w-0">
                  <VideoPlayer
                    embedUrl={kundenstimmenVideo.embedUrl}
                    poster={kundenstimmenVideo.poster}
                    mutedByDefault
                    playAriaLabel="Abspielen"
                    pauseAriaLabel="Pause"
                    fullscreenAriaLabel="Vollbild"
                    optionsAriaLabel="Weitere Optionen"
                />
                </div>
              </div>
            </div>


        </div>
        </div>

      </div>

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h3 className="mb-10 text-center text-2xl font-bold text-white md:mb-12 md:text-3xl">
            Weitere Testimonials:
          </h3>
          <div className="max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
            <VideoContentSlider
              slides={weitereTestimonialsSlides}
              previousAriaLabel="Vorheriges Testimonial"
              nextAriaLabel="Nächstes Testimonial"
              mediaAspectClassName="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]"
              mediaContainerClassName="md:w-80 lg:w-[22rem]"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h3 className="text-center text-2xl font-bold text-white md:text-3xl">
            Videobeispiele aus Kundenprojekten
          </h3>
          <p className="mx-auto mt-4 max-w-5xl text-center text-base text-white/75 md:mt-5 md:text-lg">
            Natürlich erfordert jedes Projekt unterschiedliche Inhalte. Dies sind
            lediglich einige Auszüge unserer Arbeit.
          </p>
          <div className="mt-10 md:mt-12">
            <VideobeispieleKundenprojekteGrid items={videobeispieleKundenItems} />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="-mx-2 md:mx-0 md:px-2 lg:px-6">
            <VideoContentSlider
              slides={projektHighlightSlides}
              previousAriaLabel="Vorheriger Eintrag"
              nextAriaLabel="Nächster Eintrag"
              mediaAspectClassName="aspect-[9/16]"
              mediaContainerClassName="mx-auto max-w-[min(100%,17.5rem)] sm:max-w-xs md:mx-0 md:max-w-[280px] lg:max-w-[300px]"
              cardClassName="border-white/10 bg-white/5 md:bg-slate-900/50"
              categoryClassName="text-left text-base font-normal text-white/70 md:text-lg"
              pointItemClassName="items-start"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-8 border-t border-white/10 pt-12 md:mt-16 md:flex-row md:items-stretch md:gap-10 md:pt-16 lg:mt-20 lg:gap-14 lg:pt-20">
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-1 text-base font-bold text-white transition-colors hover:text-teal-400 md:self-center"
          >
            Überzeugt? Kontaktieren Sie uns!
            <ChevronRight
              className="h-5 w-5 shrink-0 stroke-[2.5]"
              aria-hidden
            />
          </Link>

          <KontaktCta variant="highlight" />
        </div>
      </div>
    </section>
  )
}
