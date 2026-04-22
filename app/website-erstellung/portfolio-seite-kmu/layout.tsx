import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./kmu-theme.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export default function KmuSolarPortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} kmu-theme min-h-screen bg-white text-slate-800 antialiased`}>
      {children}
    </div>
  )
}
