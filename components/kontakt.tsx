'use client'

import * as React from 'react'

import { KundenergebnisseCta } from "@/components/buttons"

export function Kontakt() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [privacyAccepted, setPrivacyAccepted] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!privacyAccepted) {
      return
    }
    // Platzhalter: später an API / E-Mail-Service anbinden
    console.info('Kontaktanfrage', {
      name,
      email,
      phone,
      message,
      privacyAccepted,
    })
  }

  return (
    <section
      id="kontakt"
      className="section-spotlight section-spotlight--teal border-t border-white/10 py-20 font-sans text-white md:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center md:text-left text-3xl font-bold tracking-tight text-white md:text-4xl">
          Gemeinsam durchstarten!
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-20">
          <div className="flex h-full min-h-0 min-w-0 flex-col">
            <h3 className="text-left text-xl font-bold text-white md:text-2xl">
              Sind Sie interessiert Ihr Video- oder Marketing-Projekt mit uns zu
              starten?
            </h3>

            <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                Wir melden uns zeitnah bei Ihnen und klären in einem kurzen
                Gespräch Ihre Ziele, Zeitplanung und Rahmenbedingungen –{' '}
                <span className="text-white/90">unverbindlich und ohne Druck.</span>
              </p>
              <p>
                Je konkreter Sie uns Ihre Idee oder Herausforderung beschreiben,
                desto gezielter können wir im ersten Schritt bereits passende
                Impulse liefern.
              </p>
            </div>

            <KundenergebnisseCta variant="kontakt" />
          </div>

          <div className="min-w-0 max-w-5xl mx-auto rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl backdrop-blur-sm md:p-8  hover-scale-1_02 hover-glow-blue">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="kontakt-name" className="sr-only">
                  Ihr Name
                </label>
                <input
                  id="kontakt-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ihr Name"
                  className="w-full rounded-lg border border-slate-600/70 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500/40 focus:outline-none focus:ring-1 focus:ring-teal-500/30"
                />
              </div>
              <div>
                <label htmlFor="kontakt-email" className="sr-only">
                  E-Mail
                </label>
                <input
                  id="kontakt-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-lg border border-slate-600/70 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500/40 focus:outline-none focus:ring-1 focus:ring-teal-500/30"
                />
              </div>
              <div>
                <label htmlFor="kontakt-phone" className="sr-only">
                  Telefonnummer
                </label>
                <input
                  id="kontakt-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefonnummer"
                  className="w-full rounded-lg border border-slate-600/70 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500/40 focus:outline-none focus:ring-1 focus:ring-teal-500/30"
                />
              </div>
              <div>
                <label htmlFor="kontakt-message" className="sr-only">
                  Nachricht
                </label>
                <textarea
                  id="kontakt-message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ihre Nachricht an uns. Umso mehr Informationen, desto besser."
                  className="w-full resize-y rounded-lg border border-slate-600/70 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-teal-500/40 focus:outline-none focus:ring-1 focus:ring-teal-500/30"
                />
              </div>

              <div className="flex gap-3 pt-1">
                <input
                  id="kontakt-privacy"
                  name="privacy"
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-900/50 text-teal-500 focus:ring-teal-500/40 focus:ring-offset-0 focus:ring-offset-transparent"
                />
                <label
                  htmlFor="kontakt-privacy"
                  className="text-sm leading-snug text-slate-400"
                >
                  Ich habe die{' '}
                  <a
                    href="#datenschutz"
                    className="text-white underline underline-offset-2 hover:text-teal-300"
                  >
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und zur Kenntnis genommen.
                </label>
              </div>

              <button
                type="submit"
                disabled={!privacyAccepted}
                className="smm-btn-surface mt-2 w-full rounded-lg py-3.5 text-base font-medium disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
