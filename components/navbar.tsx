"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-[#0a0d3a]/80 backdrop-blur-md rounded-xl border border-white/10 px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/logo-white.webp"
              alt="Logo"
              width={175}
              height={50} // Ein Schätzwert als Fallback (wird durch Tailwind überschrieben)
              className="w-[175px] h-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#portfolio"
              className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium"
            >
              Team
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300"
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a
                href="#portfolio"
                className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>
              <a
                href="#team"
                className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium"
              >
                Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
