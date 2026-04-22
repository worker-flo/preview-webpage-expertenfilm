import type { ReactNode } from "react"
import { Inter, Oswald } from "next/font/google"
import { SmoothScrollMount } from "./smooth-scroll-mount"
import "./shack.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-shack-sans",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-shack-display",
  display: "swap",
})

export default function GastronomiePortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${oswald.variable} shack-scope min-h-screen bg-white text-shack-ink antialiased`}
    >
      <SmoothScrollMount />
      {children}
    </div>
  )
}
