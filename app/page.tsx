import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Herausforderungen } from "@/components/herausforderungen"

export default function Home() {
  return (
    <main>

      {/* Fixed Background Layer */}
      <div 
          className="fixed inset-0 -z-10 h-100vh w-100vw bg-[linear-gradient(225deg,_#000336_0%,_#000000_100%)]" 
          aria-hidden="true"
      />

      <Navbar />
      <Hero />
      <Services />
      <Herausforderungen />
    </main>
  )
}
