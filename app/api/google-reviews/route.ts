import { NextResponse } from "next/server"

const PLACE_ID = process.env.GOOGLE_PLACE_ID
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

export const revalidate = 3600

type GooglePlacesReview = {
  author_name?: string
  rating?: number
  text?: string
  relative_time_description?: string
}

type GooglePlacesDetailsResponse = {
  status?: string
  result?: {
    name?: string
    rating?: number
    user_ratings_total?: number
    url?: string
    reviews?: GooglePlacesReview[]
  }
}

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json(
      { error: "GOOGLE_PLACE_ID oder GOOGLE_PLACES_API_KEY fehlt." },
      { status: 500 },
    )
  }

  const params = new URLSearchParams({
    place_id: PLACE_ID,
    fields: "name,rating,user_ratings_total,reviews,url",
    language: "de",
    reviews_sort: "newest",
    key: API_KEY,
  })

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Google Places API nicht erreichbar." }, { status: 502 })
    }

    const data = (await response.json()) as GooglePlacesDetailsResponse

    if (data.status !== "OK") {
      return NextResponse.json({ error: `Google API Status: ${data.status ?? "UNKNOWN"}` }, { status: 502 })
    }

    const result = data.result ?? {}

    return NextResponse.json({
      placeName: result.name ?? "",
      rating: result.rating ?? 0,
      totalRatings: result.user_ratings_total ?? 0,
      googleMapsUrl: result.url ?? "",
      reviews: (result.reviews ?? []).map((review) => ({
        authorName: review.author_name ?? "Google Nutzer",
        rating: review.rating ?? 0,
        text: review.text ?? "",
        relativeTimeDescription: review.relative_time_description ?? "",
      })),
    })
  } catch {
    return NextResponse.json({ error: "Unerwarteter Fehler beim Laden der Bewertungen." }, { status: 500 })
  }
}
