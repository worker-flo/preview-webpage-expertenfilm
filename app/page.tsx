import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Herausforderungen } from "@/components/herausforderungen"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Herausforderungen />
    </main>
  )
}
