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
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=720&q=80&auto=format&fit=crop",
    overlayLabel: "Vertical Ad Cut",
  },
  {
    id: "vert-2",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=720&q=80&auto=format&fit=crop",
    overlayLabel: "Social Snippet",
  },
  {
    id: "vert-3",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=720&q=80&auto=format&fit=crop",
    overlayLabel: "Reel Preview",
  },
]

const imageSlides: ImageGridSlide[] = [
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 1",
      },
      {
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 2",
      },
      {
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 3",
      },
      {
        src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 4",
      },
    ],
  },
  {
    images: [
      {
        src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 5",
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 6",
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 7",
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
        alt: "Portfolio Bild 8",
      },
    ],
  },
]

export function SectionContentPortfolio() {
  return (
    <section className="bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Videos & Bilder
        </h2>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          <div className="rounded-3xl p-5 backdrop-blur-md md:p-8">
            <VideoSlider
              slides={videoSlides}
              slideTopLabel="Projektbeispiele"
              previousAriaLabel="Vorheriges Portfolio Video"
              nextAriaLabel="Nächstes Portfolio Video"
            />
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
              slides={imageSlides}
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
