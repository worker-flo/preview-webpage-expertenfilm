import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { GoogleReviews } from "@/components/google-reviews"
import { Services } from "@/components/services"
import { Arbeitsweise } from "@/components/arbeitsweise"
import { Kundenergebnisse } from "@/components/kundenergebnisse"
import { Herausforderungen } from "@/components/herausforderungen"
import { Prozess } from "@/components/prozess"
import { Produktion } from "@/components/produktion"
import { Team } from "@/components/team"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>

      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden="true"
      />

      <Navbar />
      <Hero />
      <Services />
      <Herausforderungen />
      <Prozess />
      <Arbeitsweise />
      <Kundenergebnisse />
      <Produktion />
      <Kontakt />
      <Team />
      <Footer />

    </main>
  )
}
