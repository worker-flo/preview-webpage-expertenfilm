import {
  VideoSlider,
  type VideoSliderItem,
} from "@/components/asset-components/slider-video"
import {
  VertVideoSlider,
  type VertVideoSlide,
} from "@/components/asset-components/slider-vert_video"
import {
  ImageGridSlider,
  type ImageGridSlide,
} from "@/components/asset-components/slider-image_grid"
import {
  VideobeispieleKundenprojekteGrid,
  type VideobeispielKundeItem,
} from "@/components/asset-components/grid-videos-portfolio"

const videoSlides: VideoSliderItem[] = [
  {
    title: "Kampagnenfilm",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1280&q=80&auto=format&fit=crop",
  },
  {
    title: "Interview-Setup",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1280&q=80&auto=format&fit=crop",
  },
  {
    title: "Behind The Scenes",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1280&q=80&auto=format&fit=crop",
  },
]

const verticalVideoSlides: VertVideoSlide[] = [
  {
    id: "vert-1",
    videoUrl:
      "https://player.mediadelivery.net/embed/614528/356df19f-43e3-40cf-aabd-316344f9f4f4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1555597673-b21d5c935866?w=800&q=80&auto=format&fit=crop",
    overlayLabel: "Vertical Ad Cut",
  },
  {
    id: "vert-2",
    videoUrl:
      "https://player.mediadelivery.net/embed/614528/76e2671a-1ce2-4e9d-91e0-a7b06fa15dab?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/76e2671a-1ce2-4e9d-91e0-a7b06fa15dab/thumbnail_11773693.jpg",
    overlayLabel: "Social Snippet",
  },
  {
    id: "vert-3",
    videoUrl:
      "https://player.mediadelivery.net/embed/614528/af2aebdb-50e0-4bac-8098-01d278b712ae?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80&auto=format&fit=crop",
    overlayLabel: "Reel Preview",
  },
  {
    id: "vert-4",
    videoUrl:
      "https://player.mediadelivery.net/embed/614528/4242506e-63fb-44d4-be4f-20bffac3f0cc?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    thumbnail:
      "https://vz-617e21d0-8be.b-cdn.net/4242506e-63fb-44d4-be4f-20bffac3f0cc/thumbnail.jpg",
    overlayLabel: "Reel Preview",
  },
]

const impressionenSlides: ImageGridSlide[] = [
  {
    images: [
      {
        src: "/images/produktion/testo_gym/testo_gym-essen.webp",
        alt: "Videoproduktion mit Kamera und Set-Licht",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-julian.webp",
        alt: "Crew bei Aufnahmen im Studio",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-studio.webp",
        alt: "Professionelle Kamera mit Objektiv",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-bodybuilder.webp",
        alt: "Kameramann am Monitor während eines Drehs",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/produktion/medaworld/medaworld-julian_beraet.webp",
        alt: "Interview-Setup mit professioneller Ausleuchtung",
      },
      {
        src: "/images/produktion/medaworld/medaworld-julian_filmt.webp",
        alt: "Schnitt und Material-Review im Produktionsprozess",
      },
      {
        src: "/images/produktion/medaworld/medaworld-julian_bizeps.webp",
        alt: "Regie-Monitor mit laufender Aufnahme",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/produktion/weitere/empchair-kunden.webp",
        alt: "Filmisches Licht-Setup bei einem Dreh",
      },
      {
        src: "/images/produktion/testo_gym/testo_gym-julian_filmt_2.webp",
        alt: "Kameraoperator in Aktion",
      },
      {
        src: "/images/produktion/weitere/kamera-close_up_1.webp",
        alt: "Blick durch den Sucher auf ein Testimonial-Setup",
      },
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

export function SectionContentPortfolio() {
  return (
<section className="section-spotlight section-spotlight--mixed bg-transparent py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Videos & Bilder
        </h2>

        <div className="mt-10 space-y-12 md:mt-12 md:space-y-16">
          <div className="w-full">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white/75 md:mt-5 md:text-lg">
                Natürlich erfordert jedes Projekt unterschiedliche Inhalte. Dies sind
                lediglich einige Auszüge unserer Arbeit.
              </p>
              <div className="mt-10 md:mt-12">
                <VideobeispieleKundenprojekteGrid items={videobeispieleKundenItems} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-5 backdrop-blur-md md:p-8">
            <VertVideoSlider
              slides={verticalVideoSlides}
              previousAriaLabel="Vorheriges vertikales Video"
              nextAriaLabel="Nächstes vertikales Video"
            />
          </div>

          <div className="rounded-3xl p-5 backdrop-blur-md md:p-8">
            <ImageGridSlider
              slides={impressionenSlides}
              showHeader={false}
              prevAriaLabel="Vorherige Portfolio Bilder"
              nextAriaLabel="Nächste Portfolio Bilder"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
