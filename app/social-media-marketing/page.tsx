import type { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Kontakt } from "@/components/kontakt"
import { Footer } from "@/components/footer"
import { KontaktCta } from "@/components/buttons"

import { SocialMediaServicesBento } from "./social-media-services-bento"

export const metadata: Metadata = {
  title: "Social Media Marketing mit KI-Power | EXPERTENFILM",
  description:
    "Datengetriebenes Social-Media-Marketing mit KI: mehr Reichweite, weniger Aufwand — ergänzt um authentisches Kamera-Videomaterial.",
}

export default function SocialMediaMarketingPage() {
  return (
    <main>
      <div
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="section-spotlight section-spotlight--teal relative min-h-[85vh] overflow-hidden border-t border-white/10">
        /* Background Network Lines */
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute right-0 top-16 h-[420px] w-[420px] opacity-25 md:h-[520px] md:w-[520px]"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden
          >
            <g stroke="#5b62e5" strokeWidth="2">
              <line x1="300" y1="100" x2="450" y2="200" />
              <line x1="450" y1="200" x2="520" y2="280" />
              <line x1="300" y1="100" x2="250" y2="180" />
              <line x1="250" y1="180" x2="200" y2="250" />
            </g>
            <g fill="#5b62e5">
              <circle cx="300" cy="100" r="8" />
              <circle cx="450" cy="200" r="6" />
              <circle cx="520" cy="280" r="6" />
              <circle cx="250" cy="180" r="6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 md:pb-24 md:pt-36 top-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Social Media Marketing mit </span>
              <span className="text-[#00ffc4]">KI-Power</span>
            </h1>

            <p className="text-xl font-medium text-white/90 md:text-2xl">
              Sichtbarkeit ohne Zeitverschwendung
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-left text-base leading-relaxed text-white/75 md:text-center md:text-lg">
              Social Media Erfolg ist heute datengetrieben und KI-beschleunigt.
              Wir helfen Ihnen, künstliche Intelligenz strategisch einzusetzen,
              um Content-Produktion und Reichweite zu maximieren, während Ihre
              Kosten sinken. Von smarten Algorithmus-Analysen bis hin zu
              KI-gestützten Performance-Ads. Natürlich kombinieren wir das
              weiterhin mit echtem, organischem Videomaterial, welches klassisch
              per Kamera produziert wird.
            </p>

            <div className="mx-auto mt-12 max-w-md">
              <KontaktCta
                variant="hero"
                description="Beratung zu KI-Social-Media & Video anfragen"
              />
            </div>
          </div>
        </div>
      </section>

      <SocialMediaServicesBento />
      <Footer />
    </main>
  )
}
