"use client"

import { useEffect, useMemo, useState } from "react"
import { ExternalLink, Star } from "lucide-react"

type Review = {
  authorName: string
  rating: number
  text: string
  relativeTimeDescription: string
}

type GoogleReviewsResponse = {
  placeName: string
  rating: number
  totalRatings: number
  googleMapsUrl: string
  reviews: Review[]
}

function RatingStars({ rating }: { rating: number }) {
  const filledStars = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <div className="flex items-center gap-1" aria-label={`${filledStars} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < filledStars ? "fill-[#00ffc4] text-[#00ffc4]" : "text-white/30"}`}
          strokeWidth={1.75}
          aria-hidden
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const [data, setData] = useState<GoogleReviewsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews")
        if (!response.ok) {
          throw new Error("Request failed")
        }

        const payload = (await response.json()) as GoogleReviewsResponse
        setData(payload)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadReviews()
  }, [])

  const visibleReviews = useMemo(() => data?.reviews?.slice(0, 3) ?? [], [data])

  if (isLoading) {
    return (
      <section className="section-spotlight border-t border-white/10 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-center text-white/70">Google-Bewertungen werden geladen...</p>
        </div>
      </section>
    )
  }

  if (hasError || !data) {
    return null
  }

  return (
    <section className="py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Was Kunden auf Google ueber uns sagen</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/90">
            <span className="text-xl font-semibold">{data.rating.toFixed(1)} / 5</span>
            <RatingStars rating={data.rating} />
            <span>{data.totalRatings} Bewertungen</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <article
              key={`${review.authorName}-${index}`}
              className="rounded-2xl border border-white/15 bg-[#050a14]/95 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] smm-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-white">{review.authorName}</p>
                <RatingStars rating={review.rating} />
              </div>

              <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-white/80">{review.text}</p>

              {review.relativeTimeDescription ? (
                <p className="mt-4 text-xs text-white/60">{review.relativeTimeDescription}</p>
              ) : null}
            </article>
          ))}
        </div>

        {data.googleMapsUrl ? (
          <div className="mt-8 text-center">
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="smm-btn-surface inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
            >
              Alle Google-Bewertungen ansehen
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
