"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const menuItems = [
  { label: "Services", href: "#services" },
  { label: "Ihre Herausforderungen", href: "#herausforderungen" },
  { label: "Der Expertenfilm-Prozess", href: "#prozess" },
  { label: "Kundenerfolge", href: "#kundenerfolge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Einblicke in die Produktion", href: "#einblicke" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Team", href: "#team" },
  { label: "Häufig gestellte Fragen", href: "#faq" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-[#0a0d3a]/80 backdrop-blur-md rounded-xl border border-white/10 px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/logo-white.webp"
              alt="Logo"
              width={175}
              height={50}
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
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300"
                aria-label="Menü öffnen"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 py-4 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <nav className="flex flex-col">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="px-6 py-3 text-right text-[#0a0d3a] hover:bg-[#0a0d3a]/5 hover:text-[#00ffc4] transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Menü öffnen"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 pb-4">
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 text-white/90 hover:text-[#00ffc4] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  )
}
