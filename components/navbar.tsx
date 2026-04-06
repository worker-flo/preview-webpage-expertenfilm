"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
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
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300"
                  aria-label="Menü öffnen"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-[#0a0d3a] border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6 px-4">
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                  >
                    Seite 1
                  </a>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                  >
                    Seite 2
                  </a>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                  >
                    Seite 3
                  </a>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                  >
                    Seite 4
                  </a>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2"
                  >
                    Seite 5
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-white"
                aria-label="Menü öffnen"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#0a0d3a] border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 px-4">
                <a
                  href="#portfolio"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                >
                  Portfolio
                </a>
                <a
                  href="#team"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                >
                  Seite 1
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                >
                  Seite 2
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2 border-b border-white/10"
                >
                  Seite 3
                </a>
                <a
                  href="#"
                  className="text-white/90 hover:text-[#00ffc4] transition-colors duration-300 font-medium py-2"
                >
                  Seite 4
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
