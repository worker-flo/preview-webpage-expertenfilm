"use client"

import Link from "next/link"
import {
  Smartphone,
  Megaphone,
  Video,
  Rocket,
  Brain,
  TrendingUp,
  Target,
  Play,
  Camera,
  ArrowRight,
  PanelsTopLeft,
  Laptop,
  TextSearch,
} from "lucide-react"
import {
  ServicesSlider,
  type ServiceSlide,
} from "@/components/asset-components/slider-services"

const services: ServiceSlide[] = [
  {
    icon: Smartphone,
    title: "Social Media Marketing mit KI-Power",
    href: "/social-media-marketing",
    features: [
      { icon: Rocket, text: "Automatisierte Reichweite" },
      { icon: Brain, text: "Content Strategie mit KI-Boost" },
    ],
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    href: "/performance-marketing",
    features: [
      { icon: TrendingUp, text: "Marketing-ROI Optimierung" },
      { icon: Target, text: "Facebook Ads" },
    ],
  },
  {
    icon: Video,
    title: "High-End Videoproduktion",
    href: "/videoproduktion",
    features: [
      { icon: Play, text: "Professionelle Videoproduktion" },
      { icon: Camera, text: "High-End Kamera-Equipment" },
    ],
  },
  {
    icon: Laptop,
    title: "Website-Erstellung",
    href: "/website-erstellung",
    features: [
      { icon: PanelsTopLeft, text: "Professionelle Website" },
      { icon: TextSearch, text: "SEO-Optimierung" },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="section-spotlight section-spotlight--teal border-t border-white/10 py-20 ">
      <div className="container mx-auto px-5 sm:max-w-md sm:px-6 md:max-w-6xl">
        <div className="flex min-h-[100svh] flex-col justify-center">
          {/* Section Title */}
          <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Unsere Services:
          </h2>

          <div className="mx-auto max-w-sm sm:hidden">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/15 bg-[#050a14]/95 p-8 transition duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] focus-within:scale-[1.02] focus-within:border-white/25 focus-within:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 text-[var(--color-accent-teal)] stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg md:text-xl font-bold mb-6 leading-tight">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-1 flex-col gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <feature.icon className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm leading-relaxed">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      href={service.href}
                      className="text-sm font-medium text-white/75 transition-colors group-hover:text-[#00ffc4] group-focus-within:text-[#00ffc4] focus-visible:text-[#00ffc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffc4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14] after:absolute after:inset-0 after:content-['']"
                    >
                      <span className="relative z-10 inline-flex items-center gap-2">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:block md:hidden sm:mx-auto sm:max-w-6xl">
            <ServicesSlider slides={services} />
          </div>

          <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-6 md:grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center rounded-2xl border border-white/15 bg-[#050a14]/95 p-8 transition duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] focus-within:scale-[1.02] focus-within:border-white/25 focus-within:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-[var(--color-accent-teal)] stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-bold mb-6 leading-tight">
                  {service.title}
                </h3>

                {/* Features */}
                <div className="flex flex-1 flex-col gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm leading-relaxed">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={service.href}
                    className="text-sm font-medium text-white/75 transition-colors group-hover:text-[#00ffc4] group-focus-within:text-[#00ffc4] focus-visible:text-[#00ffc4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffc4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a14] after:absolute after:inset-0 after:content-['']"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
