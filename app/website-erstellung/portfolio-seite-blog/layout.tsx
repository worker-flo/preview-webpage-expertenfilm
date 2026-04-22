import type { ReactNode } from "react"
import { Montserrat, Syne } from "next/font/google"
import "./blog.css"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-blog-display",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-blog-body",
  display: "swap",
})

export default function BlogPortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${syne.variable} ${montserrat.variable} blog-scope dark-noise min-h-screen antialiased`}
    >
      {children}
    </div>
  )
}
