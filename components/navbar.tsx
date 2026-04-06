"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-[#0a0d3a]/80 backdrop-blur-md rounded-xl border border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 5 L5 15 L5 30 L20 40 L35 30 L35 15 Z" />
              <path d="M12 18 L12 28 L20 33 L28 28 L28 18 L20 13 Z" />
              <circle cx="20" cy="23" r="3" fill="currentColor" />
            </svg>
            <span className="text-white font-semibold text-lg tracking-wide">
              EXPERTENFILM
            </span>
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
