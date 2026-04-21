import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { KontaktCta } from "@/components/buttons"

import {
  KundenergebnisseCarousel,
  type KundenergebnisSlide,
} from "@/components/kundenergebnisse-carousel"
import { VideoPlayer } from "@/components/asset-components/video-player"
import {
  VideoContentSlider,
  type VideoContentSlide,
} from "@/components/asset-components/slider-vert_video-with_content"
import {
  VideobeispieleKundenprojekteGrid,
  type VideobeispielKundeItem,
} from "@/components/grid-videos-portfolio"

const fallstudienSlides: KundenergebnisSlide[] = [
  {
    clientName: "Beamtenfinanzen2go",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1280&q=80&auto=format&fit=crop",
    videoCaption: "Kundenerfahrung: beamtenfinanzen2go",
    herausforderung:
      "Das Team wollte mehr qualifizierte Anfragen aus dem Online-Kanal, hatte aber wenig Kapazität für manuelle Kampagnenpflege. Bestehende Inhalte wirkten austauschbar, der Funnel war nicht messbar ausgebaut.",
    loesungen:
      "Wir haben eine klare Positionierung und ein skalierbares Content- & Ads-Setup umgesetzt: wiederkehrende Creatives, klare Landingpages und Automatisierungen entlang der Customer Journey. So ließen sich Tests schneller auswerten und Budget gezielt auf funktionierende Hooks lenken.",
    ergebnisse: [
      "110 Neukundenanfragen in unter 2 Monaten",
      "Enorme Zeitersparnis",
      "Automatisiertes & wieder verwendbares Werbe-Framework",
    ],
  },
  {
    clientName: "RegionalPartner GmbH",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1280&q=80&auto=format&fit=crop",
    videoCaption: "Kundenerfahrung: RegionalPartner",
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
  videoUrl:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  poster:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1280&q=80&auto=format&fit=crop",
}

const weitereTestimonialsSlides: VideoContentSlide[] = [
  {
    id: "testimonial-lift-addicts",
    brandMarkLines: ["LIFT", "ADDICTS"],
    overlayLabel: "Kundenerfahrung",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&q=80&auto=format&fit=crop",
    title: "Lift Addicts",
    category: "Sportswear Brand",
    points: [
      "Aufbau eines zeitgemäßen Brandings durch moderne Produktvideos",
      "Strategische Neuausrichtung der kompletten Brand",
      "Stark veränderte Wahrnehmung der Marke",
    ],
  },
  {
    id: "testimonial-craft-lab",
    brandMarkLines: ["CRAFT", "LAB"],
    overlayLabel: "Kundenerfahrung",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop",
    title: "Craft Lab",
    category: "B2B Software",
    points: [
      "Erklärvideos und Demos, die komplexe Features greifbar machen",
      "Einheitlicher Markenauftritt über Website und Social Media",
      "Messbar höhere Engagement-Rate auf organischen Kanälen",
    ],
  },
]

const videobeispieleKundenItems: VideobeispielKundeItem[] = [
  {
    title: "Spa & GolfResort Weimarer Land",
    category: "Hotellerie- und Tourismusbranche",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1542317851-edeaba95315d?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Rheincare GmbH",
    category: "Ambulanter Pflegedienst",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Personal Coach Rene Fischer",
    category: "Fitness- und Sport-Coaching",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=960&q=80&auto=format&fit=crop",
  },
  {
    title: "Günter Haag – Transporte & Montagen OHG",
    category: "Bautransportunternehmen",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=960&q=80&auto=format&fit=crop",
  },
]

const projektHighlightSlides: VideoContentSlide[] = [
  {
    id: "projekt-wt-plus-weimar",
    title: "WT Plus Weimar GmbH",
    category: "Kampfsportsschule",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1555597673-b21d5c935866?w=800&q=80&auto=format&fit=crop",
    points: [
      "Kampfsport ist oft noch behaftet von Vorurteilen oder Angst davor",
      "Wir haben Videos produziert, die in unseren Meta-Kampagnen einschlugen und Vertrauen generierten",
      "Dadurch konnten wir zahlreiche Neukundenanfragen für die Schule akquirieren, was zu einem ROI von 1:4 führte",
    ],
  },
  {
    id: "projekt-weimarer-tanzakademie",
    title: "Weimarer Tanzakademie",
    category: "Tanzstudio & Events",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80&auto=format&fit=crop",
    points: [
      "Sichtbarkeit in der lokalen Zielgruppe war zersplittert und schwer erklärbar",
      "Mit stimmigen Kurzvideos und klaren Hooks haben wir Aufmerksamkeit und Buchungen gesteigert",
      "Die Kampagnen liefern seitdem planbare Anfragen mit nachvollziehbarem Werbebudget",
    ],
  },
]

export function Kundenergebnisse() {
  return (
    <section
      id="kundenergebnisse"
      className="py-16 font-sans text-white md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
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

        <div className="mx-auto mt-12 w-full max-w-6xl md:mt-16 lg:mt-20">
          <div className="-mx-4 md:mx-0 md:px-2 lg:px-4">
            <KundenergebnisseCarousel slides={fallstudienSlides} />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h3 className="mb-4 text-center text-3xl font-bold text-white">
            Ungefilterte Kundenstimmen aus 3 Jahren Arbeit in einem Video:
          </h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg font-light text-white/90">
            Im folgendem Video haben wir komplett ungeskriptete und ungefilterte
            Kundenstimmen & Reaktionen zusammengestellt.
          </p>
          <div className="-mx-4 md:mx-0">
            <VideoPlayer
              videoUrl={kundenstimmenVideo.videoUrl}
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

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h3 className="mb-10 text-center text-2xl font-bold text-white md:mb-12 md:text-3xl">
            Weitere Testimonials:
          </h3>
          <div className="-mx-2 md:mx-0 md:px-2 lg:px-6">
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
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h3 className="text-center text-3xl font-medium text-white md:text-4xl">
            Videobeispiele aus Kundenprojekten
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white/75 md:mt-5 md:text-lg">
            Natürlich erfordert jedes Projekt unterschiedliche Inhalte. Dies sind
            lediglich einige Auszüge unserer Arbeit.
          </p>
          <div className="mt-10 md:mt-12">
            <VideobeispieleKundenprojekteGrid items={videobeispieleKundenItems} />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full border-t border-white/10 py-14 md:mt-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
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

      <div className="mx-auto max-w-6xl px-4 md:px-8">
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
