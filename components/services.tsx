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
} from "lucide-react"

const services = [
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
]

export function Services() {
  return (
    <section id="services" className="mt-10 border-t border-white/10 py-20 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Unsere Services:
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1d3a]/80 border border-[#2a2d4a] rounded-2xl p-8 flex flex-col transition duration-300 hover:scale-[1.02] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] focus-within:scale-[1.02] focus-within:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-[#5b8def] stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-bold mb-6 leading-tight">
                {service.title}
              </h3>

              {/* Features */}
              <div className="flex flex-col gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href={service.href}
                  className="text-sm font-medium text-white/75 transition-colors group-hover:text-[#8daeff] group-focus-within:text-[#8daeff] focus-visible:text-[#8daeff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8daeff]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1d3a] after:absolute after:inset-0 after:content-['']"
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
    </section>
  )
}
