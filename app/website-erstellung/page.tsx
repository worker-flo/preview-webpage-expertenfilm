import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SectionWebsiteLeistungen } from "./section-website_leistungen"
import { SectionWebsitePortfolio } from "./section-website_portfolio"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website-Erstellung | EXPERTENFILM",
  description:
    "Professionelle Website-Erstellung für Expertenfilme in Zusammenarbeit mit der P&P Webfabrik.",
}

export default function WebsiteErstellungPage() {
  return (
    <main>
      <div
        className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(180deg,_#050a14_0%,_#040912_55%,_#03070f_100%)]"
        aria-hidden
      />

      <Navbar />

      <section className="section-spotlight section-spotlight--mixed relative overflow-hidden border-t border-white/10 pt-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 pb-10 md:gap-10 md:pb-14 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="text-white">Website-</span>
                <span className="text-[#00ffc4]">Erstellung</span>
              </h1>

              <p className="mt-5 text-xl font-medium text-white/90 md:text-2xl">
                Professionelle Websites, die Ihre Expertenfilme in Szene setzen
              </p>

              <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
                Schluss mit Standard-Templates. Gemeinsam mit unseren Partnern der <br></br>
                <Link href="https://pp-webfabrik.de" target="_blank" rel="noopener noreferrer" className="text-white transition-colors duration-300">P&P Webfabrik</Link>
                &nbsp; entwickeln wir für Sie eine individuelle Website, auf der ihr
                neuer Content präsentiert wird.
              </p>
            </div>

            <div className="flex flex-row justify-center align-center">
            <Link
              href="https://pp-webfabrik.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit flex-col items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] md:self-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos-partner/pp-logo-2048x2048.png"
                alt="P&P Webfabrik Logo"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded"
              />
              <span className="font-medium tracking-[0.12em] text-white">
                P&P Webfabrik
              </span>
            </Link>
          </div>
          </div>
        </div>
        <SectionWebsitePortfolio />
        <SectionWebsiteLeistungen />
      </section>

      <Footer />
    </main>
  )
}
