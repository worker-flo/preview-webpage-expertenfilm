"use client"

import { useEffect } from "react"

/** Applies scroll-smooth on <html> while this route is mounted (anchor in-page navigation). */
export function SmoothScrollMount() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth")
    return () => {
      document.documentElement.classList.remove("scroll-smooth")
    }
  }, [])
  return null
}
