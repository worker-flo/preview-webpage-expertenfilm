import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle2 } from "lucide-react"
import { BRAND_NAME, HERO_IMAGE, NAV_ITEMS, PORTRAIT_IMAGE, PROCESS_STEPS, VALUE_PROPOSITIONS } from "./content"
import { LeadFormCard } from "./lead-form-card"

export const metadata: Metadata = {
  title: `${BRAND_NAME} | PV-Beratung, Montage & Inbetriebnahme`,
  description:
    "Photovoltaik aus einer Hand: Beratung, Installation und Anmeldung – regional, persönlich, meisterlich.",
}

export default function KmuSolarSolopreneurPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
          <Link
            href="#top"
            className="text-lg font-bold tracking-tight text-slate-900 md:text-xl"
          >
            {BRAND_NAME}
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="kmu-btn-accent rounded-lg px-4 py-2.5 font-bold shadow-sm transition"
            >
              Gratis Erstberatung
            </a>
          </nav>
          <a
            href="#kontakt"
            className="kmu-btn-accent rounded-lg px-3 py-2 text-xs font-bold md:hidden"
          >
            Beratung
          </a>
        </div>
        <div className="flex border-t border-slate-100 bg-white/95 px-4 py-2 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl justify-between gap-2 text-[11px] font-semibold text-slate-600">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-center hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-24 lg:px-8">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  <Award className="kmu-text-accent size-3.5" aria-hidden />
                  Meisterbetrieb
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="kmu-text-accent size-3.5" aria-hidden />
                  Zertifizierter Solarteur
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Ihre eigene Solaranlage –{" "}
                <span className="kmu-text-accent">Ehrlich, regional &amp; aus einer Hand.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
                Ich unterstütze Sie von der Planung bis zur Inbetriebnahme Ihrer PV-Anlage. Kompetente
                Beratung für maximale Unabhängigkeit.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-slate-800"
                >
                  Jetzt unverbindliches Angebot anfordern
                </a>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-slate-900 px-8 py-4 text-center text-sm font-bold text-slate-900 transition hover:text-white hover:bg-slate-800"
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-2xl shadow-slate-900/10 md:aspect-square lg:aspect-[5/4]">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={HERO_IMAGE.width}
                height={HERO_IMAGE.height}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-8">
                <p className="text-sm font-semibold text-white md:text-base">
                  Beratung · Installation · Inbetriebnahme
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section id="leistungen" className="scroll-mt-24 border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <p className="kmu-text-accent-label text-sm font-bold uppercase tracking-widest">Leistungen</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              PV-Systeme mit Anspruch – technisch sauber, wirtschaftlich durchdacht
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {VALUE_PROPOSITIONS.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.id}
                    className="group kmu-border-accent-hover rounded-2xl border border-slate-200 bg-slate-50/80 p-8 transition hover:shadow-lg"
                  >
                    <div className="kmu-icon-box kmu-icon-box--hover-fill flex size-12 items-center justify-center rounded-xl">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-slate-200 bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <p className="kmu-text-accent-label text-sm font-bold uppercase tracking-widest">Ablauf</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Der Prozess – transparent in vier Schritten
            </h2>
            <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
              {PROCESS_STEPS.map((s, i) => (
                <li
                  key={s.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:border-slate-100"
                >
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      className="kmu-process-line absolute top-1/2 -right-3 z-0 hidden h-0.5 w-6 -translate-y-1/2 md:block"
                      aria-hidden
                    />
                  )}
                  <span className="flex size-11 items-center justify-center rounded-full bg-slate-900 text-lg font-bold kmu-text-accent">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="scroll-mt-24 border-b border-slate-200 bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-6 lg:px-8">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl md:mx-0">
              <Image
                src={PORTRAIT_IMAGE.src}
                alt={PORTRAIT_IMAGE.alt}
                width={PORTRAIT_IMAGE.width}
                height={PORTRAIT_IMAGE.height}
                className="h-full w-full object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div>
              <p className="kmu-text-accent-label text-sm font-bold uppercase tracking-widest">Über mich</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Einzelunternehmer – persönlich &amp; verbindlich
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                <strong className="font-semibold text-slate-900">
                  Kein Callcenter, kein Subunternehmer
                </strong>{" "}
                – ich bin Ihr fester Ansprechpartner von Anfang bis Ende. Sie wissen immer, wer auf Ihrer
                Baustelle arbeitet und wer die Verantwortung trägt.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Als Solopreneur im Bereich Photovoltaik vereine ich Beratung, Projektierung und Montage unter
                einem Dach. Regional verwurzelt, mit dem Anspruch eines Meisterbetriebs – damit Ihre Anlage
                Jahrzehnte zuverlässig läuft.
              </p>
              <ul className="mt-8 space-y-3 text-slate-700">
                {[
                  "Direkte Erreichbarkeit – ein Ansprechpartner",
                  "Qualität statt Masse – ausgewählte Projekte",
                  "Nachhaltige Materialwahl & saubere Dokumentation",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="kmu-text-accent mt-0.5 size-5 shrink-0" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Lead */}
        <section className="bg-slate-900 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <LeadFormCard />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-sm text-slate-600 md:flex-row md:text-left md:px-6 lg:px-8">
          <p className="font-semibold text-slate-900">Solartechnik Mustermann</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="font-medium hover:text-slate-900">
              Impressum
            </Link>
            <Link href="#" className="font-medium hover:text-slate-900">
              Datenschutz
            </Link>
            <a href="#" className="font-medium hover:text-slate-900">
              Kontakt
            </a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs font-medium text-slate-500 md:px-6 lg:px-8">
          &copy;{year}&nbsp;P&amp;P Webfabrik. All rights reserved.
        </p>
      </footer>
    </>
  )
}
