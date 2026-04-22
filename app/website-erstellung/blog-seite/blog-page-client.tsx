"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import { Mail, Palette, PenTool, Wind } from "lucide-react"
import { FadeIn } from "./fade-in"
import { POSTS, SKETCH_FRAMES } from "./posts"
import type { BlogPost } from "./types"

const ACCENT = "#5ce1ff"
const ACCENT_HOT = "#ff6b9d"
const ACCENT_GOLD = "#f0b429"

function postCardClass(post: BlogPost): string {
  const base =
    "group flex flex-col overflow-hidden rounded-sm border border-white/[0.08] bg-zinc-900/50 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[6px_8px_0_0_rgba(92,225,255,0.12),0_0_32px_-8px_rgba(92,225,255,0.15)]"
  if (post.cardSize === "large") {
    return `${base} lg:col-span-2`
  }
  if (post.cardSize === "medium") {
    return `${base} lg:col-span-1 lg:col-start-3 lg:row-start-1`
  }
  return `${base} lg:col-span-3 lg:col-start-1 lg:row-start-2`
}

function coverAspectClass(): string {
  return "aspect-[2/1] max-h-[140px] sm:max-h-[160px]"
}

export function BlogPageClient() {
  const year = new Date().getFullYear()
  const [joined, setJoined] = useState(false)

  function onNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setJoined(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#06060a]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
          <a href="#top" className="font-display text-base font-semibold tracking-tight text-zinc-100 md:text-lg">
            SKETCH <span style={{ color: ACCENT_HOT }}>&amp;</span>{" "}
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">SPRAY</span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400 md:flex">
            <a href="#journal" className="transition hover:text-cyan-300">
              Journal
            </a>
            <a href="#gallery" className="transition hover:text-cyan-300">
              Gallery
            </a>
            <a href="#culture" className="transition hover:text-cyan-300">
              Culture
            </a>
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
          </nav>
          <a
            href="#journal"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 md:hidden"
          >
            Menu
          </a>
        </div>
        <div className="flex border-t border-white/[0.05] px-4 py-2 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl justify-between gap-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            <a href="#journal" className="py-1">
              Journal
            </a>
            <a href="#gallery" className="py-1">
              Gallery
            </a>
            <a href="#culture" className="py-1">
              Culture
            </a>
            <a href="#about" className="py-1">
              About
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
            <FadeIn>
              <p
                className="font-display text-[11px] font-bold uppercase tracking-[0.4em]"
                style={{ color: ACCENT_GOLD }}
              >
                From Paper to Wall
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-50 uppercase sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  Mehr als nur
                </span>
                <br />
                <span className="font-editorial italic text-zinc-400">
                  Farbe
                </span>{" "}
                <span className="text-zinc-100">an der Wand.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.08} className="mt-8 max-w-2xl">
              <p className="font-editorial text-lg leading-relaxed text-zinc-400 md:text-xl md:leading-relaxed">
                Vom ersten Fineliner-Tag im Blackbook bis zum Wholecar. Ich teile hier meine Gedanken,
                meine Skizzen und den Vibe der Streetart-Kultur.
              </p>
            </FadeIn>
            <FadeIn delay={0.14} className="mt-8 flex flex-wrap gap-6 text-zinc-500">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                <PenTool className="size-4" style={{ color: ACCENT }} aria-hidden />
                Sketch
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                <Wind className="size-4" style={{ color: ACCENT_HOT }} aria-hidden />
                Pieces
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                <Palette className="size-4" style={{ color: ACCENT_GOLD }} aria-hidden />
                Culture
              </span>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-14">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-600">
                Latest Story
              </p>
              <div className="relative mt-4 aspect-[21/10] w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-zinc-900 shadow-[12px_14px_0_0_rgba(255,107,157,0.08),-8px_10px_0_0_rgba(92,225,255,0.06)]">
                <div
                  className="absolute inset-0 opacity-75"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1617652983051-c9280ce85184?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/75 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-10">
                  <span
                    className="rounded-sm px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-zinc-950"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_HOT})` }}
                  >
                    Urban / Street
                  </span>
                  <p className="font-display mt-4 max-w-lg text-2xl font-bold uppercase leading-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-3xl">
                    Hall of Fame bei Nacht — Roh, laut, echt.
                  </p>
                  <p className="font-editorial mt-3 max-w-md text-sm text-zinc-300 md:text-base">
                    Platzhalter für dein nächstes Feature-Bild: Zug, Rooftop oder Yard — Hauptsache, der
                    Beton erzählt mit.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Feed */}
        <section id="journal" className="scroll-mt-24 border-b border-white/[0.06] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-zinc-100 md:text-4xl">
                Journal
              </h2>
              <p className="font-editorial mt-3 max-w-2xl text-lg text-zinc-500">
                Essays, Rants und Technik-Talk — immer aus erster Hand, nie aus der Marketingabteilung.
              </p>
            </FadeIn>

            <div className="mt-12 grid auto-rows-min grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
              {POSTS.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.06} className={postCardClass(post)}>
                  <div className={`relative w-full shrink-0 bg-black/40 ${coverAspectClass()}`}>
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                      sizes={
                        post.cardSize === "large"
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 100vw, 33vw"
                      }
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <span
                      className="w-fit rounded-sm px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-cyan-100"
                      style={{
                        backgroundColor: "rgba(92, 225, 255, 0.12)",
                        boxShadow: `inset 0 0 0 1px rgba(92, 225, 255, 0.28)`,
                      }}
                    >
                      {post.category}
                    </span>
                    <h3 className="font-display mt-3 text-lg font-bold leading-snug tracking-tight text-zinc-100 transition group-hover:text-cyan-300 md:text-xl">
                      {post.title}
                    </h3>
                    <p className="font-editorial mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-zinc-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                      <span>Read</span>
                      <span style={{ color: ACCENT_HOT }}>{post.readTime}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sketchbook strip */}
        <section
          id="gallery"
          className="scroll-mt-24 border-b border-white/[0.06] py-20 md:py-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,14,20,0.95) 0%, rgba(6,6,10,1) 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-zinc-100 md:text-4xl">
                The Sketchbook
              </h2>
              <p className="font-editorial mt-3 max-w-2xl text-lg text-zinc-500">
                Aufschlagen, durchblättern, weiterzeichnen — eine offene Kante, viel Lärm im Kopf.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-10">
              <div className="blog-sketchbook-shell flex overflow-hidden rounded-2xl">
                <div className="sketchbook-rail hidden w-10 shrink-0 sm:block" aria-hidden />
                <div className="relative flex-1 py-6 pl-4 pr-2 sm:pl-6 sm:pr-4">
                  <div
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:thin]"
                    style={{ scrollbarColor: `${ACCENT} transparent` }}
                  >
                    {SKETCH_FRAMES.map((sk) => (
                      <div
                        key={sk.id}
                        className="snap-start"
                        style={{ minWidth: "min(72vw, 220px)" }}
                      >
                        <div className="aspect-[3/4] w-full rotate-[0.5deg] border-2 border-dashed border-white/15 bg-zinc-900/60 shadow-[4px_6px_0_0_rgba(0,0,0,0.4)] transition hover:-rotate-1 hover:border-cyan-400/45">
                          <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                            <PenTool className="size-8 text-zinc-700" aria-hidden />
                            <p className="font-display mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                              {sk.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-editorial mt-2 text-center text-xs text-zinc-600">
                    ← Scroll →
                  </p>
                </div>
                <div className="sketchbook-rail hidden w-8 shrink-0 scale-x-[-1] sm:block" aria-hidden />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Culture */}
        <section id="culture" className="scroll-mt-24 border-b border-white/[0.06] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-100 md:text-3xl">
                Culture
              </h2>
              <p className="font-editorial mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-zinc-400 md:text-xl md:leading-relaxed">
                Graffiti war für mich nie nur „schöne Wände“. Es ist Sound, Beef, Respekt, Risiko und
                Freundschaft — ein Ökosystem, das man nicht im Photoshop nachbauen kann. Hier halte ich
                fest, was sich sonst in Rauch auflöst.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} className="mt-10 flex justify-center">
              <div
                className="h-px w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ACCENT}, ${ACCENT_HOT}, transparent)`,
                }}
              />
            </FadeIn>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-b border-white/[0.06] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start md:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-zinc-100 md:text-4xl">
                About
              </h2>
              <p className="font-editorial mt-4 leading-relaxed text-zinc-400">
                Ich schreibe, spraye und dokumentiere seit Jahren zwischen Legal-Walls und spontanen
                Sessions. Dieses Blog ist kein Portfolio-Perfektionsding — eher ein offenes Blackbook mit
                Kommentarspalte im Kopf.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div
                className="border-l-4 border-t border-t-transparent pl-6 pt-1"
                style={{
                  borderLeftColor: ACCENT_HOT,
                  boxShadow: `-1px 0 24px rgba(255, 107, 157, 0.08)`,
                }}
              >
                <p className="font-editorial text-sm italic leading-relaxed text-zinc-500 md:text-base">
                  „Style ist, wenn du auch ohne Fill erkannt wirst.“
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
            <FadeIn>
              <div className="spray-frame relative rounded-sm p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-100 md:text-3xl">
                  Keine Pieces verpassen.
                </h2>
                <p className="font-editorial mt-2 text-zinc-500">
                  Hol dir den Culture-Update — unregelmäßig, ehrlich, ohne Spam-Folder-Vibes.
                </p>
                {joined ? (
                  <p className="font-editorial mt-8 text-center font-medium text-zinc-300" role="status">
                    Danke — Demo: Es wurde nichts gesendet.
                  </p>
                ) : (
                  <form onSubmit={onNewsletterSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="nl-email" className="sr-only">
                      E-Mail
                    </label>
                    <input
                      id="nl-email"
                      type="email"
                      required
                      placeholder="mail@example.com"
                      className="font-editorial flex-1 rounded-sm border border-white/15 bg-zinc-950/80 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none ring-0 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
                    />
                    <button
                      type="submit"
                      className="font-display inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-950 transition hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT} 0%, #7ae8ff 100%)`,
                        boxShadow: `0 0 24px rgba(92, 225, 255, 0.25)`,
                      }}
                    >
                      <Mail className="size-4" aria-hidden />
                      Eintragen
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08] bg-[#0a0a0f] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs font-semibold uppercase tracking-widest text-zinc-600 md:flex-row md:text-left md:px-6 lg:px-8">
          <span className="font-display text-zinc-300">
            SKETCH &nbsp;<span style={{ color: ACCENT_HOT }}>&amp;</span>&nbsp;SPRAY
          </span>
          <span>Editorial Blog — Portfolio Demo</span>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs font-medium text-zinc-500 md:px-6 lg:px-8">
          &copy;{year}&nbsp;P&amp;P Webfabrik. All rights reserved.
        </p>
      </footer>
    </>
  )
}
