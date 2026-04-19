import Link from "next/link"

import { KontaktCta, KundenergebnisseCta, PortfolioCta } from "@/components/buttons"

const CLAIM =
  "Seit 2022 unterstützen wir unsere Kunden voller Passion im Bereich Videomarketing & KI."

export type FooterNavLink = {
  label: string
  href: string
}

const UNTERNEHMEN_LINKS: FooterNavLink[] = [
  { label: "Home", href: "/" },
  { label: "Deine Probleme?", href: "#herausforderungen" },
  { label: "Unsere Lösungen!", href: "#services" },
  { label: "Services", href: "#services" },
  { label: "Kundenerfolge", href: "#kundenerfolge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Einblicke in die Produktion", href: "#einblicke" },
  { label: "Über uns", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Häufig gestellte Fragen", href: "#faq" },
]

const RECHTSDOKUMENTE_LINKS: FooterNavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzrichtlinie", href: "/datenschutz" },
  {
    label: "Allgemeine Geschäftsbedingungen",
    href: "/agb",
  },
]

const CONTACT = {
  name: "Julian Becker",
  role: "Gründer",
  phone: "+49 171 8702628",
  phoneHref: "tel:+491718702628",
  email: "kontakt@expertenfilm.de",
  emailHref: "mailto:kontakt@expertenfilm.de",
  portraitUrl:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&q=80&auto=format&fit=crop",
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0a1020] via-[#050a14] to-[#020617] pt-16 pb-10 font-sans md:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)_minmax(0,21rem)] lg:items-start lg:gap-10 xl:gap-16">
          <div className="flex flex-col sm:max-lg:max-w-xl sm:max-lg:mx-auto sm:max-lg:w-full lg:mx-0">
            <Link
              href="/"
              className="flex w-fit items-center gap-3 self-start sm:max-lg:self-center lg:self-start"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <span className="text-lg font-bold uppercase tracking-[0.12em] text-white">
                EXPERTENFILM
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:max-lg:mx-auto sm:max-lg:text-center lg:mx-0 lg:text-left">
              {CLAIM}
            </p>

            <nav
              aria-label="Unternehmen"
              className="mt-10 sm:max-lg:text-center lg:mt-12 lg:text-left"
            >
              <h2 className="text-sm font-bold text-white sm:max-lg:text-center lg:text-left">
                Unternehmen
              </h2>
              <ul className="mt-4 space-y-2.5">
                {UNTERNEHMEN_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Rechtsdokumente"
              className="mt-10 sm:max-lg:text-center lg:mt-10 lg:text-left"
            >
              <h2 className="text-sm font-bold text-white sm:max-lg:text-center lg:text-left">
                Rechtsdokumente
              </h2>
              <ul className="mt-4 space-y-2.5">
                {RECHTSDOKUMENTE_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden lg:block" aria-hidden />

          <div className="flex flex-col items-center gap-8 sm:max-lg:order-last lg:items-end lg:gap-6">
            <h2 className="text-sm font-bold text-white">Kontakt</h2>

            <div className="flex flex-col items-center lg:items-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONTACT.portraitUrl}
                alt={`${CONTACT.name}, ${CONTACT.role}`}
                width={64}
                height={64}
                className="h-14 w-14 rounded-full border border-white/15 object-cover object-top sm:h-16 sm:w-16"
                loading="lazy"
              />
              <p className="mt-3 text-center text-base font-bold text-white lg:text-right">
                {CONTACT.name}
              </p>
              <p className="text-sm text-slate-400 lg:text-right">
                {CONTACT.role}
              </p>
            </div>

            <div className="w-full max-w-sm space-y-2 text-center text-sm lg:max-w-none lg:text-right">
              <p>
                <span className="font-bold text-white">Mobil: </span>
                <a
                  href={CONTACT.phoneHref}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <span className="font-bold text-white">Email: </span>
                <a
                  href={CONTACT.emailHref}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-3 lg:max-w-none">
              <KontaktCta variant="footer" />
              <PortfolioCta variant="footer" />
              <KundenergebnisseCta variant="footer" />
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-500 md:mt-20 md:pt-10">
          © 2026 Expertenfilm – KI-gestütztes Marketing & Videoproduktion
        </p>
      </div>
    </footer>
  )
}
