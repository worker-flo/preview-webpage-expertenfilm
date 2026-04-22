import type { Metadata } from "next"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = {
  title: "Sketch & Spray | From Paper to Wall — Graffiti & Streetart Blog",
  description:
    "Vom Blackbook bis zur Hall of Fame: persönlicher Blog über Skizzen, Pieces und Streetart-Kultur.",
}

export default function BlogPortfolioPage() {
  return <BlogPageClient />
}
