"use client"

export type BentoGridImage = {
  src: string
  alt: string
}

type BentoGridImagesProps = {
  images: readonly BentoGridImage[]
  onImageClick: (image: BentoGridImage) => void
}

export function BentoGridImages({ images, onImageClick }: BentoGridImagesProps) {
  return (
    <div className="min-h-0 min-w-0 h-[75svh] w-full ">
      <div className="grid h-full grid-cols-2 grid-rows-6 gap-3 sm:gap-4 md:gap-5">
        <button
          type="button"
          onClick={() => onImageClick(images[0])}
          className="cursor-pointer relative col-start-1 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[0].alt} vergroessern`}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => onImageClick(images[1])}
          className="cursor-pointer relative col-start-2 row-span-2 row-start-1 overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[1].alt} vergroessern`}
        >
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => onImageClick(images[2])}
          className="cursor-pointer relative col-span-2 row-span-2 row-start-3 overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[2].alt} vergroessern`}
        >
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => onImageClick(images[3])}
          className="cursor-pointer relative col-start-1 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[3].alt} vergroessern`}
        >
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
        <button
          type="button"
          onClick={() => onImageClick(images[4])}
          className="cursor-pointer relative col-start-2 row-span-2 row-start-5 overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:rounded-3xl"
          aria-label={`${images[4].alt} vergroessern`}
        >
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  )
}
