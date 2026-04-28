"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

type NavMenuItem = {
  label: string
  href: string
  /** Erscheint als zusätzlicher Link in der Desktop-Leiste (neben Socials / Burger) */
  desktopQuick?: boolean | Partial<Record<DesktopBreakpoint, boolean>>
}

type DesktopBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl"

const desktopBreakpoints: { key: DesktopBreakpoint; query: string }[] = [
  { key: "2xl", query: "(min-width: 1536px)" },
  { key: "xl", query: "(min-width: 1280px)" },
  { key: "lg", query: "(min-width: 1024px)" },
  { key: "md", query: "(min-width: 768px)" },
  { key: "sm", query: "(min-width: 640px)" },
]

function resolveDesktopQuick(
  desktopQuick: NavMenuItem["desktopQuick"],
  breakpoint: DesktopBreakpoint | null
) {
  if (typeof desktopQuick === "boolean") {
    return desktopQuick
  }

  if (!desktopQuick || !breakpoint) {
    return false
  }

  const fallbackOrder: DesktopBreakpoint[] = ["2xl", "xl", "lg", "md", "sm"]
  const currentIndex = fallbackOrder.indexOf(breakpoint)
  const responsiveOrder = fallbackOrder.slice(currentIndex)

  for (const size of responsiveOrder) {
    const value = desktopQuick[size]
    if (typeof value === "boolean") {
      return value
    }
  }

  return false
}

const socialsDesktop: boolean | Partial<Record<DesktopBreakpoint, boolean>> = {
  lg: true
}

const servicesDesktop: boolean | Partial<Record<DesktopBreakpoint, boolean>> = {
  sm:true
}

const serviceSubpages = [
  { label: "Social Media Marketing", href: "/social-media-marketing" },
  { label: "Performance Marketing", href: "/performance-marketing" },
  { label: "Videoproduktion", href: "/videoproduktion" },
  { label: "Website Erstellung", href: "/website-erstellung" },
]

const menuItems: NavMenuItem[] = [
  { label: "Ihre Herausforderungen", href: "/#herausforderungen", desktopQuick: false},
  { label: "Der Expertenfilm-Prozess", href: "/#prozess", desktopQuick: false},
  { label: "Kundenerfolge", href: "/#kundenergebnisse", desktopQuick: { sm: true} },
  { label: "Portfolio", href: "/portfolio", desktopQuick: { md: true} },
  { label: "Videoproduktion", href: "/#einblicke", desktopQuick: { lg: true} },
  { label: "Kontakt", href: "/#kontakt", desktopQuick: { md: false} },
  { label: "Über uns", href: "/#team", desktopQuick: false},
  { label: "Häufig gestellte Fragen", href: "/#faq", desktopQuick: false},
]

function NavMenuLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className: string
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeDesktopBreakpoint, setActiveDesktopBreakpoint] =
    useState<DesktopBreakpoint | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function getCurrentBreakpoint(): DesktopBreakpoint | null {
      for (const breakpoint of desktopBreakpoints) {
        if (window.matchMedia(breakpoint.query).matches) {
          return breakpoint.key
        }
      }
      return null
    }

    function handleBreakpointChange() {
      setActiveDesktopBreakpoint(getCurrentBreakpoint())
    }

    handleBreakpointChange()

    const mediaQueryLists = desktopBreakpoints.map((breakpoint) =>
      window.matchMedia(breakpoint.query)
    )
    mediaQueryLists.forEach((mediaQueryList) => {
      mediaQueryList.addEventListener("change", handleBreakpointChange)
    })

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
      if (
        socialsRef.current &&
        !socialsRef.current.contains(event.target as Node)
      ) {
        setIsSocialsOpen(false)
      }
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      mediaQueryLists.forEach((mediaQueryList) => {
        mediaQueryList.removeEventListener("change", handleBreakpointChange)
      })
    }
  }, [])

  const showDesktopSocials = resolveDesktopQuick(
    socialsDesktop,
    activeDesktopBreakpoint
  )
  const showDesktopServices = resolveDesktopQuick(
    servicesDesktop,
    activeDesktopBreakpoint
  )

  useEffect(() => {
    if (!showDesktopSocials && isSocialsOpen) {
      setIsSocialsOpen(false)
    }
  }, [showDesktopSocials, isSocialsOpen])

  useEffect(() => {
    if (!showDesktopServices && isServicesOpen) {
      setIsServicesOpen(false)
    }
  }, [showDesktopServices, isServicesOpen])

  return (
    <nav className="sticky top-0 z-50 px-4 pt-5 sm:px-5 md:px-6">
      <div className="mx-auto w-full max-w-6xl rounded-xl border border-white/15 bg-[#050a14]/95 px-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/images/logo/logo-white.webp"
              alt="Logo"
              width={175}
              height={70}
              className="w-[175px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center content-center gap-8">
            {/* Socials Dropdown */}
            {showDesktopSocials && (
              <div ref={socialsRef} className="relative flex items-center">
                <button
                  onClick={() => setIsSocialsOpen(!isSocialsOpen)}
                  className="cursor-pointer flex items-center gap-1 rounded-lg px-2 py-1 font-medium text-white/90 transition-colors duration-300 hover:text-[#00ffc4]"
                >
                  <span
                    className={`transition-transform duration-300 ${isSocialsOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  Socials
                </button>

                {isSocialsOpen && (
                  <div className="absolute top-full left-1/2 mt-12 w-52 -translate-x-1/2 animate-in slide-in-from-top-2 rounded-xl border border-white/15 bg-[#050a14]/95 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.35)] duration-200 fade-in">
                    <nav className="flex flex-col">
                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-end gap-3 px-6 py-3 font-medium text-[white] transition-colors duration-200 hover:text-[#00ffc4]"
                        aria-label="WhatsApp"
                      >
                        <span>WhatsApp</span>
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-end gap-3 px-6 py-3 font-medium text-[white] transition-colors duration-200 hover:text-[#00ffc4]"
                        aria-label="Instagram"
                      >
                        <span>Instagram</span>
                        <InstagramIcon className="w-5 h-5 text-[#E4405F]" />
                      </a>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-end gap-3 px-6 py-3 font-medium text-[white] transition-colors duration-200 hover:text-[#00ffc4]"
                        aria-label="LinkedIn"
                      >
                        <span>LinkedIn</span>
                        <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
                      </a>
                    </nav>
                  </div>
                )}
              </div>
            )}

            {showDesktopServices && (
              <div ref={servicesRef} className="relative flex items-center">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="cursor-pointer flex items-center gap-1 rounded-lg px-2 py-1 font-medium text-white/90 transition-colors duration-300 hover:text-[#00ffc4]"
                >
                  <span
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  Services
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 mt-12 w-64 -translate-x-1/2 animate-in slide-in-from-top-2 rounded-xl border border-white/15 bg-[#050a14]/95 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] duration-200 fade-in">
                    <nav className="flex flex-col">
                      {serviceSubpages.map((service) => (
                        <NavMenuLink
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="px-6 py-3 text-right font-medium text-[white] transition-colors duration-200 hover:bg-[#0a1424] hover:text-[#00ffc4]"
                        >
                          {service.label}
                        </NavMenuLink>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            )}

            {menuItems
              .filter((item) =>
                resolveDesktopQuick(item.desktopQuick, activeDesktopBreakpoint)
              )
              .map((item) => (
                <NavMenuLink
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-1 font-medium text-white/90 transition-colors duration-300 hover:text-[#00ffc4]"
                >
                  {item.label}
                </NavMenuLink>
              ))}
            <div className="relative mt-1 transition-all duration-300">
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer p-1 text-white/90 transition-all duration-300 hover:scale-[1.03]"
                aria-label="Menü öffnen"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute -right-6 mt-12 w-64 animate-in slide-in-from-top-2 rounded-xl border border-white/15 bg-[#050a14]/95 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)] duration-200 fade-in"
                >
                  <nav className="flex flex-col">
                    {menuItems.map((item, index) => (
                      <NavMenuLink
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="px-6 py-3 text-right font-medium text-[white] transition-colors duration-200 hover:text-[#00ffc4]"
                      >
                        {item.label}
                      </NavMenuLink>
                    ))}
                    <div className="mx-6 my-2 h-px bg-white/10" />
                    <div className="px-6 pt-2 pb-1 flex items-center justify-end gap-4">
                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#25D366] hover:scale-110 transition-transform duration-200"
                        aria-label="WhatsApp"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#E4405F] hover:scale-110 transition-transform duration-200"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="smm-btn-icon sm:hidden rounded-full p-1 text-white"
            aria-label="Menü öffnen"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-white/15 pb-4 pt-4 sm:hidden">
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <NavMenuLink
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg py-3 font-medium text-white/90 transition-colors duration-200 hover:text-[#00ffc4]"
                >
                  {item.label}
                </NavMenuLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  )
}
