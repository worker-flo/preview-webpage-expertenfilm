import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Egg & Bacon Shack — American Diner Breakfast | Portfolio",
  description:
    "The best McMuffin, egg & bacon. Crafted mornings, free-refill coffee, American diner vibes.",
}

export default function GastronomieEggBaconShackPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-shack-yellow/40 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-shack-ink uppercase md:text-xl"
          >
            Egg &amp; Bacon Shack
          </a>
          <nav className="hidden items-center gap-6 text-xs font-bold tracking-widest text-shack-ink uppercase md:flex lg:gap-8 lg:text-sm">
            <a href="#menu" className="transition hover:text-shack-yellow">
              Menu
            </a>
            <a href="#locations" className="transition hover:text-shack-yellow">
              Locations
            </a>
            <a href="#about" className="transition hover:text-shack-yellow">
              About
            </a>
            <a
              href="#order"
              className="rounded-none border-2 border-shack-yellow bg-shack-yellow px-5 py-2.5 text-shack-ink transition hover:brightness-95 hover:ring-2 hover:ring-shack-yellow active:brightness-90"
            >
              Order Now
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-none border-2 border-shack-yellow bg-shack-yellow px-4 py-2 text-xs font-bold tracking-wider text-shack-ink uppercase transition hover:brightness-95 md:hidden"
          >
            Order
          </a>
        </div>
        <div className="flex border-t border-shack-yellow/30 bg-white px-4 py-2 md:hidden">
          <div className="flex w-full justify-between gap-2 text-[10px] font-bold tracking-wider text-shack-ink uppercase">
            <a href="#menu" className="py-2 text-center transition hover:text-shack-yellow">
              Menu
            </a>
            <a href="#locations" className="py-2 text-center transition hover:text-shack-yellow">
              Locations
            </a>
            <a href="#about" className="py-2 text-center transition hover:text-shack-yellow">
              About
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-shack-yellow/40 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-shack-ink/80 uppercase">
              Breakfast · Diner · Coffee
            </p>
            <h1 className="font-display max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-shack-ink uppercase sm:text-5xl md:text-6xl lg:text-7xl">
              The best McMuffin, egg &amp; bacon 
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-shack-ink md:mt-8 md:text-lg">
              Cage-free eggs, thick-cut bacon, and toasted English muffins baked fresh daily. Pair it with
              our bold black coffee — <span className="border-b-2 border-shack-yellow">free refills</span>,
              all morning long.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center md:mt-14">
              <a
                href="#menu"
                className="inline-flex items-center justify-center border-2 border-shack-yellow bg-shack-yellow px-8 py-4 text-center text-sm font-bold tracking-widest text-shack-ink uppercase transition hover:brightness-95 hover:ring-2 hover:ring-shack-yellow"
              >
                View Menu
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center border-2 border-shack-yellow bg-white px-8 py-4 text-center text-sm font-bold tracking-widest text-shack-ink uppercase transition hover:bg-shack-yellow/20 hover:ring-2 hover:ring-shack-yellow"
              >
                Find Us
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-shack-yellow/40 bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-stretch md:gap-12 md:px-6 lg:px-8">
            <div className="order-2 md:order-1">
                <div className="relative aspect-4/3 w-full overflow-hidden border-2 border-shack-yellow h-full min-h-[140px] w-full border-2 border-dashed border-shack-yellow/60 bg-shack-yellow/10 p-6 font-display text-2xl">
                  <Image
                    src="/images/section-portfolio/gastronomie-seite/eggmuffin.webp"
                    alt="Egg & Bacon McMuffin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
            </div>
            <div className="order-1 flex flex-col justify-center md:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-shack-ink uppercase sm:text-4xl md:text-5xl">
                Crafted for your morning.
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-shack-ink md:text-lg">
                We griddle every sandwich to order: fluffy folded egg, crisp bacon, and real American
                cheese on a butter-toasted muffin. Our crew keeps the coffee flowing — order a mug of
                black coffee and enjoy <strong className="font-bold">unlimited refills</strong> while you
                dine in.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-shack-ink md:text-lg">
                The Shack channels a reimagined American diner: open kitchen, vinyl booths, and the smell
                of bacon hitting the flat-top before the sun is fully up.
              </p>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-shack-yellow/10 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="font-display text-center text-3xl font-bold tracking-tight text-shack-ink uppercase sm:text-4xl md:text-5xl">
              Our breakfast essentials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-shack-ink md:text-base">
              Three signatures. Zero compromise. Built for commuters, regulars, and anyone who believes
              breakfast should feel like an event.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="flex flex-col border-2 border-shack-yellow/50 bg-white transition hover:border-shack-yellow hover:ring-2 hover:ring-shack-yellow/80">
                <div className="relative aspect-5/4 w-full overflow-hidden border-b-2 border-shack-yellow/40 bg-shack-yellow/15">
                  <Image
                    src="/images/section-portfolio/gastronomie-seite/eggmuffin.webp"
                    alt="Black Coffee"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight text-shack-ink uppercase">
                    The Classic Egg &amp; Bacon Shack
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-shack-ink">
                    Folded egg, bacon, cheese, and Shack sauce on a toasted English muffin.
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-shack-ink">$5.49</p>
                </div>
              </article>
              <article className="flex flex-col border-2 border-shack-yellow/50 bg-white transition hover:border-shack-yellow hover:ring-2 hover:ring-shack-yellow/80">
                <div className="relative aspect-5/4 w-full overflow-hidden border-b-2 border-shack-yellow/40 bg-shack-yellow/15">
                  <Image
                    src="/images/section-portfolio/gastronomie-seite/osaft.webp"
                    alt="Black Coffee"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight text-shack-ink uppercase">
                    Orange Juice (Freshly pressed)
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-shack-ink">
                    From fresh oranges with pulp.
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-shack-ink">$1.99</p>
                </div>
              </article>
              <article className="flex flex-col border-2 border-shack-yellow/50 bg-white transition hover:border-shack-yellow hover:ring-2 hover:ring-shack-yellow/80">
                <div className="relative aspect-5/4 w-full overflow-hidden border-b-2 border-shack-yellow/40 bg-shack-yellow/15">
                  <Image
                    src="/images/section-portfolio/gastronomie-seite/coffe.webp"
                    alt="Black Coffee"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight text-shack-ink uppercase">
                    Black Coffee (Free Refill)
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-shack-ink">
                    Small-batch roast, brewed bold.{" "}
                    <strong className="font-bold">Unlimited refills</strong> with any dine-in breakfast
                    order — stay as long as you like.
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-shack-ink">$2.99</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="locations" className="border-t border-shack-yellow/40 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
            <h2 className="font-display text-center text-3xl font-bold tracking-tight text-shack-ink uppercase sm:text-4xl">
              Visit our Shack
            </h2>
            <div className="mt-10 overflow-hidden border-2 border-shack-yellow bg-white">
              <div className="relative aspect-21/9 min-h-[220px] w-full bg-[repeating-linear-gradient(90deg,#f0c954_0px,#f0c954_2px,transparent_2px,transparent_48px)] md:aspect-3/1">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#f0c954_0px,#f0c954_2px,transparent_2px,transparent_56px)] opacity-40" />
                <div className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-4 border-shack-yellow bg-white ring-4 ring-shack-yellow/50">
                  <span className="font-display text-[10px] font-bold leading-tight text-shack-ink uppercase">
                    You
                    <br />
                    are
                    <br />
                    here
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 rounded-none border-2 border-shack-yellow bg-white px-3 py-2 font-display text-xs font-bold tracking-wide text-shack-ink uppercase">
                  Map preview
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-10 border-t-2 border-shack-yellow/40 pt-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-bold tracking-wide text-shack-ink uppercase">
                  Address
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-shack-ink">
                  Egg &amp; Bacon Shack
                  <br />
                  428 Sunrise Boulevard
                  <br />
                  Brooklyn, NY 11201
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wide text-shack-ink uppercase">
                  Opening hours
                </h3>
                <ul className="mt-3 space-y-2 text-base font-medium text-shack-ink">
                  <li className="flex justify-between border-b border-shack-yellow/30 py-2">
                    <span>Mon — Fri</span>
                    <span>6:00 AM — 2:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-shack-yellow/30 py-2">
                    <span>Saturday</span>
                    <span>7:00 AM — 3:00 PM</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span>7:00 AM — 1:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="border-t border-shack-yellow/40 bg-shack-yellow py-12 md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left md:px-6 lg:px-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-shack-ink uppercase md:text-3xl">
                Ready when you are
              </h2>
              <p className="mt-2 max-w-xl text-sm font-semibold text-shack-ink md:text-base">
                Order pickup or delivery. Same Shack quality, straight to your door.
              </p>
            </div>
            <a
              href="#menu"
              className="inline-flex min-w-[200px] items-center justify-center border-2 border-white bg-white px-8 py-4 text-sm font-bold tracking-widest text-shack-ink uppercase transition hover:border-shack-yellow hover:ring-2 hover:ring-white/90"
            >
              Start order
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-shack-yellow bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8">
          <div>
            <p className="font-display text-lg font-bold text-shack-ink uppercase">Egg &amp; Bacon Shack</p>
            <p className="mt-2 text-sm font-medium text-shack-ink">Breakfast done right.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold tracking-widest text-shack-ink uppercase">
            <a href="#" className="transition hover:text-shack-yellow">
              Contact
            </a>
            <a href="#" className="transition hover:text-shack-yellow">
              Careers
            </a>
            <a href="#" className="transition hover:text-shack-yellow">
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-4">
            <span
              className="flex h-10 w-10 items-center justify-center border-2 border-shack-yellow text-xs font-bold text-shack-ink uppercase"
              title="Instagram placeholder"
            >
              Ig
            </span>
            <span
              className="flex h-10 w-10 items-center justify-center border-2 border-shack-yellow text-xs font-bold text-shack-ink uppercase"
              title="Facebook placeholder"
            >
              Fb
            </span>
            <span
              className="flex h-10 w-10 items-center justify-center border-2 border-shack-yellow text-xs font-bold text-shack-ink uppercase"
              title="X placeholder"
            >
              X
            </span>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs font-medium text-shack-ink md:px-6 lg:px-8">
          &copy;{year}&nbsp;P&amp;P Webfabrik. All rights reserved.
        </p>
      </footer>
    </>
  )
}
