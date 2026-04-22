"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

export function LeadFormCard() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      id="kontakt"
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Unverbindliches Erstgespräch
      </h2>
      <p className="mt-2 text-slate-600">
        Hinterlassen Sie Ihre Daten – ich melde mich persönlich bei Ihnen.
      </p>

      {submitted ? (
        <p
          className="kmu-success-panel mt-8 rounded-xl border px-4 py-6 text-center font-medium text-slate-800"
          role="status"
        >
          Vielen Dank! In einer echten Umgebung würde hier eine Bestätigung folgen und Sie erhielten eine
          E-Mail.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-semibold text-slate-700">
              Name
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Max Mustermann"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-[color:var(--kmu-accent-ring)] focus:border-[color:var(--kmu-accent-focus-border)]"
            />
          </div>
          <div>
            <label htmlFor="lead-plz" className="block text-sm font-semibold text-slate-700">
              PLZ / Ort
            </label>
            <input
              id="lead-plz"
              name="plz"
              type="text"
              required
              autoComplete="postal-code"
              placeholder="z. B. 10115 Berlin"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-[color:var(--kmu-accent-ring)] focus:border-[color:var(--kmu-accent-focus-border)]"
            />
          </div>
          <div>
            <label htmlFor="lead-kwh" className="block text-sm font-semibold text-slate-700">
              Jahresstromverbrauch (ca. kWh)
            </label>
            <input
              id="lead-kwh"
              name="consumption"
              type="text"
              required
              inputMode="numeric"
              placeholder="z. B. 3500"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-[color:var(--kmu-accent-ring)] focus:border-[color:var(--kmu-accent-focus-border)]"
            />
          </div>
          <button
            type="submit"
            className="kmu-btn-accent kmu-btn-submit flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Send className="size-5 shrink-0" aria-hidden />
            Anfrage senden
          </button>
          <p className="text-center text-xs text-slate-500">
            Demo-Formular ohne Server – es werden keine Daten übertragen.
          </p>
        </form>
      )}
    </div>
  )
}
