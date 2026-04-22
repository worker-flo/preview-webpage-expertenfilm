import type { BlogCover, BlogPost, SketchFrame } from "./types"

const c = (src: string, alt: string): BlogCover => ({ src, alt })

export const POSTS: BlogPost[] = [
  {
    id: "blackbook-essentials",
    category: "Journal",
    title: "Blackbook Essentials: Warum Papier die Basis für jeden Style ist.",
    excerpt:
      "Ohne saubere Linien auf Papier wirkt selbst der wildeste Throwie an der Wand wie Zufall. Hier ist, warum mein Blackbook heilig ist.",
    readTime: "6 Min.",
    cardSize: "large",
    cover: c(
      "https://images.unsplash.com/photo-1771013151006-8c05d56fd949?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Skizzenbuch und Stifte auf einem Tisch",
    ),
  },
  {
    id: "psychologie-outline",
    category: "Technik",
    title: "Die Psychologie der Outline – Warum wir ziehen, was wir ziehen.",
    excerpt:
      "Von der ersten Markierung bis zur letzten Kante: Die Outline ist mehr als Kontur – sie ist Entscheidung, Rhythmus, Ego und Respekt in einem Zug.",
    readTime: "8 Min.",
    cardSize: "medium",
    cover: c(
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=1200",
      "Abstrakte Linien und Farbflächen – assoziativ zur Outline",
    ),
  },
  {
    id: "culture-graffiti-streetart",
    category: "Culture Talk",
    title: "Culture Talk: Graffiti vs. Streetart – Eine endlose Debatte.",
    excerpt:
      "Tags, Pieces, Murals – wo hört eine Subkultur auf und wo fängt Galerie an? Mein Take aus drei Jahrzehnten zwischen Hall of Fame und Museum.",
    readTime: "10 Min.",
    cardSize: "compact",
    cover: c(
      "https://images.unsplash.com/photo-1530406831759-15c5c0cbce8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Bunte Streetart-Wand in der Stadt",
    ),
  },
]

export const SKETCH_FRAMES: SketchFrame[] = [
  { id: "s1", label: "Character Study" },
  { id: "s2", label: "Throw-Up Block" },
  { id: "s3", label: "Wildstyle Fragment" },
  { id: "s4", label: "Letter R&D" },
  { id: "s5", label: "Chrome & Shadow" },
  { id: "s6", label: "Wholecar Sketch" },
  { id: "s7", label: "Negative Space" },
]
