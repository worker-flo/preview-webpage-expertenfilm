export type BlogCardSize = "large" | "medium" | "compact"

/** Cover nur mit URL + Alt-Text (`next/image` mit `fill` braucht keine Maße). */
export interface BlogCover {
  src: string
  alt: string
}

export interface BlogPost {
  id: string
  category: string
  title: string
  excerpt: string
  readTime: string
  /** Layout weight in the irregular feed */
  cardSize: BlogCardSize
  cover: BlogCover
}

export interface SketchFrame {
  id: string
  label: string
}
